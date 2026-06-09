/* Review Request Flow — E1 (Day 30-45) | Cross-Level (L1/L2/L3/GF)
   Wireframe: wireframes/review-request/review-18-e1.md
   Copy: copy/review-request/review-18-e1.md
   Strategy: strategy-map.json → review-request.emails.e1
   Generated: 2026-06-09
*/

const Email_review_request_review_18_e1 = () => (
  <EmailShell preheader="Your experience, whatever it looks like, helps another parent decide. 2 minutes can change everything for someone." bg="#FBF7F1">

    {/* === SECTION 1: PREHEADER BAR === */}
    <div style={{ padding: "6px 20px", background: "#F6F2EA", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#8A9B9D", margin: 0, lineHeight: 1.5 }}>
        Your experience, whatever it looks like, helps another parent decide. 2 minutes can change everything for someone.
      </p>
    </div>

    {/* === SECTION 2: HEADER === */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "8px 0 0", fontStyle: "italic" }}>
        Lena from BrightKidCo
      </p>
    </div>

    {/* === SECTION 3: HERO — HANDWRITTEN LETTER OPENER === */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px 36px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 14 }}>
        YOUR STORY MATTERS
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 22px" }}>
        Would you recommend us?
      </h1>

      {/* Hook paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 18px" }}>
        Whether your child showed their first awareness after 2 weeks, or you're still watching after 8, whether they said "wet" one day, showed you with a gesture, or you noticed a pause you've never seen before, if something shifted, even a little, it matters more than you might think.
      </p>

      {/* Hook paragraph 2 — bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Not because it proves the product works. Because <span style={{ fontWeight: 600, color: "#1F2D2F" }}>another parent needs to know what "working" actually looks like</span>.
      </p>
    </div>

    {/* ── Section divider ── */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ borderTop: "1px solid #E8E2DA" }} />
    </div>

    {/* === SECTION 4: RECOGNITION ANCHORS === */}
    <div style={{ background: "#FFFFFF", padding: "36px 30px" }}>
      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 600, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 18px" }}>
        Maybe you've seen one of these:
      </p>

      {/* Recognition Anchors Card */}
      <div style={{
        background: "#FBF7F1",
        borderRadius: 16,
        padding: 24,
        marginBottom: 20,
      }}>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          — A pause before the accident. Just one. But it happened.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          — A look down at wetness for the first time.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          — Pulling at their pants, or showing you with their body.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          — Staying dry 2 hours instead of 30 minutes.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          — Nothing noticeable yet, and you're still watching, still hoping.
        </p>
      </div>

      {/* Post-anchors closing */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Any one of these is real. And the parent reading this next week doesn't need a success story. They need an honest one.
      </p>
    </div>

    {/* ── Section divider ── */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ borderTop: "1px solid #E8E2DA" }} />
    </div>

    {/* === SECTION 5: THREE-FAMILY TESTIMONIALS === */}
    <div style={{ background: "#FFFFFF", padding: "36px 30px" }}>
      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 600, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        Three different kids. Three different timelines. One common thread:
      </p>

      {/* Card 1 — Sarah, L1 */}
      <div style={{
        background: "#FBF7F1",
        borderRadius: 16,
        borderLeft: "3px solid #2BAEB4",
        padding: 20,
        marginBottom: 16,
      }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He went from 'almost' to 'mostly' in about 6 weeks. I'd stopped believing that one missing piece, the signal, could make that much difference. It did."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: 0.05, color: "#8A9B9D", margin: "0 0 4px", textTransform: "uppercase" }}>
          Sarah, mom of a verbal 4-year-old
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#8A9B9D", margin: 0 }}>
          VERBAL · AGE 4
        </p>
      </div>

      {/* Card 2 — Lisa, L2 */}
      <div style={{
        background: "#FBF7F1",
        borderRadius: 16,
        borderLeft: "3px solid #5DD07A",
        padding: 20,
        marginBottom: 16,
      }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "She finally paused when she felt wetness. That was Week 4. We still have pull-up days. But she's feeling something for the first time."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: 0.05, color: "#8A9B9D", margin: "0 0 4px", textTransform: "uppercase" }}>
          Lisa, mom of a sensory-sensitive 6-year-old
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#8A9B9D", margin: 0 }}>
          SENSORY · AGE 6
        </p>
      </div>

      {/* Card 3 — Maria, L3 */}
      <div style={{
        background: "#FBF7F1",
        borderRadius: 16,
        borderLeft: "3px solid #8A9B9D",
        padding: 20,
        marginBottom: 20,
      }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He's not trained. But he felt something for the first time in 8 years. He looked down. He paused. That's enough for now."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: 0.05, color: "#8A9B9D", margin: "0 0 4px", textTransform: "uppercase" }}>
          Maria, mom of a non-verbal 9-year-old
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#8A9B9D", margin: 0 }}>
          NON-VERBAL · AGE 9
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 600, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        If your child fits any of these, your story is the one another parent needs to read.
      </p>
    </div>

    {/* ── Section divider ── */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ borderTop: "1px solid #E8E2DA" }} />
    </div>

    {/* === SECTION 6: LEADING QUESTIONS + CTA === */}
    <div style={{ background: "#FFFFFF", padding: "36px 30px" }}>
      {/* Lead-in */}
      <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 18px" }}>
        Here's what I'd love to know about your experience, and it doesn't have to be polished:
      </p>

      {/* Leading questions */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          → What was your child doing before BrightKidCo?
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          → What changed, even a small thing?
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          → What would you tell another parent who's considering this?
        </p>
      </div>

      {/* Low-bar framing */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "#8A9B9D", margin: "0 0 24px" }}>
        A short review, 3 sentences, 2 sentences, bullet points, helps another parent recognize their own child in your story.
      </p>

      {/* CTA button */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <a href="#" style={{
          display: "inline-block",
          width: "100%",
          padding: "15px 0",
          background: "#2BAEB4",
          color: "#FFFFFF",
          fontFamily: F.main,
          fontSize: 18,
          fontWeight: 700,
          textDecoration: "none",
          borderRadius: 999,
          lineHeight: 1.2,
          textAlign: "center",
        }}>
          Share your experience →
        </a>
      </div>

      {/* Secondary CTA */}
      <p style={{ fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        Or hit reply and tell me in your own words. I read everything, and I'll take care of the rest.
      </p>

      {/* Preview text */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontStyle: "italic", lineHeight: 1.5, color: "#8A9B9D", margin: 0 }}>
        Next time: A gentle follow-up — in case you wanted to share but ran out of time.
      </p>
    </div>

    {/* ── Section divider ── */}
    <div style={{ padding: "0 30px" }}>
      <div style={{ borderTop: "1px solid #E8E2DA" }} />
    </div>

    {/* === SECTION 7: 60-DAY GUARANTEE SEAL === */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px" }}>
      <div style={{
        background: "#FBF7F1",
        borderRadius: 16,
        border: "2px solid #5DD07A",
        padding: "20px 24px",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: F.main, fontSize: 16, color: "#1F2D2F", margin: 0 }}>
          Try it for 60 days. Your judgment.
        </p>
      </div>
    </div>

    {/* === SECTION 8: LENA SIGN-OFF — MEDIUM VARIANT === */}
    <div style={{ background: "#1F2D2F", padding: "0 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 50%, #D8F57C 100%)",
          opacity: 0.9,
        }} />

        {/* Closing */}
        <p style={{ fontFamily: F.main, fontSize: 16, color: "#FFFFFF", margin: "0 0 14px" }}>
          Talk soon,
        </p>

        {/* Handwritten name */}
        <div style={{ marginBottom: 14 }}>
          <p style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 42,
            lineHeight: 0.95,
            fontWeight: 500,
            color: "#2BAEB4",
            margin: "0 0 4px",
            letterSpacing: -0.5,
          }}>
            Lena —
          </p>
        </div>

        {/* Title */}
        <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 16px" }}>
          Customer Support · Mom of two autistic sons
        </p>

        {/* Dashed divider */}
        <div style={{ borderTop: "1.5px dashed #3A4547", marginBottom: 16 }} />

        {/* P.S. */}
        <p style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", lineHeight: 1.65, color: "#B8CACD", margin: 0 }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          Your story, the honest one, the one with ups and downs, is exactly what another mom needs to read this week.
        </p>
      </div>
    </div>

    {/* === SECTION 9: FOOTER === */}
    <div style={{ background: "#FFFFFF", padding: "24px 22px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11.5, color: "#8A9B9D", margin: "0 0 6px", fontStyle: "italic" }}>
        Standard unsubscribe and preference links apply.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 6px" }}>
        BrightKidCo, Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 14px" }}>
        <a href="#" style={{ color: "#1F2D2F", textDecoration: "underline" }}>Unsubscribe</a> · <a href="#" style={{ color: "#1F2D2F", textDecoration: "underline" }}>Update Preferences</a>
      </p>
      {/* Gradient accent bar */}
      <div style={{ margin: "0 auto", width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)", borderRadius: 3 }} />
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["review-request/review-18-e1"] = Email_review_request_review_18_e1;
