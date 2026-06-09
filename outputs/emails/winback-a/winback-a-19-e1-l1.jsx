/* Winback Path A — E1 | L1 (Sarah)
   Wireframe: wireframes/winback-a/winback-a-19-e1-l1.md
   Copy: copy/winback-a/winback-a-19-e1-l1.md
   Strategy: strategy-map.json → flows.winback-a.emails.e1-l1
   Generated: 2026-06-09
*/

const Email_winback_a_19_e1_l1 = () => (
  <EmailShell preheader="You bought the Body-Signal underwear 90 days ago. If you paused, here's why that might have been exactly right for your child." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#8A9B9D" }}>
        You bought the Body-Signal underwear 90 days ago. If you paused, here's why that might have been exactly right for your child.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-10 Bold Declaration
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 20, textAlign: "center" }}>
        WINBACK · DAY 0
      </div>

      {/* Lifestyle hero image */}
      <div style={{ marginBottom: 28, textAlign: "center" }}>
        <div style={{
          width: 420, maxWidth: "100%", height: 220, borderRadius: 16,
          border: "2px solid #1F2D2F", boxShadow: "4px 4px 0 #1F2D2F",
          overflow: "hidden", background: "#FBF7F1",
        }}>
          <ImgFrame height={220} radius={0} label="Lifestyle" sublabel="Child playing with train" />
        </div>
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.02, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        Pre-K is coming, here's the gap you can still close
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: "#4A6568", margin: 0, textAlign: "center" }}>
        It's been 90 days since you first tried the Body-Signal underwear. If you paused, here's why that might have been exactly right for your child.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: YELLOW ACCENT DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 0", textAlign: "center" }}>
      <div style={{ width: 60, height: 3, background: "#F5C84B", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-02 — Handwritten Opener (Hook)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px 24px" }}>
      {/* Hook paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        It's been 90 days since you first tried the Body-Signal underwear.
      </p>

      {/* Hook paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        Maybe your child wore them for a week, then pushed them away. Maybe you put them in a drawer after a few accidents, thinking "we'll try again later." Maybe nothing noticeable happened, and you weren't sure if anything was supposed to.
      </p>

      {/* Hook paragraph 3 — bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If any of that sounds familiar, that's normal. And that's okay.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER-02 — Validation Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      {/* Validation paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 16px" }}>
        Here's what we know from watching thousands of families: the interoception pathway is not a light switch. It's a slow bridge. Some kids cross it in two weeks. Some take months. Many need breaks, their nervous systems get overwhelmed by the new sensation, and stepping back is a self-regulation signal, not a failure.
      </p>

      {/* Validation paragraph 2 — bold reading path */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        <span style={{ fontWeight: 600, color: "#1F2D2F" }}>You didn't do anything wrong.</span> Your child didn't fail. The body-signal learning layer was doing its job, it was giving the nervous system information it had never received before. Sometimes that information takes a while to decode.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: ED1 — 3-Layer Product Diagram (Mechanism)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F8F6F3", padding: "32px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 20 }}>
        HOW IT WORKS
      </div>

      {/* 3-Layer Cross-Section Diagram */}
      <div style={{ background: "#FBF7F1", borderRadius: 16, padding: 24, marginBottom: 24 }}>
        {/* Layer 1 */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #E8E2DA" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>
              LAYER 1, COTTON INNER
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#4A6568" }}>
              Gentle wetness signal (30-60 second gentle sensation that lasts)
            </div>
          </div>
          <div style={{ width: 40, height: 4, background: "#2BAEB4", borderRadius: 2, marginLeft: 16, opacity: 0.8 }} />
        </div>

        {/* Layer 2 */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #E8E2DA" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>
              LAYER 2, SMART ABSORPTION
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#4A6568" }}>
              Absorbs without masking (Protects furniture/clothing)
            </div>
          </div>
          <div style={{ width: 40, height: 4, background: "#2BAEB4", borderRadius: 2, marginLeft: 16, opacity: 0.5 }} />
        </div>

        {/* Layer 3 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>
              LAYER 3, OUTER BARRIER
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#4A6568" }}>
              Leak-resistant barrier (No diaper-mode feeling)
            </div>
          </div>
          <div style={{ width: 40, height: 4, background: "#2BAEB4", borderRadius: 2, marginLeft: 16, opacity: 0.3 }} />
        </div>
      </div>

      {/* Pull-ups comparison */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 600, color: "#1F2D2F", margin: "0 0 16px" }}>
        Pull-ups wick that signal away in seconds. Regular underwear doesn't create enough of it.
      </p>

      {/* "Starting again isn't starting over" — emotional core */}
      <p style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 400, fontStyle: "italic", color: "#2BAEB4", margin: 0, textAlign: "center" }}>
        Starting again isn't starting over.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: YELLOW ACCENT DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 0", textAlign: "center" }}>
      <div style={{ width: 60, height: 3, background: "#F5C84B", margin: "0 auto" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: SP-02 — Expert Endorsement (Two Testimonials)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 20 }}>
        WHAT PARENTS SAY
      </div>

      {/* Card 1 — Mint BG */}
      <div style={{ background: "#DBFFCD", borderLeft: "3px solid #5DD07A", borderRadius: 16, padding: 20, marginBottom: 16 }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", color: "#555555", margin: "0 0 12px", lineHeight: 1.5 }}>
          "We bought the 3+3 bundle and the first two weeks were rough. He'd wear them for an hour then ask to take them off. I almost gave up. Then at week three, he paused mid-play, looked down, and walked to the potty. He didn't make it in time, but that pause had NEVER happened before. We're still at it, but now I know something IS happening in there."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>
          — L1 mom, verified BrightKidCo review
        </p>
      </div>

      {/* Card 2 — Mint BG */}
      <div style={{ background: "#DBFFCD", borderLeft: "3px solid #2BAEB4", borderRadius: 16, padding: 20 }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 400, fontStyle: "italic", color: "#555555", margin: "0 0 12px", lineHeight: 1.5 }}>
          "Pre-K was 4 months away. After 90 days of wearing them inconsistently, something clicked. It wasn't overnight. But he started telling me AFTER instead of me finding out. That was the first sign."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>
          — Sarah, verified BrightKidCo review
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: PRODUCT SHOWCASE — ProductShowcaseFull
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px" }}>
      <div style={{ border: "2px solid #1F2D2F", borderRadius: 16, boxShadow: "4px 4px 0 #1F2D2F", overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          {/* Product Image */}
          <div style={{ width: 200, height: 280, borderRight: "2px solid #1F2D2F", background: "#FBF7F1", flexShrink: 0 }}>
            <ImgFrame height={280} radius={0} label="Product" sublabel="Training Pants" />
          </div>

          {/* Product Details */}
          <div style={{ flex: 1, padding: 24 }}>
            {/* Eyebrow */}
            <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 8 }}>
              THE 3+3 BUNDLE
            </div>

            {/* Subhead */}
            <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, color: "#1F2D2F", margin: "0 0 8px" }}>
              6 pairs in rotation
            </p>

            {/* Price */}
            <p style={{ fontFamily: F.main, fontSize: 24, fontWeight: 700, color: "#1F2D2F", margin: "0 0 8px" }}>
              $79.99
            </p>

            {/* Free shipping */}
            <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, color: "#5DD07A", margin: "0 0 8px" }}>
              Free shipping
            </p>

            {/* Per-pair cost */}
            <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>
              $13.33/pair
            </p>
          </div>
        </div>
      </div>

      {/* WELCOME10 code */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, color: "#2BAEB4", margin: "20px 0 0" }}>
        Use code WELCOME10 at checkout for 10% off.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CTA-5 — Product CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", textAlign: "center" }}>
      {/* Primary CTA Button */}
      <a href="#" style={{
        display: "block", padding: "0 32px", height: 52, lineHeight: "52px",
        background: "#2BAEB4", color: "#FFFFFF", fontFamily: F.main,
        fontSize: 18, fontWeight: 700, textDecoration: "none",
        borderRadius: 999, textAlign: "center", boxSizing: "border-box",
      }}>
        Restart with the 3+3 Bundle →
      </a>

      {/* Fine print */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: "#8A9B9D", margin: "16px 0 0" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Secondary CTA */}
      <p style={{ fontFamily: F.main, fontSize: 14, marginTop: 16, marginBottom: 0 }}>
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>
          or try 1 Pair for $34.99
        </a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 30px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TRUST-1 — 60-Day Guarantee Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", textAlign: "center" }}>
      {/* Seal */}
      <div style={{
        display: "inline-block", background: "#FBF7F1",
        border: "2px solid #5DD07A", borderRadius: "50%",
        width: 100, height: 100, lineHeight: "100px",
        textAlign: "center", marginBottom: 16,
      }}>
        <span style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, color: "#5DD07A", lineHeight: 1.3, display: "inline-block", verticalAlign: "middle" }}>
          60 DAYS<br/>· YOUR JUDGMENT ·
        </span>
      </div>

      {/* Body text */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        60-Day Guarantee. Try the underwear again at your own pace. If your child hasn't shown progress, or if you decide it's not the right time, full refund. No questions. No returns hassle. Your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: SIGNOFF — Lena Sign-Off (SHORT variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "24px 30px" }}>
      <div style={{
        background: "#1F2A2C", border: "1.5px solid #2F3D40",
        borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* Top gradient accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)" }} />

        {/* "Talk soon," */}
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#B8CACD", margin: "0 0 8px" }}>
          Talk soon,
        </p>

        {/* Handwritten signature */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42,
              lineHeight: 0.95, fontWeight: 500, color: "#2BAEB4",
              letterSpacing: -0.5, marginTop: 2,
            }}>
              Lena
            </div>
          </div>
          {/* Flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Subtitle */}
        <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 16px" }}>
          Customer Support · Mom of two autistic sons
        </p>

        {/* Dashed divider */}
        <div style={{ borderTop: "1px dashed #3A4547", marginBottom: 16 }} />

        {/* P.S. 1 */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", marginBottom: 12 }}>
          <span style={{ color: "#2BAEB4", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          60 days to try again. By your judgment.{" "}
          <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>Restart with 3+3 Bundle</a>
        </div>

        {/* P.S. 2 */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#2BAEB4", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          Pre-K is [X months] away. You have time. This the gap you can still close.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo · Brooklyn, NY 11201
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px" }}>
        No longer want these emails? <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, fontStyle: "italic", color: "#2BAEB4", margin: "0 0 8px" }}>
        Built for the brain that learns differently.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 10, fontWeight: 400, color: "#8A9B9D", margin: "0 0 20px" }}>
        © 2026 BrightKidCo. All rights reserved.
      </p>
      {/* Gradient accent bar */}
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", margin: "0 auto", borderRadius: 3 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: EASTER EGG — Pause is Progress
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 30px 32px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
        {/* 🧠 → ⚡ → ⏸ → 🚶 → 🧠✓ */}
        <span style={{ fontSize: 16 }}>🧠</span>
        <span style={{ fontSize: 10, color: "#8A9B9D" }}>→</span>
        <span style={{ fontSize: 16 }}>⚡</span>
        <span style={{ fontSize: 10, color: "#8A9B9D" }}>→</span>
        <span style={{ fontSize: 16 }}>⏸</span>
        <span style={{ fontSize: 10, color: "#8A9B9D" }}>→</span>
        <span style={{ fontSize: 16 }}>🚶</span>
        <span style={{ fontSize: 10, color: "#8A9B9D" }}>→</span>
        <span style={{ fontSize: 16 }}>🧠✓</span>
      </div>
      <p style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#4A6568", margin: "8px 0 0" }}>
        Your child's nervous system was learning in the pause too.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_a_19_e1_l1 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e1-l1"] = Email_winback_a_19_e1_l1;
