/* PP-Mary S. Story — E1 | Cross-Level
   Wireframe: wireframes/pp-mary-story/mary-14-e1.md
   Copy: copy/pp-mary-story/mary-14-e1.md
   Strategy: strategy-map.json → flows.pp-mary-story.emails.e1
   Generated: 2026-06-09
*/

const Email_pp_mary_story_14_e1 = () => (
  <EmailShell preheader="It wasn't a business idea. It was a morning that changed everything." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#4A6568", marginTop: 8 }}>
        Mary S. from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-4 Story Fragment
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 0", textAlign: "center" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 16 }}>
        A LETTER FROM MARY
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 16px" }}>
        Why I built BrightKidCo — Mary S.
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: "#4A6568", margin: "0 0 32px" }}>
        It wasn't a business idea. It was a morning that changed everything.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: GRADIENT BAND — Hero → Body
       ══════════════════════════════════════════════════════ */}
    <Band from="#2BAEB4" to="#5DD07A" height={32} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER — LETTER-02 Handwritten Opener (Opener)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px", fontSize: 17, lineHeight: 1.7, color: "#4A6568" }}>

      {/* Opener paragraph */}
      <p style={{ margin: "0 0 18px" }}>
        Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or still figuring it out, if they don't feel when they need to go, you've probably seen some of these:
      </p>

      {/* Bullet list */}
      <p style={{ margin: "0 0 10px", paddingLeft: 16 }}>
        • Sitting on the toilet for 20 minutes. Nothing happens. You put the pull-up back on, and 30 seconds later it's wet.
      </p>
      <p style={{ margin: "0 0 10px", paddingLeft: 16 }}>
        • Playing in a wet diaper without a single reaction. No pause. No look down. Nothing.
      </p>
      <p style={{ margin: "0 0 10px", paddingLeft: 16 }}>
        • "Almost trained" three times. Every time it falls apart.
      </p>
      <p style={{ margin: "0 0 18px", paddingLeft: 16 }}>
        • Years of trying. You've stopped counting the failed attempts.
      </p>

      {/* Closer — bold reading path */}
      <p style={{ margin: 0, color: "#1F2D2F", fontWeight: 600 }}>
        If any of those sound like your morning, I wrote this email for you.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER — LETTER-02 Handwritten Opener (Mary's Story)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "8px 22px 28px", fontSize: 17, lineHeight: 1.7, color: "#4A6568" }}>

      {/* Story intro — bold */}
      <p style={{ margin: "0 0 16px", color: "#1F2D2F", fontWeight: 600 }}>
        I'm Mary S. I'm a mom. And I went through exactly this with my own child.
      </p>

      {/* Failed methods */}
      <p style={{ margin: "0 0 16px" }}>
        My son was 4 when I realized something wasn't working. Not with him, with the methods. We tried everything the books and internet told us to try. Sticker charts. Timer sits. The naked weekend. Rewards. Schedules. Charts. Songs. Puppets. Bribes.
      </p>

      {/* Why they failed */}
      <p style={{ margin: "0 0 16px" }}>
        None of it worked. Not because I wasn't trying hard enough. Not because he was being difficult. But because every single method assumed something that wasn't true for him.
      </p>

      {/* The assumption — italic */}
      <p style={{ margin: "0 0 16px" }}>
        They assumed he could <em>feel</em> when he needed to go.
      </p>

      {/* The realization — bold standalone */}
      <p style={{ margin: 0, color: "#1F2D2F", fontWeight: 600 }}>
        He couldn't.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: GRADIENT BAND — Body → Mechanism (thin)
       ══════════════════════════════════════════════════════ */}
    <Band from="#2BAEB4" to="#5DD07A" height={24} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: LETTER — LETTER-02 Handwritten Opener (The Moment)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px", fontSize: 17, lineHeight: 1.7, color: "#4A6568" }}>

      {/* The moment */}
      <p style={{ margin: "0 0 16px" }}>
        One morning, after yet another accident, I sat on the bathroom floor and realized: my son wasn't ignoring his body. His body wasn't sending the signal. The "I need to go" message was leaving his bladder and never arriving at his brain.
      </p>

      {/* Research discovery */}
      <p style={{ margin: "0 0 16px" }}>
        I started researching. I found the science of interoception, the body's ability to sense internal states like hunger, thirst, and bladder fullness. The research was clear (Nicholson et al. 2019, Barmpagiannis &amp; Baldimtsi 2025): autistic children process body signals differently. The gap isn't behavioral. It's neurological.
      </p>

      {/* The shift */}
      <p style={{ margin: "0 0 16px" }}>
        That morning on the bathroom floor, I went from frustrated to determined.
      </p>

      {/* The mission — bold reading path */}
      <p style={{ margin: 0, color: "#1F2D2F", fontWeight: 600 }}>
        If the methods didn't exist for kids like mine, I'd build them.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: EDU-1 — Definition Block (The Discovery)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14 }}>
        THE INSIGHT
      </div>

      {/* Definition box — yellow top accent, teal border */}
      <div style={{
        background: "#FFFFFF",
        borderTop: "4px solid #FFD866",
        borderLeft: "1px solid #2BAEB4",
        borderRight: "1px solid #2BAEB4",
        borderBottom: "1px solid #2BAEB4",
        borderRadius: 12,
        padding: 24,
        marginBottom: 20,
      }}>
        {/* Definition text — bold */}
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.7, color: "#1F2D2F", margin: "0 0 16px" }}>
          Standard underwear assumes the child already feels the signal. Pull-ups wick the signal away entirely. Neither solves the real problem, building body awareness from scratch.
        </p>

        {/* Pull-quote — Fraunces italic */}
        <p style={{ fontFamily: F.display, fontSize: 20, fontWeight: 400, fontStyle: "italic", lineHeight: 1.4, color: "#2BAEB4", margin: 0 }}>
          What if an underwear could <em>create</em> the signal instead of waiting for it?
        </p>
      </div>

      {/* Body paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        That's what BrightKidCo became. The Body-Signal Learning Layer, a three-layer system designed to give a developing nervous system the feedback it needs. A gentle sensation that lasts 30-60 seconds. Not punishment. Not training in the traditional sense. Information. A signal that says: "Something happened here."
      </p>

      {/* Body closer — bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.7, color: "#1F2D2F", fontWeight: 600, margin: 0 }}>
        For some kids, it's the first time they've ever felt it.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: GRADIENT BAND — Mechanism → Social Proof (thin)
       ══════════════════════════════════════════════════════ */}
    <Band from="#2BAEB4" to="#5DD07A" height={24} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SP-01 — Yellow Quote Block (The Connection)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14 }}>
        DIFFERENT FAMILIES, SAME GAP
      </div>

      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.7, color: "#4A6568", margin: "0 0 24px" }}>
        Since founding BrightKidCo, I've heard from thousands of parents. Their stories span the full spectrum, and they all share one thing in common.
      </p>

      {/* Quote 1 — L1 parent */}
      <div style={{
        background: "#FBF7EB",
        borderLeft: "3px solid #DBFFCD",
        borderRadius: 12,
        padding: "12px 16px",
        marginBottom: 16,
      }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 6px" }}>
          Families with a verbal preschooler who "gets it but doesn't get it":
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 4px" }}>
          "How do I know if it's refusal or inability?"
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, color: "#4A6568", margin: 0 }}>
          Real parent
        </p>
      </div>

      {/* Quote 2 — L2 parent */}
      <div style={{
        background: "#FBF7EB",
        borderLeft: "3px solid #DBFFCD",
        borderRadius: 12,
        padding: "12px 16px",
        marginBottom: 16,
      }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 6px" }}>
          Families with a sensory-sensitive child who's tried every BCBA protocol:
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 4px" }}>
          "He sits for 45 minutes and then pees the second he stands up."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, color: "#4A6568", margin: 0 }}>
          Real parent
        </p>
      </div>

      {/* Quote 3 — L3 parent */}
      <div style={{
        background: "#FBF7EB",
        borderLeft: "3px solid #DBFFCD",
        borderRadius: 12,
        padding: "12px 16px",
        marginBottom: 24,
      }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 6px" }}>
          Families with a non-verbal child who's never shown a sign in years:
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 4px" }}>
          "He looked down at the wet spot for the first time in 9 years."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, color: "#4A6568", margin: 0 }}>
          Real parent
        </p>
      </div>

      {/* Unity paragraph */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        Whether your child is here at the beginning, stuck in the middle, or you've been at this so long you've stopped hoping, that gap, that missing signal, is the same.
      </p>

      {/* Biology anchor — bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.7, color: "#1F2D2F", fontWeight: 600, margin: 0 }}>
        The child's age changes. The support needs change. But the biology of the interoception gap doesn't.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: PRODUCT — ProductShowcaseSoft
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "34px 22px 28px" }}>
      <div style={{
        background: "#FFFFFF",
        border: "2px solid #1F2D2F",
        borderRadius: 16,
        boxShadow: "6px 6px 0 #1F2D2F",
        display: "flex",
        overflow: "hidden",
      }}>

        {/* Product image — left column */}
        <div style={{
          width: 140,
          flexShrink: 0,
          borderRight: "2px solid #1F2D2F",
          background: "#FFFDF6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <img
            src="../assets/product-photos/training-pant-fox-red-white.jpg"
            alt="BrightKidCo training pant in fox red-white pattern, flat lay"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Content — right column */}
        <div style={{ padding: "20px 18px", flex: 1, minWidth: 0 }}>

          {/* Eyebrow */}
          <div style={{ fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 8 }}>
            WHAT MARY BUILT
          </div>

          {/* Product name */}
          <div style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, color: "#1F2D2F", marginBottom: 8 }}>
            Body-Signal Learning Layer™
          </div>

          {/* Description */}
          <p style={{ fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
            The product you have is built from that morning on the bathroom floor.
          </p>

          {/* CTA button — pill */}
          <a href="#" style={{
            display: "inline-block",
            padding: "8px 18px",
            background: "#1F2D2F",
            color: "#D8F57C",
            fontFamily: F.main,
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            borderRadius: 999,
            lineHeight: 1.4,
          }}>
            See the pants →
          </a>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: LETTER — LETTER-02 Handwritten Opener (The Invitation)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px", fontSize: 17, lineHeight: 1.7, color: "#4A6568" }}>

      {/* Validation paragraph 1 */}
      <p style={{ margin: "0 0 16px" }}>
        If you're reading this, you've already taken a step that most parents never do. You've bought the underwear. You're trying. You're giving your child's nervous system a chance to learn what it's never had before.
      </p>

      {/* Courage line — bold reading path */}
      <p style={{ margin: "0 0 16px", color: "#1F2D2F", fontWeight: 600 }}>
        That takes courage. I know because I was there.
      </p>

      {/* Product connection */}
      <p style={{ margin: "0 0 16px" }}>
        The product you have is built from that morning on the bathroom floor. Every stitch, every layer of fabric, every design decision came from one place: the understanding that your child isn't broken. Their method wasn't broken. The <em>assumption</em> was broken.
      </p>

      {/* Timeline ranges (R5) */}
      <p style={{ margin: "0 0 16px" }}>
        Body-signal learning takes time. Some kids show first signs in 2 weeks. Others need 8 weeks. Some take 3-6 months. All of that is normal. All of that is progress.
      </p>

      {/* Goal reframe (R6) */}
      <p style={{ margin: "0 0 16px" }}>
        The goal isn't "fully trained by next month." The goal is clear: one moment of awareness. One pause. One look down. One step toward the bathroom, even after the accident.
      </p>

      {/* Hope anchor — bold reading path */}
      <p style={{ margin: "0 0 16px", color: "#1F2D2F", fontWeight: 600 }}>
        That moment changes everything.
      </p>

      {/* Mechanism completion */}
      <p style={{ margin: 0 }}>
        Not because your child is "finally getting it." But because their brain is receiving information it never had before. And once the brain gets the signal, the rest has a foundation to build on.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: GRADIENT BAND — Invitation → Closing (thin)
       ══════════════════════════════════════════════════════ */}
    <Band from="#2BAEB4" to="#5DD07A" height={24} />

    {/* ══════════════════════════════════════════════════════
       SECTION 14: LETTER — LETTER-02 Handwritten Opener (The Closing)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px", fontSize: 17, lineHeight: 1.7, color: "#4A6568" }}>

      {/* Mission statement */}
      <p style={{ margin: "0 0 16px" }}>
        I built BrightKidCo so no other parent would have to sit on a bathroom floor wondering what they did wrong.
      </p>

      {/* Validation — bold reading path */}
      <p style={{ margin: "0 0 16px", color: "#1F2D2F", fontWeight: 600 }}>
        You didn't do anything wrong. Neither did your child.
      </p>

      {/* Triple-Whether permission closing */}
      <p style={{ margin: "0 0 16px" }}>
        Whether your journey takes 2 weeks or 6 months, whether your child shows subtle signals or dramatic progress, whether you're just starting or you've been at this for years, you belong here. This product was built for your child's nervous system. Exactly as it is.
      </p>

      {/* Gratitude */}
      <p style={{ margin: "0 0 16px" }}>
        Thank you for being part of this community. And thank you for trusting us with something so important.
      </p>

      {/* Reply invitation */}
      <p style={{ margin: "0 0 16px" }}>
        If this email resonated, or if you have a question about your child's progress, hit reply. I read every message. You'll get me, not a template, not a bot.
      </p>

      {/* Sign-off */}
      <p style={{ margin: 0, color: "#1F2D2F" }}>
        — Mary S., Founder
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: P.S. — 60-Day Guarantee Reassurance
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "8px 22px 28px", fontSize: 17, lineHeight: 1.7, color: "#4A6568" }}>
      <p style={{ margin: 0 }}>
        P.S., The 60-day guarantee is real. If the product doesn't work for your child, full refund, no questions. But most parents find the real change happens between week 3 and week 8. If you're in week 1 and nothing's happened yet, that's normal. Keep going.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: TONAL SHIFT RULE — 1px line
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8DED5" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 17: TRUST-1 — 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "34px 22px 28px" }}>
      <div style={{
        background: "#FBF7F1",
        border: "2px solid #5DD07A",
        borderRadius: 16,
        padding: 24,
        textAlign: "center",
      }}>
        {/* 60-day seal icon */}
        <div style={{ marginBottom: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#5DD07A" strokeWidth="2" />
            <path d="M12 20 L18 26 L28 14" stroke="#5DD07A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 600, color: "#1F2D2F", margin: "0 0 8px", lineHeight: 1.6 }}>
          Try it for 60 days. Full refund, no questions.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 18: CTA — CTA-6 Social CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px 28px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        height: 52,
        lineHeight: "52px",
        width: "100%",
        maxWidth: 280,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        Reply to this email →
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 19: SIGNOFF — Mary S. (FOUNDER variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "34px 22px 36px" }}>
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
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)",
          opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58,
            height: 58,
            flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5,
            position: "relative",
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              border: "1.5px solid #1F2D2F",
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
            <div style={{
              fontSize: 10.5,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color: "#8FAFB2",
              fontWeight: 700,
              marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Mary S.
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Founder · BrightKidCo · Mom of one
            </div>
          </div>
        </div>

        {/* Handwritten signature — Caveat font */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          paddingTop: 16,
          paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              If this email resonated, or if you have a question about your child's progress, hit reply. I read every message. You'll get me, not a template, not a bot.
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#D8F57C",
              letterSpacing: -0.5,
              marginTop: 8,
            }}>
              Mary
            </div>
          </div>

          {/* tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. section */}
        <div style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: "#B8CACD",
          fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          The 60-day guarantee is real. If the product doesn't work for your child, full refund, no questions. But most parents find the real change happens between week 3 and week 8. If you're in week 1 and nothing's happened yet, that's normal. Keep going.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 20: FOOTER — BREZ-inspired
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <div style={{ fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500, color: "#1F2D2F", marginBottom: 24, letterSpacing: -0.2 }}>
        Helping kids feel what their bodies are telling them.
      </div>

      {/* Footer links */}
      <div style={{ fontSize: 14, color: "#1F2D2F", fontWeight: 500, marginBottom: 12 }}>
        <a href="#" style={{ color: "#1F2D2F", textDecoration: "none" }}>Shop</a>
      </div>
      <div style={{ fontSize: 14, color: "#1F2D2F", fontWeight: 500, marginBottom: 12 }}>
        <a href="#" style={{ color: "#1F2D2F", textDecoration: "none" }}>FAQ</a>
      </div>
      <div style={{ fontSize: 14, color: "#1F2D2F", fontWeight: 500, marginBottom: 20 }}>
        <a href="#" style={{ color: "#1F2D2F", textDecoration: "none" }}>Contact</a>
      </div>

      {/* Social icons — Instagram + TikTok */}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "0 0 24px" }}>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="#1F2D2F" stroke="none" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>

      {/* Unsubscribe + Address */}
      <div style={{ fontSize: 11.5, color: "#8A9B9D", lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        No longer want to receive these emails? <a href="#" style={{ color: "#1F2D2F", textDecoration: "underline" }}>Unsubscribe</a>.<br/>
        <span style={{ fontSize: 11 }}>Brooklyn, NY 11201</span>
      </div>

      {/* Reply prompt */}
      <div style={{ fontSize: 11.5, color: "#8A9B9D", marginTop: 12 }}>
        Questions? Reply to this email, we read every response.
      </div>

      {/* Gradient accent bar */}
      <div style={{ margin: "24px auto 0", width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)", borderRadius: 3 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 21: EASTER EGG — Mary's Em-Dash
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "12px 24px 20px", textAlign: "center" }}>
      <span style={{
        fontFamily: F.main,
        fontSize: 14,
        fontStyle: "italic",
        color: "#4A4A4A",
        letterSpacing: "0.02em",
      }}>
        Mary —,
      </span>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_pp_mary_story_14_e1 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["pp-mary-story/mary-14-e1"] = Email_pp_mary_story_14_e1;
