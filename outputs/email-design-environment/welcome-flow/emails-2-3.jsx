/* Email 2 · The Mechanism — Body-Signal Explained
   Heaviest info email. Must be skimmable.
*/

const Email2 = () => {
  const c = window.FLOW1.e2;
  const BG_HERO = "#FFFBF0";
  const BG_DEF = "#EAF6F2";
  const BG_REF = "#FFF6E2";
  const BG_COMP = "#FFFBF0";
  const BG_EXPERT = "#F0EDF8";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Hero image · diagram-style */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={220}
          label="DIAGRAM · BODY-SIGNAL LOOP"
          sublabel="Simple icon-based diagram · child → body signal → brain → awareness. Soft pastel teal/green tones. Ratio ~5:3"
          shadow={6}
        />
      </div>

      {/* Title */}
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_REF} />

      {/* Letter opening */}
      <Letter bg={BG_REF} first="Hi again." paras={c.letterOpening} />

      <Band from={BG_REF} to={BG_DEF} />

      {/* Definition block · the mechanism */}
      <div style={{ background: BG_DEF, padding: "28px 22px 16px" }}>
        <Eyebrow>{c.definitionLabel}</Eyebrow>
        <H2>
          <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.definitionAccent}</span>.
        </H2>
        {c.definitionBody.map((p, i) => (
          <p key={i} style={{
            fontSize: i === 0 ? 17 : 14.5, lineHeight: 1.65,
            color: i === 0 ? B.ink : B.soft,
            fontWeight: i === 0 || i === 4 ? 600 : 400,
            margin: "0 0 12px",
          }}>{p}</p>
        ))}
      </div>

      {/* Section image · child noticing body */}
      <div style={{ background: BG_DEF, padding: "4px 14px 24px" }}>
        <FramedImage
          height={180}
          label="DETAIL · QUIET AWARENESS"
          sublabel="Child sitting calmly · hand on belly or quiet moment of self-awareness. Natural light. Ratio ~16:9"
        />
      </div>

      <Band from={BG_DEF} to={BG_REF} />

      {/* Reframe — why nothing worked */}
      <div style={{ background: BG_REF, padding: "28px 22px 16px" }}>
        <Eyebrow color={B.tealDeep}>{c.reframeLabel}</Eyebrow>
        <H2 size={26}>{c.reframeTitle}</H2>
        {/* 4 sticker-style reasons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {c.reframePoints.map((p, i) => {
            const cols = ["#FFB5A0", B.teal, B.green, "#FFD866"];
            const rot = [-0.8, 0.6, -0.4, 0.5];
            return (
              <div key={i} style={{
                background: cols[i],
                color: i === 3 ? B.ink : "#FFFFFF",
                padding: "14px 18px", borderRadius: 14,
                transform: `rotate(${rot[i]}deg)`,
                boxShadow: `3px 3px 0 ${B.ink}`,
                border: `2px solid ${B.ink}`,
                fontSize: 15, fontWeight: 700, lineHeight: 1.3,
              }}>{p}</div>
            );
          })}
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.ink, marginTop: 22, fontWeight: 600 }}>
          {c.reframeClosing}
        </p>
      </div>

      <Band from={BG_REF} to={BG_COMP} />

      {/* Comparison · 3 cards (pull-ups / regular / body-signal) */}
      <div style={{ background: BG_COMP, padding: "24px 14px 8px" }}>
        <div style={{ padding: "0 8px", marginBottom: 18 }}>
          <Eyebrow>{c.compareLabel}</Eyebrow>
          <H2 size={24}>{c.compareTitle}</H2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {c.compareCards.map((card, i) => {
            const isPos = card.tone === "pos";
            return (
              <div key={i} style={{
                background: isPos ? "#FFFFFF" : "#FFFFFF",
                border: isPos ? `3px solid ${B.green}` : `2px solid ${B.ink}`,
                borderRadius: 16, overflow: "hidden",
                boxShadow: `3px 3px 0 ${B.ink}`,
              }}>
                {/* tinted stripe */}
                <div style={{
                  padding: "12px 18px",
                  background: isPos ? B.gradient : (i === 0 ? "#FFE8E0" : "#F3EADF"),
                  color: isPos ? "#FFFFFF" : B.ink,
                  fontSize: 13, fontWeight: 700, letterSpacing: 0.3,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  borderBottom: `2px solid ${B.ink}`,
                }}>
                  <span>{card.title}</span>
                  <span style={{ fontSize: 18 }}>{isPos ? "✓" : "✕"}</span>
                </div>
                <div style={{ padding: "16px 18px", fontSize: 14, lineHeight: 1.55, color: B.soft }}>
                  {card.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Band from={BG_COMP} to={BG_EXPERT} />

      {/* OT quote */}
      <div style={{ background: BG_EXPERT, padding: "28px 14px 32px" }}>
        <div style={{
          padding: "26px 22px", background: "#FFFFFF",
          borderRadius: 20, border: `2px solid ${B.ink}`,
          boxShadow: `4px 4px 0 ${B.ink}`,
        }}>
          <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 14 }}>
            {c.expertLabel}
          </div>
          <div style={{ fontSize: 36, lineHeight: 0.8, color: B.teal, fontWeight: 700, marginBottom: 8 }}>"</div>
          <p style={{ fontSize: 17, lineHeight: 1.5, fontWeight: 500, margin: "0 0 16px", color: B.ink, fontStyle: "italic" }}>
            {c.expertQuote}
          </p>
          <div style={{ fontSize: 12, color: B.soft, fontWeight: 600 }}>— {c.expertBy}</div>
        </div>
      </div>

      {/* Soft product placement — before the dark CTA */}
      <div style={{ background: BG_EXPERT, padding: "8px 0 16px" }}>
        <ProductShowcaseSoft
          eyebrow="Built around this signal"
          line="BrightKidCo pants are designed to keep the body-signal loop intact — the opposite of a pull-up."
          ctaText="See the pants"
        />
      </div>

      <Band from={BG_EXPERT} to={BG_CTA} height={50} />

      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

/* ═════════════════════════════════════════════════════
   Email 3 · Why Everything Failed Before (Absolution)
   ═════════════════════════════════════════════════════ */
const Email3 = () => {
  const c = window.FLOW1.e3;
  const BG_HERO = "#FFF6E2";
  const BG_LETTER = "#FFFBF0";
  const BG_METHODS = "#FAF7F0";
  const BG_REFRAME = "#EAF6F2";
  const BG_STORY = "#FFF6E2";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Hero image */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={220}
          label="HERO · AN OLD MAP"
          sublabel="Metaphor image · old parenting book / worn notebook / folded map on table. Warm tones, honest texture. Ratio ~5:3"
          shadow={6}
        />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} first="Let's go back." paras={c.letterOpening} />

      <Band from={BG_LETTER} to={BG_METHODS} />

      {/* Methods · 4 cards */}
      <div style={{ background: BG_METHODS, padding: "24px 22px 8px" }}>
        <Eyebrow>{c.methodsLabel}</Eyebrow>
      </div>

      <div style={{ background: BG_METHODS, padding: "0 14px" }}>
        {c.methods.map((m, i) => {
          const accents = [B.teal, "#E8A23D", B.green, "#FFB5A0"];
          return (
            <div key={i} style={{
              marginBottom: 16, background: "#FFF", borderRadius: 18,
              overflow: "hidden", border: `2px solid ${B.ink}`,
              boxShadow: `3px 3px 0 ${B.ink}`,
            }}>
              {/* image placeholder per method */}
              <div style={{ background: `${accents[i]}15` }}>
                <ImgFrame
                  height={130}
                  radius={0}
                  label={`METHOD ${m.n} · ${m.name.toUpperCase()}`}
                  sublabel={i === 0 ? "Clock / timer on kitchen counter" : i === 1 ? "Sticker chart on fridge · half-filled" : i === 2 ? "Toy-covered living room · toddler, no pants" : "Package of pull-ups, unopened, dusty"}
                />
              </div>
              <div style={{ padding: "18px 20px 20px", borderTop: `2px solid ${B.ink}`, background: "#FFFDF6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: accents[i], color: "#FFF",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700, border: `2px solid ${B.ink}`,
                  }}>{m.n}</div>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 700 }}>{m.name}</h3>
                </div>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: B.muted, marginBottom: 4 }}>The promise</div>
                <p style={{ margin: "0 0 12px", fontSize: 14, lineHeight: 1.55, color: B.soft }}>{m.promise}</p>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: B.tealDeep, marginBottom: 4 }}>What actually happens</div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: B.ink, fontWeight: 500 }}>{m.reality}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Band from={BG_METHODS} to={BG_REFRAME} />

      {/* Reframe — "not your fault" */}
      <div style={{ background: BG_REFRAME, padding: "28px 22px 32px" }}>
        <H2 size={30} center>
          <span style={{ ...B.gradientText, fontWeight: 700 }}>None of this</span> is your fault.
        </H2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{
            fontSize: i === 3 ? 16 : 14.5, lineHeight: 1.65,
            color: i === 3 ? B.ink : B.soft,
            fontWeight: i === 3 ? 700 : 400,
            margin: "0 0 12px", textAlign: i === 3 ? "center" : "left",
          }}>{p}</p>
        ))}
      </div>

      <Band from={BG_REFRAME} to={BG_STORY} />

      {/* Parent quote */}
      <div style={{ background: BG_STORY, padding: "16px 14px 36px" }}>
        <div style={{
          padding: "26px 22px", background: "#FFD866",
          borderRadius: 20, border: `2px solid ${B.ink}`,
          boxShadow: `4px 4px 0 ${B.ink}`, textAlign: "left",
          transform: "rotate(-0.3deg)",
        }}>
          <Eyebrow color={B.ink}>{c.storyLabel}</Eyebrow>
          <div style={{ fontSize: 36, lineHeight: 0.8, color: B.ink, fontWeight: 700, marginBottom: 6 }}>"</div>
          <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, margin: "0 0 12px", fontStyle: "italic", color: B.ink }}>
            {c.storyQuote}
          </p>
          <div style={{ fontSize: 12, color: B.ink, fontWeight: 700 }}>— {c.storyBy}</div>
        </div>
      </div>

      {/* Soft product placement — gentle on-brand nod before CTA */}
      <div style={{ background: BG_STORY, padding: "8px 0 16px" }}>
        <ProductShowcaseSoft
          eyebrow="A different tool"
          line="We built BrightKidCo because every method above was missing the same piece — the body-signal itself."
          ctaText="See the pants"
        />
      </div>

      <Band from={BG_STORY} to={BG_CTA} height={50} />

      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, { Email2, Email3 });
