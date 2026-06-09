/* Welcome Flow — E3 | Level 3
   Wireframe: wireframes/welcome/welcome-01-e3-l3.md
   Strategy: strategy-map.json → flows.welcome.emails.e3-l3
   Generated: 2026-06-09
*/

const Email_Welcome_E3_L3 = () => {
  const B = window.BRAND;
  const F = window.FONT;

  /* ── Hairline divider: 0.5px, 60px wide, left-aligned, faded clay ── */
  const Hairline = () => (
    <div style={{ padding: "48px 30px 0" }}>
      <div style={{
        width: 60, height: 0,
        borderTop: `0.5px solid oklch(55% 0.04 60)`,
      }} />
    </div>
  );

  /* ── Layer inset block for mechanism section ── */
  const LayerInset = ({ bold, rest }) => (
    <div style={{
      paddingLeft: 16,
      borderLeft: "1px solid oklch(55% 0.04 60 / 0.4)",
      marginBottom: 14,
    }}>
      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "oklch(25% 0.01 80)" }}>
        <span style={{ fontWeight: 700 }}>{bold}</span>{rest}
      </p>
    </div>
  );

  return (
    <EmailShell preheader="It wasn't the method. It was the map." bg="oklch(98% 0.008 85)">

      {/* ── Header ── */}
      <Header bg="oklch(98% 0.008 85)" />

      {/* ── HERO — Whisper Tone ── */}
      <div style={{ padding: "48px 30px 0", textAlign: "center" }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 28, fontWeight: 700, lineHeight: 1.3,
          letterSpacing: "-0.02em",
          color: "oklch(25% 0.01 80)",
          margin: 0,
        }}>
          He looked down at the wet spot for the first time in 9 years.
        </p>
      </div>

      {/* ── Signal Glow — textile texture with breathing animation ── */}
      <div style={{ padding: "36px 30px 0" }}>
        <div style={{
          width: "100%", height: 200,
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 50%,
              oklch(70% 0.08 75 / 0.3) 0%,
              oklch(75% 0.01 80 / 0.05) 100%
            )
          `,
          animation: "breathe 6s ease-in-out infinite",
        }}>
          {/* Subtle textile noise texture */}
          <div style={{
            position: "absolute", inset: 0,
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              oklch(70% 0.005 80 / 0.08) 2px,
              oklch(70% 0.005 80 / 0.08) 2.5px
            )`,
          }} />
        </div>
      </div>

      {/* ══ BREATHING KEYFRAMES (inline <style> for email clients that support it) ══ */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes breathe {
          0%, 100% { transform: scale(1.0); opacity: 0.6; }
          50% { transform: scale(1.015); opacity: 0.8; }
        }
      `}} />

      {/* ── Hairline ── */}
      <Hairline />

      {/* ═══════════════════════════════════════════════════════
          HOOK — LETTER-07 Greeting Card
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        <p style={{
          margin: "0 0 16px",
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          You're not expecting a miracle. You stopped expecting miracles years ago. But that moment, a pause, a look, a single step toward the bathroom, that's not an overnight change. That's a nervous system finally receiving a signal it never got before.
        </p>
        <p style={{
          margin: 0,
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          It took 9 years for one child's brain to register: <em>something happened.</em>
        </p>
      </div>

      {/* ── Hairline ── */}
      <Hairline />

      {/* ═══════════════════════════════════════════════════════
          VALIDATION
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        <p style={{
          margin: "0 0 16px",
          fontSize: 18, fontWeight: 600, lineHeight: 1.5,
          letterSpacing: "0.02em",
          color: "oklch(25% 0.01 80)",
        }}>
          You haven't failed. You've been fighting the wrong problem.
        </p>
        <p style={{
          margin: "0 0 14px",
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          Every method you tried, and you've tried them all, assumed your child could feel when they needed to go. Sticker charts. Timer sits. Social stories. Forty hours of ABA a week. A $2,500 private consultant. You did everything the experts told you, and nothing changed.
        </p>
        <p style={{
          margin: "0 0 14px",
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          Not because you didn't try hard enough.
        </p>
        <p style={{
          margin: 0,
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          Because your child's nervous system processes body signals differently. The signal from bladder to brain doesn't arrive the way traditional methods assume it does. It's not behavioral. It's neurological. It's interoception, the eighth sensory system, and for deeply nervous system that picks up signals slowlys, that signal is delayed or absent.
        </p>
      </div>

      {/* ── Hairline ── */}
      <Hairline />

      {/* ═══════════════════════════════════════════════════════
          MECHANISM — EDU-1 Definition Block
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        <p style={{
          margin: "0 0 16px",
          fontSize: 18, fontWeight: 600, lineHeight: 1.5,
          color: "oklch(25% 0.01 80)",
        }}>
          <strong>49 studies. One clear finding.</strong> Interoceptive differences in autism are real, measurable, and well-established.
        </p>
        <p style={{
          margin: "0 0 20px",
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          The Body-Signal Learning Layer gives their brain the information it's been missing:
        </p>

        <LayerInset
          bold="Layer 1, Inner Body-Signal Layer."
          rest=" Soft 100% cotton creates a gentle sensation that lasts — an &quot;uh-oh&quot; feeling that lasts 30-60 seconds. Long enough for the brain to register: something happened."
        />
        <LayerInset
          bold="Layer 2, Smart Absorption Core."
          rest=" Protects furniture and clothing without wicking the signal away. Unlike pull-ups, which keep your child completely dry and therefore completely unaware."
        />
        <LayerInset
          bold="Layer 3, Protective Outer Barrier."
          rest=" Leak-resistant — not leak-proof. The small signal that reaches the outer layer is part of the feedback loop."
        />

        <p style={{
          margin: "20px 0 0",
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          The mechanism is one-step biology: feedback creates awareness. Awareness creates the possibility of action.
        </p>
      </div>

      {/* ── Easter Egg ── */}
      <div style={{ padding: "0 30px 48px" }}>
        <p style={{
          margin: 0,
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(65% 0.12 75 / 0.4)",
        }}>
          The thread has always been there. It's just never been felt before.
        </p>
      </div>

      {/* ── Hairline ── */}
      <Hairline />

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIAL — SP-07 Counter-Testimonial
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        {/* Quote 1 */}
        <div style={{ marginBottom: 24, paddingLeft: 16 }}>
          <span style={{
            fontSize: 48, lineHeight: 0.5,
            color: "oklch(55% 0.04 60 / 0.15)",
            fontWeight: 700, display: "block",
            marginBottom: 4,
          }}>"</span>
          <p style={{
            margin: 0,
            fontSize: 16, fontStyle: "italic",
            lineHeight: 1.6, letterSpacing: "0.01em",
            color: "oklch(25% 0.01 80)",
            paddingLeft: 8,
          }}>
            He looked down at the wet spot for the first time in 9 years. That pause, that was more than we'd seen in his entire life.
          </p>
        </div>

        <p style={{
          margin: "0 0 20px",
          fontSize: 14, lineHeight: 1.5,
          color: "oklch(55% 0.04 60)",
        }}>
          Another mother, another child:
        </p>

        {/* Quote 2 */}
        <div style={{ marginBottom: 24, paddingLeft: 16 }}>
          <span style={{
            fontSize: 48, lineHeight: 0.5,
            color: "oklch(55% 0.04 60 / 0.15)",
            fontWeight: 700, display: "block",
            marginBottom: 4,
          }}>"</span>
          <p style={{
            margin: 0,
            fontSize: 16, fontStyle: "italic",
            lineHeight: 1.6, letterSpacing: "0.01em",
            color: "oklch(25% 0.01 80)",
            paddingLeft: 8,
          }}>
            He has 30 words. 'Bathroom' isn't one of them. After 6 weeks in the Body-Signal underwear, he started pulling at his pants when he'd had an accident. He couldn't tell me. But he showed me.
          </p>
        </div>

        <p style={{
          margin: 0,
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          These are not success stories in the way other brands define success. There's no confetti. No graduation certificate. No "fully trained in 3 days." These are micro-wins, a pause, a touch, a look. And for mothers who have spent years seeing nothing, those micro-wins are everything.
        </p>
      </div>

      {/* ── Hairline ── */}
      <Hairline />

      {/* ═══════════════════════════════════════════════════════
          PRODUCT — ProductShowcaseSoft
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        <ProductShowcaseSoft
          eyebrow="1 Pair, $34.99"
          line="That's all this. One pair of underwear. Not a system. Not a program. Not a replacement for your current routine."
          ctaText="See the different path"
        />
      </div>

      {/* ── Hairline ── */}
      <Hairline />

      {/* ═══════════════════════════════════════════════════════
          GUARANTEE — TRUST-4 Dashed Policy Quote
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        <div style={{
          border: "1px dashed oklch(55% 0.04 60)",
          borderRadius: 12,
          padding: 24,
        }}>
          <p style={{
            margin: "0 0 12px",
            fontSize: 18, fontWeight: 600,
            lineHeight: 1.5,
            color: "oklch(25% 0.01 80)",
          }}>
            60 days. Your judgment. No questions.
          </p>
          <p style={{
            margin: 0,
            fontSize: 17, lineHeight: 1.6,
            color: "oklch(25% 0.01 80)",
          }}>
            If it doesn't work for your child, email us. Full refund. Keep the underwear if it helps with anything, even if that's just nighttime protection or familiar texture. We mean it.
          </p>
        </div>
      </div>

      {/* ── Hairline ── */}
      <Hairline />

      {/* ═══════════════════════════════════════════════════════
          CTA — CTA-2 Soft Link
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        <p style={{
          margin: "0 0 14px",
          fontSize: 17, fontWeight: 500,
          letterSpacing: "0.05em",
          color: "oklch(65% 0.12 75)",
        }}>
          When you decide, it's here.
        </p>
        <p style={{
          margin: "0 0 14px",
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          No deadline. No countdown. No "limited time." The offer is here when you're ready. If that's today, it's here. If that's next month, it's here. If that's in six months, it's here.
        </p>
        <p style={{
          margin: "0 0 24px",
          fontSize: 17, lineHeight: 1.6,
          color: "oklch(25% 0.01 80)",
        }}>
          Your timeline. Your child's timeline. Not ours.
        </p>
        <p style={{
          margin: 0,
          fontSize: 14, lineHeight: 1.5,
          color: "oklch(55% 0.04 60)",
        }}>
          Next time: How the Body-Signal Learning Layer works — and why it's different from everything you've tried.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════
          SIGNOFF — Lena's Personal Close (no animation — sits still)
          ═══════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 30px 48px" }}>
        {/* "A note from" */}
        <p style={{
          margin: "0 0 4px",
          fontSize: 10.5, fontWeight: 700,
          letterSpacing: "0.02em",
          color: "oklch(55% 0.04 60)",
        }}>
          A note from
        </p>
        {/* Lena's name */}
        <p style={{
          margin: "0 0 2px",
          fontSize: 17, fontWeight: 700,
          color: "oklch(35% 0.04 65)",
        }}>
          Lena Bauer
        </p>
        {/* Role */}
        <p style={{
          margin: "0 0 20px",
          fontSize: 12, fontStyle: "italic",
          color: "oklch(55% 0.04 60)",
        }}>
          Founder · BrightKidCo · Mom of two
        </p>
        {/* Body paragraphs */}
        <p style={{
          margin: "0 0 14px",
          fontSize: 15, lineHeight: 1.65,
          color: "oklch(55% 0.04 60)",
        }}>
          I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, that's normal here.
        </p>
        <p style={{
          margin: "0 0 14px",
          fontSize: 15, lineHeight: 1.65,
          color: "oklch(55% 0.04 60)",
        }}>
          I know what it feels like to read an email like this and think, "I've heard this before." I thought that too. Many times. What I didn't know was that the problem wasn't my child. It wasn't me. It was that no one had built underwear that actually teaches the signal.
        </p>
        <p style={{
          margin: "0 0 14px",
          fontSize: 15, lineHeight: 1.65,
          color: "oklch(55% 0.04 60)",
        }}>
          We built this for families like mine. And like yours.
        </p>
        <p style={{
          margin: "0 0 20px",
          fontSize: 15, lineHeight: 1.65,
          color: "oklch(55% 0.04 60)",
        }}>
          If you have questions, real ones, honest ones, the kind you're afraid to ask because you don't want to sound naive, hit reply. You'll get me. I read every response.
        </p>
        {/* Closing */}
        <p style={{
          margin: "0 0 4px",
          fontSize: 14, lineHeight: 1.5,
          color: "oklch(55% 0.04 60)",
        }}>
          With understanding,
        </p>
        {/* Handwritten signature — Caveat font */}
        <p style={{
          margin: 0,
          fontFamily: "'Caveat', cursive",
          fontSize: 42, lineHeight: 0.95,
          fontWeight: 500,
          color: "oklch(65% 0.12 75)",
          letterSpacing: "-0.01em",
        }}>
          Lena ——
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════
          FOOTER — warm cream background (NOT dark navy)
          ═══════════════════════════════════════════════════════ */}
      <div style={{
        background: "oklch(98% 0.008 85)",
        padding: "30px 22px",
        textAlign: "center",
      }}>
        {/* Brand name */}
        <p style={{
          margin: "0 0 10px",
          fontSize: 14, fontWeight: 600,
          color: "oklch(25% 0.01 80)",
          letterSpacing: "0.01em",
        }}>
          BrightKidCo
        </p>
        {/* Physical address */}
        <p style={{
          margin: "0 0 14px",
          fontSize: 11.5, lineHeight: 1.5,
          color: "oklch(55% 0.04 60)",
          letterSpacing: "0.01em",
        }}>
          BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com
        </p>
        {/* Unsubscribe */}
        <p style={{
          margin: "0 0 8px",
          fontSize: 12, lineHeight: 1.5,
          color: "oklch(55% 0.04 60)",
          letterSpacing: "0.01em",
        }}>
          No longer want these emails?{" "}
          <a href="#" style={{ color: "oklch(65% 0.12 75)", textDecoration: "underline" }}>
            Unsubscribe
          </a>{" "}
          or{" "}
          <a href="#" style={{ color: "oklch(65% 0.12 75)", textDecoration: "underline" }}>
            Manage Preferences
          </a>
        </p>
        {/* Reply prompt */}
        <p style={{
          margin: 0,
          fontSize: 12, lineHeight: 1.5,
          color: "oklch(55% 0.04 60)",
          letterSpacing: "0.01em",
        }}>
          Questions? Reply to this email, Lena reads every response.
        </p>
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_Welcome_E3_L3 });
