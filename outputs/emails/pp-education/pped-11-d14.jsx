/* PP-Education D14 — Flow 11, Email 3 (Day 14)
   Two-Week Milestone Check-In: Early Wins & Body-Awareness Reinforcement
   Wireframe: wireframes/pp-education/pped-11-d14.md
   Copy: copy/pp-education/pped-11-d14.md
   Strategy: strategy-map.json → pp-education.emails.d14
   Generated: 2026-06-09
*/

const Email_pp_education_11_d14 = () => (
  <EmailShell preheader="The signal might be smaller than you're looking for" bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Brand Wordmark
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 24px 24px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-19 Timeline Shock
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
          sublabel="Training pant fox red white flat-lay — 600x340px"
          radius={0}
        />
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: F.display, fontSize: 28, fontWeight: 700, lineHeight: 1.2,
        letterSpacing: -0.5, color: B.ink, margin: "0 0 8px", textAlign: "center",
      }}>
        Two weeks in, here&apos;s what to look for
      </h1>

      {/* Subhead */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
        color: B.soft, margin: 0, textAlign: "center",
      }}>
        The signal might be smaller than you&apos;re looking for
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: OPENER — LETTER-01 Whether...Or...If...
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Pull-quote block with teal left border */}
      <div style={{ borderLeft: `3px solid ${B.teal}`, paddingLeft: 16, marginBottom: 16 }}>
        <p style={{
          fontFamily: F.display, fontSize: 20, fontWeight: 700, fontStyle: "italic",
          lineHeight: 1.3, color: B.teal, margin: 0, letterSpacing: -0.3,
        }}>
          Whether you&apos;ve seen a pause this week, or you&apos;re still waiting for the first sign, if your child has been wearing the Body-Signal underwear for two weeks now, you&apos;re right in the window where most parents start noticing something.
        </p>
      </div>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        Whether your child is 3 or 10, verbal or not, newly diagnosed or you&apos;ve been at this for years, the two-week mark is when the nervous system has had enough exposure to start building new pathways.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: RECOGNITION ANCHORS — 7 signals
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      {/* Section header */}
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: B.ink, margin: "0 0 16px",
      }}>
        Here&apos;s what a first signal looks like
      </h2>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
      }}>
        Over these past two weeks, some parents see obvious changes. Others see almost nothing. Both are on the spectrum of normal. Here are the signals to watch for, they might be smaller than you&apos;re expecting:
      </p>

      {/* Anchor list with green bullets */}
      {[
        "A pause, even just one second, before an accident, like your child is processing something",
        "Looking down at the wet spot afterward, instead of continuing to play",
        "Pulling at their pants or underwear when they&apos;re wet, as if noticing for the first time",
        "Saying \u201Cwet,\u201D \u201Cuh-oh,\u201D or making a sound, or showing you with a gesture, like tugging at your hand",
        "A single step toward the bathroom, even if it&apos;s after the fact",
        "Staying dry for 2 hours instead of 30 minutes",
        "Tolerating the underwear longer than last week without wanting it off",
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
        Not all of these will happen. Even ONE of them, once, means the signal is beginning to wire.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION — If Nothing Yet
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
      }}>
        And if you haven&apos;t seen any of these, that&apos;s also normal. Some kids need 4, 6, even 8 weeks before the first signal registers. The nervous system doesn&apos;t work on a schedule. Week 2 is still early. The gentle sensation that lasts from the Body-Signal Learning Layer is building the neural foundation. The awareness often shows up between weeks 3 and 6 for kids whose systems need more time.
      </p>

      {/* Pull-quote with teal border */}
      <div style={{ borderLeft: `3px solid ${B.teal}`, paddingLeft: 16, marginTop: 16 }}>
        <p style={{
          fontFamily: F.display, fontSize: 20, fontWeight: 700, fontStyle: "italic",
          lineHeight: 1.3, color: B.teal, margin: 0, letterSpacing: -0.3,
        }}>
          The key isn&apos;t how fast it happens. The key is that it happens at all.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: THREE-FAMILY TESTIMONIALS — SP-06
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      <h2 style={{
        fontFamily: F.display, fontSize: 22, fontWeight: 700, fontStyle: "italic",
        lineHeight: 1.25, color: B.ink, margin: "0 0 24px", letterSpacing: -0.3,
      }}>
        Three different kids. Three different timelines. One common thread, the signal arrived when their nervous systems were ready.
      </h2>

      {/* Card 1 — Sarah & Ethan (L1) */}
      <div style={{
        background: "#FFFFFF", borderRadius: 8, border: `1px solid #E0E8E9`,
        borderLeft: `3px solid ${B.green}`, padding: 24, marginBottom: 16,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.3,
          color: B.muted, margin: "0 0 12px",
        }}>
          Sarah, mom of 4-year-old Ethan (verbal, &quot;almost trained&quot; for months)
        </p>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
          color: B.ink, margin: 0,
        }}>
          &ldquo;He went today. Once. But he went. After weeks of nothing, he just stopped mid-play, looked down, and walked to the potty. It took maybe 15 seconds from pause to pee. That never happened before. It&apos;s not perfect, but it&apos;s real.&rdquo;
        </p>
      </div>

      {/* Card 2 — Lisa & Amara (L2) */}
      <div style={{
        background: "#FFFFFF", borderRadius: 8, border: `1px solid #E0E8E9`,
        borderLeft: `3px solid ${B.green}`, padding: 24, marginBottom: 16,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.3,
          color: B.muted, margin: "0 0 12px",
        }}>
          Lisa, mom of 6-year-old Amara (sensory differences, BCBA protocol, years of attempts)
        </p>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
          color: B.ink, margin: 0,
        }}>
          &ldquo;Amara has been in pull-ups her whole life. We tried everything the BCBA suggested. Week 2, nothing. Week 3, she pulled at her pants once. I almost missed it. Week 4, she paused before peeing. Not every time. But once was more than we&apos;d had in 6 years.&rdquo;
        </p>
      </div>

      {/* Card 3 — Maria & James (L3) */}
      <div style={{
        background: "#FFFFFF", borderRadius: 8, border: `1px solid #E0E8E9`,
        borderLeft: `3px solid ${B.green}`, padding: 24, marginBottom: 0,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.3,
          color: B.muted, margin: "0 0 12px",
        }}>
          Maria, mom of 9-year-old James (non-verbal, high support needs, years of no awareness)
        </p>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
          color: B.ink, margin: 0,
        }}>
          &ldquo;James has never reacted to being wet. Ever. We&apos;re not trained. But last week, for the first time in 9 years, he paused when he felt the wetness. Just a pause. A look down. Then he kept playing. That was everything. Whether he ever fully trains, I don&apos;t know. But he felt something. That&apos;s enough for now.&rdquo;
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: MECHANISM — EDU-10 Why the Signal Takes Time
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: B.ink, margin: "0 0 16px",
      }}>
        Why the Signal Takes Time
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
      }}>
        The Body-Signal Learning Layer creates a gentle sensation lasting 30-60 seconds that gives the brain time to register: &ldquo;Something happened.&rdquo; This is different from a pull-up, which wicks that feedback away in seconds.
      </p>

      {/* Mechanism card */}
      <div style={{
        background: "#FBF7F1", borderRadius: 8, padding: 16, marginBottom: 16,
        border: `1px solid #E0E8E9`,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink, margin: 0,
        }}>
          At week 2, the brain is building the association: <em>This feeling = I peed &rarr; I should notice &rarr; Something changes.</em> That neural pathway doesn&apos;t form overnight. It forms through repetition &mdash; each accident, each 30-60 seconds of sensation, each pause. Think of it like learning a new language. Week 2 is still at the &ldquo;recognizing individual letters&rdquo; stage. The sentences come later.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: MINI-WIN TRACKING — Keep a one-step log
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        color: B.ink, margin: "0 0 16px",
      }}>
        Keep a one-step log
      </h2>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "0 0 14px",
      }}>
        Here&apos;s something that helps: keep a one-step log. Not a full chart, just a note on your phone or a sticky note on the fridge. Every time you notice a pause, a look, a pull at the pants, a step toward the bathroom, write it down with the date.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        After 2-3 weeks, look back. You might see a pattern you didn&apos;t notice day to day.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PERMISSION CLOSE — Whether...60 Days
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
      }}>
        Whether you&apos;ve seen something or nothing yet, you&apos;re doing the right thing by paying attention. The underwear is doing its job every time your child wears it. The signal is building, even when you can&apos;t see it.
      </p>

      <div style={{ borderLeft: `3px solid ${B.teal}`, paddingLeft: 16, marginTop: 16 }}>
        <p style={{
          fontFamily: F.display, fontSize: 22, fontWeight: 700, fontStyle: "italic",
          lineHeight: 1.3, color: B.teal, margin: 0, letterSpacing: -0.3,
        }}>
          60 days to see where this goes. By your judgment.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA — Social CTA (Reply)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px 30px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontStyle: "italic", lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        If you want to share what you&apos;re seeing, hit reply. I read everything. If you&apos;re not sure what counts as a signal, I can help you spot it.
      </p>

      <a href="mailto:hello@brightkidco.com" style={{
        display: "inline-block", padding: "14px 32px", height: 48, lineHeight: "48px",
        background: B.teal, color: "#FFFFFF", fontFamily: F.main,
        fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
        textDecoration: "none", borderRadius: 999,
        textAlign: "center",
      }}>
        Hit Reply &mdash; I Read Everything
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
          60 days. By your judgment.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: NEXT TEASER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 16px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontStyle: "italic", color: B.muted, margin: 0,
      }}>
        Next time: Your three-week check-in &mdash; where you are and what comes next.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: LENA SIGN-OFF — MEDIUM variant
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

      {/* P.S. Line 1 */}
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 12px",
      }}>
        <span style={{ fontWeight: 700, color: B.ink }}>P.S.</span> Both my sons went through this. I know what it feels like to wait for the first sign. Keep the log, even one pause matters.{" "}
        <a href="#" style={{ color: B.teal, textDecoration: "underline" }}>Signal Tracking Guide</a>
      </p>

      {/* P.S. Line 2 */}
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0,
      }}>
        <span style={{ fontWeight: 700, color: B.ink }}>P.S.</span> Your BCBA or OT built the behavioral foundation. This email is about the sensory layer they might not have resources for. The two work together.{" "}
        <a href="#" style={{ color: B.teal, textDecoration: "underline" }}>Working with Your Care Team</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: FOOTER
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

Object.assign(window.EMAILS, { "pp-education/pped-11-d14": Email_pp_education_11_d14 });
