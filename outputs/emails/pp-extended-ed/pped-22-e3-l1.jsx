/* PP-Extended Education — E3 | Level 1 (Sarah)
   Wireframe: wireframes/pp-extended-ed/pped-22-e3-l1.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e3-l1
   Generated: 2026-06-09
*/

const Email_pped_22_e3_l1 = () => {
  const B = window.BRAND;
  const F = window.FONT;

  /* ── Thin divider 1px #E0E8E9 ── */
  const ThinDivider = () => (
    <div style={{ padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E0E8E9" }} />
    </div>
  );

  /* ── Sign icon — teal circle with emoji ── */
  const SignIcon = ({ emoji }) => (
    <div style={{
      width: 24, height: 24, borderRadius: "50%",
      background: B.teal, border: `1.5px solid ${B.ink}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, fontSize: 12, lineHeight: 1,
    }}>
      {emoji}
    </div>
  );

  /* ── Sticker card wrapper for sign cards ── */
  const StickerCard = ({ children }) => (
    <div style={{
      background: B.paper,
      border: `2px solid ${B.ink}`,
      borderRadius: 18,
      boxShadow: `4px 4px 0 ${B.ink}`,
      padding: "24px 24px",
      margin: "0 24px",
    }}>
      {children}
    </div>
  );

  return (
    <EmailShell preheader="Three small signs that mean the signal is finally getting through." bg={B.paper}>

      {/* ══════════════════════════════════════════════════════
         SECTION 1: HEADER — Brand Wordmark (centered)
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.paper, padding: "48px 24px 24px", textAlign: "center" }}>
        <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 2: HERO — HERO-19 Timeline Shock
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FFFBF0", padding: "0 24px 24px" }}>
        {/* Hero image */}
        <div style={{ marginBottom: 20 }}>
          <ImgFrame
            height={200}
            radius={16}
            label="HERO · PRODUCT FLAT-LAY"
            sublabel="Training pant flat-lay or child in BKC undies, warm natural light"
          />
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 22, lineHeight: 1.3, fontWeight: 400,
          color: B.ink, margin: "0 0 12px", textAlign: "center",
          fontFamily: F.main,
        }}>
          Pre-K readiness is building,<br />
          here's what to look for<br />
          this month
        </h1>

        {/* Subhead — italic */}
        <p style={{
          fontSize: 16, lineHeight: 1.5, color: B.soft,
          fontStyle: "italic", margin: 0, textAlign: "center",
          fontFamily: F.main,
        }}>
          Three small signs that mean<br />
          the signal is getting through
        </p>
      </div>

      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 3: LETTER OPENING — LETTER-01 Paragraph Stack
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "24px 24px" }}>
        {/* Drop-cap "Y" + greeting */}
        <div style={{ marginBottom: 14 }}>
          <span style={{
            fontFamily: F.display, fontSize: 48, fontWeight: 700,
            color: B.teal, lineHeight: 0.9, float: "left",
            marginRight: 8, marginTop: 4,
          }}>Y</span>
          <span style={{
            fontSize: 16, lineHeight: 1.6, color: B.ink,
            fontFamily: F.main,
          }}>ou're coming up on a month of using the Body-Signal Learning Layer.</span>
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", clear: "both", fontFamily: F.main,
        }}>
          Hey,
        </p>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          If you're thinking &ldquo;I'm not sure anything's changing&rdquo;, I hear you. Some shifts happen fast. Others move at a pace so slow you almost miss them.
        </p>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontFamily: F.main,
        }}>
          But here's what I want you to watch for in weeks 5 through 8. These are the first signs that your child's nervous system is shifting from <em>reactive</em>, only noticing after the accident, to <em>proactive</em>, starting to catch the signal before it's too late.
        </p>
      </div>

      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 4: SIGN #1 — The Pause (Sticker Card)
         ══════════════════════════════════════════════════════ */}
      <StickerCard>
        {/* Eyebrow + Icon + Sign Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <SignIcon emoji="⏸" />
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
              color: B.tealDeep, fontWeight: 700, marginBottom: 2,
              fontFamily: F.main,
            }}>
              Sign #1
            </div>
            <div style={{
              fontSize: 18, fontWeight: 700, color: B.ink,
              fontFamily: F.main,
            }}>
              The Pause
            </div>
          </div>
        </div>

        {/* Body copy */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          He's mid-play, running trucks across the rug. Then he stops. Looks down. Resumes.
        </p>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          <strong>That pause didn't mean nothing.</strong> That pause means his brain registered <em>something</em>. It's the interoception pathway starting to fire, the signal-timing gap narrowing by milliseconds he can't describe but his body is beginning to feel.
        </p>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontFamily: F.main,
        }}>
          When you see the pause, don't prompt. Don't ask &ldquo;do you need to go?&rdquo; Just notice. He'll make the connection.
        </p>
      </StickerCard>

      <div style={{ height: 24 }} />
      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 5: SIGN #2 — The Hand-to-Waist (Sticker Card)
         ══════════════════════════════════════════════════════ */}
      <StickerCard>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <SignIcon emoji="✋" />
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
              color: B.tealDeep, fontWeight: 700, marginBottom: 2,
              fontFamily: F.main,
            }}>
              Sign #2
            </div>
            <div style={{
              fontSize: 18, fontWeight: 700, color: B.ink,
              fontFamily: F.main,
            }}>
              The Hand-to-Waist
            </div>
          </div>
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          He touches his waistband. Pulls at the front. Shifts his weight.
        </p>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontFamily: F.main,
        }}>
          These aren't random movements. They're his body's way of saying &ldquo;something's different down there.&rdquo; Three weeks ago he felt nothing until it was too late. Now there's a window, even if he doesn't yet know what to do with it.
        </p>
      </StickerCard>

      <div style={{ height: 24 }} />
      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 6: SIGN #3 — The Late Announcement (Sticker Card)
         ══════════════════════════════════════════════════════ */}
      <StickerCard>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <SignIcon emoji="🗣" />
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
              color: B.tealDeep, fontWeight: 700, marginBottom: 2,
              fontFamily: F.main,
            }}>
              Sign #3
            </div>
            <div style={{
              fontSize: 18, fontWeight: 700, color: B.ink,
              fontFamily: F.main,
            }}>
              The Late Announcement
            </div>
          </div>
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          He says &ldquo;I need to pee&rdquo;, but he's already wet.
        </p>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontFamily: F.main,
        }}>
          <strong>I know this one feels like failure. It's not.</strong> It's progress. On D22 he couldn't feel anything. Now he's feeling it, just a few seconds too late. That's the gap closing. The signal is reaching his brain. The only thing missing is a few more seconds.
        </p>
      </StickerCard>

      <div style={{ height: 24 }} />
      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 7: MECHANISM REINFORCEMENT — EDU-10 How It Works
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.paper, padding: "24px 24px" }}>
        {/* Section header */}
        <h2 style={{
          fontSize: 18, fontWeight: 700, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          The sensory pathway is being built
        </h2>

        {/* Body text */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 16px", fontFamily: F.main,
        }}>
          Most of the L1 parents I talk to hit this phase between weeks 5 and 7. The mechanism works by gently training the sensory pathway: the cotton inner layer creates a sustained signal, 30–60 seconds of feedback, that gives the brain time to register: <em>something happened.</em> Over weeks, the brain learns to anticipate that signal before it arrives.
        </p>

        {/* Mechanism card */}
        <div style={{
          background: B.cream, borderRadius: 8,
          padding: 16,
        }}>
          {/* Step 1 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: B.teal, color: B.paper,
              fontSize: 11, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontFamily: F.main,
            }}>1</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, fontFamily: F.main }}>Sensation</div>
              <div style={{ fontSize: 14, color: B.soft, fontFamily: F.main }}>30-60 second gentle feedback</div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: B.teal, color: B.paper,
              fontSize: 11, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontFamily: F.main,
            }}>2</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, fontFamily: F.main }}>Registration</div>
              <div style={{ fontSize: 14, color: B.soft, fontFamily: F.main }}>Brain registers: something happened</div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: B.teal, color: B.paper,
              fontSize: 11, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontFamily: F.main,
            }}>3</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, fontFamily: F.main }}>Anticipation</div>
              <div style={{ fontSize: 14, color: B.soft, fontFamily: F.main }}>Brain learns to predict the signal</div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 0 }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: B.green, color: B.paper,
              fontSize: 11, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontFamily: F.main,
            }}>4</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, fontFamily: F.main }}>Action</div>
              <div style={{ fontSize: 14, color: B.soft, fontFamily: F.main }}>Child acts before the accident</div>
            </div>
          </div>
        </div>
      </div>

      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 8: PRE-K ANCHOR — LETTER-01 Paragraph Stack
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "24px 24px" }}>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontFamily: F.main,
        }}>
          Pre-K is still [X months] away. You're building something that can't be rushed: an internal awareness that will serve him long after the underwear comes off.
        </p>
      </div>

      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 9: CONSISTENCY CALL — LETTER-01 + Pull-Quote
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.paper, padding: "24px 24px" }}>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 16px", fontFamily: F.main,
        }}>
          Keep the BKC undies in the daily rotation. 3+ hours a day, every day. Consistency builds the pathway. And when you see any of these three signs, pause, touch, late announcement, know that the system is working.
        </p>

        {/* Pull-quote — Fraunces italic with teal left border */}
        <div style={{
          borderLeft: `3px solid ${B.teal}`,
          paddingLeft: 16, margin: 0,
        }}>
          <p style={{
            fontFamily: F.display, fontSize: 20, lineHeight: 1.4,
            fontStyle: "italic", fontWeight: 400, color: B.teal,
            margin: 0,
          }}>
            It's not linear. But it's real.
          </p>
        </div>
      </div>

      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 10: PARENT QUOTE — SP-06 Testimonial
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "24px 24px" }}>
        <div style={{
          borderLeft: `3px solid ${B.green}`,
          paddingLeft: 16,
        }}>
          {/* Quote text */}
          <p style={{
            fontFamily: F.display, fontSize: 20, lineHeight: 1.4,
            fontStyle: "italic", color: B.ink,
            margin: "0 0 12px",
          }}>
            &ldquo;He paused. Stood up. Walked halfway to the bathroom. Then had an accident in the hallway. But he WALKED. That never happened before.&rdquo;
          </p>

          {/* Attribution */}
          <p style={{
            fontSize: 13, color: B.muted, margin: 0,
            fontFamily: F.main,
          }}>
            — L1 Mom
          </p>
        </div>
      </div>

      <ThinDivider />

      {/* ══════════════════════════════════════════════════════
         SECTION 11: CTA SECTION — CTA-6 Social CTA
         ══════════════════════════════════════════════════════ */}
      <div style={{
        background: B.ink, padding: "30px 24px",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#FFFFFF",
          margin: "0 0 24px", fontFamily: F.main,
        }}>
          You're in the phase that looks like nothing, and everything is shifting.
        </p>

        <a href="#" style={{
          display: "inline-block",
          padding: "16px 32px",
          background: "#D8F57C",
          color: B.ink,
          fontSize: 14, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.1em",
          textDecoration: "none", borderRadius: 999,
          fontFamily: F.main,
        }}>
          TRUST THE PAUSE
        </a>
      </div>

      <div style={{ height: 1 }} />

      {/* ══════════════════════════════════════════════════════
         SECTION 12: LENA SIGN-OFF — UTIL-05 MEDIUM variant
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.ink, padding: "0 24px 36px" }}>
        <div style={{
          position: "relative",
          background: "#1F2A2C",
          border: "1.5px solid #2F3D40",
          borderRadius: 22,
          padding: "26px 24px 24px",
          overflow: "hidden",
        }}>
          {/* Top gradient accent */}
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
                </svg>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
                color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
                fontFamily: F.main,
              }}>
                A note from
              </div>
              <div style={{
                fontSize: 17, fontWeight: 700, color: "#FFFFFF",
                lineHeight: 1.2, fontFamily: F.main,
              }}>
                Lena
              </div>
              <div style={{
                fontSize: 12, color: "#8FAFB2", marginTop: 2,
                fontStyle: "italic", fontFamily: F.main,
              }}>
                Customer Support · Mom of two autistic sons
              </div>
            </div>
          </div>

          {/* Dashed divider */}
          <div style={{ borderTop: "1.5px dashed #3A4547", paddingTop: 16, marginBottom: 16 }} />

          {/* Signoff text — "With understanding" */}
          <p style={{
            fontSize: 14, lineHeight: 1.7, color: "#B8CACD",
            margin: "0 0 10px", fontFamily: F.main,
          }}>
            With understanding,
          </p>

          {/* Signature — Caveat font */}
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 42, lineHeight: 0.95,
            fontWeight: 500, color: "#D8F57C",
            letterSpacing: -0.5, marginBottom: 16,
          }}>
            Lena ——
          </div>

          {/* Role text */}
          <p style={{
            fontSize: 13, lineHeight: 1.6, color: "#B8CACD",
            margin: "0 0 16px", fontFamily: F.main,
          }}>
            Customer Support · Mom of two autistic sons
          </p>

          {/* P.S. */}
          <div style={{
            fontSize: 14, lineHeight: 1.65, color: "#B8CACD",
            fontStyle: "italic",
          }}>
            <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
              P.S.
            </span>
            One L1 mom told me last week: &ldquo;He paused. Stood up. Walked halfway to the bathroom. Then had an accident in the hallway. But he WALKED. That never happened before.&rdquo; The late-walk counts. It's the signal finding its way.
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 13: FOOTER — UTIL-04
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.ink, padding: "24px 24px 16px", textAlign: "center" }}>
        <div style={{
          fontSize: 11, lineHeight: 1.3, color: B.muted,
          fontFamily: F.main, letterSpacing: 0.5,
        }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>BrightKidCo</div>
          <div style={{ marginBottom: 8 }}>123 Commerce Blvd, Suite 200, City, State ZIP</div>
          <div>
            No longer want these emails?{" "}
            <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>Unsubscribe</a>
            {" "}or{" "}
            <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>Manage Preferences</a>
          </div>
        </div>
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_pped_22_e3_l1 });
