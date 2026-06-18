/* V1-V4 · New variants with rich imagery
   Base style: V3 (Playful Cards) — polaroids, stickers, rotations
   Logo: brightkidco-logo-v2.png (full wordmark)
*/

const MW = 420;
const LOGO = "../../assets/brightkidco-logo-v2.png";
const B = window.BRAND;
const F = window.FONT;
const I = window.Illus;

/* Shared helpers ------------------------------------------------- */
const GradientText = ({ children, style = {} }) => (
  <span style={{ ...B.gradientText, fontWeight: 700, ...style }}>{children}</span>
);

const StickerBadge = ({ children, bg = "#FFD866", rot = -2, mb = 18 }) => (
  <div style={{
    display: "inline-block", transform: `rotate(${rot}deg)`,
    background: bg, padding: "7px 14px", borderRadius: 999,
    fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5,
    textTransform: "uppercase", color: B.ink, marginBottom: mb,
    boxShadow: `3px 3px 0 ${B.ink}`, border: `2px solid ${B.ink}`,
  }}>{children}</div>
);

const BigButton = ({ children, bg, shadow = B.ink, rot = 0 }) => (
  <a href="#" style={{
    display: "inline-block", padding: "16px 28px",
    background: bg, color: "#FFF",
    fontFamily: F.main, fontSize: 15, fontWeight: 700,
    textDecoration: "none", borderRadius: 999,
    boxShadow: `4px 4px 0 ${shadow}`, border: `2px solid ${B.ink}`,
    transform: `rotate(${rot}deg)`,
    letterSpacing: 0.3,
  }}>{children} →</a>
);

const LogoBar = ({ height = 34 }) => (
  <div style={{ padding: "22px 20px 0", textAlign: "center" }}>
    <img src={LOGO} alt="BrightKidCo" style={{ height, width: "auto" }} />
  </div>
);

const Footer = ({ bg = B.ink, color = "#8A9B9D" }) => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ padding: "20px 20px 26px", background: bg, textAlign: "center", fontFamily: F.main, fontSize: 10.5, color, letterSpacing: 0.3, lineHeight: 1.7 }}>
      {c.footer.tagline}<br/>
      <a href="#" style={{ color }}>Unsubscribe</a> · <a href="#" style={{ color }}>Preferences</a>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V1 · STICKER STUDIO — V3 evolved, hero illustration, polaroids
   ═══════════════════════════════════════════════════════════════════ */
const V1_StickerStudio = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW, background: "#FAF5EC", fontFamily: F.main, color: B.ink }}>
      <LogoBar />

      {/* HERO IMAGE — Gentle Morning */}
      <div style={{ margin: "24px 16px 0", borderRadius: 22, overflow: "hidden", border: `2px solid ${B.ink}`, boxShadow: `4px 4px 0 ${B.ink}` }}>
        <I.GentleMorning bg="#FFE8D6" />
      </div>

      {/* title */}
      <div style={{ padding: "28px 20px 0", textAlign: "center" }}>
        <StickerBadge>Letter 1 of 4 ✿</StickerBadge>
        <h1 style={{ fontSize: 36, lineHeight: 1.05, fontWeight: 700, margin: 0, letterSpacing: -0.6 }}>
          You haven't done<br/>
          <span style={{ display: "inline-block", background: B.gradient, color: "#FFF", padding: "2px 14px", borderRadius: 14, transform: "rotate(-1.5deg)", boxShadow: `3px 3px 0 ${B.ink}`, border: `2px solid ${B.ink}`, marginTop: 8 }}>anything wrong</span>
        </h1>
      </div>

      {/* polaroid letter opener */}
      <div style={{ padding: "36px 22px 0" }}>
        <div style={{ background: "#FFF", padding: "14px 14px 18px", borderRadius: 6, boxShadow: "0 8px 20px rgba(0,0,0,0.08)", transform: "rotate(-1.5deg)", marginBottom: 16, border: `2px solid ${B.ink}` }}>
          <div style={{ borderRadius: 3, overflow: "hidden" }}>
            <I.Letter bg="#E8F5EC" />
          </div>
          <p style={{ margin: "12px 0 0", fontSize: 14, color: B.ink, textAlign: "center", fontWeight: 700 }}>
            hi, and welcome.
          </p>
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.soft, margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.soft, margin: "0 0 20px" }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed stickers */}
      <div style={{ padding: "0 16px" }}>
        {c.creed.map((line, i) => {
          const cols = [B.teal, B.green, "#FFB5A0"];
          const rots = ["rotate(-1deg)", "rotate(1deg)", "rotate(-0.5deg)"];
          return (
            <div key={i} style={{
              background: cols[i], color: "#FFF",
              padding: "16px 20px", borderRadius: 16,
              transform: rots[i], marginBottom: 12,
              boxShadow: `3px 3px 0 ${B.ink}`, border: `2px solid ${B.ink}`,
              fontSize: 18, fontWeight: 700,
            }}>{line}</div>
          );
        })}
      </div>

      {/* Reframe */}
      <div style={{ padding: "36px 22px 0" }}>
        <StickerBadge bg={B.ink} rot={0} mb={14}>
          <span style={{ color: "#FFD866" }}>ⓘ The part nobody explained</span>
        </StickerBadge>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4 }}>
          It was never about <GradientText>motivation</GradientText>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? B.ink : B.soft, margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
        ))}
      </div>

      {/* Signal image */}
      <div style={{ margin: "24px 16px 0", borderRadius: 18, overflow: "hidden", border: `2px solid ${B.ink}`, boxShadow: `3px 3px 0 ${B.ink}` }}>
        <I.Signal bg="#E8F5EC" />
      </div>

      {/* Steps as tilted polaroids */}
      <div style={{ padding: "36px 20px 0" }}>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 20px", textAlign: "center" }}>
          A different path <GradientText>→</GradientText>
        </h2>
        {c.steps.map((s, i) => {
          const cfg = [
            { bg: "#E6F7E9", acc: B.green, img: I.Signal },
            { bg: "#FFF2D8", acc: "#E8A23D", img: I.Sensory },
            { bg: "#DDE9FB", acc: B.teal, img: I.CalmSun },
          ][i];
          const rot = ["rotate(-0.5deg)", "rotate(0.8deg)", "rotate(-0.3deg)"][i];
          const Img = cfg.img;
          return (
            <div key={i} style={{
              background: "#FFF", padding: 4, borderRadius: 10,
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              transform: rot, marginBottom: 20, border: `2px solid ${B.ink}`,
            }}>
              <div style={{ background: cfg.bg, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ borderBottom: `2px solid ${B.ink}` }}>
                  <Img bg={cfg.bg} />
                </div>
                <div style={{ padding: "16px 16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: cfg.acc, color: "#FFF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, fontWeight: 700, border: `2px solid ${B.ink}`,
                    }}>{s.n}</div>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: B.ink, lineHeight: 1.3 }}>{s.title}</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: B.soft }}>{s.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote sticker */}
      <div style={{ margin: "24px 16px 0", padding: "24px 20px", background: "#FFD866", borderRadius: 20, border: `2px solid ${B.ink}`, boxShadow: `4px 4px 0 ${B.ink}`, transform: "rotate(-0.5deg)", textAlign: "center" }}>
        <div style={{ fontSize: 36, lineHeight: 0.8, color: B.ink, marginBottom: 4 }}>"</div>
        <p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 500, margin: "0 0 12px", color: B.ink, fontStyle: "italic" }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 11, color: B.ink, fontWeight: 700, letterSpacing: 0.3 }}>— {c.quote.by}</div>
      </div>

      {/* Product peek */}
      <div style={{ margin: "28px 16px 0", borderRadius: 20, overflow: "hidden", border: `2px solid ${B.ink}`, boxShadow: `4px 4px 0 ${B.ink}` }}>
        <I.ProductPants bg="#E8F0FC" />
      </div>

      {/* CTA */}
      <div style={{ padding: "28px 20px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 20px" }}>{c.ctaIntro}</p>
        <BigButton bg={B.teal} rot={-0.5}>{c.ctaButton}</BigButton>
        <div style={{ marginTop: 14, fontSize: 11.5, color: B.muted }}>{c.ctaFinePrint}</div>
      </div>

      {/* Sign-off */}
      <div style={{ padding: "30px 24px 20px", fontSize: 14, lineHeight: 1.65, color: B.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: B.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: B.muted, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>

      <Footer />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V2 · MAGAZINE MOD — editorial meets playful, full-bleed image
   ═══════════════════════════════════════════════════════════════════ */
const V2_MagazineMod = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW, background: "#FFFFFF", fontFamily: F.main, color: B.ink }}>
      <LogoBar />

      {/* Full bleed hero */}
      <div style={{ margin: "18px 0 0", position: "relative" }}>
        <I.Hands bg="#FFF2D8" />
        <div style={{ position: "absolute", top: 16, left: 20, background: B.ink, color: "#FFD866", padding: "5px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
          № 01 · The Welcome
        </div>
      </div>

      <div style={{ padding: "30px 22px 0" }}>
        <h1 style={{ fontSize: 42, lineHeight: 0.98, fontWeight: 700, margin: "0 0 18px", letterSpacing: -1 }}>
          You haven't<br/>done anything<br/><GradientText>wrong.</GradientText>
        </h1>
        <div style={{ width: 50, height: 4, background: B.gradient, borderRadius: 4, marginBottom: 18 }} />
        <p style={{ fontSize: 16, lineHeight: 1.5, color: B.soft, margin: 0, fontWeight: 500 }}>
          {c.hero.sub}
        </p>
      </div>

      {/* Letter */}
      <div style={{ padding: "30px 22px 0", fontSize: 15, lineHeight: 1.7, color: B.soft }}>
        <p style={{ margin: "0 0 14px" }}>
          <span style={{ fontSize: 54, float: "left", lineHeight: 0.85, fontWeight: 700, marginRight: 10, marginTop: 2, ...B.gradientText }}>I</span>
          f you're here, you've probably spent months — maybe years — feeling like you're doing something wrong. Reading Reddit at 2am. Watching other kids move on. Taking another break "for your mental health."
        </p>
        <p style={{ margin: "0 0 18px" }}>So before we say anything else:</p>
      </div>

      {/* Creed — stacked bold statements */}
      <div style={{ margin: "0 16px", padding: "28px 22px", background: B.ink, borderRadius: 20, color: "#FFFFFF" }}>
        {c.creed.map((line, i) => (
          <div key={i} style={{
            fontSize: 22, lineHeight: 1.25, fontWeight: 700,
            padding: "10px 0",
            borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
            color: i === 0 ? "#FFD866" : i === 1 ? "#5DD07A" : "#2BAEB4",
          }}>{line}</div>
        ))}
      </div>

      {/* Section break with image */}
      <div style={{ margin: "32px 0 0" }}>
        <I.Signal bg="#E8F5EC" />
      </div>

      {/* Reframe */}
      <div style={{ padding: "26px 22px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 12 }}>
          Part I · The Reframe
        </div>
        <h2 style={{ fontSize: 30, lineHeight: 1.1, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.5 }}>
          It was never about <GradientText>motivation</GradientText>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 15, lineHeight: 1.65, color: i === 2 ? B.ink : B.soft, margin: "0 0 12px", fontWeight: i === 2 ? 600 : 400 }}>{p}</p>
        ))}
      </div>

      {/* Dot divider */}
      <div style={{ textAlign: "center", margin: "30px 0 0", fontSize: 20, color: B.teal, letterSpacing: 10 }}>· · ·</div>

      {/* Steps with small side images */}
      <div style={{ padding: "24px 22px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 12 }}>
          Part II · A Different Path
        </div>
        {c.steps.map((s, i) => {
          const imgs = [I.Signal, I.Sensory, I.CalmSun];
          const bgs = ["#E8F5EC", "#FFF2D8", "#EAF4F5"];
          const Img = imgs[i];
          return (
            <div key={i} style={{ margin: "0 0 24px" }}>
              <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 14 }}>
                <Img bg={bgs[i]} />
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                <div style={{ fontSize: 30, fontWeight: 700, ...B.gradientText, lineHeight: 1 }}>{s.n}</div>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: B.soft }}>{s.body}</p>
            </div>
          );
        })}
      </div>

      {/* Quote */}
      <div style={{ margin: "8px 22px 0", padding: "26px 0", borderTop: `2px solid ${B.ink}`, borderBottom: `2px solid ${B.ink}` }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 12 }}>
          From the letters page
        </div>
        <p style={{ fontSize: 19, lineHeight: 1.4, fontWeight: 500, margin: "0 0 10px", fontStyle: "italic" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: B.muted, letterSpacing: 0.3 }}>{c.quote.by}</div>
      </div>

      {/* CTA */}
      <div style={{ padding: "30px 22px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 18px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "16px 30px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          letterSpacing: 0.3,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: B.muted }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "20px 22px 24px", fontSize: 14, lineHeight: 1.65, color: B.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: B.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: B.muted, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>
      <Footer />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V3 · DUOTONE BLOCKS — bold color sections, Surreal-inspired
   ═══════════════════════════════════════════════════════════════════ */
const V3_DuotoneBlocks = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW, background: "#FFFFFF", fontFamily: F.main, color: B.ink }}>
      {/* teal block with logo + hero */}
      <div style={{ background: B.gradient, padding: "22px 20px 0", color: "#FFF", textAlign: "center" }}>
        <img src={LOGO} alt="BrightKidCo" style={{ height: 30, filter: "brightness(0) invert(1)" }} />
        <div style={{ marginTop: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, opacity: 0.9 }}>
          A Letter · 1 of 4
        </div>
        <h1 style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 700, margin: "14px 0 20px", letterSpacing: -0.6 }}>
          You haven't done<br/>anything wrong.
        </h1>
        <div style={{ margin: "0 -20px", borderTop: `2px solid ${B.ink}` }}>
          <I.GentleMorning bg="#FFE8D6" />
        </div>
      </div>

      {/* Letter block — yellow */}
      <div style={{ background: "#FFD866", padding: "32px 22px", borderBottom: `2px solid ${B.ink}` }}>
        <p style={{ fontSize: 15.5, lineHeight: 1.65, color: B.ink, margin: "0 0 14px", fontWeight: 500 }}>
          Hi, and welcome.
        </p>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.ink, margin: "0 0 14px" }}>
          {c.letterOpening[1]}
        </p>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.ink, margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed block — ink */}
      <div style={{ background: B.ink, padding: "32px 22px", color: "#FFF" }}>
        {c.creed.map((line, i) => {
          const colors = ["#FFD866", "#5DD07A", "#2BAEB4"];
          return (
            <div key={i} style={{ marginBottom: i < 2 ? 14 : 0, padding: "14px 16px", background: "rgba(255,255,255,0.05)", borderLeft: `4px solid ${colors[i]}`, borderRadius: 4 }}>
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.25, color: colors[i] }}>{line}</div>
            </div>
          );
        })}
      </div>

      {/* Reframe — peach */}
      <div style={{ background: "#FFB5A0", padding: "36px 22px", borderBottom: `2px solid ${B.ink}` }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: B.ink, fontWeight: 700, marginBottom: 14 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 30, lineHeight: 1.1, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.5, color: B.ink }}>
          It was never about <span style={{ background: B.ink, color: "#FFD866", padding: "0 10px", borderRadius: 6 }}>motivation</span>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: B.ink, margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
        ))}
      </div>

      {/* Image block */}
      <div style={{ borderBottom: `2px solid ${B.ink}` }}>
        <I.Signal bg="#E8F5EC" />
      </div>

      {/* Steps block — white */}
      <div style={{ padding: "36px 22px 0" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 10 }}>
          A different path
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.1, fontWeight: 700, margin: "0 0 24px", letterSpacing: -0.5 }}>
          <GradientText>Gentle.</GradientText> Sensory-aware.<br/>Built for your child.
        </h2>
        {c.steps.map((s, i) => {
          const accent = [B.green, "#FFB5A0", B.teal][i];
          return (
            <div key={i} style={{ margin: "0 0 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                flexShrink: 0, width: 48, height: 48, borderRadius: 14,
                background: accent, color: "#FFF",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 17, fontWeight: 700, border: `2px solid ${B.ink}`,
                boxShadow: `3px 3px 0 ${B.ink}`,
              }}>{s.n}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, lineHeight: 1.3, color: B.ink }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: B.soft }}>{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote — green block */}
      <div style={{ background: "#E6F7E9", padding: "30px 22px", margin: "24px 0 0", borderTop: `2px solid ${B.ink}`, borderBottom: `2px solid ${B.ink}`, textAlign: "center" }}>
        <div style={{ fontSize: 40, lineHeight: 0.8, color: B.green, fontWeight: 700 }}>"</div>
        <p style={{ fontSize: 17, lineHeight: 1.45, fontWeight: 500, margin: "0 0 14px", color: B.ink, fontStyle: "italic" }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 11, color: B.soft, fontWeight: 600 }}>— {c.quote.by}</div>
      </div>

      {/* Product block */}
      <div style={{ borderBottom: `2px solid ${B.ink}` }}>
        <I.ProductPants bg="#E8F0FC" />
      </div>

      {/* CTA — ink block */}
      <div style={{ background: B.ink, padding: "36px 22px", textAlign: "center" }}>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#FFF", margin: "0 0 22px", opacity: 0.85 }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "17px 30px",
          background: B.gradient, color: "#FFF",
          fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: `0 0 0 2px #FFD866`,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#8A9B9D" }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "26px 22px", fontSize: 14, lineHeight: 1.65, color: B.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: B.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: B.muted, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>
      <Footer />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V4 · SCRAPBOOK JOURNAL — handwritten accents, tape, paper
   ═══════════════════════════════════════════════════════════════════ */
const V4_Scrapbook = () => {
  const c = window.E1_CONTENT;
  const caveat = "'Caveat', 'Comic Sans MS', cursive";

  const Tape = ({ rot = -15, top = -8, left = "50%", color = "#FFD866" }) => (
    <div style={{
      position: "absolute", top, left, transform: `translateX(-50%) rotate(${rot}deg)`,
      width: 60, height: 18, background: color, opacity: 0.75,
      boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
    }} />
  );

  return (
    <div style={{ width: MW, background: "#FBF6ED", fontFamily: F.main, color: B.ink, backgroundImage: "radial-gradient(#E8DFC7 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
      <LogoBar />

      {/* title card taped on */}
      <div style={{ position: "relative", margin: "34px 24px 0", padding: "28px 22px 24px", background: "#FFFFFF", borderRadius: 4, boxShadow: "0 3px 10px rgba(0,0,0,0.06)", transform: "rotate(-1deg)" }}>
        <Tape rot={-8} top={-9} left="30%" />
        <Tape rot={12} top={-9} left="72%" color="#FFB5A0" />
        <div style={{ fontFamily: caveat, fontSize: 26, color: B.teal, textAlign: "center", fontWeight: 700, marginBottom: 8 }}>
          chapter 1 of 4
        </div>
        <h1 style={{ fontSize: 34, lineHeight: 1.05, fontWeight: 700, margin: 0, textAlign: "center", letterSpacing: -0.5 }}>
          You haven't done<br/>anything <span style={{ fontFamily: caveat, fontWeight: 700 }}><GradientText>wrong.</GradientText></span>
        </h1>
      </div>

      {/* Photo card with hero */}
      <div style={{ position: "relative", margin: "32px 30px 0", padding: "14px 14px 18px", background: "#FFF", boxShadow: "0 6px 16px rgba(0,0,0,0.1)", transform: "rotate(1.5deg)", borderRadius: 3 }}>
        <Tape rot={-20} top={-10} left="50%" color="#5DD07A" />
        <div style={{ borderRadius: 2, overflow: "hidden", marginBottom: 10 }}>
          <I.QuietRoom bg="#EEE8F6" />
        </div>
        <div style={{ fontFamily: caveat, fontSize: 18, textAlign: "center", color: B.soft }}>
          a quiet morning together ♡
        </div>
      </div>

      {/* Letter */}
      <div style={{ padding: "36px 28px 0", fontSize: 15, lineHeight: 1.7, color: B.soft }}>
        <p style={{ margin: "0 0 14px", fontFamily: caveat, fontSize: 22, color: B.ink }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed — handwritten list on lined paper */}
      <div style={{ margin: "28px 20px 0", padding: "24px 26px", background: "#FFFFFF", borderRadius: 6, boxShadow: "0 3px 10px rgba(0,0,0,0.05)", backgroundImage: "repeating-linear-gradient(transparent, transparent 34px, #E8DFC7 34px, #E8DFC7 35px)", position: "relative" }}>
        <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "#FFB5A0", opacity: 0.4 }} />
        {c.creed.map((line, i) => (
          <div key={i} style={{ fontFamily: caveat, fontSize: 22, lineHeight: "35px", color: B.ink, fontWeight: 700, paddingLeft: 12 }}>
            ✓ {line}
          </div>
        ))}
      </div>

      {/* Reframe */}
      <div style={{ padding: "40px 26px 0" }}>
        <div style={{ fontFamily: caveat, fontSize: 20, color: B.teal, marginBottom: 6, transform: "rotate(-2deg)", display: "inline-block" }}>
          the part nobody explained ↓
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4 }}>
          It was never about <GradientText>motivation</GradientText>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? B.ink : B.soft, margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
        ))}
      </div>

      {/* Signal mini photo */}
      <div style={{ position: "relative", margin: "20px 40px 0", padding: "10px 10px 12px", background: "#FFF", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", transform: "rotate(-2deg)" }}>
        <Tape rot={5} top={-9} left="50%" />
        <I.Signal bg="#E8F5EC" />
      </div>

      {/* Steps — polaroid stack */}
      <div style={{ padding: "40px 22px 0" }}>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", textAlign: "center" }}>
          <span style={{ fontFamily: caveat, color: B.teal }}>a different path</span>
        </h2>
        {c.steps.map((s, i) => {
          const rots = [-1.5, 1.2, -0.8];
          const imgs = [I.Signal, I.Sensory, I.CalmSun];
          const bgs = ["#E8F5EC", "#FFF2D8", "#EAF4F5"];
          const Img = imgs[i];
          return (
            <div key={i} style={{
              position: "relative", marginBottom: 24,
              padding: "12px 12px 16px", background: "#FFF",
              boxShadow: "0 6px 14px rgba(0,0,0,0.08)", transform: `rotate(${rots[i]}deg)`,
            }}>
              <Tape rot={i % 2 ? -12 : 10} top={-9} left={i % 2 ? "30%" : "70%"} color={["#FFD866", "#FFB5A0", "#5DD07A"][i]} />
              <div style={{ marginBottom: 12 }}>
                <Img bg={bgs[i]} />
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                <div style={{ fontFamily: caveat, fontSize: 28, fontWeight: 700, ...B.gradientText, lineHeight: 1 }}>{s.n}</div>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, lineHeight: 1.3, color: B.ink, flex: 1 }}>{s.title}</h3>
              </div>
              <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.6, color: B.soft }}>{s.body}</p>
            </div>
          );
        })}
      </div>

      {/* Quote — sticky note */}
      <div style={{ position: "relative", margin: "16px 30px 0", padding: "24px 22px", background: "#FFF2D8", transform: "rotate(-2deg)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <Tape rot={15} top={-9} left="50%" color="#FFB5A0" />
        <p style={{ fontFamily: caveat, fontSize: 19, lineHeight: 1.4, fontWeight: 600, margin: "0 0 12px", color: B.ink }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: B.soft, fontWeight: 600 }}>— {c.quote.by}</div>
      </div>

      {/* CTA */}
      <div style={{ padding: "44px 22px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 20px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "15px 28px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: `3px 3px 0 ${B.ink}`, border: `2px solid ${B.ink}`,
          transform: "rotate(-1deg)",
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontFamily: caveat, fontSize: 16, color: B.teal }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "30px 28px 20px", fontSize: 14, lineHeight: 1.65, color: B.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontFamily: caveat, fontSize: 26, color: B.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: B.muted, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>
      <Footer bg="#FFFFFF" color={B.muted} />
    </div>
  );
};

Object.assign(window, { V1_StickerStudio, V2_MagazineMod, V3_DuotoneBlocks, V4_Scrapbook });
