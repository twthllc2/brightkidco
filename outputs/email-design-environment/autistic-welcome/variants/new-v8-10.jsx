/* V8-V10 · Final three — varied premium + playful takes */

const MW8 = 420;
const LOGO8 = "../../assets/brightkidco-logo-v2.png";
const Bx = window.BRAND;
const Fx = window.FONT;
const Ix = window.Illus;

const Logo8 = ({ height = 34, invert = false, bg = "transparent" }) => (
  <div style={{ padding: "22px 20px 0", textAlign: "center", background: bg }}>
    <img src={LOGO8} alt="BrightKidCo" style={{ height, filter: invert ? "brightness(0) invert(1)" : "none" }} />
  </div>
);

const Foot8 = ({ bg = Bx.ink, color = "#8A9B9D" }) => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ padding: "20px 20px 26px", background: bg, textAlign: "center", fontFamily: Fx.main, fontSize: 10.5, color, letterSpacing: 0.3, lineHeight: 1.7 }}>
      {c.footer.tagline}<br/>
      <a href="#" style={{ color }}>Unsubscribe</a> · <a href="#" style={{ color }}>Preferences</a>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V8 · SOFT PREMIUM — BREZ-like, calm, elegant, subtle gradients
   ═══════════════════════════════════════════════════════════════════ */
const V8_SoftPremium = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW8, background: "#FFFFFF", fontFamily: Fx.main, color: Bx.ink }}>
      <Logo8 />

      {/* soft gradient hero with image */}
      <div style={{ margin: "20px 0 0", background: "linear-gradient(180deg, #EAF6F2 0%, #F4EDF8 100%)", padding: "30px 22px 0", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: Bx.teal, fontWeight: 600, marginBottom: 16 }}>
          A letter · 1 of 4
        </div>
        <h1 style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 700, margin: "0 0 20px", letterSpacing: -0.7 }}>
          You haven't done<br/>
          anything <span style={{ ...Bx.gradientText, fontWeight: 700 }}>wrong.</span>
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: Bx.soft, margin: "0 0 28px", maxWidth: 320, marginLeft: "auto", marginRight: "auto" }}>
          {c.hero.sub}
        </p>
        <div style={{ margin: "0 -22px" }}>
          <Ix.GentleMorning bg="#FFE8D6" />
        </div>
      </div>

      <div style={{ padding: "32px 26px 0", fontSize: 15, lineHeight: 1.7, color: Bx.soft }}>
        <p style={{ margin: "0 0 14px", fontSize: 16, color: Bx.ink, fontWeight: 500 }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed — elegant list with checks */}
      <div style={{ margin: "28px 22px 0", padding: "24px 24px", background: "#FBF9F4", borderRadius: 20, border: "1px solid #F0E8D8" }}>
        {c.creed.map((line, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < 2 ? "1px solid #F0E8D8" : "none" }}>
            <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: Bx.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" stroke="#FFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <span style={{ fontSize: 17, fontWeight: 600, color: Bx.ink }}>{line}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "36px 26px 0" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: Bx.teal, fontWeight: 600, marginBottom: 10 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.5 }}>
          It was never about <span style={{ ...Bx.gradientText, fontWeight: 700 }}>motivation</span>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.7, color: i === 2 ? Bx.ink : Bx.soft, margin: "0 0 12px", fontWeight: i === 2 ? 600 : 400 }}>{p}</p>
        ))}
      </div>

      <div style={{ margin: "28px 0 0", background: "#EAF6F2" }}>
        <Ix.Signal bg="#EAF6F2" />
      </div>

      <div style={{ padding: "36px 22px 0" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: Bx.teal, fontWeight: 600, marginBottom: 10 }}>A different path</div>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", letterSpacing: -0.4 }}>
          Gentle. Sensory-aware.<br/>Built around your child.
        </h2>
        {c.steps.map((s, i) => {
          const imgs = [Ix.Signal, Ix.Sensory, Ix.CalmSun];
          const bgs = ["#EAF6F2", "#FDF6E8", "#F0EDF8"];
          const Img = imgs[i];
          return (
            <div key={i} style={{ marginBottom: 20, background: "#FFF", borderRadius: 18, overflow: "hidden", border: "1px solid #EEE8D8" }}>
              <div style={{ background: bgs[i] }}><Img bg={bgs[i]} /></div>
              <div style={{ padding: "18px 22px 22px" }}>
                <div style={{ fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: Bx.teal, fontWeight: 700, marginBottom: 6 }}>Step {s.n}</div>
                <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700, lineHeight: 1.3, color: Bx.ink }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: Bx.soft }}>{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ margin: "20px 22px 0", padding: "28px 22px", background: "#FBF9F4", borderRadius: 20, textAlign: "center", border: "1px solid #F0E8D8" }}>
        <p style={{ fontSize: 17, lineHeight: 1.45, fontWeight: 500, margin: "0 0 14px", color: Bx.ink, fontStyle: "italic" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11.5, color: Bx.muted, fontWeight: 600, letterSpacing: 0.3 }}>— {c.quote.by}</div>
      </div>

      <div style={{ margin: "28px 0 0" }}>
        <Ix.ProductPants bg="#F4EDF8" />
      </div>

      <div style={{ padding: "32px 22px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: Bx.soft, margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{ display: "inline-block", padding: "16px 32px", background: Bx.gradient, color: "#FFF", fontSize: 15, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 }}>
          {c.ctaButton} →
        </a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: Bx.muted }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "30px 26px 20px", fontSize: 14, lineHeight: 1.65, color: Bx.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: Bx.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: Bx.muted, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>
      <Foot8 bg="#FBF9F4" color={Bx.muted} />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V9 · POSTER / BOLD — big color blocks, graphic, high-impact
   ═══════════════════════════════════════════════════════════════════ */
const V9_PosterBold = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW8, background: "#FFD866", fontFamily: Fx.main, color: Bx.ink }}>
      {/* poster hero */}
      <div style={{ padding: "22px 20px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={LOGO8} alt="BrightKidCo" style={{ height: 28 }} />
        <div style={{ background: Bx.ink, color: "#FFD866", padding: "5px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>
          01 / 04
        </div>
      </div>

      <div style={{ padding: "32px 22px 0" }}>
        <h1 style={{ fontSize: 56, lineHeight: 0.9, fontWeight: 700, margin: 0, letterSpacing: -2 }}>
          You haven't<br/>done anything<br/><span style={{ background: Bx.ink, color: "#FFD866", padding: "0 10px", display: "inline-block", marginTop: 6 }}>wrong.</span>
        </h1>
      </div>

      {/* hero image in frame */}
      <div style={{ margin: "30px 0 0" }}>
        <div style={{ border: `3px solid ${Bx.ink}`, borderLeft: 0, borderRight: 0 }}>
          <Ix.GentleMorning bg="#FFE8D6" />
        </div>
      </div>

      {/* green block */}
      <div style={{ background: Bx.green, padding: "32px 22px", color: Bx.ink }}>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 12px", fontWeight: 600 }}>Hi, and welcome.</p>
        <p style={{ fontSize: 15, lineHeight: 1.65, margin: "0 0 12px" }}>{c.letterOpening[1]}</p>
        <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* teal creed */}
      <div style={{ background: Bx.teal, padding: "34px 22px", color: "#FFF" }}>
        {c.creed.map((line, i) => (
          <div key={i} style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, padding: "12px 0", borderBottom: i < 2 ? "2px solid rgba(255,255,255,0.2)" : "none" }}>
            <span style={{ color: "#FFD866", marginRight: 8 }}>{`0${i+1}`}</span> {line}
          </div>
        ))}
      </div>

      {/* ink block reframe */}
      <div style={{ background: Bx.ink, padding: "36px 22px", color: "#FFF" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#FFD866", fontWeight: 700, marginBottom: 14 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 34, lineHeight: 1.1, fontWeight: 700, margin: "0 0 20px", letterSpacing: -0.7 }}>
          It was never about <span style={{ background: "#FFD866", color: Bx.ink, padding: "0 10px", display: "inline-block" }}>motivation</span>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? "#FFD866" : "#B8CACD", margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
        ))}
      </div>

      <div>
        <Ix.Signal bg="#E8F5EC" />
      </div>

      {/* peach path */}
      <div style={{ background: "#FFB5A0", padding: "36px 22px", color: Bx.ink }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: Bx.ink, fontWeight: 700, marginBottom: 10 }}>A different path</div>
        <h2 style={{ fontSize: 34, lineHeight: 1.05, fontWeight: 700, margin: "0 0 24px", letterSpacing: -0.7 }}>
          Gentle.<br/>Sensory-aware.
        </h2>
        {c.steps.map((s, i) => (
          <div key={i} style={{ marginBottom: 18, background: "#FFF", borderRadius: 16, border: `2px solid ${Bx.ink}`, overflow: "hidden" }}>
            <div style={{ padding: "20px 22px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                <div style={{ fontSize: 32, fontWeight: 700, ...Bx.gradientText, lineHeight: 1 }}>{s.n}</div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: Bx.soft }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "#FFD866", padding: "30px 22px", textAlign: "center", borderTop: `3px solid ${Bx.ink}`, borderBottom: `3px solid ${Bx.ink}` }}>
        <p style={{ fontSize: 22, lineHeight: 1.3, fontWeight: 700, margin: "0 0 14px", color: Bx.ink, fontStyle: "italic" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: Bx.ink, fontWeight: 700, letterSpacing: 0.3 }}>— {c.quote.by}</div>
      </div>

      <div style={{ background: Bx.ink, padding: "36px 22px", textAlign: "center", color: "#FFF" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{ display: "inline-block", padding: "17px 30px", background: "#FFD866", color: Bx.ink, fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 0 }}>
          {c.ctaButton} →
        </a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#8A9B9D" }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "26px 22px", background: "#FFD866", fontSize: 14, lineHeight: 1.65, color: Bx.ink }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 22, color: Bx.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: Bx.soft, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>
      <Foot8 bg="#0A1618" color="#5A6E70" />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V10 · ILLUSTRATED STORY — full-width illustrations, kid-brand story feel
   ═══════════════════════════════════════════════════════════════════ */
const V10_StoryBook = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW8, background: "#FFFBF0", fontFamily: Fx.main, color: Bx.ink }}>
      <Logo8 />

      {/* story cover */}
      <div style={{ margin: "24px 14px 0", position: "relative" }}>
        <div style={{ borderRadius: 24, overflow: "hidden", border: `3px solid ${Bx.ink}`, boxShadow: `0 10px 0 -2px ${Bx.teal}, 0 14px 0 -2px ${Bx.ink}` }}>
          <Ix.Letter bg="#E8F5EC" />
        </div>
      </div>

      <div style={{ padding: "34px 22px 0", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#FFD866", padding: "7px 14px", borderRadius: 999, fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16, border: `2px solid ${Bx.ink}`, transform: "rotate(-1.5deg)" }}>
          ✿ Part one of four
        </div>
        <h1 style={{ fontSize: 40, lineHeight: 1, fontWeight: 700, margin: 0, letterSpacing: -0.8 }}>
          You haven't done<br/>
          anything <span style={{ ...Bx.gradientText, fontWeight: 700 }}>wrong.</span>
        </h1>
      </div>

      <div style={{ padding: "30px 24px 0", fontSize: 15, lineHeight: 1.7, color: Bx.soft }}>
        <p style={{ margin: "0 0 14px", fontSize: 17, color: Bx.ink, fontWeight: 600 }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed - hand-card style */}
      <div style={{ padding: "28px 16px 0" }}>
        {c.creed.map((line, i) => {
          const cols = [Bx.teal, Bx.green, "#FFB5A0"];
          const rot = [-1, 0.8, -0.5];
          return (
            <div key={i} style={{
              background: cols[i], color: "#FFF", padding: "16px 20px",
              borderRadius: 16, transform: `rotate(${rot[i]}deg)`, marginBottom: 12,
              boxShadow: `3px 3px 0 ${Bx.ink}`, border: `2px solid ${Bx.ink}`,
              fontSize: 19, fontWeight: 700, lineHeight: 1.25,
            }}>{line}</div>
          );
        })}
      </div>

      {/* Scene 2 — quiet room */}
      <div style={{ margin: "36px 14px 0", borderRadius: 20, overflow: "hidden", border: `2px solid ${Bx.ink}`, boxShadow: `4px 4px 0 ${Bx.ink}` }}>
        <Ix.QuietRoom bg="#EEE8F6" />
      </div>

      <div style={{ padding: "28px 22px 0" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: Bx.teal, fontWeight: 700, marginBottom: 10 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4 }}>
          It was never about <span style={{ ...Bx.gradientText, fontWeight: 700 }}>motivation</span>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? Bx.ink : Bx.soft, margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
        ))}
      </div>

      {/* Scene 3 — signal */}
      <div style={{ margin: "24px 14px 0", borderRadius: 18, overflow: "hidden", border: `2px solid ${Bx.ink}`, boxShadow: `3px 3px 0 ${Bx.ink}` }}>
        <Ix.Signal bg="#E8F5EC" />
      </div>

      <div style={{ padding: "36px 22px 0" }}>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", textAlign: "center" }}>
          A <span style={{ ...Bx.gradientText, fontWeight: 700 }}>different path</span> →
        </h2>
        {c.steps.map((s, i) => {
          const imgs = [Ix.Signal, Ix.Sensory, Ix.CalmSun];
          const bgs = ["#E6F7E9", "#FFF2D8", "#EAF4F5"];
          const accents = [Bx.green, "#E8A23D", Bx.teal];
          const Img = imgs[i];
          return (
            <div key={i} style={{ marginBottom: 22, background: "#FFF", borderRadius: 18, overflow: "hidden", border: `2px solid ${Bx.ink}`, boxShadow: `3px 3px 0 ${Bx.ink}` }}>
              <div><Img bg={bgs[i]} /></div>
              <div style={{ padding: "18px 20px 22px", borderTop: `2px solid ${Bx.ink}`, background: "#FFFDF6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: accents[i], color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, border: `2px solid ${Bx.ink}` }}>{s.n}</div>
                  <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700, lineHeight: 1.3 }}>{s.title}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: Bx.soft }}>{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ margin: "20px 14px 0", padding: "26px 22px", background: "#FFD866", borderRadius: 20, border: `2px solid ${Bx.ink}`, boxShadow: `4px 4px 0 ${Bx.ink}`, textAlign: "center", transform: "rotate(-0.5deg)" }}>
        <div style={{ fontSize: 36, lineHeight: 0.8, color: Bx.ink, fontWeight: 700, marginBottom: 6 }}>"</div>
        <p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 500, margin: "0 0 12px", fontStyle: "italic", color: Bx.ink }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 11, color: Bx.ink, fontWeight: 700 }}>— {c.quote.by}</div>
      </div>

      {/* Product scene */}
      <div style={{ margin: "28px 14px 0", borderRadius: 20, overflow: "hidden", border: `2px solid ${Bx.ink}`, boxShadow: `4px 4px 0 ${Bx.ink}` }}>
        <Ix.ProductPants bg="#E8F0FC" />
      </div>

      {/* Airplane — closing scene */}
      <div style={{ margin: "18px 14px 0", borderRadius: 20, overflow: "hidden", border: `2px solid ${Bx.ink}` }}>
        <Ix.Airplane bg="#D4F0E4" />
      </div>

      <div style={{ padding: "30px 22px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: Bx.soft, margin: "0 0 20px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "17px 30px",
          background: Bx.gradient, color: "#FFF",
          fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: `4px 4px 0 ${Bx.ink}`, border: `2px solid ${Bx.ink}`,
          transform: "rotate(-0.5deg)", letterSpacing: 0.3,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: Bx.muted }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "30px 24px 20px", fontSize: 14, lineHeight: 1.65, color: Bx.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: Bx.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: Bx.muted, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>
      <Foot8 />
    </div>
  );
};

Object.assign(window, { V8_SoftPremium, V9_PosterBold, V10_StoryBook });
