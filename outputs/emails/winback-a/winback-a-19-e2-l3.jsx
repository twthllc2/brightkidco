/* Winback Path A — E2 (Day 7) | Level 3 (Maria)
   Wireframe: wireframes/winback-a/winback-a-19-e2-l3.md
   Copy: copy/winback-a/winback-a-19-e2-l3.md
   Strategy: strategy-map.json → flows.winback-a.emails.e2-l3
   Generated: 2026-06-09
*/

const Email_winback_a_19_e2_l3 = () => (
  <EmailShell preheader="It took 9.5 years. Here's what finally changed." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", height: 36, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 22px" }}>
      <span style={{ fontFamily: F.main, fontSize: 13, color: "#8A9B9D", fontWeight: 400 }}>
        It took 9.5 years. Here's what finally changed.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E8DED5" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 28 }} />
      <span style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568" }}>Lena S., BrightKidCo</span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO-9 — Whisper Tone
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F8F6F3", padding: "48px 22px 40px" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14, textAlign: "center" }}>
        DAY 7 · WINBACK CHECK-IN
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 26, fontWeight: 700, lineHeight: 1.25, letterSpacing: -0.2, color: "#1F2D2F", margin: "0 0 16px", textAlign: "center" }}>
        Maureen Bennie's son was 9.5
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0, textAlign: "center" }}>
        If you've stepped back — she did too. Twice.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: 20.1 — WAVE DIVIDER (Hero → Body)
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32, background: "#F8F6F3", opacity: 0.6, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="300" height="12" viewBox="0 0 300 12" style={{ opacity: 0.4 }}>
        <path d="M0,6 C15,0 30,12 45,6 C60,0 75,12 90,6 C105,0 120,12 135,6 C150,0 165,12 180,6 C195,0 210,12 225,6 C240,0 255,12 270,6 C285,0 300,12 300,6" stroke="#B8CACD" strokeWidth="1.5" fill="none" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-01 — Paragraph Stack (Validation + Story + Mechanism)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F8F6F3", padding: "40px 22px" }}>

      {/* Validation 1 */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        If you stepped back from the Body-Signal underwear after the first try, that makes sense.
      </p>

      {/* Validation 2 */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 24px" }}>
        Every nervous system is different. What works for one child at 6 may not register for another until 9. That's not a failure of the approach. That's the reality of how deeply slow to pick up signals systems learn.
      </p>

      {/* Thin Rule */}
      <hr style={{ border: "none", borderTop: "1px solid #E8DED5", margin: "16px 0" }} />

      {/* Maureen Bennie Story — Fraunces italic */}
      <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        Maureen Bennie's son was 9.5 when he finally trained.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        <strong style={{ color: "#1F2D2F" }}>Not 3. Not 5. 9 and a half years.</strong>
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        She had been told everything: wait until he's ready, try this method, try that specialist. Paid private potty consultants thousands of dollars. Read every book. Cried in the adult diaper aisle.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 24px" }}>
        What finally worked wasn't a new method. It was understanding that her son's nervous system could not feel the signal, and finding a way to give his brain the feedback it had been missing.
      </p>

      {/* Thin Rule */}
      <hr style={{ border: "none", borderTop: "1px solid #E8DED5", margin: "16px 0" }} />

      {/* Mechanism — Definition Block */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        The Body-Signal Learning Layer does one thing: it creates 30-60 seconds of gentle sensation that lasts when wetness occurs. Enough time for a deeply slow to pick up signals brain to register: <strong style={{ color: "#1F2D2F" }}>something happened</strong>.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: 0 }}>
        That's not something that changes who he is. It's not a promise that every child will train by a certain age. It's a different input, one that traditional methods never address because they assume the signal already exists.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: SP-07 — Counter-Testimonial (Maureen Bennie)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14 }}>
        A STORY ABOUT WHAT'S POSSIBLE
      </div>

      {/* Counter-Testimonial Card */}
      <div style={{
        background: "#F8F6F3",
        borderLeft: "3px solid #8FA88A",
        borderRadius: 12,
        padding: 24,
        boxShadow: "8px 8px 0 #1F2D2F",
      }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          &quot;Maureen Bennie's son was 9.5 when he finally trained. Not 3. Not 5. Nine and a half years. She had tried everything. What finally worked was understanding the signal, not forcing the behavior.&quot;
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: 20.1 — WAVE DIVIDER (Story → Permission)
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24, background: "#F8F6F3", opacity: 0.4, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="200" height="10" viewBox="0 0 200 10" style={{ opacity: 0.35 }}>
        <path d="M0,5 C10,0 20,10 30,5 C40,0 50,10 60,5 C70,0 80,10 90,5 C100,0 110,10 120,5 C130,0 140,10 150,5 C160,0 170,10 180,5 C190,0 200,10 200,5" stroke="#B8CACD" strokeWidth="1.5" fill="none" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: PERMISSION — Try a Different Rhythm
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F8F6F3", padding: "40px 22px" }}>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        If you still have the underwear from your first order, you could try a different rhythm. A different time of day. A shorter wear window. There's no wrong way to explore this.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        If you don't have them anymore, a single pair is $34.99. Add it alongside your current routine. No replacement of anything. Just an addition.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }}>
        60 days to try. By your judgment. If it doesn't work for your child, full refund. No questions.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "#4A6568", margin: 0 }}>
        <strong style={{ color: "#1F2D2F" }}>Whether you try again or not</strong>, you've been doing the right thing for your child all along.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PRODUCT SHOWCASE — 1 Pair Only
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>

      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 14 }}>
        THE PRODUCT
      </div>

      {/* Product Image */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <ImgFrame height={180} label="Product Image" sublabel="training-pant-cloud-raindrop-white — 280×180, rounded 12px" radius={12} />
      </div>

      {/* Product Title */}
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 700, color: "#1F2D2F", margin: "0 0 20px", textAlign: "center" }}>
        Body-Signal Learning Layer™ Pants
      </p>

      {/* 1 Pair Card — Soft presentation */}
      <div style={{ background: "#FFFFFF", border: "1px solid #4A6568", borderRadius: 12, padding: 20, textAlign: "center" }}>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", lineHeight: 1.6 }}>
          1 Pair · $34.99
        </div>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", lineHeight: 1.6 }}>
          Add alongside your current routine
        </div>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", lineHeight: 1.6 }}>
          No replacement of anything
        </div>
      </div>

      {/* No bundle upsell note per L3 */}
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: TRUST-4 — Dashed Policy Quote (60-Day Guarantee)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>
      <div style={{
        border: "1.5px dashed #3A4547",
        borderRadius: 12,
        padding: 24,
        textAlign: "center",
      }}>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          60 days to try. By your judgment. If it doesn't work for your child, full refund. No questions.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CTA-2 — Soft Link (Mechanism-First)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F8F6F3", padding: "40px 22px", textAlign: "center" }}>

      {/* Primary CTA — Sage button */}
      <a href="#" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#8FA88A",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: 0.3,
        textDecoration: "none",
        borderRadius: 12,
        height: 48,
        lineHeight: "48px",
        width: 260,
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        See how the Body-Signal approach works
      </a>

      {/* Secondary CTA — text link */}
      <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#2BAEB4", margin: "20px 0 0" }}>
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>
          Try 1 Pair, $34.99
        </a>
      </p>

      {/* Next time teaser */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#8A9B9D", fontStyle: "italic", margin: "20px 0 0" }}>
        Next time: One last thought — what happens after the 60-day window and where you go from here.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: LENA SIGN-OFF — Winback Variant (LONG)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 22px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 12,
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

        {/* P.S. Section */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", marginBottom: 12 }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          My older son was 8 before we figured this out. I spent years in the gap between "still trying" and "maybe never." When you're ready, the science will still be here. 60 days, your judgment.
        </div>

        {/* Link */}
        <div>
          <a href="#" style={{ fontFamily: F.main, fontSize: 13, color: "#2BAEB4", textDecoration: "underline" }}>
            Try 1 Pair, $34.99
          </a>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: FOOTER
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

Object.assign(window.EMAILS = window.EMAILS || {}, { "winback-a/winback-a-19-e2-l3": Email_winback_a_19_e2_l3 });
