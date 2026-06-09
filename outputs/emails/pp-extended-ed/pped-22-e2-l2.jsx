/* PP-Extended Education — E2 (Day 29) | L2 Lisa
   Wireframe: wireframes/pp-extended-ed/pped-22-e2-l2.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e2
   Generated: 2026-06-09
*/

const Email_pp_extended_ed_22_e2_l2 = () => (
  <EmailShell preheader="The landmark study that explains why your child's learning timeline looks different, and why that's exactly what you should expect." bg={B.cream}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo Centered
       ══════════════════════════════════════════════════════ */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: LETTER-01 — Opening + Validation
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          Lena from BrightKidCo here.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 14px",
        }}>
          You're 29 days in with the Body-Signal Learning Layer.
          Some days you see something, a pause, a look down, a hand
          on the waistband. Other days nothing.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.ink, margin: "0 0 14px",
        }}>
          You're tracking. You're documenting. And you're wondering:
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
          fontStyle: "italic",
        }}>
          Is this actually working? Am I just seeing what I want to see?
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: 0,
        }}>
          I want to walk you through the study that underpins everything
          BrightKidCo does, Nicholson et al. 2019. Not because you need
          a science lesson. Because when you understand exactly what's
          happening in your child's nervous system, the waiting makes
          sense. The timeline makes sense. And the small signals you're
          tracking become evidence, not wishful thinking.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: MECH-02 — Nicholson Study Deep Dive
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: "#FFFFFF", borderRadius: 16,
        boxShadow: `6px 6px 0 ${B.ink}`, padding: 32,
      }}>
        <h2 style={{
          fontFamily: F.main, fontSize: 26, fontWeight: 700,
          lineHeight: 1.2, letterSpacing: -0.3, color: B.ink,
          margin: "0 0 16px",
        }}>
          What Nicholson et al. 2019 Actually Found
        </h2>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 22px",
        }}>
          The study compared body awareness, the ability to sense internal
          body states, between autistic children and typically developing children.
        </p>

        {/* Experiment 2 Card — Children */}
        <div style={{
          background: B.cream, borderRadius: 12,
          boxShadow: `3px 3px 0 ${B.ink}`, padding: 22, marginBottom: 14,
        }}>
          <div style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 600,
            color: B.ink, marginBottom: 8, letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            EXPERIMENT 2 (CHILDREN)
          </div>
          <p style={{
            fontFamily: F.main, fontSize: 17, fontWeight: 400,
            lineHeight: 1.8, color: B.soft, margin: 0,
          }}>
            Autistic children showed significantly diminished body awareness.
            Moderate-to-large effect size — a measurable, statistically
            significant gap.
          </p>
        </div>

        {/* Experiment 1 Card — Adults */}
        <div style={{
          background: B.cream, borderRadius: 12,
          boxShadow: `3px 3px 0 ${B.ink}`, padding: 22, marginBottom: 14,
        }}>
          <div style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 600,
            color: B.ink, marginBottom: 8, letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            EXPERIMENT 1 (ADULTS)
          </div>
          <p style={{
            fontFamily: F.main, fontSize: 17, fontWeight: 400,
            lineHeight: 1.8, color: B.soft, margin: 0,
          }}>
            Autistic adults showed NO difference from non-autistic adults.
            The body signal gap was gone.
          </p>
        </div>

        {/* Pull-Quote — Mint */}
        <div style={{
          background: "#DBFFCD", borderRadius: 12, padding: 22, marginBottom: 14,
        }}>
          <p style={{
            fontFamily: F.main, fontSize: 18, fontWeight: 400,
            lineHeight: 1.7, color: B.ink, fontStyle: "italic", margin: 0,
          }}>
            — Early interoception difficulties are resolved or compensated
            for by adulthood in people with ASD.
          </p>
        </div>

        {/* Conclusion */}
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          The deficit is childhood-specific. It closes. Your child is not
          permanently disconnected from their body signals.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: 0,
        }}>
          The wiring is delayed, not absent.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: MECH-03 — Timeline + Neural Rewiring Table
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: B.cream, borderRadius: 16,
        boxShadow: `6px 6px 0 ${B.ink}`, padding: 32,
      }}>
        <h2 style={{
          fontFamily: F.main, fontSize: 26, fontWeight: 700,
          lineHeight: 1.2, letterSpacing: -0.3, color: B.ink,
          margin: "0 0 22px",
        }}>
          What This Means for Your Child's Learning Timeline
        </h2>

        {/* Point 1 */}
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          1. The current delay is developmental, not fixed.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 22px",
        }}>
          The neural pathways for body-signal awareness haven't fully formed
          yet. Nicholson's team proved this pathway does eventually develop,
          but it needs the right input during childhood.
        </p>

        {/* Point 2 */}
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          2. External feedback is the missing piece.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 22px",
        }}>
          If the internal signal isn't reaching the brain on time, an external
          signal can fill the gap. The BSL Layer provides that — a wet
          sensation from Layer 1, a sustained <span style={{ fontStyle: "italic" }}>30-60 second</span> sensation
          reinforcing the pathway each time.
        </p>

        {/* Point 3 */}
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          3. Weeks 4–8 are the neural-rewiring window.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 22px",
        }}>
          From the first day in BSL underwear, your child's brain begins
          receiving a signal it never got consistently before.
        </p>

        {/* Neural Rewiring Table */}
        <table style={{
          borderCollapse: "separate", borderSpacing: 0,
          borderRadius: 16, overflow: "hidden",
          boxShadow: `6px 6px 0 ${B.ink}`, width: "100%",
          marginBottom: 22,
        }}>
          <thead>
            <tr>
              <th style={{
                background: B.teal, color: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, fontWeight: 700,
                padding: "14px 16px", textAlign: "left",
                borderRight: "1px solid #2BAEB4",
              }}>WEEK RANGE</th>
              <th style={{
                background: B.teal, color: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, fontWeight: 700,
                padding: "14px 16px", textAlign: "left",
                borderRight: "1px solid #2BAEB4",
              }}>WHAT'S HAPPENING</th>
              <th style={{
                background: B.teal, color: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, fontWeight: 700,
                padding: "14px 16px", textAlign: "left",
              }}>WHAT YOU MIGHT SEE</th>
            </tr>
          </thead>
          <tbody>
            {/* Week 1-2 */}
            <tr>
              <td style={{
                background: "#FBF7F1",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
                borderBottom: "1px solid #E8E4DE",
                borderLeft: `3px solid ${B.teal}`,
              }}>Week 1-2</td>
              <td style={{
                background: "#FBF7F1",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
                borderBottom: "1px solid #E8E4DE",
              }}>Novel sensation — brain registers "something is different"</td>
              <td style={{
                background: "#FBF7F1",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderBottom: "1px solid #E8E4DE",
              }}>Possible refusal, curiosity, or ignoring</td>
            </tr>
            {/* Week 3-4 */}
            <tr>
              <td style={{
                background: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
                borderBottom: "1px solid #E8E4DE",
                borderLeft: `3px solid ${B.teal}`,
              }}>Week 3-4</td>
              <td style={{
                background: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
                borderBottom: "1px solid #E8E4DE",
              }}>Repetition — pathway begins forming</td>
              <td style={{
                background: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderBottom: "1px solid #E8E4DE",
              }}>Occasional pause after wetting</td>
            </tr>
            {/* Week 5-8 — HIGHLIGHTED */}
            <tr>
              <td style={{
                background: "#DBFFCD",
                fontFamily: F.main, fontSize: 15, color: B.ink, fontWeight: 600,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
                borderBottom: "1px solid #E8E4DE",
                borderLeft: `3px solid ${B.teal}`,
              }}>Week 5-8</td>
              <td style={{
                background: "#DBFFCD",
                fontFamily: F.main, fontSize: 15, color: B.ink, fontWeight: 600,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
                borderBottom: "1px solid #E8E4DE",
              }}>Consolidation — signal recognized more reliably</td>
              <td style={{
                background: "#DBFFCD",
                fontFamily: F.main, fontSize: 15, color: B.ink, fontWeight: 600,
                padding: "14px 16px", lineHeight: 1.6,
                borderBottom: "1px solid #E8E4DE",
              }}>Looking down, touching waistband</td>
            </tr>
            {/* Week 8-12 */}
            <tr>
              <td style={{
                background: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
                borderLeft: `3px solid ${B.teal}`,
              }}>Week 8-12</td>
              <td style={{
                background: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
                borderRight: "1px solid #E8E4DE",
              }}>Pathway strengthening</td>
              <td style={{
                background: "#FFFFFF",
                fontFamily: F.main, fontSize: 15, color: B.soft,
                padding: "14px 16px", lineHeight: 1.6,
              }}>Occasional successful redirection</td>
            </tr>
          </tbody>
        </table>

        {/* Point 4 */}
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          4. Prompt-dependency will fade as the internal signal grows.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: 0,
        }}>
          Your child currently goes only when prompted — that's not failure.
          That's exactly what interoception research predicts. Over time,
          the external prompt becomes less necessary as the internal signal
          gets stronger.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: BCBA BRIDGE — Partners, Not Competitors
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: "#FFFFFF", borderRadius: 16,
        boxShadow: `6px 6px 0 ${B.ink}`, padding: 32,
      }}>
        <h2 style={{
          fontFamily: F.main, fontSize: 26, fontWeight: 700,
          lineHeight: 1.2, letterSpacing: -0.3, color: B.ink,
          margin: "0 0 16px",
        }}>
          Your BCBA and the BSL Layer — Partners, Not Competitors
        </h2>

        {/* BCBA Partnership Eyebrow Badge */}
        <div style={{
          display: "inline-block", background: "#DBFFCD",
          padding: "6px 14px", borderRadius: 999,
          fontFamily: F.main, fontSize: 12, fontWeight: 700,
          letterSpacing: 2, textTransform: "uppercase",
          color: B.ink, marginBottom: 18,
        }}>
          BCBA PARTNERSHIP
        </div>

        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          I want to be direct about something: your BCBA has done valuable
          work. The compliance, the routines, the prompting protocols, those
          were necessary. They built the foundation your child needed to even
          attempt toileting.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          The BSL layer doesn't replace that work. It adds a sensory
          component that ABA alone couldn't address.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          If your BCBA has questions about what you're seeing:
        </p>

        {/* Data Sharing Protocol Card */}
        <div style={{
          background: B.cream, borderRadius: 12,
          boxShadow: `3px 3px 0 ${B.ink}`, padding: 22, marginBottom: 14,
        }}>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            — Share your tracking data after 30 days
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: "0 0 10px",
          }}>
            — Note any changes in awareness timing (does he pause faster
            than before?)
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            — Track whether wetness awareness emerges before BM awareness
            (this is typical)
          </p>
        </div>

        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          Your BCBA can integrate this data into their ongoing assessment.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: 0,
        }}>
          The sensory layer and the behavioral layer together close a gap
          that neither could close alone.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER-03 — Validation Anchor
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: B.cream, borderRadius: 16,
        boxShadow: `6px 6px 0 ${B.ink}`, padding: 32,
      }}>
        <h2 style={{
          fontFamily: F.main, fontSize: 26, fontWeight: 700,
          lineHeight: 1.2, letterSpacing: -0.3, color: B.ink,
          margin: "0 0 16px",
        }}>
          Where Your Child Is Right Now Is Normal
        </h2>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          You're in week 4–5 of this experiment. If you're seeing anything
          from the <span style={{ fontStyle: "italic" }}>Week 3–4 column</span> above, an
          occasional pause, a different facial expression after an accident,
          reaching for the underwear instead of ignoring it, that's a
          measurable change.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 14px",
        }}>
          That's evidence that the pathway is forming.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          If you're still in Week 1–2 territory (no visible awareness yet),
          that's also normal. Some children need 8–12 weeks before the first
          recognizable signal appears. Nicholson's study measured body
          awareness at a group level; individual children vary widely.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: 0,
        }}>
          Your child's timeline is their own. The science says the brain can
          learn this. But "can learn" doesn't mean "in a specific number of
          weeks."
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: GUARANTEE-01 — 60-Day Guarantee Reminder
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: "#FFFFFF", borderRadius: 16,
        boxShadow: `6px 6px 0 ${B.ink}`, padding: 32,
      }}>
        <h2 style={{
          fontFamily: F.main, fontSize: 26, fontWeight: 700,
          lineHeight: 1.2, letterSpacing: -0.3, color: B.ink,
          margin: "0 0 16px",
        }}>
          The 60-Day Guarantee Still Stands
        </h2>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          You haven't made a final decision yet. You're 29 days into a
          60-day trial. If at day 55 you look at your tracking data and
          see zero change, not one micro-pause, not one look down, nothing,
          then this approach wasn't right for your child.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 14px",
        }}>
          Full refund, no questions, no return shipping.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.ink, margin: "0 0 14px",
        }}>
          But in my experience reading parent tracking sheets over the last
          few years, most parents at day 29 are seeing more than they think
          they are. The changes are small. But they're real.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 8px",
        }}>
          Keep tracking. Keep the underwear on.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: 0,
        }}>
          The body signal pathway builds in quiet, millimeter-by-millimeter
          steps. Then one day you realize a pause came before the accident
          instead of after, and that's the day everything shifts.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SIGNOFF — Lena Medium
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
            If today isn't right, if the tracking feels overwhelming, if you
            need a break, that's a real answer. The product will be here.
            So will I.
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
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          If you want a one-page explanation of the Nicholson study to share
          with your BCBA or OT, reply to this email and I'll send it to you.
          I've read it about twenty times now, and I can help you find the
          parts most relevant to your child's age and profile.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: FOOTER
       ══════════════════════════════════════════════════════ */}
    <Footer />

  </EmailShell>
);

Object.assign(window, { Email_pp_extended_ed_22_e2_l2 });
