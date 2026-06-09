/* Replenish C — E1 | 150-Day Rotation Refresh (Cross-Level)
   Wireframe: wireframes/replenish-c/repc-17-e1.md
   Copy: copy/replenish-c/repc-17-e1.md
   Flow 17 · Day 150 post-purchase · 5+5 buyers
   Generated: 2026-06-09
*/

const Email_replenish_c_repc_17_e1 = () => (
  <EmailShell preheader="Your 5+5 has been working hard for 150 days. Here's what to ask yourself, and when to refresh the rotation." bg="#FAF7F2">

    {/* === SECTION 1: HEADER — Brand Logo === */}
    <div style={{ background: "#FAF7F2", padding: "24px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Tally-mark texture — 150 marks in #E5DDD3, grouped in 5s */}
      <svg width="380" height="18" viewBox="0 0 380 18" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", opacity: 0.25 }}>
        {Array.from({ length: 30 }, (_, gi) =>
          Array.from({ length: 5 }, (_, ti) => {
            const x = gi * 12.5 + ti * 2.2;
            const isGroupFive = (gi + 1) % 5 === 0;
            return ti < 4 ? (
              <line key={`${gi}-${ti}`} x1={x} y1="2" x2={x} y2="14" stroke="#C4956A" strokeWidth="1.2" opacity={isGroupFive ? 0.7 : 0.4} />
            ) : (
              <line key={`${gi}-${ti}`} x1={x - 5} y1="2" x2={x + 4} y2="14" stroke="#C4956A" strokeWidth="1.2" opacity={isGroupFive ? 0.7 : 0.4} />
            );
          })
        )}
      </svg>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34, position: "relative" }} />
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 2: HERO — HERO-8 Visual Metaphor (150-Day Milestone Line) === */}
    <div style={{ background: "#FAF7F2", padding: "0 32px 24px", textAlign: "center" }}>

      {/* Washi-tape accent — journal/scrapbook aesthetic */}
      <div style={{ width: 140, height: 8, background: "linear-gradient(90deg, #E5DDD3 0%, #D4C9BC 50%, #E5DDD3 100%)", borderRadius: 2, margin: "0 auto 20px", opacity: 0.7 }} />

      {/* Timeline contraption — 150-Day Line with milestone dots */}
      <svg width="340" height="90" viewBox="0 0 340 90" style={{ display: "block", margin: "0 auto 20px" }}>
        {/* Main timeline line */}
        <line x1="20" y1="40" x2="320" y2="40" stroke="#B8A99A" strokeWidth="2" strokeDasharray="4 3" />

        {/* Day 1 — smallest circle */}
        <circle cx="20" cy="40" r="5" fill="#B8A99A" opacity="0.6" />
        <text x="20" y="62" textAnchor="middle" fontFamily="-apple-system, Segoe UI, Roboto, sans-serif" fontSize="10" fill="#6B655E">Day 1</text>

        {/* Day 30 — small circle */}
        <circle cx="76" cy="40" r="6" fill="#B8A99A" opacity="0.7" />
        <text x="76" y="62" textAnchor="middle" fontFamily="-apple-system, Segoe UI, Roboto, sans-serif" fontSize="10" fill="#6B655E">30</text>

        {/* Day 60 — medium circle (first wash cycle) */}
        <circle cx="132" cy="40" r="7.5" fill="#B8A99A" opacity="0.8" />
        <text x="132" y="62" textAnchor="middle" fontFamily="-apple-system, Segoe UI, Roboto, sans-serif" fontSize="10" fill="#6B655E">60</text>

        {/* Day 90 — medium-large (first signal observed) */}
        <circle cx="188" cy="40" r="9" fill="#8BA89C" opacity="0.8" />
        <text x="188" y="62" textAnchor="middle" fontFamily="-apple-system, Segoe UI, Roboto, sans-serif" fontSize="10" fill="#6B655E">90</text>

        {/* Day 120 — larger (routine established) */}
        <circle cx="244" cy="40" r="10.5" fill="#8BA89C" opacity="0.9" />
        <text x="244" y="62" textAnchor="middle" fontFamily="-apple-system, Segoe UI, Roboto, sans-serif" fontSize="10" fill="#6B655E">120</text>

        {/* Day 150 — starburst (milestone, you're here) */}
        <circle cx="320" cy="40" r="12" fill="#C4956A" />
        <circle cx="320" cy="40" r="16" fill="none" stroke="#C4956A" strokeWidth="1" opacity="0.4" />
        <circle cx="320" cy="40" r="20" fill="none" stroke="#C4956A" strokeWidth="0.5" opacity="0.2" />
        <text x="320" y="62" textAnchor="middle" fontFamily="-apple-system, Segoe UI, Roboto, sans-serif" fontSize="10" fontWeight="700" fill="#C4956A">150</text>
      </svg>

      {/* Hero illustration placeholder — worn vs fresh pair */}
      <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 24 }}>
        <ImgFrame height={200} label="HERO ILLUSTRATION" sublabel="worn-vs-fresh-pair.png — side-by-side worn (left) vs fresh (right), soft watercolor style" radius={16} />
      </div>

      {/* Milestone Quote */}
      <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 22, fontWeight: 400, fontStyle: "italic", lineHeight: 1.4, color: "#2D2B28", margin: 0 }}>
        150 days of showing up.<br />That's real commitment.
      </p>
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 3: OPENER — Universal Recognition === */}
    <div style={{ background: "#FAF7F2", padding: "32px 32px 24px" }}>
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#2D2B28", margin: "0 0 16px" }}>
        Whether you've seen your child pause, look down, and walk to the bathroom, or you're still waiting for that first signal, if the 5+5 bundle has been part of your routine for the last 5 months, this worth a read.
      </p>
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#2D2B28", margin: 0 }}>
        Your 5+5 has been through a lot. Daily wear. Machine washes. Body heat. That gentle "uh-oh" sensation your child's nervous system has been learning from has been working, every single day.
      </p>
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 4: RECOGNITION ANCHORS — 5 anchors with em-dash markers === */}
    <div style={{ background: "#FAF7F2", padding: "32px 32px 24px" }}>
      {/* Intro line */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#2D2B28", margin: "0 0 20px" }}>
        At 5 months in, you've probably seen one of these:
      </p>

      {/* Anchor 1 */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          Your child pauses mid-play and looks down. That pause didn't happen before.
        </p>
      </div>

      {/* Anchor 2 */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          They pull at their pants or show you with a gesture when they notice.
        </p>
      </div>

      {/* Anchor 3 */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          They've walked toward the bathroom, even if the timing isn't perfect yet.
        </p>
      </div>

      {/* Anchor 4 */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          They tolerate sitting on the toilet without a meltdown.
        </p>
      </div>

      {/* Anchor 5 */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          You're still waiting, and that's a real outcome too.
        </p>
      </div>

      {/* R5 callout — timeline flexibility */}
      <div style={{ background: "#F6F2EA", borderRadius: 8, padding: "14px 16px", borderLeft: "3px solid #C4956A" }}>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: 1.55, color: "#6B655E", margin: 0, fontStyle: "italic" }}>
          <strong style={{ color: "#C4956A", fontWeight: 600, fontStyle: "normal" }}>R5 applied:</strong> Every timeline is different. Some kids show awareness in 2-4 weeks. For others, the first signal takes 8-12 weeks. At 150 days, you have real data, and that's valuable regardless of where you are on that curve.
        </p>
      </div>
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 5: WHAT CHANGES AT 5 MONTHS — Mechanism (EDU-10) === */}
    <div style={{ background: "#FAF7F2", padding: "32px 32px 24px" }}>
      {/* Bold intro */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: "#2D2B28", margin: "0 0 16px" }}>
        Here's something most parents don't think about until it matters: the Body-Signal Learning Layer isn't magic, it's physics + neurology working together. The cotton inner layer creates the signal. The smart absorption layer protects without blocking it. The outer barrier keeps it leak-resistant.
      </p>

      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#2D2B28", margin: "0 0 16px" }}>
        After 5 months of consistent wear, 150+ washes: the fabric relaxes. The elastic loses tension. The signal-creation layer isn't as crisp as it was on Day 1.
      </p>

      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#2D2B28", margin: 0 }}>
        That doesn't mean it stopped working. It means the learning layer your child's nervous system has been building a relationship with, it's earned a refresh.
      </p>
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 6: PRODUCT & OFFER — No Urgency === */}
    <div style={{ background: "#FAF7F2", padding: "32px 32px 24px" }}>
      {/* Lead-in */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: "#2D2B28", margin: "0 0 16px" }}>
        A fresh 5+5 bundle means:
      </p>

      {/* Benefit list with em-dash markers */}
      <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          Crisp elastic for a clean fit
        </p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          Full-strength Body-Signal Learning Layer response
        </p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          New designs, same signal
        </p>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 20, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#C4956A", flexShrink: 0, marginTop: 1 }}>—</span>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#2D2B28", margin: 0 }}>
          Enough rotation to keep laundry manageable (10 pairs minimum for consistent learning)
        </p>
      </div>

      {/* Gift angle — gentle, no urgency */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#6B655E", margin: 0, fontStyle: "italic" }}>
        Or, if your child has graduated sizes or your journey has changed, a smaller pack might be what works now. Or a gift for another family navigating the same path. Whatever fits where you are.
      </p>
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 7: THREE-FAMILY TESTIMONIAL — SP-06 === */}
    <div style={{ background: "#FAF7F2", padding: "32px 32px 24px" }}>
      {/* Intro */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: "#2D2B28", margin: "0 0 20px" }}>
        Three different families. Three different kids. One common thread, the 150-day mark.
      </p>

      {/* Card 1 — L1 (Sarah-type): #E8DED2 bg */}
      <div style={{ background: "#E8DED2", borderRadius: 12, padding: 20, marginBottom: 16 }}>
        {/* Quote mark */}
        <div style={{ fontFamily: "'Georgia', serif", fontSize: 36, lineHeight: 1, color: "#C4956A", marginBottom: 8, fontWeight: 700 }}>"</div>
        <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#2D2B28", margin: "0 0 12px" }}>
          He told me when he had to go for the first time last week. It took 4 months, but he said 'potty.' I cried. I reordered that same day.
        </p>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "italic", lineHeight: 1.4, color: "#6B655E", margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>
          BrightKidCo parent review
        </p>
      </div>

      {/* Card 2 — L2 (Lisa-type): #DCE4D8 bg */}
      <div style={{ background: "#DCE4D8", borderRadius: 12, padding: 20, marginBottom: 16 }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: 36, lineHeight: 1, color: "#8BA89C", marginBottom: 8, fontWeight: 700 }}>"</div>
        <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#2D2B28", margin: "0 0 12px" }}>
          We tried the BCBA protocols for 2 years. Nothing clicked until we added the Body-Signal layers. She started pausing at Week 6. By Month 5, she was initiating twice a week. Those aren't big numbers to most people, they're huge for us.
        </p>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "italic", lineHeight: 1.4, color: "#6B655E", margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>
          BrightKidCo parent
        </p>
      </div>

      {/* Card 3 — L3 (Maria-type): #E2DCE4 bg */}
      <div style={{ background: "#E2DCE4", borderRadius: 12, padding: 20, marginBottom: 20 }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: 36, lineHeight: 1, color: "#B8A99A", marginBottom: 8, fontWeight: 700 }}>"</div>
        <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#2D2B28", margin: "0 0 12px" }}>
          He's not trained. But at 5 months, he felt something for the first time and looked down. That had literally never happened in 9 years. 150 days in, and the signal is getting through.
        </p>
        <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "italic", lineHeight: 1.4, color: "#6B655E", margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>
          BrightKidCo parent
        </p>
      </div>
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 8: CTA — CTA-11 Permission CTA === */}
    <div style={{ background: "#FAF7F2", padding: "30px 32px", textAlign: "center" }}>
      {/* Primary CTA button — amber (#C4956A) */}
      <a href="https://www.brightkidco.com/collections/all-products" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#C4956A",
        color: "#FFFFFF",
        fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif",
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: 0.3,
        textDecoration: "none",
        borderRadius: 8,
        height: 48,
        lineHeight: "48px",
        marginBottom: 16,
      }}>
        See the refreshed 5+5 →
      </a>

      {/* Secondary CTA — text link */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 14, fontWeight: 400, margin: "0 0 16px" }}>
        <a href="https://www.brightkidco.com/collections/all-products" style={{ color: "#C4956A", textDecoration: "underline" }}>
          Explore single pairs &amp; accessories →
        </a>
      </p>

      {/* Permission framing */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#6B655E", fontStyle: "italic", margin: 0 }}>
        If the 5+5 still fits your routine, a fresh set keeps the signal strong. If you're not sure what you need, reply to this email and I'll help you figure it out. No pressure either way.
      </p>
    </div>

    {/* Thin divider — #E5DDD3 */}
    <div style={{ height: 1, background: "#E5DDD3" }} />

    {/* === SECTION 9: LENA SIGN-OFF — SHORT variant === */}
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
          background: "linear-gradient(90deg, #C4956A 0%, #8BA89C 100%)", opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #C4956A 100%)",
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
              color: "#C4956A",
              letterSpacing: -0.5,
              marginTop: 2,
            }}>
              Lena
            </div>
          </div>

          {/* Tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#C4956A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#C4956A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. — personal milestone */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#C4956A", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          My older son was 8 before his body signals started connecting. 150 days is a milestone, wherever you are in the journey, that's real time invested. If you're thinking about reordering, the 60-day guarantee applies to every purchase.
        </div>
      </div>
    </div>

    {/* === SECTION 10: FOOTER — CAN-SPAM Compliant === */}
    <div style={{ background: "#FAF7F2", padding: "24px 32px 16px", textAlign: "center" }}>
      {/* Thin divider above footer */}
      <div style={{ height: 1, background: "#E5DDD3", marginBottom: 20 }} />

      {/* Brand name */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, color: "#2D2B28", margin: "0 0 4px" }}>
        BrightKidCo
      </p>

      {/* Tagline */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 11, lineHeight: 1.4, color: "#8A9B9D", fontStyle: "italic", margin: "0 0 12px" }}>
        Built for the brain that learns differently.
      </p>

      {/* Links */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 11, lineHeight: 1.4, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#C4956A", textDecoration: "underline" }}>Unsubscribe</a>
        {" | "}
        <a href="#" style={{ color: "#C4956A", textDecoration: "underline" }}>Manage Preferences</a>
        {" | "}
        <a href="#" style={{ color: "#C4956A", textDecoration: "underline" }}>Our Story</a>
      </p>

      {/* 60-Day Guarantee */}
      <p style={{ fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif", fontSize: 11, lineHeight: 1.4, color: "#8A9B9D", margin: 0 }}>
        60-Day Money-Back Guarantee on every order. If it doesn't work for your child, full refund. No forms. No questions.
      </p>
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["replenish-c/repc-17-e1"] = Email_replenish_c_repc_17_e1;
