/* welcome-01-e6-gf · Email 6 component
   Day 14 · Part 6 of 8 · The Pull-Ups Reframe ("Too dry to learn.")
   Subject: The €50/month product keeping them too dry
   Flow: PartBadge → StatCallout (inline) → TitleBlock → Band → Hook Letter →
   ComparisonCards (inline, 2-col) → Validation Letter → Mechanism FramedImage
   (shadow=4) → H2 → Band → Mechanism Letter (mint, with 3-layer list) →
   ProductShowcaseMedium → Mid-body FramedImage breaker (shadow=3) →
   Band → Closing Letter (testimonials + guarantee + CTA + PS) →
   Inline CTA (dark ink) → Signoff → Footer
*/

const Email6 = () => {
  const c = window.FLOW_WELCOME_GF.e6;
  const B = window.BRAND;
  const F = window.FONT;

  const BG_HERO = "#FFFBF0";
  const BG_CREAM = "#FFF6E2";
  const BG_MINT = "#EAF6F2";
  const BG_CTA = "#1F2D2F";

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* 3. PartBadge (standalone) */}
      <div style={{ background: BG_HERO, padding: "24px 22px 0", textAlign: "center" }}>
        <PartBadge>{c.partBadge}</PartBadge>
      </div>

      {/* 4. StatCallout (inline JSX — NOT a primitive) */}
      {/* Hard shadow=6 (largest in palette) for visual prominence */}
      <div style={{ background: BG_HERO, padding: "12px 14px 4px" }}>
        <div style={{
          background: "#FFF6E2",
          border: "2px solid #1F2D2F",
          borderRadius: 22,
          padding: "28px 24px 26px",
          textAlign: "center",
          boxShadow: "6px 6px 0 #1F2D2F",
        }}>
          <div style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1,
            color: "#D85A30",
            letterSpacing: -1.2,
            marginBottom: 6,
          }}>
            {c.statNumber}
            <span style={{ fontSize: 24, color: "#1F2D2F", fontWeight: 700, marginLeft: 4 }}>{c.statUnit}</span>
          </div>
          <div style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#1F2D2F",
            letterSpacing: 0.4,
            textTransform: "uppercase",
            marginBottom: 8,
          }}>
            {c.statLabel}
          </div>
          <div style={{
            fontSize: 13.5,
            color: "#1F2D2F",
            opacity: 0.75,
            fontStyle: "italic",
            lineHeight: 1.45,
            maxWidth: 320,
            margin: "0 auto",
          }}>
            {c.statSublabel}
          </div>
        </div>
      </div>

      {/* 5. TitleBlock — "Too dry to learn." with gradient accent on part2 */}
      <TitleBlock
        badge={c.heroBadge}
        part1={c.h1a}
        part2={c.h1b}
        subhead={c.heroSubhead}
      />

      {/* 6. Band: ivory → cream */}
      <Band from={BG_HERO} to={BG_CREAM} height={40} />

      {/* 7. Hook Letter (warm cream) — "Whether your child has been in pull-ups..." */}
      <Letter bg={BG_CREAM} first={c.letter1First} paras={c.letter1Paras} />

      {/* 8. ComparisonCards (inline JSX — 2-col Pull-Ups vs BrightKidCo) */}
      <div style={{ background: BG_CREAM, padding: "4px 14px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{
            fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
            color: "#039902", fontWeight: 700, marginBottom: 8,
          }}>
            {c.comparisonEyebrow}
          </div>
          <h2 style={{
            fontSize: 22, lineHeight: 1.2, fontWeight: 700,
            margin: "0 0 8px", letterSpacing: -0.3, color: "#1F2D2F",
          }}>
            {c.comparisonTitle}
          </h2>
          <p style={{
            fontSize: 13.5, color: "#1F2D2F", opacity: 0.75,
            fontStyle: "italic", lineHeight: 1.5, margin: 0,
            fontWeight: 500,
          }}>
            {c.comparisonSubtitle}
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "stretch" }}>
          {/* Left card — Pull-Ups (coral ✕) */}
          <div style={{
            flex: 1, minWidth: 0,
            background: "#FFFFFF",
            border: "2px solid #1F2D2F",
            borderLeft: `6px solid ${c.comparisonLeftBorder}`,
            borderRadius: 16,
            boxShadow: "4px 4px 0 #1F2D2F",
            overflow: "hidden",
          }}>
            <div style={{
              background: c.comparisonLeftHeaderBg,
              padding: "12px 14px",
              borderBottom: "2px solid #1F2D2F",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{
                fontSize: 15, fontWeight: 700, color: "#1F2D2F", letterSpacing: 0.2,
              }}>
                {c.comparisonLeftTitle}
              </div>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "#FFFFFF",
                border: `2px solid ${c.comparisonLeftBorder}`,
                color: c.comparisonLeftBorder,
                fontSize: 14, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {c.comparisonLeftIcon}
              </div>
            </div>
            <div>
              {c.comparisonRows.map((row, i) => (
                <div key={i} style={{
                  padding: "10px 14px",
                  borderBottom: i === c.comparisonRows.length - 1 ? "none" : "1px solid #F0E6D6",
                }}>
                  <div style={{
                    fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase",
                    color: "#C84B3B", fontWeight: 700, marginBottom: 3,
                  }}>
                    {row.leftLabel}
                  </div>
                  <div style={{ fontSize: 12.5, color: "#1F2D2F", lineHeight: 1.45, fontWeight: 500 }}>
                    {row.leftValue}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card — BrightKidCo (brand green ✓) */}
          <div style={{
            flex: 1, minWidth: 0,
            background: "#FFFFFF",
            border: "2px solid #1F2D2F",
            borderLeft: `6px solid ${c.comparisonRightBorder}`,
            borderRadius: 16,
            boxShadow: "4px 4px 0 #1F2D2F",
            overflow: "hidden",
          }}>
            <div style={{
              background: c.comparisonRightHeaderBg,
              padding: "12px 14px",
              borderBottom: "2px solid #1F2D2F",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{
                fontSize: 15, fontWeight: 700, color: "#1F2D2F", letterSpacing: 0.2,
              }}>
                {c.comparisonRightTitle}
              </div>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "#FFFFFF",
                border: `2px solid ${c.comparisonRightBorder}`,
                color: c.comparisonRightBorder,
                fontSize: 14, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {c.comparisonRightIcon}
              </div>
            </div>
            <div>
              {c.comparisonRows.map((row, i) => (
                <div key={i} style={{
                  padding: "10px 14px",
                  borderBottom: i === c.comparisonRows.length - 1 ? "none" : "1px solid #F0E6D6",
                }}>
                  <div style={{
                    fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase",
                    color: "#039902", fontWeight: 700, marginBottom: 3,
                  }}>
                    {row.rightLabel}
                  </div>
                  <div style={{ fontSize: 12.5, color: "#1F2D2F", lineHeight: 1.45, fontWeight: 500 }}>
                    {row.rightValue}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 9. Validation Letter (warm cream) — research + real-parent quote */}
      <Letter bg={BG_CREAM} first={c.letter2First} paras={c.letter2Paras} />

      {/* 10. Mechanism FramedImage — 3-layer system visual, shadow=4 */}
      <div style={{ background: BG_CREAM, padding: "4px 14px 24px" }}>
        <FramedImage
          height={240}
          label={c.mechanismLabel}
          sublabel={c.mechanismSublabel}
          shadow={4}
        >
          <img
            src={c.mechanismImage}
            alt={c.mechanismAlt}
            style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 11. H2 section heading — centered, size=22 */}
      <div style={{ background: BG_CREAM, padding: "4px 22px 0" }}>
        <H2 center size={22}>
          The 3-Layer <span style={{ ...B.gradientText, fontWeight: 700 }}>Body-Signal</span> Learning System
        </H2>
      </div>

      {/* Band: cream → mint */}
      <Band from={BG_CREAM} to={BG_MINT} height={40} />

      {/* 12. Mechanism Letter (soft mint) — 3-layer numbered list inside */}
      <Letter bg={BG_MINT} first={c.letter3First} paras={c.letter3Paras} />

      {/* 13. ProductShowcaseMedium — single product card on mint */}
      <div style={{ background: BG_MINT, paddingBottom: 8 }}>
        <ProductShowcaseMedium
          product={c.productName}
          image_src={c.productImage}
          price_label={c.productPriceLabel}
        />
      </div>

      {/* 14. Mid-body inline breaker FramedImage — shadow=3 */}
      <div style={{ background: BG_MINT, padding: "8px 14px 20px" }}>
        <FramedImage
          height={200}
          label={c.breakerLabel}
          sublabel={c.breakerSublabel}
          shadow={3}
        >
          <img
            src={c.breakerImage}
            alt={c.breakerAlt}
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* Band: mint → cream */}
      <Band from={BG_MINT} to={BG_CREAM} height={40} />

      {/* 15. Closing Letter (warm cream) — testimonials + guarantee + CTA copy + PS */}
      <Letter bg={BG_CREAM} first={c.letter4First} paras={c.letter4Paras} />

      {/* 16. Inline CTA — dark ink bg, lime button, real href (NOT CTAClose primitive) */}
      <div style={{ background: BG_CTA, padding: "20px 22px 44px", textAlign: "center", color: "#FFFFFF" }}>
        <a href={c.ctaHref} style={{
          display: "inline-block", padding: "17px 32px",
          background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
          boxShadow: `4px 4px 0 ${"#FFFFFF"}`,
        }}>{c.ctaButton} {c.ctaButtonArrow}</a>
      </div>

      {/* 17. Signoff (Lena Bauer) */}
      <Signoff bg={BG_CTA} />

      {/* Footer */}
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email6 });
