/* Winback Path B — E2 (Day 67) | Level 3 (Maria)
   Wireframe: wireframes/winback-b/winback-b-24-e2-l3.md
   Copy: copy/winback-b/winback-b-24-e2-l3.md
   Strategy: strategy-map.json → flows.winback-b.emails.e2-l3
   Generated: 2026-06-09
*/

const Email_winback_b_24_e2_l3 = () => (
  <EmailShell preheader="A quiet truth the research keeps confirming." bg="#FBF7EB">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: SPACER — 48px Top
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", height: 48 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HOOK / OBSERVATION
       3 short paragraphs, generous leading, no bold, no italic
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "24px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 19, fontWeight: 400, lineHeight: 1.7, color: "#2D2D2D", margin: "0 0 20px", textAlign: "left", letterSpacing: "0.01em" }}>
        It's been a few months since you first signed up.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 19, fontWeight: 400, lineHeight: 1.7, color: "#2D2D2D", margin: "0 0 20px", textAlign: "left", letterSpacing: "0.01em" }}>
        If you're still reading, that matters. You haven't walked away. You've just been careful. And after years of promises that didn't hold, that's not hesitation. That's wisdom earned the hard way.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 19, fontWeight: 400, lineHeight: 1.7, color: "#2D2D2D", margin: 0, textAlign: "left", letterSpacing: "0.01em" }}>
        I have two autistic sons. I know what it's like when "later" turns into another year. And I know what it's like to protect yourself from hope that's burned you before.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: SPACER — 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DEEP VALIDATION
       2-3 paragraphs, cream bg, subtle left border (mint 2px)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "24px 32px", borderLeft: "2px solid #DBFFCD", paddingLeft: 40 }}>
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        You've been on this road longer than most. You've stopped counting the attempts. You've seen specialists, tried protocols, followed advice from people who meant well but didn't understand a nervous system like your child's. At some point, "maybe never" became a quieter, more honest place to live than "maybe tomorrow."
      </p>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: 0, textAlign: "left", letterSpacing: "0.01em" }}>
        That's not giving up. That's protecting yourself. And that is not something anyone should ask you to set aside lightly.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: SPACER — 40px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", height: 40 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: NEW SCIENCE CITATION
       3 paragraphs, citation callout in muted gray box
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "24px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        In 2025, Frontiers in Psychiatry published a full meta-analysis on interoception and autism. That's the gold standard of scientific evidence, a study of studies, with findings that carry more weight than any single paper.
      </p>

      {/* Citation Callout Box */}
      <div style={{ background: "rgba(154,168,167,0.1)", padding: "16px 20px", borderRadius: 8, marginBottom: 16 }}>
        <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.5, color: "#9AA8A7", margin: 0, letterSpacing: "0.02em" }}>
          Frontiers in Psychiatry 2025 — Barmpagiannis & Baldimtsi, 49-study meta-analysis
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        What they found: autistic individuals process internal body signals, the feeling of hunger, thirst, needing the bathroom, measurably differently. The signal travels a different path. It's not absent. It's delayed. It arrives quietly, or late, or in a language the brain hasn't learned to translate yet.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        What the same body of research also found: the window for building this awareness is open through childhood. The brain can learn to recognize these signals. The earlier the input, the more the pathway strengthens.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: 0, textAlign: "left", letterSpacing: "0.01em" }}>
        That's not a promise. That's what the science says.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: THE RIPPLE LINE CONTRAPTION
       Custom SVG: State A (flat) → State B (ripple)
       Brand-Green #039902 at 30-60% opacity
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "16px 32px", display: "flex", justifyContent: "center" }}>
      <svg width="400" height="80" viewBox="0 0 400 80" style={{ maxWidth: "100%" }}>
        {/* State A: Flat line at 30% opacity (left half) */}
        <line x1="0" y1="40" x2="195" y2="40" stroke="#039902" strokeWidth="2" opacity="0.3" />

        {/* Transition dot */}
        <circle cx="200" cy="40" r="4" fill="#039902" opacity="0.4" />

        {/* State B: Gentle undulation at 60% opacity (right half) */}
        <path
          d="M205,40 C215,35 225,45 235,40 C245,35 255,45 265,40 C275,35 285,45 295,40 C305,35 315,45 325,40 C335,35 345,45 355,40 C365,35 375,45 385,40 C395,35 400,40 400,40"
          stroke="#039902"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* State A label */}
        <text x="90" y="60" textAnchor="middle" fontSize="10" fontFamily="Questrial, sans-serif" fill="#9AA8A7" opacity="0.6" letterSpacing="0.03em">STATE A — flat</text>

        {/* State B label */}
        <text x="300" y="60" textAnchor="middle" fontSize="10" fontFamily="Questrial, sans-serif" fill="#9AA8A7" opacity="0.6" letterSpacing="0.03em">STATE B — ripple</text>
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SPACER — 40px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", height: 40 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: UPDATED OFFER PERSPECTIVE
       3-4 paragraphs, optional product image, price in body weight
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "24px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        The Body-Signal Learning Layer isn't a training program. It's not a system you have to implement, a schedule you have to follow, or another thing to add to a list that's already too long.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        It's a pair of underwear. One pair. $34.99.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        The cotton inner layer creates a gentle sensation, not sharp, not startling, that lasts 30 to 60 seconds after an accident. Sustained enough for a deeply nervous system that picks up signals slowly to have time to register: something happened. Pull-ups wick that signal away completely. This preserves it.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 16px", textAlign: "left", letterSpacing: "0.01em" }}>
        You don't replace anything. You don't stop anything you're already doing. You add it alongside, one quiet change, no pressure, no disruption.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: "#2D2D2D", margin: 0, textAlign: "left", letterSpacing: "0.01em" }}>
        If nothing changes in 60 days, the guarantee is here. Full refund. No questions.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SPACER — 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CTA BLOCK
       Text link (not button), body size, no box, no background
       Brand-Green underline on hover
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "32px 32px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.0, color: "#2D2D2D", margin: 0, textAlign: "left", letterSpacing: "0.02em" }}>
        <a href="#" style={{ color: "#2D2D2D", textDecoration: "none", fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.0, letterSpacing: "0.02em", borderBottom: "1px solid #039902", paddingBottom: 2 }}>
          When you decide, it's here.
        </a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: SPACER — 48px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", height: 48 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 13: LENA SIGN-OFF
       Handwritten signature treatment, Brand-Green at full saturation
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "32px 32px" }}>
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

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #039902 100%)",
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
            <div style={{ fontSize: 16, fontWeight: 400, color: "#FFFFFF", lineHeight: 1.4, letterSpacing: "0.01em" }}>
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#9AA8A7", marginTop: 2, fontVariant: "small-caps", letterSpacing: "0.05em" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Handwritten Signature — Brand-Green at full saturation */}
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
              color: "#039902",
              letterSpacing: -0.5,
              marginTop: 2,
            }}>
              Lena
            </div>
          </div>
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#039902" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#039902" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. Section — max 2 sentences */}
        <div style={{ fontSize: 15, lineHeight: 1.65, color: "#9AA8A7", fontStyle: "italic", letterSpacing: "0.02em" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: SPACER — 32px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", height: 32 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 15: FOOTER
       10px type, Easter egg line at 30% opacity
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "16px 32px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 10, color: "#9AA8A7", margin: "0 0 8px", lineHeight: 1.3 }}>
        If you'd prefer not to receive emails from BrightKidCo, you can unsubscribe here.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 10, color: "#9AA8A7", margin: "0 0 8px", lineHeight: 1.3 }}>
        BrightKidCo LLC
      </p>

      <p style={{ fontFamily: F.main, fontSize: 10, color: "#9AA8A7", margin: "0 0 16px", lineHeight: 1.3 }}>
        123 Main Street, Suite 200 · Austin, TX 78701
      </p>

      {/* Easter Egg — 30% opacity, no clickable link, 10px gray */}
      <p style={{ fontFamily: F.main, fontSize: 10, color: "#9AA8A7", margin: 0, lineHeight: 1.3, opacity: 0.3 }}>
        He paused. He felt something.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e2_l3 });
