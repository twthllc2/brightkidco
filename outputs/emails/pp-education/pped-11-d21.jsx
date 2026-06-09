/* PP-Education D21 — Flow 11, Email 4 (Day 21)
   Three-Week Check-In: Wherever Your Child Is
   Wireframe: wireframes/pp-education/pped-11-d21.md
   Copy: copy/pp-education/pped-11-d21.md
   Strategy: strategy-map.json → pp-education.emails.d21
   Generated: 2026-06-09
*/

const Email_pp_education_11_d21 = () => (
  <EmailShell preheader="Wherever your child is on Day 21, here's what's normal." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Brand Wordmark
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px 24px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-11 Question Storm
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 24px 24px" }}>
      {/* Hero Image */}
      <div style={{
        borderRadius: 20, overflow: "hidden", border: `2px solid ${B.ink}`,
        boxShadow: `4px 4px 0 ${B.ink}`, marginBottom: 24,
      }}>
        <ImgFrame
          height={200}
          label="HERO IMAGE"
          sublabel="Training pant penguin multicolor flat-lay — 600x340px"
          radius={0}
        />
      </div>

      {/* Headline — Question hook */}
      <h1 style={{
        fontFamily: F.display, fontSize: 28, fontWeight: 700, lineHeight: 1.2,
        letterSpacing: -0.5, color: B.ink, margin: "0 0 8px", textAlign: "center",
      }}>
        3 weeks in, what are you seeing?
      </h1>

      {/* Subhead */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
        color: B.soft, margin: 0, textAlign: "center",
      }}>
        Wherever your child is on Day 21, here&apos;s what&apos;s normal.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: OBSERVATION — Whether...Or...If...
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Pull-quote with teal left border */}
      <div style={{ borderLeft: `3px solid ${B.teal}`, paddingLeft: 16, marginBottom: 16 }}>
        <p style={{
          fontFamily: F.display, fontSize: 20, fontWeight: 700, fontStyle: "italic",
          lineHeight: 1.3, color: B.teal, margin: 0, letterSpacing: -0.3,
        }}>
          Three weeks of the Body-Signal Learning Layer.
        </p>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
      }}>
        Whether your child is 3 or 10. Whether they&apos;re verbal and can say &ldquo;wet&rdquo; or non-verbal and show you with a gesture. Whether you&apos;ve seen one pause or zero.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        If your child wears underwear that gives their nervous system feedback it&apos;s been missing, here&apos;s where you might be right now.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: RECOGNITION ANCHORS — 6 signals
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      {/* Section header */}
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: B.ink, margin: "0 0 16px",
      }}>
        Read through these and see which one fits your morning:
      </h2>

      {/* Anchor list with green bullets */}
      {[
        "They paused for a second after an accident. Looked down. Then went back to playing.",
        "Nothing. Absolutely nothing. As if the underwear isn&apos;t there.",
        "A step toward the bathroom. After. But they walked that direction.",
        "They pulled at their pants. Not crying. Just.. noticing.",
        "A tiny moment where they seemed to register something before it happened.",
        "Same as week 1. No change at all.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: 12, gap: 10 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: B.green,
            flexShrink: 0, marginTop: 7,
          }} />
          <p style={{
            fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            {item}
          </p>
        </div>
      ))}

      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: B.ink, margin: "16px 0 0",
      }}>
        If even one of these sounds familiar, the signal is working. Even the &ldquo;nothing&rdquo; version.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION — Not Failure
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <div style={{ borderLeft: `3px solid ${B.teal}`, paddingLeft: 16, marginBottom: 16 }}>
        <p style={{
          fontFamily: F.display, fontSize: 20, fontWeight: 700, fontStyle: "italic",
          lineHeight: 1.3, color: B.teal, margin: 0, letterSpacing: -0.3,
        }}>
          If you saw nothing in week 3, that&apos;s not failure. That&apos;s neurology on its own timeline.
        </p>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        Some kids process the sensation in 2 weeks. Some need 8. Both are normal. All four of our families had different timelines:
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: THREE-FAMILY TESTIMONIALS — SP-08 Mini-Reviews
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      <h2 style={{
        fontFamily: F.display, fontSize: 22, fontWeight: 700, fontStyle: "italic",
        lineHeight: 1.25, color: B.ink, margin: "0 0 24px", letterSpacing: -0.3,
      }}>
        Three different kids. Three different timelines. One common experience: the body-signal connection is building.
      </h2>

      {/* Card 1 — Sarah (L1) */}
      <div style={{
        background: "#FFFFFF", borderRadius: 8, border: `1px solid #E0E8E9`,
        borderLeft: `3px solid ${B.green}`, padding: 24, marginBottom: 16,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.3,
          color: B.muted, margin: "0 0 12px",
        }}>
          Sarah (verbal, 4)
        </p>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
          color: B.ink, margin: 0,
        }}>
          &ldquo;He&apos;s been &lsquo;almost trained&rsquo; for months. Week 3, he paused. Just paused. But that pause never happened before.&rdquo;
        </p>
      </div>

      {/* Card 2 — Lisa (L2) */}
      <div style={{
        background: "#FFFFFF", borderRadius: 8, border: `1px solid #E0E8E9`,
        borderLeft: `3px solid ${B.green}`, padding: 24, marginBottom: 16,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.3,
          color: B.muted, margin: "0 0 12px",
        }}>
          Lisa (mixed, 6, BCBA context)
        </p>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
          color: B.ink, margin: 0,
        }}>
          &ldquo;Nothing in week 1. Nothing in week 2. Week 3, she pulled at her pants after peeing. My BCBA said that&apos;s the body signal connection starting.&rdquo;
        </p>
      </div>

      {/* Card 3 — Maria (L3) */}
      <div style={{
        background: "#FFFFFF", borderRadius: 8, border: `1px solid #E0E8E9`,
        borderLeft: `3px solid ${B.green}`, padding: 24, marginBottom: 0,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.3,
          color: B.muted, margin: "0 0 12px",
        }}>
          Maria (non-verbal, 8, high support)
        </p>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
          color: B.ink, margin: 0,
        }}>
          &ldquo;He&apos;s not trained. But he stopped mid-play and looked down. First time in 8 years he noticed. That&apos;s enough for now.&rdquo;
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: MECHANISM REMINDER — Repetition
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: B.ink, margin: "0 0 16px",
      }}>
        The Body-Signal Learning Layer works through repetition.
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
      }}>
        Each &ldquo;uh-oh&rdquo; sensation, sustained for 30-60 seconds, tells the brain: <em>something happened here.</em> Week 3 is when some nervous systems start registering that message.
      </p>

      {/* Mechanism card */}
      <div style={{
        background: "#FBF7F1", borderRadius: 8, padding: 16,
        border: `1px solid #E0E8E9`,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink, fontStyle: "italic",
          margin: 0,
        }}>
          For others, the pathway is still forming. That takes what it takes.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: LOW-BAR WINS — 7 mini-wins to document
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: B.ink, margin: "0 0 16px",
      }}>
        If any of these happened this week, document it:
      </h2>

      {/* Win list with green bullets */}
      {[
        "A pause after wetness",
        "A look at the spot",
        "A hand touching the underwear",
        "A step toward the bathroom",
        "Two hours dry instead of 30 minutes",
        "A hand signal or a word for wet",
        "Less resistance during diaper changes",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: 12, gap: 10 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: B.green,
            flexShrink: 0, marginTop: 7,
          }} />
          <p style={{
            fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
          }}>
            {item}
          </p>
        </div>
      ))}

      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: B.ink, margin: "16px 0 0",
      }}>
        These aren&apos;t little wins. They&apos;re the neural pathway becoming visible.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: EXIT OPTIONS / TRIAGE — Three Paths
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: B.ink, margin: "0 0 20px",
      }}>
        At 3 weeks, you&apos;re in one of three places:
      </h2>

      {/* Path A — Seeing first signs */}
      <div style={{
        background: "#FBF7F1", borderRadius: 8, padding: 20, marginBottom: 16,
        border: `1px solid #E0E8E9`,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700, color: B.teal, margin: "0 0 10px",
        }}>
          If you&apos;re seeing first signs
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
        }}>
          Keep going. The next phase of learning begins now. Week 4-6 is when signals strengthen and awareness grows. Some families find deeper guidance helpful at this stage.
        </p>
      </div>

      {/* Path B — Not seeing anything */}
      <div style={{
        background: "#FBF7F1", borderRadius: 8, padding: 20, marginBottom: 16,
        border: `1px solid #E0E8E9`,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700, color: B.teal, margin: "0 0 10px",
        }}>
          If you&apos;re not seeing anything yet
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
        }}>
          That&apos;s within range. Some nervous systems need 8+ weeks to register the signal. The Body-Signal approach is a marathon, not a sprint.
        </p>
      </div>

      {/* Path C — Unsure */}
      <div style={{
        background: "#FBF7F1", borderRadius: 8, padding: 20, marginBottom: 0,
        border: `1px solid #E0E8E9`,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700, color: B.teal, margin: "0 0 10px",
        }}>
          If you&apos;re unsure
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
        }}>
          That&apos;s honest. You&apos;ve given it 3 weeks. If you want to continue with more structured support as your child moves into weeks 4-8, we have resources designed for the next stage of body-signal learning.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA — Soft Link (text link, not button)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontStyle: "italic", lineHeight: 1.6,
        color: B.soft, margin: "0 0 12px",
      }}>
        Some families find deeper guidance helpful at this stage.
      </p>
      <a href="https://www.brightkidco.com/resources/extended-learning" style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        color: B.teal, textDecoration: "none",
      }}>
        &rarr; Explore Extended Resources
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: GUARANTEE — 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 24px" }}>
      <div style={{
        border: `2px dashed ${B.teal}`, borderRadius: 8, padding: 24, textAlign: "center",
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 22, fontWeight: 700, fontStyle: "italic",
          lineHeight: 1.3, color: B.ink, margin: 0,
        }}>
          60 days. Your judgment.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: LENA SIGN-OFF — MEDIUM-LONG variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink, margin: "0 0 4px",
      }}>
        With understanding,
      </p>
      <p style={{
        fontFamily: F.display, fontSize: 16, fontStyle: "italic", color: B.ink, margin: "0 0 4px",
      }}>
        Lena &md;&md;
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 13, color: B.muted, letterSpacing: 0.3, margin: "0 0 20px",
      }}>
        Customer Support &middot; Mom of two autistic sons
      </p>

      {/* P.S. — MEDIUM-LONG with personal story */}
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        <span style={{ fontWeight: 700, color: B.ink }}>P.S.</span> My older son was 8 before he trained. Week 3 for us was nothing. Week 4 was a pause. Week 8 was a step. The pathway builds at its own speed. 60 days to decide, your judgment.{" "}
        <a href="#" style={{ color: B.teal, textDecoration: "underline" }}>link</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px 16px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 11, letterSpacing: 0.5, lineHeight: 1.3,
        color: B.muted, margin: "0 0 8px", fontWeight: 700,
      }}>
        BrightKidCo
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, letterSpacing: 0.5, lineHeight: 1.3,
        color: B.muted, margin: "0 0 8px",
      }}>
        123 Commerce Blvd, Suite 200, City, State ZIP
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, letterSpacing: 0.5, lineHeight: 1.3,
        color: B.muted, margin: "0 0 8px",
      }}>
        No longer want these emails?{" "}
        <a href="{% unsubscribe %}" style={{ color: B.muted, textDecoration: "underline" }}>Unsubscribe</a>
        {" "} or {" "}
        <a href="{{ manage_preferences_url }}" style={{ color: B.muted, textDecoration: "underline" }}>Manage Preferences</a>
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, letterSpacing: 0.5, lineHeight: 1.3,
        color: B.muted, margin: 0,
      }}>
        Questions? Reply to this email, I personally read every response.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window.EMAILS, { "pp-education/pped-11-d21": Email_pp_education_11_d21 });
