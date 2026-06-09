/* Winback Path A — E3 (Day 14) | Level 2 (Lisa)
   Wireframe: wireframes/winback-a/winback-a-19-e3-l2.md
   Strategy: strategy-map.json → flows.winback-a.emails.e3-l2
   Generated: 2026-06-09
*/

const Email_winback_a_19_e3_l2 = () => (
  <EmailShell preheader="The interoception pathway takes time. Here's what the science says about getting it right." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "8px 30px", borderBottom: "none" }}>
      <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.4, color: "#8A9B9D", textAlign: "left" }}>
        The interoception pathway takes time. Here's what the science says about getting it right.
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", borderBottom: "1px solid #E8E2DA", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-16 Mechanism Tease
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px 24px" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, fontFamily: F.main, marginBottom: 24, textAlign: "left" }}>
        DAY 14 · FINAL CHECK-IN
      </div>

      {/* Hero Image — framed product flat-lay */}
      <div style={{ width: 420, maxWidth: "100%", margin: "0 auto 32px", borderRadius: 16, overflow: "hidden", border: "3px solid #1F2D2F", boxShadow: "6px 6px 0 #1F2D2F" }}>
        <ImgFrame height={180} radius={0} label="Product Flat-Lay" sublabel="swim-diaper-whale-ocean-blue.jpg — 420×180" />
      </div>

      {/* Heading */}
      <h1 style={{ fontFamily: F.main, fontSize: 26, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.01, color: "#1F2D2F", margin: "0 0 16px" }}>
        If it didn't click, here's what we'd try differently
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        The interoception pathway takes time. Here's what the science says about getting it right.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-16 — Paper Texture
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "100%", height: 8, background: "transparent" }}>
      <div style={{ width: "100%", height: 1, background: "#E8E2DA", margin: "3px 0" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-01 — Hook
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        You bought the Body-Signal underwear 90 days ago. Maybe your child wore them a few times. Maybe you put them aside after a week. Maybe you're reading this thinking, "Yeah, it didn't click."
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        I hear that from L2 parents every day.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        The underwear went on. Nothing obvious changed. The accident still happened. The prompt-dependency was still there. He sat when you brought him, never on his own. Maybe you even thought, "This just another thing that didn't work."
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Let me tell you why that might have happened, and why it doesn't mean it won't work.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: EDU-8 — Mechanism Diagram
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "32px 30px", borderRadius: 16 }}>
      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, fontFamily: F.main, marginBottom: 10 }}>
        THE INTEROCEPTION PATHWAY
      </div>

      {/* Body — mechanism specificity */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        The Body-Signal Learning Layer works by giving the nervous system a sustained, gentle sensation, 30-60 seconds of feedback when the body releases. For a child whose interoception is slow to pick up signals, that's the FIRST time the brain gets clear information that something happened.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        But here's the piece a lot of parents miss: <span style={{ fontWeight: 700, color: "#1F2D2F" }}>the interoception pathway takes time to build.</span>
      </p>

      {/* Mechanism Diagram — Flow chart */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 24, marginBottom: 20 }}>
        <svg width="100%" height="220" viewBox="0 0 360 220" preserveAspectRatio="xMidYMid meet">
          {/* Row 1 */}
          <rect x="10" y="10" width="160" height="44" rx="8" fill="#FBF7F1" stroke="#2BAEB4" strokeWidth="1.5" />
          <text x="90" y="37" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1F2D2F" fontFamily="Helvetica, Arial, sans-serif">Wetness Event</text>

          <line x1="170" y1="32" x2="195" y2="32" stroke="#2BAEB4" strokeWidth="1.5" />
          <polygon points="195,28 205,32 195,36" fill="#2BAEB4" />

          <rect x="205" y="10" width="145" height="44" rx="8" fill="#FBF7F1" stroke="#2BAEB4" strokeWidth="1.5" />
          <text x="278" y="37" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1F2D2F" fontFamily="Helvetica, Arial, sans-serif">30-60s feedback</text>

          {/* Row 2 */}
          <line x1="90" y1="54" x2="90" y2="78" stroke="#2BAEB4" strokeWidth="1.5" />
          <polygon points="86,78 90,88 94,78" fill="#2BAEB4" />

          <line x1="278" y1="54" x2="278" y2="78" stroke="#2BAEB4" strokeWidth="1.5" />
          <polygon points="274,78 278,88 282,78" fill="#2BAEB4" />

          <rect x="10" y="88" width="160" height="44" rx="8" fill="#FBF7F1" stroke="#2BAEB4" strokeWidth="1.5" />
          <text x="90" y="115" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1F2D2F" fontFamily="Helvetica, Arial, sans-serif">Brain receives signal</text>

          <line x1="170" y1="110" x2="195" y2="110" stroke="#2BAEB4" strokeWidth="1.5" />
          <polygon points="195,106 205,110 195,114" fill="#2BAEB4" />

          <rect x="205" y="88" width="145" height="44" rx="8" fill="#FBF7F1" stroke="#2BAEB4" strokeWidth="1.5" />
          <text x="278" y="115" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1F2D2F" fontFamily="Helvetica, Arial, sans-serif">Pathway builds</text>

          {/* Row 3 */}
          <line x1="90" y1="132" x2="90" y2="156" stroke="#2BAEB4" strokeWidth="1.5" />
          <polygon points="86,156 90,166 94,156" fill="#2BAEB4" />

          <line x1="278" y1="132" x2="278" y2="156" stroke="#2BAEB4" strokeWidth="1.5" />
          <polygon points="274,156 278,166 282,156" fill="#2BAEB4" />

          <rect x="10" y="166" width="160" height="44" rx="8" fill="#2BAEB4" fillOpacity="0.1" stroke="#2BAEB4" strokeWidth="1.5" />
          <text x="90" y="193" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1F2D2F" fontFamily="Helvetica, Arial, sans-serif">Signal registers</text>

          <line x1="170" y1="188" x2="195" y2="188" stroke="#2BAEB4" strokeWidth="1.5" />
          <polygon points="195,184 205,188 195,192" fill="#2BAEB4" />

          <rect x="205" y="166" width="145" height="44" rx="8" fill="#2BAEB4" fillOpacity="0.1" stroke="#2BAEB4" strokeWidth="1.5" />
          <text x="278" y="193" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1F2D2F" fontFamily="Helvetica, Arial, sans-serif">Awareness grows</text>

          {/* Timeline note */}
          <text x="180" y="216" textAnchor="middle" fontSize="10" fill="#8A9B9D" fontStyle="italic" fontFamily="Helvetica, Arial, sans-serif">Timeline: 2-4 weeks for first shift</text>
        </svg>
      </div>

      {/* Citation */}
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.5, color: "#8A9B9D", fontStyle: "italic", margin: "0 0 16px" }}>
        Nicholson et al. (2019) found that interoception difficulties in autistic children are strongest in childhood, and that early, consistent feedback is how the brain learns to register the signal. An 8-week pilot study (Hample, Mahler &amp; Amspacher, 2020) showed that when autistic children received structured body-signal practice, their awareness measurably improved.
      </p>

      {/* Internal data */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        The underwear creates that practice. But it needs <span style={{ fontWeight: 700, color: "#1F2D2F" }}>consistent wear</span>, 2+ hours daily, not once in a while. Our internal data (N=672) shows that kids who wear them daily for 2+ hours show <span style={{ fontWeight: 700, color: "#1F2D2F" }}>82% clearer awareness</span> within 2-4 weeks. Kids who wear them sporadically? The nervous system never had enough repetitions to build the pathway.
      </p>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        If you stopped after a week, your child's brain hadn't received enough signal repetitions to create a new body signal route. That's not a product failure. That's neurology.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: TRUSTDEEP-5 — BCBA/OT Acknowledgment
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, fontFamily: F.main, marginBottom: 10 }}>
        YOUR BCBA BUILT THE FOUNDATION
      </div>

      {/* Body */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        Your BCBA has built something real over 3-5 years of work: a behavioral foundation. Your child can sit when prompted, follow a schedule, respond to reinforcement. That's not wasted, it's essential.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        But ABA protocols teach <span style={{ fontWeight: 700, color: "#1F2D2F" }}>behavioral compliance</span>: sit when told, follow the schedule, respond to the reinforcer. They don't teach <span style={{ fontWeight: 700, color: "#1F2D2F" }}>body awareness</span>: feel the urge → initiate independently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 20px" }}>
        The Body-Signal underwear addresses the sensory piece that BCBA can't reach. It fills the gap between "sits when prompted" and "goes on his own." Your BCBA's work on compliance and routines was the foundation. This adds the sensory layer on top.
      </p>

      {/* BCBA Conversation Script Card */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #5DD07A", borderRadius: 16, padding: 24 }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
          If you're still working with your BCBA, I'd suggest a one-step conversation: "We tried the Body-Signal approach for a short period. I want to try it again, consistently this time, and bring you the data after 30 days." Most BCBAs respond well when you frame it as a measurable experiment.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: LETTER-01 — Realistic Timelines
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        If you try again, this time with consistency, here's what realistic looks like for L2:
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        <span style={{ fontWeight: 600, color: "#1F2D2F" }}>Weeks 1-4:</span> Child wears underwear 2-4 hours daily. First signs of awareness, a pause, a look down, a delayed reaction to an accident. These are NOT failures. They're the first signals reaching the brain.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        <span style={{ fontWeight: 600, color: "#1F2D2F" }}>Weeks 4-8:</span> Recognition improves. The "uh-oh" sensation starts registering. Accidents reduce from every time to some of the time.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        <span style={{ fontWeight: 600, color: "#1F2D2F" }}>Weeks 8-12+:</span> Some children begin partial initiation, not consistent, but it starts. Others need longer. <span style={{ fontWeight: 700, color: "#1F2D2F" }}>Regression cycles can happen.</span> Progress isn't linear, it's a nervous system learning a new sensory pathway.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        <span style={{ fontWeight: 700, color: "#1F2D2F" }}>We don't promise "trained in X weeks."</span> Every L2 nervous system is different. What we promise is that 12 weeks of consistent use gives the brain enough signal repetitions to determine whether this approach works for YOUR child.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PRODUCT-SHOWCASE-FULL — 3+3 Bundle
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        You already bought once. You believed enough to try. If it didn't click, that's a real outcome.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        Here's what I want you to know: the 60-day guarantee applies to every order. If you want to try again, a fresh pair, a different size, a bundle for more rotation days, the 60-day judgment resets. Try it. Judge it. Full refund if it doesn't work.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        Not "we'll make it right." Full refund. That's the only fair deal for a parent who's been burned by every other promise.
      </p>

      {/* Product Image */}
      <div style={{ width: 420, maxWidth: "100%", margin: "0 auto 20px", borderRadius: 16, overflow: "hidden", border: "2px solid #E8E2DA" }}>
        <ImgFrame height={200} radius={0} label="3+3 Bundle" sublabel="swim-diaper-whale-ocean-blue.jpg — 420×200" />
      </div>

      {/* Product Details */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 4px" }}>
          3+3 Bundle · $79.99 · Free Shipping
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568", margin: "0 0 4px" }}>
          6 pairs for rotation, best for consistency
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, color: "#8A9B9D", margin: "0 0 16px" }}>
          60-day money-back guarantee
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Or start with a single pair ($34.99) if you want to test without commitment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: LETTER-01 — Permission-Not-to-Buy
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        If today isn't your day to try again, that's a real answer. You've been carrying this for years. If you need to step back for another 3 months, 6 months, a year, the product will be here. The science will still be here. So will I.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        But if that tiny part of you wonders, "What if I just tried again, consistently this time?", the 3+3 Bundle ($79.99 with free shipping) is the most practical way to give the nervous system enough rotation days for consistent wear. Or start with a single pair ($34.99) if you want to test without commitment.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px", fontStyle: "italic" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        The 60-day judgment covers you either way.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CTA-4 — Gentle Invite
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 17,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        textAlign: "center",
      }}>
        Try again, 60 days, your judgment
      </a>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#2BAEB4", margin: "16px 0 0" }}>
        Start with 1 pair ($34.99)
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 11: LENA SIGN-OFF — Long Variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px", borderTop: "1px solid #E8E2DA" }}>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        With care,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: "0 0 16px" }}>
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "20px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
        {" · "}
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Update Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: 0 }}>
        60-day money-back guarantee · Free shipping on bundles · WELCOME10 auto-applies
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_a_19_e3_l2 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e3-l2"] = Email_winback_a_19_e3_l2;
