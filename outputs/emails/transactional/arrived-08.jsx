/* Transactional — Arrived & Welcome — E4 | Cross-Level
   Wireframe: wireframes/transactional/arrived-08.md
   Copy: copy/transactional/arrived-08.md
   Strategy: strategy-map.json → transactional.emails.e4
   Generated: 2026-06-09
*/

const Email_transactional_arrived_08 = () => (
  <EmailShell preheader="It's here. Now what? Week 1 is about exploring, here's what to expect (and what not to worry about)." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: BRAND HEADER — Logo + Tagline
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 20px 20px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <p style={{
        fontFamily: F.main, fontSize: 12, fontWeight: 400,
        color: "#8A9B9D", margin: "6px 0 0", letterSpacing: 0.5,
      }}>
        Body-Signal Learning
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-12 Before Snapshot
       Editorial product shot + headline + subheadline
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "10px 30px 0" }}>
      {/* Editorial product shot placeholder */}
      <ImgFrame
        height={260}
        label="EDITORIAL PRODUCT SHOT"
        sublabel="Body-Signal underwear on warm cream linen, casually worn-looking, slightly angled for depth"
        radius={12}
      />
      {/* Headline */}
      <h1 style={{
        fontFamily: F.main, fontSize: 42, fontWeight: 700,
        lineHeight: 1.1, letterSpacing: -0.5, color: "#1F2D2F",
        margin: "28px 0 12px", textAlign: "center",
      }}>
        {"It\u2019s here. Now what?"}
      </h1>
      {/* Subheadline */}
      <p style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 400,
        lineHeight: 1.5, color: "#4A6568",
        margin: "0 0 40px", textAlign: "center",
      }}>
        Week 1 is about exploring. Here&#x2019;s what to expect.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: EMERALD SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "10px 30px 20px", textAlign: "center" }}>
      <svg width="100%" height="20" viewBox="0 0 360 20" preserveAspectRatio="xMidYMid meet">
        <path d="M0,10 C40,2 60,18 100,10 C140,2 160,18 200,10 C240,2 260,18 300,10 C320,5 340,15 360,10" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: HOOK — LETTER-04 Body Copy
       Verbatim from copy/transactional/arrived-08.md Section 1
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 30px 40px" }}>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
        fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
        margin: "0 0 14px",
      }}>
        Your package is here. The Body-Signal underwear, the cotton, the layers, the whole thing. If you&#x2019;re feeling a mix of excitement and hesitation, that&#x2019;s the right combination. Every parent who opens that first box has the same question: &ldquo;Now what?&rdquo;
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
        fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
        margin: "0 0 14px",
      }}>
        And the answer might surprise you: for the first few days, you just let your child wear them. That&#x2019;s it. No timer. No prompts. No pressure. Because the underwear is the teacher, not you.
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
        fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
        margin: 0,
      }}>
        Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or you&#x2019;re still figuring it out, if they don&#x2019;t feel when they need to go, the Body-Signal Learning Layer starts doing its work from the first wear. Each &lsquo;<span style={{ color: "#5DD07A", fontStyle: "italic" }}>uh-oh</span>&rsquo; sensation, 30 to 60 seconds of gentle feedback, builds a neural pathway that no sticker chart, no scheduled sit, and no pull-up has ever been able to create.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: EMERALD SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "10px 30px 20px", textAlign: "center" }}>
      <svg width="100%" height="20" viewBox="0 0 360 20" preserveAspectRatio="xMidYMid meet">
        <path d="M0,10 C40,2 60,18 100,10 C140,2 160,18 200,10 C240,2 260,18 300,10 C320,5 340,15 360,10" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: VALIDATION — Emerald left border block
       Verbatim from copy/transactional/arrived-08.md Section 2
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 30px 40px" }}>
      <div style={{ borderLeft: "2px solid rgba(93, 208, 122, 0.3)", paddingLeft: 20 }}>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
          fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
          margin: "0 0 14px",
        }}>
          I know the skepticism you&#x2019;re carrying. You&#x2019;ve read the product pages. You&#x2019;ve watched the videos. But after years of trying, whether it&#x2019;s been a few months or a few years, that voice in your head says, &ldquo;What if this another thing that doesn&#x2019;t work?&rdquo;
        </p>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
          fontWeight: 700, lineHeight: 1.6, color: "#1F2D2F",
          margin: "0 0 14px", textAlign: "center",
        }}>
          That voice isn&#x2019;t cynicism. It&#x2019;s experience. And it&#x2019;s valid.
        </p>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
          fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
          margin: 0,
        }}>
          Some kids show their first <span style={{ color: "#5DD07A", fontStyle: "italic" }}>signal</span>, a pause, a look down, a step toward the bathroom, in week 2 or 3. Some take 8 weeks. Both are normal. Your child&#x2019;s nervous system isn&#x2019;t behind schedule; it&#x2019;s learning a new language, the language of body <span style={{ color: "#5DD07A", fontStyle: "italic" }}>signal</span>s, and that takes repetition, not rushing.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: EMERALD SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "10px 30px 20px", textAlign: "center" }}>
      <svg width="100%" height="20" viewBox="0 0 360 20" preserveAspectRatio="xMidYMid meet">
        <path d="M0,10 C40,2 60,18 100,10 C140,2 160,18 200,10 C240,2 260,18 300,10 C320,5 340,15 360,10" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: MECHANISM — EDU-8 3-Layer System
       Layer cards + verbatim body copy from Section 3
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 30px 40px" }}>
      {/* Eyebrow */}
      <div style={{
        fontFamily: F.main, fontSize: 10.5, fontWeight: 700,
        letterSpacing: 2, textTransform: "uppercase",
        color: "#2BAEB4", marginBottom: 14,
      }}>
        THE MECHANISM
      </div>

      {/* Layer 1: Signal Creation */}
      <div style={{
        background: "#FFFFFF", borderRadius: 12, padding: "16px 20px",
        borderLeft: "2px solid #5DD07A", boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        marginBottom: 12,
      }}>
        <div style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13,
          fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: "#1F2D2F", marginBottom: 6,
        }}>
          LAYER 1: SIGNAL CREATION
        </div>
        <div style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 15,
          lineHeight: 1.5, color: "#4A6568",
        }}>
          Cotton inner for gentle first-contact awareness
        </div>
      </div>

      {/* Layer 2: Smart Absorption */}
      <div style={{
        background: "#FFFFFF", borderRadius: 12, padding: "16px 20px",
        borderLeft: "2px solid #5DD07A", boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        marginBottom: 12,
      }}>
        <div style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13,
          fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: "#1F2D2F", marginBottom: 6,
        }}>
          LAYER 2: SMART ABSORPTION
        </div>
        <div style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 15,
          lineHeight: 1.5, color: "#4A6568",
        }}>
          Protects without wicking the signal away
        </div>
      </div>

      {/* Layer 3: Leak Resistance */}
      <div style={{
        background: "#FFFFFF", borderRadius: 12, padding: "16px 20px",
        borderLeft: "2px solid #5DD07A", boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        marginBottom: 20,
      }}>
        <div style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13,
          fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: "#1F2D2F", marginBottom: 6,
        }}>
          LAYER 3: LEAK RESISTANCE
        </div>
        <div style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 15,
          lineHeight: 1.5, color: "#4A6568",
        }}>
          Outer barrier for leak resistance
        </div>
      </div>

      {/* Body copy — verbatim */}
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
        fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
        margin: "0 0 14px",
      }}>
        Here&#x2019;s what happens physically: the 3-layer system, cotton inner for gentle first-contact awareness, a smart absorption layer that protects without wicking the <span style={{ color: "#5DD07A", fontStyle: "italic" }}>signal</span> away, and an outer barrier for leak resistance, creates gentle sensation that lasts about 30 to 60 seconds long.
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
        fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
        margin: "0 0 14px",
      }}>
        Unlike pull-ups, which wick moisture away to keep your child &ldquo;too dry to learn,&rdquo; the Body-Signal Learning Layer gives the brain the information it&#x2019;s been missing.
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
        fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
        margin: 0,
      }}>
        Nicholson et al. (2019) documented what many parents already sense: autistic children process internal body signals, like bladder fullness, differently. The <span style={{ color: "#5DD07A", fontStyle: "italic" }}>signal</span> arrives; it just arrives differently. This underwear is designed around that neurological fact, not despite it.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: EMERALD SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "10px 30px 20px", textAlign: "center" }}>
      <svg width="100%" height="20" viewBox="0 0 360 20" preserveAspectRatio="xMidYMid meet">
        <path d="M0,10 C40,2 60,18 100,10 C140,2 160,18 200,10 C240,2 260,18 300,10 C320,5 340,15 360,10" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: WHAT TO EXPECT IN WEEK 1
       Mint callout box + parent quote card
       Verbatim from copy/transactional/arrived-08.md Section 4
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 30px 40px" }}>
      {/* Mint callout box */}
      <div style={{
        background: "#DBFFCD", borderRadius: 16,
        borderLeft: "4px solid #5DD07A", padding: 20,
        marginBottom: 20,
      }}>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
          fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
          margin: "0 0 14px",
        }}>
          Week 1 is exploration. Your child may notice the underwear. They may ignore it completely. Both are fine. Let them wear it for 1-2 hours at home. No timer. No &ldquo;did you feel anything?&rdquo; Just wear, go about the day, change when wet, repeat.
        </p>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
          fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
          margin: 0,
        }}>
          If nothing happens in the first week, good. That&#x2019;s not failure. That&#x2019;s your child&#x2019;s nervous system registering a new sensation for the first time. The real magic starts when the brain recognizes that sensation consistently, usually in weeks 2-4 for some kids, 6-8 for others.
        </p>
      </div>

      {/* Parent quote card */}
      <div style={{
        background: "#E8D5C4", borderRadius: 12, padding: 20,
      }}>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 19,
          fontWeight: 400, fontStyle: "italic", lineHeight: 1.5,
          color: "#4A6568", margin: "0 0 10px",
        }}>
          <span style={{ color: "#5DD07A", fontWeight: 700, fontStyle: "normal" }}>&ldquo;</span>He paused. He felt something. That never happened before.<span style={{ color: "#5DD07A", fontWeight: 700, fontStyle: "normal" }}>&rdquo;</span>
        </p>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
          fontWeight: 400, color: "#8A9B9D", margin: 0,
        }}>
          &#x2014; Parent of a 5-year-old
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: EMERALD SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "10px 30px 20px", textAlign: "center" }}>
      <svg width="100%" height="20" viewBox="0 0 360 20" preserveAspectRatio="xMidYMid meet">
        <path d="M0,10 C40,2 60,18 100,10 C140,2 160,18 200,10 C240,2 260,18 300,10 C320,5 340,15 360,10" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: GUARANTEE — TRUST-1 60-Day Seal
       Verbatim from copy/transactional/arrived-08.md Section 5
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 30px 40px" }}>
      <div style={{
        border: "2px solid #2BAEB4", borderRadius: 12,
        padding: 20,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 20, fontWeight: 700,
          lineHeight: 1.3, color: "#1F2D2F",
          margin: "0 0 12px",
        }}>
          60 days to try it. By your judgment.
        </p>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17,
          fontWeight: 400, lineHeight: 1.6, color: "#4A6568",
          margin: 0,
        }}>
          If you don&#x2019;t see a shift, no pause, no awareness, no change, full refund. The guarantee isn&#x2019;t a sales tactic. It&#x2019;s the only honest thing to offer when the outcome depends on your child&#x2019;s nervous system, not on your effort.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: EMERALD SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "10px 30px 20px", textAlign: "center" }}>
      <svg width="100%" height="20" viewBox="0 0 360 20" preserveAspectRatio="xMidYMid meet">
        <path d="M0,10 C40,2 60,18 100,10 C140,2 160,18 200,10 C240,2 260,18 300,10 C320,5 340,15 360,10" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: CTA — CTA-5 Product CTA
       Verbatim from copy/transactional/arrived-08.md Section 6
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 30px 24px", textAlign: "center" }}>
      {/* Primary CTA button */}
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: "#5DD07A",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "0.02em",
        textDecoration: "none",
        borderRadius: 999,
        height: 48,
        lineHeight: "48px",
        textAlign: "center",
      }}>
        See what fits your routine &#x2192;
      </a>
      {/* Secondary link */}
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
        fontWeight: 400, color: "#2BAEB4",
        margin: "16px 0 0",
      }}>
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>
          Learn more about how the body signal works
        </a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 15: LENA SIGN-OFF — UTIL-05 Custom
       Dark card with avatar, signature, two P.S. lines
       Verbatim from copy/transactional/arrived-08.md
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)",
          opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with teal gradient ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              border: "1.5px solid #1F2D2F",
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support &#xB7; Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Handwritten signature — Caveat font, emerald accent */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              With understanding,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#5DD07A",
              letterSpacing: -0.5, marginTop: 2,
            }}>
              Lena
            </div>
          </div>
          {/* Tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#5DD07A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. 1 — personal story */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic", marginBottom: 10,
        }}>
          <span style={{ color: "#5DD07A", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          I have two autistic sons. One&#x2019;s 6, still in the middle of it. The other took us until he was almost 8. If your child is anywhere on this curve, that&#x2019;s normal here.
        </div>

        {/* P.S. 2 — guarantee reminder */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic",
        }}>
          <span style={{ color: "#5DD07A", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          60 days to try it. By your judgment.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 16: FOOTER — CAN-SPAM Compliant
       Verbatim from copy/transactional/arrived-08.md
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "20px 22px", textAlign: "center" }}>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12,
        fontWeight: 700, color: "#8A9B9D", margin: "0 0 8px",
      }}>
        BrightKidCo
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12,
        color: "#8A9B9D", margin: "0 0 4px",
      }}>
        123 Commerce Street, Suite 200
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12,
        color: "#8A9B9D", margin: "0 0 4px",
      }}>
        San Francisco, CA 94111
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12,
        color: "#8A9B9D", margin: "0 0 14px",
      }}>
        United States
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12,
        color: "#8A9B9D", margin: "0 0 6px",
      }}>
        If you&#x2019;d rather not hear from us, <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>unsubscribe here</a>.
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12,
        color: "#8A9B9D", margin: 0,
      }}>
        Reply to this email. Lena reads every response.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 17: EASTER EGG — 4-Part Signal Dot Progression
       Cross-level: GF(hollow) L1(half) L2(full) L3(scattered)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "12px 24px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, alignItems: "center" }}>
        {/* Dot 1: hollow — GF */}
        <div style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid rgba(93,208,122,0.4)" }} />
        {/* Dot 2: half filled — L1 */}
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(93,208,122,0.6)" }} />
        {/* Dot 3: full — L2 */}
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A" }} />
        {/* Dot 4: scattered — L3 */}
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(93,208,122,0.3)" }} />
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_transactional_arrived_08 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["transactional/arrived-08"] = Email_transactional_arrived_08;
