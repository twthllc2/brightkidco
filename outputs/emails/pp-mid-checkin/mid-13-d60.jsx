/* PP Mid Check-In — D60 | Cross-Level
   Wireframe: wireframes/pp-mid-checkin/mid-13-d60.md
   Copy: copy/pp-mid-checkin/mid-13-d60.md
   Strategy: strategy-map.json → flows.pp-mid-checkin.emails.d60
   Generated: 2026-06-09
*/

const Email_pp_mid_checkin_13_d60 = () => (
  <EmailShell preheader="Whether your child is showing clear signs or still building awareness, both belong here." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo + Thin Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 24px 18px", textAlign: "center", borderBottom: "1px solid #E6E2DC" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-5 Mirror Moment
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px 40px" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 20, textAlign: "center" }}>
        DAY 60 CHECK-IN
      </div>

      {/* Hook */}
      <h1 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, lineHeight: 1.3, color: "#1F2D2F", margin: "0 0 24px", textAlign: "center" }}>
        60 days. Where are you?
      </h1>

      {/* Body — verbatim from copy */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        60 days. That's two months of consistent wear, consistent signals, consistent learning.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Whether your child is starting to pause before an accident, or you're still waiting for the first sign of awareness, both are real outcomes. Both belong in this conversation.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Because the nervous system doesn't follow a calendar. Some kids show first signals at 2 weeks. Others need 8 to 12 weeks. Some are building awareness quietly, in ways that don't look like "progress" on a chart but are real steps inside the brain.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Wherever you are right now, that's where this email meets you.
      </p>

      {/* Signal-Strength Indicator */}
      <div style={{ marginTop: 32, padding: "20px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0 }}>
          {/* Stage 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2BAEB4" }} />
            <div style={{ fontFamily: F.main, fontSize: 10, color: "#8A9B9D", marginTop: 6, textAlign: "center", whiteSpace: "nowrap" }}>Just Beginning</div>
          </div>
          {/* Line 1 */}
          <div style={{ width: 60, height: 1, background: "#8A9B9D", margin: "0 6px", marginBottom: 18 }} />
          {/* Stage 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2BAEB4" }} />
            <div style={{ fontFamily: F.main, fontSize: 10, color: "#8A9B9D", marginTop: 6, textAlign: "center", whiteSpace: "nowrap" }}>Building</div>
          </div>
          {/* Line 2 */}
          <div style={{ width: 60, height: 1, background: "#8A9B9D", margin: "0 6px", marginBottom: 18 }} />
          {/* Stage 3 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", border: "2px solid #5DD07A", background: "#FFFFFF" }} />
            <div style={{ fontFamily: F.main, fontSize: 10, color: "#8A9B9D", marginTop: 6, textAlign: "center", whiteSpace: "nowrap" }}>Signaling</div>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: Dot Pattern Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "8px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ width: 2, height: 2, borderRadius: "50%", background: "#8A9B9D" }} />
        ))}
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-03 — Three-Path Validation
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>

      {/* Header — verbatim */}
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 24px", lineHeight: 1.4 }}>
        Let me name what might be true for you:
      </p>

      {/* PATH 1: If you're seeing progress */}
      <div style={{ background: "#FBF7F1", borderRadius: 12, padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
          <div style={{ flexShrink: 0, marginTop: 2 }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#5DD07A" />
              <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#1F2D2F", margin: 0 }}>If you're seeing progress:</p>
          </div>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          Your child pauses before peeing. Or pulls at their pants when wet. Or walked toward the bathroom, even after the accident. That's the body signal wiring.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          The brain is learning: "This feeling means something. I should do something about it."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          Keep going. Growing awareness leads to longer dry periods. Some kids start initiating, showing you, telling you, or leading you to the bathroom. That's the next phase.
        </p>
      </div>

      {/* PATH 2: If you're not seeing what you hoped */}
      <div style={{ background: "#FBF7F1", borderRadius: 12, padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
          <div>
            <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#1F2D2F", margin: 0 }}>If you're not seeing what you hoped:</p>
          </div>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px", fontStyle: "italic" }}>
          That's not failure. That's neurology.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          Every nervous system has its own pace. Some children need more time for the body-signal feedback loop to register.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          The 60-day window exists because we know timelines vary. If your child is slow to pick up signals, doesn't seem to feel wet or dry, they may need more sustained exposure. The neural pathways are still forming even when there's no visible sign.
        </p>
      </div>

      {/* PATH 3: If you're somewhere in between */}
      <div style={{ background: "#FBF7F1", borderRadius: 12, padding: 20 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
          <div>
            <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#1F2D2F", margin: 0 }}>If you're somewhere in between, mini-wins mixed with setbacks:</p>
          </div>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          That's the most common path. Progress isn't a straight line. It looks more like:
        </p>

        {/* Pull-Quote */}
        <div style={{ borderLeft: "2px solid #8A9B9D", paddingLeft: 16, marginBottom: 14 }}>
          <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
            "Two steps forward, one step back, a plateau, then another step."
          </p>
        </div>

        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          Regression after progress isn't starting over. The pathways you built are still there. The nervous system is recalibrating.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-03 — Recognition Anchors
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 20px", lineHeight: 1.4 }}>
        You've probably seen some version of one of these by now:
      </p>

      {/* Anchor items — verbatim from copy */}
      <div style={{ marginBottom: 14 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, paddingLeft: 14, textIndent: -14 }}>
          — He paused mid-play. Looked down at his pants. Then kept playing. But that pause, that never happened before.
        </p>
      </div>
      <div style={{ marginBottom: 14 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, paddingLeft: 14, textIndent: -14 }}>
          — She felt wet and pulled at her pants. Then signed or said "wet", a first.
        </p>
      </div>
      <div style={{ marginBottom: 14 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, paddingLeft: 14, textIndent: -14 }}>
          — He stayed dry for 2 hours instead of 45 minutes. Small shift. Real shift.
        </p>
      </div>
      <div style={{ marginBottom: 14 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, paddingLeft: 14, textIndent: -14 }}>
          — She's been in the underwear for 8 weeks and there's no change yet. Still waiting.
        </p>
      </div>
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, paddingLeft: 14, textIndent: -14 }}>
          — He walks toward the bathroom after an accident, not before, but the connection is building.
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", fontStyle: "italic", margin: 0 }}>
        If any of these match your experience, you're on the path. Your child's path.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: Dot Pattern Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "8px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ width: 2, height: 2, borderRadius: "50%", background: "#8A9B9D" }} />
        ))}
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SP-06 — Three-Family Testimonial Pattern
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 24px", lineHeight: 1.4 }}>
        Three parents, three different kids, one common experience at 60 days:
      </p>

      {/* Card 1 — L1 Mom */}
      <div style={{ background: "#F2F5F0", borderRadius: 16, borderLeft: "2px solid #8B9D83", padding: 22, marginBottom: 16 }}>
        <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He went from 'I need to pee' after the fact to pausing before. Not every time. But sometimes. That's more than we had in 3 years of trying other methods."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: 0, letterSpacing: 0.02 }}>
          — Week 8 update from a mom whose 4-year-old "almost trained" for two years
        </p>
      </div>

      {/* Card 2 — L2 Mom */}
      <div style={{ background: "#F2F5F0", borderRadius: 16, borderLeft: "2px solid #8B9D83", padding: 22, marginBottom: 16 }}>
        <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "She finally paused when she felt wetness. That was Week 6. Then nothing for two weeks. Then she looked down again. It's slow, but it's happening."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: 0, letterSpacing: 0.02 }}>
          — Week 8 update from a mom whose 7-year-old has sensory processing differences and had tried BCBA protocols for years
        </p>
      </div>

      {/* Card 3 — L3 Mom */}
      <div style={{ background: "#F2F5F0", borderRadius: 16, borderLeft: "2px solid #8B9D83", padding: 22, marginBottom: 20 }}>
        <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He's not trained. But he's feeling something for the first time. He looked at the wet spot. That's everything."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: 0, letterSpacing: 0.02 }}>
          — Week 8 update from a mom whose 9-year-old is non-verbal and had never shown any awareness of body signals in his life
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", fontStyle: "italic", margin: 0 }}>
        If any of these sound like your story, the signal is working, even if it's quiet.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: Dot Pattern Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "8px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ width: 2, height: 2, borderRadius: "50%", background: "#8A9B9D" }} />
        ))}
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: EDU-10 — Troubleshooting (3 Checks)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F", margin: "0 0 24px", lineHeight: 1.4 }}>
        If you're still not seeing signs, here are three things to check before considering next steps:
      </p>

      {/* Check 1: Consistency of Wear */}
      <div style={{ background: "#F2F5F0", borderRadius: 12, padding: 20, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{ flexShrink: 0, marginTop: 2 }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#5DD07A" />
              <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", margin: "0 0 10px" }}>Consistency of wear.</p>
            <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
              Is your child getting 2-4 hours in the Body-Signal underwear most days? The learning happens through repeated exposure. Gaps of 2-3 days can slow the feedback loop.
            </p>
            <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
              Try increasing wear time gradually, 30 more minutes each week.
            </p>
          </div>
        </div>
      </div>

      {/* Check 2: Stress Around Bathroom Time */}
      <div style={{ background: "#F2F5F0", borderRadius: 12, padding: 20, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{ flexShrink: 0, marginTop: 2 }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#5DD07A" />
              <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", margin: "0 0 10px" }}>Stress around bathroom time.</p>
            <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
              If bathroom visits feel like pressure, the child's nervous system tightens. Learning shuts down.
            </p>
            <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
              Try stepping back entirely for 3-5 days, no prompts, no questions, just wear. Let the underwear do the teaching.
            </p>
          </div>
        </div>
      </div>

      {/* Check 3: Sensory Tolerance */}
      <div style={{ background: "#F2F5F0", borderRadius: 12, padding: 20 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{ flexShrink: 0, marginTop: 2 }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#5DD07A" />
              <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", margin: "0 0 10px" }}>Sensory tolerance.</p>
            <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
              If your child is refusing to wear the underwear or taking it off immediately, that's sensory, not defiance.
            </p>
            <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
              Try shorter intervals (20-30 minutes) paired with a preferred activity. Build tolerance slowly. Some kids need 12+ weeks before the sensation becomes familiar enough to register.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: TRUST-1 — 60-Day Guarantee Frame
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "48px 24px" }}>
      <div style={{ background: "#F2F5F0", borderRadius: 16, padding: 32, textAlign: "center" }}>

        {/* Guarantee Badge */}
        <div style={{ display: "inline-block", background: "#2BAEB4", borderRadius: 999, padding: "6px 16px", marginBottom: 16 }}>
          <span style={{ fontFamily: F.main, fontSize: 12, fontWeight: 700, color: "#FFFFFF", letterSpacing: 1, textTransform: "uppercase" }}>
            60-DAY GUARANTEE
          </span>
        </div>

        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          The 60-Day Guarantee is here. If you feel this approach isn't right for your child, for any reason, you're welcome to use it. No questions. No hoops.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          But before you decide: try increasing wear time for another two weeks. Some of the biggest shifts happen between week 8 and week 12. The nervous system sometimes needs that extra window.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
          You decide what's right for your family. That's always been the deal.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: ProductShowcaseSoft — Gentle Reorder
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        If you're seeing signs, even small ones, your child may need fresh pairs to continue the learning without gaps.
      </p>

      {/* Product Card 1 — 3+3 Bundle */}
      <div style={{ background: "#FBF7F1", borderRadius: 16, padding: 22, marginBottom: 14, textAlign: "center" }}>
        <ImgFrame height={160} label="PRODUCT IMAGE" sublabel="Body-Signal Learning Underwear · Unicorn Pink" radius={0} />
        <div style={{ marginTop: 16 }}>
          <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", margin: "0 0 6px" }}>3+3 Bundle</p>
          <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568", margin: "0 0 4px" }}>$79.99 · free shipping</p>
          <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>$13.33 per pair — less than half single-pair price</p>
        </div>
      </div>

      {/* Product Card 2 — 5+5 Bundle */}
      <div style={{ background: "#FBF7F1", borderRadius: 16, padding: 22, marginBottom: 20, textAlign: "center" }}>
        <div style={{ padding: "20px 0" }}>
          <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", margin: "0 0 6px" }}>5+5 Bundle</p>
          <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568", margin: "0 0 4px" }}>$119.99 · free shipping</p>
          <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>$12.00 per pair — best value</p>
        </div>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
        If you're not there yet, that's okay. The product will be here when you're ready. So will I.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: CTA-2 — Soft Link
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px", textAlign: "center" }}>

      {/* Primary CTA */}
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 28px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 600,
        textDecoration: "none",
        borderRadius: 6,
        width: "100%",
        maxWidth: 320,
        boxSizing: "border-box",
        textAlign: "center",
        marginBottom: 12,
      }}>
        Reorder your Body-Signal underwear →
      </a>

      {/* Secondary CTA */}
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 28px",
        background: "transparent",
        color: "#2BAEB4",
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 600,
        textDecoration: "none",
        borderRadius: 6,
        border: "1px solid #2BAEB4",
        width: "100%",
        maxWidth: 320,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        Hit reply — Lena reads every message
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: LETTER-03 — Closing Circle
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px" }}>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Whether your child is showing clear awareness, building it slowly, or still waiting for the first spark, the fact that you've given this 60 days of consistent effort says everything about your commitment.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Not every parent makes it to this checkpoint.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px", fontWeight: 700 }}>
        You did.
      </p>

      {/* Pull-Quote */}
      <div style={{ textAlign: "center", padding: "8px 0" }}>
        <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          "Trust your read."
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: Lena Sign-Off Block (LONG Variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 48px" }}>

      {/* Thin horizontal rule */}
      <div style={{ borderTop: "1px solid #E6E2DC", marginBottom: 28 }} />

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568", margin: "0 0 6px", lineHeight: 1.4 }}>
        With care,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, color: "#1F2D2F", margin: "0 0 6px", lineHeight: 1.4 }}>
        Lena
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#8A9B9D", margin: "0 0 16px", lineHeight: 1.4 }}>
        Customer Support · Mom of two autistic sons
      </p>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px", fontStyle: "italic" }}>
        One of my sons was 8 before he trained. The other took us until he was almost 7. I know what it's like when the progress doesn't match the effort. I also know what it's like when the signal finally arrives, quietly, on its own timeline, when the nervous system is ready. Not when the calendar says it should be.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px", fontStyle: "italic" }}>
        Trust your child. Trust yourself. And if you need anything, hit reply. You'll get me, not a bot.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }}>
        P.S. If you're wondering whether the guarantee is worth using, just reply and tell me what's happening with your child. I can help you figure out the next best step, whatever that looks like.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center", borderTop: "1px solid #E6E2DC" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.02 }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.02 }}>
        Body-Signal Learning Underwear for Kids Who Learn Differently
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.02 }}>
        support@brightkidco.com
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.02 }}>
        Questions? Reply to this email. Lena reads every message.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.02 }}>
        60-Day Money-Back Guarantee · Free Shipping on bundles over $79.99
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.02 }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: 0, letterSpacing: 0.02 }}>
        © BrightKidCo. All rights reserved.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: UTIL-01 — Signal-Strength Indicator (Easter Egg)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px 32px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0 }}>
        {/* Stage 1: filled teal */}
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2BAEB4" }} />
        {/* Line */}
        <div style={{ width: 50, height: 1, background: "#8A9B9D", margin: "0 6px" }} />
        {/* Stage 2: filled teal */}
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2BAEB4" }} />
        {/* Line */}
        <div style={{ width: 50, height: 1, background: "#8A9B9D", margin: "0 6px" }} />
        {/* Stage 3: filled teal (contextual at D60 — all stages alive) */}
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2BAEB4" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 0, marginTop: 8 }}>
        <div style={{ width: 66, textAlign: "center", fontFamily: F.main, fontSize: 10, color: "#8A9B9D" }}>Just Beginning</div>
        <div style={{ width: 66, textAlign: "center", fontFamily: F.main, fontSize: 10, color: "#8A9B9D" }}>Building</div>
        <div style={{ width: 66, textAlign: "center", fontFamily: F.main, fontSize: 10, color: "#8A9B9D" }}>Signaling</div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 17: Hidden Easter Egg (below footer)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 28px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, lineHeight: 1.5, color: "#B8CACD", margin: 0, fontStyle: "italic" }}>
        You made it to the end of a 60-day checkpoint email. If your child is showing progress: keep going. If nothing has changed: keep going. Both paths are the same path. — Lena
      </p>
    </div>

  </EmailShell>
);

window.EMAILS["pp-mid-checkin/mid-13-d60"] = Email_pp_mid_checkin_13_d60;
