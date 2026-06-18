/* welcome-01-e8-gf · Email 8 component
   Day 21 · Part 8 of 8 · Final Offer / Soft Close
   Subject: One last thing before you decide
   Framework: BAB (Before-After-Bridge) — soft close variant
   Flow: EmailShell → Header → PartBadge → TitleBlock → Band →
   Letter (hook) → FramedImage (rearview open field) → H2 (recap heading) →
   RecapCard × 4 (2x2 grid) → FramedImage (recap inline breaker) →
   MigrationAnchorCard (quiz link, gold border, constellation easter egg) →
   Band → H2 (offer heading) → OfferCard (1 Pair primary) → OfferSeparator →
   OfferCard (3+3 Bundle secondary) → FramedImage (product flat-lay) →
   Band (cream → teal) → H2 (guarantee heading) → GuaranteeBlock (60-day seal + 3 points) →
   Band (teal → cream) → FramedImage (washing machine soft-close breaker) →
   Signoff (Lena Bauer, long variant) → Footer
*/

const Email8 = () => {
  const c = window.FLOW_WELCOME_GF.e8;
  const B = window.BRAND;
  const F = window.FONT;

  // GF color palette (warm stone → dusk gold)
  const BG_HERO = "#FFFBF0";        // warm ivory
  const BG_CREAM = "#FFF6E2";       // warm cream
  const BG_STONE = "#F0EAE1";       // warm stone (recap card bg)
  const BG_TEAL = "#EAF6F2";        // soft teal (guarantee)
  const BG_GOLD = "#D4A76A";        // dusk gold (accent)
  const BG_CTA = "#1F2D2F";         // dark teal/ink (signoff)
  const INK = "#1F2D2F";            // primary ink for borders/text on cream

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* 3. PartBadge (standalone) — yellow tilted pill, rotate(-1.5deg) */}
      <div style={{ background: BG_HERO, padding: "24px 22px 0", textAlign: "center" }}>
        <PartBadge>{c.partBadge}</PartBadge>
      </div>

      {/* 4. TitleBlock — Part 8 of 8 · Day 21 with gradient accent on part2 */}
      <TitleBlock
        badge={c.heroBadge}
        part1={c.h1a}
        part2={c.h1b}
        subhead={c.heroSubhead}
      />

      {/* 5. Band: ivory → cream (transition into hook) */}
      <Band from={BG_HERO} to={BG_CREAM} height={40} />

      {/* 6. Hook Letter (warm cream) — "You've been reading these emails..." */}
      <Letter bg={BG_CREAM} first={c.letterHookFirst} paras={c.letterHookParas} />

      {/* 7. Recap lead visual (rearview open field) — FramedImage, hard shadow=6 */}
      <div style={{ background: BG_CREAM, padding: "4px 14px 24px" }}>
        <FramedImage
          height={240}
          label={c.recapLeadLabel}
          sublabel={c.recapLeadSublabel}
          shadow={c.recapLeadShadow}
        >
          <img
            src={c.recapLeadImage}
            alt={c.recapLeadAlt}
            style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 8. H2 — recap section heading (centered, size=22) */}
      <div style={{ background: BG_CREAM, padding: "4px 22px 12px" }}>
        <H2 center size={22}>
          21 days, four <span style={{ ...B.gradientText, fontWeight: 700 }}>big ideas</span>
        </H2>
      </div>

      {/* 9-12. RecapCard × 4 — 2x2 grid, warm stone bg, 2px ink border, shadow=4 */}
      <div style={{ background: BG_CREAM, padding: "0 14px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {c.recapCards.map((card, i) => (
            <div key={i} style={{
              background: BG_STONE,
              border: `2px solid ${INK}`,
              borderRadius: 14,
              padding: "14px 14px 16px",
              boxShadow: `4px 4px 0 ${INK}`,
            }}>
              <div style={{
                fontSize: 9.5, letterSpacing: 1.2, textTransform: "uppercase",
                color: BG_GOLD, fontWeight: 700, marginBottom: 8,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ fontSize: 16 }}>{card.icon}</span>
                <span>{card.label}</span>
              </div>
              <h3 style={{
                margin: "0 0 8px", fontSize: 13, fontWeight: 700,
                color: INK, lineHeight: 1.3, letterSpacing: -0.1,
              }}>
                {card.title}
              </h3>
              <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.5, color: INK, opacity: 0.78 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 13. Recap inline breaker — FramedImage, hard shadow=3 */}
      <div style={{ background: BG_CREAM, padding: "4px 14px 24px" }}>
        <FramedImage
          height={200}
          label={c.recapBreakerLabel}
          sublabel={c.recapBreakerSublabel}
          shadow={c.recapBreakerShadow}
        >
          <img
            src={c.recapBreakerImage}
            alt={c.recapBreakerAlt}
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* Recap closing paragraph */}
      <div style={{ background: BG_CREAM, padding: "0 24px 28px", fontSize: 14.5, lineHeight: 1.7, color: B.soft }}>
        <p style={{ margin: 0, fontStyle: "italic" }}>{c.recapClosing}</p>
      </div>

      {/* 14. MigrationAnchorCard — 3px gold border, quiz link, constellation easter egg */}
      <div style={{ background: BG_CREAM, padding: "0 14px 32px" }}>
        <div style={{
          position: "relative",
          background: "#FFFBF0",
          border: `3px solid ${BG_GOLD}`,
          borderRadius: 16,
          padding: "22px 22px 24px",
          boxShadow: `4px 4px 0 ${INK}`,
          overflow: "hidden",
        }}>
          {/* Constellation easter-egg SVG — 5 dots forming a ~315° incomplete circle
              (incomplete at top-right, ~45° gap as the invitation to complete) */}
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            style={{ position: "absolute", bottom: 8, right: 8, opacity: 0.25, pointerEvents: "none" }}
          >
            {/* arc: 315° of a circle, starting at top (12 o'clock) sweeping clockwise to right side
                with a 45° gap at top-right */}
            <path
              d="M 145,15 A 45,45 0 1,0 100,15"
              stroke={BG_GOLD}
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,3"
            />
            {/* 5 dots representing the 5 GF sub-groups (A through E) */}
            <circle cx="100" cy="15" r="2.5" fill={BG_GOLD} />
            <circle cx="55"  cy="15" r="2.5" fill={BG_GOLD} />
            <circle cx="55"  cy="60" r="2.5" fill={BG_GOLD} />
            <circle cx="100" cy="60" r="2.5" fill={BG_GOLD} />
            <circle cx="145" cy="60" r="2.5" fill={BG_GOLD} />
          </svg>

          {/* eyebrow */}
          <div style={{
            fontSize: 10.5, letterSpacing: 1.8, textTransform: "uppercase",
            color: BG_GOLD, fontWeight: 700, marginBottom: 10,
          }}>
            {c.migrationEyebrow}
          </div>

          {/* headline with gradient accent on "more detailed assessment" */}
          <h3 style={{
            margin: "0 0 12px", fontSize: 17, fontWeight: 700,
            color: INK, lineHeight: 1.35, letterSpacing: -0.2,
          }}>
            If your child sounds like any of these descriptions, click here for a{" "}
            <span style={{ ...B.gradientText, fontWeight: 700 }}>
              more detailed assessment
            </span>.
          </h3>

          {/* body lead */}
          <p style={{
            margin: "0 0 18px", fontSize: 13.5, lineHeight: 1.6,
            color: B.soft,
          }}>
            {c.migrationBodyLead}
          </p>

          {/* inline CTA button */}
          <a href={c.migrationCtaHref} style={{
            display: "inline-block", padding: "13px 26px",
            background: INK, color: "#D8F57C", fontSize: 14, fontWeight: 700,
            textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
            boxShadow: `3px 3px 0 ${BG_GOLD}`,
          }}>
            {c.migrationCtaLabel} {c.migrationCtaArrow}
          </a>
        </div>
      </div>

      {/* 15. Band: cream → cream (no visual change, but soft transition) */}
      <Band from={BG_CREAM} to={BG_CREAM} height={40} />

      {/* 16. H2 — offer section heading (centered, size=24) */}
      <div style={{ background: BG_CREAM, padding: "20px 22px 8px" }}>
        <H2 center size={24}>
          This the <span style={{ ...B.gradientText, fontWeight: 700 }}>only</span> offer we make
        </H2>
      </div>

      {/* 17. OfferCard — 1 Pair (primary) — hard shadow=6 */}
      <div style={{ background: BG_CREAM, padding: "12px 14px 8px" }}>
        <div style={{
          background: "#FFF6E2",
          border: `2px solid ${INK}`,
          borderRadius: 18,
          padding: "22px 22px 24px",
          boxShadow: `6px 6px 0 ${INK}`,
        }}>
          {/* eyebrow */}
          <div style={{
            fontSize: 10.5, letterSpacing: 1.8, textTransform: "uppercase",
            color: BG_GOLD, fontWeight: 700, marginBottom: 8,
          }}>
            {c.offerPrimaryEyebrow}
          </div>

          {/* label (1 PAIR) */}
          <div style={{
            fontSize: 12, letterSpacing: 1.6, textTransform: "uppercase",
            color: INK, fontWeight: 700, marginBottom: 6,
          }}>
            {c.offerPrimaryLabel}
          </div>

          {/* price (large light-weight numeric) */}
          <div style={{
            fontSize: 28, fontWeight: 300, lineHeight: 1,
            color: INK, marginBottom: 12, letterSpacing: -0.4,
          }}>
            {c.offerPrimaryPrice}
          </div>

          {/* line one — guarantee highlight */}
          <div style={{
            fontSize: 14, fontWeight: 700, color: INK,
            lineHeight: 1.35, marginBottom: 8,
          }}>
            {c.offerPrimaryLineOne}
          </div>

          {/* line two — body copy */}
          <p style={{
            margin: "0 0 20px", fontSize: 13.5, lineHeight: 1.6,
            color: B.soft,
          }}>
            {c.offerPrimaryLineTwo}
          </p>

          {/* inline CTA button */}
          <a href={c.offerPrimaryCtaHref} style={{
            display: "inline-block", padding: "17px 32px",
            background: INK, color: "#D8F57C", fontSize: 15, fontWeight: 700,
            textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
            marginBottom: 14,
          }}>
            {c.offerPrimaryCtaLabel} {c.offerPrimaryCtaArrow}
          </a>

          {/* whisper line — italic, lighter grey, 13px */}
          <div style={{
            fontSize: 13, color: "#8A8A8A", fontStyle: "italic", marginTop: 4,
          }}>
            {c.offerPrimaryWhisper}
          </div>
        </div>
      </div>

      {/* 18. OfferSeparator — soft gold hr with "or" in the middle */}
      <div style={{ background: BG_CREAM, padding: "20px 14px" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 14,
        }}>
          <hr style={{
            border: "none", borderTop: `1px solid ${BG_GOLD}`,
            opacity: 0.3, width: 60, margin: 0,
          }} />
          <div style={{
            fontSize: 13, color: BG_GOLD, fontStyle: "italic", fontWeight: 500,
            letterSpacing: 0.5,
          }}>
            {c.offerSeparatorText}
          </div>
          <hr style={{
            border: "none", borderTop: `1px solid ${BG_GOLD}`,
            opacity: 0.3, width: 60, margin: 0,
          }} />
        </div>
      </div>

      {/* 19. OfferCard — 3+3 Bundle (secondary) — hard shadow=3 */}
      <div style={{ background: BG_CREAM, padding: "0 14px 8px" }}>
        <div style={{
          background: "#FFF6E2",
          border: `2px solid ${INK}`,
          borderRadius: 18,
          padding: "22px 22px 24px",
          boxShadow: `3px 3px 0 ${INK}`,
        }}>
          {/* eyebrow */}
          <div style={{
            fontSize: 10.5, letterSpacing: 1.8, textTransform: "uppercase",
            color: BG_GOLD, fontWeight: 700, marginBottom: 8,
          }}>
            {c.offerSecondaryEyebrow}
          </div>

          {/* label (3+3 BUNDLE) */}
          <div style={{
            fontSize: 12, letterSpacing: 1.6, textTransform: "uppercase",
            color: INK, fontWeight: 700, marginBottom: 6,
          }}>
            {c.offerSecondaryLabel}
          </div>

          {/* price (large light-weight numeric) */}
          <div style={{
            fontSize: 28, fontWeight: 300, lineHeight: 1,
            color: INK, marginBottom: 12, letterSpacing: -0.4,
          }}>
            {c.offerSecondaryPrice}
          </div>

          {/* line one — free shipping highlight */}
          <div style={{
            fontSize: 14, fontWeight: 700, color: INK,
            lineHeight: 1.35, marginBottom: 14,
          }}>
            {c.offerSecondaryLineOne}
          </div>

          {/* Why 3+3? rationale block */}
          <div style={{
            background: "#FFFBF0",
            borderLeft: `3px solid ${BG_GOLD}`,
            borderRadius: 8,
            padding: "12px 14px",
            marginBottom: 14,
          }}>
            <div style={{
              fontSize: 13, fontWeight: 700, color: INK,
              marginBottom: 6, letterSpacing: -0.1,
            }}>
              {c.offerSecondaryRationaleHeading}
            </div>
            <p style={{
              margin: 0, fontSize: 12.5, lineHeight: 1.55, color: B.soft,
            }}>
              {c.offerSecondaryRationaleBody}
            </p>
          </div>

          {/* price-comparison line — italic gold */}
          <p style={{
            margin: "0 0 18px", fontSize: 13, lineHeight: 1.55,
            color: BG_GOLD, fontStyle: "italic", fontWeight: 600,
          }}>
            {c.offerSecondaryComparisonLine}
          </p>

          {/* inline CTA button */}
          <a href={c.offerSecondaryCtaHref} style={{
            display: "inline-block", padding: "17px 32px",
            background: INK, color: "#D8F57C", fontSize: 15, fontWeight: 700,
            textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
          }}>
            {c.offerSecondaryCtaLabel} {c.offerSecondaryCtaArrow}
          </a>
        </div>
      </div>

      {/* 20. Offer inline product visual — FramedImage, hard shadow=3 */}
      <div style={{ background: BG_CREAM, padding: "16px 14px 28px" }}>
        <FramedImage
          height={200}
          label={c.offerProductLabel}
          sublabel={c.offerProductSublabel}
          shadow={c.offerProductShadow}
        >
          <img
            src={c.offerProductImage}
            alt={c.offerProductAlt}
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 21. Band: cream → teal (transition into guarantee) */}
      <Band from={BG_CREAM} to={BG_TEAL} height={40} />

      {/* 22. H2 — guarantee section heading (centered, size=24) */}
      <div style={{ background: BG_TEAL, padding: "24px 22px 4px", textAlign: "center" }}>
        <H2 center size={24}>
          <span style={{ ...B.gradientText, fontWeight: 700 }}>60 days.</span> By your judgment.
        </H2>
      </div>

      {/* 23. GuaranteeBlock — eyebrow + headline + sub + seal + 3 points */}
      <div style={{ background: BG_TEAL, padding: "20px 22px 12px", textAlign: "center" }}>
        <Eyebrow color={B.tealDeep}>{c.guaranteeLabel}</Eyebrow>
        <h2 style={{
          fontSize: 26, lineHeight: 1.15, fontWeight: 700,
          margin: "0 0 14px", letterSpacing: -0.4,
        }}>
          {c.guaranteeHeadline.split(".")[0]}.{" "}
          <span style={{ ...B.gradientText, fontWeight: 700 }}>
            {c.guaranteeHeadlineAccent}.
          </span>
        </h2>
        <p style={{
          fontSize: 15, color: B.soft, lineHeight: 1.6, margin: 0,
          fontWeight: 500, fontStyle: "italic",
        }}>
          {c.guaranteeSub}
        </p>
      </div>

      {/* 60-Day circular seal */}
      <div style={{ background: BG_TEAL, padding: "16px 14px 20px", display: "flex", justifyContent: "center" }}>
        <div style={{
          position: "relative", width: 200, height: 200,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          background: "#FFFFFF", borderRadius: "50%",
          border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}`,
        }}>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <path id="circlePathE8" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
            </defs>
            <text fill={B.tealDeep} style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              <textPath href="#circlePathE8" startOffset="0">
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
          <div style={{ fontSize: 13, fontWeight: 700, color: INK, letterSpacing: 0.5, marginTop: 2 }}>
            {c.guaranteeSealLabel}
          </div>
          <div style={{ fontSize: 10.5, color: B.soft, marginTop: 4, letterSpacing: 0.5 }}>
            Full refund · No forms
          </div>
        </div>
      </div>

      {/* 3 guarantee points (color-coded checkmark cards) */}
      <div style={{ background: BG_TEAL, padding: "16px 14px 32px" }}>
        {c.guaranteePoints.map((p, i) => (
          <div key={i} style={{
            marginBottom: 12, background: "#FFFFFF", borderRadius: 16,
            overflow: "hidden", border: `2px solid ${INK}`,
            boxShadow: `3px 3px 0 ${INK}`,
            display: "flex", alignItems: "stretch",
          }}>
            <div style={{
              width: 42, flexShrink: 0, background: p.color,
              color: "#FFF", fontSize: 16, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRight: `2px solid ${INK}`,
            }}>✓</div>
            <div style={{ padding: "14px 18px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: INK, marginBottom: 6, lineHeight: 1.3 }}>
                {p.title}
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: B.soft }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 24. Band: teal → cream (transition into signoff) */}
      <Band from={BG_TEAL} to={BG_HERO} height={40} />

      {/* 25. Soft close inline breaker — FramedImage (washing machine), hard shadow=3 */}
      <div style={{ background: BG_HERO, padding: "4px 14px 24px" }}>
        <FramedImage
          height={200}
          label={c.softCloseLabel}
          sublabel={c.softCloseSublabel}
          shadow={c.softCloseShadow}
        >
          <img
            src={c.softCloseImage}
            alt={c.softCloseAlt}
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </FramedImage>
      </div>

      {/* 26. Signoff (Lena Bauer, long variant) */}
      <Signoff bg={BG_CTA} />

      {/* 27. Footer */}
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email8 });
