/* Email 4 · Three kids. One thing. — Social proof lead
   Flow: welcome-gf · Day 7
   Three-family triptych + mechanism + product + guarantee
*/

const Email4 = () => {
  const c = window.FLOW_WELCOME_GF.e4;
  const B = window.BRAND;
  const F = window.FONT;

  const BG_HERO = "#FFFBF0";
  const BG_CREAM = "#FFF6E2";
  const BG_MINT = "#EAF6F2";
  const BG_LAVENDER = "#F0EDF8";
  const BG_GUARANTEE = "#FFFBF0";
  const BG_CTA = "#1F2D2F";

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* 1. EmailShell (above) — 2. Header (above) */}

      {/* 3. Hero — framed lifestyle image */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={260}
          label={c.heroAlt}
          sublabel="Candid warm lifestyle moment of a child at play, no clinical setting, no bathroom in frame. Ratio ~5:3"
          shadow={6}
        >
          <img
            src={c.heroImage}
            alt={c.heroAlt}
            style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 4. Title block */}
      <TitleBlock
        badge={c.heroBadge}
        part1={c.h1a}
        part2={c.h1b}
        subhead={c.subhead}
      />

      {/* 5. Band: cream → cream-yellow */}
      <Band from={BG_HERO} to={BG_CREAM} height={40} />

      {/* 6. Opening letter */}
      <Letter bg={BG_CREAM} first={c.letter1First} paras={c.letter1Paras} />

      {/* 7. TestimonialTriptych — three family cards (inline primitive) */}
      <div style={{ background: BG_CREAM, padding: "8px 14px 32px" }}>
        <div style={{
          textAlign: "center", fontSize: 17, color: B.ink, fontWeight: 600,
          fontStyle: "italic", lineHeight: 1.5, margin: "0 8px 18px",
        }}>
          {c.triptychIntro}
        </div>
        {c.triptychCards.map((card, i) => (
          <div key={i} style={{
            background: "#FFFFFF",
            border: `2px solid ${B.ink}`,
            borderLeft: `6px solid ${card.border_color}`,
            borderRadius: 16,
            padding: "20px 20px 22px",
            marginBottom: 14,
            boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              {/* Avatar circle (no real photo — color disc) */}
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: card.avatar_color,
                border: `2px solid ${B.ink}`,
                flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 700, color: B.ink,
              }}>
                {i + 1}
              </div>
              <div style={{
                fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
                color: card.border_color, fontWeight: 700,
              }}>
                {card.label}
              </div>
            </div>
            <p style={{
              margin: "0 0 12px", fontSize: 14.5, lineHeight: 1.6, color: B.ink,
              fontStyle: "italic", fontWeight: 500,
            }}>
              &ldquo;{card.quote}&rdquo;
            </p>
            <div style={{ fontSize: 12, color: B.soft, fontWeight: 600 }}>
              — {card.by}
            </div>
          </div>
        ))}
      </div>

      {/* 8. Band: cream → mint */}
      <Band from={BG_CREAM} to={BG_MINT} height={40} />

      {/* 9. Second letter — nervous system reassurance */}
      <Letter bg={BG_MINT} first={c.letter2First} paras={c.letter2Paras} />

      {/* 10. Mechanism inline breaker — framed image */}
      <div style={{ background: BG_MINT, padding: "8px 14px 20px" }}>
        <FramedImage
          height={240}
          label={c.mechanismLabel}
          sublabel={c.mechanismSublabel}
          shadow={3}
        >
          <img
            src={c.mechanismImage}
            alt={c.mechanismAlt}
            style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 11. Mechanism letter (continues on mint) */}
      <Letter bg={BG_MINT} first={c.letter3First} paras={c.letter3Paras} />

      {/* 12. Band: mint → lavender */}
      <Band from={BG_MINT} to={BG_LAVENDER} height={40} />

      {/* 13. ProductShowcaseFull — product moment */}
      <div style={{ background: BG_LAVENDER, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow={c.productLabel}
          title={c.productTitle}
          titleAccent={c.productTitleAccent}
          sub={c.productSub}
          priceFrom={c.productPriceFrom}
          priceNote={c.productPriceNote}
          ctaButton={c.productCta}
          features={c.productFeatures}
          ageRange={c.productAgeRange}
          microTrustText={c.productMicroTrust}
        />
      </div>

      {/* 14. Band: lavender → cream */}
      <Band from={BG_LAVENDER} to={BG_GUARANTEE} height={40} />

      {/* 15. GuaranteeBlock — full guarantee section */}
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 12px", textAlign: "center" }}>
        <Eyebrow>{c.guaranteeLabel}</Eyebrow>
        <H2 size={30} center>
          {c.guaranteeHeadline}{" "}
          <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeHeadlineAccent}</span>
        </H2>
        <p style={{
          fontSize: 15.5, color: B.soft, lineHeight: 1.55, margin: 0,
          fontWeight: 500, fontStyle: "italic",
        }}>
          {c.guaranteeSub}
        </p>
      </div>

      {/* 60-Day Seal/Badge */}
      <div style={{ background: BG_GUARANTEE, padding: "12px 14px 20px", display: "flex", justifyContent: "center" }}>
        <div style={{
          position: "relative", width: 200, height: 200,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          background: "#FFFFFF", borderRadius: "50%",
          border: `3px solid ${B.ink}`, boxShadow: `6px 6px 0 ${B.ink}`,
        }}>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <path id="circlePathE4" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
            </defs>
            <text fill={B.tealDeep} style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              <textPath href="#circlePathE4" startOffset="0">
                {c.guaranteeSealRing}
              </textPath>
            </text>
          </svg>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 }}>
            Protected by
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, ...B.gradientText }}>
            {c.guaranteeSealNumber}
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: B.ink, letterSpacing: 0.5, marginTop: 2 }}>
            {c.guaranteeSealLabel}
          </div>
          <div style={{ fontSize: 10.5, color: B.soft, marginTop: 4, letterSpacing: 0.5 }}>
            Full refund · No forms
          </div>
        </div>
      </div>

      {/* 3 guarantee points */}
      <div style={{ background: BG_GUARANTEE, padding: "16px 14px 32px" }}>
        {c.guaranteePoints.map((p, i) => (
          <div key={i} style={{
            marginBottom: 12, background: "#FFFFFF", borderRadius: 16,
            overflow: "hidden", border: `2px solid ${B.ink}`,
            boxShadow: `3px 3px 0 ${B.ink}`,
            display: "flex", alignItems: "stretch",
          }}>
            <div style={{
              width: 42, flexShrink: 0, background: p.color,
              color: "#FFF", fontSize: 16, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRight: `2px solid ${B.ink}`,
            }}>✓</div>
            <div style={{ padding: "14px 18px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: B.ink, marginBottom: 6, lineHeight: 1.3 }}>
                {p.title}
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: B.soft }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 16. CTAClose — dark ink block */}
      <CTAClose
        intro={c.ctaIntro}
        button={c.ctaButton}
        fine={c.ctaFinePrint}
        bg={BG_CTA}
      />

      {/* 17. Signoff (Lena Bauer) */}
      <Signoff bg={BG_CTA} />

      {/* 18. Footer */}
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email4 });
