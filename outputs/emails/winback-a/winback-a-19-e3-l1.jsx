/* Winback Path A — E3 | Level 1 (Sarah)
   Wireframe: wireframes/winback-a/winback-a-19-e3-l1.md
   Copy: copy/winback-a/winback-a-19-e3-l1.md
   Strategy: strategy-map.json → flows.winback-a.emails.e3-l1
   Generated: 2026-06-09
*/

const Email_winback_a_19_e3_l1 = () => (
  <EmailShell preheader="It's been a while. If your child is verbal, smart, and still not feeling the signal, here's why that's not defiance. And why you still have time." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ width: "100%", height: 36, background: "#FBF7F1", padding: "8px 30px", fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.4, color: "#8A9B9D", textAlign: "left" }}>
      It's been a while. If your child is verbal, smart, and still not feeling the signal, here's why that's not defiance. And why you still have time.
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
       SECTION 3: HERO — HERO-10 Bold Declaration
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px 24px" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, fontFamily: F.main, marginBottom: 16 }}>
        DAY 14 · FINAL TOUCH
      </div>

      {/* Hero Image */}
      <div style={{ width: "100%", marginBottom: 24 }}>
        <ImgFrame height={200} label="Hero Product" sublabel="BrightKidCo training pants — unicorn pink, clean flat-lay" radius={16} />
      </div>

      {/* Heading — verbatim */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 16px" }}>
        Pre-K is coming, here's the gap you can still close
      </h1>

      {/* Subhead — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        It's been a while. If your child is verbal, smart, and still not feeling the signal, here's why that's not defiance. And why you still have time.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-8 — Icon Story (Pre-K themed)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "20px 30px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, alignItems: "center" }}>
        {/* Backpack icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2BAEB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18 L6 8a6 6 0 0 1 12 0v10" />
          <rect x="4" y="10" width="16" height="12" rx="2" />
          <circle cx="12" cy="15" r="1" />
        </svg>
        {/* Clock icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2BAEB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        {/* School icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2BAEB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M12 3l9 7-9 7-9-7z" />
          <path d="M6 21v-7M18 21v-7" />
        </svg>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-02 — Hook (Handwritten Opener)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568" }}>
      {/* Paragraph 1 — verbatim */}
      <p style={{ margin: "0 0 16px" }}>
        It's been a while since we last talked. I know that doesn't mean you've stopped trying, it probably means you've been living in that place between hope and exhaustion where most parents of verbal autistic kids spend their days.
      </p>

      {/* Paragraph 2 — verbatim */}
      <p style={{ margin: "0 0 16px" }}>
        Your child talks. He's smart. He knows his letters, can count, charms everyone at the playground. But potty training? Something isn't clicking. He has good days and bad days. Sometimes he tells you after the fact. Sometimes he doesn't seem to notice at all.
      </p>

      {/* Paragraph 3 — verbatim */}
      <p style={{ margin: "0 0 16px" }}>
        If that sounds familiar, here's what I want to say, in plain terms.
      </p>

      {/* Paragraph 4 — verbatim, with bold */}
      <p style={{ margin: 0 }}>
        It's not defiance. It's not motivation. It's not that you haven't tried hard enough. It's a <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>signal-timing gap</strong>, his nervous system processes the body signal, but the message arrives a few seconds too late. By the time he <em>feels</em> the need to go, it's already happening.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: LETTER-02 — Validation (Absolve the Guilt)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568" }}>
      {/* Intro — verbatim */}
      <p style={{ margin: "0 0 20px" }}>
        I want to name something that rarely gets said out loud:
      </p>

      {/* Pull-Quote Card — L1 recognition marker */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #2BAEB4", borderRadius: 20, padding: 24, margin: "0 0 20px" }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontStyle: "italic", fontWeight: 400, lineHeight: 1.4, color: "#1F2D2F", margin: 0 }}>
          "He gets it, but he doesn't get it."
        </p>
      </div>

      {/* Body — verbatim, with bold */}
      <p style={{ margin: "0 0 16px" }}>
        That sentence, the one that lives in your head and your search history, is not proof that something is wrong with your child or your parenting. It's proof that <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>normal potty training methods assume something your child can't do yet</strong>: feel the signal in time.
      </p>
      <p style={{ margin: "0 0 16px" }}>
        Sticker charts assume motivation will overcome the gap. Timer sits assume the body follows a predictable clock. The naked method assumes sensitivity will trigger awareness. All three assume the signal arrives on time.
      </p>
      <p style={{ margin: 0 }}>
        For a child whose nervous system processes body signals with a delay, none of those methods <em>could</em> have worked. Not because you did them wrong. Because they weren't designed for a brain that learns differently.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: EDU-3 — Pre-K Window + Mechanism
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "32px 30px", borderRadius: 20 }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 16 }}>
        THE PRE-K WINDOW
      </div>

      {/* Body — verbatim, with bold markers */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        Let me be direct with you, because you can hear this in a way other parents can't.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>Pre-K enrollment is a deadline.</strong> Many schools require daytime training before the first day. If your child is 4 or turning 4, you're looking at a window of months, not years.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        The good news: <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>the gap you're trying to close is actually smaller than it feels.</strong>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        Your child already has the cognitive piece, he understands the potty, he can communicate, he's shown moments of awareness. What he needs is the one piece standard methods leave out: <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>a way to feel the signal early enough to act on it.</strong>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
        The Body-Signal Learning Layer does one thing: it creates a gentle sensation that lasts the moment there's wetness, 30 to 60 seconds of feedback that gives the brain time to register <em>something happened.</em> Over weeks of consistent wear, that delay shrinks. The signal arrives earlier. And one day, it arrives in time.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        Not overnight. Not on a perfect schedule. But weeks, not years, and many parents see the first shift within 2–4 weeks of consistent daily wear.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: SP-02 — Expert Endorsement
                   (Pre-K Testimonial)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      {/* Testimonial Card — verbatim */}
      <div style={{ background: "#FBF7F1", borderLeft: "3px solid #5DD07A", borderRadius: 20, padding: 24 }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 16px", fontStyle: "italic" }}>
          "We started three months before Pre-K. The first two weeks, nothing. Week 3, he paused mid-play and looked down. That was the first time he'd ever noticed he was wet. By week 6, he was telling us before, sometimes just seconds before, but before. He started Pre-K on time, in underwear, with an extra set of clothes in his bag. It wasn't a straight line. But it started with that one pause."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: "0.05em", color: "#8A9B9D", margin: 0, textTransform: "uppercase" }}>
          — Sarah, mom of a verbal 4-year-old
        </p>
      </div>

      {/* Closing — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "20px 0 0" }}>
        That pause. That look down. That's not luck. That's the signal-timing gap starting to close. And it's the most common first sign parents of verbal kids report.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: PRODUCT SHOWCASE — FULL
       (3+3 Bundle with urgency framing)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      {/* Intro — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        If Pre-K is on your horizon, or even if it's still a few months out, the most important thing you can give your child right now is <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>consistent daily wear</strong>. Not 3 hours a week. Not just on weekends. Every day, for as many hours as your child will tolerate it.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        That's why most families start with the <strong style={{ fontWeight: 700, color: "#1F2D2F" }}>3+3 Bundle</strong>, six pairs in rotation so there's always a clean one ready. One in the wash, one in the drawer, one being worn. The nervous system gets more reps per day. The signal builds faster.
      </p>

      {/* Product Image */}
      <div style={{ width: "100%", marginBottom: 16 }}>
        <ImgFrame height={200} label="3+3 Bundle" sublabel="Toddler potty ladder — warm, natural-light setting" radius={16} />
      </div>

      {/* Product Details */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 4px" }}>
          3+3 Bundle
        </p>
        <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 700, color: "#2BAEB4", margin: "0 0 4px" }}>
          $79.99
        </p>

        {/* Savings Badge */}
        <div style={{ display: "inline-block", background: "#FBF7F1", border: "2px solid #5DD07A", borderRadius: 12, padding: "4px 12px", margin: "0 0 8px" }}>
          <span style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#5DD07A" }}>
            62% savings vs. single pairs
          </span>
        </div>

        <p style={{ fontFamily: F.main, fontSize: 14, color: "#8A9B9D", margin: "0 0 4px" }}>
          6 pairs total (buy 3, get 3 free) · Free Shipping
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, color: "#8A9B9D", margin: "0 0 4px" }}>
          60-day money-back guarantee
        </p>
      </div>

      {/* Secondary option — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "20px 0 8px" }}>
        Or if one pair is more realistic for your budget right now, that's okay too. The signal doesn't rush. Neither should you. The 60-day guarantee is there either way.
      </p>

      {/* Secondary Text Link */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, margin: 0 }}>
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline", fontWeight: 500 }}>
          Start with 1 pair for $34.99 →
        </a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: CTA-5 — Product CTA (Green Fill)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", textAlign: "center" }}>
      {/* Green Fill Button — CTA-5 */}
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        lineHeight: 1.4,
      }}>
        Explore the 3+3 Bundle →
      </a>

      {/* Subtext — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#8A9B9D", margin: "20px 0 0" }}>
        6 pairs · $79.99 · Free shipping · 60 days, your judgment
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: 1px RULE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ width: "60%", height: 1, background: "#E8E2DA", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: LENA SIGN-OFF — Long Variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px" }}>
      {/* Signoff — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        With care,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 600, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena ——
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, color: "#8A9B9D", margin: "0 0 20px" }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 17: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "20px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Update Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>
        60-day money-back guarantee · Free shipping on bundles · WELCOME10 auto-applies
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_a_19_e3_l1 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e3-l1"] = Email_winback_a_19_e3_l1;
