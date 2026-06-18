/* welcome-01-e7-gf · Email 7 component
   Day 17 · Mechanism — How body-signal learning actually works
   Subject: How the body-signal learning actually works
   Flow: EmailShell → Header → PartBadge → TitleBlock → Hook Letter (cream) →
   FramedImage (validation hero breaker, shadow=6) → Validation Letter (4px
   Warm Amber left-border) → Eyebrow + H2 mechanism anchors → Mechanism lead
   Letter (off-white) → LayerRow (3-layer explainer: Signal Creation / Smart
   Absorption / Leak-Resistant Barrier, off-white bg) → Mechanism metaphor
   closer Letter (pale teal) → Eyebrow + TestimonialQuintet (5 mini-win cards,
   alternating left/right indent) → Testimonials closing Letter (cream) →
   FramedImage product hero (flat-lay, shadow=4) → ProductShowcaseFull (2
   product image slots) → Product bullets Letter (ivory) → GuaranteeBlock
   (60-day seal + 3 checkmark cards) → H2 → CustomCTA → Signoff → Footer
*/

const Email7 = () => {
  const c = window.FLOW_WELCOME_GF.e7;
  const B = window.BRAND;
  const F = window.FONT;

  const BG_HERO = "#FFFBF0";
  const BG_CREAM = "#FFF6E2";
  const BG_OFFWHITE = "#FAF7F2";
  const BG_TEAL_SOFT = "#EAF6F2";
  const BG_LAVENDER = "#F0EDF8";
  const BG_GUARANTEE = "#FFFBF0";
  const BG_CTA = "#1F2D2F";

  // LayerRow primitive — inline (not yet in shared primitives.jsx).
  // Vertical stack of 3 layer rows for the Body-Signal Learning Layer
  // mechanism explainer. Each row carries layer_number, title, icon, icon_color,
  // duration badge, body copy, and a left-border accent in the layer's brand
  // color (Amber #E8923C, Soft Beige #D9C6A8, Muted Teal #5B9B8A).
  const LayerRow = ({ rows, bg }) => (
    <div style={{ background: bg, padding: "8px 14px 28px" }}>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: "flex",
          gap: 14,
          background: "#FFFFFF",
          border: `2px solid ${B.ink}`,
          borderLeft: `6px solid ${row.accent_border}`,
          borderRadius: 16,
          padding: "18px 20px 20px",
          marginBottom: 14,
          boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          {/* Left icon column */}
          <div style={{
            width: 52, height: 52, flexShrink: 0,
            borderRadius: 14,
            background: row.icon_color,
            border: `2px solid ${B.ink}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 700, color: B.ink,
          }}>
            {row.icon === "amber_dot" && "\u25cf"}
            {row.icon === "beige_wave" && "\u223f"}
            {row.icon === "teal_shield" && "\u25b2"}
          </div>

          {/* Right content column */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
              flexWrap: "wrap",
            }}>
              <div style={{
                fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase",
                color: row.accent_border, fontWeight: 700,
              }}>
                {row.layer_number}
              </div>
              <div style={{
                fontSize: 9.5, letterSpacing: 1, textTransform: "uppercase",
                color: B.muted, fontWeight: 700,
                background: `${row.accent_border}22`,
                padding: "3px 8px",
                borderRadius: 999,
              }}>
                {row.duration}
              </div>
            </div>
            <h3 style={{
              margin: "0 0 8px", fontSize: 16, fontWeight: 700,
              color: B.ink, lineHeight: 1.3,
            }}>
              {row.title}
            </h3>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: B.soft }}>
              {row.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  // TestimonialQuintet primitive — inline (not yet in shared primitives.jsx).
  // 5 quote cards arranged with alternating left/right indent pattern
  // (left, right, left, right, left) which DIFFERS from e3's 3-family triptych
  // in FramedImage and e4's TestimonialTriptych 3-card horizontal row. Each
  // card has a level tag (L1/L2/Cross/L3) and a distinct left-border color
  // drawn from the level-coded family (Coral #E8A98F, Teal #8AB9B5, Gold
  // #D4B886, Muted Lavender #B0A0C0).
  const TestimonialQuintet = ({ cards, intro, bg }) => (
    <div style={{ background: bg, padding: "8px 14px 28px" }}>
      <div style={{
        textAlign: "center", fontSize: 16, color: B.ink, fontWeight: 600,
        fontStyle: "italic", lineHeight: 1.5, margin: "0 8px 18px",
      }}>
        {intro}
      </div>
      {cards.map((card, i) => {
        const isLeft = card.indent === "left";
        return (
          <div key={i} style={{
            background: "#FFFFFF",
            border: `2px solid ${B.ink}`,
            borderLeft: `6px solid ${card.border_color}`,
            borderRadius: 16,
            padding: "18px 20px 20px",
            marginBottom: 14,
            marginLeft: isLeft ? 0 : 28,
            marginRight: isLeft ? 28 : 0,
            boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
            }}>
              <div style={{
                fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase",
                color: card.border_color, fontWeight: 700,
              }}>
                {card.label}
              </div>
              <div style={{
                fontSize: 9.5, letterSpacing: 1, textTransform: "uppercase",
                color: B.muted, fontWeight: 700,
                background: `${card.border_color}22`,
                padding: "3px 8px",
                borderRadius: 999,
              }}>
                {card.level_tag}
              </div>
            </div>
            <p style={{
              margin: "0 0 10px", fontSize: 14.5, lineHeight: 1.6, color: B.ink,
              fontStyle: "italic", fontWeight: 500,
            }}>
              &ldquo;{card.quote}&rdquo;
            </p>
            <div style={{ fontSize: 12, color: B.soft, fontWeight: 600 }}>
              — {card.by}
            </div>
          </div>
        );
      })}
    </div>
  );

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

      {/* 6. Hook letter (warm cream) — *why* italicized */}
      <Letter bg={BG_CREAM} first={c.letter1First} paras={c.letter1Paras} />

      {/* 7. FramedImage (validation hero breaker) */}
      <div style={{ background: BG_CREAM, padding: "4px 14px 24px" }}>
        <FramedImage
          height={260}
          label={c.validationImageLabel}
          sublabel={c.validationImageSublabel}
          shadow={c.validationImageShadow}
        >
          <img
            src={c.validationImage}
            alt={c.validationImageAlt}
            style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 8. Validation letter (4px Warm Amber #E8923C left-border treatment) */}
      <div style={{
        background: BG_HERO,
        borderLeft: c.validationBorderLeft,
        paddingLeft: c.validationPaddingLeft,
        paddingRight: 24,
        paddingTop: 4,
        paddingBottom: 28,
        fontSize: 15, lineHeight: 1.7, color: B.soft,
      }}>
        <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600 }}>
          {c.letter2First}
        </p>
        {c.letter2Paras.map((p, i) => (
          <p key={i} style={{ margin: i === c.letter2Paras.length - 1 ? 0 : "0 0 14px" }}>
            {p}
          </p>
        ))}
      </div>

      {/* 9. Mechanism eyebrow */}
      <div style={{ background: BG_HERO, padding: "16px 22px 0", textAlign: "center" }}>
        <Eyebrow color={c.mechanismEyebrowColor}>{c.mechanismEyebrow}</Eyebrow>
      </div>

      {/* 10. Mechanism H2 */}
      <div style={{ background: BG_HERO, padding: "0 22px 16px", textAlign: "center" }}>
        <H2 center size={22}>{c.mechanismH2}</H2>
      </div>

      {/* 11. Band: ivory → off-white (mechanism section bg) */}
      <Band from={BG_HERO} to={BG_OFFWHITE} height={40} />

      {/* 12. Mechanism lead letter (off-white) — core insight */}
      <Letter bg={BG_OFFWHITE} first={c.letter3First} paras={c.letter3Paras} />

      {/* 13. LayerRow — 3-layer Body-Signal Learning Layer explainer (off-white) */}
      <LayerRow rows={c.layerRows} bg={BG_OFFWHITE} />

      {/* 14. Band: off-white → pale teal (metaphor closer) */}
      <Band from={BG_OFFWHITE} to={BG_TEAL_SOFT} height={40} />

      {/* 15. Mechanism metaphor closer letter (pale teal) — training wheels */}
      <Letter bg={BG_TEAL_SOFT} first={c.letter4First} paras={c.letter4Paras} />

      {/* 16. Band: pale teal → ivory (testimonials) */}
      <Band from={BG_TEAL_SOFT} to={BG_HERO} height={40} />

      {/* 17. Testimonials eyebrow */}
      <div style={{ background: BG_HERO, padding: "20px 22px 0", textAlign: "center" }}>
        <Eyebrow color={c.testimonialsEyebrowColor}>{c.testimonialsEyebrow}</Eyebrow>
      </div>

      {/* 18. TestimonialQuintet — 5 mini-win cards, alternating left/right indent */}
      <TestimonialQuintet
        cards={c.testimonials}
        intro={c.testimonialsIntro}
        bg={BG_HERO}
      />

      {/* 19. Band: ivory → cream (testimonials closing) */}
      <Band from={BG_HERO} to={BG_CREAM} height={40} />

      {/* 20. Testimonials closing letter (warm cream) — common thread */}
      <Letter bg={BG_CREAM} first={c.letter5First} paras={c.letter5Paras} />

      {/* 21. FramedImage product hero (flat-lay, shadow=4) */}
      <div style={{ background: BG_CREAM, padding: "4px 14px 24px" }}>
        <FramedImage
          height={260}
          label={c.productHeroImageLabel}
          sublabel={c.productHeroImageSublabel}
          shadow={c.productHeroImageShadow}
        >
          <img
            src={c.productHeroImage}
            alt={c.productHeroImageAlt}
            style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 22. Band: cream → lavender (product showcase) */}
      <Band from={BG_CREAM} to={BG_LAVENDER} height={40} />

      {/* 23. ProductShowcaseFull — 2 product image slots */}
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

      {/* 24. Band: lavender → ivory (product bullets + guarantee) */}
      <Band from={BG_LAVENDER} to={BG_HERO} height={40} />

      {/* 25. Product bullets letter (ivory) — what you get + 1-pair secondary */}
      <Letter bg={BG_HERO} first={c.letter6First} paras={c.letter6Paras} />

      {/* 26. GuaranteeBlock — eyebrow + headline + sub */}
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

      {/* 27. 60-Day circular seal */}
      <div style={{ background: BG_GUARANTEE, padding: "16px 14px 20px", display: "flex", justifyContent: "center" }}>
        <div style={{
          position: "relative", width: 200, height: 200,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          background: "#FFFFFF", borderRadius: "50%",
          border: `3px solid ${B.ink}`, boxShadow: `6px 6px 0 ${B.ink}`,
        }}>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <path id="circlePathE7" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
            </defs>
            <text fill={B.tealDeep} style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              <textPath href="#circlePathE7" startOffset="0">
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

      {/* 28. 3 guarantee points (color-coded checkmark cards) */}
      <div style={{ background: BG_GUARANTEE, padding: "16px 14px 24px" }}>
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

      {/* 29. Guarantee closer letter (ivory) */}
      <div style={{ background: BG_GUARANTEE, padding: "4px 24px 28px", fontSize: 15, lineHeight: 1.7, color: B.soft }}>
        <p style={{ margin: 0, fontSize: 15, color: B.ink, fontWeight: 500, fontStyle: "italic" }}>
          {c.guaranteeCloser}
        </p>
      </div>

      {/* 30. CTA H2 */}
      <div style={{ background: BG_HERO, padding: "28px 22px 12px", textAlign: "center" }}>
        <H2 center size={20}>{c.ctaH2}</H2>
      </div>

      {/* 31. Band: ivory → ink (CTA) */}
      <Band from={BG_HERO} to={BG_CTA} height={40} />

      {/* 32. CustomCTA — inline CTA on dark ink with real href + secondary link + PS line */}
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
        <div style={{ marginTop: 18, fontSize: 12.5, color: "#D8F57C" }}>
          <a href={c.ctaSecondaryHref} style={{ color: "#D8F57C", textDecoration: "underline", fontWeight: 600 }}>
            {c.ctaSecondaryLink}
          </a>
        </div>
        <div style={{ marginTop: 12, fontSize: 11.5, color: "#8A9B9D", fontStyle: "italic" }}>
          {c.ctaPriceNote}
        </div>
        <div style={{ marginTop: 22, fontSize: 12, color: "#8FAFB2", fontStyle: "italic" }}>
          {c.ctaPsLine}
        </div>
      </div>

      {/* 33. Signoff (Lena Bauer) — LONG variant */}
      <Signoff bg={BG_CTA} />

      {/* 34. Footer */}
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email7 });
