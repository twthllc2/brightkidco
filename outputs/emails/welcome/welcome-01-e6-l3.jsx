/* Welcome Flow — E6 | L3
   Wireframe: wireframes/welcome/welcome-01-e6-l3.md
   Strategy: strategy-map.json → welcome.emails.e6-l3
   Generated: 2026-06-09
*/

const Email_welcome_01_e6_l3 = () => (
  <EmailShell
    preheader="You've relied on pull-ups for years. Here's what no one told you about the signal they block, and why that changes nothing about your child's timeline."
    bg="#FCFAF8"
  >

    {/* ═══════════════════════════════════════════════════════
       SECTION 1: HEADER — LENA'S WORDMARK (no logo)
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "48px 20px 20px", textAlign: "center" }}>
      {/* Lena's hand-drawn signature wordmark — monoline SVG */}
      <svg
        width="80" height="24" viewBox="0 0 80 24"
        style={{ display: "block", margin: "0 auto" }}
      >
        <path
          d="M2,18 C4,8 8,4 14,4 C18,4 20,8 18,12 C16,16 10,18 8,18 M14,12 C16,8 22,6 26,10 C28,13 24,16 22,16 M26,12 C28,6 34,4 38,8 C40,12 36,16 34,16 M38,10 L50,10 M50,10 C52,6 58,4 62,8 C64,12 60,16 58,16 M62,8 C66,4 72,6 74,10 C76,14 72,18 68,18"
          stroke="#4A3F3C"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{
        fontFamily: "'Georgia', serif",
        fontSize: 15,
        fontStyle: "italic",
        color: "#4A3F3C",
        marginTop: 8,
      }}>
        Lena at BrightKidCo
      </div>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 2: HERO — WHISPER TONE (HERO-9)
       Subject line displayed as hero text, no image
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "40px 24px 32px" }}>
      <h1 style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 1.2,
        color: "#3A2E2A",
        margin: 0,
        maxWidth: 520,
      }}>
        60 days to see if anything shifts, no pressure
      </h1>
    </div>

    {/* ═══════════════════════════════════════════════════════
       DIVIDER: FADING SIGNAL DOTS (20.1)
       ═══════════════════════════════════════════════════════ */}
    <div style={{ padding: "8px 0", textAlign: "center" }}>
      <svg width="480" height="8" viewBox="0 0 480 8">
        <circle cx="40" cy="4" r="2" fill="#C49488" opacity="0.10" />
        <circle cx="160" cy="4" r="2" fill="#C49488" opacity="0.25" />
        <circle cx="280" cy="4" r="2" fill="#C49488" opacity="0.40" />
        <circle cx="400" cy="4" r="2" fill="#C49488" opacity="0.25" />
      </svg>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 3: HOOK — LETTER-07 GREETING CARD
       Georgia 17px/1.7, #4A3F3C, generous line-height
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "16px 24px 24px" }}>
      {/* Greeting */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        Maria,
      </p>

      {/* Hook first paragraph — slightly larger at 18px */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 18,
        lineHeight: 1.6,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        You've been buying pull-ups for years. Not because you didn't try something else, because nothing else gave you a reason to switch.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        And pull-ups work. They keep him dry. They contain the mess. They let you get through the day without another load of laundry, another change of sheets, another moment where you wonder if this will ever be different.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        I know because I've been there. Both my sons were in pull-ups longer than I ever expected. And every month, I'd buy another box, not because I thought it was helping, but because the alternative felt like giving up on dignity.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: 0,
      }}>
        But here's something I wish someone had told me earlier.
      </p>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 4: SIGNAL WAVE DIAGRAM (Custom SVG)
       480×120px, gentle oscilloscope wave
       ═══════════════════════════════════════════════════════ */}
    <div style={{ padding: "8px 24px 16px", textAlign: "center" }}>
      <svg
        width="480" height="120" viewBox="0 0 480 120"
        style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
      >
        {/* Subtle glow gradient below the wave */}
        <defs>
          <linearGradient id="glow-e6l3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C49488" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#C49488" stopOpacity="0" />
          </linearGradient>
          {/* Glow for wave breathing effect */}
          <style>{`
            @keyframes signal-pulse-e6l3 {
              0% { opacity: 1.0; transform: translateY(0px); }
              50% { opacity: 0.85; transform: translateY(-2px); }
              100% { opacity: 1.0; transform: translateY(0px); }
            }
          `}</style>
        </defs>

        {/* Glow fill beneath wave */}
        <path
          d="M 20 60 Q 60 60, 100 60 Q 140 58, 180 55 C 220 45, 260 70, 300 55 C 340 40, 380 65, 420 50 Q 450 42, 460 60 L 460 120 L 20 120 Z"
          fill="url(#glow-e6l3)"
        />

        {/* Wave line with breathing animation */}
        <path
          d="M 20 60 Q 60 60, 100 60 Q 140 58, 180 55 C 220 45, 260 70, 300 55 C 340 40, 380 65, 420 50 Q 450 42, 460 60"
          stroke="#C49488"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          style={{
            animation: "signal-pulse-e6l3 6s ease-in-out infinite",
          }}
        />

        {/* Label: "Too dry to learn" */}
        <text
          x="240" y="100"
          textAnchor="middle"
          fontFamily="'Georgia', serif"
          fontSize="14"
          fontStyle="italic"
          fill="#A09A98"
        >
          Too dry to learn
        </text>

        {/* Easter egg: single tiny feather — 8×3px, bottom-right */}
        <path
          d="M 472 110 Q 476 108, 478 112 Q 475 113, 472 110"
          stroke="#C49488"
          strokeWidth="0.5"
          fill="#C49488"
          opacity="0.15"
        />
      </svg>
    </div>

    {/* ═══════════════════════════════════════════════════════
       DIVIDER: FADING SIGNAL DOTS (20.1)
       ═══════════════════════════════════════════════════════ */}
    <div style={{ padding: "8px 0", textAlign: "center" }}>
      <svg width="480" height="8" viewBox="0 0 480 8">
        <circle cx="40" cy="4" r="2" fill="#C49488" opacity="0.10" />
        <circle cx="160" cy="4" r="2" fill="#C49488" opacity="0.25" />
        <circle cx="280" cy="4" r="2" fill="#C49488" opacity="0.40" />
        <circle cx="400" cy="4" r="2" fill="#C49488" opacity="0.25" />
      </svg>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 5: PULL-UP REFRAME + MECHANISM
       LETTER-07 reframe + EDU-1 definition block
       Georgia 17px/1.7, #4A3F3C
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "16px 24px 24px" }}>
      {/* Reframe opener — 16px semi-bold */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        Pull-ups are designed to do one thing very well: keep your child completely dry.
      </p>

      {/* Reframe body */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        That moisture-wicking technology, the thing you pay a premium for, was engineered for neurotypical kids who can already feel the signal. For a child whose nervous system is still learning to register "I need to go," that dryness isn't helpful. It's the one piece of feedback his brain has been waiting for, blocked by design.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        Not because pull-ups are bad. Because they were built for a different child.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        For your child, who's never shown a single sign of feeling wet or dirty, whose body signals travel a different path, the wetness sensation is the only external cue his brain can use to start building the connection. Pull-ups remove that cue entirely.
      </p>

      {/* "He stays too dry to learn" — 16px semi-bold */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        He stays too dry to learn.
      </p>

      {/* Transition line — 14px italic, #A09A98 */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 14,
        fontStyle: "italic",
        lineHeight: 1.7,
        color: "#A09A98",
        margin: "0 0 24px",
      }}>
        The body-signal underwear works differently...
      </p>

      {/* Mechanism body — EDU-1 Definition Block */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        It's not about training your child to feel something he doesn't feel. It's about giving his brain the information it's been missing.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        When he has an accident in BrightKidCo underwear:
      </p>

      {/* Step 1 — inline paragraph, no formal list */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        1. The soft cotton inner layer lets him feel a gentle sensation — just enough to register: something happened.
      </p>

      {/* Step 2 */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        2. The smart absorption core protects his clothes without blocking that signal.
      </p>

      {/* Step 3 */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        3. Over time, that 30–60 seconds of gentle feedback starts building a neural pathway. His brain begins to connect: "I feel this" → "This means I went."
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        Research confirms this is a real, measurable neurological difference. The Body-Signal Layer doesn't change that. It just gives the brain the feedback loop it's been missing.
      </p>

      {/* Closing analogy — emotional anchor */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 17,
        lineHeight: 1.7,
        color: "#4A3F3C",
        margin: 0,
      }}>
        Think of it like this: you can't teach a child to recognize a sound they can't hear. But you can turn up the volume.
      </p>
    </div>

    {/* ═══════════════════════════════════════════════════════
       DIVIDER: FADING SIGNAL DOTS (20.1)
       ═══════════════════════════════════════════════════════ */}
    <div style={{ padding: "8px 0", textAlign: "center" }}>
      <svg width="480" height="8" viewBox="0 0 480 8">
        <circle cx="40" cy="4" r="2" fill="#C49488" opacity="0.10" />
        <circle cx="160" cy="4" r="2" fill="#C49488" opacity="0.25" />
        <circle cx="280" cy="4" r="2" fill="#C49488" opacity="0.40" />
        <circle cx="400" cy="4" r="2" fill="#C49488" opacity="0.25" />
      </svg>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 6: MICRO-WIN TESTIMONIAL (SP-07)
       Counter-Testimonial — left border callout
       ═══════════════════════════════════════════════════════ */}
    <div style={{ padding: "16px 24px 24px" }}>
      <div style={{
        background: "#F8F6F4",
        borderLeft: "3px solid #D4A89A",
        borderRadius: 8,
        padding: 18,
        position: "relative",
      }}>
        {/* Top-left flourish — small SVG arc */}
        <svg
          width="20" height="20"
          viewBox="0 0 20 20"
          style={{ position: "absolute", top: -6, left: -6 }}
        >
          <circle cx="10" cy="10" r="8" fill="none" stroke="#D4A89A" strokeWidth="1" opacity="0.3" />
        </svg>

        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 17,
          lineHeight: 1.7,
          color: "#4A3F3C",
          margin: "0 0 16px",
        }}>
          "I have 2 ASD kiddos, my youngest is level 3, non-verbal. We finally just got him potty trained a few months before his 9th birthday. We tried and tried before. I gave up several times! I felt as though our son would be in diapers forever. Success came two days later. Marc used the toilet without any prompts from us."
        </p>

        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 14,
          color: "#8A9B9D",
          margin: 0,
        }}>
          — Real parent, BrightKidCo community
        </p>
      </div>
    </div>

    {/* ═══════════════════════════════════════════════════════
       DIVIDER: FADING SIGNAL DOTS (20.1)
       ═══════════════════════════════════════════════════════ */}
    <div style={{ padding: "8px 0", textAlign: "center" }}>
      <svg width="480" height="8" viewBox="0 0 480 8">
        <circle cx="40" cy="4" r="2" fill="#C49488" opacity="0.10" />
        <circle cx="160" cy="4" r="2" fill="#C49488" opacity="0.25" />
        <circle cx="280" cy="4" r="2" fill="#C49488" opacity="0.40" />
        <circle cx="400" cy="4" r="2" fill="#C49488" opacity="0.25" />
      </svg>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 7: GUARANTEE (TRUST-4 — Dashed Policy Quote)
       1.5px dashed #D4A89A, Georgia 16px italic, #584D4A
       ═══════════════════════════════════════════════════════ */}
    <div style={{ padding: "16px 24px 24px" }}>
      <div style={{
        border: "1.5px dashed #D4A89A",
        borderRadius: 8,
        padding: 18,
      }}>
        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16,
          fontStyle: "italic",
          lineHeight: 1.6,
          color: "#584D4A",
          margin: "0 0 16px",
        }}>
          I can't promise your child will train. Every nervous system is different. What I can promise is this: 60 days to try the Body-Signal approach alongside your current routine. If nothing changes, no pause, no look, no step toward the potty, full refund. Not because it didn't sell. Because your judgment matters more than any product claim.
        </p>

        <p style={{
          fontFamily: "'Georgia', serif",
          fontSize: 16,
          fontStyle: "italic",
          lineHeight: 1.6,
          color: "#584D4A",
          margin: 0,
        }}>
          The guarantee isn't a sales tactic. When the outcome depends on your child's nervous system, the only honest thing to offer is a real off-ramp.
        </p>
      </div>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 8: CTA — SOFT LINK (CTA-2, L3 No-Button Rule)
       Text-only link, centered, underlined
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "24px 24px 16px", textAlign: "center" }}>
      {/* CTA text link — Georgia 16px 700 underlined, #A8766E */}
      <a href="#" style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16,
        fontWeight: 700,
        color: "#A8766E",
        textDecoration: "underline",
        display: "inline-block",
        lineHeight: 1.4,
      }}>
        Add alongside for 60 days, no questions asked
      </a>

      {/* Sub-CTA — 14px italic, #8A7A76 */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 14,
        fontStyle: "italic",
        color: "#8A7A76",
        marginTop: 14,
      }}>
        You decide when. You decide if. No pressure.
      </p>

      {/* Next time teaser — 14px, #8A9B9D */}
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 14,
        color: "#8A9B9D",
        marginTop: 16,
      }}>
        Next time: Your decision — what to do next, with no pressure.
      </p>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 9: LENA SIGN-OFF (Medium → Long variant)
       Custom, warm background, personal from Lena
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "40px 24px" }}>
      {/* Body paragraphs */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16,
        lineHeight: 1.6,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        I have two autistic sons. One trained at 6. The other took us until he was almost 8.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16,
        lineHeight: 1.6,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        If your child is anywhere on that curve, if you're still waiting, still hoping, still buying another box of pull-ups because you don't know what else to do, I want you to know this email isn't asking you to stop using them. It's not asking you to try anything today.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16,
        lineHeight: 1.6,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        It's just information. Your child, your timeline, your decision.
      </p>

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 16,
        lineHeight: 1.6,
        color: "#4A3F3C",
        margin: "0 0 24px",
      }}>
        Reply to this email anytime. I read every response. It might take me a day, but I will write back.
      </p>

      {/* "With care, Lena," — 15px italic */}
      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 15,
        fontStyle: "italic",
        lineHeight: 1.6,
        color: "#4A3F3C",
        margin: "0 0 8px",
      }}>
        With care, Lena,
      </p>

      {/* Hand-drawn SVG signature — NOT a typed font */}
      <svg
        width="80" height="24" viewBox="0 0 80 24"
        style={{ display: "block", margin: "0 0 12px" }}
      >
        <path
          d="M2,18 C4,8 8,4 14,4 C18,4 20,8 18,12 C16,16 10,18 8,18 M14,12 C16,8 22,6 26,10 C28,13 24,16 22,16 M26,12 C28,6 34,4 38,8 C40,12 36,16 34,16 M38,10 L50,10 M50,10 C52,6 58,4 62,8 C64,12 60,16 58,16 M62,8 C66,4 72,6 74,10 C76,14 72,18 68,18"
          stroke="#4A3F3C"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Role — 12px, #8A9B9D */}
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 12,
        color: "#8A9B9D",
        margin: 0,
      }}>
        Customer Support · Mom of two autistic sons
      </p>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 10: PS LINE
       Thin horizontal rule + PS text
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "0 24px 32px" }}>
      {/* Thin horizontal rule — 60px × 1px, #C49488, centered */}
      <div style={{ width: 60, height: 1, background: "#C49488", margin: "0 auto 16px" }} />

      <p style={{
        fontFamily: "'Georgia', serif",
        fontSize: 14,
        lineHeight: 1.6,
        color: "#4A3F3C",
        margin: 0,
      }}>
        PS, Maureen Bennie's son trained at 9.5 years old. Another family in our community: 8 years. Late is not never. Your child's timeline is the only timeline that matters.
      </p>
    </div>

    {/* ═══════════════════════════════════════════════════════
       SECTION 11: FOOTER — Minimal, legal compliance only
       11px, #999, no social icons, no tagline
       ═══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FCFAF8", padding: "30px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11,
        color: "#999",
        lineHeight: 1.6,
        margin: "0 0 4px",
      }}>
        BrightKidCo by KING MG LLC
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11,
        color: "#999",
        lineHeight: 1.6,
        margin: "0 0 10px",
      }}>
        3833 Powerline Rd, Suite 201, Fort Lauderdale, Florida 33309
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11,
        color: "#999",
        lineHeight: 1.6,
        margin: "0 0 8px",
      }}>
        <a href="{{unsubscribe}}" style={{ color: "#999", textDecoration: "underline" }}>Unsubscribe</a>
        {" | "}
        <a href="{{manage_preferences}}" style={{ color: "#999", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11,
        color: "#999",
        lineHeight: 1.6,
        margin: 0,
      }}>
        Questions? Reply to this email, Lena reads every response.
      </p>
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_welcome_01_e6_l3 });
