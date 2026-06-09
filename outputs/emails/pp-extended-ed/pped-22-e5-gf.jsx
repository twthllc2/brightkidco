/* PP-Extended Education — E5 (D50) | GF
   Wireframe: wireframes/pp-extended-ed/pped-22-e5-gf.md
   Strategy: strategy-map.json → pp-extended-ed.e5-gf
   Generated: 2026-06-09
*/

// ══════════════════════════════════════════════════════
// Email_pp-extended-ed_e5_gf — "The Long Middle" (GF)
// Final extended education email. Community connection
// and validation. Community-forward, inclusive, warm.
// ══════════════════════════════════════════════════════

const Email_pp_extended_ed_e5_gf = () => (
  <EmailShell
    preheader="The body-signal learning continues, and you don't have to figure it out alone."
    bg="#FAF9F7"
  >
    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER
       ══════════════════════════════════════════════════════ */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-15 — Level Callout
       "THE LONG MIDDLE" mint capsule badge + centered headline
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      padding: "34px 22px 0",
      textAlign: "center",
    }}>
      {/* Mint capsule badge */}
      <div style={{
        display: "inline-block",
        background: "#DBFFCD",
        padding: "6px 16px",
        borderRadius: 999,
        marginBottom: 18,
      }}>
        <span style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: B.ink,
          fontFamily: F.main,
        }}>THE LONG MIDDLE</span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: 28,
        lineHeight: 1.15,
        fontWeight: 700,
        margin: 0,
        letterSpacing: -0.4,
        color: B.ink,
        fontFamily: F.main,
        textAlign: "center",
      }}>
        Wherever you are on this journey, you're not alone
      </h1>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: WINDING PATH ILLUSTRATION
       Custom illustration placeholder — hand-drawn landscape
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "48px 22px 0" }}>
      <ImgFrame
        height={200}
        radius={20}
        label="THE WINDING PATH"
        sublabel="Meadow → Forest → Gentle Ascent → Open Doorway · earthy greens + warm amber"
      />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: GRADIENT BAND (UTIL-01)
       4px tall, B.teal → B.green
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: LETTER-01 — HOOK + VALIDATION
       Lena here. — direct, personal, validation.
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.cream,
      borderRadius: 16,
      margin: "48px 14px 0",
      padding: 32,
      fontSize: 17,
      lineHeight: 1.7,
      color: B.soft,
      fontFamily: F.main,
    }}>
      <p style={{
        margin: "0 0 14px",
        fontSize: 17,
        color: B.ink,
        fontWeight: 600,
      }}>Lena here.</p>
      <p style={{ margin: "0 0 14px" }}>
        If you've been with us since the beginning of this extended education
        series, you've heard the science. You've followed the weeks. You've been
        watching for signs.
      </p>
      <p style={{ margin: "0 0 14px" }}>
        And wherever your child is right now, week 2 of wearing them or week 8;
        noticing nothing or starting to pause, that's a real place to be.
      </p>
      <p style={{ margin: 0 }}>
        Here's what I want to leave you with in this last extended education
        email: you're not supposed to have it all figured out. Nobody does it
        alone. And the next part of the journey looks different for every family.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: PULL-QUOTE BLOCK
       Fraunces italic, #D4A853, 3px left border
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.cream,
      borderRadius: 16,
      margin: "48px 14px 0",
      padding: "24px 24px 24px 36px",
      borderLeft: "3px solid #D4A853",
    }}>
      <p style={{
        margin: 0,
        fontFamily: F.display,
        fontSize: 22,
        fontStyle: "italic",
        color: "#D4A853",
        lineHeight: 1.5,
      }}>
        "You're not supposed to have it all figured out. Nobody does it alone.
        And the next part of the journey looks different for every family."
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: GRADIENT BAND (UTIL-01)
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: EDU-7 — DID YOU KNOW
       Science snippets: 82% stat, Nicholson 2019, Hample 2020
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      borderRadius: 16,
      margin: "48px 14px 0",
      padding: 22,
    }}>
      {/* Mint badge */}
      <div style={{
        display: "inline-block",
        background: "#DBFFCD",
        padding: "6px 14px",
        borderRadius: 999,
        marginBottom: 14,
      }}>
        <span style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: B.ink,
          fontFamily: F.main,
        }}>DID YOU KNOW</span>
      </div>

      {/* Stat highlight */}
      <div style={{
        display: "inline-block",
        background: "#FFD866",
        padding: "3px 8px",
        borderRadius: 6,
        fontWeight: 700,
        color: B.ink,
        fontSize: 16,
        fontFamily: F.main,
      }}>82%</div>
      <span style={{
        fontSize: 16,
        color: B.soft,
        fontFamily: F.main,
        lineHeight: 1.7,
      }}> of BKC parents surveyed reported clearer body awareness within 2-4 weeks
      of consistent wear.</span>

      <p style={{
        fontSize: 15,
        color: B.soft,
        lineHeight: 1.7,
        margin: "14px 0 0",
        fontFamily: F.main,
      }}>
        Research from Nicholson et al. (2019) confirmed body awareness in
        autistic children is measurably diminished, but the childhood
        intervention window exists — pathways can form with consistent feedback.
        Some kids show awareness in 2 weeks, others take 8 weeks.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: GRADIENT BAND (UTIL-01)
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SP-12 — COMMUNITY COUNTER
       100K families, 16,511 reviews, 4.9 stars
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.cream,
      borderRadius: 16,
      margin: "48px 14px 0",
      padding: 22,
      fontFamily: F.main,
    }}>
      <p style={{
        fontSize: 16,
        color: B.ink,
        lineHeight: 1.7,
        fontWeight: 600,
        margin: "0 0 10px",
      }}>
        You don't have to track this alone.
      </p>

      <p style={{
        fontSize: 15,
        color: B.soft,
        lineHeight: 1.7,
        margin: "0 0 10px",
      }}>
        Nearly 100,000 families have tried BrightKidCo.{" "}
        <span style={{
          display: "inline-block",
          background: "#FFD866",
          padding: "2px 6px",
          borderRadius: 4,
          fontWeight: 700,
          color: B.ink,
        }}>16,511</span>{" "}
        of them left reviews,{" "}
        <strong style={{ color: B.ink }}>4.9 stars</strong>.
      </p>

      <p style={{
        fontSize: 15,
        color: B.soft,
        lineHeight: 1.7,
        margin: 0,
      }}>
        More importantly: those families are in the same long middle. They're
        the ones who saw their child pause for the first time after 6 weeks of
        nothing. They're the ones who had a regression at week 5 and pushed
        through. They're the ones who know that "steady" beats "fast" when it
        comes to building body awareness.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: GRADIENT BAND (UTIL-01)
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 12: LETTER-01 — NEXT STEPS
       Three bold directives + body text
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.cream,
      borderRadius: 16,
      margin: "48px 14px 0",
      padding: 32,
      fontSize: 15,
      lineHeight: 1.7,
      color: B.soft,
      fontFamily: F.main,
    }}>
      <p style={{
        fontSize: 17,
        color: B.ink,
        fontWeight: 600,
        margin: "0 0 18px",
      }}>
        What "next steps" looks like for GF families:
      </p>

      <p style={{ margin: "0 0 14px" }}>
        <strong style={{
          fontSize: 17,
          color: B.ink,
          fontWeight: 700,
          fontStyle: "italic",
        }}>Keep wearing consistently.</strong>{" "}
        The Body-Signal Learning Layer works through repeated exposure. The more
        consistent the wear time, the more opportunities the brain has to
        register the signal. Three-plus hours of continuous wear per day is the
        sweet spot.
      </p>

      <p style={{ margin: "0 0 14px" }}>
        <strong style={{
          fontSize: 17,
          color: B.ink,
          fontWeight: 700,
          fontStyle: "italic",
        }}>Watch for micro-shifts, not milestones.</strong>{" "}
        Don't measure against "trained by 8 weeks." Measure against last month.
        Did your child pause for one second longer? Look down once? Pull at
        their pants? Those are wins.
      </p>

      <p style={{ margin: 0 }}>
        <strong style={{
          fontSize: 17,
          color: B.ink,
          fontWeight: 700,
          fontStyle: "italic",
        }}>Stay connected.</strong>{" "}
        Whether you're reading other parents' reviews, replying to this email,
        or finding community in shared stories, the single biggest predictor of
        continued progress is not feeling alone in it.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: GRADIENT BAND (UTIL-01)
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 14: CTA-6 — SOCIAL CTA
       Community-focused CTA + guarantee + secondary link
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      padding: "32px 22px 40px",
      textAlign: "center",
      fontFamily: F.main,
    }}>
      <p style={{
        fontSize: 16,
        lineHeight: 1.6,
        color: B.ink,
        margin: "0 0 24px",
        fontWeight: 500,
      }}>
        You're doing more than you think. If you've made it to day 50 of this
        journey, with the product on your child some days, in the drawer on
        others, maybe seeing glimmers of awareness, maybe still waiting, you're
        doing the thing that matters most: you're staying in the game.
      </p>

      {/* Primary CTA button */}
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: B.teal,
        color: "#FFFFFF",
        fontSize: 15.5,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        letterSpacing: 0.3,
        minHeight: 48,
        lineHeight: 1.3,
        textAlign: "center",
        fontFamily: F.main,
      }}>
        Continue the body-signal journey, explore the community →
      </a>

      {/* Guarantee text */}
      <p style={{
        fontSize: 14,
        color: B.soft,
        margin: "18px 0 0",
        lineHeight: 1.5,
      }}>
        60-Day Guarantee. Try it and see. By your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: SECONDARY LINK
       "Read parent stories from the long middle →"
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      padding: "0 22px 40px",
      textAlign: "center",
    }}>
      <a href="#" style={{
        fontSize: 15,
        color: B.teal,
        textDecoration: "underline",
        fontFamily: F.main,
      }}>
        Read parent stories from the long middle →
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: TRUST-5 — PROMISE BADGES STRIP
       Three Mint capsule badges: 60-Day / Free Shipping / No Risk
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      padding: "0 22px 40px",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      gap: 10,
      flexWrap: "wrap",
      fontFamily: F.main,
    }}>
      {["60-Day Guarantee", "Free Shipping", "No Risk"].map((text, i) => (
        <div key={i} style={{
          display: "inline-block",
          background: "#DBFFCD",
          padding: "6px 14px",
          borderRadius: 999,
        }}>
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            color: B.ink,
          }}>{text}</span>
        </div>
      ))}
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 17: SIGNOFF — LENA (MEDIUM)
       Dark card on cream, gradient top bar, avatar, story, P.S.
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 14px 48px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Top gradient accent bar */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: B.gradient,
          opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 18,
        }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58,
            height: 58,
            flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${B.tealDeep} 0%, ${B.teal} 100%)`,
            padding: 2.5,
            position: "relative",
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              border: `1.5px solid ${B.ink}`,
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
              fontSize: 10.5,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color: "#8FAFB2",
              fontWeight: 700,
              marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}>
              Lena
            </div>
            <div style={{
              fontSize: 12,
              color: "#8FAFB2",
              marginTop: 2,
              fontStyle: "italic",
            }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Handwritten signature section with dashed border */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          paddingTop: 16,
          paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: 12.5,
              color: "#B8CACD",
              marginBottom: 2,
            }}>
              I have two autistic sons. One trained at 6. The other at almost 8.
              There was a very long middle, weeks where nothing happened, weeks
              where I wondered if any of it was real progress, and eventually, a
              week where something finally clicked. Your timeline doesn't have to
              look like anyone else's.
            </div>
            <div style={{
              fontSize: 12.5,
              color: "#B8CACD",
              marginTop: 6,
              lineHeight: 1.5,
            }}>
              Keep going. And if you ever want to share where you are on the
              journey, hit reply. I read everything.
            </div>
            <div style={{
              fontSize: 12.5,
              color: "#8FAFB2",
              marginTop: 6,
              fontStyle: "italic",
            }}>
              With understanding,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#D8F57C",
              letterSpacing: -0.5,
              marginTop: 6,
            }}>
              Lena
            </div>
          </div>

          {/* Flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. */}
        <div style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: "#B8CACD",
          fontStyle: "italic",
        }}>
          <span style={{
            color: "#D8F57C",
            fontWeight: 700,
            fontStyle: "normal",
            marginRight: 4,
          }}>P.S.</span>
          The extended education series ends here, but the support doesn't.
          Whether you're in week 3 or week 50, the door is always open. Reply
          anytime.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 18: FOOTER
       Tagline, social, unsubscribe, address, guarantee, gradient bar
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: "#FFFFFF",
      padding: "30px 24px 30px",
      textAlign: "center",
      fontFamily: F.main,
    }}>
      {/* Tagline */}
      <div style={{
        fontFamily: F.display,
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: 500,
        color: B.ink,
        marginBottom: 24,
        letterSpacing: -0.2,
      }}>
        "Built for the brain that learns differently."
      </div>

      {/* Social icons */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 22,
        margin: "0 0 20px",
      }}>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" />
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Unsubscribe + address */}
      <div style={{
        fontSize: 12.5,
        color: B.muted,
        lineHeight: 1.65,
        margin: "0 auto",
        maxWidth: 340,
      }}>
        No longer want to receive these emails?{" "}
        <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a>.
        <br />
        <span style={{ fontSize: 11 }}>
          123 Commerce Street, Suite 200, Nashville, TN 37201
        </span>
      </div>

      {/* 60-Day guarantee footer block */}
      <div style={{
        margin: "24px 0 0",
        fontSize: 14,
        fontWeight: 700,
        color: B.ink,
        lineHeight: 1.5,
      }}>
        60-Day Money-Back Guarantee
      </div>
      <div style={{
        fontSize: 14,
        color: B.soft,
        lineHeight: 1.5,
        margin: "2px 0 0",
      }}>
        Your judgment, your timeline. No questions asked.
      </div>

      {/* Bottom gradient bar */}
      <div style={{
        margin: "24px auto 0",
        width: 60,
        height: 3,
        background: B.gradient,
        borderRadius: 3,
      }} />
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_pp_extended_ed_e5_gf });
