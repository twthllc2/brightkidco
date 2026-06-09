/* PP-Extended Education — E5 (Day 50) | L2 Lisa
   Wireframe: wireframes/pp-extended-ed/pped-22-e5-l2.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e5-l2
   Generated: 2026-06-09
*/

const Email_pp_extended_ed_22_e5_l2 = () => (
  <EmailShell preheader="Your BCBA built the foundation. This email adds the troubleshooting layer for when progress stalls." bg="#FAF9F7">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo Centered
       ══════════════════════════════════════════════════════ */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-2 — Data Shock
       Badge: Mint #DBFFCD capsule, "PLATEAU TROUBLESHOOTING"
       Headline: "The plateau is not a failure, it's a recalibration"
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 20px 0" }}>
      {/* Badge */}
      <div style={{ marginBottom: 18 }}>
        <span style={{
          display: "inline-block",
          background: "#DBFFCD",
          padding: "7px 16px",
          borderRadius: 999,
          fontFamily: F.main,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: B.ink,
        }}>
          PLATEAU TROUBLESHOOTING
        </span>
      </div>
      {/* Headline */}
      <h1 style={{
        fontFamily: F.main,
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 1.35,
        color: B.ink,
        margin: "0 0 32px",
        letterSpacing: -0.3,
      }}>
        The plateau is not a failure,<br />
        it's a recalibration
      </h1>
      {/* Subtext */}
      <p style={{
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.6,
        color: B.soft,
        margin: "0 0 32px",
      }}>
        Your BCBA built the foundation. This email adds the troubleshooting
        layer for when progress stalls.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: BRAIN ROAD ILLUSTRATION (Custom Contraption)
       Neural Pathway Metaphor — 600x200, rounded 20px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 20px 32px" }}>
      <ImgFrame
        height={200}
        radius={20}
        label="THE BRAIN ROAD · NEURAL PATHWAY ILLUSTRATION"
        sublabel="First Signal → Plateau Transfer Station → Automatic Response · Earthy tones, ochre path, sage terrain, muted sky · 600×200px"
      />
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: LETTER-09 — RECOGNITION HOOK
       Background: B.cream, rounded 16px, padding 32px
       "And then it stopped." in 600 weight for emotional anchor
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: B.cream,
        borderRadius: 16,
        padding: 32,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          You've been doing this for seven weeks now. Maybe eight.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          Your son sits when prompted. He knows the routine. You've seen
          glimmers, a pause here, a look down there, maybe even one or two
          first-of-their-kind walks to the bathroom. The BCBA protocol gave
          you the structure. The Body-Signal Learning Layer gave you the
          sensory bridge. You had a system that was actually working.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 20, fontWeight: 600,
          lineHeight: 1.4, color: B.ink, margin: "0 0 14px",
        }}>
          And then it stopped.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          Not regression, not back to square one. Just... no forward movement.
          The same pattern every day: prompt → sit → stand → accident an hour
          later → clean up → repeat. No new awareness. No growth. Like walking
          through a hallway that dead-ends at the same wall every time.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 600,
          lineHeight: 1.6, color: B.ink, margin: 0,
        }}>
          I hear this from parents constantly. Not because you're doing
          something wrong. Because this plateau is actually a predictable
          phase, and recognizing it is the first step through it.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: NEUROLOGICAL REFRAME
       Background: B.cream, rounded 16px, padding 22px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: B.cream,
        borderRadius: 16,
        padding: 22,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 600,
          lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
        }}>
          Here's what's happening neurologically.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          When your child first started wearing the BSL underwear, his brain
          received sustained sensory feedback — a brand-new input for a nervous
          system with diminished signal accuracy.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          Weeks 1-6 are about initial signal registration. The brain says:
          <em> that sensation is new, and it seems connected to something that
          just happened.</em>
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          Weeks 7-10, where you are now, are different. The novelty has worn
          off. The neural pathway has been laid down but isn't automatic yet.
          Your child's nervous system is in a <em>consolidation phase</em> —
          it has the information, but hasn't hardwired the response. This isn't
          a stall. It's the brain <em>building deep infrastructure</em> for
          long-term integration.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          Think of it like learning a new driving route. The first time you're
          hyper-aware of every turn. By week 3, you need the GPS less. By week
          8, you take it without thinking.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 600,
          lineHeight: 1.6, color: B.ink, margin: 0,
        }}>
          Your son is in that middle stretch. The path is being built.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: EDU-2 — THREE PLATEAUS (Step Cards)
       Section heading + 3 troubleshooting cards
       Cards: white bg, border 1px solid #E8E0D4, rounded 8px, padding 16px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: "#FFFFFF",
        borderRadius: 16,
        padding: 22,
      }}>
        {/* Section heading */}
        <h2 style={{
          fontFamily: F.main, fontSize: 22, fontWeight: 700,
          lineHeight: 1.3, color: B.ink, margin: "0 0 6px",
          letterSpacing: -0.3,
        }}>
          The Three Most Common Plateaus
        </h2>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 22px",
        }}>
          — And How to Navigate Each
        </p>

        {/* CARD 1: Prompt-Dependency Persists */}
        <div style={{
          background: "#FFFFFF",
          border: "1px solid #E8E0D4",
          borderRadius: 8,
          padding: 16,
          marginBottom: 12,
        }}>
          <h3 style={{
            fontFamily: F.main, fontSize: 18, fontWeight: 600,
            lineHeight: 1.3, color: B.ink, margin: "0 0 10px",
          }}>
            Plateau 1: Prompt-Dependency Persists
          </h3>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 12px",
          }}>
            He still won't initiate. You prompt, he sits, he gets up,
            nothing happens.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            <em>Why:</em> Prompt-dependency is the natural result of years of
            scheduled sits where the adult cue was the trigger, not the internal
            signal. The BCBA protocol built compliance; now we need to transfer
            that to self-awareness.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            <em>What to try:</em>
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
          }}>
            — Fade the prompt. Instead of "Time to sit," try a non-verbal cue,
            touch his shoulder, set a timer that beeps, or leave the bathroom
            door ajar with the light on. Let the environment cue him, not your
            voice.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
          }}>
            — Extend the window between prompt and sit by 30 seconds. Give his
            nervous system time to register the BSL signal before you give the
            instruction.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            — Celebrate the pause. If he stops mid-play, even for a second,
            that's the internal signal arriving. Name it: "You felt something."
            The word builds the cognitive bridge.
          </p>
        </div>

        {/* CARD 2: Sensory Habituation */}
        <div style={{
          background: "#FFFFFF",
          border: "1px solid #E8E0D4",
          borderRadius: 8,
          padding: 16,
          marginBottom: 12,
        }}>
          <h3 style={{
            fontFamily: F.main, fontSize: 18, fontWeight: 600,
            lineHeight: 1.3, color: B.ink, margin: "0 0 10px",
          }}>
            Plateau 2: Sensory Habituation
          </h3>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 12px",
          }}>
            The first few weeks, he seemed to notice the wetness signal.
            Now he doesn't react at all. It's like the underwear is
            background noise.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            <em>Why this happens:</em> This actually a good sign in disguise.
            Initial signal sensitivity is high because the sensation is new.
            After several weeks, his nervous system starts to calibrate,
            distinguishing between "this wet" (sensory detection) and "I need
            to act on this" (motor response). The habituation means his brain
            is processing the signal faster, but the output pathway isn't
            built yet.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            <em>What to try:</em>
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
          }}>
            — Increase wear time. If he's wearing BSL for 3-4 hour stretches,
            try 5-6 hours. The sustained signal over longer windows gives the
            brain more data points.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
          }}>
            — Layering check: make sure nothing between the BSL layer and his
            skin (no cotton liner, no other underwear). The signal needs direct
            skin contact.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            — Add a post-accident ritual. When an accident happens (and it
            will), don't rush to clean. Instead: pause for 5 seconds, say
            "Your body let you know something," then clean together. This
            5-second window is where the neural connection forms.
          </p>
        </div>

        {/* CARD 3: Environment-Specific Regression */}
        <div style={{
          background: "#FFFFFF",
          border: "1px solid #E8E0D4",
          borderRadius: 8,
          padding: 16,
        }}>
          <h3 style={{
            fontFamily: F.main, fontSize: 18, fontWeight: 600,
            lineHeight: 1.3, color: B.ink, margin: "0 0 10px",
          }}>
            Plateau 3: Environment-Specific Regression
          </h3>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 12px",
          }}>
            He does well at home but has accidents everywhere else, school,
            grandma's, the store. You feel like you're starting over every
            time you leave the house.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            <em>Why this happens:</em> Environment sensitivity is real and
            well-documented. The bathroom at school smells different, has
            different lighting, and echoes. The adult cue doesn't exist there.
            The schedule is different. His nervous system has to learn the same
            body-signal awareness in a new context — it's not regression, it's
            generalization.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            <em>What to try:</em>
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
          }}>
            — Send a familiar BSL pair to school with a note for the teacher:
            "These help my child feel when he needs to go. If he pauses or
            touches his pants, please offer the bathroom."
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
          }}>
            — Practice one new environment per week. Same routine, different
            room. Living room → kitchen → backyard → playground. Each context
            is a separate learning curve.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            — Lower expectations for outings. The goal outside the home is not
            dry, it's awareness. If he pauses once during a 2-hour trip,
            that's a win.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SIGNAL-TIMING DIAGRAM (Custom Illustration)
       + Easter Egg: Unresolved Equation
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 20px" }}>
      <ImgFrame
        height={160}
        radius={20}
        label="SIGNAL-TIMING DIAGRAM"
        sublabel="Body Event → Signal Travel → Awareness Threshold → Response · BSL Window highlighted · 600×160px"
      />
      {/* Easter Egg: Unresolved Equation */}
      <div style={{
        marginTop: 12,
        padding: "8px 4px",
        textAlign: "right",
      }}>
        <span style={{
          fontFamily: "Georgia, serif",
          fontSize: 11,
          fontStyle: "italic",
          color: "#A09888",
          opacity: 0.6,
          letterSpacing: 0.3,
        }}>
          ∂I/∂t = ∫S(t) dt · η + ε(t) ...continued →
        </span>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: VALIDATION + CTA FRAME
       Background: B.cream, rounded 16px, padding 22px
       Checklist + CTA button + permission text
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: B.cream,
        borderRadius: 16,
        padding: 22,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
        }}>
          Your BCBA built the structure. The Body-Signal approach built the
          bridge. This plateau is where those two systems learn to talk to
          each other.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.ink, fontStyle: "italic",
          margin: "0 0 18px",
        }}>
          It's not a wall. It's a transfer station.
        </p>

        {/* Awareness Signs Checklist */}
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 600,
          lineHeight: 1.6, color: B.ink, margin: "0 0 10px",
        }}>
          Awareness signs checklist:
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
        }}>
          <span style={{ color: B.green, fontWeight: 700, marginRight: 6 }}>✓</span>
          A pause (even one)
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
        }}>
          <span style={{ color: B.green, fontWeight: 700, marginRight: 6 }}>✓</span>
          A look down at wet clothing
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 6px",
        }}>
          <span style={{ color: B.green, fontWeight: 700, marginRight: 6 }}>✓</span>
          A touch to the underwear
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 18px",
        }}>
          <span style={{ color: B.green, fontWeight: 700, marginRight: 6 }}>✓</span>
          A hesitation before an accident
        </p>

        {/* Mechanism working statement */}
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 600,
          lineHeight: 1.6, color: B.ink, margin: "0 0 22px",
        }}>
          If you've seen one of these, the mechanism is working.
        </p>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <a href="#" style={{
            display: "inline-block",
            padding: "14px 32px",
            background: "#039902",
            color: "#FFFFFF",
            fontFamily: F.main,
            fontSize: 16,
            fontWeight: 700,
            textDecoration: "none",
            borderRadius: 999,
            letterSpacing: 0.3,
            minHeight: 44,
            lineHeight: "44px",
            textAlign: "center",
          }}>
            Ask Lena a question, I read every response →
          </a>
        </div>

        {/* Permission text */}
        <p style={{
          fontFamily: F.main, fontSize: 15, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: 0,
        }}>
          If you haven't seen any, reply to this email. We'll troubleshoot
          together.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: TRUST-2 — GUARANTEE DETAIL CARDS
       Background: #FFFFFF, rounded 16px, padding 22px
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 20px" }}>
      <div style={{
        background: "#FFFFFF",
        borderRadius: 16,
        padding: 22,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
        }}>
          The <strong>60-day guarantee</strong> covers this exact scenario.
        </p>

        {/* Guarantee Item 1 */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          marginBottom: 10,
        }}>
          <span style={{ color: B.green, fontWeight: 700, fontSize: 16, lineHeight: 1.6 }}>✓</span>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            Full refund if no shift in 60 days
          </p>
        </div>

        {/* Guarantee Item 2 */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          marginBottom: 10,
        }}>
          <span style={{ color: B.green, fontWeight: 700, fontSize: 16, lineHeight: 1.6 }}>✓</span>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            No forms, no hoops
          </p>
        </div>

        {/* Guarantee Item 3 */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}>
          <span style={{ color: B.green, fontWeight: 700, fontSize: 16, lineHeight: 1.6 }}>✓</span>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            Reply to this email for support
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: SIGNOFF — Lena Medium
       Dark card #1F2A2C on cream bg
       Two P.S. lines (P.S. + P.P.S.) — L2-specific
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px 0" }}>
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

        {/* Avatar + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${B.tealDeep} 0%, ${B.teal} 100%)`,
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", border: `1.5px solid ${B.ink}`,
            }}>
              <img
                src="../../raw/avatars/lena-portrait.jpg"
                alt="Lena, Customer Support at BrightKidCo"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>A note from</div>
            <div style={{
              fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2,
            }}>Lena</div>
            <div style={{
              fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic",
            }}>Customer Support · Mom of two autistic sons</div>
          </div>
        </div>

        {/* Dashed separator + message */}
        <div style={{
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          paddingTop: 16, paddingBottom: 16, marginBottom: 16,
        }}>
          <p style={{
            fontFamily: F.main, fontSize: 15, lineHeight: 1.65,
            color: "#B8CACD", margin: 0,
          }}>
            My son was 8 before he trained. Somewhere around week 8, I nearly
            quit. Then he paused. Just once. But that never happened before.
            What you're feeling right now, the "it's not working" doubt, I
            felt it too.
          </p>
        </div>

        {/* Signature */}
        <div style={{ marginBottom: 16 }}>
          <p style={{
            fontFamily: F.main, fontSize: 15, lineHeight: 1.65,
            color: "#B8CACD", margin: "0 0 6px",
          }}>
            With understanding,
          </p>
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 42, lineHeight: 0.95, fontWeight: 500,
            color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
          }}>
            Lena
          </div>
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ display: "block", opacity: 0.55, marginTop: -8 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic",
          marginBottom: 12,
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          The BSL layer is still doing its job. Give his nervous system two
          more weeks. Then judge.
        </div>

        {/* P.P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.P.S.
          </span>
          If you want to dig deeper into the Nicholson study or the
          Barmpagiannis & Baldimtsi 2025 meta-analysis that confirms body
          signal differences across 49 studies, <a href="#" style={{ color: "#D8F57C", textDecoration: "underline" }}>read it here</a>.
          No pressure, just the science.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: FOOTER
       ══════════════════════════════════════════════════════ */}
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_pp_extended_ed_22_e5_l2 });
