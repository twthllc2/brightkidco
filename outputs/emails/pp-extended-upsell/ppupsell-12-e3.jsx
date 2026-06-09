/* PP-Extended Upsell — E3 (Day 60) | Cross-Level
   Wireframe: wireframes/pp-extended-upsell/ppupsell-12-e3.md
   Copy: copy/pp-extended-upsell/ppupsell-12-e3.md
   Strategy: strategy-map.json → pp-extended-upsell.emails.e3
   Generated: 2026-06-09
*/

const Email_pp_ext_upsell_12_e3 = () => (
  <EmailShell preheader="Two months of body-signal learning. Wherever you are on the journey, here's what comes next." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-19 Timeline Shock
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "36px 22px 0", textAlign: "center" }}>
      {/* Eyebrow */}
      <div style={{ fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 16 }}>
        60-DAY CHECKPOINT
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4, color: "#1F2D2F", margin: "0 0 12px" }}>
        60 days in. Here's what's happening.
      </h1>

      {/* Sub */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 24px" }}>
        Two months of body-signal learning. Wherever you are on the journey, here's what comes next.
      </p>

      {/* Hero lifestyle image */}
      <div style={{ width: "100%", borderRadius: 0, overflow: "hidden", border: "2px solid #1F2D2F", boxShadow: "6px 6px 0 #1F2D2F" }}>
        <ImgFrame height={267} radius={0} label="Hero lifestyle" sublabel="toddler-livingroom-dino-yellow.png — 600×400px" />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #D3D1C7", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-01 — Hook + Validation (Paragraph Stack)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "36px 22px" }}>
      {/* Hook — H2 */}
      <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 700, lineHeight: 1.35, color: "#1F2D2F", margin: "0 0 18px" }}>
        Whether your child is showing their first small signs of awareness after two months, or you're still waiting for that first pause, the 60-day mark is a real milestone.
      </p>

      {/* Body paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        Not because every child is trained by now. Most aren't.
      </p>

      {/* Body paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        But because two months of consistent body-signal input is the point where the nervous system has had enough repetition to start building new pathways. Whether your child is 3 or 10, whether they're telling you "wet" with words or showing you with a gesture, whether you've seen one mini-win or zero, the signal work you've been doing matters.
      </p>

      {/* Validation paragraph */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        If you're feeling something between "we're making progress" and "we're still in pull-ups", that's the exact middle ground most parents at this stage are in. Not failure. Not magic success. Real, honest, incremental work.
      </p>

      {/* Validation continued */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        Some parents tell us: "He paused for the first time last week. That's never happened before."
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        Others say: "Nothing yet. I'm starting to wonder if this works for my child."
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        Both are real. Both are welcome here. And both tell us your child's nervous system has been receiving information it was missing before, even if the visible results haven't caught up yet.
      </p>

      {/* Root metaphor */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        This is the part of the journey where consistency matters most. The neural pathways are forming beneath the surface, like roots before a plant shows above ground.
      </p>

      {/* Blockquote — both parent quotes */}
      <div style={{ borderLeft: "3px solid #2BAEB4", background: "#F5F0EB", borderRadius: "0 8px 8px 0", padding: "20px 22px", margin: "0 0 0 8px" }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", fontStyle: "italic", margin: "0 0 12px" }}>
          "He paused for the first time last week. That's never happened before."<br/>
          Some parents say this.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", fontStyle: "italic", margin: "0 0 12px" }}>
          "Nothing yet. I'm starting to wonder if this works for my child."<br/>
          Others say this.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", fontStyle: "italic", margin: 0 }}>
          Both are real. Both are welcome here.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #D3D1C7", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: EDU-11 — Science Citation (60-Day Checkpoint)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#E8F6F4", padding: "36px 22px" }}>
      {/* Heading */}
      <h2 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        The 60-Day Science Checkpoint
      </h2>

      {/* Citation Block */}
      <div style={{ background: "#FFFFFF", borderLeft: "3px solid #4A6568", borderRadius: "0 8px 8px 0", padding: "20px 22px", margin: "0 0 20px" }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 14, fontStyle: "italic", fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
          Research on body signal learning shows that the first 4-8 weeks are about desensitization and signal detection, the brain learning to recognize a sensation it's been filtering out (Barmpagiannis & Baldimtsi 2025). The next 4-8 weeks are about signal-action coupling, the brain connecting "I feel something" to "I should do something about it."
        </p>
      </div>

      {/* Transition */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        Two months is the transition point between these phases for many children.
      </p>

      {/* Two-Path Summary */}
      <div style={{ background: "#EDF7ED", border: "1px solid #5DD07A", borderRadius: 12, padding: "20px 22px", marginBottom: 12 }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#5DD07A", fontWeight: 700, margin: "0 0 10px" }}>
          IF YOU'VE SEEN ANY AWARENESS SIGN:
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          A pause, a look, a pull at the pants, a step toward the bathroom — the signal is working. The learning is happening. The next phase is about building that connection into action.
        </p>
      </div>

      <div style={{ background: "#FBF7F1", border: "1px solid #D3D1C7", borderRadius: 12, padding: "20px 22px" }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#8A9B9D", fontWeight: 700, margin: "0 0 10px" }}>
          IF YOU HAVEN'T SEEN A SIGN YET:
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          Your child's nervous system may need more repetition to register the signal. Some children need 8-12 weeks before the first observable moment. That's not a failure. That's neurology on its own timeline.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: GRADIENT BAND — #E8F6F4 → #F5F0EB
       ══════════════════════════════════════════════════════ */}
    <Band from="#E8F6F4" to="#F5F0EB" height={8} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SP-06 — Before/After Testimonial Pattern
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F5F0EB", padding: "36px 22px" }}>
      {/* Heading */}
      <h2 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4, color: "#1F2D2F", margin: "0 0 24px", textAlign: "center" }}>
        Three parents. Three different kids. One shared experience at the 60-day mark.
      </h2>

      {/* Testimonial Card 1 — Rachel, Level 1 */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, borderLeft: "3px solid #5DD07A", boxShadow: "3px 3px 0 #1F2D2F", padding: "22px 22px 22px 24px", marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#4A6568", fontWeight: 700, margin: "0 0 8px" }}>
          BEFORE
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 12px" }}>
          "At day 45 I was ready to give up. Nothing was happening."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#5DD07A", fontWeight: 700, margin: "0 0 8px" }}>
          AFTER
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 12px" }}>
          "Then at day 52, he stopped mid-play, looked down at his pants, and walked to the bathroom. He still doesn't tell me BEFORE, but he's feeling something now that he never felt before. That's more than we've gotten in 2 years of everything else."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, color: "#4A6568", margin: "0 0 8px" }}>
          — Rachel, Level 1 mom
        </p>
        <div style={{ display: "inline-block", background: "#EDF7ED", border: "1px solid #5DD07A", borderRadius: 999, padding: "4px 12px" }}>
          <span style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#5DD07A" }}>
            VERBAL · 4 YRS · DAY 52
          </span>
        </div>
      </div>

      {/* Testimonial Card 2 — Jenna, Level 2 */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, borderLeft: "3px solid #2BAEB4", boxShadow: "3px 3px 0 #1F2D2F", padding: "22px 22px 22px 24px", marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#4A6568", fontWeight: 700, margin: "0 0 8px" }}>
          BEFORE
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 12px" }}>
          "We saw our first mini-win at day 38, a pause, just a pause. My BCBA said to keep going, that the foundation was being laid."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, margin: "0 0 8px" }}>
          AFTER
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 12px" }}>
          "At day 55 he initiated twice. TWICE. After 4 years of nothing proactive. My BCBA is now recommending the underwear to other families on her caseload."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, color: "#4A6568", margin: "0 0 8px" }}>
          — Jenna, Level 2 mom
        </p>
        <div style={{ display: "inline-block", background: "#E8F6F4", border: "1px solid #2BAEB4", borderRadius: 999, padding: "4px 12px" }}>
          <span style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#2BAEB4" }}>
            BCBA-ENDORSED · 6 YRS · DAY 55
          </span>
        </div>
      </div>

      {/* Testimonial Card 3 — Tanya, Level 3 */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, borderLeft: "3px solid #8A9B9D", boxShadow: "3px 3px 0 #1F2D2F", padding: "22px 22px 22px 24px", marginBottom: 20 }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#4A6568", fontWeight: 700, margin: "0 0 8px" }}>
          BEFORE
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 12px" }}>
          "I wasn't looking for 'trained.' I was hoping for one less pull-up change a day."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#8A9B9D", fontWeight: 700, margin: "0 0 8px" }}>
          AFTER
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 12px" }}>
          "At 60 days, he doesn't react to wetness the way neurotypical kids do, but he pauses now. Just a few seconds. Then continues playing. That pause is more than I've seen in 7 years. For us, that's everything."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, color: "#4A6568", margin: "0 0 8px" }}>
          — Tanya, Level 3 mom
        </p>
        <div style={{ display: "inline-block", background: "#F6F2EA", border: "1px solid #D3D1C7", borderRadius: 999, padding: "4px 12px" }}>
          <span style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#8A9B9D" }}>
            NON-VERBAL · 8 YRS · 7+ YR JOURNEY
          </span>
        </div>
      </div>

      {/* Bridge */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0, textAlign: "center" }}>
        If any of these stories sound familiar, keep reading.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: GRADIENT BAND — #F5F0EB → #EDF7ED
       ══════════════════════════════════════════════════════ */}
    <Band from="#F5F0EB" to="#EDF7ED" height={8} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: ProductShowcaseFull — Next-Phase Tools
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#EDF7ED", padding: "36px 22px" }}>
      {/* Heading */}
      <h2 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4, color: "#1F2D2F", margin: "0 0 16px", textAlign: "center" }}>
        The next phase of your journey
      </h2>

      {/* Body */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        At the 60-day mark, the most effective thing you can do is maintain the signal environment and add tools that help your child connect the body signal to the action of using the potty.
      </p>

      {/* Product Card 1: 1-Pair → 3+3 */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, boxShadow: "6px 6px 0 #1F2D2F", padding: 22, marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, margin: "0 0 10px" }}>
          IF YOU STARTED WITH 1 PAIR:
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          The single biggest lever for accelerating progress is rotation. 6 pairs (the 3+3 Bundle, $79.99) means your child has a clean, signal-ready pair every single day, no gaps, no washing delays, no missed learning windows. Free shipping, same 60-day guarantee.
        </p>
      </div>

      {/* Product Card 2: Bundle → Next-Phase Kit */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, boxShadow: "6px 6px 0 #1F2D2F", padding: 22, marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#5DD07A", fontWeight: 700, margin: "0 0 10px" }}>
          IF YOU HAVE THE 3+3 BUNDLE:
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          The Potty Training Targets Pack adds a visual cue for the "where", giving the body signal a target to aim at. The Reward Chart creates a visible feedback loop for the mini-wins you're tracking. The E-book deepens your understanding of the interoception pathway at this stage. All three together for $24.99.
        </p>
      </div>

      {/* Product Card 3: 5+5 → Expanded Kit */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, boxShadow: "6px 6px 0 #1F2D2F", padding: 22 }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#8A9B9D", fontWeight: 700, margin: "0 0 10px" }}>
          IF YOU HAVE THE 5+5 BUNDLE:
        </p>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          The Targets Pack and Reward Chart expand the body-signal learning into a complete awareness system. The E-book includes next-level tracking protocols for families who've already seen progress.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #D3D1C7", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TRUST-1 — 60-Day Guarantee Reinforcement
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "36px 22px" }}>
      {/* Guarantee intro */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        The 60-day guarantee has been with you from day one. It's still here.
      </p>

      {/* Guarantee Seal Card */}
      <div style={{ background: "#FFFFFF", border: "1px solid #2BAEB4", borderRadius: 12, boxShadow: "3px 3px 0 #1F2D2F", padding: 22, marginBottom: 16, textAlign: "center" }}>
        {/* 60-Day Seal */}
        <div style={{ display: "inline-block", background: "#E8F6F4", border: "2px solid #2BAEB4", borderRadius: 999, padding: "12px 24px", marginBottom: 16 }}>
          <span style={{ fontFamily: F.main, fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#2BAEB4" }}>
            60-DAY GUARANTEE
          </span>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          If your child has shown NO sign of body awareness, no pause, no look, no change in behavior, after two months of consistent wear, and you feel this approach isn't right for your family, you're covered. Full refund. No questions. No hassle.
        </p>
      </div>

      {/* Honesty Block */}
      <div style={{ background: "#F5F0EB", borderLeft: "3px solid #4A6568", borderRadius: "0 8px 8px 0", padding: "20px 22px" }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          But before you decide, here's the honest truth: if you've seen even one small sign, the foundation is there. The next phase, signal-to-action coupling, typically takes 4-8 more weeks. The accessories we're recommending exist specifically to support that next phase. Not to sell you more, to give the learning the structure it needs to become lasting.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: CTA-5 — Product CTA (Conditional)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "36px 22px", textAlign: "center" }}>
      {/* CTA intro */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        When you're ready to take the next step.
      </p>

      {/* CTA 1: 1-Pair purchasers */}
      <a href="#" style={{
        display: "inline-block", padding: "16px 24px",
        background: "#2BAEB4", color: "#FFFFFF",
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        letterSpacing: 0.3, textDecoration: "none",
        borderRadius: 6, marginBottom: 12,
      }}>
        Explore the 3+3 Bundle, 6 pairs, free shipping, $79.99 →
      </a>

      {/* Micro-copy */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 20px", fontStyle: "italic" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* CTA 2: Bundle purchasers */}
      <a href="#" style={{
        display: "inline-block", padding: "16px 24px",
        background: "#2BAEB4", color: "#FFFFFF",
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        letterSpacing: 0.3, textDecoration: "none",
        borderRadius: 6, marginBottom: 20,
      }}>
        Build Your Next-Phase Kit, Targets Pack + Chart + E-book, $24.99 →
      </a>

      {/* Permission */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        No rush. The progress you've made, whatever it looks like, is real.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 22px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #D3D1C7", margin: 0 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: UTIL-01 — Lena Sign-Off (LONG) + P.S.
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "36px 22px" }}>
      {/* Signoff Card */}
      <div style={{ background: "#FFFFFF", border: "1px solid #D3D1C7", borderRadius: 12, boxShadow: "3px 3px 0 #1F2D2F", padding: "22px 24px", marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 4px" }}>
          With care,
        </p>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontStyle: "italic", fontWeight: 400, lineHeight: 1.3, color: "#4A6568", margin: "0 0 4px" }}>
          Lena
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>
          Customer Support · Mom of two autistic sons
        </p>
      </div>

      {/* P.S. Card — Most-Read Element */}
      <div style={{ background: "#F5F0EB", border: "1px solid #D3D1C7", borderRadius: 12, boxShadow: "3px 3px 0 #1F2D2F", padding: "22px 24px" }}>
        <p style={{ fontFamily: F.main, fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, margin: "0 0 10px" }}>
          P.S.
        </p>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 15, fontStyle: "italic", fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          My older son was 8 before he trained. At the 60-day mark with our first pair, I was still waiting for the first signal. It came at day 74, a pause, just a pause. But that pause changed everything. Wherever you are in this journey, you're not behind. You're exactly where your child needs you to be.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "30px 22px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px", fontWeight: 700 }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        [Physical Address]
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, letterSpacing: 0.02, color: "#8A9B9D", margin: 0 }}>
        Reply to this email. Lena reads every response.
      </p>
    </div>

  </EmailShell>
);

window.EMAILS["pp-extended-upsell/ppupsell-12-e3"] = Email_pp_ext_upsell_12_e3;
