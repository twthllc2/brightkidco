/* Browse Abandonment — E3 | Cross-Level
   Wireframe: wireframes/browse/browse-04-e3.md
   Strategy: strategy-map.json → browse.emails.e3
   Generated: 2026-06-09
*/

// ══════════════════════════════════════════════════════
// SECTION 1: PREHEADER + HEADER
// ══════════════════════════════════════════════════════
const Email_browse_04_e3 = () => (
  <EmailShell
    preheader="60 days to try it. Your judgment. If it doesn't work, full refund."
    bg={B.paper}
  >

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ══════ HERO-8: Visual Metaphor — The Doorway ══════ */}
    <div style={{ padding: "0 22px 8px", textAlign: "center" }}>
      {/* Doorway Illustration — State 1: thin emerald hairline at left edge */}
      <div style={{
        display: "flex", justifyContent: "center",
        marginBottom: 20,
      }}>
        <div style={{
          width: 420, height: 60,
          position: "relative",
          display: "flex", alignItems: "flex-end",
        }}>
          {/* Thin emerald hairline at left edge */}
          <div style={{
            width: 1, height: 50,
            background: B.teal,
            opacity: 0.3,
            borderRadius: 1,
          }} />
        </div>
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: 30, lineHeight: 1.2, fontWeight: 700,
        margin: "0 0 14px", letterSpacing: -0.3, color: B.ink,
      }}>
        This might not be right for your child, and that's okay
      </h1>

      {/* Emerald hairline divider */}
      <div style={{
        width: 60, height: 1, background: B.teal,
        opacity: 0.3, margin: "0 auto 16px",
      }} />

      {/* Subhead */}
      <p style={{
        fontSize: 17, color: B.soft, lineHeight: 1.5,
        margin: "0 0 24px", fontWeight: 500,
      }}>
        60 days to try it. Your judgment. If it doesn't work, full refund.
      </p>
    </div>

    {/* ══════ UTIL-02: SVG Squiggle Divider ══════ */}
    <div style={{ padding: "12px 0", textAlign: "center" }}>
      <svg width="40" height="12" viewBox="0 0 40 12">
        <path d="M0,6 Q10,0 20,6 T40,6" stroke={B.teal} strokeWidth="1.5" fill="none" />
      </svg>
    </div>

    {/* ══════ LETTER-03: Letter + Pull-Quote (Hook) ══════ */}
    <div style={{ padding: "20px 22px 28px" }}>
      {/* Doorway State 2 — line fattens to 6px, curves into partial arch (decorative border) */}
      <div style={{
        borderLeft: `6px solid ${B.teal}`,
        borderTop: `6px solid ${B.teal}`,
        borderRight: `6px solid ${B.teal}`,
        borderRadius: "40px 40px 0 0",
        padding: "24px 22px 20px",
        marginBottom: 0,
      }}>
        {/* Hook paragraph */}
        <p style={{
          margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft,
        }}>
          Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or you're still figuring it out, if they don't feel when they need to go, you've been working with one hand tied behind your back.
        </p>

        {/* Permission / browsing history acknowledgment */}
        <p style={{
          margin: 0, fontSize: 17, lineHeight: 1.6, color: B.soft,
        }}>
          You came and looked at our underwear a few days ago, and I want to respect whatever you're sitting with right now. Maybe you're still deciding. Maybe you've been burned by enough 'solutions' that you've learned not to get your hopes up. Either way, that's reasonable.
        </p>
      </div>
    </div>

    {/* ══════ LETTER-01: Paragraph Stack (Recognition Anchors) ══════ */}
    <div style={{ padding: "0 22px 28px" }}>
      {/* Recognition intro */}
      <p style={{
        margin: "0 0 12px", fontSize: 15, color: B.ink, fontWeight: 600,
      }}>
        You've probably experienced some version of this:
      </p>

      {/* Recognition Anchors — cream card with teal left border + Signal-Dot Pulse */}
      <div style={{
        background: B.cream,
        borderLeft: `3px solid ${B.teal}`,
        borderRadius: 14,
        padding: "18px 16px",
        marginBottom: 20,
      }}>
        {/* Bullet 1 — Signal-Dot Pulse */}
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.3,
            flexShrink: 0, marginTop: 8,
            boxShadow: "0 0 0 0 rgba(43,174,180,0.3)",
            animation: "signalPulse 2s ease-in-out 0ms infinite",
          }} />
          <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink }}>
            He sits on the toilet for 20 minutes, nothing happens, and then pees 30 seconds after you put the pull-up back on.
          </div>
        </div>
        {/* Bullet 2 */}
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.3,
            flexShrink: 0, marginTop: 8,
            boxShadow: "0 0 0 0 rgba(43,174,180,0.3)",
            animation: "signalPulse 2s ease-in-out 200ms infinite",
          }} />
          <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink }}>
            She plays in a wet diaper like she doesn't even notice. No pause. No reaction. No signal.
          </div>
        </div>
        {/* Bullet 3 */}
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.3,
            flexShrink: 0, marginTop: 8,
            boxShadow: "0 0 0 0 rgba(43,174,180,0.3)",
            animation: "signalPulse 2s ease-in-out 400ms infinite",
          }} />
          <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink }}>
            He knows the routine but won't initiate on his own, ever.
          </div>
        </div>
        {/* Bullet 4 */}
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.3,
            flexShrink: 0, marginTop: 8,
            boxShadow: "0 0 0 0 rgba(43,174,180,0.3)",
            animation: "signalPulse 2s ease-in-out 600ms infinite",
          }} />
          <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink }}>
            She's been 'almost trained' three times now, but it never sticks.
          </div>
        </div>
        {/* Bullet 5 */}
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.3,
            flexShrink: 0, marginTop: 8,
            boxShadow: "0 0 0 0 rgba(43,174,180,0.3)",
            animation: "signalPulse 2s ease-in-out 800ms infinite",
          }} />
          <div style={{ fontSize: 16, lineHeight: 1.6, color: B.ink }}>
            You've been at this for years and can't remember the last time anything changed.
          </div>
        </div>
      </div>

      {/* Signal-Dot Pulse CSS keyframes (fallback for Outlook/Gmail: static dots) */}
      <style>{`
        @keyframes signalPulse {
          0% { box-shadow: 0 0 0 0 rgba(43,174,180,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(43,174,180,0); }
          100% { box-shadow: 0 0 0 0 rgba(43,174,180,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      {/* Bridge line */}
      <p style={{
        margin: "0 0 0", fontSize: 16, color: B.ink, fontStyle: "italic",
      }}>
        If even one of these sounds familiar, keep reading. Not because I'm going to pitch you. Because I want you to know what's going on, so you can decide if it fits your child or not.
      </p>
    </div>

    {/* ══════ UTIL-02: SVG Squiggle Divider ══════ */}
    <div style={{ padding: "12px 0", textAlign: "center" }}>
      <svg width="40" height="12" viewBox="0 0 40 12">
        <path d="M0,6 Q10,0 20,6 T40,6" stroke={B.teal} strokeWidth="1.5" fill="none" />
      </svg>
    </div>

    {/* ══════ EDU-10: How It Works (Mechanism Recap + Product + Pricing) ══════ */}
    <div style={{ padding: "20px 22px 28px" }}>
      {/* Mechanism recap intro */}
      <p style={{
        margin: "0 0 20px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        Here's what we know now that we didn't know five years ago: many autistic children can't feel the internal signal that says 'I need to go.'
      </p>

      {/* 3-Layer Product Infographic */}
      <div style={{
        display: "flex", gap: 8, marginBottom: 20,
        justifyContent: "center",
      }}>
        {/* Inner Layer */}
        <div style={{
          flex: 1, background: "#FAF7F0", border: `1.5px solid ${B.ink}`,
          borderRadius: 10, padding: "12px 10px", textAlign: "center",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
            Inner Layer
          </div>
          <div style={{ fontSize: 11, color: B.soft, lineHeight: 1.4 }}>
            Cotton inner
          </div>
        </div>
        {/* Arrow */}
        <div style={{ display: "flex", alignItems: "center", color: B.teal, fontSize: 16, fontWeight: 700 }}>→</div>
        {/* Smart Core */}
        <div style={{
          flex: 1, background: "#FAF7F0", border: `1.5px solid ${B.ink}`,
          borderRadius: 10, padding: "12px 10px", textAlign: "center",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
            Smart Core
          </div>
          <div style={{ fontSize: 11, color: B.soft, lineHeight: 1.4 }}>
            Absorption core
          </div>
        </div>
        {/* Arrow */}
        <div style={{ display: "flex", alignItems: "center", color: B.teal, fontSize: 16, fontWeight: 700 }}>→</div>
        {/* Outer Barrier */}
        <div style={{
          flex: 1, background: "#FAF7F0", border: `1.5px solid ${B.ink}`,
          borderRadius: 10, padding: "12px 10px", textAlign: "center",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
            Outer Barr.
          </div>
          <div style={{ fontSize: 11, color: B.soft, lineHeight: 1.4 }}>
            Leak-resistant outer barrier
          </div>
        </div>
      </div>

      {/* Product paragraphs */}
      <p style={{
        margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        The underwear itself is a three-layer system: a cotton inner that creates the signal, a smart absorption layer that protects without wicking the sensation away, and a leak-resistant outer barrier. It's designed to be worn during normal daily activity, one to two hours at a time, no prompting, no pressure. Let the sensation do the teaching.
      </p>

      {/* Bundle info */}
      <p style={{
        margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft,
      }}>
        For most families, the 3+3 Bundle (6 pairs, $79.99, free shipping) gives enough rotation for consistent daily wearing. If you want to start lighter, 1 Pair ($34.99) lets you test the approach alongside your current routine.
      </p>

      {/* Pricing Block — B.tint bg */}
      <div style={{
        background: "#F4F7F4",
        border: `1.5px solid ${B.ink}`,
        borderRadius: 14,
        padding: "18px 18px",
        marginTop: 16,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: B.ink }}>3+3 Bundle (6 pairs)</div>
            <div style={{ fontSize: 13, color: B.soft }}>Free shipping</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: B.ink }}>$79.99</div>
        </div>
        <div style={{ height: 1, background: "#E8DED5", margin: "10px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: B.ink }}>1 Pair</div>
            <div style={{ fontSize: 13, color: B.soft }}>$13.33/pair with bundle</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: B.ink }}>$34.99</div>
        </div>
      </div>
    </div>

    {/* ══════ UTIL-02: SVG Squiggle Divider ══════ */}
    <div style={{ padding: "12px 0", textAlign: "center" }}>
      <svg width="40" height="12" viewBox="0 0 40 12">
        <path d="M0,6 Q10,0 20,6 T40,6" stroke={B.teal} strokeWidth="1.5" fill="none" />
      </svg>
    </div>

    {/* ══════ SP-03: UGC Photo Grid — Social Proof Mini-Wins ══════ */}
    <div style={{ padding: "20px 22px 28px" }}>
      {/* Section intro */}
      <p style={{
        margin: "0 0 18px", fontSize: 16, lineHeight: 1.5, color: B.ink,
      }}>
        The parents who've tried it describe success in small, real moments:
      </p>

      {/* Mini-Win Card 1 — Sarah */}
      <div style={{
        background: B.cream,
        borderRadius: 14,
        border: `2px solid ${B.ink}`,
        boxShadow: `5px 5px 0 ${B.ink}`,
        padding: "20px 18px",
        marginBottom: 14,
        position: "relative",
      }}>
        {/* Warm-gold left quotation mark */}
        <div style={{
          position: "absolute", top: 10, left: 14,
          fontFamily: F.display, fontSize: 48, lineHeight: 1,
          color: "#FFD866", opacity: 0.3,
        }}>"</div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12, paddingLeft: 24 }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.5, flexShrink: 0, marginTop: 8,
          }} />
          <div>
            <p style={{
              margin: 0, fontSize: 16, lineHeight: 1.6, color: B.soft,
            }}>
              "He looked down at the wet spot for the first time in his life. That never happened before."
            </p>
          </div>
        </div>
        <div style={{ fontSize: 13, color: B.muted, fontStyle: "italic", paddingLeft: 24 }}>
          Sarah, mom of a 4-year-old
        </div>
      </div>

      {/* Mini-Win Card 2 — Lisa */}
      <div style={{
        background: B.cream,
        borderRadius: 14,
        border: `2px solid ${B.ink}`,
        boxShadow: `5px 5px 0 ${B.ink}`,
        padding: "20px 18px",
        marginBottom: 14,
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 10, left: 14,
          fontFamily: F.display, fontSize: 48, lineHeight: 1,
          color: "#FFD866", opacity: 0.3,
        }}>"</div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12, paddingLeft: 24 }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.5, flexShrink: 0, marginTop: 8,
          }} />
          <div>
            <p style={{
              margin: 0, fontSize: 16, lineHeight: 1.6, color: B.soft,
            }}>
              "She paused mid-play. Looked down at her pants. Then she walked to the bathroom. It was after the fact, but she PAUSED. That was week 4."
            </p>
          </div>
        </div>
        <div style={{ fontSize: 13, color: B.muted, fontStyle: "italic", paddingLeft: 24 }}>
          Lisa, mom of a 6-year-old
        </div>
      </div>

      {/* Mini-Win Card 3 — Maria */}
      <div style={{
        background: B.cream,
        borderRadius: 14,
        border: `2px solid ${B.ink}`,
        boxShadow: `5px 5px 0 ${B.ink}`,
        padding: "20px 18px",
        marginBottom: 14,
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 10, left: 14,
          fontFamily: F.display, fontSize: 48, lineHeight: 1,
          color: "#FFD866", opacity: 0.3,
        }}>"</div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12, paddingLeft: 24 }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: B.teal, opacity: 0.5, flexShrink: 0, marginTop: 8,
          }} />
          <div>
            <p style={{
              margin: 0, fontSize: 16, lineHeight: 1.6, color: B.soft,
            }}>
              "He's not trained. But he's tolerating the underwear for the first time. And last week, he pulled at his pants when he was wet. That's more awareness than we've seen in 7 years."
            </p>
          </div>
        </div>
        <div style={{ fontSize: 13, color: B.muted, fontStyle: "italic", paddingLeft: 24 }}>
          Maria, mom of a 9-year-old
        </div>
      </div>

      {/* Bridge copy */}
      <p style={{
        margin: "14px 0 0", fontSize: 16, lineHeight: 1.6,
        color: B.soft, fontStyle: "italic",
      }}>
        Three different kids, three different starting points, three different timelines.
      </p>
    </div>

    {/* ══════ 1px RULE — Tonal Shift ══════ */}
    <div style={{ height: 1, background: "#E8DED5", margin: "0 22px" }} />

    {/* ══════ TRUST-1: 60-Day Seal — Guarantee (CENTERPIECE) ══════ */}
    <div style={{ padding: "28px 22px" }}>
      <div style={{
        background: "#F4F7F4",
        border: `2px solid ${B.teal}`,
        borderRadius: 16,
        padding: "28px 24px",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Doorway State 3 — archway border (top border thicker, rounded top) */}
        <div style={{
          position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)",
          width: 120, height: 12,
          borderRadius: "60px 60px 0 0",
          border: `12px solid ${B.teal}`,
          borderBottom: "none",
          background: B.cream,
        }} />

        {/* "60 days." */}
        <p style={{
          margin: "16px 0 12px",
          fontSize: 20, fontWeight: 700, color: B.ink,
          letterSpacing: 0.04, lineHeight: 1.3,
        }}>
          60 days.
        </p>

        {/* Guarantee body */}
        <p style={{
          margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: B.soft,
        }}>
          Your judgment. If your child shows no sign of body awareness, no pause, no look, no change at all, full refund.
        </p>

        {/* Permission framing */}
        <p style={{
          margin: "0 0 16px", fontSize: 17, lineHeight: 1.6, color: B.ink, fontStyle: "italic",
        }}>
          Not because I expect you to ask for one. Because you should never feel stuck with something that didn't work for your kid.
        </p>

        {/* Threshold Glow — 4px warm-gold dot at arch apex */}
        <div style={{
          width: 8, height: 8, borderRadius: "50%",
          background: "#FFD866",
          margin: "0 auto",
          position: "relative", top: -38,
          marginBottom: -30,
        }} />
      </div>
    </div>

    {/* ══════ CTA-4: Gentle Invite ══════ */}
    <div style={{ padding: "14px 22px 28px", textAlign: "center" }}>
      {/* CTA button */}
      <a href="#" style={{
        display: "inline-block", padding: "14px 32px",
        background: B.teal, color: "#D8F57C",
        fontSize: 16, fontWeight: 700,
        textDecoration: "none", borderRadius: 999,
        letterSpacing: 0.3, minWidth: 300,
        textAlign: "center",
      }}>
        See how the body-signal layer works
      </a>

      {/* Price anchor */}
      <p style={{
        margin: "18px 0 0", fontSize: 14, lineHeight: 1.4, color: B.muted,
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Secondary link */}
      <p style={{ margin: "12px 0 0", fontSize: 15 }}>
        <a href="#" style={{ color: B.teal, textDecoration: "none" }}>
          Read reviews from 16,511 parents
        </a>
      </p>
    </div>

    {/* ══════ SIGNOFF — Lena (LONG) ══════ */}
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
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Dashed divider — signature section */}
        <div style={{
          borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547",
          paddingTop: 16, paddingBottom: 16, marginBottom: 16,
        }}>
          <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
            With care,
          </div>
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 42, lineHeight: 0.95, fontWeight: 500,
            color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
          }}>
            Lena
          </div>
        </div>

        {/* Personal P.S. — LONG variant */}
        <p style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic", margin: 0,
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.
        </p>
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

  </EmailShell>
);

Object.assign(window, { Email_browse_04_e3 });
