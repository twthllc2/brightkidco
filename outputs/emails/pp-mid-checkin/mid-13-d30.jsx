/* PP Mid Check-In — D30 | Cross-Level
   Wireframe: wireframes/pp-mid-checkin/mid-13-d30.md
   Copy: copy/pp-mid-checkin/mid-13-d30.md
   Strategy: strategy-map.json → flows.pp-mid-checkin.emails.d30
   Generated: 2026-06-09
*/

const Email_pp_mid_checkin_13_d30 = () => (
  <EmailShell preheader="Whether your child is showing signs or still registering the sensation, both are on track for Day 30." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo + Thin Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px 16px", textAlign: "center", borderBottom: "1px solid #E6E2DC" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-15 Level Callout
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px 0" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 24, textAlign: "center" }}>
        Day 30 Check-In
      </div>

      {/* Hook */}
      <h1 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 500, lineHeight: 1.3, color: "#1F2D2F", margin: "0 0 24px", textAlign: "center" }}>
        One month. Here's what that means.
      </h1>

      {/* Body */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        30 days ago, you opened the box.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Since then, your child has been wearing Body-Signal underwear, some days consistently, other days less. Maybe you've started noticing changes. Maybe you're still waiting for the first real sign.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or years into the journey, if you're not sure what Day 30 is supposed to look like, you're not alone.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 32px" }}>
        That's what this email is for.
      </p>

      {/* Signal-Strength Indicator — Stage 1 lit */}
      <div style={{ padding: "20px 0", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0 }}>
          {/* Dot 1: filled (lit) */}
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#2BAEB4" }} />
          {/* Line 1 */}
          <div style={{ width: 60, height: 1, background: "#8A9B9D" }} />
          {/* Dot 2: outlined (dimmed) */}
          <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #8A9B9D", background: "transparent" }} />
          {/* Line 2 */}
          <div style={{ width: 60, height: 1, background: "#8A9B9D" }} />
          {/* Dot 3: outlined (dimmed) */}
          <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #8A9B9D", background: "transparent" }} />
        </div>
        {/* Labels */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0, marginTop: 10 }}>
          <div style={{ width: 88, textAlign: "center", fontFamily: F.main, fontSize: 11, color: "#8A9B9D" }}>Just Beginning</div>
          <div style={{ width: 60 }} />
          <div style={{ width: 88, textAlign: "center", fontFamily: F.main, fontSize: 11, color: "#8A9B9D" }}>Building</div>
          <div style={{ width: 60 }} />
          <div style={{ width: 88, textAlign: "center", fontFamily: F.main, fontSize: 11, color: "#8A9B9D" }}>Signaling</div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: DOT PATTERN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: RECOGNITION ANCHORS — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* Header */}
      <h2 style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 14px" }}>
        Where you might be right now
      </h2>

      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Every journey looks different at 30 days. You might recognize one of these:
      </p>

      {/* Recognition Anchors — Bulleted list */}
      <div style={{ paddingLeft: 8, marginBottom: 14 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          A pause before the accident. A look down at the wet spot. A hand toward the pants. A fleeting moment that says "something happened here."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          A child who still plays through a wet pull-up without reacting, no awareness, no change in behavior, no signal at all.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          Patterns that come and go, one good day, then three days back to square one. The kind of progress that makes you wonder if it's real.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          A child who seemed to get it in Week 2, then regressed. The underwear that showed promise, then stopped working.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          Or nothing you can point to. No pause. No look. No reaction. Just more of the same routine you've been in for months.
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If any of these sound like your morning, keep reading. What you're seeing (or not seeing) has an explanation.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION + MECHANISM — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* Header */}
      <h2 style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 14px" }}>
        Here's the real checkpoint
      </h2>

      {/* Validation body */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Here's the thing about 30 days: it's not a deadline. It's a benchmark.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        Not a test of whether the underwear is working. Not a signal that something's wrong if nothing's changed.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        The Body-Signal Learning Layer works by building neural pathways through repetition, sustained, gentle feedback delivered every time there's wetness. For some nervous systems, that feedback wires quickly. For others, the brain needs more exposure before it learns to recognize the signal.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 28px" }}>
        Your child isn't behind. The method isn't failing. The learning layer is doing its job, even if you can't see it yet.
      </p>

      {/* EDU-7: Did You Know — Nicholson 2019 citation */}
      <div style={{ background: "#F2F5F0", borderLeft: "3px solid #8B9D83", borderRadius: 4, padding: "20px 22px", marginBottom: 28 }}>
        <div style={{ fontFamily: F.main, fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 10 }}>
          Why 30 days isn't the finish line
        </div>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          Nicholson et al. (2019) showed that body awareness, the ability to sense internal body states like bladder fullness, follows a delayed developmental arc in autistic children. The signal IS arriving for many kids. It's just arriving milliseconds too late to prevent the accident.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          The Body-Signal Learning Layer compensates for that delay by creating a 30-to-60-second window of gentle feedback after every wetness event. That gentle sensation that lasts is what the brain needs to start connecting "this feeling" with "I need the potty."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          But building that connection takes repetition. Lots of it.
        </p>
        {/* Timeline ranges */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 0, padding: "14px 0" }}>
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>2 weeks</div>
            <div style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D" }}>(quicker)</div>
          </div>
          <div style={{ width: 1, height: 40, background: "#8A9B9D", margin: "0 4px", alignSelf: "center" }} />
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>6-8 weeks</div>
            <div style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D" }}>(equally normal)</div>
          </div>
          <div style={{ width: 1, height: 40, background: "#8A9B9D", margin: "0 4px", alignSelf: "center" }} />
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>12 weeks</div>
            <div style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D" }}>(full window)</div>
          </div>
        </div>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        The 60-day guarantee window exists because every nervous system works on its own timeline. Day 30 is the midpoint, not the end.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: HORIZONTAL DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E6E2DC" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: THREE-FAMILY TESTIMONIALS — SP-08 Stacked Mini-Reviews
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px" }}>
      {/* Header */}
      <h2 style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 24px", textAlign: "center" }}>
        Three families. Three timelines. One common thread.
      </h2>

      {/* Card 1 — Sarah (L1) */}
      <div style={{ background: "#F2F5F0", borderLeft: "2px solid #8B9D83", borderRadius: 16, padding: 22, marginBottom: 16 }}>
        <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He went from 'almost trained' to 'mostly trained' in 6 weeks. At 30 days, I was still sitting on the bathroom floor wondering if anything was happening. The first real pause came at Week 5."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, color: "#8A9B9D", margin: 0 }}>
          — Sarah, parent of 4-year-old
        </p>
      </div>

      {/* Card 2 — Lisa (L2) */}
      <div style={{ background: "#F2F5F0", borderLeft: "2px solid #8B9D83", borderRadius: 16, padding: 22, marginBottom: 16 }}>
        <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "She finally paused, just once, when she felt wet. That was Week 4. Before that: thirty days of absolutely nothing I could point to. But that one pause was the crack in the wall."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, color: "#8A9B9D", margin: 0 }}>
          — Lisa, parent of 7-year-old
        </p>
      </div>

      {/* Card 3 — Maria (L3) */}
      <div style={{ background: "#F2F5F0", borderLeft: "2px solid #8B9D83", borderRadius: 16, padding: 22, marginBottom: 24 }}>
        <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "He's not trained. I don't know if he'll ever be 'trained' the way the books describe it. But he's feeling something for the first time in 9 years. After half a lifetime of nothing, that's everything."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, color: "#8A9B9D", margin: 0 }}>
          — Maria, parent of 9-year-old
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If any of these stories sound like your month, the signal is building. You just can't see it yet.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: DOT PATTERN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "8px 24px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#8A9B9D" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: MINI-WIN GUIDE — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* Header */}
      <h2 style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 14px" }}>
        What counts as progress right now
      </h2>

      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        At Day 30, "success" doesn't mean fully trained. It means any of these:
      </p>

      {/* Mini-Win Checklist */}
      <div style={{ paddingLeft: 8, marginBottom: 14 }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> A pause, even once, before peeing
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> A glance down at the wet spot after the accident
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> A hand reaching toward the pants after wetting
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> A step toward the bathroom (even after the fact)
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> A pull at the waistband that wasn't there before
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> Staying dry for 2 hours instead of 30 minutes
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> Tolerating the underwear for longer stretches without pulling it off
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
          <span style={{ color: "#8B9D83", marginRight: 8 }}>&#10022;</span> Looking at the potty when you say "bathroom time"
        </p>
      </div>

      {/* Closing 1 */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        If you've seen even one of these, that's the body signal connection beginning to fire. Document it. Name it. That's your child's nervous system saying "I'm learning."
      </p>

      {/* Closing 2 */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        If you've seen none, that's also normal. Keep the underwear in the rotation. The repetition is still building the pathway. Day 45 may look completely different.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: PRACTICAL TIPS — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* Header */}
      <h2 style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 14px" }}>
        Three things to try this week
      </h2>

      {/* Tip 1 */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        <strong style={{ color: "#1F2D2F" }}>Increase wear time if you're not seeing anything.</strong> Try 3-4 hours daily instead of 1-2. More exposure = more feedback loops = faster pathway building.
      </p>

      {/* Tip 2 */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 14px" }}>
        <strong style={{ color: "#1F2D2F" }}>Watch for both verbal and non-verbal signals.</strong> Some children will say "wet" or show you with a gesture. Others will pull at their pants, touch the fabric, or change their posture. Both are valid signals.
      </p>

      {/* Tip 3 */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        <strong style={{ color: "#1F2D2F" }}>Drop the prompting for a week.</strong> If you've been doing scheduled sits or timers, pause them. Let the underwear sensation be the only teacher. Prompt-dependence can mask body signal progress.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: HORIZONTAL DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E6E2DC" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: PRODUCT SHOWCASE — ProductShowcaseSoft
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "40px 24px" }}>
      {/* Header */}
      <h2 style={{ fontFamily: F.main, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 14px", textAlign: "center" }}>
        You're halfway through
      </h2>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px", textAlign: "center" }}>
        You have 30 more days in the guarantee window.
      </p>

      {/* Product Card */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 22 }}>
        {/* Product Image Placeholder */}
        <div style={{ width: "100%", height: 200, background: "#FFFFFF", border: "2px dashed #2BAEB4", borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px 22px", textAlign: "center", marginBottom: 16 }}>
          <img
            src="../raw/product-photos/flat-lay/diaper-woodland-creature-yellow.jpg"
            alt="BrightKidCo Body-Signal Learning Underwear, woodland creature design, warm yellow tones"
            style={{ maxWidth: 300, borderRadius: 20 }}
          />
        </div>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", margin: "0 0 6px", textAlign: "center" }}>
          3+3 Bundle — $79.99, free shipping
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568", margin: 0, textAlign: "center" }}>
          $13.33 per pair — less than half single-pair price
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "20px 0 0", textAlign: "center" }}>
        The underwear is doing its job every time your child wears it.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: CTA — FLOW-12 Level Detection
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px", textAlign: "center" }}>

      {/* CTA Body */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 8px" }}>
        Keep wearing. Keep noticing. The progress you're looking for might arrive next week. Or the week after. Both are real outcomes.
      </p>

      {/* Primary CTA */}
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 28px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 6,
        marginTop: 24,
        marginBottom: 14,
        textAlign: "center",
      }}>
        Explore the 3+3 Bundle to extend your rotation
      </a>

      {/* Secondary CTA */}
      <a href="mailto:support@brightkidco.com" style={{
        display: "inline-block",
        padding: "14px 28px",
        background: "transparent",
        border: "1px solid #2BAEB4",
        color: "#2BAEB4",
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 6,
        marginTop: 6,
        textAlign: "center",
      }}>
        Reach out to Lena, hit reply. I read everything.
      </a>

      {/* Next time teaser */}
      <p style={{ fontFamily: F.main, fontSize: 13, color: "#8A9B9D", margin: "28px 0 0" }}>
        Next time: Day 45 — the halfway point between first signals and lasting change.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: LENA SIGN-OFF — MEDIUM Variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px" }}>
      {/* Horizontal rule */}
      <div style={{ height: 1, background: "#E6E2DC", marginBottom: 28 }} />

      {/* Sign-off body */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 4px" }}>
        With understanding,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 700, lineHeight: 1.4, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, color: "#8A9B9D", margin: "0 0 20px" }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        PS, If nothing changed in 30 days, that was my older son too. We kept the underwear in rotation, stopped prompting, and Week 6 was when he finally paused. The nervous system doesn't follow our calendars.,Lena
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: FOOTER — TRUST-1 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        [Physical Address, Insert]
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        You're receiving this because you purchased Body-Signal Learning Layer underwear.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", fontStyle: "italic", margin: 0 }}>
        60-Day Guarantee: If your child shows no progress, full refund. No questions.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: EASTER EGG — Signal-Strength Indicator + Hidden Note
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px 32px", textAlign: "center" }}>
      {/* Signal-Strength Indicator — Stage 1 lit */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0, marginBottom: 10 }}>
        {/* Dot 1: filled (lit) */}
        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#2BAEB4" }} />
        {/* Line 1 */}
        <div style={{ width: 60, height: 1, background: "#8A9B9D" }} />
        {/* Dot 2: outlined (dimmed) */}
        <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #8A9B9D", background: "transparent" }} />
        {/* Line 2 */}
        <div style={{ width: 60, height: 1, background: "#8A9B9D" }} />
        {/* Dot 3: outlined (dimmed) */}
        <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #8A9B9D", background: "transparent" }} />
      </div>

      {/* Hidden Easter Egg */}
      <p style={{ fontFamily: F.main, fontSize: 12, lineHeight: 1.6, color: "#B8CACD", margin: "20px 0 0", maxWidth: 340, marginLeft: "auto", marginRight: "auto" }}>
        You made it to the bottom of a 30-day check-in email. If nothing has changed yet, I see you. My older son was 8 before he trained. At 30 days we had zero. Keep going.,Lena
      </p>
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["pp-mid-checkin/mid-13-d30"] = Email_pp_mid_checkin_13_d30;
