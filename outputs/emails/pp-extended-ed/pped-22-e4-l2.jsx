/* PP-Extended Education — E4 (Day 43) | L2 Lisa
   Wireframe: wireframes/pp-extended-ed/pped-22-e4-l2.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e4-l2
   Generated: 2026-06-09
*/

const Email_pp_extended_ed_22_e4_l2 = () => (
  <EmailShell preheader="21 days of body-signal learning. Here's what happens neurologically at this point, and what to look for next." bg={B.cream}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo Centered
       ══════════════════════════════════════════════════════ */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO-2 — Data Shock
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#E8F6F4", padding: "40px 22px 30px" }}>
      {/* Eyebrow */}
      <div style={{
        fontFamily: F.main, fontSize: 10.5, fontWeight: 700,
        letterSpacing: 1.5, textTransform: "uppercase",
        color: B.teal, marginBottom: 12, textAlign: "center",
      }}>
        DAY 21 CHECK-IN
      </div>

      {/* H1 */}
      <h1 style={{
        fontFamily: F.main, fontSize: 28, fontWeight: 600,
        lineHeight: 1.15, letterSpacing: -0.4, color: B.ink,
        margin: "0 0 16px", textAlign: "center",
      }}>
        3 weeks in, here's what<br />your child's brain is doing
      </h1>

      {/* Sub */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.soft, margin: "0 0 24px",
        textAlign: "center",
      }}>
        21 days of body-signal learning. Here's what happens
        neurologically at this point, and what to look for next.
      </p>

      {/* Timeline Visual */}
      <div style={{
        background: "#F2F5F0", borderRadius: 16, padding: "20px 16px",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 10,
      }}>
        {/* Week labels row */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 8, width: "100%",
        }}>
          {["Week 1", "Week 2", "Week 3", "Week 4-5", "Week 6-8"].map((w, i) => (
            <div key={i} style={{
              flex: 1, textAlign: "center", fontFamily: F.main,
              fontSize: 10, fontWeight: 600, color: i < 3 ? "#8A9B9D" : B.teal,
              letterSpacing: 0.5,
            }}>
              {w}
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div style={{
          width: "100%", height: 16, display: "flex", gap: 4,
        }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              flex: 1, height: 12, borderRadius: 6,
              border: `2px solid #D4C9B3`, background: "transparent",
            }} />
          ))}
          <div style={{
            flex: 1, height: 12, borderRadius: 6,
            background: B.teal, opacity: 0.5,
          }} />
          <div style={{
            flex: 1, height: 12, borderRadius: 6,
            background: `linear-gradient(90deg, ${B.teal} 0%, ${B.green} 100%)`,
          }} />
        </div>

        {/* Gap label */}
        <div style={{
          width: "60%", height: 2, background: "#D4C9B3",
          borderRadius: 1, position: "relative", marginTop: -4,
        }}>
          <div style={{
            position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)",
            fontFamily: F.main, fontSize: 10, fontWeight: 700,
            color: "#8A9B9D", letterSpacing: 0.5, textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            THE 3-WEEK GAP
          </div>
        </div>

        {/* Signal emerging label */}
        <div style={{
          display: "flex", justifyContent: "flex-end", width: "100%", marginTop: -2,
        }}>
          <span style={{
            fontFamily: F.main, fontSize: 10, fontWeight: 700,
            color: B.teal, letterSpacing: 0.5,
          }}>
            ← SIGNAL
          </span>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: LETTER-09 — Mechanism Deep-Dive
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{ borderRadius: 16, padding: 32 }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          Lena here.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600,
          lineHeight: 1.8, color: B.ink, margin: "0 0 14px",
        }}>
          Three weeks ago you started the Body-Signal Learning Layer.
          If you're reading this, you're still in it, and that already
          matters more than you think.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400,
          lineHeight: 1.8, color: B.soft, margin: "0 0 14px",
        }}>
          Here's what's happening neurologically at day 21.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: MECHANISM — What the First 3 Weeks Accomplish
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "48px 20px" }}>
      <div style={{
        background: "#FFFFFF", borderRadius: 16,
        boxShadow: `6px 6px 0 ${B.ink}`, padding: 32,
      }}>
        <h2 style={{
          fontFamily: F.main, fontSize: 22, fontWeight: 600,
          lineHeight: 1.2, color: B.ink, margin: "0 0 16px",
        }}>
          What the first 3 weeks actually accomplish
        </h2>

        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
        }}>
          Most parents think if nothing obvious has happened by week 3,
          nothing is happening. That's not how interoception works.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
        }}>
          For autistic children, the brain processes sustained tactile
          input differently. Autistic brains don't habituate to sensory
          input the way neurotypical brains do — they keep processing it,
          fresh, every time. That "nothing happened" feeling? The sensation
          is landing. The brain is just still deciding what to do with it.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.soft, margin: 0,
        }}>
          Your BCBA built the behavioral foundation over months or years
          of ABA. What you're doing now is adding the sensory layer ABA
          can't reach — sustained, localized body-signal input that gives
          the brain something to attach the behavior to.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: TRUSTDEEP-11 — Research Citations
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#E8F6F4", padding: "30px 22px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 22, fontWeight: 600,
        lineHeight: 1.2, color: B.ink, margin: "0 0 20px",
      }}>
        What the research says about this specific window
      </h2>

      {/* Citation Card 1 */}
      <div style={{
        background: "#FFFFFF", border: `1px solid #D4C9B3`,
        borderRadius: 16, padding: 20, marginBottom: 14,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 600,
          color: B.ink, marginBottom: 8,
        }}>
          Hample, Mahler &amp; Amspacher (2020)
        </div>
        <p style={{
          fontFamily: "'Fraunces', serif", fontStyle: "italic",
          fontSize: 15, lineHeight: 1.5, color: B.soft, margin: "0 0 8px",
        }}>
          Autistic children who received structured interoception training
          began showing measurable improvement in body awareness after 4-6 weeks.
          Not 3 days. Not 1 week. The nervous system needs exposure cycles.
        </p>
        <div style={{
          display: "inline-block", background: "#E8F6F4",
          padding: "4px 10px", borderRadius: 999,
          fontFamily: F.main, fontSize: 10, fontWeight: 700,
          letterSpacing: 1, textTransform: "uppercase", color: B.teal,
        }}>
          CONFIDENCE: MEDIUM
        </div>
      </div>

      {/* Citation Card 2 */}
      <div style={{
        background: "#FFFFFF", border: `1px solid #D4C9B3`,
        borderRadius: 16, padding: 20, marginBottom: 14,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 14, fontWeight: 600,
          color: B.ink, marginBottom: 8,
        }}>
          Internal Data, N=672
        </div>
        <p style={{
          fontFamily: "'Fraunces', serif", fontStyle: "italic",
          fontSize: 15, lineHeight: 1.5, color: B.soft, margin: "0 0 8px",
        }}>
          82% showed clearer body awareness within 2-4 weeks of consistent wear.
        </p>
        <div style={{
          display: "inline-block", background: "#E8F6F4",
          padding: "4px 10px", borderRadius: 999,
          fontFamily: F.main, fontSize: 10, fontWeight: 700,
          letterSpacing: 1, textTransform: "uppercase", color: B.teal,
        }}>
          CONFIDENCE: LOW (INTERNAL)
        </div>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        That doesn't mean "trained", it means the first signal registered.
        A pause before an accident. A look at the wet spot. A hand toward
        the pants. That's not failure. That's the first synapse firing.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: LETTER-09 — Troubleshooting Checklist
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 22px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 22, fontWeight: 600,
        lineHeight: 1.2, color: B.ink, margin: "0 0 20px",
      }}>
        If you're in the "nothing yet" camp, here's what to check
      </h2>

      {/* Checklist Card 1 — Wear Time */}
      <div style={{
        background: "#F2F5F0", border: `1px solid #D4C9B3`,
        borderRadius: 16, padding: "16px 20px", marginBottom: 12,
        display: "flex", alignItems: "flex-start", gap: 12,
      }}>
        <div style={{ fontSize: 20, color: B.teal, flexShrink: 0, marginTop: 2 }}>
          ⌛
        </div>
        <div>
          <div style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 600,
            color: B.ink, marginBottom: 6,
          }}>
            Wear Time
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.5, color: B.soft,
          }}>
            Is your child getting 2+ hours daily of consistent wear?
            Intermittent wear = intermittent input. The brain can't build
            a pathway on 20 minutes here and there.
          </div>
        </div>
      </div>

      {/* Checklist Card 2 — Environment */}
      <div style={{
        background: "#F2F5F0", border: `1px solid #D4C9B3`,
        borderRadius: 16, padding: "16px 20px", marginBottom: 12,
        display: "flex", alignItems: "flex-start", gap: 12,
      }}>
        <div style={{ fontSize: 20, color: B.teal, flexShrink: 0, marginTop: 2 }}>
          🏠
        </div>
        <div>
          <div style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 600,
            color: B.ink, marginBottom: 6,
          }}>
            The Environment
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.5, color: B.soft,
          }}>
            Sensory-overloaded bathrooms (flushing echoes, bright lights,
            cold tile) can override the learning signal. If your child
            resists bathroom time, it may not be the underwear, it may be
            the room. Try pairing wear-time with a low-stimulus activity
            (reading, tablet time, a quiet corner) for the first 2 weeks
            before introducing bathroom association.
          </div>
        </div>
      </div>

      {/* Checklist Card 3 — Clothing Choices */}
      <div style={{
        background: "#F2F5F0", border: `1px solid #D4C9B3`,
        borderRadius: 16, padding: "16px 20px", marginBottom: 12,
        display: "flex", alignItems: "flex-start", gap: 12,
      }}>
        <div style={{ fontSize: 20, color: B.teal, flexShrink: 0, marginTop: 2 }}>
          👕
        </div>
        <div>
          <div style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 600,
            color: B.ink, marginBottom: 6,
          }}>
            Clothing Choices
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.5, color: B.soft,
          }}>
            If your child is already sensitive to clothing textures, the
            learning layer adds another sensation on top. Try wearing the
            body-signal underwear under loose sweatpants or soft shorts,
            minimize competing sensory input during early weeks.
          </div>
        </div>
      </div>

      {/* Checklist Card 4 — Daily Rhythm */}
      <div style={{
        background: "#F2F5F0", border: `1px solid #D4C9B3`,
        borderRadius: 16, padding: "16px 20px",
        display: "flex", alignItems: "flex-start", gap: 12,
      }}>
        <div style={{ fontSize: 20, color: B.teal, flexShrink: 0, marginTop: 2 }}>
          📅
        </div>
        <div>
          <div style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 600,
            color: B.ink, marginBottom: 6,
          }}>
            Daily Rhythm
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 15, fontWeight: 400,
            lineHeight: 1.5, color: B.soft,
          }}>
            The nervous system learns in patterns. Same time of day, same
            duration, same low-pressure context. Irregular schedules give
            the brain inconsistent data.
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SP-05 — Peer Testimonial
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F5F0EB", padding: "40px 22px" }}>
      {/* Quote with green left border */}
      <div style={{
        borderLeft: `3px solid ${B.green}`,
        paddingLeft: 20, marginBottom: 16,
      }}>
        <p style={{
          fontFamily: "'Fraunces', serif", fontStyle: "italic",
          fontSize: 17, lineHeight: 1.6, color: B.ink, margin: "0 0 16px",
        }}>
          "She finally paused when she felt wetness. That was Week 4.
          We still have pull-up days. But she's feeling something
          for the first time."
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 12, fontWeight: 400,
          color: "#8A9B9D", letterSpacing: 0.3, margin: "0 0 8px",
        }}>
          — One L2 parent
        </p>
        <div style={{
          display: "inline-block", background: "#E8F6F4",
          padding: "4px 10px", borderRadius: 999,
          fontFamily: F.main, fontSize: 10, fontWeight: 700,
          letterSpacing: 1, textTransform: "uppercase", color: B.teal,
        }}>
          L2 · METHOD-TESTED · WEEK 4
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: EDU-11 — Progress Table
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 22px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 22, fontWeight: 600,
        lineHeight: 1.2, color: B.ink, margin: "0 0 20px",
      }}>
        What realistic progress looks like for weeks 4-8 (L2 profile)
      </h2>

      {/* Progress Table */}
      <div style={{
        border: `1px solid #D4C9B3`, borderRadius: 16, overflow: "hidden",
        boxShadow: `6px 6px 0 ${B.ink}`, marginBottom: 20,
      }}>
        {/* Table Header */}
        <div style={{
          background: "#F2F5F0", display: "flex",
          borderBottom: `2px solid #D4C9B3`,
        }}>
          <div style={{
            flex: 1, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 0.5,
            color: "#666666", borderRight: `1px solid #D4C9B3`,
          }}>
            WEEK
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 0.5,
            color: "#666666", borderRight: `1px solid #D4C9B3`,
          }}>
            WHAT MAY HAPPEN
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 0.5,
            color: "#666666",
          }}>
            WHAT IT MEANS
          </div>
        </div>

        {/* Row 1: Week 4-5 */}
        <div style={{
          display: "flex", borderBottom: `1px solid #D4C9B3`,
          background: "#FFFFFF",
        }}>
          <div style={{
            flex: 1, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            4-5
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            First awareness: pause, look, hand-to-crotch gesture
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", lineHeight: 1.5,
          }}>
            Signal reaching brain for the first time
          </div>
        </div>

        {/* Row 2: Week 5-6 */}
        <div style={{
          display: "flex", borderBottom: `1px solid #D4C9B3`,
          background: "#F7F3EB",
        }}>
          <div style={{
            flex: 1, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            5-6
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            Inconsistent initiation (1-2 times, then 4 days of nothing)
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", lineHeight: 1.5,
          }}>
            Pathway strengthening — non-linear is normal
          </div>
        </div>

        {/* Row 3: Week 6-8 */}
        <div style={{
          display: "flex", borderBottom: `1px solid #D4C9B3`,
          background: "#FFFFFF",
        }}>
          <div style={{
            flex: 1, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            6-8
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            Reduced prompt-dependency in one context (e.g., after school)
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", lineHeight: 1.5,
          }}>
            Sensory + behavioral integration beginning
          </div>
        </div>

        {/* Row 4: Week 8+ */}
        <div style={{
          display: "flex",
          background: "#F7F3EB",
        }}>
          <div style={{
            flex: 1, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            8+
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", borderRight: `1px solid #D4C9B3`,
            lineHeight: 1.5,
          }}>
            Reliable signal in calm, familiar environments
          </div>
          <div style={{
            flex: 2, padding: "12px 16px",
            fontFamily: F.main, fontSize: 14, fontWeight: 400,
            color: "#444444", lineHeight: 1.5,
          }}>
            Your BCBA's foundation + sensory layer connecting
          </div>
        </div>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        Not every child follows this table. Some faster, some slower.
        Both are within range.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: TRUST-2 — Guarantee Detail Cards
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F2F5F0", padding: "30px 22px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 22, fontWeight: 600,
        lineHeight: 1.2, color: B.ink, margin: "0 0 16px",
      }}>
        The 60-day guarantee exists because every nervous system has
        its own timeline
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 16px",
      }}>
        You're at day 21. You have 39 more days to observe. If your
        child shows no change, no pause, no awareness shift, no new
        signal, by day 60, full refund. No forms. No questions.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        We're not asking you to hope. We're asking you to observe the
        mechanism, and decide based on what you see.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA-11 — Permission CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 22px", textAlign: "center" }}>
      <p style={{
        fontFamily: "'Fraunces', serif", fontStyle: "italic",
        fontSize: 16, lineHeight: 1.5, color: B.soft,
        margin: "0 0 20px",
      }}>
        If today isn't a "yes," that's a real answer. The product will
        be here next month. So will I.
      </p>

      <a href="#" style={{
        display: "block", padding: "16px 36px",
        background: B.teal, color: "#FFFFFF",
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        letterSpacing: 0.3, textDecoration: "none",
        borderRadius: 6, textAlign: "center",
        border: "none",
      }}>
        When you're ready, the body-signal learning guide is here
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       GRADIENT BAND
       ══════════════════════════════════════════════════════ */}
    <Band from={B.teal} to={B.green} height={4} />

    {/* ══════════════════════════════════════════════════════
       SECTION 11: SIGNOFF — Lena Medium-Long Variant
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
            color: "#B8CACD", margin: "0 0 6px",
          }}>
            Talk soon,
          </p>
        </div>

        {/* Signature */}
        <div style={{ marginBottom: 16 }}>
          <div style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 700,
            color: "#FFFFFF", marginBottom: 4,
          }}>
            Lena ——
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 13, color: "#8FAFB2",
            fontStyle: "italic",
          }}>
            Customer Support · Mom of two autistic sons
          </div>
        </div>

        {/* P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          I have two autistic sons. One trained at 6, the other at almost 8.
          Week 3 looked like nothing for both of them. Week 8 was different.
          Not promising you the same, just telling you what I've seen.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{
      background: B.cream, padding: "20px 22px",
      borderTop: `1px solid #D4C9B3`, textAlign: "center",
    }}>
      <p style={{
        fontFamily: F.main, fontSize: 11, fontWeight: 400,
        lineHeight: 1.5, color: "#8A9B9D", margin: "0 0 10px",
      }}>
        You're receiving this because you purchased the Body-Signal Learning
        Layer on brightkidco.com. If you'd like to adjust your email
        preferences, you can <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>update preferences</a> or <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>unsubscribe</a>.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, fontWeight: 400,
        lineHeight: 1.5, color: "#8A9B9D", margin: "0 0 4px",
      }}>
        BrightKidCo LLC
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, fontWeight: 400,
        lineHeight: 1.5, color: "#8A9B9D", margin: "0 0 4px",
      }}>
        1234 Innovation Drive, Suite 200
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, fontWeight: 400,
        lineHeight: 1.5, color: "#8A9B9D", margin: 0,
      }}>
        San Francisco, CA 94107
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_pp_extended_ed_22_e4_l2 });
