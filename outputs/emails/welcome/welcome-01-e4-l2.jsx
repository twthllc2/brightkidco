/* Welcome Flow — E4 | L2
   Wireframe: wireframes/welcome/welcome-01-e4-l2.md
   Strategy: strategy-map.json → welcome.emails.e4-l2
   Generated: 2026-06-09
*/

const Email_Welcome_E4_L2 = () => (
  <EmailShell preheader={'"He initiated. Once. After 4 years." A pause, a look, a step. That\'s the signal starting.'} bg="#FAFAF8">

    {/* ── Header ── */}
    <Header bg="#FFFFFF" />

    {/* ══════ BAND TRANSITION ══════ */}
    <Band from="#FFFFFF" to="#FAFAF8" height={40} />

    {/* ══════ HERO — SCIENTIFIC HOOK ══════ */}
    <div style={{ padding: "34px 22px 0", textAlign: "center" }}>
      <Eyebrow>WELCOME FLOW · DAY 7</Eyebrow>
      <h1 style={{
        fontSize: 24, lineHeight: 1.15, fontWeight: 700,
        margin: 0, letterSpacing: -0.5, color: B.ink,
      }}>
        What real L2 parents say<br />after 4-8 weeks
      </h1>
    </div>

    {/* ══════ DOT PATTERN DIVIDER ══════ */}
    <div style={{
      display: "flex", justifyContent: "center", flexWrap: "wrap",
      gap: 8, padding: "16px 22px",
    }}>
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} style={{
          width: 4, height: 4, borderRadius: "50%",
          background: "#D6DCE5",
        }} />
      ))}
    </div>

    {/* ══════ LETTER — BODY COPY ══════ */}
    <Letter
      bg="#FAFAF8"
      first={'"We had 3 weeks of success then total regression." I hear this from L2 parents constantly. The words change but the feeling is the same, you thought you were finally getting somewhere, and now it\'s gone.'}
      paras={[
        'You\u2019ve done the BCBA protocol, OT sensory work, social stories, sticker charts, timer sits from 9 AM to 6 PM. You\u2019ve read the books. You\u2019ve done the \u201Cno pullup day\u201D, and it ended with 11 hours of holding followed by a flood across the kitchen floor. You sit him on the toilet every 45 minutes and he squirms, waits, stands up, then pees the second the pullup comes back on.',
        "That isn\u2019t starting over.",
        "Regression isn\u2019t failure. It\u2019s not starting over. The neural pathways you built over those 3 weeks are still there. His nervous system is recalibrating. Here\u2019s what\u2019s happening neurologically: the interoception signal, the \u201CI need to go\u201D feeling, arrived a few times, his brain started learning the connection, and then his system needed time to integrate.",
        "This the natural rhythm of body-signal learning for a neurologically complex child. Every L2 parent I\u2019ve spoken to has experienced this cycle: two steps forward, one step back, pause, repeat.",
        "Your BCBA hasn\u2019t failed. The OT hasn\u2019t failed. You haven\u2019t failed. Every protocol you\u2019ve run addressed behavior and compliance. Your child learned to wait for the prompt: \u201Ctime to go.\u201D He\u2019s prompt-dependent because the prompts worked. He follows the external signal. What was missing is the internal signal.",
        "Here\u2019s what the research actually says about this gap.",
        "For autistic children, interoception \u2014 the sense that tells us when we\u2019re hungry, thirsty, or need the bathroom \u2014 works differently. The signal from bladder to brain arrives too late or doesn\u2019t register at all. It\u2019s not a training problem. It\u2019s a neurology problem.",
        "The data backs this up: only 19% of autistic children can recognize when they\u2019re thirsty. If thirst doesn\u2019t register consistently, how can we expect bladder fullness to?",
        "Critically, this is a childhood phenomenon \u2014 adults with ASD show compensation. Early body-signal intervention creates neural pathways that last. A structured 8-week interoception intervention produces measurable improvement. The body-signal learning approach creates those conditions naturally.",
      ]}
    />

    {/* ══════ EXPERT ENDORSEMENT — SP-02 ══════ */}
    <div style={{ background: "#EDF1F5", padding: "24px 22px" }}>
      <Eyebrow color={B.tealDeep}>From L2 parents in our community</Eyebrow>

      {/* Pull Quote 1 */}
      <div style={{ borderLeft: "3px solid #4CAF7C", paddingLeft: 16, marginBottom: 20 }}>
        <p style={{
          fontSize: 20, fontWeight: 600, fontStyle: "italic",
          color: B.teal, margin: "0 0 8px", lineHeight: 1.4,
        }}>
          {"\u201CHe initiated. Once. After 4 years.\u201D"}
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>
          That\u2019s from a real L2 parent in our community. Four years of scheduled sits, sticker charts, ABA protocols, reward systems, social stories, OT sensory work. Forty-plus methods. Thousands of dollars in therapy. And then, after 5 weeks in Body-Signal Learning underwear:
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>
          A pause. A look down. A step toward the bathroom. After.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: B.soft, margin: 0 }}>
          This the pattern we see with L2 kids, not instantaneous training, but first signals. A pause where there was no pause. A look where there was no awareness.
        </p>
      </div>

      {/* Pull Quote 2 */}
      <div style={{ borderLeft: "3px solid #4CAF7C", paddingLeft: 16, marginBottom: 20 }}>
        <p style={{
          fontSize: 20, fontWeight: 600, fontStyle: "italic",
          color: B.teal, margin: "0 0 8px", lineHeight: 1.4,
        }}>
          {"\u201CHe can go to the bathroom with on-the-dot prompting every hour but he does not care if he goes on himself.\u201D"}
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: B.soft, margin: 0 }}>
          The awareness isn\u2019t there because pulling up a child and placing them on a toilet doesn\u2019t teach the body to recognize the internal signal. The child learns to wait for the adult cue. Prompt-dependency isn\u2019t training, it\u2019s compliance.
        </p>
      </div>

      {/* Pull Quote 3 */}
      <div style={{ borderLeft: "3px solid #4CAF7C", paddingLeft: 16, marginBottom: 8 }}>
        <p style={{
          fontSize: 20, fontWeight: 600, fontStyle: "italic",
          color: B.teal, margin: "0 0 8px", lineHeight: 1.4,
        }}>
          {"\u201CBCBA protocol got us to \u2018sit on the toilet without melting down.\u2019 That\u2019s it. No actual training.\u201D"}
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: B.soft, margin: 0 }}>
          This parent captured it perfectly. Behavioral protocols address the fear, the resistance, the routine. They build the foundation for compliance and tolerance. What they don\u2019t address is the body awareness piece, and for L2 children with sensory processing differences, that\u2019s the gap that traditional methods couldn\u2019t cross.
        </p>
      </div>
    </div>

    {/* ══════ COMPARISON MATRIX — EDU-12 ══════ */}
    <div style={{ padding: "24px 22px" }}>
      <Eyebrow>The interoception gap \u2014 by the numbers</Eyebrow>

      <div style={{
        background: "#EDF1F5", padding: "16px 18px", borderRadius: 8,
        marginBottom: 12, display: "flex", alignItems: "baseline", gap: 10,
      }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: "#4CAF7C", flexShrink: 0 }}>19%</span>
        <span style={{ fontSize: 14, color: B.soft, lineHeight: 1.5 }}>of autistic children can recognize when they\u2019re thirsty</span>
      </div>

      <div style={{
        background: "#EDF1F5", padding: "16px 18px", borderRadius: 8,
        marginBottom: 12, display: "flex", alignItems: "baseline", gap: 10,
      }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: "#4CAF7C", flexShrink: 0 }}>59%</span>
        <span style={{ fontSize: 14, color: B.soft, lineHeight: 1.5 }}>can\u2019t signal urine</span>
      </div>

      <div style={{ background: "#EDF1F5", padding: "16px 18px", borderRadius: 8, marginBottom: 12 }}>
        <p style={{ fontSize: 14, color: B.soft, lineHeight: 1.6, margin: 0 }}>
          An <strong>8-week interoception intervention</strong> produces measurable improvement. Adults with ASD show compensation \u2014 this is a <strong>childhood phenomenon</strong>. Early body-signal intervention creates neural pathways that last. Data from Nicholson et al. 2019, Iqbal 2022.
        </p>
      </div>
    </div>

    {/* ══════ PRODUCT SHOWCASE FULL ══════ */}
    <ProductShowcaseFull
      eyebrow="The product"
      title="Body-Signal Learning"
      titleAccent="Layer\u2122 Pants"
      sub="This where the body-signal underwear fits. It doesn\u2019t replace the work your BCBA has done. It adds the sensory component that was missing."
      priceFrom="$79.99"
      priceNote="3+3 Bundle \u00B7 6 pairs for rotation"
      features={[
        { icon: "\u25C9", label: "Cotton Body-Signal Layer \u00B7 30-60 sec" },
        { icon: "\u2713", label: "Smart Absorption Core \u00B7 3x" },
        { icon: "\u2661", label: "Protective Outer Barrier \u00B7 leak-resistant" },
      ]}
      ctaButton="Explore the 3+3 Bundle"
      guaranteeBadge={true}
    />

    {/* ══════ GUARANTEE DETAIL — TRUST-2 ══════ */}
    <div style={{ padding: "24px 22px" }}>
      <div style={{ border: "2px dashed #D4953A", borderRadius: 16, padding: "18px 18px" }}>
        <Eyebrow color="#D4953A">Our guarantee</Eyebrow>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>
          Realistic expectations for L2: <strong style={{ color: "#D4953A" }}>4-8 weeks</strong> for the first consistent signals. Some kids take longer. Both are normal. The critical thing is that every accident is a learning event, not a failure.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: B.soft, margin: 0 }}>
          The <strong style={{ color: "#D4953A" }}>60-Day Guarantee</strong> covers the full learning window. Try the Body-Signal approach for 60 days. If your child shows any sign of awareness, a pause, a look, a step toward the bathroom, a tug at the waistband, you\u2019ll know the signal is working. If nothing changes, full refund. By your judgment.
        </p>
      </div>
    </div>

    {/* ══════ CTA — PRODUCT CTA ══════ */}
    <div style={{ background: B.ink, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" }}>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" }}>
        Your BCBA built the behavioral foundation. This adds the sensory layer.
      </p>
      <a href="#" style={{
        display: "inline-block", padding: "17px 32px",
        background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
        textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
      }}>Explore the 3+3 Bundle, $79.99 \u2192</a>
      <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>
        That\u2019s $13.33 per pair with the bundle \u2014 less than half the single-pair price.
      </div>
      <div style={{ marginTop: 14, fontSize: 12, color: "#B8CACD", fontStyle: "italic" }}>
        Next time: Real stories from parents who\u2019ve been exactly where you are.
      </div>
    </div>

    {/* ══════ SIGNOFF — LENA (E3-E5 MEDIUM VARIANT) ══════ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 22,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5, position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex",
              alignItems: "center", justifyContent: "center",
              overflow: "hidden", border: `1.5px solid ${B.ink}`,
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill={B.ink} fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>A note from</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Founder \u00B7 BrightKidCo \u00B7 Mom of two
            </div>
          </div>
        </div>

        {/* Personal message (E3-E5 variant) */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic", marginBottom: 16,
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            Lena:
          </span>
          I have two autistic sons. One\u2019s 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, stuck in the regression cycle, showing first awareness then losing it, having breakthroughs in clinic but not at home, that\u2019s normal here.
        </div>

        {/* Handwritten signature */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              If you have a question, hit reply. You\u2019ll get me, not a bot, not a template. I read everything.
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
            }}>
              Lena
            </div>
          </div>

          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          If you ever want to reply and tell me about your child \u2014 I read every one. Really.
        </div>
      </div>
    </div>

    {/* ══════ OUTLINE + FOOTER ══════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E4_L2 });
