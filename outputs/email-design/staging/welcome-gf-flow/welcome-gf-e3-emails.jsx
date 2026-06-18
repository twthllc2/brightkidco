/* Email 3 · welcome-01-e3-gf · The Signal That Arrives
   49% SPARK stat email · Day 3 · General Family
   Structure: Hook → Validation → Mechanism → Testimonial → Product → Guarantee → CTA
   Composed of: 3-family FramedImage triptych + 49% stat callout box +
   2 combined-content Letters (validation+mechanism+3-layer | testimonials+product+guarantee+CTA+PS)
   Verbatim copy from welcome-01-e3-gf.md
*/

const Email3 = () => {
  const c = window.FLOW_WELCOME_GF.e3;
  const BG_HERO = "#FFFBF0";
  const BG_LETTER_MECH = "#FFF6E2";
  const BG_LETTER_GUAR = "#EAF6F2";
  const BG_CTA = B.ink;

  // 3 family-quote card accent washes (left-border accent)
  const FAMILY_WASHES = ["#F5F0EB", "#EEF3ED", "#F0EEF5"];
  const FAMILY_SHADOWS = [6, 4, 3];

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* ═══ Hero · PartBadge (49% tilted sticker) + TitleBlock ═══ */}
      <div style={{ position: "relative", padding: "26px 22px 0", textAlign: "center" }}>
        {/* Yellow tilted pill sticker (49%) — sits over the hero, rotated -1.5deg */}
        <div style={{ position: "absolute", top: 18, right: 24, zIndex: 2 }}>
          <PartBadge>{c.partBadge}</PartBadge>
        </div>
        <div style={{ position: "absolute", top: 18, left: 24, zIndex: 2 }}>
          <PartBadge>{c.heroBadge}</PartBadge>
        </div>

        <h1 style={{ fontSize: 40, lineHeight: 1, fontWeight: 700, margin: "44px 0 0", letterSpacing: -0.8 }}>
          {c.h1a}<br/>
          <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.h1b}</span>
        </h1>
        {c.heroSubhead && (
          <p style={{ fontSize: 17, color: B.soft, marginTop: 14, lineHeight: 1.4, fontWeight: 500 }}>
            {c.heroSubhead}
          </p>
        )}
      </div>

      <Band from={BG_HERO} to={BG_HERO} height={24} />

      {/* ═══ Three-Family Triptych (3 FramedImage cards) ═══ */}
      {c.socialProof.map((sp, i) => (
        <div key={i} style={{ margin: i === 0 ? "0 14px 14px" : "0 14px 14px" }}>
          <div style={{
            background: FAMILY_WASHES[i],
            borderLeft: `4px solid ${B.ink}`,
            borderRadius: 18,
            padding: "16px 18px",
          }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: B.tealDeep, fontWeight: 700, marginBottom: 8,
            }}>
              Family {String(i + 1).padStart(2, "0")}
            </div>
            <FramedImage
              shadow={FAMILY_SHADOWS[i]}
              src={i === 0 ? c.family1Image : i === 1 ? c.family2Image : c.family3Image}
              label={`FAMILY ${String(i + 1).padStart(2, "0")} \u00b7 QUOTE CARD`}
              sublabel={sp.alt}
            />
          </div>
        </div>
      ))}

      {/* ═══ Stat Callout Box (49% breakout · ImgFrame placeholder, hard shadow=6) ═══ */}
      <div style={{ margin: "6px 14px 18px" }}>
        <FramedImage shadow={c.stat.shadow}>
          <ImgFrame
            height={220}
            label={c.stat.label}
            sublabel={c.stat.sublabel}
          />
        </FramedImage>
      </div>

      <Band from={BG_HERO} to={BG_LETTER_MECH} />

      {/* ═══ Letter · Validation + Mechanism + 3-Layer Explainer ═══
          10 paragraphs. The 3-Layer explainer is rendered as a numbered list INSIDE this
          Letter block (paras 6-9 of the blueprint), with a section header (para 5).  */}
      <div style={{ background: BG_LETTER_MECH, padding: "24px 24px 28px", fontSize: 15, lineHeight: 1.7, color: B.soft }}>
        <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600 }}>
          {c.letter1First}
        </p>

        {/* paras 1-4: validation + mechanism context */}
        {c.letter1Paras.slice(0, 4).map((p, i) => (
          <p key={`m${i}`} style={{ margin: "0 0 14px" }}>{p}</p>
        ))}

        {/* 3-Layer explainer header */}
        <p style={{ margin: "20px 0 12px", fontSize: 16, color: B.ink, fontWeight: 700 }}>
          The 3-Layer System
        </p>

        {/* 3-layer cards (numbered list) */}
        {c.threeLayer.map((layer, i) => {
          const accents = [B.teal, B.green, "#E8A23D"];
          return (
            <div key={`l${i}`} style={{
              marginBottom: 10, background: "#FFFFFF",
              border: `2px solid ${B.ink}`, borderRadius: 14,
              padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start",
              boxShadow: `3px 3px 0 ${B.ink}`,
            }}>
              <div style={{
                flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
                background: accents[i], color: "#FFFFFF",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, border: `2px solid ${B.ink}`,
              }}>{layer.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: B.ink, marginBottom: 4, lineHeight: 1.3 }}>
                  {layer.name}
                </div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: B.soft }}>
                  {layer.body}
                </p>
              </div>
            </div>
          );
        })}

        {/* closing para (thisn't a pull-up replacement...) */}
        <p style={{ margin: "16px 0 0" }}>{c.letter1Paras[9]}</p>
      </div>

      <Band from={BG_LETTER_MECH} to={BG_LETTER_GUAR} />

      {/* ═══ Letter · Testimonials + Product + Guarantee + CTA + PS ═══
          Letter bg #EAF6F2. Testimonials (paras 0-3: quote + by), product mention (para 4),
          Guarantee (paras 5-6: "60 days." + body), CTA offer (para 7: bundle label), bundle body
          (paras 8-9), secondary 1-pair (paras 10-11), closing ps (para 12).
          Inline patterns: italic quote cards with left-border accent, 60-day circular seal SVG,
          3-dot color-coded checkmark cards, inline CTA button (dark ink bg, lime #D8F57C text,
          17px 32px padding, pill radius).  */}
      <div style={{ background: BG_LETTER_GUAR, padding: "26px 22px 32px", fontSize: 15, lineHeight: 1.7, color: B.soft }}>
        {/* ── Testimonials (italic quote cards w/ left-border accent) ── */}
        {[
          { quote: c.letter2First, by: c.letter2Paras[0], wash: FAMILY_WASHES[0] },
          { quote: c.letter2Paras[1], by: c.letter2Paras[2], wash: FAMILY_WASHES[1] },
          { quote: c.letter2Paras[3], by: c.letter2Paras[4], wash: FAMILY_WASHES[2] },
        ].map((t, i) => (
          <div key={`q${i}`} style={{
            marginBottom: 14, padding: "14px 16px",
            background: "#FFFFFF",
            borderLeft: `4px solid ${t.wash}`,
            border: `2px solid ${B.ink}`,
            borderLeftWidth: 6,
            borderRadius: 14,
            boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            <p style={{
              margin: "0 0 8px", fontSize: 14.5, lineHeight: 1.55, color: B.ink,
              fontStyle: "italic", fontFamily: F.display, fontWeight: 500,
            }}>
              {t.quote}
            </p>
            <div style={{ fontSize: 11.5, color: B.muted, fontWeight: 700, letterSpacing: 0.3 }}>
              {t.by}
            </div>
          </div>
        ))}

        {/* ── Product mention ── */}
        <p style={{ margin: "16px 0 14px", fontSize: 15.5, lineHeight: 1.65, color: B.ink, fontWeight: 600 }}>
          {c.letter2Paras[5]}
        </p>

        {/* ── Guarantee header + sub ── */}
        <div style={{ textAlign: "center", margin: "6px 0 14px" }}>
          <Eyebrow color={B.tealDeep}>Our promise</Eyebrow>
          <h2 style={{ fontSize: 26, lineHeight: 1.2, fontWeight: 700, margin: "6px 0 6px", letterSpacing: -0.4 }}>
            60 days. <span style={{ ...B.gradientText, fontWeight: 700 }}>By your judgment.</span>
          </h2>
          <p style={{ fontSize: 14, color: B.soft, margin: 0, fontStyle: "italic", lineHeight: 1.5 }}>
            {c.guaranteeSub}
          </p>
        </div>

        {/* ── Inline 60-Day circular seal (SVG) ── */}
        <div style={{ display: "flex", justifyContent: "center", margin: "8px 0 14px" }}>
          <div style={{
            position: "relative", width: 200, height: 200,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            background: "#FFFFFF", borderRadius: "50%",
            border: `3px solid ${B.ink}`, boxShadow: `6px 6px 0 ${B.ink}`,
          }}>
            <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0 }}>
              <defs>
                <path id="e3circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text fill={B.tealDeep} style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
                <textPath href="#e3circlePath" startOffset="0">
                  \u00b7 Calm Progress \u00b7 No Forms \u00b7 Real Returns \u00b7 Sixty Full Days \u00b7
                </textPath>
              </text>
            </svg>
            <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 }}>Protected by</div>
            <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, ...B.gradientText }}>60</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: B.ink, letterSpacing: 0.5, marginTop: 2 }}>Calm Days</div>
            <div style={{ fontSize: 10.5, color: B.soft, marginTop: 4, letterSpacing: 0.5 }}>Full refund \u00b7 No forms</div>
          </div>
        </div>

        {/* ── 3-dot color-coded guarantee checkmark cards ── */}
        {c.guaranteePoints.map((p, i) => {
          const accents = [B.teal, B.green, "#E8A23D"];
          return (
            <div key={`gp${i}`} style={{
              marginBottom: 10, background: "#FFFFFF", borderRadius: 14,
              overflow: "hidden", border: `2px solid ${B.ink}`,
              boxShadow: `3px 3px 0 ${B.ink}`,
              display: "flex", alignItems: "stretch",
            }}>
              <div style={{
                width: 38, flexShrink: 0, background: accents[i],
                color: "#FFFFFF", fontSize: 15, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRight: `2px solid ${B.ink}`,
              }}>\u2713</div>
              <div style={{ padding: "12px 16px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 4, lineHeight: 1.3 }}>
                  {p.title}
                </div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: B.soft }}>{p.body}</p>
              </div>
            </div>
          );
        })}

        {/* ── CTA section: bundle offer body + inline CTA button ── */}
        <div style={{ margin: "22px 0 12px", padding: "16px 16px 18px", background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, boxShadow: `4px 4px 0 ${B.ink}` }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: B.ink }}>{c.offer.primary.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: B.ink, ...B.gradientText }}>{c.offer.primary.price}</div>
          </div>
          <p style={{ margin: "0 0 14px", fontSize: 13, lineHeight: 1.55, color: B.soft }}>
            {c.offer.primary.note}
          </p>
          <p style={{ margin: "0 0 14px", fontSize: 13.5, lineHeight: 1.6, color: B.ink }}>
            {c.letter2Paras[9]}
          </p>
          {/* Inline CTA button (dark ink bg, lime #D8F57C button text, 17px 32px padding, pill radius) */}
          <div style={{ textAlign: "center", marginTop: 6 }}>
            <a href={c.offer.primary.href} style={{
              display: "inline-block", padding: "17px 32px",
              background: B.ink, color: "#D8F57C", fontSize: 15.5, fontWeight: 700,
              textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
            }}>{c.ctaButton} \u2192</a>
          </div>
          <p style={{ margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.55, color: B.soft, fontStyle: "italic", textAlign: "center" }}>
            {c.letter2Paras[10]}
          </p>
          <p style={{ margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.55, color: B.muted, textAlign: "center" }}>
            {c.letter2Paras[11]}
          </p>
        </div>

        {/* PS line */}
        <p style={{ margin: "18px 0 0", fontSize: 13, color: B.soft, fontStyle: "italic" }}>
          <span style={{ color: B.tealDeep, fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>Next time:</span>
          {c.letter2Paras[12].replace(/^Next time:\s*/i, "")}
        </p>
      </div>

      <Band from={BG_LETTER_GUAR} to={BG_CTA} height={50} />

      {/* ═══ Signoff (reads from window.FLOW_WELCOME_GF_SHARED.signoff) ═══ */}
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email3 });
