/* Welcome GF · 8 Email Components · Uses shared primitives from welcome-flow/primitives.jsx
   + product-showcase.jsx
   No imports. Primitives come from window.* (set by the Local.html loader).
   Verbatim copy from c.* (window.FLOW_WELCOME_GF.eN).
*/

const {
  EmailShell, Header, PartBadge, TitleBlock, Eyebrow, H2, Letter, Band,
  FramedImage, ImgFrame, Signoff, OutLine, Footer,
  ProductShowcaseFull, ProductShowcaseMedium, ProductShowcaseSoft
} = window;
const B = window.BRAND;
const F = window.FONT;


// ═══════════════════════════════════════════════════════════════
// Reusable: 60-Day Guarantee circular seal (inline JSX, from email-6.jsx)
// ═══════════════════════════════════════════════════════════════
const GuaranteeSeal = ({ accent, sublabel, points }) => (
  <div style={{ position: "relative", width: 200, height: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#FFFFFF", borderRadius: "50%", border: `3px solid ${B.ink}`, boxShadow: `6px 6px 0 ${B.ink}`, margin: "0 auto" }}>
    <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
      </defs>
      <text fill={B.tealDeep} style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
        <textPath href="#circlePath" startOffset="0">· Calm Progress · No Questions · Real Returns · {accent} Full Days ·</textPath>
      </text>
    </svg>
    <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 }}>Protected by</div>
    <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, ...B.gradientText }}>{accent.split(" ")[0]}</div>
    <div style={{ fontSize: 13, fontWeight: 700, color: B.ink, letterSpacing: 0.5, marginTop: 2 }}>{accent.split(" ").slice(1).join(" ") || "Calm Days"}</div>
    {sublabel && <div style={{ fontSize: 10.5, color: B.soft, marginTop: 4, letterSpacing: 0.5, textAlign: "center", maxWidth: 130 }}>{sublabel}</div>}
  </div>
);

const GuaranteePoints = ({ points, accent }) => {
  const accents = [B.teal, B.green, "#E8A23D"];
  return (
    <div style={{ padding: "16px 14px 28px" }}>
      {points.map((p, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, overflow: "hidden", boxShadow: `3px 3px 0 ${B.ink}` }}>
          <div style={{ width: 42, flexShrink: 0, background: accents[i], color: "#FFF", fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", borderRight: `2px solid ${B.ink}` }}>✓</div>
          <div style={{ padding: "14px 18px" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: B.ink, marginBottom: 6, lineHeight: 1.3 }}>{p.title}</div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: B.soft }}>{p.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const TestimonialCard = ({ quote, by, family }) => (
  <div style={{ background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, padding: "16px 18px", marginBottom: 12, boxShadow: `3px 3px 0 ${B.ink}` }}>
    {family && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: B.teal, textTransform: "uppercase", marginBottom: 8 }}>{family}</div>}
    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: B.ink, fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
    {by && <div style={{ marginTop: 10, fontSize: 12.5, color: B.soft, fontStyle: "italic" }}>, {by}</div>}
  </div>
);

const RecapCard = ({ label, body }) => (
  <div style={{ background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, padding: "16px 18px", boxShadow: `3px 3px 0 ${B.ink}` }}>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: B.teal, textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: B.ink }}>{body}</p>
  </div>
);

const StatCallout = ({ number, label, compare }) => (
  <div style={{ background: "#EAF6F2", border: `2px solid ${B.teal}`, borderRadius: 16, padding: "24px 22px", textAlign: "center", margin: "20px 14px" }}>
    <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1, ...B.gradientText, letterSpacing: -1 }}>{number}</div>
    <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.5, color: B.ink, fontWeight: 600 }}>{label}</p>
    {compare && <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.5, color: B.soft }}>{compare}</p>}
  </div>
);

const LayerRow = ({ num, name, body }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0", borderBottom: `1px solid ${B.teal}33` }}>
    <div style={{ width: 32, height: 32, flexShrink: 0, borderRadius: "50%", background: B.gradient, color: "#FFF", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
    <div>
      <div style={{ fontSize: 14.5, fontWeight: 700, color: B.ink, marginBottom: 2 }}>{name}</div>
      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: B.soft }}>{body}</p>
    </div>
  </div>
);

const HeroImage = ({ height = 240, label, sublabel, shadow = 6, src, alt }) => (
  <div style={{ margin: "24px 14px 0" }}>
    <FramedImage height={height} shadow={shadow}>
      {src ? (
        <img src={src} alt={alt || label} style={{ width: "100%", height, objectFit: "cover", display: "block" }} />
      ) : (
        <ImgFrame height={height} label={label} sublabel={sublabel} />
      )}
    </FramedImage>
  </div>
);

const BG_HERO = "#FFFBF0";
const BG_LETTER = "#FFF6E2";
const BG_GUARANTEE = "#EAF6F2";
const BG_PRODUCT = "#F0EDF8";
const BG_CLOSING = "#FFF6E2";
const BG_CTA = B.ink;

const INLINE_IMAGE = "product-photos/lifestyle/toddler-livingroom-dino-yellow.png";


// ═══════════════════════════════════════════════════════════════
// EMAIL 1 · Day 0
// ═══════════════════════════════════════════════════════════════
const Email1 = () => {
  const c = window.FLOW_WELCOME_GF.e1;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <HeroImage
        height={240}
        label="HERO · GENTLE INVITATION"
        sublabel="Warm light on a child, no urgency, no performance. Ratio ~5:3"
        src={INLINE_IMAGE}
        alt="A toddler in a calm living room, looking at the camera"
      />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} subhead={c.subhead} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.validation} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.mechanism} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "8px 22px 24px" }}>
        {c.socialProof.map((t, i) => <TestimonialCard key={i} quote={t.quote} by={t.by} />)}
        <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: B.soft, fontStyle: "italic", padding: "0 4px" }}>{c.socialProofClosing}</p>
      </div>

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.product} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 0", textAlign: "center" }}>
        <Eyebrow>{c.guaranteeLabel}</Eyebrow>
        <H2 size={30} center>
          The <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeAccent}</span> Guarantee.
        </H2>
        <p style={{ fontSize: 15.5, color: B.soft, lineHeight: 1.55, margin: 0, fontWeight: 500, fontStyle: "italic" }}>{c.guaranteeSub}</p>
      </div>

      <div style={{ background: BG_GUARANTEE, padding: "16px 14px 0", display: "flex", justifyContent: "center" }}>
        <GuaranteeSeal accent={c.guaranteeAccent} sublabel="Full refund, no forms" />
      </div>

      <GuaranteePoints points={c.guaranteePoints} accent={c.guaranteeAccent} />

      <Band from={BG_GUARANTEE} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow="THE BUNDLE"
          title="One pair at a time."
          titleAccent="One pair at a time."
          sub="Cotton inner, smart absorption, leak-resistant outer. The signal your child's brain has been missing."
          priceFrom="€34"
          priceNote="€79.99 for 3+3 bundle · €30.60 with BRIGHT10"
          ctaButton={c.ctaText}
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <div style={{ background: BG_CLOSING, padding: "20px 24px 8px", textAlign: "center", fontSize: 13.5, color: B.soft, lineHeight: 1.55 }}>
        {c.psLine}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />
      <CustomCTA button={c.ctaText} href={c.ctaHref} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 2 · Day 1
// ═══════════════════════════════════════════════════════════════
const Email2 = () => {
  const c = window.FLOW_WELCOME_GF.e2;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <HeroImage
        height={220}
        label="HERO · MECHANISM"
        sublabel="A still image suggesting a body-signal pathway from the body to the brain. Ratio ~5:3"
        shadow={6}
      />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.letterOpening} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.mechanism} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 8px", textAlign: "center" }}>
        <Eyebrow>{c.definitionLabel}</Eyebrow>
        <H2 size={36} center>
          <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.definitionTitle}</span>
        </H2>
      </div>
      <Letter bg={BG_GUARANTEE} paras={c.definitionBody} />

      <Band from={BG_GUARANTEE} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, padding: "24px 22px 20px" }}>
        <Eyebrow>{c.expertLabel}</Eyebrow>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: B.ink, fontWeight: 500, fontStyle: "italic" }}>&ldquo;{c.expertQuote}&rdquo;</p>
        <p style={{ margin: "10px 0 0", fontSize: 12.5, color: B.soft, fontStyle: "italic" }}>, {c.expertBy}</p>
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <div style={{ background: BG_CLOSING, padding: "20px 24px 8px", textAlign: "center", fontSize: 13.5, color: B.soft, lineHeight: 1.55, fontStyle: "italic" }}>
        {c.psLine}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />
      <CustomCTA button={c.ctaText} href={c.ctaHref} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 3 · Day 3
// ═══════════════════════════════════════════════════════════════
const Email3 = () => {
  const c = window.FLOW_WELCOME_GF.e3;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <StatCallout number={c.stat.number} label={c.stat.label} compare={c.stat.compare} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.mechanism} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "4px 22px 24px" }}>
        {c.testimonials.map((t, i) => <TestimonialCard key={i} quote={t.quote} by={t.by} />)}
      </div>

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.product} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 16px", textAlign: "center" }}>
        <Eyebrow>{c.guaranteeLabel}</Eyebrow>
        <H2 size={30} center>
          The <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeAccent}</span> Guarantee.
        </H2>
        <p style={{ fontSize: 15.5, color: B.soft, lineHeight: 1.55, margin: 0, fontWeight: 500, fontStyle: "italic" }}>{c.guaranteeSub}</p>
      </div>

      <Band from={BG_GUARANTEE} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow="THE 3+3 BUNDLE"
          title="Six pairs. Three days of wear."
          titleAccent="Three in the laundry."
          sub="Cotton inner, smart absorption, leak-resistant outer. Built around one principle: the brain learns through feedback."
          priceFrom="€34"
          priceNote="€79.99 for 3+3 bundle · €30.60 with BRIGHT10"
          ctaButton={c.ctaText}
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <div style={{ background: BG_CLOSING, padding: "20px 24px 8px", textAlign: "center", fontSize: 13.5, color: B.soft, lineHeight: 1.55, fontStyle: "italic" }}>
        {c.psLine}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />
      <CustomCTA button={c.ctaText} href={c.ctaHref} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 4 · Day 7
// ═══════════════════════════════════════════════════════════════
const Email4 = () => {
  const c = window.FLOW_WELCOME_GF.e4;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.validation} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.mechanism} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "4px 22px 24px" }}>
        {c.testimonials.map((t, i) => <TestimonialCard key={i} family={t.family} quote={t.quote} by={t.by} />)}
        <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: B.soft, fontStyle: "italic", padding: "0 4px" }}>{c.testimonialsClosing}</p>
      </div>

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.product} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 24px", textAlign: "center" }}>
        <Eyebrow>{c.guaranteeLabel}</Eyebrow>
        <H2 size={30} center>
          The <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeAccent}</span> Guarantee.
        </H2>
        <p style={{ fontSize: 15.5, color: B.soft, lineHeight: 1.55, margin: 0, fontWeight: 500, fontStyle: "italic" }}>{c.guaranteeSub}</p>
      </div>

      <Band from={BG_GUARANTEE} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow="THE 3+3 BUNDLE"
          title="Six pairs. Full rotation."
          titleAccent="Three in the laundry."
          sub="PFAS-free, BPA-free. Designed alongside OT practitioners who understand sensory processing."
          priceFrom="€34"
          priceNote="€79.99 for 3+3 bundle · Free shipping"
          ctaButton={c.ctaText}
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <div style={{ background: BG_CLOSING, padding: "20px 24px 8px", textAlign: "center", fontSize: 13.5, color: B.soft, lineHeight: 1.55, fontStyle: "italic" }}>
        {c.psLine}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />
      <CustomCTA button={c.ctaText} href={c.ctaHref} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 5 · Day 10
// ═══════════════════════════════════════════════════════════════
const Email5 = () => {
  const c = window.FLOW_WELCOME_GF.e5;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "4px 22px 24px" }}>
        {c.objections.map((o, i) => (
          <div key={i} style={{ background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, padding: "16px 18px", marginBottom: 12, boxShadow: `3px 3px 0 ${B.ink}`, borderLeft: `4px solid ${B.teal}` }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: B.ink, marginBottom: 8, lineHeight: 1.3 }}>{o.header}</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: B.soft }}>{o.body}</p>
          </div>
        ))}
      </div>

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.reframe} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.mechanism} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "4px 22px 24px" }}>
        {c.socialProof.map((t, i) => <TestimonialCard key={i} quote={t.quote} by={t.by} />)}
        <div style={{ background: "#FFFFFF", border: `2px solid ${B.yellow}`, borderRadius: 12, padding: "12px 16px", marginTop: 12, textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: B.ink }}>{c.socialProofStat}</p>
        </div>
      </div>

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.product} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 24px", textAlign: "center" }}>
        <Eyebrow>{c.guaranteeLabel}</Eyebrow>
        <H2 size={30} center>
          The <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeAccent}</span> Guarantee.
        </H2>
        <p style={{ fontSize: 15.5, color: B.soft, lineHeight: 1.55, margin: 0, fontWeight: 500, fontStyle: "italic" }}>{c.guaranteeSub}</p>
      </div>

      <Band from={BG_GUARANTEE} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow="THE 3+3 BUNDLE"
          title="Try the 3+3 Bundle."
          titleAccent="60 days, your judgment."
          sub="6 pairs, full rotation, daily feedback. Cotton inner, smart absorption, leak-resistant outer."
          priceFrom="€34"
          priceNote="€79.99 for 3+3 bundle · Free shipping"
          ctaButton={c.ctaText}
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <div style={{ background: BG_CLOSING, padding: "20px 24px 8px", textAlign: "center", fontSize: 13.5, color: B.soft, lineHeight: 1.55, fontStyle: "italic" }}>
        {c.psLine}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />
      <CustomCTA button={c.ctaText} href={c.ctaHref} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 6 · Day 14
// ═══════════════════════════════════════════════════════════════
const Email6 = () => {
  const c = window.FLOW_WELCOME_GF.e6;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.validation} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.mechanism} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "4px 22px 24px" }}>
        {c.testimonials.map((t, i) => <TestimonialCard key={i} quote={t.quote} by={t.by} />)}
      </div>

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "32px 22px 24px", textAlign: "center" }}>
        <Eyebrow>{c.guaranteeLabel}</Eyebrow>
        <H2 size={30} center>
          The <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeAccent}</span> Guarantee.
        </H2>
        <p style={{ fontSize: 15.5, color: B.soft, lineHeight: 1.55, margin: 0, fontWeight: 500, fontStyle: "italic" }}>{c.guaranteeSub}</p>
      </div>

      <Band from={BG_GUARANTEE} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow="THE OPPOSITE OF PULL-UPS"
          title="The 3+3 Bundle."
          titleAccent="€79.99, free shipping."
          sub="Costs a fraction of what you're spending on disposables. Does the opposite of what pull-ups do: teaches, doesn't hide."
          priceFrom="€34"
          priceNote="€79.99 for 3+3 bundle · €30.60 with BRIGHT10"
          ctaButton={c.ctaText}
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <div style={{ background: BG_CLOSING, padding: "16px 24px 8px", textAlign: "center", fontSize: 13, color: B.soft, lineHeight: 1.55, fontStyle: "italic" }}>
        {c.psLine}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />
      <CustomCTA button={c.ctaText} href={c.ctaHref} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 7 · Day 17
// ═══════════════════════════════════════════════════════════════
const Email7 = () => {
  const c = window.FLOW_WELCOME_GF.e7;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.validation} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.mechanism.slice(0, 4)} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "24px 22px 8px" }}>
        <Eyebrow>THE 3-LAYER BODY-SIGNAL LEARNING SYSTEM</Eyebrow>
        <LayerRow num="1" name="Signal Creation" body="A gentle, sustained 'uh-oh' sensation that lasts 30-60 seconds. Unlike pull-ups that wick moisture away instantly, the BSL layer lets the sensation linger, long enough for the brain to register: something happened." />
        <LayerRow num="2" name="Smart Absorption" body="Protects furniture and clothing without blocking the learning signal." />
        <LayerRow num="3" name="Leak-Resistant Barrier" body="Contains accidents without feeling like a diaper." />
      </div>
      <div style={{ background: BG_GUARANTEE, padding: "8px 22px 24px", fontSize: 14, lineHeight: 1.6, color: B.ink, fontStyle: "italic", fontWeight: 500 }}>
        {c.mechanism.slice(4).join(" ")}
      </div>

      <Band from={BG_GUARANTEE} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "4px 22px 24px" }}>
        {c.testimonials.map((t, i) => <TestimonialCard key={i} quote={t.quote} by={t.by} />)}
        <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: B.soft, fontStyle: "italic", padding: "0 4px" }}>{c.testimonialsClosing}</p>
      </div>

      <Band from={BG_LETTER} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.product} />

      <Band from={BG_LETTER} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, paddingBottom: 8 }}>
        <ProductShowcaseFull
          eyebrow="THE 3+3 BUNDLE"
          title="Training wheels for the body signal."
          titleAccent="6 pairs, full rotation."
          sub="Cotton inner, smart absorption, leak-resistant outer. Free shipping. 60-day risk-free trial."
          priceFrom="€34"
          priceNote="€79.99 for 3+3 bundle · €30.60 with BRIGHT10"
          ctaButton={c.ctaText}
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <div style={{ background: BG_CLOSING, padding: "20px 24px 8px", textAlign: "center", fontSize: 13.5, color: B.soft, lineHeight: 1.55, fontStyle: "italic" }}>
        {c.psLine}
      </div>

      <Band from={BG_CLOSING} to={BG_CTA} height={50} />
      <CustomCTA button={c.ctaText} href={c.ctaHref} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 8 · Day 21
// ═══════════════════════════════════════════════════════════════
const Email8 = () => {
  const c = window.FLOW_WELCOME_GF.e8;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} paras={c.hook} />

      <Band from={BG_LETTER} to={BG_LETTER} />
      <div style={{ background: BG_LETTER, padding: "4px 22px 24px" }}>
        <Eyebrow>OVER 21 DAYS, WE COVERED</Eyebrow>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
          {c.recap.map((r, i) => <RecapCard key={i} label={r.label} body={r.body} />)}
        </div>
        <p style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.6, color: B.soft, fontStyle: "italic" }}>{c.recapClosing}</p>
      </div>

      <Band from={BG_LETTER} to={BG_GUARANTEE} />
      <div style={{ background: BG_GUARANTEE, padding: "24px 22px", textAlign: "center", border: `2px solid ${B.yellow}`, borderRadius: 16, margin: "20px 14px" }}>
        <Eyebrow>{c.migrationLabel}</Eyebrow>
        <p style={{ margin: "10px 0 16px", fontSize: 15, lineHeight: 1.55, color: B.ink, fontWeight: 500 }}>{c.migrationText}</p>
        <a href={c.migrationHref} style={{
          display: "inline-block", background: B.ink, color: "#FFFFFF", padding: "12px 22px", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: 0.5
        }}>More Detailed Assessment →</a>
      </div>

      <Band from={BG_GUARANTEE} to={BG_PRODUCT} />
      <div style={{ background: BG_PRODUCT, padding: "32px 22px" }}>
        <div style={{ background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, padding: "20px 22px", marginBottom: 16, boxShadow: `3px 3px 0 ${B.ink}`, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: B.teal, textTransform: "uppercase", marginBottom: 6 }}>{c.offer.primary.label}</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: B.ink, marginBottom: 4 }}>{c.offer.primary.price}</div>
          <p style={{ margin: "0 0 16px", fontSize: 12.5, color: B.soft }}>{c.offer.primary.note}</p>
          <a href={c.offer.primary.href} style={{
            display: "inline-block", background: B.ink, color: "#FFFFFF", padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: 0.5
          }}>{c.offer.primary.cta}</a>
        </div>

        <div style={{ textAlign: "center", margin: "12px 0", fontSize: 12, color: B.soft, letterSpacing: 2, textTransform: "uppercase" }}>or</div>

        <div style={{ background: "#FFFFFF", border: `2px solid ${B.ink}`, borderRadius: 16, padding: "20px 22px", boxShadow: `3px 3px 0 ${B.ink}`, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: B.teal, textTransform: "uppercase", marginBottom: 6 }}>{c.offer.secondary.label}</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: B.ink, marginBottom: 4 }}>{c.offer.secondary.price}</div>
          <p style={{ margin: "0 0 12px", fontSize: 12.5, color: B.soft }}>{c.offer.secondary.note}</p>
          <a href={c.offer.secondary.href} style={{
            display: "inline-block", background: B.ink, color: "#FFFFFF", padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: 0.5
          }}>{c.offer.secondary.cta}</a>
          <p style={{ margin: "14px 0 0", fontSize: 12, color: B.soft, lineHeight: 1.5 }}>{c.offer.secondary.rationale}</p>
        </div>
      </div>

      <Band from={BG_PRODUCT} to={BG_CLOSING} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};



// Custom CTA that uses the actual href (CTAClose primitive hardcodes href="#")
const CustomCTA = ({ button, href, fine }) => (
  <div style={{ background: B.ink, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" }}>
    <a href={href} style={{
      display: "inline-block", padding: "17px 32px",
      background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
      textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
    }}>{button}</a>
    {fine && <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>{fine}</div>}
  </div>
);

Object.assign(window, { Email1, Email2, Email3, Email4, Email5, Email6, Email7, Email8 });
