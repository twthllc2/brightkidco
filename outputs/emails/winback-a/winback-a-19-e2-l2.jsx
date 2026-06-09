/* Winback Path A — E2 (Day 7) | Level 2 (Lisa)
   Wireframe: wireframes/winback-a/winback-a-19-e2-l2.md
   Copy: copy/winback-a/winback-a-19-e2-l2.md
   Strategy: strategy-map.json → flows.winback-a.emails.e2-l2
   Generated: 2026-06-09
*/

const Email_winback_a_19_e2_l2 = () => (
  <EmailShell preheader="A BCBA's perspective on why the first try sometimes doesn't take, and what to try differently." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", height: 36, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 22px" }}>
      <span style={{ fontFamily: F.main, fontSize: 13, color: "#8A9B9D", fontWeight: 400 }}>
        A BCBA's perspective on why the first try sometimes doesn't take, and what to try differently.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E8DED5" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 28 }} />
      <span style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568" }}>Lena from BrightKidCo</span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO-16 — Mechanism Tease
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px 0" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14, textAlign: "center" }}>
        DAY 7 · WINBACK CHECK-IN
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.3, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        If it didn't click, here's what one BCBA tells her families
      </h1>

      {/* Hero Image */}
      <ImgFrame height={200} label="Hero Image" sublabel="pocket-diaper-moon-cloud-blue — 420×200, rounded 16px" radius={16} />

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "20px 0 40px", textAlign: "center" }}>
        Consistency data from 672 kids. Plus one mom's full story.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-16 — Paper Texture (Decorative)
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24, background: "linear-gradient(180deg, rgba(251,247,241,0.3) 0%, rgba(251,247,241,0) 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-01 — Paragraph Stack (Opening + BCBA Quote)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Lena here.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        If the underwear is sitting in a drawer and you're wondering whether to try again, I want to share something that might help.
      </p>

      {/* BCBA Quote — Pull-quote style */}
      <div style={{ background: "#F5F2ED", borderLeft: "3px solid #8AA67A", borderRadius: 16, padding: 22, margin: "0 0 20px" }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          &quot;We spend years building prompted sits and scheduled routines. The child learns to comply, not to feel. When you add an interoception layer, you're retraining the sensory system, not the behavior. That takes time, and it takes consistency, 2+ hours daily wear for at least 4-8 weeks before you can expect to see a change in body awareness.&quot;
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Here's why that matters for your situation.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: TRUSTDEEP-5 — Trust Ladder (Data Section)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14 }}>
        WHAT HAPPENS WHEN 672 FAMILIES TRY THE SAME THING
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 24px" }}>
        Internal data from families who stuck with daily wear for 2+ hours showed 82% clearer body awareness signals within 2-4 weeks. The ones who stopped after a week? Same result as never trying.
      </p>

      {/* Stat Callout Box */}
      <div style={{ background: "#FFFFFF", border: "1px solid rgba(43,174,180,0.3)", borderRadius: 16, padding: 22, marginBottom: 24, textAlign: "center" }}>
        <div style={{ fontFamily: F.main, fontSize: 40, fontWeight: 700, color: "#2BAEB4", lineHeight: 1, marginBottom: 6 }}>
          82%
        </div>
        <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F", marginBottom: 6 }}>
          clearer body awareness within 2-4 weeks
        </div>
        <div style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D" }}>
          Internal data, N=672 families
        </div>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        The nervous system can't learn a new signal pathway in days. It needs <strong style={{ color: "#1F2D2F" }}>weeks of repetition</strong>, the same way a new ABA target needs weeks of trials before it stabilizes.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        That's not a sales pitch. <strong style={{ color: "#1F2D2F" }}>That's neurology.</strong>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: THIN RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #E8DED5", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SP-02 — Expert Endorsement (Sarah's Story)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14 }}>
        ONE MOM'S STORY
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Sarah (not her real name) bought the 3+3 Bundle in January. Her son was 6, Level 2, with 3 years of ABA under his belt. He sat when prompted but never initiated. He held BM until his bedtime pull-up went on. She'd spent $50k on therapy, tried 5 potty methods, worked with two different BCBAs.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        After 3 weeks, nothing. She almost gave up.
      </p>

      {/* BCBA Quote */}
      <div style={{ background: "#F5F2ED", borderLeft: "3px solid #8AA67A", borderRadius: 16, padding: 22, margin: "0 0 20px" }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          &quot;Give it 8 more weeks. His body needs time to register a signal it's never received. The underwear doesn't teach him to use the toilet, it teaches his brain to feel the signal. That's a different skill. It needs a different timeline.&quot;
        </p>
      </div>

      {/* Timeline */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 600, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        Week 6: He paused mid-play and grabbed his pants. First time ever.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 600, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        Week 10: He walked to the bathroom unprompted. Once.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        It's not trained. It's not linear. But something shifted, and it shifted because his nervous system had enough repetitions to begin recognizing the signal.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: YOUR FIRST TRY MIGHT HAVE BEEN TOO SHORT
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        If you tried the underwear for a few days or a week and didn't see change, that's expected. A week is not enough time for the interoception pathway to build. Pull-ups wick moisture instantly, so even if the body-signal learning layer in BrightKidCo underwear provides gentle sensation that lasts, the brain needs time to learn: This sensation means something.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Some kids show a first signal in 4 weeks. Others need 10-12. Both are normal. Progress is not linear, regression cycles don't mean starting over. <strong style={{ color: "#1F2D2F" }}>The pathway is still there.</strong>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: THIN RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #E8DED5", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: WHAT YOUR BCBA WILL TELL YOU
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      {/* BCBA Quote */}
      <div style={{ background: "#F5F2ED", borderLeft: "3px solid #8AA67A", borderRadius: 16, padding: 22, marginBottom: 20 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          &quot;ABA builds the behavior. The sensory piece needs a different kind of input, sustained, gentle feedback that ABA doesn't provide. Together, they close the gap, one builds compliance, the other builds awareness.&quot;
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If you're working with a BCBA, here's what I'd suggest: put the underwear on for 2+ hours daily, record any change in awareness (pausing, looking at pants, touching waistband, walking toward bathroom, even if after the fact), and bring that data to your BCBA after 30 days. Not to prove anything, to give them information their protocols can't gather.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: PRODUCT SHOWCASE — 5+5 Bundle
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14 }}>
        THE PRODUCT
      </div>

      {/* Product Image */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <ImgFrame height={200} label="Product Image" sublabel="pocket-diaper-moon-cloud-blue — 300×200, rounded 16px" radius={16} />
      </div>

      {/* Product Title */}
      <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 700, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        Body-Signal Learning Layer™ Pants
      </p>

      {/* 5+5 Bundle Card — L2 Recommendation (primary) */}
      <div style={{ background: "#FFFFFF", border: "2px solid #2BAEB4", borderRadius: 16, padding: 24, marginBottom: 12, boxShadow: "6px 6px 0 #1F2D2F" }}>
        <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 600, color: "#1F2D2F", marginBottom: 4 }}>
          5+5 Bundle · $119.99
        </div>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
          10 pairs · $12/pair · Best value
        </div>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
          Less laundry pressure · 2+ hours daily
        </div>
      </div>

      {/* 3+3 Bundle Card */}
      <div style={{ background: "#FFFFFF", border: "1px solid #4A6568", borderRadius: 12, padding: 18, marginBottom: 12 }}>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F" }}>
          3+3 Bundle · $79.99 · 6 pairs · $13.33/pair
        </div>
      </div>

      {/* 1 Pair Card */}
      <div style={{ background: "#FFFFFF", border: "1px solid #4A6568", borderRadius: 12, padding: 18 }}>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
          1 Pair · $34.99 · Start with one
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: TRUST-1 — 60-Day Guarantee Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>
      <div style={{ background: "#FBF7F1", border: "2px solid #5DD07A", borderRadius: 16, padding: 24, textAlign: "center" }}>

        {/* 60-Day Seal Icon */}
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#2BAEB4", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          If it doesn't work for your child, full refund. That hasn't changed. You're not locked in. You're not failing if you decide this isn't the right time.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: CTA-4 — Gentle Invite
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px", textAlign: "center" }}>

      <a href="#" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#2BAEB4",
        color: "#D8F57C",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: 0.3,
        textDecoration: "none",
        borderRadius: 999,
        height: 52,
        lineHeight: "52px",
        width: 280,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        When you're ready, 60 days to decide
      </a>

      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#8A9B9D", margin: "16px 0 0" }}>
        That's $13.33 per pair with the 3+3 bundle — less than half the single-pair price.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#8A9B9D", fontStyle: "italic", margin: "14px 0 0" }}>
        Next time: The final check-in — what happens after the 60-day window and where you go from here.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: LENA SIGN-OFF — Winback Variant (LONG)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 16,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Avatar + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
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
              overflow: "hidden", border: `1.5px solid ${B.ink}`,
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
              </svg>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2 }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Handwritten Signature */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              With care,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#D8F57C",
              letterSpacing: -0.5,
              marginTop: 2,
            }}>
              Lena
            </div>
          </div>
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Role line */}
        <div style={{ fontSize: 12, color: "#8FAFB2", marginBottom: 14 }}>
          Customer Support · Mom of two autistic sons
        </div>

        {/* P.S. Section — Dual P.S. */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", marginBottom: 10 }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          82% of families saw clearer awareness in 2-4 weeks with daily wear. The ones who stopped after a week? The nervous system didn't have time to build the pathway. If you stopped early, that's not failure, it's the most common data point we see.
        </div>

        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          Your BCBA built the compliance. The body-signal layer builds the awareness. Together, they close the gap your child has been stuck in.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      {/* Gradient accent bar */}
      <div style={{ margin: "0 auto 28px", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />

      <p style={{ fontFamily: F.main, fontSize: 11.5, color: "#8A9B9D", margin: "0 0 8px", lineHeight: 1.65 }}>
        You're receiving this because you purchased from BrightKidCo. If your child's situation has changed, you can update preferences or unsubscribe anytime.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo LLC · 123 Commerce Street, Suite 200, Portland, OR 97201
      </p>

      {/* Social Icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0" }}>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="#1F2D2F" stroke="none" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>

      {/* Links */}
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 6px" }}>
        <a href="#" style={{ color: "#1F2D2F", textDecoration: "none" }}>Shop</a> · <a href="#" style={{ color: "#1F2D2F", textDecoration: "none" }}>FAQ</a> · <a href="#" style={{ color: "#1F2D2F", textDecoration: "none" }}>Contact</a>
      </p>

      <p style={{ fontFamily: F.main, fontSize: 11.5, color: "#8A9B9D", margin: 0 }}>
        No longer want to receive these emails? <a href="#" style={{ color: "#1F2D2F", textDecoration: "underline" }}>Unsubscribe</a>.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window.EMAILS = window.EMAILS || {}, { "winback-a/winback-a-19-e2-l2": Email_winback_a_19_e2_l2 });
