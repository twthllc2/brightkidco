/* Welcome Flow — E7 | Level 3 — Maria
   Wireframe: wireframes/welcome/welcome-01-e7-l3.md
   Strategy: strategy-map.json → welcome.emails.e7-l3
   Generated: 2026-06-09
*/

const Email_welcome_01_e7_l3 = () => (
  <EmailShell preheader="A gentle explanation of how body-signal learning actually works, no pressure, no promises." bg="#FBF8F4">

    {/* ══════════════════════════════════════════════════════════════
       SECTION 1: HEADER + HERO — HERO-9 Whisper Tone
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 28px 40px", textAlign: "center" }}>
      {/* Logo */}
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34, marginBottom: 0 }} />

      {/* Subject line as headline */}
      <div style={{ marginTop: 40 }}>
        <div style={{
          fontSize: 13, fontWeight: 400, letterSpacing: 1,
          textTransform: "uppercase", color: "#9C9389",
          marginBottom: 16,
        }}>
          Lena from BrightKidCo
        </div>
        <h1 style={{
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          fontSize: 26, fontWeight: 700, lineHeight: 1.3,
          letterSpacing: -0.3, color: "#2C2416",
          margin: "0 0 24px",
        }}>
          Training wheels for the nervous system
        </h1>
      </div>

      {/* Hero Image — lifestyle, quiet dignity-first mood */}
      <div style={{
        borderRadius: 12, overflow: "hidden",
        marginTop: 8,
      }}>
        <img
          src="../../raw/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png"
          alt="Toddler napping peacefully in watermelon-pattern pink shorts, soft natural light"
          style={{ width: "100%", display: "block", borderRadius: 12 }}
        />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 2: HOOK — LETTER-07 Greeting Card
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF8F4", padding: "24px 28px 28px" }}>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 22, fontWeight: 700, lineHeight: 1.4, color: "#2C2416",
        margin: "0 0 18px",
      }}>
        {"He doesn\u2019t realize he needs to go. He doesn\u2019t realize he\u2019s gone."}
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 16px",
      }}>
        {"You\u2019ve watched him play, eat, sleep, never a flinch, never a pause, never a look down. The wet diaper goes unnoticed. The dry one feels the same to him. Years of this, and you\u2019ve stopped expecting the signal to come."}
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: 0,
      }}>
        {"That\u2019s not a choice he\u2019s making. His nervous system processes body signals on a different frequency, one where the \u2018I need to go\u2019 message arrives too late or doesn\u2019t arrive at all."}
      </p>
    </div>

    {/* ── Wave Divider ── */}
    <div style={{ padding: "20px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.6 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D9A88E" strokeWidth="0.8" fill="none" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 3: DEEP MECHANISM — EDU-1 Definition Block
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF8F4", padding: "0 28px 36px" }}>
      {/* Eyebrow */}
      <div style={{
        fontSize: 13, letterSpacing: 1, textTransform: "uppercase",
        color: "#9C9389", fontWeight: 400, marginBottom: 16,
      }}>
        HOW IT WORKS
      </div>

      {/* Body copy */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 16px",
      }}>
        {"The search for a solution often leads to methods that assume the signal is there. Forty-nine peer-reviewed studies confirm body signal differences are a well-established feature of autism. The \u2018eighth sensory system\u2019 works differently for him."}
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 20px",
      }}>
        {"His brain isn\u2019t ignoring the signal. The signal never arrived in a way his brain could recognize. Research shows autistic children show significantly diminished body awareness \u2014 this isn\u2019t a training gap. It\u2019s a neurological difference no sticker chart can solve."}
      </p>

      {/* Metaphor — Training Wheels */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 28, fontStyle: "italic", lineHeight: 1.35, color: "#2C2416",
        margin: "0 0 20px",
      }}>
        Think of it like training wheels for the nervous system.
      </p>

      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 24px",
      }}>
        {"The Body-Signal Learning Layer creates a gentle sensation that lasts \u2014 30 to 60 seconds of feedback that gives the brain time to register: something happened. Pull-ups wick that moisture away instantly, removing the only natural teacher the body has."}
      </p>

      {/* Interoception Diagram — hand-drawn style */}
      <div style={{
        background: "#FBF8F4", borderRadius: 12,
        padding: "28px 20px", marginBottom: 24,
        border: "1px solid #E8DED0",
      }}>
        <svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
          {/* Brain label */}
          <text x="70" y="32" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="16" fontWeight="700" fill="#2C2416">BRAIN</text>
          <circle cx="70" cy="52" r="22" fill="none" stroke="#4A4238" strokeWidth="1.5" />
          <path d="M58,48 Q70,42 82,48 Q74,52 82,56 Q70,60 58,56 Q66,52 58,48Z" fill="#4A4238" opacity="0.15" />

          {/* Signal path arrow left — from brain */}
          <path d="M92,52 L130,52" stroke="#D9A88E" strokeWidth="1.5" strokeDasharray="4,3" fill="none" markerEnd="url(#arrowhead)" />

          {/* Gap region */}
          <rect x="140" y="38" width="80" height="28" rx="14" fill="#F5F0EA" stroke="#D9A88E" strokeWidth="1" strokeDasharray="3,2" />
          <text x="180" y="55" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="10" fill="#7A7065" fontStyle="italic">signal gap</text>

          {/* Signal path arrow right — to bladder */}
          <path d="M230,52 L268,52" stroke="#D9A88E" strokeWidth="1.5" strokeDasharray="4,3" fill="none" markerEnd="url(#arrowhead)" />

          {/* Bladder label */}
          <text x="290" y="32" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="16" fontWeight="700" fill="#2C2416">BLADDER</text>
          <ellipse cx="290" cy="52" rx="20" ry="16" fill="none" stroke="#4A4238" strokeWidth="1.5" />

          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#D9A88E" />
            </marker>
          </defs>

          {/* BSL Layer Bridge */}
          <rect x="100" y="100" width="160" height="40" rx="12" fill="#C4704A" opacity="0.9" />
          <text x="180" y="116" textAnchor="middle" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF" letterSpacing="0.5">BSL LAYER BRIDGES THE GAP</text>
          <text x="180" y="132" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="10" fill="#FFFFFF" opacity="0.85">30-60s sustained gentle feedback → brain registers → awareness begins</text>

          {/* Connecting lines from gap to BSL */}
          <path d="M160,66 L160,100" stroke="#C4704A" strokeWidth="1" strokeDasharray="3,2" fill="none" />
          <path d="M200,66 L200,100" stroke="#C4704A" strokeWidth="1" strokeDasharray="3,2" fill="none" />
        </svg>
      </div>

      {/* Science citations */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 14, lineHeight: 1.5, color: "#7A7065",
        margin: 0,
      }}>
        Barmpagiannis &amp; Baldimtsi (2025) systematic review of 49 peer-reviewed studies on body signal processing in autism. Maureen Bennie, Autism Parenting Magazine, on late-stage toilet training timelines.
      </p>
    </div>

    {/* ── Wave Divider ── */}
    <div style={{ padding: "20px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.6 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D9A88E" strokeWidth="0.8" fill="none" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 4: MINI-WIN TESTIMONIALS — SP-07 Counter-Testimonial
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF8F4", padding: "0 28px 36px" }}>
      {/* Eyebrow */}
      <div style={{
        fontSize: 13, letterSpacing: 1, textTransform: "uppercase",
        color: "#9C9389", fontWeight: 400, marginBottom: 16,
      }}>
        OTHER L3 PARENTS
      </div>

      {/* Intro */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 24px",
      }}>
        Other L3 parents have seen the smallest shifts. And here, those shifts matter.
      </p>

      {/* Quote 1 */}
      <div style={{
        background: "#F5F0EA", borderLeft: "3px solid #D9A88E",
        borderRadius: 12, padding: "24px 24px",
        marginBottom: 12,
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          fontSize: 18, fontStyle: "italic", lineHeight: 1.4, color: "#2C2416",
          margin: 0,
        }}>
          {"He looked down at the wet spot for the first time in 9 years."}
        </p>
      </div>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 24px",
      }}>
        That pause, a single moment of awareness, is not an overnight change. It{"\u2019"}s a nervous system finally receiving information it was missing. For a child who has never shown a sign of feeling wet or dirty, that pause is the first page of a new chapter.
      </p>

      {/* Quote 2 */}
      <div style={{
        background: "#F5F0EA", borderLeft: "3px solid #D9A88E",
        borderRadius: 12, padding: "24px 24px",
        marginBottom: 12,
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          fontSize: 18, fontStyle: "italic", lineHeight: 1.4, color: "#2C2416",
          margin: 0,
        }}>
          {"He has 30 words. Bathroom isn\u2019t one of them. But yesterday, he paused mid-step and looked down."}
        </p>
      </div>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 16, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 24px",
      }}>
        Not a trained response. Not a prompted behavior. A genuine moment of body awareness, the first ripple in water that{"\u2019"}s been still for years.
      </p>

      {/* Closing paragraph — flows as body text, not in a card */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 16px",
      }}>
        {"These aren\u2019t \u2018success stories\u2019 in the traditional sense. There are no before-and-after photos with dramatic results. What L3 parents report are micro-moments, a hesitation, a glance, a single step toward the bathroom that never happened before. And for a child whose nervous system has been running on a different operating system, those micro-moments are everything."}
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: 0,
      }}>
        {"They aren\u2019t promises. They\u2019re signals, the first signals, delivered by a brain that\u2019s finally getting the information it needs."}
      </p>
    </div>

    {/* ── Wave Divider ── */}
    <div style={{ padding: "20px 0", textAlign: "center" }}>
      <svg width="126" height="8" viewBox="0 0 126 8" style={{ opacity: 0.6 }}>
        <path d="M0,4 C10,1 20,7 30,4 C40,1 50,7 60,4 C70,1 80,7 90,4 C100,1 110,7 126,4" stroke="#D9A88E" strokeWidth="0.8" fill="none" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 5: GUARANTEE — TRUST-4 Dashed Policy Quote
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF8F4", padding: "0 28px 36px" }}>
      <div style={{
        border: "1.5px dashed #D9A88E", borderRadius: 12,
        padding: "28px 28px",
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: "#2C2416",
          margin: "0 0 16px",
        }}>
          Sixty days to see if it shifts anything.
        </p>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          fontSize: 18, lineHeight: 1.6, color: "#4A4238",
          margin: "0 0 14px",
        }}>
          {"If your child shows no sign, no pause, no look, no step toward the bathroom, send them back. Full refund. No questions. No return shipping."}
        </p>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          fontSize: 18, lineHeight: 1.6, color: "#4A4238",
          margin: "0 0 16px",
        }}>
          {"This guarantee exists because the outcome depends on his nervous system, not on your effort. You\u2019ve done enough. You\u2019ve tried enough. Our job is to make something that works with his brain, not against it."}
        </p>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          fontSize: 18, fontWeight: 700, lineHeight: 1.4, color: "#2C2416",
          margin: 0,
        }}>
          60 days. Your judgment.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 6: CTA — CTA-2 Soft Link (text link, not button)
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF8F4", padding: "0 28px 36px", textAlign: "center" }}>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 20, fontWeight: 700, lineHeight: 1.4, color: "#2C2416",
        margin: "0 0 8px",
      }}>
        {"1 Pair, $34.99, No rush."}
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, lineHeight: 1.6, color: "#4A4238",
        margin: "0 0 20px",
      }}>
        {"When you\u2019re ready, it\u2019s here."}
      </p>

      {/* Text link — not a button */}
      <a href="#" style={{
        display: "inline-block",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 17, fontWeight: 700,
        color: "#C4704A",
        textDecoration: "underline",
        textUnderlineOffset: 3,
        letterSpacing: 0.3,
        marginBottom: 16,
        animation: "pulse 2s ease-in-out infinite",
      }}>
        {"One Pair, See If It Shifts Anything"}
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
        @media (prefers-reduced-motion: reduce) {
          a { animation: none !important; }
        }
      `}</style>

      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 14, fontStyle: "italic", lineHeight: 1.5, color: "#7A7065",
        margin: "0 0 12px",
      }}>
        Every purchase is backed by our 60-day gentle guarantee.
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 14, fontStyle: "italic", lineHeight: 1.5, color: "#7A7065",
        margin: 0,
      }}>
        Next time: One last thought before you decide.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 7: LENA SIGN-OFF
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF8F4", padding: "40px 28px 24px" }}>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, fontStyle: "italic", lineHeight: 1.5, color: "#2C2416",
        margin: "0 0 12px",
      }}>
        With care,
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 18, fontStyle: "italic", lineHeight: 1.5, color: "#2C2416",
        margin: 0,
      }}>
        Lena ——
      </p>

      {/* Hand-drawn wavy line */}
      <div style={{ marginTop: 20, textAlign: "left" }}>
        <svg width="120" height="12" viewBox="0 0 120 12" style={{ opacity: 0.6 }}>
          <path d="M0,6 C10,2 20,10 30,6 C40,2 50,10 60,6 C70,2 80,10 90,6 C100,2 110,10 120,6" stroke="#D9A88E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 8: FOOTER
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 28px 30px", textAlign: "center" }}>
      {/* Easter egg — pure acknowledgment, no CTA */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        fontSize: 11, fontStyle: "italic", lineHeight: 1.5, color: "#9C9389",
        margin: "0 0 16px",
      }}>
        {"You made it to the bottom of Welcome Email 7. If you\u2019ve read all of them, thank you for trusting us with your attention."}
      </p>

      {/* Unsubscribe line */}
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11, lineHeight: 1.4, color: "#9C9389",
        margin: "0 0 8px",
      }}>
        {"No longer want these emails? "}
        <a href="#" style={{ color: "#9C9389", textDecoration: "underline" }}>Unsubscribe</a>
        {" or "}
        <a href="#" style={{ color: "#9C9389", textDecoration: "underline" }}>Manage Preferences</a>
      </p>

      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11, lineHeight: 1.4, color: "#9C9389",
        margin: "0 0 4px",
      }}>
        BrightKidCo
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11, lineHeight: 1.4, color: "#9C9389",
        margin: "0 0 4px",
      }}>
        123 Commerce St, Suite 200, Portland, OR 97201
      </p>
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 11, lineHeight: 1.4, color: "#9C9389",
        margin: "0 0 12px",
      }}>
        Questions? Reply to this email, Lena reads every response.
      </p>

      {/* Bottom Mountain Motif — subtle, semi-transparent */}
      <div style={{ marginTop: 8, textAlign: "right", overflow: "hidden", height: 40 }}>
        <svg viewBox="0 0 420 40" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 40, opacity: 0.3 }}>
          <path d="M300,40 L320,18 L340,30 L360,10 L380,22 L400,5 L420,20 L420,40 Z" fill="#F5F0EA" />
          <path d="M330,40 L350,24 L370,32 L390,16 L420,28 L420,40 Z" fill="#F0E6D8" opacity="0.5" />
        </svg>
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_welcome_01_e7_l3 });
