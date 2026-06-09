/* PP-Extended Education — E4 | Level 1 (Sarah)
   Wireframe: wireframes/pp-extended-ed/pped-22-e4-l1.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e4-l1
   Generated: 2026-06-09
*/

const Email_pped_22_e4_l1 = () => {
  const B = window.BRAND;
  const F = window.FONT;

  /* ── DESDEEP-6: Color Block divider ── */
  const ColorBlock = ({ from, to, height = 16 }) => (
    <div style={{ padding: "12px 22px 0" }}>
      <div style={{
        height,
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        borderRadius: 8, opacity: 0.35,
      }} />
    </div>
  );

  /* ── Thin rule ── */
  const TonalRule = () => (
    <div style={{ padding: "20px 0 0" }}>
      <div style={{ height: 1, background: "#E5DDD3" }} />
    </div>
  );

  return (
    <EmailShell preheader='The transition from "almost trained" to "mostly trained" starts with one shift.' bg={B.paper}>

      {/* ══════════════════════════════════════════════════════
         SECTION 1: HEADER — UTIL-02 Logo Bar
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "24px 20px 0", textAlign: "center" }}>
        <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 2: HERO-17 — Social Proof Hero
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FFF5EE", padding: "40px 22px 30px" }}>
        {/* Eyebrow */}
        <div style={{
          fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase",
          color: B.teal, fontWeight: 700, marginBottom: 12,
          fontFamily: F.main,
        }}>
          6-WEEK CHECK-IN
        </div>

        {/* H1 */}
        <h1 style={{
          fontSize: 28, lineHeight: 1.15, fontWeight: 700,
          letterSpacing: -0.4, color: B.ink, margin: "0 0 16px",
          fontFamily: F.main,
        }}>
          You've been prompting for 6 weeks.<br />
          Here's when to step back.
        </h1>

        {/* Sub — Fraunces italic */}
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic",
          fontWeight: 400, lineHeight: 1.5, color: B.soft,
          margin: "0 0 24px",
        }}>
          The transition from 'almost trained' to 'mostly trained' starts with one shift.
        </p>

        {/* Hero image — framed with ink border + shadow */}
        <div style={{
          border: `2px solid ${B.ink}`,
          boxShadow: `6px 6px 0 ${B.ink}`,
          overflow: "hidden",
        }}>
          <ImgFrame
            height={200}
            radius={0}
            label="HERO · LIFESTYLE"
            sublabel="BrightKidCo Body-Signal Learning underwear — watermelon pink pattern"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 3: DESDEEP-6 Color Block (amber gradient)
         ══════════════════════════════════════════════════════ */}
      <ColorBlock from="#D4A76A" to="#FBF7F1" height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 4: LETTER-03 — Letter + Pull-Quote
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "30px 22px" }}>
        {/* H2 */}
        <h2 style={{
          fontSize: 22, lineHeight: 1.2, fontWeight: 700,
          color: B.ink, margin: "0 0 16px", fontFamily: F.main,
        }}>
          Some days he goes. Some days he doesn't. And every day you wonder the same thing: when does this stop being my job?
        </h2>

        {/* Body paragraph 1 */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 16px", fontFamily: F.main,
        }}>
          That's the right question, and asking it means you're ready for the next phase.
        </p>

        {/* Pull-Quote — teal left border, warm linen bg */}
        <div style={{
          background: "#F5F0EB",
          borderLeft: `3px solid ${B.teal}`,
          padding: 20, margin: "0 0 16px",
        }}>
          <p style={{
            fontFamily: F.display, fontSize: 16, lineHeight: 1.5,
            fontStyle: "italic", fontWeight: 400, color: B.soft,
            margin: 0,
          }}>
            If your child is showing any awareness at all, a pause mid-play, a glance down at his pants, a step toward the bathroom, even if he doesn't make it in time, the signal is forming. It's not consistent yet. But it's there. And that changes what he needs from you.
          </p>
        </div>

        {/* H3 — Mechanism heading */}
        <h3 style={{
          fontSize: 18, lineHeight: 1.3, fontWeight: 700,
          color: B.ink, margin: "24px 0 12px", fontFamily: F.main,
        }}>
          Why prompting can hold progress back
        </h3>

        {/* Body paragraph 2 */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          When you say "Do you need to go?" every hour, his brain learns to wait for the question. The external cue becomes the trigger, not the internal sensation. He goes because you asked, not because he felt something.
        </p>

        {/* Body paragraph 3 */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontFamily: F.main,
        }}>
          That's how brains work. For the last six weeks, the most consistent signal has been your voice. The goal now is to fade that signal so his internal one can take over.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 5: DESDEEP-6 Color Block (teal gradient)
         ══════════════════════════════════════════════════════ */}
      <ColorBlock from={B.teal} to="#FBF7F1" height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 6: EDU-9 — Tip Cards (3-Phase Weaning)
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "30px 22px" }}>
        {/* H2 */}
        <h2 style={{
          fontSize: 22, lineHeight: 1.2, fontWeight: 700,
          color: B.ink, margin: "0 0 20px", fontFamily: F.main,
        }}>
          How to reduce prompting, a gradual approach
        </h2>

        {/* Intro body */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 16px", fontFamily: F.main,
        }}>
          This isn't about quitting cold turkey. It's about creating space for his interoception pathway to operate on its own. The signal is building. It just needs room to connect to action without you as the middleman.
        </p>

        {/* Tip Card 1 — Week 1-2 */}
        <div style={{
          background: "#FFF5EE",
          border: `1px solid #E5DDD3`,
          borderRadius: 20, padding: 20,
          marginBottom: 14,
        }}>
          <div style={{
            fontSize: 16, fontWeight: 700, color: B.ink,
            marginBottom: 8, fontFamily: F.main,
          }}>
            Week 1-2: Lengthen the intervals.
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.5, color: B.soft,
            margin: 0, fontFamily: F.main,
          }}>
            If you're prompting every hour, stretch to every 90 minutes. If every 90, stretch to two hours. The goal isn't to catch every accident, it's to give his brain a window where the only signal is the internal one. You'll see more accidents at first. That's normal. That's the signal working without the backup.
          </p>
        </div>

        {/* Tip Card 2 — Week 3-4 */}
        <div style={{
          background: "#FFF5EE",
          border: `1px solid #E5DDD3`,
          borderRadius: 20, padding: 20,
          marginBottom: 14,
        }}>
          <div style={{
            fontSize: 16, fontWeight: 700, color: B.ink,
            marginBottom: 8, fontFamily: F.main,
          }}>
            Week 3-4: Watch for early signs of self-starting.
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.5, color: B.soft,
            margin: 0, fontFamily: F.main,
          }}>
            These are the small, straightforward-to-miss behaviors that come before a child says "I need to go." Pausing during play. Touching his pants. Fidgeting. Shifting positions. These mean the internal signal arrived, he just hasn't connected it to the potty walk yet. When you see one, don't prompt. Just observe.
          </p>
        </div>

        {/* Tip Card 3 — Week 5-6 */}
        <div style={{
          background: "#FFF5EE",
          border: `1px solid #E5DDD3`,
          borderRadius: 20, padding: 20,
        }}>
          <div style={{
            fontSize: 16, fontWeight: 700, color: B.ink,
            marginBottom: 8, fontFamily: F.main,
          }}>
            Week 5-6: Switch from prompting to observing.
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.5, color: B.soft,
            margin: 0, fontFamily: F.main,
          }}>
            By now, most L1 kids who have been consistent with the body-signal underwear are showing some form of awareness 3-5 times per day. At this point, you can shift from "Do you need to go?" to a quiet presence. Have the potty available. Notice when he pauses. If he looks confused, that's good, confused means he felt something and isn't sure what to do next.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 7: SP-13 — Review of the Week (Testimonial)
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#F5F0EB", padding: "40px 22px" }}>
        <div style={{ borderLeft: `3px solid ${B.green}`, paddingLeft: 20 }}>
          {/* Quote text */}
          <p style={{
            fontFamily: F.display, fontSize: 17, lineHeight: 1.6,
            fontStyle: "italic", fontWeight: 400, color: B.ink,
            margin: "0 0 16px",
          }}>
            "I was still prompting every 45 minutes. I was terrified that if I stopped, he'd never go on his own. But when I finally stretched the intervals, it was like he'd been waiting for me to get out of the way. He started going on his own. Not every time at first. But those 'sometimes' turned into 'most times' within a couple of weeks. The prompting was holding us both back."
          </p>

          {/* Attribution */}
          <p style={{
            fontSize: 12, color: B.muted, letterSpacing: 0.3,
            margin: "0 0 8px", fontFamily: F.main,
          }}>
            — Real parent, BrightKidCo community
          </p>

          {/* Badge */}
          <div style={{
            display: "inline-block",
            background: "#E8F6F4",
            padding: "4px 10px", borderRadius: 999,
            fontSize: 10, fontWeight: 700, letterSpacing: 1,
            textTransform: "uppercase", color: B.teal,
            fontFamily: F.main,
          }}>
            VERBAL · 3-5 YRS · PROMPT-FADING
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 8: DESDEEP-6 Color Block (green gradient)
         ══════════════════════════════════════════════════════ */}
      <ColorBlock from={B.green} to="#FBF7F1" height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 9: LETTER-03 — Pre-K Timeline Context
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "30px 22px" }}>
        {/* H2 */}
        <h2 style={{
          fontSize: 22, lineHeight: 1.2, fontWeight: 700,
          color: B.ink, margin: "0 0 16px", fontFamily: F.main,
        }}>
          Where this fits in the Pre-K timeline
        </h2>

        {/* Body paragraph 1 */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          You've been at this for about six weeks. The school year is approaching. You're moving from "almost trained" to "mostly trained", and this gradual prompt-fading is the step that gets you there.
        </p>

        {/* Body paragraph 2 */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          The kids who arrive at Pre-K with the most independence aren't the ones who were prompted most aggressively. They're the ones whose parents trusted the signal enough to step back at the right moment.
        </p>

        {/* Body paragraph 3 */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0, fontFamily: F.main,
        }}>
          You're already using the body-signal underwear. The mechanism is working. Now it's about giving your child the space to show you what he's learned.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 10: ProductShowcaseMedium — Product Introduction
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "30px 22px" }}>
        <div style={{
          background: B.paper, border: `2px solid ${B.ink}`,
          borderRadius: 20, overflow: "hidden",
          boxShadow: `4px 4px 0 ${B.ink}`,
        }}>
          {/* Two-column layout: image + info */}
          <div style={{ display: "flex", alignItems: "stretch" }}>
            {/* Left column — product image */}
            <div style={{
              width: 140, flexShrink: 0,
              borderRight: `2px solid ${B.ink}`,
              background: "#FFFDF6",
            }}>
              <ImgFrame
                height={220}
                radius={0}
                label="PRODUCT"
                sublabel=""
              />
            </div>

            {/* Right column — product info */}
            <div style={{
              padding: "18px 18px", flex: 1,
              display: "flex", flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div>
                {/* Eyebrow */}
                <div style={{
                  fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase",
                  color: B.tealDeep, fontWeight: 700, marginBottom: 6,
                  fontFamily: F.main,
                }}>
                  THE PRODUCT
                </div>
                {/* Product name */}
                <h3 style={{
                  margin: "0 0 10px", fontSize: 17, fontWeight: 700,
                  lineHeight: 1.2, color: B.ink, fontFamily: F.main,
                }}>
                  3+3 Bundle
                </h3>
                {/* Price */}
                <div style={{
                  display: "flex", alignItems: "baseline", gap: 6,
                  marginBottom: 12,
                }}>
                  <span style={{
                    fontSize: 20, fontWeight: 700, color: B.ink,
                    letterSpacing: -0.3, fontFamily: F.main,
                  }}>$79.99</span>
                  <span style={{
                    fontSize: 11, color: B.soft, fontFamily: F.main,
                  }}>bundle price</span>
                </div>
                {/* Guarantee note */}
                <div style={{
                  fontSize: 11.5, color: B.soft, lineHeight: 1.5,
                  fontFamily: F.main,
                }}>
                  60-day calm-progress guarantee. Return anytime, any reason.
                </div>
              </div>
              {/* CTA button */}
              <a href="#" style={{
                display: "inline-block",
                padding: "11px 18px",
                background: B.ink, color: "#D8F57C",
                fontSize: 13, fontWeight: 700,
                textDecoration: "none", borderRadius: 999,
                textAlign: "center", marginTop: 14,
                letterSpacing: 0.2, fontFamily: F.main,
              }}>
                See the pants →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 11: CTA-5 — Product CTA
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#EDF7ED", padding: "30px 22px", textAlign: "center" }}>
        <a href="#" style={{
          display: "block", padding: "16px 36px",
          background: B.teal, color: "#FFFFFF",
          fontSize: 16, fontWeight: 700,
          letterSpacing: 0.3, textDecoration: "none",
          borderRadius: 6, textAlign: "center",
          fontFamily: F.main,
        }}>
          Continue the Journey
        </a>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 12: TRUST-1 — 60-Day Seal
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "20px 22px", textAlign: "center" }}>
        <p style={{
          fontSize: 13, fontWeight: 500, lineHeight: 1.4,
          color: B.soft, margin: 0, fontFamily: F.main,
        }}>
          60-Day Guarantee — your judgment, no questions
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 13: Divider — 1px #E5DDD3
         ══════════════════════════════════════════════════════ */}
      <TonalRule />

      {/* ══════════════════════════════════════════════════════
         SECTION 14: Lena Sign-Off (Medium — Phase 3 Variant)
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.cream, padding: "30px 22px" }}>
        {/* Signoff text */}
        <p style={{
          fontSize: 15, lineHeight: 1.6, color: B.soft,
          margin: 0, fontFamily: F.main,
        }}>
          With understanding,
        </p>

        {/* Name */}
        <p style={{
          fontSize: 16, fontWeight: 700, color: B.ink,
          marginTop: 12, fontFamily: F.main,
        }}>
          Lena ——
        </p>

        {/* Role */}
        <p style={{
          fontSize: 13, color: B.muted, marginTop: 2,
          fontStyle: "italic", fontFamily: F.main,
        }}>
          Customer Support · Mom of two autistic sons
        </p>

        {/* P.S. 1 — catching parents not yet seeing progress */}
        <div style={{
          marginTop: 16,
          fontFamily: F.display, fontSize: 14, lineHeight: 1.5,
          fontStyle: "italic", color: B.soft,
        }}>
          <span style={{ color: B.ink, fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          If you're not seeing any awareness yet, that's okay too. Some L1 kids need 8-10 weeks before the first consistent signal. If that's where you are, keep the prompting steady and check back in next week. Every child's timeline is different, and yours isn't behind.
        </div>

        {/* P.S. 2 — normalizing reorder */}
        <div style={{
          marginTop: 16,
          fontFamily: F.display, fontSize: 14, lineHeight: 1.5,
          fontStyle: "italic", color: B.soft,
        }}>
          <span style={{ color: B.ink, fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          The 60-day guarantee means you've been trying this risk-free. If you're past 60 days and seeing progress, the 3+3 Bundle holds up, most parents get 6+ months of daily wear before needing to reorder.
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 15: UTIL-04 — Footer
         ══════════════════════════════════════════════════════ */}
      <div style={{
        background: B.cream, padding: "20px 22px",
        borderTop: "1px solid #E5DDD3", textAlign: "center",
      }}>
        <p style={{
          fontSize: 11, lineHeight: 1.5, color: B.muted,
          margin: "0 0 8px", fontFamily: F.main,
        }}>
          <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a> | <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Manage Preferences</a>
        </p>
        <p style={{
          fontSize: 11, lineHeight: 1.5, color: B.muted,
          margin: 0, fontFamily: F.main,
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

Object.assign(window, { Email_pped_22_e4_l1 });
