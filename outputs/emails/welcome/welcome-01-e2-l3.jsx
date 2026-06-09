/* Welcome Flow — E2 | Level 3 — Maria
   Wireframe: wireframes/welcome/welcome-01-e2-l3.md
   Strategy: strategy-map.json → welcome.emails.e2-l3
   Generated: 2026-06-09
*/

const Email_Welcome_E2_L3 = () => (
  <EmailShell preheader="What 49 research studies say about why traditional methods fail for children who can't feel the signal. It's not the method. It's neurology." bg="#FAF9F7">

    {/* ──── Header ──── */}
    <Header bg="#FAF9F7" />

    {/* ──── HERO-9: Whisper Tone ──── */}
    <div style={{ padding: "48px 30px", background: "#FAF9F7" }}>
      <h1 style={{
        fontFamily: "'Questrial', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 26, fontWeight: 700, letterSpacing: "0.5px",
        color: "#2C2C2C", margin: "0 0 16px", lineHeight: 1.3,
      }}>
        49 studies confirm what you already knew
      </h1>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", margin: 0,
      }}>
        What 49 research studies say about why traditional methods fail for children who can't feel the signal. It's not the method. It's neurology.
      </p>
    </div>

    {/* ──── Dotted Neural Path SVG ──── */}
    <div style={{ padding: "0 30px", background: "#FAF9F7", textAlign: "center" }}>
      <svg width="336" height="60" viewBox="0 0 336 60" style={{ maxWidth: "80%" }}>
        {/* Dashed path line */}
        <line x1="0" y1="30" x2="336" y2="30" stroke="#8B7D6B" strokeWidth="0.8" strokeDasharray="6 4" opacity="0.4" />
        {/* Node 1 — dim (20% opacity) */}
        <circle cx="42" cy="30" r="4" fill="url(#nodeGrad)" opacity="0.2" />
        {/* Node 2 — slightly brighter */}
        <circle cx="126" cy="30" r="5" fill="url(#nodeGrad)" opacity="0.35" />
        {/* Node 3 — brighter */}
        <circle cx="210" cy="30" r="6" fill="url(#nodeGrad)" opacity="0.55" />
        {/* Node 4 — right endpoint, softly glowing */}
        <circle cx="300" cy="30" r="8" fill="url(#nodeGrad)" opacity="0.7" />
        <defs>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="#B8A89A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#B8A89A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "30px 0", background: "#FAF9F7", textAlign: "center" }}>
      <svg width="336" height="12" viewBox="0 0 336 12" style={{ maxWidth: "80%" }}>
        <path d="M0,6 C20,2 40,10 60,6 C80,2 100,10 120,6 C140,2 160,10 180,6 C200,2 220,10 240,6 C260,2 280,10 300,6 C310,4 320,8 336,6" stroke="#C4B8AA" strokeWidth="1" fill="none" />
      </svg>
    </div>

    {/* ──── Hook: LETTER-02 Handwritten Opener ──── */}
    <div style={{ padding: "30px 30px", background: "#FFFFFF" }}>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", margin: 0,
      }}>
        You've done 40 hours of ABA a week for two years. You spent $2,500 on a private potty consultant. You've tried pull-ups, social stories, naked weekends, and every schedule a BCBA could write. And still, he's in a diaper. Every single parent of a Level 3 child I've spoken to has the same story. The effort was enormous. The result was the same. That's not a coincidence.
      </p>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "30px 0", background: "#FFFFFF", textAlign: "center" }}>
      <svg width="336" height="12" viewBox="0 0 336 12" style={{ maxWidth: "80%" }}>
        <path d="M0,6 C20,2 40,10 60,6 C80,2 100,10 120,6 C140,2 160,10 180,6 C200,2 220,10 240,6 C260,2 280,10 300,6 C310,4 320,8 336,6" stroke="#C4B8AA" strokeWidth="1" fill="none" />
      </svg>
    </div>

    {/* ──── Validation: LETTER-02 with Emerald Hairline ──── */}
    <div style={{ padding: "30px 30px", background: "#FFFFFF", position: "relative" }}>
      <div style={{ display: "flex", gap: 16 }}>
        {/* Emerald hairline left border */}
        <div style={{
          width: 1.5, flexShrink: 0, background: "#039902",
          borderRadius: 1, alignSelf: "stretch",
        }} />
        <div>
          <p style={{
            fontFamily: "'Helvetica', Arial, sans-serif",
            fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", margin: "0 0 16px",
          }}>
            Your child isn't broken. The methods weren't built for his nervous system. Every single approach you tried, every social story, every sticker chart, every scheduled sit, assumed one thing: that he can feel when he needs to go. That assumption is the flaw. Barmpagiannis & Baldimtsi (2025) reviewed 49 studies on interoception in autism. The conclusion: diminished body awareness in autistic children is real, measurable, and well-documented. This settled science, not a theory. The signal from his bladder to his brain doesn't arrive the way traditional methods assume it does. They weren't designed for his neurology, and nothing you did wrong caused that mismatch.
          </p>
          {/* Research citation callout */}
          <div style={{
            borderLeft: "3px solid #039902",
            background: "#FAF9F7",
            padding: "16px 20px",
            borderRadius: 4,
          }}>
            <p style={{
              fontFamily: "'Helvetica', Arial, sans-serif",
              fontSize: 14, fontStyle: "italic", color: "#4A4A4A", margin: 0,
            }}>
              Barmpagiannis & Baldimtsi (2025) — 49-study systematic review on interoception in autism
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "30px 0", background: "#FFFFFF", textAlign: "center" }}>
      <svg width="336" height="12" viewBox="0 0 336 12" style={{ maxWidth: "80%" }}>
        <path d="M0,6 C20,2 40,10 60,6 C80,2 100,10 120,6 C140,2 160,10 180,6 C200,2 220,10 240,6 C260,2 280,10 300,6 C310,4 320,8 336,6" stroke="#C4B8AA" strokeWidth="1" fill="none" />
      </svg>
    </div>

    {/* ──── Mechanism Deep: LETTER-02 with Emerald Hairline ──── */}
    <div style={{ padding: "30px 30px", background: "#FAF9F7", position: "relative" }}>
      <div style={{ display: "flex", gap: 16 }}>
        {/* Emerald hairline left border */}
        <div style={{
          width: 1.5, flexShrink: 0, background: "#039902",
          borderRadius: 1, alignSelf: "stretch",
        }} />
        <div>
          <p style={{
            fontFamily: "'Helvetica', Arial, sans-serif",
            fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", margin: "0 0 16px",
          }}>
            The Body-Signal Learning Layer works with the nervous system as it is. It creates a gentle, sustained "uh-oh" sensation — 30 to 60 seconds of feedback that gives the brain time to register that something happened. For a child who has never shown a single sign of feeling wet, that sustained window is the first information his nervous system has ever received.
          </p>
          <p style={{
            fontFamily: "'Helvetica', Arial, sans-serif",
            fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", margin: 0,
          }}>
            Pull-ups wick that signal away completely. The technology that makes them convenient is the exact mechanism preventing progress.
          </p>
          {/* Pull Quote */}
          <div style={{
            borderLeft: "3px solid #C4B8AA",
            background: "#FAF9F7",
            padding: "16px 20px",
            borderRadius: 4,
            marginTop: 16,
          }}>
            <div style={{ fontSize: 28, color: "#C4B8AA", lineHeight: 1, marginBottom: 4 }}>"</div>
            <p style={{
              fontFamily: "'Questrial', sans-serif",
              fontSize: 18, fontStyle: "italic", color: "#2C2C2C",
              lineHeight: 1.5, margin: 0,
            }}>
              Pull-ups wick that signal away completely.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "30px 0", background: "#FAF9F7", textAlign: "center" }}>
      <svg width="336" height="12" viewBox="0 0 336 12" style={{ maxWidth: "80%" }}>
        <path d="M0,6 C20,2 40,10 60,6 C80,2 100,10 120,6 C140,2 160,10 180,6 C200,2 220,10 240,6 C260,2 280,10 300,6 C310,4 320,8 336,6" stroke="#C4B8AA" strokeWidth="1" fill="none" />
      </svg>
    </div>

    {/* ──── Social Proof: SP-07 Counter-Testimonial ──── */}
    <div style={{ padding: "30px 30px", background: "#FFFFFF" }}>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", margin: 0,
      }}>
        "Your child may be getting the signal, just milliseconds too late." That sentence, from the Nicholson et al. (2019) study on body awareness, shifted how I understood my own sons. The deficit isn't absence. It's timing. The signal arrives after the event. That's why timed methods, sticker charts, and scheduled sits fail, they can't teach a nervous system to receive a signal earlier. Only sustained, repeated sensation can do that.
      </p>
    </div>

    {/* ──── Wave Divider ──── */}
    <div style={{ padding: "30px 0", background: "#FFFFFF", textAlign: "center" }}>
      <svg width="336" height="12" viewBox="0 0 336 12" style={{ maxWidth: "80%" }}>
        <path d="M0,6 C20,2 40,10 60,6 C80,2 100,10 120,6 C140,2 160,10 180,6 C200,2 220,10 240,6 C260,2 280,10 300,6 C310,4 320,8 336,6" stroke="#C4B8AA" strokeWidth="1" fill="none" />
      </svg>
    </div>

    {/* ──── Guarantee: TRUST-4 Dashed Policy Quote ──── */}
    <div style={{ padding: "30px 30px", background: "#FAF9F7" }}>
      <div style={{
        border: "1.5px dashed #C4B8AA",
        borderRadius: 12,
        padding: "24px 30px",
      }}>
        <p style={{
          fontFamily: "'Helvetica', Arial, sans-serif",
          fontSize: 16, lineHeight: 1.7, color: "#4A4A4A", margin: 0,
        }}>
          60 days to see if the signal arrives. By your timeline. Not every nervous system responds the same way, and that's not a failure. If nothing changes, full refund. No questions. No pressure.
        </p>
      </div>
    </div>

    {/* ──── CTA: CT-2 Soft Link (text link only, no button) ──── */}
    <div style={{ padding: "48px 40px", background: "#FFFFFF", textAlign: "center" }}>
      <a href="#" style={{
        fontFamily: "'Questrial', sans-serif",
        fontSize: 14, letterSpacing: "0.2px",
        color: "#4A4A4A", textDecoration: "underline",
        textUnderlineOffset: 2,
      }}>
        No pressure. Just information.
      </a>
    </div>

    {/* ──── Next Time Teaser ──── */}
    <div style={{ padding: "24px 30px", background: "#FFFFFF" }}>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 16, fontStyle: "italic", lineHeight: 1.7,
        color: "#4A4A4A", margin: 0,
      }}>
        Next time: The research behind the body-signal approach — and why 49% of children face this gap.
      </p>
    </div>

    {/* ──── Floating Feather Easter Egg ──── */}
    <div style={{ padding: "0 30px", background: "#FFFFFF", textAlign: "right" }}>
      <svg width="32" height="16" viewBox="0 0 32 16" style={{ opacity: 0.3 }}>
        <path d="M2,14 C6,10 10,4 16,2 C20,1 26,3 30,6 C28,8 24,10 20,11 C16,12 10,11 6,13 Z" stroke="#C4B8AA" strokeWidth="0.8" fill="none" />
        <path d="M16,2 C16,6 16,10 16,14" stroke="#C4B8AA" strokeWidth="0.5" fill="none" />
      </svg>
    </div>

    {/* ──── Lena Signoff (SHORT variant for E1-E2) ──── */}
    <div style={{ padding: "30px 30px", background: "#FFFFFF" }}>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 14, lineHeight: 1.6, color: "#3A3530", margin: "0 0 14px",
      }}>
        Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.
      </p>
      {/* Hand-drawn "Lena" script */}
      <div style={{ marginBottom: 4 }}>
        <svg width="80" height="28" viewBox="0 0 80 28">
          <path d="M4,22 C8,18 12,8 18,6 C24,4 28,10 30,16 C32,22 28,24 24,22 C20,20 22,14 28,12 C34,10 40,14 42,18 C44,22 40,24 36,22" stroke="#3A3530" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M44,20 C48,16 52,12 56,10 C60,8 64,12 66,16 C68,20 64,22 60,20 C56,18 58,14 62,12" stroke="#3A3530" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 14, lineHeight: 1.6, color: "#3A3530",
        margin: "0 0 4px", fontWeight: 600,
      }}>
        Lena ——
      </p>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 14, lineHeight: 1.6, color: "#3A3530", margin: "0 0 14px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>
      <p style={{
        fontFamily: "'Helvetica', Arial, sans-serif",
        fontSize: 14, lineHeight: 1.6, color: "#3A3530", margin: 0,
        fontStyle: "italic",
      }}>
        P.S. If you want to understand what interoception looks like in your child, the pauses, the looks, the tiny signals, I wrote a short guide. Reply to this email and I'll send it. No obligation.
      </p>
    </div>

    {/* ──── Footer (simplified for L3) ──── */}
    <div style={{ background: "#FFFFFF", padding: "30px 30px", textAlign: "center" }}>
      <div style={{ fontSize: 11, lineHeight: 1.6, color: "#8A9B9D" }}>
        <p style={{ margin: "0 0 4px" }}>BrightKidCo</p>
        <p style={{ margin: "0 0 12px" }}>[Physical address]</p>
        <p style={{ margin: "0 0 4px" }}>
          No longer want these emails? <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
        </p>
        <p style={{ margin: 0, fontSize: 12, color: "#4A4A4A" }}>
          Reply to this email, Lena reads every response.
        </p>
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E2_L3 });
