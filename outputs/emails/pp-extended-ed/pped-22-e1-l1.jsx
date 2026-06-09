/* PP-Extended Education — E1 | Level 1 (Sarah)
   Wireframe: wireframes/pp-extended-ed/pped-22-e1-l1.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e1-l1
   Generated: 2026-06-09
*/

const Email_pped_22_e1_l1 = () => {
  const B = window.BRAND;
  const F = window.FONT;

  /* ── DESDEEP-6: Color Block divider (warm gradient amber→cream) ── */
  const ColorBlock = ({ height = 16 }) => (
    <div style={{ padding: "12px 22px 0" }}>
      <div style={{
        height,
        background: "linear-gradient(135deg, #FFD866 0%, #FBF7F1 100%)",
        borderRadius: 8, opacity: 0.35,
      }} />
    </div>
  );

  /* ── Thin rule ── */
  const TonalRule = () => (
    <div style={{ padding: "20px 0 0" }}>
      <div style={{ height: 1, background: "#E8DED5" }} />
    </div>
  );

  return (
    <EmailShell preheader="Your child's brain processes the signal differently. Here's what that means for the Pre-K deadline, and how the right approach is already working." bg={B.paper}>

      {/* ══════════════════════════════════════════════════════
         Easter Egg — Clock Tick Marks
         Top-right corner, 12 thin gray ticks, 30° intervals
         #9AA8A7 at 15% opacity, one emerald tick at 3 o'clock
         ══════════════════════════════════════════════════════ */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", top: 12, right: 12,
          width: 40, height: 40, zIndex: 1,
        }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              const is3oclock = i === 3;
              const color = is3oclock ? "#5DD07A" : "#9AA8A7";
              const opacity = is3oclock ? 0.6 : 0.15;
              const x1 = 20 + 16 * Math.sin(angle);
              const y1 = 20 - 16 * Math.cos(angle);
              const x2 = 20 + 18 * Math.sin(angle);
              const y2 = 20 - 18 * Math.cos(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={color} strokeWidth={is3oclock ? 1.5 : 0.8}
                  opacity={opacity} strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════════
           SECTION 1: HEADER
           ══════════════════════════════════════════════════════ */}
        <Header bg={B.paper} />

        {/* ══════════════════════════════════════════════════════
           SECTION 2: HERO — HERO-17 Social Proof Hero
           ══════════════════════════════════════════════════════ */}
        <div style={{ padding: "0 22px", background: B.paper, textAlign: "center" }}>
          {/* Eyebrow */}
          <div style={{
            fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
            color: B.teal, fontWeight: 700, marginBottom: 10,
            paddingTop: 20, fontFamily: F.main,
          }}>
            THE SIGNAL GAP
          </div>

          {/* Headline with emerald hairline bracket decoration */}
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Emerald bracket left decoration */}
            <div style={{
              position: "absolute", left: -14, top: 4,
              width: 3, height: "80%",
              background: B.green, borderRadius: 2,
            }} />
            <h1 style={{
              fontSize: 32, lineHeight: 1.15, fontWeight: 400,
              letterSpacing: -0.5, color: B.ink, margin: "0 0 16px",
              fontFamily: F.main,
            }}>
              The body-signal gap that matters most
            </h1>
          </div>

          {/* Hero image — child in calm environment */}
          <div style={{ marginBottom: 16 }}>
            <ImgFrame
              height={200}
              radius={20}
              label="HERO · LIFESTYLE"
              sublabel="Child in calm environment, warm natural light, soft focus"
            />
          </div>

          {/* Subhead with 3px emerald left border */}
          <div style={{
            borderLeft: `3px solid ${B.green}`,
            paddingLeft: 14, marginBottom: 8, textAlign: "left",
          }}>
            <p style={{
              fontSize: 17, color: B.soft, lineHeight: 1.5,
              fontWeight: 400, margin: 0, fontFamily: F.main,
            }}>
              You're in week three now. Maybe you've seen a pause... I want to talk about something that's probably on your mind: Pre-K readiness.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 3: DESDEEP-6 Color Block Divider
         ══════════════════════════════════════════════════════ */}
      <ColorBlock height={16} />

      {/* ══════════════════════════════════════════════════════
         SECTION 4: LETTER-03 Letter + Pull-Quote (Hook + Validation)
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0", background: B.paper, fontFamily: F.main }}>

        {/* Hook paragraph 1 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          Most parents hear &ldquo;Pre-K readiness&rdquo; and think it means one thing, can he walk into that classroom in underwear? Can he tell the teacher when he needs to go? But for an autistic child with body signal differences, the question isn't about behavior compliance. It's about whether his brain receives the body signal in time.
        </p>

        {/* Hook paragraph 2 — bold anchor */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.ink, fontWeight: 600, margin: "0 0 14px" }}>
          And that's a fundamentally different problem than the one Pre-K readiness checklists are built for.
        </p>

        {/* Thin rule */}
        <div style={{ height: 1, background: "#E8DED5", margin: "16px 0" }} />

        {/* Validation paragraph 1 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          If you've been worried that he's &ldquo;almost trained&rdquo; for months, that he talks about the potty but can't reliably act on it, I want you to hear this: that's not a failure of effort. It's not a failure of parenting. It's a signal-timing gap.
        </p>

        {/* Validation paragraph 2 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          Research from <span style={{ fontWeight: 600 }}>Nicholson et al. (2019)</span> showed that autistic children process internal body signals like bladder fullness differently from typically developing kids. The signal arrives, just milliseconds too late. By the time he says &ldquo;I need to go,&rdquo; it's already happening. That's why timed sits and sticker charts couldn't solve this. They assumed a signal that wasn't reaching his brain in time.
        </p>

        {/* Pull Quote — Fraunces italic */}
        <div style={{
          padding: "16px 16px",
          borderLeft: `3px solid ${B.green}`,
          borderRadius: 4, margin: "8px 0",
        }}>
          <p style={{
            fontFamily: F.display, fontSize: 22, lineHeight: 1.4,
            fontStyle: "italic", fontWeight: 400, color: B.ink,
            margin: 0,
          }}>
            You didn't fail. The methods weren't built for his nervous system.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 5: DESDEEP-6 Color Block Divider
         ══════════════════════════════════════════════════════ */}
      <ColorBlock height={12} />

      {/* ══════════════════════════════════════════════════════
         SECTION 6: EDU-8 Mechanism Diagram — Interoception
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0", background: B.paper, fontFamily: F.main }}>

        {/* Eyebrow */}
        <div style={{
          fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
          color: B.teal, fontWeight: 700, marginBottom: 10,
        }}>
          THE INTEROCEPTION PATHWAY
        </div>

        {/* Interoception Pathway Diagram — 3 zones with animated pulse nodes */}
        <div style={{
          background: "#FBF7F1", borderRadius: 16,
          padding: "20px 16px 16px", marginBottom: 16,
        }}>
          <svg width="100%" height="180" viewBox="0 0 380 180">
            {/* Zone 1: Body Signal */}
            <circle cx="60" cy="65" r="30" fill="#FFD866" opacity="0.15" />
            <circle cx="60" cy="65" r="18" fill="#FFD866" opacity="0.3" />
            <circle cx="60" cy="65" r="10" fill="#FFD866" opacity="0.5">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.3;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="60" y="110" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>The signal exists.</text>

            {/* Zone 2: The Gap — dotted path, dimmed nodes */}
            <line x1="92" y1="65" x2="135" y2="65" stroke={B.muted} strokeWidth="1.5" strokeDasharray="4,4" opacity="0.35" />
            <circle cx="115" cy="65" r="5" fill={B.muted} opacity="0.2" />
            <line x1="145" y1="65" x2="190" y2="65" stroke={B.muted} strokeWidth="1.5" strokeDasharray="4,4" opacity="0.25" />
            <circle cx="168" cy="65" r="5" fill={B.muted} opacity="0.12" />
            <text x="155" y="110" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>But the brain doesn't receive</text>
            <text x="155" y="122" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>it in time.</text>

            {/* Zone 3: BSL Bridge — solid teal path */}
            <line x1="200" y1="65" x2="270" y2="65" stroke={B.teal} strokeWidth="2.5" opacity="0.65" />
            <circle cx="235" cy="65" r="5" fill={B.teal} opacity="0.45">
              <animate attributeName="opacity" values="0.45;0.7;0.45" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="285" cy="65" r="24" fill={B.teal} opacity="0.1" />
            <circle cx="285" cy="65" r="14" fill={B.teal} opacity="0.25" />
            <circle cx="285" cy="65" r="6" fill={B.teal} opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.3;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="285" y="110" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>The BSL Layer builds</text>
            <text x="285" y="122" textAnchor="middle" fontSize="9" fill={B.soft} fontFamily={F.main}>the bridge.</text>
          </svg>
        </div>

        {/* Mechanism paragraph 1 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          <span style={{ fontWeight: 600, color: B.ink }}>Interoception</span> is the &ldquo;eighth sensory system&rdquo; — the sense that tells us when we're hungry, thirsty, or need the bathroom. For autistic children, that network has a delay: the signal from the bladder travels, but doesn't arrive at the brain's &ldquo;action center&rdquo; with enough lead time.
        </p>

        {/* Mechanism paragraph 2 */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" }}>
          This is where the Body-Signal Learning Layer comes in. The BSL layer creates a gentle, sustained &ldquo;uh-oh&rdquo; sensation lasting 30-60 seconds after every accident. It creates feedback, over and over, that his brain can finally connect to the action of using the potty.
        </p>

        {/* Bold anchor paragraph */}
        <p style={{ fontSize: 17, lineHeight: 1.7, color: B.ink, fontWeight: 600, margin: "0 0 16px" }}>
          Think of it like this: you can't teach someone to catch a ball in the dark. The BSL layer turns the lights on. Repetition builds the neural pathway — and that's why Pre-K readiness isn't about training. It's about wiring.
        </p>

        {/* 3-Layer Product Infographic */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 0,
          marginBottom: 8,
        }}>
          {/* Layer 1: Cotton Inner */}
          <div style={{
            background: "#FFFDF6", border: `1.5px solid ${B.ink}`,
            borderRadius: "12px 0 0 12px", padding: "14px 12px",
            textAlign: "center", flex: 1, maxWidth: 120,
          }}>
            <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 4 }}>Layer 1</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: B.ink }}>Cotton Inner</div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex", alignItems: "center",
            padding: "0 2px", color: B.teal,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M4 8h8M9 5l3 3-3 3" stroke={B.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Layer 2: Smart Core */}
          <div style={{
            background: "#FFFDF6", border: `1.5px solid ${B.ink}`,
            borderLeft: "none", borderRight: "none",
            padding: "14px 12px", textAlign: "center",
            flex: 1, maxWidth: 120,
          }}>
            <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: B.green, fontWeight: 700, marginBottom: 4 }}>Layer 2</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: B.ink }}>Smart Core</div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex", alignItems: "center",
            padding: "0 2px", color: B.teal,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M4 8h8M9 5l3 3-3 3" stroke={B.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Layer 3: Outer Barrier */}
          <div style={{
            background: "#FFFDF6", border: `1.5px solid ${B.ink}`,
            borderRadius: "0 12px 12px 0", padding: "14px 12px",
            textAlign: "center", flex: 1, maxWidth: 120,
          }}>
            <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 }}>Layer 3</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: B.ink }}>Outer Barrier</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 7: DESDEEP-6 Color Block Divider
         ══════════════════════════════════════════════════════ */}
      <ColorBlock height={12} />

      {/* ══════════════════════════════════════════════════════
         SECTION 8: SP-13 Review of the Week — Testimonial
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0" }}>
        <div style={{
          background: B.cream, borderRadius: 20,
          boxShadow: `6px 6px 0 ${B.ink}`,
          padding: "24px 22px",
        }}>
          {/* Decorative quote marks — B.green, 40px */}
          <div style={{
            fontSize: 40, color: B.green, lineHeight: 1,
            marginBottom: 8, fontFamily: F.display,
          }}>
            &ldquo;
          </div>

          {/* Quote text — Jake testimonial */}
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: B.ink,
            fontWeight: 500, fontStyle: "italic",
            margin: "0 0 16px",
          }}>
            Sarah's son Jake was 4, verbal, &lsquo;almost trained&rsquo; for five months. He could talk about the potty, he could sit when prompted, but he never initiated. After three weeks in BrightKidCo underwear, his mom noticed something: he paused mid-play, looked down, and walked to the potty on his own for the first time. She said, &lsquo;It wasn't a full success. But he FELT something. That never happened before.&rsquo;
          </p>

          {/* Attribution — emerald signal dot */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 4, height: 4, borderRadius: "50%",
              background: B.green, flexShrink: 0,
            }} />
            <p style={{
              fontSize: 13, color: B.muted, fontStyle: "italic",
              margin: 0,
            }}>
              Sarah, L1 mom, son Jake (4)
            </p>
          </div>
        </div>

        {/* Commentary line */}
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: B.soft,
          margin: "16px 0 0", fontFamily: F.main,
        }}>
          That's the interoception pathway beginning to connect. Weeks, not days. Small signs before big wins.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 9: DESDEEP-6 Color Block Divider
         ══════════════════════════════════════════════════════ */}
      <ColorBlock height={12} />

      {/* ══════════════════════════════════════════════════════
         SECTION 10: ProductShowcaseMedium — Product Introduction
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "8px 22px 0" }}>
        <div style={{
          background: B.paper, border: `2px solid ${B.ink}`,
          borderRadius: 20, overflow: "hidden",
          boxShadow: `6px 6px 0 ${B.ink}`,
        }}>
          {/* Eyebrow + Title */}
          <div style={{ padding: "20px 20px 0", textAlign: "center" }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
              color: B.teal, fontWeight: 700, marginBottom: 8,
            }}>
              THE PRODUCT
            </div>
            <h2 style={{
              fontSize: 24, lineHeight: 1.15, fontWeight: 400,
              letterSpacing: -0.3, color: B.ink, margin: "0 0 8px",
            }}>
              3+3 Bundle —{" "}
              <span style={{ ...B.gradientText, fontWeight: 700 }}>Body-Signal Learning</span>
            </h2>
            <p style={{
              fontSize: 14, color: B.soft, lineHeight: 1.5,
              margin: "0 0 14px",
            }}>
              Six pairs building the neural pathway.
            </p>
          </div>

          {/* Hero shot */}
          <div style={{ padding: "0 14px" }}>
            <ImgFrame
              height={240}
              radius={20}
              label="PRODUCT · HERO SHOT"
              sublabel="BrightKidCo Body-Signal Learning training pant, product flat lay"
            />
          </div>

          {/* Description */}
          <div style={{ padding: "16px 20px 0" }}>
            <p style={{
              fontSize: 17, lineHeight: 1.7, color: B.soft,
              margin: "0 0 16px",
            }}>
              Each wear session gives your child's brain 30-60 seconds of gentle sensation that lasts.
            </p>
          </div>

          {/* CTA button + secondary link */}
          <div style={{ padding: "0 20px 20px" }}>
            <a href="#" style={{
              display: "block", padding: "16px 24px",
              background: B.teal, color: "#D8F57C",
              fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
              textDecoration: "none", borderRadius: 999,
              textAlign: "center", width: 260, margin: "0 auto",
              boxSizing: "border-box",
            }}>
              See how body signals build readiness →
            </a>

            <p style={{
              fontSize: 14, color: B.teal, textAlign: "center",
              margin: "12px 0 0",
            }}>
              <a href="#" style={{ color: B.teal, textDecoration: "none" }}>
                Track your child's progress, download the awareness journal
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 11: TRUST-1 — 60-Day Seal
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "16px 22px 0" }}>
        <div style={{
          background: B.cream, borderRadius: 20,
          border: `2px solid ${B.green}`,
          padding: 24, textAlign: "center",
        }}>
          <p style={{
            fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: 0,
          }}>
            You're already covered by the 60-day guarantee. If nothing shifts, your judgment is the only one that matters, full refund, no questions.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 12: Tonal Shift Rule — 1px #E8DED5
         ══════════════════════════════════════════════════════ */}
      <TonalRule />

      {/* ══════════════════════════════════════════════════════
         Easter Egg — Open Door Bridge Icon
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "16px 22px 0", textAlign: "center" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" style={{ opacity: 0.3 }}>
          <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="#DBFFCD" strokeWidth="1.5" fill="none" />
          <rect x="9" y="6" width="6" height="14" rx="3" stroke="#DBFFCD" strokeWidth="1.5" fill="none" />
          <line x1="12" y1="6" x2="12" y2="20" stroke="#DBFFCD" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 13: Signoff — Lena (FULL variant)
         ══════════════════════════════════════════════════════ */}
      <div style={{ padding: "12px 22px 0" }}>
        <div style={{ background: B.ink, borderRadius: 20 }}>
          <div style={{
            position: "relative",
            background: "#1F2A2C",
            border: "1.5px solid #2F3D40",
            borderRadius: 20,
            padding: "26px 24px 24px",
            overflow: "hidden",
          }}>
            {/* Top gradient accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 4,
              background: B.gradient, opacity: 0.9,
            }} />

            {/* Avatar + Name/Role */}
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
                <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }}>
                  A note from
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
                  Lena
                </div>
                <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
                  Customer Support · Mom of two autistic sons
                </div>
              </div>
            </div>

            {/* Dashed divider */}
            <div style={{ borderTop: "1.5px dashed #3A4547", paddingTop: 16, marginBottom: 16 }} />

            {/* Full signoff text — personal story */}
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#B8CACD", margin: "0 0 14px" }}>
              I have two autistic sons. One trained at 6, the other at almost 8. The 6-year-old showed his first real sign of body awareness around week 4 — a pause, a look, nothing dramatic. But I remember that pause like it was yesterday. It was the first time his brain and body had connected on their own.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#B8CACD", fontWeight: 600, margin: "0 0 14px" }}>
              Pre-K is coming. You still have time. Keep the reps going.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#B8CACD", margin: "0 0 16px" }}>
              Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.
            </p>

            {/* Signature — Caveat font */}
            <p style={{
              fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5,
              margin: 0,
            }}>
              Lena ——
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 14: FOOTER — Standard
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: B.paper, padding: "30px 24px 30px", textAlign: "center" }}>
        {/* Tagline */}
        <div style={{
          fontFamily: F.display, fontSize: 20, fontStyle: "italic",
          fontWeight: 500, color: B.ink, marginBottom: 30,
          letterSpacing: -0.2,
        }}>
          Calm progress, one day at a time.
        </div>

        {/* Footer links */}
        {["Shop", "FAQ", "Contact"].map((l, i) => (
          <div key={i} style={{ fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 }}>
            <a href="#" style={{ color: B.ink, textDecoration: "none" }}>{l}</a>
          </div>
        ))}

        {/* Social icons — Instagram, TikTok */}
        <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
          <a href="#">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" />
            </svg>
          </a>
          <a href="#">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
              <path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Unsubscribe + address + reply prompt */}
        <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
          If you no longer wish to receive these emails, <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>unsubscribe here</a>.<br/>
          <span style={{ fontSize: 11 }}>Questions? Reply to this email, Lena reads every response.</span><br/>
          <span style={{ fontSize: 11 }}>BrightKidCo LLC · 548 Market St, PMB 72296, San Francisco, CA 94104</span>
        </div>

        {/* Gradient accent bar */}
        <div style={{ margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_pped_22_e1_l1 });
