/* welcome-01-e2-gf · Email 2 component
   Why sticker charts fail some kids
   Body-signal mechanism explained
*/

const Email2 = () => {
  const c = window.FLOW_WELCOME_GF.e2;
  const BG_HERO = "#FFFBF0";
  const BG_LETTER = "#FFF6E2";
  const BG_MECHANISM = "#EAF6F2";
  const BG_FAILED = "#EAF6F2";
  const BG_CTA = "#1F2D2F";

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Standalone PartBadge (e2 introduces this BEFORE the title, per e1/e2/e5 pattern) */}
      <div style={{ background: BG_HERO, padding: "24px 22px 0", textAlign: "center" }}>
        <PartBadge>{c.partBadge}</PartBadge>
      </div>

      <TitleBlock
        badge={c.heroBadge}
        part1={c.h1a}
        part2={c.h1b}
        subhead={c.heroSubhead}
      />

      {/* Hero . circular teal frame, hard shadow 6 */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={240}
          label={c.heroLabel}
          sublabel={c.heroSublabel}
          shadow={c.heroShadow}
        />
      </div>

      <Band from={BG_HERO} to={BG_LETTER} />

      {/* Letter with 4px emerald left border (Failed Methods Recognition paragraph treatment) */}
      <div style={{ background: BG_LETTER, borderLeft: "4px solid #039902", paddingLeft: 18 }}>
        <Letter
          bg={BG_LETTER}
          first={c.letter1First}
          paras={c.letter1Paras}
        />
      </div>

      <Band from={BG_LETTER} to={BG_MECHANISM} height={40} />

      {/* MechanismDef . eyebrow + gradient H2 + body lead + 2 body paras + 49% stat callout */}
      <div style={{ background: BG_MECHANISM, padding: "32px 22px 20px" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 3, textTransform: "uppercase", color: "#039902", fontWeight: 700, marginBottom: 10 }}>
          {c.mechanismEyebrow}
        </div>
        <h2 style={{ fontSize: 32, lineHeight: 1.1, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.5, textAlign: "left" }}>
          <span style={{
            background: "linear-gradient(135deg, #039902 0%, #5BC0BE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: 700,
          }}>{c.mechanismTitleAccent}</span>.
        </h2>
        <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600, lineHeight: 1.55 }}>
          {c.mechanismBodyLead}
        </p>
        {c.mechanismBodyParas.map((p, i) => (
          <p key={i} style={{ margin: "0 0 14px", fontSize: 15, lineHeight: 1.7, color: B.soft }}>
            {p}
          </p>
        ))}
      </div>

      {/* 49% stat callout . white card with hard shadow, on teal background */}
      <div style={{ background: BG_MECHANISM, padding: "4px 22px 28px" }}>
        <div style={{
          background: "#FFFFFF",
          border: `2px solid ${B.ink}`,
          borderRadius: 18,
          boxShadow: `4px 4px 0 ${B.ink}`,
          padding: "22px 20px 20px",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
            <div style={{
              fontSize: 56, lineHeight: 1, fontWeight: 700,
              ...B.gradientText,
            }}>{c.mechanismStatNumber}</div>
            <div style={{ fontSize: 13, color: B.ink, fontWeight: 600, lineHeight: 1.3, flex: 1 }}>
              {c.mechanismStatLabel}
            </div>
          </div>
          <p style={{ margin: "0 0 10px", fontSize: 13.5, lineHeight: 1.6, color: B.soft }}>
            {c.mechanismStatCompare}
          </p>
          <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: B.muted, fontWeight: 700 }}>
            {c.mechanismStatCitation}
          </div>
        </div>
      </div>

      {/* Mid-body inline breaker . hard shadow 3 */}
      <div style={{ background: BG_MECHANISM, padding: "4px 14px 24px" }}>
        <FramedImage
          height={200}
          label={c.inlineLabel2}
          sublabel={c.inlineSublabel2}
          shadow={c.inlineShadow2}
        />
      </div>

      <Band from={BG_MECHANISM} to={BG_FAILED} height={0} />

      {/* FailedMethodsGrid . 4 cards in 2x2 vertical stack: 3 X (Coral) + 1 check (Brand Green) */}
      <div style={{ background: BG_FAILED, padding: "32px 18px 16px" }}>
        <div style={{ padding: "0 4px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 10 }}>
            {c.failedIntroEyebrow}
          </div>
          <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 14px", letterSpacing: -0.4, textAlign: "center" }}>
            {c.failedIntroTitle}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: B.soft, margin: 0, textAlign: "left" }}>
            {c.failedIntroBody}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {c.failedCards.map((card, i) => {
            const isPositive = card.icon === "✓";
            return (
              <div key={i} style={{
                background: "#FFFFFF",
                border: `2px solid ${B.ink}`,
                borderRadius: 16,
                boxShadow: `3px 3px 0 ${B.ink}`,
                padding: "18px 20px",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
              }}>
                {/* icon block */}
                <div style={{
                  flexShrink: 0,
                  width: 40, height: 40,
                  borderRadius: 10,
                  background: card.iconColor,
                  color: "#FFFFFF",
                  fontSize: 20, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: `2px solid ${B.ink}`,
                }}>{card.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase",
                    color: card.iconColor, fontWeight: 700, marginBottom: 4,
                  }}>{card.label}</div>
                  <div style={{ fontSize: 15.5, fontWeight: 700, color: B.ink, lineHeight: 1.3, marginBottom: 6 }}>
                    {card.header}
                  </div>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: B.soft }}>
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Guide breaker . hard shadow 3 */}
      <div style={{ background: BG_FAILED, padding: "16px 14px 28px" }}>
        <FramedImage
          height={200}
          label={c.inlineLabel3}
          sublabel={c.inlineSublabel3}
          shadow={c.inlineShadow3}
        />
      </div>

      <Band from={BG_FAILED} to={BG_CTA} height={50} />

      {/* Inline CTA . NOT CTAClose primitive, per task spec */}
      <div style={{ background: BG_CTA, padding: "32px 22px 44px", textAlign: "center", color: "#FFFFFF" }}>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "#B8CACD", margin: "0 0 18px" }}>
          {c.ctaIntro}
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 26px", fontStyle: "italic" }}>
          {c.ctaIntroSecondary}
        </p>
        <a href={c.ctaHref} style={{
          display: "inline-block", padding: "17px 32px",
          background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 18, fontSize: 11.5, color: "#8A9B9D" }}>
          {c.ctaFinePrint}
        </div>
        <div style={{ marginTop: 22, fontSize: 12, color: "#8FAFB2", fontStyle: "italic" }}>
          {c.ctaNextTime}
        </div>
      </div>

      <Signoff />
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email2 });
