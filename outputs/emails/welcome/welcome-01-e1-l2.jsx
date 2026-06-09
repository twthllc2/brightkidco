/* Welcome Flow — E1 | L2
   Wireframe: wireframes/welcome/welcome-01-e1-l2.md
   Strategy: strategy-map.json → welcome.emails.e1-l2
   Generated: 2026-06-09
*/

const Email_Welcome_E1_L2 = () => (
  <EmailShell
    preheader="The signal from bladder to brain doesn't arrive the way traditional methods assume. It's not training. It's neurology."
    bg="#FDF8F4"
  >
    {/* ── Header ── */}
    <Header bg="#FDF8F4" />

    {/* ══════ SPLIT HERO: HERO-16 Mechanism Tease ══════ */}
    <div style={{ padding: "34px 22px 0", display: "flex", gap: 20, alignItems: "center" }}>
      {/* Signal Bridge SVG */}
      <div style={{ flexShrink: 0, width: 120, height: 120 }}>
        <svg viewBox="0 0 120 120" width="120" height="120" style={{ display: "block" }}>
          {/* Brain icon */}
          <circle cx="30" cy="60" r="18" fill="none" stroke="#C44536" strokeWidth="2.5" />
          <path d="M22,52 Q22,42 30,42 Q38,42 38,52" fill="none" stroke="#C44536" strokeWidth="2" strokeLinecap="round" />
          <path d="M22,60 Q22,70 30,70 Q38,70 38,60" fill="none" stroke="#C44536" strokeWidth="2" strokeLinecap="round" />
          {/* Signal path — dashed connecting line */}
          <line x1="48" y1="60" x2="72" y2="60" stroke="#C44536" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6,4" />
          {/* Bladder icon */}
          <ellipse cx="90" cy="60" rx="14" ry="18" fill="none" stroke="#C44536" strokeWidth="2.5" />
          <path d="M84,42 Q84,36 90,36 Q96,36 96,42" fill="none" stroke="#C44536" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      {/* Headline */}
      <div>
        <div style={{
          fontSize: 14, fontWeight: 700, letterSpacing: 1.2,
          textTransform: "uppercase", color: "#3D405B", marginBottom: 10,
          fontFamily: "Inter, sans-serif",
        }}>
          Welcome
        </div>
        <h1 style={{
          fontSize: 26, lineHeight: 1.3, fontWeight: 700, margin: 0,
          letterSpacing: -0.5, color: "#C44536",
          fontFamily: "Inter, sans-serif",
        }}>
          Why every method failed,<br />neurology, not effort
        </h1>
      </div>
    </div>

    {/* ══════ VALIDATION: LETTER-03 — Letter + Pull-Quote ══════ */}
    <div style={{ padding: "32px 24px 28px" }}>
      <div style={{
        fontSize: 14, fontWeight: 700, letterSpacing: 1.2,
        textTransform: "uppercase", color: "#3D405B", marginBottom: 14,
        fontFamily: "Inter, sans-serif",
      }}>
        The problem isn't effort
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        You've tried the BCBA protocol, OT sensory work, social stories, sticker charts, timer sits, the special seat, the potty watch, the reward system with the preferred toy. You've read the books. You've read the blogs. You've asked in the Facebook groups. You've asked the BCBA. You've asked the pediatrician.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontWeight: 700, fontFamily: "Georgia, serif" }}>
        Nothing changed.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        I know that sentence lands heavy. I want you to sit with it for a second, not because nothing changed, but because of what that actually means.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        It's not that you didn't try hard enough.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        I need you to hear that clearly, because I know what's running through your head right now. You're thinking: <em>If I had just been more consistent. If I had started earlier. If I had found the right method.</em>
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        That's the story every parent in your position tells themselves. And every single time, it's wrong.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        The real problem isn't your effort. It's not his compliance. It's not your consistency or your patience or your timing.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: 0, fontFamily: "Georgia, serif" }}>
        It's that every method you tried, every single one, assumed your child can <strong>feel</strong> when they need to go. That's what I need you to understand.
      </p>
    </div>

    {/* ══════ SCIENCE CALL-OUT: EDU-8 — Mechanism Diagram ══════ */}
    <div style={{
      margin: "0 22px 32px",
      padding: "16px 20px 16px 40px",
      borderLeft: "2px solid #C44536",
      background: "rgba(232, 213, 196, 0.3)",
    }}>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 12px", fontFamily: "Georgia, serif" }}>
        The "I need to go" signal is a body signal — a neurological message from bladder to brain. For many autistic children, that message doesn't arrive in time, or at all.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: 0, fontFamily: "Georgia, serif" }}>
        Research confirms this is <strong>neurology, not training</strong>. A landmark 49-study review confirmed body signal differences are a well-established feature of autism. Your child's brain and bladder are sending messages on different frequencies. Every method you tried assumed the signal was there. It wasn't. You weren't failing — you were working with the wrong map.
      </p>
      <p style={{ fontSize: 13, lineHeight: 1.4, color: "#6B6B7B", fontStyle: "italic", margin: "12px 0 0", fontFamily: "Georgia, serif" }}>
        Nicholson et al. 2019 · Barmpagiannis &amp; Baldimtsi 2025
      </p>
    </div>

    {/* ══════ SOCIAL PROOF: SP-02 — Expert Endorsement ══════ */}
    <div style={{ padding: "0 24px 32px" }}>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
        Here's what one L2 parent told us after finding this explanation:
      </p>
      <blockquote style={{
        margin: "0 0 20px", padding: "12px 16px",
        borderLeft: "2px solid #C44536", background: "#FDF8F4",
      }}>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", fontStyle: "italic", margin: 0, fontFamily: "Georgia, serif" }}>
          "He communicates fine about everything ELSE but cannot tell me he needs to pee. If I could just get him the signal, I know the rest would follow."
        </p>
      </blockquote>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
        That's not a parenting failure. That's a parent who has been fighting the wrong war with the right tools.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 12px", fontFamily: "Georgia, serif" }}>
        Another parent, after 2.5 years of trying everything:
      </p>
      <blockquote style={{
        margin: "0 0 20px", padding: "12px 16px",
        borderLeft: "2px solid #C44536", background: "#FDF8F4",
      }}>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", fontStyle: "italic", margin: 0, fontFamily: "Georgia, serif" }}>
          "We tried on and off for probably three years. Nothing worked until we understood it was a body signal problem, not a behavior problem."
        </p>
      </blockquote>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: 0, fontFamily: "Georgia, serif" }}>
        These aren't isolated stories. They're the pattern every L2 family experiences. The common thread is not the child's willingness, it's the missing signal.
      </p>
    </div>

    {/* ══════ 20.2 — Dot Pattern Divider ══════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: "8px 0 32px" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F2EDE6" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F2EDE6" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F2EDE6" }} />
    </div>

    {/* ══════ PRODUCT INTRO TEXT ══════ */}
    <div style={{ padding: "0 24px 20px" }}>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        BrightKidCo exists because every method started from the wrong assumption: that your child can feel the body signal. We designed a system that starts from what's actually true.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        The body-signal underwear, a three-layer training underwear system, doesn't teach your child to sit on a potty. It teaches their <strong>brain to feel the signal.</strong> Layer 1 uses a gentle sensation that lasts, not a shock, not an alarm, that gives the brain time to register: <em>something happened.</em> For a nervous system that picks up signals slowly, 30-60 seconds of feedback is the difference between "I didn't notice" and "I felt something."
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: 0, fontFamily: "Georgia, serif" }}>
        This not an overnight solution. We don't promise quick. But it is a different approach, built on a different understanding of what's actually happening in your child's body.
      </p>
    </div>

    {/* ══════ PRODUCT SHOWCASE: ProductShowcaseMedium ══════ */}
    <ProductShowcaseMedium
      eyebrow="The body-signal approach"
      title="Body-Signal Learning Layer™"
      priceFrom="€34"
      ctaButton="See the pants"
    />

    {/* ══════ REALISTIC TIMELINE ══════ */}
    <div style={{ padding: "22px 22px" }}>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontWeight: 700, fontFamily: "Georgia, serif" }}>
        What this looks like in real life:
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        For Level 2 children, where sensory processing differences are more pronounced and the interoception gap is wider, parents typically see the first signs of body awareness within 2-4 weeks of consistent use. That might be a pause. A look down. A single step toward the bathroom after an accident. That's not training. That's the brain receiving a signal it never got before.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        Full awareness development usually takes 8-12 weeks. Some children take longer. That's not failure, that's the range of normal for children whose nervous systems process signals differently.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: 0, fontFamily: "Georgia, serif" }}>
        We're not selling overnight success. We're selling a signal your child's brain can actually receive.
      </p>
    </div>

    {/* ══════ GUARANTEE: TRUST-1 — 60-Day Seal ══════ */}
    <div style={{
      margin: "0 22px 32px", padding: 20,
      border: "2px solid #2C5F5A", borderRadius: 8,
      background: "rgba(232, 213, 196, 0.3)",
    }}>
      <h3 style={{
        fontSize: 18, fontWeight: 700, color: "#2C5F5A",
        margin: "0 0 12px", fontFamily: "Inter, sans-serif",
      }}>
        Try it for 60 days. By your judgment.
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 12px", fontFamily: "Georgia, serif" }}>
        Not by some arbitrary timeline. Not by a checklist. Your judgment about whether this approach fits your child, that's the only metric that matters.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: 0, fontFamily: "Georgia, serif" }}>
        If it doesn't work for your family, full refund. No forms. No hoops. No "did you try hard enough?" guilt. You decide.
      </p>
    </div>

    {/* ══════ CTA: CTA-3 — Curiosity Code ══════ */}
    <div style={{ background: "#FFFFFF", padding: "22px 22px 32px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block", padding: "14px 36px",
        background: "#C44536", color: "#FFFFFF",
        fontSize: 16, fontWeight: 700, letterSpacing: 0.3,
        textDecoration: "none", borderRadius: 6,
        fontFamily: "Inter, sans-serif",
      }}>
        Try Our 60-Day Approach, Start with the 3+3 Bundle →
      </a>
      <div style={{ marginTop: 16 }}>
        <a href="#" style={{
          fontSize: 14, fontWeight: 700, color: "#2C5F5A",
          textDecoration: "none", borderBottom: "1.5px solid #2C5F5A",
          paddingBottom: 2, fontFamily: "Georgia, serif",
        }}>
          Or browse our sizing guide to see if BKC fits your child
        </a>
      </div>
      <div style={{ marginTop: 12, fontSize: 12, color: "#6B6B7B", fontFamily: "Georgia, serif" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </div>
    </div>

    {/* ══════ PERMISSION-NOT-TO-BUY ══════ */}
    <div style={{ padding: "0 24px 28px" }}>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        This email might not be for you right now. Maybe you're not ready to try something new. Maybe you need to sit with this information for a few days. Maybe thisn't where your child is yet.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontWeight: 700, fontFamily: "Georgia, serif" }}>
        That's okay.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        This approach isn't going anywhere. It's not a limited-time offer. It's a different way of understanding what your child is experiencing, and that understanding doesn't expire.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D405B", margin: 0, fontFamily: "Georgia, serif" }}>
        If today isn't the day, save this email. Come back when you're ready.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6B6B7B", fontStyle: "italic", marginTop: 14, fontFamily: "Georgia, serif" }}>
        Next time: Why the methods you tried couldn't work — and what actually can.
      </p>
    </div>

    {/* ══════ EASTER EGG ══════ */}
    <div style={{ padding: "8px 24px 0", textAlign: "right" }}>
      <span style={{ fontSize: 12, color: "#6B6B7B", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
        ≈/≈ Signal clarity: building...
      </span>
    </div>

    {/* ── Signoff ── */}
    <Signoff />

    {/* ── OutLine + Footer ── */}
    <OutLine />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E1_L2 });
