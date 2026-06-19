/* Email 6 · The Invitation — 60-Day Calm Progress Guarantee
   Risk-reversal as hero. No urgency. Calm permission.
*/

const Email6 = () => {
  const c = window.FLOW1.e6;
  const BG_HERO = "#FFFBF0";
  const BG_LETTER = "#FFF6E2";
  const BG_GUARANTEE = "#EAF6F2";
  const BG_COVERED = "#FFFBF0";
  const BG_PRODUCT = "#F0EDF8";
  const BG_CLOSING = "#FFF6E2";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Hero — quiet invitation image */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={240}
          label="HERO · GENTLE INVITATION"
          sublabel="Hand reaching toward door handle / open door to quiet room · warm afternoon light · invitational, no urgency. Ratio ~5:3"
          shadow={6}
        />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} first="Here we are." paras={c.letterOpening} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />

      {/* ═ THE GUARANTEE — hero moment ═ */}
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 20px", textAlign: "center" }}>
        <Eyebrow>{c.guaranteeLabel}</Eyebrow>
        <H2 size={30} center>
          The <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeAccent}</span><br/>
          Guarantee.
        </H2>
        <p style={{ fontSize: 15.5, color: B.soft, lineHeight: 1.55, margin: 0, fontWeight: 500, fontStyle: "italic" }}>
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
          {/* rotating ring text via svg */}
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
            </defs>
            <text fill={B.tealDeep} style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              <textPath href="#circlePath" startOffset="0">
                · Calm Progress · No Questions · Real Returns · Sixty Full Days ·
              </textPath>
            </text>
          </svg>

          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 }}>Protected by</div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, ...B.gradientText }}>60</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: B.ink, letterSpacing: 0.5, marginTop: 2 }}>Calm Days</div>
          <div style={{ fontSize: 10.5, color: B.soft, marginTop: 4, letterSpacing: 0.5 }}>Full refund · No forms</div>
        </div>
      </div>

      {/* 3 guarantee points */}
      <div style={{ background: BG_GUARANTEE, padding: "16px 14px 28px" }}>
        {c.guaranteePoints.map((p, i) => {
          const accents = [B.teal, B.green, "#E8A23D"];
          return (
            <div key={i} style={{
              marginBottom: 12, background: "#FFFFFF", borderRadius: 16,
              overflow: "hidden", border: `2px solid ${B.ink}`,
              boxShadow: `3px 3px 0 ${B.ink}`,
              display: "flex", alignItems: "stretch",
            }}>
              <div style={{
                width: 42, flexShrink: 0, background: accents[i],
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
          );
        })}
      </div>

      <Band from={BG_GUARANTEE} to={BG_COVERED} />

      {/* What's covered */}
      <div style={{ background: BG_COVERED, padding: "28px 22px 8px" }}>
        <Eyebrow>{c.covered.label}</Eyebrow>
        <H2 size={26}>
          Every scenario. <span style={{ ...B.gradientText, fontWeight: 700 }}>No asterisks.</span>
        </H2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {c.covered.items.map((item, i) => (
            <li key={i} style={{
              fontSize: 14.5, lineHeight: 1.55, color: B.ink,
              padding: "14px 0",
              borderBottom: i === c.covered.items.length - 1 ? "none" : `1px solid ${B.teal}33`,
              display: "flex", gap: 12,
            }}>
              <span style={{
                flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                background: B.gradient, color: "#FFFFFF",
                fontSize: 11, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ background: BG_COVERED, padding: "20px 22px 28px" }}>
        <div style={{
          padding: "14px 18px", background: "#FFFDF6",
          border: `2px dashed ${B.teal}`, borderRadius: 14,
          fontSize: 12.5, lineHeight: 1.55, color: B.soft, fontStyle: "italic",
        }}>
          From our returns policy: <span style={{ color: B.ink, fontWeight: 600 }}>"If it's not the right fit for your family within 60 days — for any reason — we'll refund you. No questions, no forms, no proof of progress required."</span>
        </div>
      </div>

      <Band from={BG_COVERED} to={BG_PRODUCT} />

      {/* Full product showcase — the hero buy moment */}
      <div style={{ background: BG_PRODUCT, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow={c.productLabel}
          title={c.productTitle.split(".")[0] + "."}
          titleAccent="One pair."
          sub={c.productSub}
          priceFrom="€34"
          priceNote={c.productPriceNote}
          ctaButton="Start with one pair"
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />

      {/* Closing letter */}
      <div style={{ background: BG_CLOSING, padding: "28px 24px 32px", fontSize: 15.5, lineHeight: 1.7, color: B.soft }}>
        {c.closing.map((p, i) => (
          <p key={i} style={{
            margin: i === c.closing.length - 1 ? 0 : "0 0 14px",
            fontSize: i === 2 ? 17 : 15.5,
            color: i === 2 ? B.ink : B.soft,
            fontWeight: i === 2 ? 600 : 400,
            fontStyle: i === 1 ? "italic" : "normal",
          }}>{p}</p>
        ))}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />

      {/* CTA */}
      <CTAClose intro="Whenever you're ready." button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email6 });
