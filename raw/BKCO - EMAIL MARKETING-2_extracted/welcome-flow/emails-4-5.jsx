/* Email 4 · How the Product Works — Soft reveal
   First direct product intro. No discount. Feels like a reveal.
*/

const Email4 = () => {
  const c = window.FLOW1.e4;
  const BG_HERO = "#FFFBF0";
  const BG_PRODUCT_FULL = "#F5F1EA";
  const BG_LETTER = "#FFF6E2";
  const BG_PRODUCT = "#F0EDF8";
  const BG_LAYERS = "#FFFBF0";
  const BG_FEEL = "#EAF6F2";
  const BG_TEST = "#FFF6E2";
  const BG_OBJ = "#FFFFFF";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Hero — the reveal */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={260}
          label="HERO · PRODUCT REVEAL"
          sublabel="Hero product shot · 2-3 pairs of BrightKidCo pants · soft light, calm composition. Not flashy, editorial. Ratio ~4:3"
          shadow={6}
        />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} first="Okay — here it is." paras={c.letterOpening} />

      <Band from={BG_LETTER} to={BG_PRODUCT} />

      {/* Product intro — name + mission */}
      <div style={{ background: BG_PRODUCT, padding: "32px 22px 20px", textAlign: "center" }}>
        <Eyebrow>{c.productLabel}</Eyebrow>
        <H2 size={28} center>
          Three layers.<br/>
          <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.productAccent}</span>
        </H2>
        <p style={{ fontSize: 15, color: B.soft, lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
          {c.productSub}
        </p>
      </div>

      {/* Cross-section image */}
      <div style={{ background: BG_PRODUCT, padding: "8px 14px 24px" }}>
        <FramedImage
          height={260}
          label="CROSS-SECTION DIAGRAM"
          sublabel="Technical illustration · 3 layers labelled, gentle teal/green annotations, minimal. Could be hand-drawn style. Ratio ~4:3"
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_LAYERS} />

      {/* 3 layers explained */}
      <div style={{ background: BG_LAYERS, padding: "24px 14px 8px" }}>
        {c.layers.map((l, i) => {
          const accents = [B.teal, B.green, "#E8A23D"];
          return (
            <div key={i} style={{
              marginBottom: 16, background: "#FFF", borderRadius: 18,
              overflow: "hidden", border: `2px solid ${B.ink}`,
              boxShadow: `3px 3px 0 ${B.ink}`,
            }}>
              <div style={{ background: `${accents[i]}15` }}>
                <ImgFrame
                  height={140}
                  radius={0}
                  label={`LAYER ${l.n} · MACRO`}
                  sublabel={i === 0 ? "Fabric macro · top surface texture, soft" : i === 1 ? "Middle layer · subtle pattern / gentle line texture" : "Bottom containment layer · hand squeezing, no moisture visible"}
                />
              </div>
              <div style={{ padding: "18px 20px 20px", borderTop: `2px solid ${B.ink}`, background: "#FFFDF6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: accents[i], color: "#FFF",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700, border: `2px solid ${B.ink}`,
                  }}>{l.n}</div>
                  <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700, lineHeight: 1.25 }}>{l.name}</h3>
                </div>
                <p style={{ margin: "0 0 8px", fontSize: 13, color: B.muted, fontWeight: 600 }}>{l.what}</p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: B.ink }}>{l.does}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Band from={BG_LAYERS} to={BG_FEEL} />

      {/* What it feels like · for child + parent */}
      <div style={{ background: BG_FEEL, padding: "28px 22px 8px" }}>
        <Eyebrow>{c.feelLabel}</Eyebrow>
        <H2 size={24}>On your child's <span style={{ ...B.gradientText, fontWeight: 700 }}>body</span>.</H2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {c.feelPoints.map((p, i) => (
            <li key={i} style={{ fontSize: 15, lineHeight: 1.55, color: B.ink, padding: "10px 0", borderTop: i === 0 ? "none" : `1px solid ${B.teal}22`, display: "flex", gap: 10 }}>
              <span style={{ color: B.green, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ background: BG_FEEL, padding: "4px 22px 28px" }}>
        <Eyebrow>{c.forYouLabel}</Eyebrow>
        <H2 size={24}>In your <span style={{ ...B.gradientText, fontWeight: 700 }}>day</span>.</H2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {c.forYouPoints.map((p, i) => (
            <li key={i} style={{ fontSize: 15, lineHeight: 1.55, color: B.ink, padding: "10px 0", borderTop: i === 0 ? "none" : `1px solid ${B.teal}22`, display: "flex", gap: 10 }}>
              <span style={{ color: B.green, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <Band from={BG_FEEL} to={BG_TEST} />

      {/* Sensory-specific testimonial */}
      <div style={{ background: BG_TEST, padding: "16px 14px 32px" }}>
        <div style={{
          padding: "26px 22px", background: "#FFD866",
          borderRadius: 20, border: `2px solid ${B.ink}`,
          boxShadow: `4px 4px 0 ${B.ink}`, transform: "rotate(-0.4deg)",
        }}>
          <Eyebrow color={B.ink}>{c.testimonialLabel}</Eyebrow>
          <div style={{ fontSize: 36, lineHeight: 0.8, color: B.ink, fontWeight: 700, marginBottom: 6 }}>"</div>
          <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, margin: "0 0 12px", fontStyle: "italic", color: B.ink }}>
            {c.testimonial}
          </p>
          <div style={{ fontSize: 12, color: B.ink, fontWeight: 700 }}>— {c.testimonialBy}</div>
        </div>
      </div>

      <Band from={BG_TEST} to={BG_OBJ} />

      {/* Objections */}
      <div style={{ background: BG_OBJ, padding: "28px 22px 16px" }}>
        <Eyebrow>{c.objectionsLabel}</Eyebrow>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 10 }}>
          {c.objections.map((o, i) => (
            <div key={i} style={{ borderTop: `1px solid ${B.teal}33`, paddingTop: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: B.ink, marginBottom: 6 }}>
                {o.q}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 }}>{o.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product lifestyle row */}
      <div style={{ background: BG_OBJ, padding: "16px 14px 8px", display: "flex", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <FramedImage height={140} label="FABRIC · MACRO" sublabel="Soft close-up" shadow={3} />
        </div>
        <div style={{ flex: 1 }}>
          <FramedImage height={140} label="ON-BODY · DETAIL" sublabel="Waistband seam" shadow={3} />
        </div>
      </div>

      <Band from={BG_OBJ} to={BG_PRODUCT_FULL} />

      {/* Full product showcase — the buy moment */}
      <div style={{ background: BG_PRODUCT_FULL }}>
        <ProductShowcaseFull
          eyebrow="The pants, simply"
          title="Three layers."
          titleAccent="One quiet tool."
          sub="The method you just read about — made wearable, washable, and ready when your child is."
          priceFrom="€34"
          priceNote="Starter pair · Free shipping over €50"
          ctaButton="Shop the pants"
        />
      </div>

      <Band from={BG_PRODUCT_FULL} to={BG_CTA} height={50} />

      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

/* ═════════════════════════════════════════════════════
   Email 5 · Parent-to-Parent Deep Proof — Sarah's story
   ═════════════════════════════════════════════════════ */
const Email5 = () => {
  const c = window.FLOW1.e5;
  const BG_HERO = "#FAF7F0";
  const BG_INTRO = "#FFFBF0";
  const BG_CH = "#FFF6E2";
  const BG_PULL = "#EAF6F2";
  const BG_WHY = "#FFFBF0";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Full-width hero of Sarah + child */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={320}
          label="HERO · SARAH & HER SON"
          sublabel="Full-width portrait · mum + 5yo ASD son · honest, quiet moment · living room or kitchen · no staging. Ratio ~4:5 (portrait)"
          shadow={6}
        />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} subhead={c.subhead} />

      <Band from={BG_HERO} to={BG_INTRO} />
      <Letter bg={BG_INTRO} first="Meet Sarah." paras={c.intro} />

      <Band from={BG_INTRO} to={BG_CH} />

      {/* Chapters */}
      <div style={{ background: BG_CH, padding: "24px 14px 8px" }}>
        {c.chapters.map((ch, i) => (
          <div key={i} style={{
            marginBottom: 20, background: "#FFFFFF", borderRadius: 18,
            overflow: "hidden", border: `2px solid ${B.ink}`,
            boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            {/* chapter image */}
            <ImgFrame
              height={150}
              radius={0}
              label={`CH ${i+1} · ${ch.label.toUpperCase()}`}
              sublabel={i === 0 ? "Sarah's starting point · tired kitchen morning" : i === 1 ? "Bathroom floor detail · reflective moment" : i === 2 ? "First calm morning · child looking content" : "Current life · parent & child laughing in garden"}
            />
            <div style={{ padding: "20px 20px 22px", borderTop: `2px solid ${B.ink}`, background: "#FFFDF6" }}>
              <Eyebrow color={B.tealDeep}>Chapter {i + 1} · {ch.label}</Eyebrow>
              <h3 style={{ margin: "4px 0 12px", fontSize: 20, fontWeight: 700, lineHeight: 1.25, fontStyle: "italic", color: B.ink }}>
                {ch.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: B.soft }}>
                {ch.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Band from={BG_CH} to={BG_PULL} />

      {/* Pull-quote */}
      <div style={{ background: BG_PULL, padding: "36px 22px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 48, lineHeight: 0.8, color: B.teal, fontWeight: 700, marginBottom: 12 }}>"</div>
        <p style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 500, margin: 0, fontStyle: "italic", color: B.ink, letterSpacing: -0.3 }}>
          {c.pullquote}
        </p>
        <div style={{ margin: "24px auto 0", width: 48, height: 3, background: B.gradient, borderRadius: 3 }} />
      </div>

      <Band from={BG_PULL} to={BG_WHY} />

      {/* Why we chose this story */}
      <div style={{ background: BG_WHY, padding: "28px 22px 24px" }}>
        <Eyebrow>{c.why.label}</Eyebrow>
        <p style={{ fontSize: 15.5, lineHeight: 1.7, color: B.ink, margin: 0 }}>{c.why.body}</p>
      </div>

      {/* Inline product reference card */}
      <div style={{ background: BG_WHY }}>
        <ProductShowcaseMedium
          eyebrow="The method Sarah used"
          title="Body-Signal Learning Layer™"
          priceFrom="€34"
          ctaButton="Try the pants Sarah used"
        />
      </div>

      <Band from={BG_WHY} to={BG_CTA} height={50} />

      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email4, Email5 });
