/* welcome-01-e1-gf · Email 1 · Day 0 · Welcome
   Subject: Your child might not feel the signal
   Level: General Family
   Copy from window.FLOW_WELCOME_GF.e1
*/

const Email1 = () => {
  const c = window.FLOW_WELCOME_GF.e1;

  return (
    <EmailShell preheader={c.preheader} bg="#FFFBF0">
      <Header bg="#FFFBF0" />

      {/* Hero . toddler image */}
      <HeroImage
        height={240}
        label="HERO · TODDLER IN LIVING ROOM"
        sublabel="A toddler in a warm living room, looking at the camera. Ratio ~5:3"
        shadow={6}
        src={c.heroImage}
        alt={c.heroAlt}
      />

      <TitleBlock
        badge={c.heroBadge}
        part1={c.h1a}
        part2={c.h1b}
        subhead={c.heroSubhead}
      />

      {/* Section 1 . Opening letter: what you've tried, why nothing worked */}
      <Letter bg="#FFF6E2" first={c.letter1First} paras={c.letter1Paras} />

      {/* Section 2 . The mechanism H2 + body letter */}
      <H2 children={c.h2Mechanism} center size={22} />
      <Letter bg="#EAF6F2" first={c.letter2First} paras={c.letter2Paras} />

      {/* Mechanism image . training pant flat lay */}
      <div style={{ background: "#EAF6F2", padding: "4px 14px 24px" }}>
        <HeroImage
          height={200}
          label="PRODUCT · TRAINING PANT FLAT LAY"
          sublabel="The Body-Signal Learning System that creates the wetness signal pull-ups block. Ratio ~4:3"
          shadow={4}
          src={c.mechanismImage}
          alt={c.mechanismAlt}
        />
      </div>

      {/* Section 3 . Letter about the product approach */}
      <Letter bg="#FFFBF0" first={c.letter3First} paras={c.letter3Paras} />

      {/* Section 4 . Product showcase medium */}
      <div style={{ background: "#FFFBF0" }}>
        <ProductShowcaseMedium
          product={c.productName}
          image_src={c.productImage}
          price_label={c.productPrice}
        />
      </div>

      {/* Section 5 . Testimonials / what other parents found */}
      <Letter bg="#FFFBF0" first={c.letter4First} paras={c.letter4Paras} />

      {/* Section 6 . Try it for 60 days */}
      <H2 children={c.h2Try} center size={22} />
      <Letter bg="#FFF6E2" first={c.letter5First} paras={c.letter5Paras} />

      {/* Section 7 . Keep reading + CTA inline */}
      <H2 children={c.h2KeepReading} center size={20} />
      <Letter bg="#FFFBF0" first={c.letter6First} paras={c.letter6Paras} />

      {/* Inline CTA . B.ink bg, lime green button, real href from content */}
      <div style={{ background: B.ink, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "17px 32px",
          background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>{c.ctaFinePrint}</div>
      </div>

      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email1 });
