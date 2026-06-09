/* PP-Extended Education — E3 (D36) | L3 Maria — Non-Verbal, High Support, Dignity-First
   Wireframe: wireframes/pp-extended-ed/pped-22-e3-l3.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e3.l3
   Generated: 2026-06-09
*/

const Email_pp_extended_ed_22_e3_l3 = () => (
  <EmailShell preheader="Small signs that matter — the micro-win tracking system." bg={B.cream}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo Centered
       ══════════════════════════════════════════════════════ */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-19 — Timeline Shock
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFBF0", padding: "0 24px 24px", margin: "0 20px", borderRadius: 12 }}>
      {/* Hero illustration placeholder */}
      <ImgFrame
        height={260}
        radius={16}
        label="DIGNITY-FIRST ILLUSTRATION"
        sublabel="Warm, inclusive — child in a quiet moment. No clinical elements."
      />

      {/* Headline */}
      <h1 style={{
        fontFamily: F.main, fontSize: 22, fontWeight: 400,
        lineHeight: 1.3, letterSpacing: -0.3, color: B.ink,
        margin: "24px 0 10px", textAlign: "center",
      }}>
        The signs you might be missing
      </h1>

      {/* Subhead */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontStyle: "italic", fontWeight: 400,
        lineHeight: 1.5, color: B.soft, margin: 0, textAlign: "center",
      }}>
        You've been looking for the wrong signs.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HOOK — REFRAMING
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Opening line with teal left border */}
      <div style={{
        borderLeft: `3px solid ${B.teal}`,
        paddingLeft: 16,
        marginBottom: 20,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.7, color: B.ink, margin: 0,
        }}>
          You've been looking for the wrong signs.
        </p>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        The signs that matter for your child are not the ones the books describe.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        Not the ones therapists measure.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        Not the ones other parents post about.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        lineHeight: 1.7, color: B.ink, margin: 0,
      }}>
        The signs that matter for your child are smaller. So small you might have missed them.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: THE SMALL SIGNS
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "32px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 20px",
      }}>
        So small you might have missed them.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 20px",
      }}>
        A pause before sitting down.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 20px",
      }}>
        A glance down at the wet spot instead of walking through it.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 20px",
      }}>
        A flap of the hands at the moment of changing.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 20px",
      }}>
        Ten seconds of dry time that wasn't there before.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        lineHeight: 1.7, color: B.ink, margin: 0,
      }}>
        These are not failures. These are not 'almost there' nothings. These are the first sparks of a nervous system beginning to register information it never received before.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: MICRO-WIN CATEGORIES — Sticker Card
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 20px",
      }}>
        What micro-wins look like for L3 children
      </h2>

      {/* Sticker card */}
      <div style={{
        border: `2px solid ${B.ink}`,
        borderRadius: 18,
        boxShadow: `4px 4px 0 ${B.ink}`,
        padding: "24px 24px",
        background: "#FFFFFF",
      }}>
        {/* Reframe table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: F.main, fontSize: 14, lineHeight: 1.5 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "0 0 12px", color: B.muted, fontWeight: 700, fontSize: 10.5, letterSpacing: 1, textTransform: "uppercase" }}>
                Instead of asking
              </th>
              <th style={{ textAlign: "left", padding: "0 0 12px", color: B.ink, fontWeight: 700, fontSize: 10.5, letterSpacing: 1, textTransform: "uppercase" }}>
                Ask this
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px 0", color: B.muted, borderBottom: `1px solid #E0E8E9`, verticalAlign: "top" }}>
                "Did he train?"
              </td>
              <td style={{ padding: "10px 0 10px 16px", color: B.ink, fontWeight: 700, borderBottom: `1px solid #E0E8E9`, verticalAlign: "top" }}>
                "Did he pause at all today?"
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px 0", color: B.muted, borderBottom: `1px solid #E0E8E9`, verticalAlign: "top" }}>
                "Did he tell you?"
              </td>
              <td style={{ padding: "10px 0 10px 16px", color: B.ink, fontWeight: 700, borderBottom: `1px solid #E0E8E9`, verticalAlign: "top" }}>
                "Did anything different happen around changing?"
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px 0", color: B.muted, borderBottom: `1px solid #E0E8E9`, verticalAlign: "top" }}>
                "Is he dry?"
              </td>
              <td style={{ padding: "10px 0 10px 16px", color: B.ink, fontWeight: 700, borderBottom: `1px solid #E0E8E9`, verticalAlign: "top" }}>
                "Was he dry 30 seconds longer than last week?"
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px 0 0", color: B.muted, verticalAlign: "top" }}>
                "Did he initiate?"
              </td>
              <td style={{ padding: "10px 0 0 16px", color: B.ink, fontWeight: 700, verticalAlign: "top" }}>
                "Did he react to wetness sooner than before?"
              </td>
            </tr>
          </tbody>
        </table>

        {/* Closing copy */}
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.7, color: B.soft, margin: "24px 0 0",
        }}>
          Each question acknowledges that his body is learning a language it never learned to speak. The first signs will be barely visible.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: FIVE MICRO-WIN TRACKERS
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "32px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 24px",
      }}>
        Micro-wins you can track starting today
      </h2>

      {/* Tracker 1 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          lineHeight: 1.7, color: B.ink, margin: "0 0 4px",
        }}>
          1. The Pause
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.soft, margin: 0,
        }}>
          A hesitation, a brief stop in movement, right before or after voiding. Even half a second. This is the nervous system registering: something happened.
        </p>
      </div>

      {/* Tracker 2 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          lineHeight: 1.7, color: B.ink, margin: "0 0 4px",
        }}>
          2. The Look
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.soft, margin: 0,
        }}>
          Eyes moving toward the wet spot or the body. The brain is connecting the internal event to the external reality for the first time.
        </p>
      </div>

      {/* Tracker 3 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          lineHeight: 1.7, color: B.ink, margin: "0 0 4px",
        }}>
          3. The Reaction
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.soft, margin: 0,
        }}>
          A change in behavior at the moment of wetness. Not discomfort, that may never come for a slow-to-pick-up-signals child. But any shift. A flap. A vocalization. A small stillness.
        </p>
      </div>

      {/* Tracker 4 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          lineHeight: 1.7, color: B.ink, margin: "0 0 4px",
        }}>
          4. The Duration
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.soft, margin: 0,
        }}>
          Measuring in seconds, not hours. Was he dry for 30 seconds this week when last week it was zero? That is nothing. That is the signal pathway starting to hold.
        </p>
      </div>

      {/* Tracker 5 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          lineHeight: 1.7, color: B.ink, margin: "0 0 4px",
        }}>
          5. The Awareness Window
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.soft, margin: 0,
        }}>
          The time between "he voided" and "he shows awareness of it." The gap may be 10 seconds. Next month it might be 8 seconds. That's progress.
        </p>
      </div>

      {/* Closing copy */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: 0,
      }}>
        None of these mean your child is 'training.' They mean his body is communicating with his brain a way it hasn't before. That is the only outcome the Body-Signal Learning Layer is designed to create.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: THE TRACKING SYSTEM
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 20px",
      }}>
        Take one note per day. Just one.
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        Pick one micro-win category from the list above. At the end of each day, ask yourself one question: "Did I see it today?" Yes or no. That's it.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        Write it down. A single word. A tally mark on a sticky note. A note in your phone.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 20px",
      }}>
        At the end of the week, look back. Not for a trend. Not for evidence of progress. Just to see: did I notice anything this week I wouldn't have noticed before?
      </p>

      {/* Tracking Card */}
      <div style={{
        background: B.cream,
        borderRadius: 12,
        padding: "20px 24px",
        marginBottom: 20,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.ink, margin: "0 0 14px",
        }}>
          One question per day: "Did I see it today?"
        </p>

        {/* Week view dots */}
        <div style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "center" }}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={day} style={{ textAlign: "center" }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: i < 4 ? B.green : "transparent",
                border: `2px solid ${B.green}`,
                marginBottom: 4,
              }} />
              <span style={{
                fontFamily: F.main, fontSize: 10, color: B.muted, lineHeight: 1,
              }}>
                {day}
              </span>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.soft, margin: 0,
        }}>
          Write it down. A single word. A tally mark on a sticky note.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 400,
          lineHeight: 1.5, color: B.soft, margin: "10px 0 0",
        }}>
          End of week: look back. Not for a trend. Just to see: did I notice anything this week I wouldn't have noticed before?
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: WHAT THIS MEANS ALONGSIDE YOUR LIFE
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "32px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 20px",
      }}>
        You already track everything.
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        Medications, appointments, IEP goals, sleep hours, stool patterns.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        You do not need another system.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        lineHeight: 1.7, color: B.ink, margin: 0,
      }}>
        You need permission to change what you count as a signal.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PRODUCT FRAME
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        The BSL underwear you added alongside your diapers, it is not here to transform your daily reality. It is here to provide the sustained 30-60 seconds of gentle feedback that your child's nervous system that picks up signals slowly needs to begin registering what it previously could not.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        lineHeight: 1.7, color: B.ink, margin: 0,
      }}>
        One pair. $34.99. Add alongside your current routine. No replacement of anything. Just an addition.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: 60-DAY GUARANTEE
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.cream,
      border: `2px dashed ${B.teal}`,
      borderRadius: 12,
      padding: "24px 24px",
      margin: "0 20px",
    }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: "0 0 14px",
      }}>
        If you see one micro-win in 60 days, one pause, one look, one shift, you will know the signal is reaching a brain it never reached before.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.soft, margin: 0,
      }}>
        If you don't see anything, that is also information. A full refund stands. No questions.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 11: PARENT QUOTE
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      <div style={{
        borderLeft: `3px solid ${B.green}`,
        paddingLeft: 16,
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 400,
          lineHeight: 1.5, color: B.ink, margin: "0 0 14px",
        }}>
          "He's not trained. But he looked down at his wet underwear for the first time in 9 years. That's nothing. That's a real change."
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 13, fontWeight: 400,
          lineHeight: 1.3, color: B.muted, margin: 0,
        }}>
          — L3 Parent
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 12: LENA SIGN-OFF (MEDIUM — L3 Calibrated)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.ink, margin: "0 0 14px",
      }}>
        When you decide, it's here.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.7, color: B.ink, margin: "0 0 14px",
      }}>
        Lena ——
      </p>
      <div style={{ height: 14 }} />
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
      }}>
        I have two autistic sons. One trained at 6, the other at almost 8. The younger one, we thought he'd never get the signal. He'd been in diapers for years with zero awareness.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
      }}>
        Then one day he paused. Just paused. That was the first micro-win.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
      }}>
        It took months before the next one. But the next one came.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        The small signs matter. Trust your read. Lena
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9", margin: "32px 20px 0" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 13: CTA — Social CTA (Permission)
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.ink,
      padding: "30px 24px",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: "#FFFFFF", margin: "0 0 24px",
      }}>
        When you decide, it's here.
      </p>
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: "#D8F57C",
        color: B.ink,
        fontFamily: F.main, fontSize: 14, fontWeight: 700,
        textDecoration: "none",
        borderRadius: 999,
        letterSpacing: 0.1,
        textTransform: "uppercase",
      }}>
        When you decide, it's here
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.ink,
      padding: "16px 24px",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: F.main, fontSize: 11, fontWeight: 400,
        letterSpacing: 0.5, lineHeight: 1.3, color: B.muted, margin: "0 0 8px",
      }}>
        BrightKidCo
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, fontWeight: 400,
        letterSpacing: 0.5, lineHeight: 1.3, color: B.muted, margin: "0 0 8px",
      }}>
        123 Commerce Blvd, Suite 200, City, State ZIP
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, fontWeight: 400,
        letterSpacing: 0.5, lineHeight: 1.3, color: B.muted, margin: 0,
      }}>
        No longer want these emails? <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>Manage Preferences</a>
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_pp_extended_ed_22_e3_l3 });
