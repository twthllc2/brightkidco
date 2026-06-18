/* welcome-01-e5-gf · Email 5 component
   Day 10 · Objection Handling
   Subject: If this is another letdown, here's the difference
   Flow: Hook letter → Hero (FramedImage) → 3 ObjectionCalloutTriptych cards →
   Reframe letter → Mid-body inline breaker (FramedImage) → Mechanism letter →
   TestimonialPair (2 cards + stat strip) → Product intro letter →
   ProductShowcaseFull (2 product images) → GuaranteeBlock (seal + 3 points) →
   CustomCTA → Signoff → OutLine → Footer
*/

const Email5 = () => {
  const c = window.FLOW_WELCOME_GF.e5;
  const B = window.BRAND;
  const F = window.FONT;

  const BG_HERO = "#FFFBF0";
  const BG_CREAM = "#FFF6E2";
  const BG_MINT = "#EAF6F2";
  const BG_GUARANTEE = "#EAF6F2";
  const BG_LAVENDER = "#F0EDF8";
  const BG_CTA = "#1F2D2F";

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* 3. PartBadge (standalone) */}
      <div style={{ background: BG_HERO, padding: "24px 22px 0", textAlign: "center" }}>
        <PartBadge>{c.partBadge}</PartBadge>
      </div>

      {/* 4. TitleBlock */}
      <TitleBlock
        badge={c.heroBadge}
        part1={c.h1a}
        part2={c.h1b}
        subhead={c.heroSubhead}
      />

      {/* 5. Band: ivory → cream */}
      <Band from={BG_HERO} to={BG_CREAM} height={40} />

      {/* 6. FramedImage hero (reflective parent moment) */}
      <div style={{ background: BG_CREAM, padding: "4px 14px 24px" }}>
        <FramedImage
          height={240}
          label={c.heroLabel}
          sublabel={c.heroSublabel}
          shadow={c.heroShadow}
        >
          <img
            src={c.heroImage}
            alt={c.heroAlt}
            style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 7. Opening letter (warm cream) — "You've tried..." */}
      <Letter bg={BG_CREAM} first={c.letter1First} paras={c.letter1Paras} />

      {/* 8. ObjectionCalloutTriptych — 3 cards, border-left #039902 brand green */}
      <div style={{ background: BG_CREAM, padding: "8px 22px 28px" }}>
        <p style={{
          margin: "0 0 18px", fontSize: 16, lineHeight: 1.6, color: B.ink,
          fontWeight: 500, fontStyle: "italic",
        }}>
          {c.objectionIntro}
        </p>
        {c.objectionCards.map((card, i) => (
          <div key={i} style={{
            background: "#FFFFFF",
            border: `2px solid ${B.ink}`,
            borderLeft: `${c.objectionBorderWidth}px solid ${c.objectionBorderColor}`,
            borderRadius: 16,
            padding: "18px 20px 20px",
            marginBottom: 14,
            boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: c.objectionBorderColor, fontWeight: 700, marginBottom: 8,
            }}>
              {card.label}
            </div>
            <h3 style={{
              margin: "0 0 10px", fontSize: 16, fontWeight: 700,
              color: B.ink, lineHeight: 1.3,
            }}>
              {card.header}
            </h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: B.soft }}>
              {card.body}
            </p>
          </div>
        ))}
      </div>

      {/* 9. Band: cream → mint */}
      <Band from={BG_CREAM} to={BG_MINT} height={40} />

      {/* 10. Reframe letter (soft mint) — "The reason nothing worked..." */}
      <Letter bg={BG_MINT} first={c.letter2First} paras={c.letter2Paras} />

      {/* 11. Mid-body inline breaker — FramedImage (potty ladder moment) */}
      <div style={{ background: BG_MINT, padding: "4px 14px 24px" }}>
        <FramedImage
          height={200}
          label={c.mechanismLabel}
          sublabel={c.mechanismSublabel}
          shadow={c.mechanismShadow}
        >
          <img
            src={c.mechanismImage}
            alt={c.mechanismAlt}
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 12. Mechanism letter (continues on mint) — "This is where BrightKidCo is different..." */}
      <Letter bg={BG_MINT} first={c.letter3First} paras={c.letter3Paras} />

      {/* 13. Band: mint → ivory (testimonial pair) */}
      <Band from={BG_MINT} to={BG_HERO} height={40} />

      {/* 14. TestimonialPair — 2 quote cards + stat strip */}
      <div style={{ background: BG_HERO, padding: "20px 14px 32px" }}>
        {c.testimonialQuotes.map((t, i) => (
          <div key={i} style={{
            background: "#FFFFFF",
            border: `2px solid ${B.ink}`,
            borderRadius: 16,
            padding: "18px 20px 20px",
            marginBottom: 12,
            boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            <p style={{
              margin: "0 0 12px", fontSize: 15, lineHeight: 1.55, color: B.ink,
              fontStyle: "italic", fontWeight: 500,
            }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div style={{ fontSize: 12, color: B.soft, fontWeight: 600 }}>
              — {t.by}
            </div>
          </div>
        ))}
        {/* Stat strip — yellow strip card */}
        <div style={{
          background: "#FFD866",
          border: `2px solid ${B.ink}`,
          borderRadius: 12,
          padding: "12px 16px",
          marginTop: 14,
          textAlign: "center",
          boxShadow: `2px 2px 0 ${B.ink}`,
        }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: B.ink, lineHeight: 1.4 }}>
            {c.testimonialStat}
          </p>
        </div>
      </div>

      {/* 15. Band: ivory → cream (product intro letter) */}
      <Band from={BG_HERO} to={BG_CREAM} height={40} />

      {/* 16. Product intro letter (warm cream) — bundle copy */}
      <Letter bg={BG_CREAM} first={c.letter4First} paras={c.letter4Paras} />

      {/* 17. Band: cream → lavender (product showcase) */}
      <Band from={BG_CREAM} to={BG_LAVENDER} height={40} />

      {/* 18. ProductShowcaseFull — 2 product image slots */}
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

      {/* 19. Band: lavender → mint (guarantee) */}
      <Band from={BG_LAVENDER} to={BG_GUARANTEE} height={40} />

      {/* 20. GuaranteeBlock — eyebrow + headline + sub */}
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

      {/* 60-Day circular seal */}
      <div style={{ background: BG_GUARANTEE, padding: "16px 14px 20px", display: "flex", justifyContent: "center" }}>
        <div style={{
          position: "relative", width: 200, height: 200,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          background: "#FFFFFF", borderRadius: "50%",
          border: `3px solid ${B.ink}`, boxShadow: `6px 6px 0 ${B.ink}`,
        }}>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <path id="circlePathE5" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
            </defs>
            <text fill={B.tealDeep} style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              <textPath href="#circlePathE5" startOffset="0">
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

      {/* 3 guarantee points (color-coded checkmark cards) */}
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

      {/* 21. Band: mint → ivory (CTA close lead-in) */}
      <Band from={BG_GUARANTEE} to={BG_HERO} height={40} />

      {/* 22. CustomCTA — inline CTA on dark ink with real href */}
      <div style={{ background: BG_CTA, padding: "20px 22px 44px", textAlign: "center", color: "#FFFFFF" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" }}>
          {c.ctaIntro}
        </p>
        <a href={c.ctaHref} style={{
          display: "inline-block", padding: "17px 32px",
          background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
        }}>{c.ctaButton} {c.ctaButtonArrow}</a>
        <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>
          {c.ctaFinePrint}
        </div>
        <div style={{ marginTop: 22, fontSize: 12, color: "#8FAFB2", fontStyle: "italic" }}>
          {c.ctaPsLine}
        </div>
      </div>

      {/* 23. Signoff (Lena Bauer) */}
      <Signoff bg={BG_CTA} />

      {/* 24. OutLine */}
      <OutLine />

      {/* Footer */}
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email5 });
