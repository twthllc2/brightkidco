/* Welcome Flow — E1 | Level 3 — Maria
   Wireframe: wireframes/welcome/welcome-01-e1-l3.md
   Strategy: strategy-map.json → welcome.emails.e1-l3
   Generated: 2026-06-09
*/

const Email_Welcome_E1_L3 = () => (
  <EmailShell preheader="He's never shown a sign of feeling wet. That's not failure, it's neurology." bg="#FAF8F5">

    {/* ──── Masthead ──── */}
    <div style={{
      background: "#FAF8F5", padding: "56px 24px 0", textAlign: "center",
      position: "relative",
    }}>
      <div style={{
        fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
        textTransform: "lowercase", color: "#3A3530", opacity: 0.6,
      }}>
        Lena S. — BrightKidCo
      </div>
      {/* Signal Dot #1: 8px, 15% opacity */}
      <div style={{
        position: "absolute", top: 56, right: 24,
        width: 8, height: 8, borderRadius: "50%",
        background: "#D4C5B2", opacity: 0.15,
      }} />
    </div>

    {/* ──── HERO-9: Whisper Tone (50/50 split) ──── */}
    <div style={{
      padding: "48px 24px", position: "relative", overflow: "hidden",
    }}>
      {/* Watercolor circle: 600px, #D4C5B2 at 8% opacity, bleeding off right edge */}
      <div style={{
        position: "absolute", top: -120, right: -180,
        width: 600, height: 600, borderRadius: "50%",
        background: "#D4C5B2", opacity: 0.08,
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{
          fontFamily: "'Lausanne', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 24, lineHeight: 1.3, fontWeight: 300,
          letterSpacing: "0.02em", color: "#2B2724", margin: 0,
        }}>
          He's never shown a sign of feeling wet or dirty in all these years. You've stopped counting the attempts.
        </h1>
      </div>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "24px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.5 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D4C5B2" strokeWidth="0.5" fill="none" />
      </svg>
    </div>

    {/* ──── Validation: LETTER-07 Greeting Card ──── */}
    <div style={{ padding: "48px 24px" }}>
      <div style={{
        fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
        textTransform: "lowercase", color: "#B8A99A", marginBottom: 16,
      }}>
        the nervous system
      </div>
      <div style={{
        marginLeft: 60, fontSize: 17, lineHeight: 1.6,
        letterSpacing: "0.01em", color: "#3A3530",
      }}>
        <p style={{ margin: "0 0 14px" }}>
          That's not failure. That's his nervous system processing body signals differently. He's doing the best his body allows.
        </p>
        <p style={{ margin: "0 0 14px" }}>
          Every product, every method, every gentle suggestion from a well-meaning relative, they all assumed one thing: that he can feel the signal from his body when he needs to go. That he experiences that familiar "uh-oh, I need to get to a toilet" feeling that training methods are built around.
        </p>
        <p style={{ margin: "0 0 14px" }}>
          If his nervous system receives that signal differently, or doesn't receive it at all, then no sticker chart, no timer sit, no three-day method could ever work. Not because you didn't try hard enough. Because the method was solving a problem your child doesn't have.
        </p>
        <p style={{ margin: 0, fontStyle: "italic" }}>
          I live each day between hopelessness, and holding on to any drop of hope.
        </p>
      </div>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "24px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.5 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D4C5B2" strokeWidth="0.5" fill="none" />
      </svg>
    </div>

    {/* ──── Mechanism: EDU-1 Definition Block ──── */}
    <div style={{ padding: "0 24px 48px", position: "relative" }}>
      <div style={{
        fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
        textTransform: "lowercase", color: "#B8A99A", marginBottom: 16,
      }}>
        the mechanism
      </div>
      <div style={{ position: "relative", paddingLeft: 20 }}>
        {/* Vertical indicator line: 2px, #B8A99A at 60% opacity */}
        <div style={{
          position: "absolute", left: 8, top: 0, bottom: 0,
          width: 2, background: "#B8A99A", opacity: 0.6,
        }} />
        {/* Signal Dot #2: 12px, #A8B5A0 at 30% opacity */}
        <div style={{
          position: "absolute", left: -24, top: "40%",
          width: 12, height: 12, borderRadius: "50%",
          background: "#A8B5A0", opacity: 0.3,
        }} />
        <div style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530" }}>
          <p style={{ margin: "0 0 14px" }}>
            Body signal differences in autism are real and measurable. A 2025 systematic review of 49 studies confirmed that autistic children process internal body signals differently — this is settled science, not a theory.
          </p>
          <p style={{ margin: 0 }}>
            The signal from bladder to brain doesn't arrive the way traditional methods assume. For many children with high support needs, the body signal is so faint or delayed that the brain doesn't register it until well after the event. Over 90% of autistic children have sensory processing differences. This is how his nervous system works.
          </p>
        </div>
      </div>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "24px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.5 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D4C5B2" strokeWidth="0.5" fill="none" />
      </svg>
    </div>

    {/* ──── Social Proof: TRUSTDEEP-15 The Honest Negative ──── */}
    <div style={{ padding: "48px 24px" }}>
      <div style={{
        fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
        textTransform: "lowercase", color: "#B8A99A", marginBottom: 16,
      }}>
        what the science says
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530", margin: "0 0 24px" }}>
        Here's what the science says about children like yours:
      </p>

      {/* Stat 1: 49% */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: "'Lausanne Display', 'Helvetica Neue', sans-serif",
          fontSize: 48, fontWeight: 200, letterSpacing: "-0.02em",
          color: "#3A3530", lineHeight: 1, marginBottom: 8,
        }}>
          49%
        </div>
        <div style={{ fontSize: 14, color: "#3A3530", opacity: 0.7, lineHeight: 1.5 }}>
          of autistic 4-5 year olds are not yet toilet trained (Wiggins et al., 2022, CDC-funded study of 743 children). That is 6 times the rate of typically developing children.
        </div>
      </div>
      <div style={{ width: "50%", height: 0.5, background: "#A8B5A0", opacity: 0.4, marginBottom: 24 }} />

      {/* Stat 2: 3.3 years */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: "'Lausanne Display', 'Helvetica Neue', sans-serif",
          fontSize: 48, fontWeight: 200, letterSpacing: "-0.02em",
          color: "#3A3530", lineHeight: 1, marginBottom: 8,
        }}>
          3.3 years
        </div>
        <div style={{ fontSize: 14, color: "#3A3530", opacity: 0.7, lineHeight: 1.5 }}>
          average time for autistic children to complete toilet training, compared to 2.3 years for typical children (Williams et al., 2003).
        </div>
      </div>
      <div style={{ width: "50%", height: 0.5, background: "#A8B5A0", opacity: 0.4, marginBottom: 24 }} />

      {/* Stat 3: 59% / 71% */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530" }}>
          <span style={{ fontWeight: 600 }}>59%</span> of autistic children cannot reliably communicate the need to urinate. <span style={{ fontWeight: 600 }}>71%</span> cannot communicate the need to defecation (Iqbal, 2022).
        </div>
      </div>
      <div style={{ width: "50%", height: 0.5, background: "#A8B5A0", opacity: 0.4, marginBottom: 24 }} />

      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530", fontStyle: "italic", margin: 0 }}>
        "I wish I had read something like this years ago."
      </p>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "24px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.5 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D4C5B2" strokeWidth="0.5" fill="none" />
      </svg>
    </div>

    {/* ──── Product Intro: ProductShowcaseSoft (adapted for L3 abstract layers) ──── */}
    <div style={{ padding: "8px 22px 20px" }}>
      <div style={{
        background: "#FFFDF6",
        border: "2px dashed #A8B5A0",
        borderRadius: 12,
        padding: 18,
        position: "relative",
      }}>
        <div style={{
          fontSize: 10, letterSpacing: "1.3px", textTransform: "uppercase",
          color: "#A8B5A0", fontWeight: 700, marginBottom: 12,
        }}>
          designed around this gap
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530", margin: "0 0 16px" }}>
          The Body-Signal Learning Layer is a three-layer training underwear system designed for exactly this gap.
        </p>

        {/* Abstract layer diagram: three horizontal lines with labels */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ flex: 1, height: 3, background: "#A8B5A0", borderRadius: 2 }} />
            <div style={{ fontSize: 13, color: "#3A3530", whiteSpace: "nowrap" }}>Layer 1 · Inner Body-Signal Layer</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ flex: 1, height: 3, background: "#A8B5A0", borderRadius: 2 }} />
            <div style={{ fontSize: 13, color: "#3A3530", whiteSpace: "nowrap" }}>Layer 2 · Smart Absorption Core</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 3, background: "#A8B5A0", borderRadius: 2 }} />
            <div style={{ fontSize: 13, color: "#3A3530", whiteSpace: "nowrap" }}>Layer 3 · Protective Outer Barrier</div>
          </div>
        </div>

        <div style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530" }}>
          <p style={{ margin: "0 0 14px" }}>
            <strong>Layer 1, Inner Body-Signal Layer:</strong> Soft 100% cotton that creates a gentle "uh-oh" sensation when wet. Not soaked, not uncomfortable, just enough sensation for the nervous system to register: something happened.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            <strong>Layer 2, Smart Absorption Core:</strong> Absorbs wetness to protect furniture and floors, but does NOT wick moisture away from the skin. The signal stays present for 30-60 seconds, long enough for a deeply nervous system that picks up signals slowly to process it.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            <strong>Layer 3, Protective Outer Barrier:</strong> Leak-resistant. Not leak-proof. The small leak is intentional, it adds another layer of feedback.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            Think of it like training wheels for the body signal system. It doesn't change who your child is. It gives his brain information it's been missing.
          </p>
          <p style={{ margin: 0, fontStyle: "italic" }}>
            The mechanism logic is straightforward: Child pees → Child feels gentle "uh-oh" sensation → Brain connects "I peed" → "I feel it" → "I should use the potty" → Over time, awareness builds BEFORE the signal happens.
          </p>
        </div>

        {/* Easter Egg: Signal Path crescendo (desktop only, 1200px+) */}
        <div style={{
          position: "absolute", right: -12, top: 20,
          display: "flex", flexDirection: "column", gap: 6, opacity: 0.25,
        }}>
          <div style={{ width: 2, height: 2, borderRadius: "50%", background: "#A8B5A0" }} />
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#A8B5A0" }} />
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#A8B5A0" }} />
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#A8B5A0" }} />
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#A8B5A0" }} />
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A8B5A0" }} />
        </div>
      </div>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "24px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.5 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D4C5B2" strokeWidth="0.5" fill="none" />
      </svg>
    </div>

    {/* ──── Guarantee: TRUST-4 Dashed Policy Quote ──── */}
    <div style={{ padding: "48px 24px" }}>
      <div style={{
        background: "#F5F2ED",
        borderRadius: 12,
        padding: 40,
      }}>
        <p style={{
          fontSize: 18, fontWeight: 600, color: "#4A4540",
          margin: "0 0 16px", lineHeight: 1.4,
        }}>
          60 days. Your judgment.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530", margin: "0 0 14px" }}>
          Here's what that means: you try the Body-Signal Learning Layer alongside whatever you're already doing. You don't replace anything. You don't change your routine. You just add one element: underwear that provides the body signal your child's nervous system may be missing.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530", margin: "0 0 14px" }}>
          If after 60 days you see no change, no pause, no look down, no step toward the bathroom, you get every dollar back. No forms to fill. No return shipping to pay. Just a refund.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530", margin: 0, fontStyle: "italic" }}>
          The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on something as individual as your child's nervous system.
        </p>
      </div>
    </div>

    {/* ──── CTA: CT-2 Soft Link (left-aligned, zero urgency) ──── */}
    <div style={{ padding: "56px 24px", position: "relative" }}>
      {/* Signal Dot #3: 16px, #C4A88B at 40% opacity */}
      <div style={{
        position: "absolute", bottom: 56, right: 24,
        width: 16, height: 16, borderRadius: "50%",
        background: "#C4A88B", opacity: 0.4,
      }} />

      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: "#4A4540",
        color: "#FAF8F5",
        fontSize: 16, fontWeight: 500,
        letterSpacing: "0.04em",
        textDecoration: "none",
        borderRadius: 999,
        marginBottom: 16,
      }}>
        Explore the Body-Signal Learning Layer →
      </a>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3A3530", margin: "0 0 8px" }}>
        You decide what's right for your child. No pressure.
      </p>
      <p style={{ fontSize: 14, color: "#8A8580", margin: "0 0 8px" }}>
        1 Pair, $34.99, 60-Day Guarantee
      </p>
      <a href="#" style={{
        display: "inline-block", fontSize: 14, color: "#3A3530",
        textDecoration: "underline", textUnderlineOffset: 2,
      }}>
        Learn more about how it works →
      </a>
    </div>

    {/* ──── Next Time Teaser ──── */}
    <div style={{ padding: "0 24px 24px" }}>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3A3530", fontStyle: "italic", margin: 0 }}>
        Next time: Why the methods you tried couldn't work — and what actually can.
      </p>
    </div>

    {/* ──── Lena Signoff (SHORT variant for E1-E2) ──── */}
    <div style={{ padding: "24px 24px 48px" }}>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3A3530", margin: "0 0 14px" }}>
        Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3A3530", margin: "0 0 4px" }}>
        Talk soon,
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3A3530", margin: 0, fontWeight: 600 }}>
        Lena S., BrightKidCo
      </p>
    </div>

    {/* ──── Footer (simplified for L3) ──── */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 11, lineHeight: 1.6, color: "#8A8580" }}>
        <p style={{ margin: "0 0 4px" }}>BrightKidCo</p>
        <p style={{ margin: "0 0 4px" }}>123 Parent Support Lane</p>
        <p style={{ margin: "0 0 4px" }}>Austin, TX 78701</p>
        <p style={{ margin: "0 0 12px" }}>United States</p>
        <p style={{ margin: "0 0 4px" }}>
          No longer want these emails? <a href="#" style={{ color: "#3A3530", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#3A3530", textDecoration: "underline" }}>Manage Preferences</a>
        </p>
        <p style={{ margin: 0, fontSize: 12, color: "#4A4A4A" }}>
          Reply to this email, Lena reads every response.
        </p>
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E1_L3 });
