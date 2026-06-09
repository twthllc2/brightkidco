/* PP-Extended Education — E4 | General Family (GF)
   Wireframe: wireframes/pp-extended-ed/pped-22-e4-gf.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails["e4-gf"]
   Generated: 2026-06-09
*/

const Email_pped_22_e4_gf = () => {
  const B = window.BRAND;
  const F = window.FONT;

  /* ── Simple divider rule ── */
  const Divider = () => (
    <div style={{ padding: "0 22px" }}>
      <div style={{ height: 1, background: "#E5DDD3" }} />
    </div>
  );

  /* ── Warm linen blockquote (teal left border) ── */
  const Blockquote = ({ children }) => (
    <div style={{
      background: "#F5F0EB",
      borderLeft: "3px solid #2BAEB4",
      padding: "20px 22px",
      borderRadius: 0,
    }}>
      <p style={{
        fontFamily: "'Fraunces', serif",
        fontStyle: "italic",
        fontSize: 16,
        lineHeight: 1.5,
        color: B.soft,
        margin: 0,
      }}>{children}</p>
    </div>
  );

  /* ── Sign card (green checkmark + text) ── */
  const SignCard = ({ text }) => (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E5DDD3",
      borderRadius: 12,
      padding: "16px 20px",
      marginBottom: 12,
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
    }}>
      <span style={{ color: B.green, fontSize: 18, flexShrink: 0, lineHeight: 1.3 }}>✓</span>
      <span style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.5,
        color: B.ink,
      }}>{text}</span>
    </div>
  );

  /* ── Step card (number + text) ── */
  const StepCard = ({ number, text }) => (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E5DDD3",
      borderRadius: 12,
      padding: "16px 20px",
      marginBottom: 12,
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
    }}>
      <span style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 24,
        fontWeight: 700,
        color: B.teal,
        flexShrink: 0,
        lineHeight: 1.3,
      }}>{number}</span>
      <span style={{
        fontFamily: F.main,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.5,
        color: B.ink,
      }}>{text}</span>
    </div>
  );

  return (
    <EmailShell preheader="Not a destination. A process. Every child's timeline is different, here's what 'progress' looks like when you're building body awareness, not compliance." bg={B.cream}>

      {/* ══════════════════════════════════════════════════════
         SECTION 1: HEADER — Logo Bar
         ══════════════════════════════════════════════════════ */}
      <Header bg={B.cream} />

      {/* ══════════════════════════════════════════════════════
         SECTION 2: HERO — HERO-15 Level Callout
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "40px 22px 30px", background: B.cream, textAlign: "center" }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: F.main,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: B.teal,
          marginBottom: 12,
        }}>
          BODY-SIGNAL LEARNING
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: F.main,
          fontSize: 28,
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: -0.4,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          The moment between prompting and independence
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.soft,
          margin: "0 0 24px",
        }}>
          Every child's timeline is different. Here's what 'progress' looks like when you're building body awareness, not compliance.
        </p>

        {/* Hero Image */}
        <div style={{
          border: `2px solid ${B.ink}`,
          boxShadow: `6px 6px 0 ${B.ink}`,
          borderRadius: 0,
          overflow: "hidden",
        }}>
          <ImgFrame
            height={260}
            radius={0}
            label="HERO · LIFESTYLE"
            sublabel="Training pant fox red white — body-signal learning in action"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         DIVIDER
         ══════════════════════════════════════════════════════ */}
      <Divider />

      {/* ══════════════════════════════════════════════════════
         SECTION 3: LETTER — Hook + Validation
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "30px 22px", background: B.cream }}>
        {/* H2 */}
        <h2 style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.2,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          Whether your child has been wearing Body-Signal underwear for a few weeks or a few months, you've probably noticed something. He sits when you prompt. He responds to the schedule. But he doesn't go on his own.
        </h2>

        {/* Body paragraphs */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          You prompt. He sits. He gets up. Maybe nothing happens. Maybe something happens after he stands up and you catch it in time.
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          And you wonder: when does this become automatic? When does the prompting stop?
        </p>

        {/* Validation */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          Here's something I wish someone had told me earlier: prompting builds compliance. It doesn't build body awareness. Those are two different systems.
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          Your child sitting on the toilet when you tell them to, that's a win for your BCBA protocol, your schedule, your consistency. But it's not the same as their brain sending the signal and their body responding before you say a word.
        </p>

        {/* Blockquote */}
        <Blockquote>
          If your child has been doing scheduled sits for months and still never initiates, that's not a failure of effort. That's a sign that the internal signal hasn't connected to the action yet. And that's where the Body-Signal Learning Layer comes in.
        </Blockquote>
      </div>

      {/* ══════════════════════════════════════════════════════
         DIVIDER
         ══════════════════════════════════════════════════════ */}
      <Divider />

      {/* ══════════════════════════════════════════════════════
         SECTION 4: LETTER — Mechanism Deep-Dive
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "30px 22px", background: "#E8F6F4" }}>
        {/* H2 */}
        <h2 style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.2,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          The underwear is doing something your prompts can't
        </h2>

        {/* Body */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 16px",
        }}>
          The underwear is doing something your prompts can't: teaching the brain to recognize the signal on its own. Every accident gives 30-60 seconds of gentle sensation that lasts — a signal that says "something happened." Over time, that feedback builds a neural pathway: sensation → recognition → action.
        </p>

        {/* Citation */}
        <p style={{
          fontFamily: F.main,
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
          color: B.soft,
          margin: "12px 0 0",
        }}>
          Research from Nicholson et al. (2019) showed autistic children have significantly reduced ability to sense internal body signals. The signal isn't missing — it's arriving too late or too faintly. The BSL Layer doesn't replace your prompting, it gives the brain the repeated experience it needs to start recognizing the signal before the event.
        </p>

        {/* Timeline note */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "16px 0 0",
        }}>
          For some children, this shift happens in 2-3 weeks. For others, 8-12 weeks. Both are normal.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 5: SP-08 — Signs to Watch For
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "30px 22px", background: B.cream }}>
        {/* H2 */}
        <h2 style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.2,
          color: B.ink,
          margin: "0 0 20px",
        }}>
          Look for these signs that internal awareness is building:
        </h2>

        {/* Sign Cards */}
        <SignCard text="A pause after an accident, even a brief one, where your child looks down or seems to register something" />
        <SignCard text="Walking toward the bathroom unprompted, even if nothing happens when they get there" />
        <SignCard text="Grabbing their underwear or touching the waistband during or after an accident" />
        <SignCard text="A change in facial expression — surprise, confusion, acknowledgment — when they feel the feedback" />
        <SignCard text="Any step toward the bathroom, even if they don't make it in time" />

        {/* Closing */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "14px 0 0",
        }}>
          These aren't failures. They are the first threads of a neural connection forming.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         DIVIDER
         ══════════════════════════════════════════════════════ */}
      <Divider />

      {/* ══════════════════════════════════════════════════════
         SECTION 6: EDU-2 — Step Cards (Fading Prompts)
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "30px 22px", background: B.cream }}>
        {/* H2 */}
        <h2 style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.2,
          color: B.ink,
          margin: "0 0 8px",
        }}>
          When to ease back on prompting
        </h2>

        {/* Intro paragraph */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "0 0 20px",
        }}>
          You don't need to stop prompting overnight. But as you start seeing these signs, you can begin to fade your prompts:
        </p>

        {/* Step Cards */}
        <StepCard number="1" text="Wait 10-15 seconds longer before prompting, give the brain space to send its own signal" />
        <StepCard number="2" text="Replace verbal prompts with a visual cue (pointing, a gesture), let the child connect the feeling to the action" />
        <StepCard number="3" text="Increase wear time gradually, longer stretches of Body-Signal underwear build more feedback opportunities" />
        <StepCard number="4" text={'Celebrate the initiation, not the outcome, "You went toward the potty!" not "You didn\'t make it"'} />

        {/* Closing */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: "14px 0 0",
        }}>
          The goal isn't to remove yourself from the process. The goal is to shift from being the signal to supporting the connection.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 7: SP-08 — Testimonial Block
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "40px 22px", background: "#F5F0EB" }}>
        {/* Quote */}
        <div style={{
          borderLeft: "3px solid #2BAEB4",
          paddingLeft: 20,
          marginBottom: 16,
        }}>
          <p style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontSize: 20,
            lineHeight: 1.5,
            color: B.ink,
            margin: "0 0 12px",
          }}>
            "He initiated. Once. After 4 years."
          </p>
          <p style={{
            fontFamily: F.main,
            fontSize: 12,
            fontWeight: 400,
            color: B.muted,
            letterSpacing: 0.3,
            margin: 0,
          }}>
            — Real parent, BrightKidCo community
          </p>
        </div>

        {/* Attribution body */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.ink,
          margin: 0,
        }}>
          That one initiation, after 4 years of prompting, schedules, protocols, nothing, is not a small thing. It's the first time the brain sent the signal before the parent did. That's not compliance. That's body awareness, beginning to form.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         DIVIDER
         ══════════════════════════════════════════════════════ */}
      <Divider />

      {/* ══════════════════════════════════════════════════════
         SECTION 8: ProductShowcaseMedium
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "30px 22px", background: B.cream }}>
        {/* H2 */}
        <h2 style={{
          fontFamily: F.main,
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1.2,
          color: B.ink,
          margin: "0 0 16px",
          textAlign: "center",
        }}>
          Continue supporting your child's body-signal learning
        </h2>

        {/* Product card */}
        <div style={{
          background: "#FFFFFF",
          border: `2px solid ${B.ink}`,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: `4px 4px 0 ${B.ink}`,
        }}>
          {/* Two-column: image + content */}
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <div style={{ width: 140, flexShrink: 0, borderRight: `2px solid ${B.ink}`, background: "#FFFDF6" }}>
              <ImgFrame
                height={200}
                radius={0}
                label="PRODUCT"
                sublabel=""
              />
            </div>
            <div style={{ padding: "18px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 6 }}>
                  THE BUNDLE
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 700, lineHeight: 1.2, color: B.ink }}>
                  3+3 Bundle
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: B.ink, letterSpacing: -0.3 }}>$79.99</span>
                </div>
                <div style={{ fontSize: 11.5, color: B.soft, lineHeight: 1.5 }}>
                  $13.33 per pair with the bundle — less than half the single-pair price.
                </div>
              </div>
              <a href="#" style={{
                display: "inline-block",
                padding: "11px 18px",
                background: B.ink,
                color: "#D8F57C",
                fontSize: 13, fontWeight: 700,
                textDecoration: "none", borderRadius: 999,
                textAlign: "center", marginTop: 14,
                letterSpacing: 0.2,
              }}>
                See the bundle →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 9: CTA — Gentle Invite
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "30px 22px", background: "#E8F6F4", textAlign: "center" }}>
        {/* Button */}
        <a href="#" style={{
          display: "block",
          padding: "16px 36px",
          background: B.teal,
          color: "#FFFFFF",
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 0.3,
          textDecoration: "none",
          borderRadius: 6,
          textAlign: "center",
        }}>
          Keep Building Awareness
        </a>

        {/* Secondary link */}
        <p style={{
          fontFamily: F.main,
          fontSize: 14,
          fontWeight: 400,
          color: B.teal,
          textDecoration: "underline",
          marginTop: 12,
          textAlign: "center",
        }}>
          <a href="#" style={{ color: B.teal, textDecoration: "underline" }}>
            Learn more about the fading-prompts approach →
          </a>
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 10: TRUST — Promise Badges Strip
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "20px 22px", background: "#F0E8DC", textAlign: "center" }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 13,
          fontWeight: 500,
          lineHeight: 1.4,
          color: B.soft,
          margin: 0,
        }}>
          60-day guarantee: If after 60 days of consistent wear you see no change in body awareness, no pause, no look, no step toward the potty, full refund. Your judgment. No questions.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         DIVIDER
         ══════════════════════════════════════════════════════ */}
      <Divider />

      {/* ══════════════════════════════════════════════════════
         SECTION 11: LENA SIGN-OFF (Medium — Phase 3 Variant)
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "30px 22px", background: B.cream }}>
        {/* Sign-off text */}
        <p style={{
          fontFamily: F.main,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.6,
          color: B.soft,
          margin: "0 0 12px",
        }}>
          With understanding,
        </p>

        {/* Name */}
        <p style={{
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 700,
          color: B.ink,
          margin: "0 0 4px",
        }}>
          Lena ——
        </p>

        {/* Role */}
        <p style={{
          fontFamily: F.main,
          fontSize: 14,
          fontWeight: 400,
          color: B.soft,
          margin: "0 0 16px",
        }}>
          Customer Support · Mom of two autistic sons
        </p>

        {/* P.S. */}
        <div style={{
          fontFamily: "'Fraunces', serif",
          fontStyle: "italic",
          fontSize: 14,
          lineHeight: 1.5,
          color: B.soft,
        }}>
          <span style={{ color: B.teal, fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          Both my sons went through this. The older one was almost 8 before he initiated on his own. The prompting felt endless. But the pathways were forming the whole time, I just couldn't see them yet. Keep going at your child's pace.{' '}
          <a href="#" style={{ color: B.teal, textDecoration: "underline" }}>3+3 Bundle</a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 12: FOOTER
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "20px 22px", background: B.cream, borderTop: "1px solid #E5DDD3", textAlign: "center" }}>
        <p style={{
          fontFamily: F.main,
          fontSize: 11,
          fontWeight: 400,
          lineHeight: 1.5,
          color: B.muted,
          margin: "0 0 12px",
        }}>
          You're receiving this as part of your BrightKidCo body-signal learning journey. If your child's needs have changed or you'd like to update your preferences, you can manage your email settings anytime.
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 11,
          fontWeight: 400,
          color: B.muted,
          margin: "0 0 8px",
        }}>
          <a href="{{unsubscribe_url}}" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a>
          {" | "}
          <a href="{{preferences_url}}" style={{ color: B.ink, textDecoration: "underline" }}>Manage Preferences</a>
        </p>

        <p style={{
          fontFamily: F.main,
          fontSize: 11,
          fontWeight: 400,
          color: B.muted,
          margin: 0,
        }}>
          BrightKidCo LLC<br />
          1234 Innovation Drive, Suite 200<br />
          San Francisco, CA 94107<br />
          United States
        </p>
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_Email_pped_22_e4_gf: Email_pped_22_e4_gf });
