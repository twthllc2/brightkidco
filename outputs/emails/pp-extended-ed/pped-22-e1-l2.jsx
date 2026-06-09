/* PP-Extended Education — E1 | Level 2 (Lisa)
   Wireframe: wireframes/pp-extended-ed/pped-22-e1-l2.md
   Strategy: strategy-map.json → pp-extended-ed.e1-l2
   Generated: 2026-06-09
*/

const Email_pped_22_e1_l2 = () => (
  <EmailShell
    preheader="He sits when prompted. He never initiates. After 4 years of ABA, here's what we missed."
    bg={B.paper}
  >
    {/* ── Section 1: Header ── */}
    <Header bg="#F6F2EA" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-2 — Data Shock
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "40px 32px 32px", textAlign: "center", background: B.cream }}>
      <Eyebrow color="#9AA8A7">THE NEUROLOGICAL GAP</Eyebrow>
      <h1 style={{
        fontFamily: F.main, fontSize: 28, lineHeight: 1.2, fontWeight: 400,
        letterSpacing: "0.02em", color: B.ink, margin: "0 0 24px",
      }}>
        Why every method failed,<br/>neurology, not effort
      </h1>

      {/* Stat callout card */}
      <div style={{
        background: "#C5D5C7", borderRadius: 16, padding: "20px 22px",
        margin: "0 0 20px", border: "1px solid #C5D5C7",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontWeight: 400,
        }}>
          8 methods. Every one assumed the same thing: that your child can feel when he needs to go.
        </p>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
        margin: 0, fontWeight: 400,
      }}>
        He sits when prompted. He never initiates. After 4 years of ABA, here's what we missed.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: DESDEEP-5 — Border Play
       ══════════════════════════════════════════════════════ */}
    <div style={{
      height: 20, background: B.paper,
      borderLeft: "1px solid #C5D5C7", borderRight: "1px solid #C5D5C7",
      borderTop: "1px solid #C5D5C7", borderBottom: "1px solid #C5D5C7",
      borderRadius: 16, margin: "0 32px",
    }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-09 — Double Column
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 24px", background: B.cream }}>
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            {/* Left Column: Mechanism */}
            <td style={{ width: "48%", verticalAlign: "top", paddingRight: 12 }}>
              <h2 style={{
                fontFamily: F.main, fontSize: 20, lineHeight: 1.3, fontWeight: 400,
                color: B.ink, margin: "0 0 16px",
              }}>
                The Mechanism They All Missed
              </h2>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
                margin: "0 0 14px",
              }}>
                Your BCBA has built a behavioral foundation over years of trust, prompting, and reinforcement. Your child knows the steps. He can do the routine, because the routine is external.
              </p>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
                margin: "0 0 14px", fontWeight: 700,
              }}>
                What he can't do is feel the signal.
              </p>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
                margin: "0 0 14px",
              }}>
                Autistic children show significantly diminished body awareness—the ability to sense internal body states like bladder fullness. The signal from bladder to brain doesn't arrive in time.
              </p>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
                margin: "0 0 14px", fontWeight: 700,
              }}>
                His brain never received the message.
              </p>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
                margin: "0 0 14px",
              }}>
                Every method that assumes the signal exists builds on a foundation that isn't there.
              </p>
              <p style={{
                fontFamily: F.main, fontSize: 13, lineHeight: 1.5, color: "#9AA8A7",
                margin: 0, fontStyle: "italic",
              }}>
                Nicholson et al. (2019), Journal of Autism and Developmental Disorders
              </p>
            </td>

            {/* Spacer */}
            <td style={{ width: "4%" }}>&nbsp;</td>

            {/* Right Column: Validation */}
            <td style={{ width: "48%", verticalAlign: "top", paddingLeft: 12 }}>
              <h2 style={{
                fontFamily: F.main, fontSize: 20, lineHeight: 1.3, fontWeight: 400,
                color: B.ink, margin: "0 0 16px",
              }}>
                What BCBA Built, And What It Can't Build Alone
              </h2>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
                margin: "0 0 14px",
              }}>
                Your BCBA has spent 3–5 years building critical skills: compliance, sitting tolerance, schedule-following, communication around bathroom routines. That foundation matters. It's why your child can sit when prompted, follow the steps, and sometimes even produce on cue.
              </p>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
                margin: "0 0 14px",
              }}>
                But BCBA protocols are designed to teach <strong style={{ color: B.ink }}>behavioral compliance</strong>, following the schedule, responding to the prompt, earning the reinforcement. They are NOT designed to teach <strong style={{ color: B.ink }}>body awareness</strong>, the ability to feel and interpret internal body signals.
              </p>
              <p style={{
                fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
                margin: 0, fontWeight: 700,
              }}>
                Prompt-dependency is the natural result. Your child learned to wait for the adult cue because the internal cue never arrived. That's not a training failure. That's a nervous system using the only signal available, the one from outside.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: DESDEEP-5 — Border Play Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{
      height: 16, background: B.paper,
      borderLeft: "1px solid #C5D5C7", borderRight: "1px solid #C5D5C7",
      borderTop: "1px solid #C5D5C7", borderBottom: "1px solid #C5D5C7",
      borderRadius: 16, margin: "0 32px",
    }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: EDU-11 — Science Citation
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 24px", background: B.cream }}>
      <Eyebrow color="#9AA8A7">THE EVIDENCE</Eyebrow>

      {/* Citation card */}
      <div style={{
        background: B.cream, border: "1px solid #C5D5C7", borderRadius: 16,
        padding: "20px 22px", margin: "0 0 24px",
      }}>
        <div style={{
          border: "1px solid #C5D5C7", borderRadius: 12, padding: "16px 18px",
        }}>
          <p style={{
            fontFamily: F.main, fontSize: 15, lineHeight: 1.5, color: B.ink,
            margin: "0 0 6px", fontWeight: 700,
          }}>
            Nicholson et al. (2019)
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.soft,
            margin: "0 0 10px",
          }}>
            Journal of Autism and Developmental Disorders, 49(9):3625-3637
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: "#9AA8A7",
            margin: 0, fontStyle: "italic",
          }}>
            Landmark study: Diminished body awareness in children with ASD
          </p>
        </div>
      </div>

      {/* Pull quote */}
      <p style={{
        fontFamily: F.display, fontSize: 20, lineHeight: 1.4, color: B.ink,
        margin: "0 0 24px", fontStyle: "italic",
      }}>
        "His brain never received the message. Every method that assumes the signal exists builds on a foundation that isn't there."
      </p>

      {/* Brain-Bladder Diagram SVG */}
      <div style={{
        background: "#FBF7F1", border: "1px solid #C5D5C7", borderRadius: 16,
        padding: "24px 16px", textAlign: "center", margin: "0 0 8px",
      }}>
        <svg width="340" height="120" viewBox="0 0 340 120">
          <ellipse cx="70" cy="60" rx="45" ry="35" fill="#C5D5C7" stroke="#9AA8A7" strokeWidth="1.5" />
          <text x="70" y="56" textAnchor="middle" fontSize="11" fill="#4A6568" fontFamily={F.main}>Brain</text>
          <text x="70" y="70" textAnchor="middle" fontSize="9" fill="#9AA8A7" fontFamily={F.main}>(receives)</text>
          <line x1="118" y1="60" x2="155" y2="60" stroke="#9AA8A7" strokeWidth="1.5" strokeDasharray="4,4" />
          <line x1="185" y1="60" x2="222" y2="60" stroke="#9AA8A7" strokeWidth="1.5" strokeDasharray="4,4" />
          <rect x="155" y="42" width="30" height="36" rx="4" fill="#FBF7F1" stroke="#9AA8A7" strokeWidth="1" strokeDasharray="3,3" />
          <text x="170" y="56" textAnchor="middle" fontSize="8" fill="#9AA8A7" fontFamily={F.main}>GAP</text>
          <text x="170" y="68" textAnchor="middle" fontSize="14" fill="#9AA8A7">⚡</text>
          <ellipse cx="270" cy="60" rx="45" ry="35" fill="#C5D5C7" stroke="#9AA8A7" strokeWidth="1.5" />
          <text x="270" y="56" textAnchor="middle" fontSize="11" fill="#4A6568" fontFamily={F.main}>Bladder</text>
          <text x="270" y="70" textAnchor="middle" fontSize="9" fill="#9AA8A7" fontFamily={F.main}>(sends)</text>
        </svg>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: DESDEEP-5 — Border Play Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{
      height: 16, background: B.paper,
      borderLeft: "1px solid #C5D5C7", borderRight: "1px solid #C5D5C7",
      borderTop: "1px solid #C5D5C7", borderBottom: "1px solid #C5D5C7",
      borderRadius: 16, margin: "0 32px",
    }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SP-05 — Testimonial
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 24px", background: B.cream }}>
      <div style={{
        background: B.cream, border: "1px solid #C5D5C7", borderRadius: 16,
        padding: "24px 22px", borderLeft: "3px solid #C5D5C7",
        boxShadow: "6px 6px 0 #F6F2EA",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
          margin: "0 0 14px",
        }}>
          "We'd tried everything from the BCBA's protocol to OT sensory work to social stories. After 6 weeks in the underwear, he initiated once. Once! After 4 years of nothing."
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: "#9AA8A7",
          margin: 0, fontStyle: "italic",
        }}>
          — L2 mom, son 5, verbal
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: DESDEEP-5 — Border Play Divider
       ══════════════════════════════════════════════════════ */}
    <div style={{
      height: 16, background: B.paper,
      borderLeft: "1px solid #C5D5C7", borderRight: "1px solid #C5D5C7",
      borderTop: "1px solid #C5D5C7", borderBottom: "1px solid #C5D5C7",
      borderRadius: 16, margin: "0 32px",
    }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: PRODUCT + TIMELINE
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 24px", background: B.cream }}>
      <Eyebrow color="#9AA8A7">THE MISSING PIECE</Eyebrow>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
        margin: "0 0 14px",
      }}>
        The body-signal underwear fills the gap that behavioral methods can't reach. It creates a gentle sensation that lasts, 30–60 seconds of feedback, that gives the brain the information it's been missing. Not a replacement for your BCBA's work. The sensory layer added on top of the behavioral foundation.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
        margin: "0 0 14px",
      }}>
        Here's what I can honestly tell you from working with hundreds of L2 families: Some children show their first independent signal in 4–8 weeks. A pause. A look down. A step toward the bathroom without being prompted. Others take 12 weeks or longer. Progress isn't linear—three steps forward, one step back is the actual pattern.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
        margin: "0 0 20px",
      }}>
        That regression you've seen before isn't starting over. The neural pathways you've built are still there. The nervous system is recalibrating.
      </p>

      {/* Recalibration pull quote */}
      <div style={{
        background: B.cream, border: "1px solid #C5D5C7", borderRadius: 16,
        padding: "20px 22px", marginBottom: 0,
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 18, lineHeight: 1.4, color: B.ink,
          margin: 0, fontStyle: "italic",
        }}>
          "The regression you've seen before isn't starting over. The neural pathways you've built are still there. The nervous system is recalibrating."
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       40px breathing room
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 40, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 11: TRUST-2 — Guarantee Detail Cards
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px", background: B.paper }}>
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            {/* Card 1: TRY IT */}
            <td style={{ width: "48%", verticalAlign: "top", paddingRight: 8 }}>
              <div style={{
                background: B.cream, border: "1px solid #C5D5C7", borderRadius: 16,
                padding: "22px 20px",
              }}>
                <p style={{
                  fontFamily: F.main, fontSize: 18, lineHeight: 1.3, color: B.ink,
                  margin: "0 0 4px", fontWeight: 700,
                }}>TRY IT</p>
                <p style={{
                  fontFamily: F.main, fontSize: 14, lineHeight: 1.4, color: "#9AA8A7",
                  margin: "0 0 14px", fontStyle: "italic",
                }}>for 60 days</p>
                <p style={{
                  fontFamily: F.main, fontSize: 15, lineHeight: 1.6, color: B.soft,
                  margin: 0,
                }}>
                  If your child shows any sign of emerging body awareness—any pause, any glance, any step that wasn't prompted—you'll know the signal is reaching his brain.
                </p>
              </div>
            </td>

            {/* Spacer */}
            <td style={{ width: "4%" }}>&nbsp;</td>

            {/* Card 2: IF NOTHING CHANGES */}
            <td style={{ width: "48%", verticalAlign: "top", paddingLeft: 8 }}>
              <div style={{
                background: B.cream, border: "1px solid #C5D5C7", borderRadius: 16,
                padding: "22px 20px",
              }}>
                <p style={{
                  fontFamily: F.main, fontSize: 18, lineHeight: 1.3, color: B.ink,
                  margin: "0 0 14px", fontWeight: 700,
                }}>IF NOTHING CHANGES</p>
                <p style={{
                  fontFamily: F.main, fontSize: 15, lineHeight: 1.6, color: B.soft,
                  margin: "0 0 14px",
                }}>
                  Full refund. No questions. No hoops. No "you didn't try hard enough."
                </p>
                <p style={{
                  fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
                  margin: 0, fontWeight: 700,
                }}>
                  YOUR JUDGMENT.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ══════════════════════════════════════════════════════
       40px breathing room
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 40, background: B.paper }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 12: PERMISSION-NOT-TO-BUY + CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px 40px", background: B.paper }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
        margin: "0 0 14px",
      }}>
        And if reading this feels like one more thing to add to an already full plate, that's a real response. The product will be here next month. So will I. Your BCBA relationship took years to build. Trusting a new approach takes time too.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.soft,
        margin: "0 0 20px",
      }}>
        This isn't another method. It's the missing piece the methods couldn't provide.
      </p>

      {/* CTA button — muted green */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <a href="#" style={{
          display: "inline-block", padding: "17px 28px",
          background: "rgba(43,174,180,0.7)", color: "#FFFFFF",
          fontSize: 15, fontWeight: 700, textDecoration: "none",
          borderRadius: 999, letterSpacing: 0.3,
          fontFamily: F.main,
        }}>
          When you're ready →
        </a>
      </div>

      {/* P.S. */}
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: "#9AA8A7",
        margin: 0, fontStyle: "italic",
      }}>
        P.S. If you want to discuss this with your BCBA, I've put together a one-page clinical summary you can share. Just reply and I'll send it over.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       Easter Egg — Open Door Bridge
       ══════════════════════════════════════════════════════ */}
    <div style={{ textAlign: "center", padding: "6px 0", background: B.paper }}>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ opacity: 0.3 }}>
        <path d="M3,9 L15,9 M9,3 L9,15" stroke="#DBFFCD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: TONAL SHIFT RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E8DED5" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 14: SIGNOFF — Lena (CLINICAL variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 20,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden", border: `1.5px solid ${B.ink}`,
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
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              When you're ready.
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
            }}>
              Lena
            </div>
          </div>
        </div>

        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          If you want to discuss this with your BCBA, I've put together a one-page clinical summary you can share. Just reply and I'll send it over.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: FOOTER
       ══════════════════════════════════════════════════════ */}
    <OutLine />
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_pped_22_e1_l2 });
