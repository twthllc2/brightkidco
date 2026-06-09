/* Site Abandonment — E1 | Cross-Level
   Wireframe: wireframes/site-abandonment/site-20-e1.md
   Strategy: strategy-map.json → site-abandonment.emails.e1
   Generated: 2026-06-09
*/

// ══════════════════════════════════════════════════════
// SECTION 1: EMAIL SHELL + PREHEADER + HEADER
// ══════════════════════════════════════════════════════

const Email_site_20_e1 = () => (
  <EmailShell preheader="Whether you've been at this for weeks or years — here's what most parents miss." bg={B.paper}>

    {/* ── Header ── */}
    <Header bg={B.paper} />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-3 — Permission Open
       Text-forward, no image, no PartBadge
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "34px 22px 28px", textAlign: "center" }}>
      <div style={{
        fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, fontWeight: 700, marginBottom: 10,
        fontFamily: F.main,
      }}>
        FROM LENA
      </div>
      <h1 style={{
        fontSize: 30, lineHeight: 1.15, fontWeight: 700, margin: 0,
        letterSpacing: -0.4, color: B.ink, fontFamily: F.main,
      }}>
        The real reason your child<br />
        <span style={{ ...B.gradientText, fontWeight: 700 }}>isn't potty trained</span>
      </h1>
      <p style={{
        fontSize: 17, color: B.soft, marginTop: 14, lineHeight: 1.4,
        fontWeight: 500, fontFamily: F.main,
      }}>
        Whether you've been at this for weeks or years, here's what most parents miss.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: GRADIENT BAND — Teal → Green
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={6} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-01 — Opener (Hook Block)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "20px 24px 28px" }}>
      <p style={{
        margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600,
        lineHeight: 1.6, fontFamily: F.main,
      }}>
        Whether your child is 3 or 10, talks about the potty but won't use it, or has never shown a sign of feeling wet, if they don't feel when they need to go, traditional methods can't work.
      </p>
      <p style={{
        margin: "0 0 14px", fontSize: 15, color: B.soft, lineHeight: 1.7,
        fontFamily: F.main,
      }}>
        You came here because something is off. Maybe your kid sits on the toilet forever. Nothing happens. Then you put the pull-up back on and there's pee in it 30 seconds later. Maybe she plays while peeing without noticing, no pause, no reaction, no signal at all. Maybe he has never reacted to being wet. Not once. Not in years.
      </p>
      <p style={{
        margin: "0 0 14px", fontSize: 15, color: B.soft, lineHeight: 1.7,
        fontFamily: F.main,
      }}>
        Or maybe you've been through all of it: the sticker charts, the timed sits, the social stories, the BCBA protocols, every book that promised "train your child in X days." Something about potty training your child just won't click, and you can't figure out why.
      </p>
      <p style={{
        margin: 0, fontSize: 16, color: B.ink, fontStyle: "italic",
        fontWeight: 500, fontFamily: F.main,
      }}>
        If that sounds familiar, you're not alone.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: 1px RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8DED5", margin: 0 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER-01 — Validation Block
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "22px 24px 28px" }}>
      {/* SP-05: Stat Highlight Card */}
      <div style={{
        background: B.cream, border: `2px solid ${B.teal}`,
        borderRadius: 14, padding: "24px 22px", textAlign: "center",
        marginBottom: 20, maxWidth: 380, marginLeft: "auto", marginRight: "auto",
      }}>
        <div style={{
          fontFamily: F.display, fontSize: 42, fontWeight: 700,
          color: B.teal, lineHeight: 1,
        }}>
          49%
        </div>
        <div style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          color: B.ink, lineHeight: 1.3, marginTop: 8,
        }}>
          of autistic 4-5 year olds aren't toilet trained
        </div>
        <div style={{
          fontFamily: F.main, fontSize: 12, color: B.muted, marginTop: 6,
        }}>
          (Wiggins et al. 2022, CDC-funded study of 743 children)
        </div>
      </div>

      <p style={{
        margin: "0 0 16px", fontSize: 15, color: B.soft, lineHeight: 1.7,
        fontFamily: F.main,
      }}>
        Here's a number that changed how I think about all of this: 49% of autistic 4-5 year olds aren't toilet trained (Wiggins et al. 2022, CDC-funded study of 743 children). That's not a parenting failure rate, that's a method failure rate. Six out of seven kids in that age range face a gap that standard potty training approaches weren't built to address.
      </p>
      <p style={{
        margin: 0, fontSize: 17, fontWeight: 700, color: B.ink,
        textAlign: "center", fontFamily: F.main,
      }}>
        You didn't fail. The methods did.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: GRADIENT BAND — Teal → Green
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={6} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: EDU-8 — Mechanism Diagram
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.cream, border: `2px solid ${B.teal}`,
      borderRadius: 14, padding: "28px 22px", margin: "36px 22px",
    }}>
      <div style={{
        fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, fontWeight: 700, marginBottom: 10, fontFamily: F.main,
      }}>
        THE SIGNAL GAP
      </div>
      <p style={{
        margin: "0 0 14px", fontSize: 15, color: B.soft, lineHeight: 1.7,
        fontFamily: F.main,
      }}>
        The reason so many methods fall short isn't that you didn't try hard enough. It's that they're built on an assumption that doesn't hold for every child.
      </p>
      <p style={{
        margin: "0 0 14px", fontSize: 15, color: B.soft, lineHeight: 1.7,
        fontFamily: F.main,
      }}>
        Most potty training methods assume the child can feel the internal signal that says "I need to go." The body sends the message, the brain receives it, the child acts on it. That chain works for neurotypical kids.
      </p>
      <p style={{
        margin: "0 0 14px", fontSize: 15, color: B.soft, lineHeight: 1.7,
        fontFamily: F.main,
      }}>
        But for many kids whose nervous systems process signals differently, that chain is broken. The signal from bladder to brain arrives too late. Or it doesn't arrive at all.
      </p>

      {/* Signal chain diagram */}
      <div style={{
        background: B.paper, border: "1px solid #E8DED5",
        borderRadius: 10, padding: "18px 16px", textAlign: "center",
        marginBottom: 14,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 13, color: B.soft,
          lineHeight: 1.8,
        }}>
          <span style={{ fontWeight: 700, color: B.ink }}>Bladder</span>
          <span style={{ margin: "0 8px", color: B.teal }}>→</span>
          <span style={{ fontWeight: 700, color: B.ink }}>Brain</span>
          <span style={{ margin: "0 8px", color: B.teal }}>→</span>
          <span style={{ fontWeight: 700, color: B.ink }}>Child Acts</span>
        </div>
        <div style={{
          fontFamily: F.main, fontSize: 11.5, color: B.muted,
          marginTop: 6, fontStyle: "italic",
        }}>
          (signal) &nbsp; (receives) &nbsp; (goes to bathroom)
        </div>
        {/* Dashed break indicator */}
        <div style={{
          margin: "12px auto 0", width: "80%", height: 1,
          borderTop: "2px dashed #E8DED5",
        }} />
        <div style={{
          fontFamily: F.main, fontSize: 13, color: B.soft,
          marginTop: 10,
        }}>
          "For many kids, this chain is broken. The signal arrives too late. Or not at all."
        </div>
      </div>

      <p style={{
        margin: "0 0 14px", fontSize: 15, color: B.soft, lineHeight: 1.7,
        fontFamily: F.main,
      }}>
        This has a name: interoception, the body's internal messaging system. It's the sense that tells you when you're hungry, when you're thirsty, when you need the bathroom. Research shows interoception works differently in children whose nervous systems process signals differently (Nicholson et al. 2019; Barmpagiannis & Baldimtsi 2025, 49-study review).
      </p>
      <p style={{
        margin: 0, fontSize: 15, fontWeight: 600, color: B.ink,
        lineHeight: 1.7, fontFamily: F.main,
      }}>
        The signal isn't stubbornness. It's not defiance. It's not something you failed to teach. It's a signal-timing gap, and until you know it exists, every method you try will be solving the wrong problem.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: 1px RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8DED5", margin: 0 }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SP-05 — Three-Family Testimonial
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "28px 22px" }}>
      <p style={{
        margin: "0 0 24px", fontSize: 17, fontWeight: 700, color: B.ink,
        textAlign: "center", fontFamily: F.main,
      }}>
        Three families. Three different kids. One missing piece.
      </p>

      {/* Testimonial Card 1 — Lena, L1 */}
      <div style={{
        background: B.cream, borderLeft: `3px solid ${B.teal}`,
        borderRadius: 14, boxShadow: `4px 4px 0 ${B.ink}`,
        padding: "22px 20px", marginBottom: 16,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 12, fontWeight: 500,
          fontStyle: "italic", color: B.muted, marginBottom: 8,
        }}>
          Lena, mom of a verbal 4-year-old:
        </div>
        <div style={{
          fontFamily: F.display, fontSize: 16, fontWeight: 400,
          fontStyle: "italic", color: B.ink, lineHeight: 1.6,
          borderLeft: "3px solid #E8DED5", paddingLeft: 14,
        }}>
          "He knew the routine. He could tell me 'I need to pee', after he'd already gone. We spent months thinking he was being difficult. Turned out the signal was reaching his brain after he was already wet. Once we addressed that, everything shifted."
        </div>
      </div>

      {/* Testimonial Card 2 — Sofia, L2 */}
      <div style={{
        background: B.cream, borderLeft: `3px solid ${B.green}`,
        borderRadius: 14, boxShadow: `4px 4px 0 ${B.ink}`,
        padding: "22px 20px", marginBottom: 16,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 12, fontWeight: 500,
          fontStyle: "italic", color: B.muted, marginBottom: 8,
        }}>
          Sofia, mom of a 6-year-old with sensory differences:
        </div>
        <div style={{
          fontFamily: F.display, fontSize: 16, fontWeight: 400,
          fontStyle: "italic", color: B.ink, lineHeight: 1.6,
          borderLeft: "3px solid #E8DED5", paddingLeft: 14,
        }}>
          "We tried everything the BCBA recommended. Scheduled sits, reward systems, social narratives. Nothing transferred. I was ready to accept it would never happen. Then I learned about the interoception gap, his brain wasn't getting the body signal in time. That changed our entire approach."
        </div>
      </div>

      {/* Testimonial Card 3 — Priya, L3 */}
      <div style={{
        background: B.cream, borderLeft: `3px solid ${B.teal}`,
        borderRadius: 14, boxShadow: `4px 4px 0 ${B.ink}`,
        padding: "22px 20px", marginBottom: 16,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 12, fontWeight: 500,
          fontStyle: "italic", color: B.muted, marginBottom: 8,
        }}>
          Priya, mom of a 9-year-old with high support needs:
        </div>
        <div style={{
          fontFamily: F.display, fontSize: 16, fontWeight: 400,
          fontStyle: "italic", color: B.ink, lineHeight: 1.6,
          borderLeft: "3px solid #E8DED5", paddingLeft: 14,
        }}>
          "Nine years. Never a sign. I'd stopped looking for one. Then after a few months of body-signal work, he paused mid-play. Looked down at the wet spot. Then walked toward the bathroom. He's not trained, but he FELT something. That had never happened before."
        </div>
      </div>

      <p style={{
        margin: 0, fontSize: 15, color: B.soft, textAlign: "center",
        fontFamily: F.main,
      }}>
        The common thread across all three: before they understood the signal gap, the learning couldn't start because the information couldn't arrive.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CTA-4 — Gentle Invite
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.ink, padding: "28px 22px 44px",
      textAlign: "center", color: "#FFF",
    }}>
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#B8CACD",
        margin: "0 0 12px", fontFamily: F.main,
      }}>
        If any of this sounds like your child, the next step isn't buying anything.
      </p>
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#B8CACD",
        margin: "0 0 24px", fontFamily: F.main,
      }}>
        The next step is understanding what "signal arrival" actually looks like for a nervous system that processes differently. And whether there's a way to bridge that gap.
      </p>
      <a href="#" style={{
        display: "inline-block", padding: "17px 32px",
        background: "#D8F57C", color: B.ink, fontSize: 15.5,
        fontWeight: 700, textDecoration: "none", borderRadius: 999,
        letterSpacing: 0.3, fontFamily: F.main,
      }}>
        Keep exploring →
      </a>

      {/* DESDEEP-14: Decorative flourish */}
      <div style={{ marginTop: 24, opacity: 0.6 }}>
        <svg width="80" height="20" viewBox="0 0 80 20">
          <defs>
            <linearGradient id="tealGreenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={B.teal} />
              <stop offset="100%" stopColor={B.green} />
            </linearGradient>
          </defs>
          <path d="M4,10 C12,2 20,18 28,10 C34,4 42,16 50,10 C56,4 64,16 72,10"
                stroke="url(#tealGreenGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: SIGNOFF CARD (SHORT variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 22,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* Top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5,
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
              Talk soon,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42,
              lineHeight: 0.95, fontWeight: 500, color: "#D8F57C",
              letterSpacing: -0.5, marginTop: 2,
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
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          You can try the body-signal approach for 60 days. By your judgment. If it's not right for your child, full refund, no questions. That's how sure we are that understanding the signal gap changes everything.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: OUTLINE + FOOTER
       ══════════════════════════════════════════════════════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

// Register on window
Object.assign(window, { Email_site_20_e1 });
