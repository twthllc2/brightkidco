/* Winback Path A — E1 | L2 (Lisa)
   Wireframe: wireframes/winback-a/winback-a-19-e1-l2.md
   Copy: copy/winback-a/winback-a-19-e1-l2.md
   Strategy: strategy-map.json → flows.winback-a.emails.e1-l2
   Generated: 2026-06-09
*/

const MW = 420;
const LOGO = "../assets/brightkidco-logo-v2.png";

/* ── L2 palette — muted sage/earth tones ── */
const L2 = {
  sage: "#7A8B6F",
  forestSage: "#6B8E6B",
  wheat: "#B8A88A",
  warmWhite: "#FDFBF9",
  charcoal: "#2D2A26",
  warmGrey: "#9A958F",
  sand: "#E0D8CF",
  sageGreen: "#7A9E7E",
  warmCream: "#F5F0EA",
  darkBg: "#2D2A26",
  darkCard: "#1F2A2C",
};

const Email_winback_a_19_e1_l2 = () => (
  <EmailShell preheader="90 days is enough to know if something isn't working. Here's the variable most L2 parents miss." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: L2.warmCream, padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontStyle: "italic", color: L2.warmGrey }}>
        90 days is enough to know if something isn't working. Here's the variable most L2 parents miss.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, color: L2.warmGrey, marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-16 Mechanism Tease
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: L2.sage, marginBottom: 16 }}>
        WINBACK · DAY 0
      </div>
      {/* Headline */}
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, lineHeight: 1.3, color: L2.charcoal, margin: "0 0 20px" }}>
        If it didn't click, here's what we'd try differently
      </h1>
      {/* Subhead */}
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.5, color: L2.warmGrey, margin: 0 }}>
        90 days ago you tried the Body-Signal approach. Maybe you saw nothing. Maybe your child wore the underwear for a day or two and rejected them.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-16 — THE PAPER TEXTURE
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 8, background: L2.warmCream }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER — Paragraph Stack (Hook)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 16px" }}>
        90 days ago you tried the Body-Signal approach. Maybe you saw nothing. Maybe your child wore the underwear for a day or two and rejected them. Maybe you tried for a few weeks, saw the same prompt-dependency pattern you've been living with for years, and put them in a drawer.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: 0 }}>
        If any of that sounds right, you're not wrong to feel like it didn't work. <strong>You've been burned by enough promises.</strong> But here's the piece most Level 2 parents don't hear, and the one thing I'd ask you to reconsider before closing the door.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER — Validation + BCBA Acknowledgment
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 16px" }}>
        Your BCBA has been working with your child for years, building the behavioral foundation, establishing routines, teaching compliance with the schedule. That work isn't wasted. ABA addresses the behavioral component of toileting.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 16px" }}>
        But there's a second component that behavioral protocols don't train: the sensory component. The ability to <em>feel</em> when you need to go.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 16px" }}>
        Interoception researcher Kelly Mahler calls it the "eighth sensory system", the sense that tells us when we're hungry, thirsty, or need the bathroom. For many autistic children, this sense works differently. The signal from the bladder travels up the vagus nerve, but the brain doesn't register it in time.
      </p>

      {/* Kelly Mahler Citation Card */}
      <div style={{ background: L2.warmCream, borderLeft: `3px solid ${L2.sage}`, borderRadius: 16, padding: 24, marginTop: 8 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 17, fontStyle: "italic", lineHeight: 1.5, color: L2.charcoal, margin: 0 }}>
          "For many autistic children, this sense works differently. The signal from the bladder travels up the vagus nerve, but the brain doesn't register it in time."
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: EDU-8 — Mechanism Diagram — Repetition Wave
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: L2.warmCream, padding: "44px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: L2.sage, marginBottom: 10 }}>
        THE CONSISTENCY VARIABLE
      </div>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 24px" }}>
        Here's the variable: consistency of wear. Not just trying the underwear, but wearing them daily for 2+ hours at a time.
      </p>

      {/* Repetition Wave SVG */}
      <div style={{ background: L2.warmCream, borderRadius: 16, padding: "20px 12px", marginBottom: 24 }}>
        <svg width="100%" height="110" viewBox="0 0 360 110" preserveAspectRatio="xMidYMid meet">
          {/* Wave A — intermittent, flat with fading ripples */}
          <polyline points="10,55 30,55 40,48 50,55 70,55 80,50 90,55 110,55 130,55 150,55"
            fill="none" stroke={L2.sage} strokeWidth="2" opacity="0.4" />
          <text x="80" y="78" textAnchor="middle" fontSize="10" fill={L2.warmGrey} fontFamily="Arial, Helvetica, sans-serif">
            Signal never builds
          </text>
          <text x="80" y="92" textAnchor="middle" fontSize="9" fill={L2.warmGrey} fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic">
            (intermittent wear)
          </text>

          {/* Wave B — consistent week 1-2, small building ripples */}
          <polyline points="130,55 140,48 150,55 160,48 170,55 180,46 190,55 200,44 210,55 220,42 230,55"
            fill="none" stroke={L2.sage} strokeWidth="2" opacity="0.7" />
          <text x="180" y="78" textAnchor="middle" fontSize="10" fill={L2.warmGrey} fontFamily="Arial, Helvetica, sans-serif">
            Small but consistent ripples
          </text>
          <text x="180" y="92" textAnchor="middle" fontSize="9" fill={L2.warmGrey} fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic">
            (consistent, week 1-2)
          </text>

          {/* Wave C — consistent week 4+, clear sustained sine wave */}
          <polyline points="240,55 250,42 260,55 270,42 280,55 290,40 300,55 310,38 320,55 330,36 340,55 350,34 355,55"
            fill="none" stroke={L2.sage} strokeWidth="2" opacity="1" />
          <text x="297" y="78" textAnchor="middle" fontSize="10" fill={L2.warmGrey} fontFamily="Arial, Helvetica, sans-serif">
            Clear, sustained sine wave
          </text>
          <text x="297" y="92" textAnchor="middle" fontSize="9" fill={L2.warmGrey} fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic">
            (consistent, week 4+)
          </text>
        </svg>
      </div>

      {/* Data Highlight Box */}
      <div style={{ border: `1px solid ${L2.forestSage}`, borderRadius: 16, padding: "24px 20px", textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: L2.forestSage, marginBottom: 6 }}>
          82% clearer awareness within 2-4 weeks
        </div>
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 13, color: L2.warmGrey }}>
          Internal data from 672 L2 families
        </div>
      </div>

      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 16px" }}>
        If you stopped after a few days or a week, the nervous system simply didn't have enough repetitions to start building that pathway. It's not that it didn't work. It's that the brain didn't get enough signal repetitions to learn.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 13, lineHeight: 1.5, color: L2.warmGrey, fontStyle: "italic", margin: 0 }}>
        An 8-week study by Hample, Mahler &amp; Amspacher (2020) confirmed that autistic children's body awareness significantly improved with structured practice over time, not in days, but in weeks.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: TRUSTDEEP-5 — Long-Form Testimonial
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px" }}>
      <div style={{ background: L2.warmCream, borderRadius: 16, padding: 24 }}>
        {/* Large quote mark */}
        <div style={{ fontFamily: "Georgia, serif", fontSize: 48, color: L2.wheat, lineHeight: 1, marginBottom: 8 }}>
          "
        </div>
        {/* Quote body */}
        <p style={{ fontFamily: "Georgia, serif", fontSize: 17, fontStyle: "italic", lineHeight: 1.5, color: L2.charcoal, margin: "0 0 16px" }}>
          The first time we tried, he wore them for maybe 3 days. He had more accidents in those 3 days than the past month in pull-ups. I thought, this is worse. We stopped. Three months later I tried again, but this time I committed to 2 hours a day, every day, for 4 weeks. Week 3: he paused. He was mid-play and he just stopped and looked down. He didn't say anything. But he <em>felt</em> it. That had never happened in 5 years. Week 6: he walked to the bathroom on his own for the first time. Not consistently. But once. And once is the first time anything has changed since his BCBA started scheduled sits.
        </p>
        {/* BCBA co-sign */}
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontStyle: "italic", color: L2.forestSage, margin: "0 0 16px" }}>
          Her BCBA noticed the shift too — said the sensory piece was 'filling in a gap the behavioral protocol couldn't reach.'
        </p>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.5, color: L2.charcoal, margin: "0 0 20px" }}>
          We're not trained. But we're not where we were.
        </p>
        {/* Attribution */}
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: L2.warmGrey, lineHeight: 1.3 }}>
          — Lisa, mom of a 6-year-old with Level 2 autism, Austin TX
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: LETTER — Realistic Timeline
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 20px" }}>
        If you try again, here's what a realistic second attempt looks like for L2:
      </p>

      {/* Timeline phases */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 15, fontWeight: 700, color: L2.charcoal, margin: "0 0 8px" }}>
          Week 1-2:
        </p>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 20px" }}>
          Your child may resist. They may have more accidents. This is the nervous system starting to register sensation, which pull-ups had been blocking. The accidents are not a sign of failure. They're a sign the signal is starting to arrive.
        </p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 15, fontWeight: 700, color: L2.charcoal, margin: "0 0 8px" }}>
          Week 3-4:
        </p>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 20px" }}>
          Small awareness signals may appear, a pause, a look down, a tug at the waistband. These are micro-wins. For some kids, they show up at week 2. For others, week 8. Both are normal.
        </p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 15, fontWeight: 700, color: L2.charcoal, margin: "0 0 8px" }}>
          Week 6-12:
        </p>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: 0 }}>
          Some children begin walking toward the bathroom (even after an accident has started). A few begin to initiate. Most are not "trained" at 12 weeks. But the neural pathway is forming, and that's the foundation everything builds on.
        </p>
      </div>

      <p style={{ fontFamily: "Georgia, serif", fontSize: 17, fontStyle: "italic", lineHeight: 1.5, color: L2.charcoal, margin: "24px 0 0" }}>
        We don't promise trained in X weeks. That would be a lie and you'd spot it immediately.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: PRODUCT SHOWCASE — Full
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 30px" }}>
      {/* Product Image */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <img
          src="/root/projects/brightkidco/raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg"
          alt="BrightKidCo training pants, moon cloud blue, flat lay"
          style={{ width: 200, height: 280, objectFit: "cover", borderRadius: 16, border: `1px solid ${L2.sand}` }}
        />
      </div>

      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 16px" }}>
        The Body-Signal Learning Layer is a 3-layer system:
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 12px" }}>
        • Layer 1: Cotton inner, creates a gentle, sustained wetness sensation when an accident happens. Unlike pull-ups, which wick moisture away completely.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 12px" }}>
        • Layer 2: Smart absorption, protects furniture and floors without blocking the learning signal. Handles 3x the volume of normal underwear.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, lineHeight: 1.6, color: L2.charcoal, margin: "0 0 20px" }}>
        • Layer 3: Leak-resistant outer barrier, designed to let some sensation through so the brain gets feedback, not silence.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: L2.charcoal, margin: 0 }}>
        Pull-ups actively block the feedback loop your child's nervous system needs to learn.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CTA — Gentle Invite
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", textAlign: "center" }}>
      <a href="#" style={{
        display: "block", width: "100%", height: 52, lineHeight: "52px",
        background: L2.sageGreen, color: "#FFFFFF",
        fontFamily: "Arial, Helvetica, sans-serif", fontSize: 16, fontWeight: 700,
        textDecoration: "none", borderRadius: 999, textAlign: "center",
      }}>
        Revisit the Body-Signal approach
      </a>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 13, color: L2.warmGrey, margin: "16px 0 0" }}>
        3+3 Bundle · $79.99 · Free shipping · 60-day guarantee · Your judgment
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 13, color: L2.warmGrey, fontStyle: "italic", margin: "8px 0 0" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, color: L2.warmGrey, fontStyle: "italic", margin: "16px 0 0" }}>
        If today isn't the day to try again, that's a real answer. The product will be here next month. So will I.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TRUST-1 — 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px", textAlign: "center" }}>
      {/* Circular seal badge */}
      <div style={{ display: "inline-block", background: L2.warmCream, border: `2px solid ${L2.forestSage}`, borderRadius: "50%", width: 80, height: 80, lineHeight: "80px", marginBottom: 16 }}>
        <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontWeight: 700, color: L2.forestSage, letterSpacing: 1 }}>
          60 DAYS<br />YOUR JUDGMENT
        </span>
      </div>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, lineHeight: 1.6, color: L2.warmGrey, margin: 0 }}>
        The 60-day guarantee still applies. Try for 60 days, consistent daily wear, your child's pace, your judgment. If it doesn't work for your child, full refund. No hoops. No questions.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: SIGNOFF — Lena Sign-Off (MEDIUM variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: L2.darkBg, padding: "0 22px 36px" }}>
      <div style={{ background: L2.darkCard, borderRadius: 22, padding: "26px 24px 24px", position: "relative", overflow: "hidden" }}>
        {/* top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${L2.sage}, ${L2.forestSage})` }} />

        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 16, color: "#B8CACD", margin: "0 0 4px" }}>
          With care,
        </p>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 42, color: L2.sage, lineHeight: 0.95, margin: "8px 0 12px" }}>
          Lena ——
        </div>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 12, color: "#8A9B9D", margin: "0 0 20px" }}>
          Customer Support · Mom of two autistic sons
        </p>

        {/* Dashed divider */}
        <div style={{ borderTop: "1px dashed #3A4547", margin: "0 0 20px" }} />

        {/* P.S. 1 */}
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", margin: "0 0 16px" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          I have two autistic sons. One trained at 6, the other at almost 8. The second time we tried something with my youngest, it looked nothing like the first. Not because the product changed, because his nervous system needed more reps. Sometimes the second attempt is the one that takes. Not always. But sometimes.
        </p>
        {/* P.S. 2 */}
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", margin: 0 }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          If you have questions about trying again, hit reply. You'll get me, not a bot. I read every response.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: FOOTER + EASTER EGG
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, color: L2.warmGrey, margin: "0 0 8px" }}>
        © BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, color: L2.warmGrey, margin: "0 0 16px" }}>
        60-day money-back guarantee · Free shipping on bundles · <a href="#" style={{ color: L2.warmGrey, textDecoration: "underline" }}>Unsubscribe</a>
      </p>
      {/* Gradient accent bar */}
      <div style={{ width: 60, height: 3, background: `linear-gradient(90deg, ${L2.sage}, ${L2.forestSage})`, borderRadius: 3, margin: "0 auto 16px" }} />
      {/* Easter Egg: Three waves */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <polyline points="2,9 5,7 8,9 11,7 14,9 16,9" fill="none" stroke={L2.sage} strokeWidth="1.2" opacity="0.3" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <polyline points="2,9 4,6 6,9 8,6 10,9 12,6 14,9 16,9" fill="none" stroke={L2.sage} strokeWidth="1.2" opacity="0.6" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <polyline points="2,9 4,5 6,9 8,5 10,9 12,5 14,9 16,5 17,9" fill="none" stroke={L2.sage} strokeWidth="1.2" opacity="1" />
        </svg>
      </div>
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e1-l2"] = Email_winback_a_19_e1_l2;
