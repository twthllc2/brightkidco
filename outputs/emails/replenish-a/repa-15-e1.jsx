/* Replenish A — E1 | Cross-Level (L1/L2/L3/GF)
   Wireframe: wireframes/replenish-a/repa-15-e1.md
   Copy: copy/replenish-a/repa-15-e1.md
   Flow 15 · Day 14 post-purchase · 1-pair buyers
   Generated: 2026-06-09
*/

const Email_replenish_a_repa_15_e1 = () => (
  <EmailShell preheader="Whether you're seeing mini-wins or still waiting, both are normal at this stage." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — From Name + Logo
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-5 Mirror Moment
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px 0" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 16, textAlign: "center" }}>
        TWO WEEKS IN
      </div>

      {/* Framed hero image */}
      <div style={{ borderRadius: 16, overflow: "hidden", border: "2px solid #1F2D2F", boxShadow: "4px 4px 0 #1F2D2F", marginBottom: 28 }}>
        <ImgFrame height={220} radius={0} label="LIFESTYLE HERO" sublabel="toddler-playing-train-moon-cloud-blue.png" />
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 16px", textAlign: "center" }}>
        Two weeks in with one pair
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: "#4A6568", margin: "0 0 28px", textAlign: "center" }}>
        Whether you're seeing mini-wins or still waiting, both are normal at this stage.
      </p>

      {/* Signal Wave SVG — flat, building amplitude */}
      <div style={{ width: "100%", marginBottom: 8, textAlign: "center" }}>
        <svg width="400" height="40" viewBox="0 0 400 40" style={{ maxWidth: "100%" }}>
          <path
            d="M0,20 C20,20 30,20 40,20 C50,20 55,18 60,17 C70,15 80,16 90,17 C100,18 110,18 120,17 C130,16 140,17 150,18 C160,19 170,18 180,17 C190,16 200,17 210,18 C220,19 230,18 240,17 C250,16 260,17 270,18 C280,19 290,18 300,17 C310,16 320,17 330,18 C340,19 350,18 360,17 C370,16 380,17 390,18 L400,19"
            stroke="#2BAEB4" strokeWidth="2" fill="none" strokeLinecap="round"
            strokeDasharray="800" style={{ animation: "waveDraw 2s ease-out forwards, wavePulse 3s ease-in-out infinite 2s" }}
          />
        </svg>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: DESDEEP-16 — Paper Texture Band
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 8, background: "linear-gradient(180deg, #F6F2EA 0%, #FBF7F1 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-02 — Handwritten Opener (Hook)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      {/* Hook paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        Whether you're 14 days into consistent daily wear, or your child has only touched the fabric so far, whether they can tell you they're wet, or show you with a gesture, or don't seem to notice at all, if you're wondering whether one pair is enough, here's what most parents discover at this stage.
      </p>
      {/* Hook paragraph 2 with bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        It's not about having more pairs. It's about giving the nervous system <strong style={{ fontWeight: 600, color: "#1F2D2F" }}>more chances to catch the signal</strong>.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-02 — Recognition Anchors
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 44px" }}>
      {/* Intro line */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        At 14 days, what you're probably seeing is one of these:
      </p>

      {/* Recognition Anchors Card */}
      <div style={{ background: "#FBF7F1", borderRadius: 16, padding: 24, marginBottom: 24 }}>
        {/* Anchor 1 — L1-L2 */}
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
          • A pause before an accident. Just once. But it happened.
        </p>
        {/* Anchor 2 — L2 */}
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
          • Your child pulling at their pants after they're wet, instead of ignoring it.
        </p>
        {/* Anchor 3 — L3 */}
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
          • They wore the underwear for 30+ minutes without wanting it off.
        </p>
        {/* Anchor 4 — Verbal + Non-verbal */}
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
          • They said "wet" or showed you, a look down, a tug, a gesture.
        </p>
        {/* Anchor 5 — Any level, patience phase */}
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          • Nothing visible yet. They're still going about their day, unaware.
        </p>
      </div>

      {/* Post-anchors validation */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        If any of those sound like your last two weeks, even just one, your child's nervous system is starting to register the signal. The Body-Signal Learning Layer is working. If you saw none of these, that's also completely within the normal range. Some children show the first awareness after 14 days. Others take 6 to 8 weeks. Both are real progress. Both are on track.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: 1px RULE — Tonal Shift
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8E2DA" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SP5 — Counter Testimonial (Three-Family)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        Three parents. Three different kids. One common question after two weeks.
      </p>

      {/* Card 1 — Sarah (L1 pattern, B.teal left-border) */}
      <div style={{ background: "#FBF7F1", borderRadius: 16, borderLeft: "3px solid #2BAEB4", padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He's worn them every day. He still has accidents, but last night he paused, mid-play, and looked down. That never happened before. I know it's small. But it's the first time he's noticed."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#8A9B9D", margin: 0 }}>
          Sarah, mom of a verbal 4-year-old
        </p>
        <p style={{ fontFamily: F.main, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#B8CACD", marginTop: 6 }}>
          VERBAL · AGE 4
        </p>
      </div>

      {/* Card 2 — Lisa (L2 pattern, B.green left-border) */}
      <div style={{ background: "#FBF7F1", borderRadius: 16, borderLeft: "3px solid #5DD07A", padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "More accidents in these two weeks than the past month in pull-ups. I almost stopped. But her OT said the accidents mean she's starting to feel something, that's the whole point. So we're holding the line."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#8A9B9D", margin: 0 }}>
          Lisa, mom of a 6-year-old with sensory differences
        </p>
        <p style={{ fontFamily: F.main, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#B8CACD", marginTop: 6 }}>
          SENSORY · AGE 6
        </p>
      </div>

      {/* Card 3 — Maria (L3 pattern, B.muted left-border) */}
      <div style={{ background: "#FBF7F1", borderRadius: 16, borderLeft: "3px solid #8A9B9D", padding: 20, marginBottom: 20 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He hasn't shown any awareness yet. But he's tolerating the underwear for longer stretches than before. For us, that's a win. We're not in a hurry."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#8A9B9D", margin: 0 }}>
          Maria, mom of a 9-year-old non-verbal son
        </p>
        <p style={{ fontFamily: F.main, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#B8CACD", marginTop: 6 }}>
          NON-VERBAL · AGE 9
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        If one of these sounds like your two weeks, you're exactly where you're supposed to be.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: ED3 — Interoception Explainer
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 10 }}>
        WHAT'S HAPPENING
      </div>

      {/* Mechanism paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        Here's what's happening neurologically at this point: the Body-Signal Learning Layer creates a gentle, sustained "uh-oh" sensation, 30 to 60 seconds of feedback, every time there's wetness. This gives the brain time to register: something happened.
      </p>

      {/* Signal Wave SVG — building amplitude */}
      <div style={{ width: "100%", marginBottom: 20, textAlign: "center" }}>
        <svg width="400" height="40" viewBox="0 0 400 40" style={{ maxWidth: "100%" }}>
          <path
            d="M0,20 C15,20 20,16 30,14 C40,12 50,16 60,18 C70,20 80,14 90,10 C100,6 110,14 120,18 C130,22 140,12 150,8 C160,4 170,14 180,18 C190,22 200,10 210,6 C220,2 230,12 240,18 C250,24 260,10 270,6 C280,2 290,14 300,18 C310,22 320,8 330,4 C340,0 350,12 360,18 C370,24 380,10 390,8 L400,10"
            stroke="#2BAEB4" strokeWidth="2" fill="none" strokeLinecap="round"
            strokeDasharray="800" style={{ animation: "waveDraw2 2s ease-out forwards, wavePulse2 3s ease-in-out infinite 2s" }}
          />
        </svg>
      </div>

      {/* Mechanism paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        For some children, this awareness starts wiring in the first two weeks. For others, the nervous system needs more repetition, it's laying new neural pathways, and that doesn't happen on a schedule.
      </p>

      {/* Mechanism paragraph 3 with bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        One pair starts the process. But <strong style={{ fontWeight: 600, color: "#1F2D2F" }}>consistent daily wear is what builds the signal pathway</strong>. If you're washing that one pair every night, you might be missing 50% of wearing opportunities, and each one is a chance for the brain to learn.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: ProductShowcaseMedium — 3+3 Bundle
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 16, border: "2px solid #1F2D2F", boxShadow: "4px 4px 0 #1F2D2F", overflow: "hidden", display: "flex" }}>
        {/* Product image — left column */}
        <div style={{ width: 140, flexShrink: 0, borderRight: "2px solid #1F2D2F", background: "#FBF7F1" }}>
          <ImgFrame height={220} radius={0} label="PRODUCT" sublabel="training-pant-cloud-raindrop-white.jpg" />
        </div>

        {/* Content — right column */}
        <div style={{ flex: 1, padding: "20px 18px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Eyebrow */}
          <div style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 8 }}>
            THE 3+3 BUNDLE
          </div>

          {/* Title */}
          <h3 style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, color: "#1F2D2F", margin: "0 0 10px", lineHeight: 1.3 }}>
            6 pairs in rotation
          </h3>

          {/* Price */}
          <div style={{ fontFamily: F.main, fontSize: 20, fontWeight: 700, color: "#1F2D2F", marginBottom: 6 }}>
            $79.99
          </div>

          {/* Price note */}
          <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, lineHeight: 1.5, color: "#8A9B9D", margin: "0 0 10px" }}>
            $13.33 per pair — less than half the single-pair price
          </p>

          {/* Free shipping */}
          <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#5DD07A", margin: "0 0 6px" }}>
            Free shipping
          </p>

          {/* 60-day guarantee */}
          <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#4A6568", margin: 0 }}>
            60-day guarantee
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA-11 — Permission CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px", textAlign: "center" }}>
      {/* Body copy */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        If you're ready to give your child more signal-learning time per day, the 3+3 bundle gives you 6 pairs in rotation, always one clean, one ready, one in the wash. Same 60-day guarantee. Same no-pressure timeline.
      </p>

      {/* CTA button */}
      <a href="#" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 0.5,
        textDecoration: "none",
        borderRadius: 999,
        height: 52,
        lineHeight: "52px",
        marginBottom: 20,
      }}>
        Explore the 3+3 Bundle →
      </a>

      {/* Permission note */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", fontStyle: "italic", margin: "0 0 16px" }}>
        If one pair is working for your family right now, that's okay too. The signal doesn't rush. Neither should you.
      </p>

      {/* Trust line */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, fontStyle: "italic", color: "#8A9B9D", margin: "0 0 6px" }}>
        6 pairs · $79.99 · Free shipping · 60-day guarantee · Your judgment
      </p>

      {/* Price note */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, fontStyle: "italic", color: "#8A9B9D", margin: 0 }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: 1px RULE — Tonal Shift
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8E2DA" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TRUST-1 — 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 24px" }}>
      <div style={{ background: "#FBF7F1", borderRadius: 16, border: "2px solid #5DD07A", padding: 24, textAlign: "center" }}>
        {/* 60-day seal icon */}
        <div style={{ marginBottom: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ display: "inline-block" }}>
            <circle cx="20" cy="20" r="18" fill="none" stroke="#5DD07A" strokeWidth="2" />
            <text x="20" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1F2D2F" fontFamily="Helvetica, Arial, sans-serif">60</text>
            <text x="20" y="26" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif">DAYS</text>
            <polyline points="13,22 18,27 28,15" stroke="#5DD07A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          Try it for 60 days. Your judgment.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: SIGNOFF — Lena (SHORT variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "44px 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)", opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", border: "1.5px solid #1F2D2F",
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
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

        {/* Handwritten signature — Caveat font */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              Talk soon,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#2BAEB4",
              letterSpacing: -0.5,
              marginTop: 2,
            }}>
              Lena
            </div>
          </div>

          {/* Tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Two P.S. lines */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", marginBottom: 14 }}>
          <span style={{ color: "#2BAEB4", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          My older son was 8 before we figured this out. If the first two weeks didn't look like what you expected, that's normal. The signal takes the time it takes. 60 days, your judgment.
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#2BAEB4", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          One pair can do the job. Three pairs mean one is always ready. Six means real rotation. Wherever you are on that scale, you're doing enough.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11.5, lineHeight: 1.6, color: "#8A9B9D", margin: "0 0 8px" }}>
        © BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.6, color: "#8A9B9D", margin: "0 0 16px" }}>
        60-day money-back guarantee · Free shipping on bundles · <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
      </p>
      {/* Gradient accent bar */}
      <div style={{ margin: "0 auto", width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)", borderRadius: 3 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: EASTER EGG — Signal Wave Amplitude
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 24px 32px", textAlign: "center" }}>
      <svg width="400" height="24" viewBox="0 0 400 24" style={{ maxWidth: "100%" }}>
        <path
          d="M0,12 C10,12 15,4 25,2 C35,0 45,8 55,12 C65,16 75,4 85,0 C95,-2 105,6 115,12 C125,18 135,2 145,-2 C155,-4 165,6 175,12 C185,18 195,0 205,-4 C215,-6 225,4 235,12 C245,20 255,2 265,-4 C275,-8 285,4 295,12 C305,20 315,0 325,-4 C335,-8 345,6 355,12 C365,18 375,2 385,-2 L400,0"
          stroke="#2BAEB4" strokeWidth="2" fill="none" strokeLinecap="round"
          strokeDasharray="800" style={{ animation: "waveFinal 2.5s ease-out forwards, waveFinalPulse 2.5s ease-in-out infinite 2.5s" }}
        />
      </svg>
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["replenish-a/repa-15-e1"] = Email_replenish_a_repa_15_e1;
