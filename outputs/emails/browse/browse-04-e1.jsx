/* Browse Abandonment — E1 | Cross-Level
   Wireframe: wireframes/browse/browse-04-e1.md
   Strategy: strategy-map.json → browse.emails.e1
   Generated: 2026-06-09
*/

// ══════════════════════════════════════════════════════
// SECTION 1: PREHEADER + HEADER
// ══════════════════════════════════════════════════════
const Email_browse_04_e1 = () => (
  <EmailShell
    preheader="Whether you've been at this for weeks or years, if your child doesn't feel when they need to go, here's why nothing's worked."
    bg={B.paper}
  >

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ══════ HERO-1: Curiosity Gap ══════ */}
    <div style={{ padding: "0 22px", textAlign: "center" }}>
      {/* Hero image: diaper-woodland-creature-yellow flat-lay */}
      <div style={{
        borderRadius: 18, overflow: "hidden",
        marginBottom: 24,
      }}>
        <img
          src="../../raw/product-photos/flat-lay/diaper-woodland-creature-yellow.jpg"
          alt="BrightKidCo training pant in woodland creature pattern, flat lay, yellow accent"
          style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: 30, lineHeight: 1.2, fontWeight: 700,
        margin: "0 0 14px", letterSpacing: -0.3, color: B.ink,
      }}>
        The signal your child can't feel
      </h1>

      {/* Subhead */}
      <p style={{
        fontSize: 17, color: B.soft, lineHeight: 1.5,
        margin: "0 0 24px", fontWeight: 500,
      }}>
        Whether you've been at this for weeks or years, if your child doesn't feel when they need to go, here's why nothing's worked.
      </p>
    </div>

    {/* ══════ UTIL-01: Gradient Band — Teal → Green (6px) ══════ */}
    <div style={{ height: 6, background: `linear-gradient(90deg, ${B.teal} 0%, ${B.green} 100%)` }} />

    {/* ══════ LETTER-01: Paragraph Stack (Hook) ══════ */}
    <div style={{ padding: "4px 22px 28px" }}>
      {/* Hook paragraph */}
      <p style={{
        margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        Whether your child is 3 or 10, talks about the potty but won't use it, or has never shown a single sign of feeling wet, if the 'I need to go' signal doesn't arrive when it should, every method that depends on it was built on the wrong foundation.
      </p>

      {/* Recognition intro */}
      <p style={{
        margin: "0 0 12px", fontSize: 15, color: B.ink, fontWeight: 600,
      }}>
        You might see some of these in your house:
      </p>

      {/* Recognition Anchors — cream card with teal left border */}
      <div style={{
        background: B.cream,
        borderLeft: `3px solid ${B.teal}`,
        borderRadius: 14,
        padding: "18px 16px",
        marginBottom: 20,
      }}>
        {/* Bullet 1 */}
        <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink, marginBottom: 12 }}>
          <span style={{ color: B.teal, marginRight: 6 }}>▸</span>
          He sits on the toilet for 20 minutes. Nothing happens. You put the pull-up back on and he pees 30 seconds later.
        </div>
        {/* Bullet 2 */}
        <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink, marginBottom: 12 }}>
          <span style={{ color: B.teal, marginRight: 6 }}>▸</span>
          She plays while peeing without noticing. No pause, no reaction, no awareness.
        </div>
        {/* Bullet 3 */}
        <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink, marginBottom: 12 }}>
          <span style={{ color: B.teal, marginRight: 6 }}>▸</span>
          He has never reacted to being wet. Not once. Not in years.
        </div>
        {/* Bullet 4 */}
        <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink, marginBottom: 12 }}>
          <span style={{ color: B.teal, marginRight: 6 }}>▸</span>
          She has been 'almost trained' multiple times, a week of success, then total regression.
        </div>
        {/* Bullet 5 */}
        <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink, marginBottom: 12 }}>
          <span style={{ color: B.teal, marginRight: 6 }}>▸</span>
          He won't initiate. Ever. Not a single time.
        </div>
        {/* Bullet 6 */}
        <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink }}>
          <span style={{ color: B.teal, marginRight: 6 }}>▸</span>
          The bathroom itself feels like a battleground, the sounds, the lights, the pressure.
        </div>
      </div>

      {/* Bridge line */}
      <p style={{
        margin: "0 0 0", fontSize: 16, color: B.ink, fontStyle: "italic",
      }}>
        If even one of those sounds like your morning, keep reading.
      </p>
    </div>

    {/* ══════ 1px RULE — Section Break ══════ */}
    <div style={{ height: 1, background: "#E8DED5", margin: "0 22px" }} />

    {/* ══════ LETTER-01: Paragraph Stack (Validation Block) ══════ */}
    <div style={{ padding: "28px 22px" }}>
      {/* Validation paragraph 1 */}
      <p style={{
        margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        The methods you've tried: sticker charts, social stories, timer sits, scheduled prompts, the BCBA protocol, every book that promises 'your child will train 3 days', they all have one thing in common. They assume your child can feel the internal signal that says 'I need to go.'
      </p>

      {/* Validation paragraph 2 */}
      <p style={{
        margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        For many kids whose nervous systems process signals differently, that signal arrives too late. Or doesn't arrive at all.
      </p>

      {/* Bold anchor */}
      <p style={{
        margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.ink, fontWeight: 600,
      }}>
        This isn't stubbornness. This isn't defiance. This isn't something you failed to teach.
      </p>

      {/* Mechanism explanation — interoception */}
      <p style={{
        margin: "0 0 6px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        It's called interoception, the body's ability to sense internal states like hunger, thirst, or a full bladder. Research shows this works differently in children whose nervous systems process signals differently (Barmpagiannis & Baldimtsi 2025, 49-study review). The signal from bladder to brain doesn't travel the way standard methods assume.
      </p>

      {/* Citation */}
      <div style={{
        fontSize: 13, color: B.muted, fontStyle: "italic", marginBottom: 20,
      }}>
        Barmpagiannis &amp; Baldimtsi 2025, 49-study review
      </div>

      {/* Pull Quote — Fraunces italic, centered */}
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <p style={{
          fontFamily: F.display,
          fontSize: 22, lineHeight: 1.4,
          fontStyle: "italic", color: B.ink,
          margin: 0,
        }}>
          "That's not a parenting gap. That's a<br/>signal-timing gap."
        </p>
      </div>
    </div>

    {/* ══════ UTIL-01: Gradient Band — Thinner (4px) ══════ */}
    <div style={{ height: 4, background: `linear-gradient(90deg, ${B.teal} 0%, ${B.green} 100%)` }} />

    {/* ══════ SP-02: Three-Family Testimonial Pattern ══════ */}
    <div style={{ padding: "28px 22px" }}>
      {/* Section header */}
      <p style={{
        margin: "0 0 18px", fontSize: 16, lineHeight: 1.5,
        color: B.ink, fontWeight: 600,
      }}>
        Three families. Three different kids. One common missing piece.
      </p>

      {/* Testimonial Card 1 — Sarah (L1) */}
      <div style={{
        background: B.cream,
        borderRadius: 14,
        border: `2px solid ${B.ink}`,
        boxShadow: `5px 5px 0 ${B.ink}`,
        padding: "20px 18px",
        marginBottom: 14,
      }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: B.teal, opacity: 0.5, flexShrink: 0, marginTop: 4,
          }} />
          <div>
            <p style={{
              margin: 0, fontSize: 16, lineHeight: 1.6, color: B.soft,
            }}>
              "He knew what to do. He just wouldn't do it. We spent months thinking it was behavioral. Turned out, his body was sending the signal, but it was getting there after he'd already gone. The underwear gave his brain the extra seconds it needed."
            </p>
          </div>
        </div>
        <div style={{ fontSize: 13, color: B.muted, fontStyle: "italic" }}>
          Sarah, mom of a verbal 4-year-old
        </div>
      </div>

      {/* Testimonial Card 2 — Lisa (L2) */}
      <div style={{
        background: B.cream,
        borderRadius: 14,
        border: `2px solid ${B.ink}`,
        boxShadow: `5px 5px 0 ${B.ink}`,
        padding: "20px 18px",
        marginBottom: 14,
      }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: B.teal, opacity: 0.5, flexShrink: 0, marginTop: 4,
          }} />
          <div>
            <p style={{
              margin: 0, fontSize: 16, lineHeight: 1.6, color: B.soft,
            }}>
              "We'd tried every protocol the BCBA gave us. Scheduled sits, reward charts, social narratives, nothing transferred. The missing piece wasn't motivation. It was that his brain wasn't registering the body signal in time. Once we addressed that, the training started making sense."
            </p>
          </div>
        </div>
        <div style={{ fontSize: 13, color: B.muted, fontStyle: "italic" }}>
          Lisa, mom of a 6-year-old with sensory differences
        </div>
      </div>

      {/* Testimonial Card 3 — Maria (L3) */}
      <div style={{
        background: B.cream,
        borderRadius: 14,
        border: `2px solid ${B.ink}`,
        boxShadow: `5px 5px 0 ${B.ink}`,
        padding: "20px 18px",
        marginBottom: 14,
      }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: B.teal, opacity: 0.5, flexShrink: 0, marginTop: 4,
          }} />
          <div>
            <p style={{
              margin: 0, fontSize: 16, lineHeight: 1.6, color: B.soft,
            }}>
              "He never showed a sign. Ever. I'd stopped looking. Then after a few weeks in the body-signal underwear, he paused mid-play. Looked down. For the first time in 8 years, he felt something. He's not trained, but he's feeling. That's more than we'd had before."
            </p>
          </div>
        </div>
        <div style={{ fontSize: 13, color: B.muted, fontStyle: "italic" }}>
          Maria, mom of an 8-year-old with high support needs
        </div>
      </div>

      {/* Bridge copy */}
      <p style={{
        margin: "14px 0 0", fontSize: 16, lineHeight: 1.6,
        color: B.soft, fontStyle: "italic",
      }}>
        The common thread across all three: before the underwear, the signal wasn't getting through. The learning couldn't start because the information couldn't arrive.
      </p>
    </div>

    {/* ══════ 1px RULE — Tonal Shift ══════ */}
    <div style={{ height: 1, background: "#E8DED5", margin: "0 22px" }} />

    {/* ══════ CTA-4: Gentle Invite ══════ */}
    <div style={{ padding: "28px 22px", textAlign: "center" }}>
      <p style={{
        margin: "0 0 20px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        If any of this sounds like your child, the next step isn't buying anything. The next step is understanding why the signal isn't arriving, and what 'signal arrival' actually looks like for a nervous system that processes differently.
      </p>

      {/* CTA button */}
      <a href="#" style={{
        display: "inline-block", padding: "14px 32px",
        background: B.teal, color: "#D8F57C",
        fontSize: 16, fontWeight: 700,
        textDecoration: "none", borderRadius: 999,
        letterSpacing: 0.3, minWidth: 260,
        textAlign: "center",
      }}>
        Keep reading →
      </a>

      {/* Next time teaser */}
      <p style={{
        margin: "18px 0 0", fontSize: 14, lineHeight: 1.4,
        color: B.muted, fontStyle: "italic",
      }}>
        Next time: Real stories from parents who found the missing piece.
      </p>
    </div>

    {/* ══════ TRUST-8: Trust Icons Row ══════ */}
    <div style={{ padding: "0 22px 20px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, color: B.muted }}>60-day guarantee</span>
        <span style={{ fontSize: 12, color: B.muted }}>·</span>
        <span style={{ fontSize: 12, color: B.muted }}>Free shipping</span>
        <span style={{ fontSize: 12, color: B.muted }}>·</span>
        <span style={{ fontSize: 12, color: B.muted }}>16,511 reviews</span>
      </div>
    </div>

    {/* ══════ SIGNOFF — Lena (SHORT) ══════ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 20,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${B.teal}, ${B.green})`, opacity: 0.9,
        }} />

        {/* Avatar + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
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
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill={B.ink} fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Talk soon,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 38, lineHeight: 0.95, fontWeight: 500,
              color: "#D8F57C", marginTop: 4,
            }}>
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Dashed divider */}
        <div style={{
          borderTop: "1.5px dashed #3A4547", marginBottom: 16, paddingTop: 16,
        }}>
          <p style={{
            fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", margin: 0,
          }}>
            <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
            If you're wondering whether this could work for your child, you can try it for 60 days. By your judgment. No pressure either way.
          </p>
        </div>
      </div>
    </div>

    {/* ══════ FOOTER — BREZ-inspired ══════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" }}>
      <div style={{
        fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500,
        color: B.ink, marginBottom: 30, letterSpacing: -0.2,
      }}>
        Small signals, big changes.
      </div>
      {/* Footer links */}
      {["Shop", "FAQ", "Contact"].map((l, i) => (
        <div key={i} style={{ fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 }}>
          <a href="#" style={{ color: B.ink, textDecoration: "none" }}>{l}</a>
        </div>
      ))}
      {/* Social icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>
      {/* Unsubscribe + address */}
      <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        No longer want to receive these emails? <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a>.<br/>
        <span style={{ fontSize: 11 }}>123 Commerce Street, Suite 200, Portland, OR 97201</span>
      </div>
      {/* Gradient accent bar */}
      <div style={{ margin: "28px auto 0", width: 60, height: 3, background: `linear-gradient(90deg, ${B.teal}, ${B.green})`, borderRadius: 3 }} />
    </div>

    {/* Easter Egg: Teal Signal Wave */}
    <div style={{ position: "relative", height: 40, overflow: "hidden" }}>
      <svg width="60" height="40" viewBox="0 0 60 40" style={{ position: "absolute", bottom: 0, left: 10, opacity: 0.04 }}>
        <path d="M0,30 Q15,10 30,30 T60,30" stroke={B.teal} strokeWidth="2" fill="none" />
      </svg>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_browse_04_e1 });
