/* V5-V7 · Continuation — sticker-forward + image-rich */

const MW_ = 420;
const LOGO_ = "../../assets/brightkidco-logo-v2.png";
const B_ = window.BRAND;
const F_ = window.FONT;
const I_ = window.Illus;

const LogoBar_ = ({ height = 34, bg = "transparent", invert = false }) => (
  <div style={{ padding: "22px 20px 0", textAlign: "center", background: bg }}>
    <img src={LOGO_} alt="BrightKidCo" style={{ height, width: "auto", filter: invert ? "brightness(0) invert(1)" : "none" }} />
  </div>
);

const Footer_ = ({ bg = B_.ink, color = "#8A9B9D" }) => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ padding: "20px 20px 26px", background: bg, textAlign: "center", fontFamily: F_.main, fontSize: 10.5, color, letterSpacing: 0.3, lineHeight: 1.7 }}>
      {c.footer.tagline}<br/>
      <a href="#" style={{ color }}>Unsubscribe</a> · <a href="#" style={{ color }}>Preferences</a>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V5 · HERO STACK — big stacked imagery, kids brand
   ═══════════════════════════════════════════════════════════════════ */
const V5_HeroStack = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW_, background: "#FFF9F0", fontFamily: F_.main, color: B_.ink }}>
      <LogoBar_ />

      {/* big hero with overlay badge */}
      <div style={{ position: "relative", margin: "20px 16px 0" }}>
        <div style={{ borderRadius: 24, overflow: "hidden", border: `2px solid ${B_.ink}`, boxShadow: `5px 5px 0 ${B_.ink}` }}>
          <I_.GentleMorning bg="#FFE8D6" />
        </div>
        <div style={{
          position: "absolute", top: -14, right: -10,
          background: "#FFD866", border: `2px solid ${B_.ink}`,
          borderRadius: "50%", width: 80, height: 80,
          display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", transform: "rotate(12deg)",
          boxShadow: `3px 3px 0 ${B_.ink}`,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.5, lineHeight: 1.2, color: B_.ink }}>
            A LETTER<br/>IN 4<br/>PARTS
          </div>
        </div>
      </div>

      {/* title */}
      <div style={{ padding: "30px 22px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 700, margin: 0, letterSpacing: -0.6 }}>
          You haven't done<br/>
          anything <span style={{ ...B_.gradientText, fontWeight: 700 }}>wrong.</span>
        </h1>
        <div style={{ margin: "18px auto 0", width: 60, height: 4, background: B_.gradient, borderRadius: 4 }} />
        <p style={{ fontSize: 15, lineHeight: 1.55, color: B_.soft, margin: "18px 0 0" }}>
          {c.hero.sub}
        </p>
      </div>

      {/* Letter card */}
      <div style={{ margin: "30px 16px 0", padding: "28px 24px", background: "#FFFFFF", borderRadius: 20, border: `2px solid ${B_.ink}`, boxShadow: `4px 4px 0 ${B_.ink}` }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B_.teal, fontWeight: 700, marginBottom: 14 }}>
          ✉ Our first note to you
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: B_.soft, margin: "0 0 12px", fontWeight: 500 }}>Hi, and welcome.</p>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B_.soft, margin: "0 0 12px" }}>{c.letterOpening[1]}</p>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B_.soft, margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed — chunky cards stacked */}
      <div style={{ padding: "28px 16px 0" }}>
        {c.creed.map((line, i) => {
          const cols = [{ bg: B_.teal, sh: B_.ink }, { bg: B_.green, sh: B_.ink }, { bg: "#FFD866", sh: B_.ink, color: B_.ink }];
          return (
            <div key={i} style={{
              background: cols[i].bg, color: cols[i].color || "#FFF",
              padding: "20px 22px", borderRadius: 18,
              marginBottom: 14, border: `2px solid ${B_.ink}`,
              boxShadow: `4px 4px 0 ${cols[i].sh}`,
              fontSize: 20, fontWeight: 700, lineHeight: 1.2,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{ fontSize: 26, fontWeight: 700, opacity: 0.5 }}>0{i+1}</div>
              {line}
            </div>
          );
        })}
      </div>

      {/* Reframe section with illustration */}
      <div style={{ padding: "36px 22px 0" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: B_.teal, fontWeight: 700, marginBottom: 10 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 20px", letterSpacing: -0.4 }}>
          It was never about <span style={{ ...B_.gradientText, fontWeight: 700 }}>motivation</span>.
        </h2>
      </div>

      <div style={{ margin: "0 16px", borderRadius: 18, overflow: "hidden", border: `2px solid ${B_.ink}`, boxShadow: `3px 3px 0 ${B_.ink}` }}>
        <I_.Signal bg="#E8F5EC" />
      </div>

      <div style={{ padding: "20px 22px 0" }}>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? B_.ink : B_.soft, margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
        ))}
      </div>

      {/* Steps — alternating image left/right */}
      <div style={{ padding: "36px 16px 0" }}>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", textAlign: "center", padding: "0 16px" }}>
          <span style={{ ...B_.gradientText, fontWeight: 700 }}>A different path →</span>
        </h2>
        {c.steps.map((s, i) => {
          const imgs = [I_.Signal, I_.Sensory, I_.CalmSun];
          const bgs = ["#E6F7E9", "#FFF2D8", "#EAF4F5"];
          const accents = [B_.green, "#E8A23D", B_.teal];
          const Img = imgs[i];
          return (
            <div key={i} style={{ marginBottom: 18, background: "#FFF", borderRadius: 18, overflow: "hidden", border: `2px solid ${B_.ink}`, boxShadow: `3px 3px 0 ${B_.ink}` }}>
              <div style={{ background: bgs[i] }}>
                <Img bg={bgs[i]} />
              </div>
              <div style={{ padding: "20px 20px 22px", borderTop: `2px solid ${B_.ink}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 10,
                    background: accents[i], color: "#FFF",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, border: `2px solid ${B_.ink}`,
                  }}>{s.n}</div>
                  <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700, color: B_.ink, lineHeight: 1.3 }}>{s.title}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: B_.soft }}>{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote */}
      <div style={{ margin: "24px 16px 0", padding: "28px 22px", background: B_.ink, borderRadius: 20, border: `2px solid ${B_.ink}`, boxShadow: `4px 4px 0 #FFD866`, textAlign: "center", color: "#FFF" }}>
        <div style={{ fontSize: 36, lineHeight: 0.8, color: "#FFD866", fontWeight: 700, marginBottom: 6 }}>"</div>
        <p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 500, margin: "0 0 14px", fontStyle: "italic" }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 11, color: "#FFD866", fontWeight: 700, letterSpacing: 0.3 }}>— {c.quote.by}</div>
      </div>

      {/* Product image */}
      <div style={{ margin: "28px 16px 0", borderRadius: 20, overflow: "hidden", border: `2px solid ${B_.ink}`, boxShadow: `4px 4px 0 ${B_.ink}` }}>
        <I_.ProductPants bg="#E8F0FC" />
      </div>

      {/* CTA */}
      <div style={{ padding: "30px 22px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: B_.soft, margin: "0 0 20px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "18px 32px",
          background: B_.gradient, color: "#FFF",
          fontSize: 16, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: `4px 4px 0 ${B_.ink}`, border: `2px solid ${B_.ink}`,
          letterSpacing: 0.3,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: B_.muted }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "30px 24px 20px", fontSize: 14, lineHeight: 1.65, color: B_.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: B_.ink, margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: B_.muted, fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>
      <Footer_ />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V6 · DARK PLAYFUL — bold dark background, neon pops
   ═══════════════════════════════════════════════════════════════════ */
const V6_DarkPlayful = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW_, background: "#14262A", fontFamily: F_.main, color: "#FFFFFF" }}>
      <LogoBar_ invert />

      {/* hero */}
      <div style={{ margin: "20px 16px 0", borderRadius: 22, overflow: "hidden", border: "2px solid #FFD866", boxShadow: "5px 5px 0 #FFD866" }}>
        <I_.Hands bg="#FFF2D8" />
      </div>

      <div style={{ padding: "28px 22px 0", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#FFD866", color: B_.ink, padding: "6px 14px", borderRadius: 999, fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>
          ✿ Letter 1 of 4
        </div>
        <h1 style={{ fontSize: 40, lineHeight: 1, fontWeight: 700, margin: 0, letterSpacing: -0.8 }}>
          You haven't done<br/>
          anything <span style={{ color: "#5DD07A" }}>wrong.</span>
        </h1>
      </div>

      <div style={{ padding: "28px 24px 0", fontSize: 15, lineHeight: 1.7, color: "#B8CACD" }}>
        <p style={{ margin: "0 0 14px", fontWeight: 500, color: "#FFD866", fontSize: 16 }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed */}
      <div style={{ padding: "28px 16px 0" }}>
        {c.creed.map((line, i) => {
          const cols = ["#FFD866", "#5DD07A", "#2BAEB4"];
          return (
            <div key={i} style={{
              padding: "18px 22px", borderRadius: 16,
              marginBottom: 12,
              background: "rgba(255,255,255,0.04)",
              border: `2px solid ${cols[i]}`,
              fontSize: 19, fontWeight: 700, lineHeight: 1.25,
              color: cols[i],
            }}>{line}</div>
          );
        })}
      </div>

      {/* Reframe */}
      <div style={{ padding: "36px 22px 0" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: "#5DD07A", fontWeight: 700, marginBottom: 10 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.4 }}>
          It was never about <span style={{ background: "linear-gradient(135deg, #2BAEB4, #5DD07A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>motivation</span>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? "#FFFFFF" : "#B8CACD", margin: "0 0 12px", fontWeight: i === 2 ? 600 : 400 }}>{p}</p>
        ))}
      </div>

      <div style={{ margin: "24px 16px 0", borderRadius: 18, overflow: "hidden", border: "2px solid #FFD866" }}>
        <I_.Signal bg="#E8F5EC" />
      </div>

      {/* Steps */}
      <div style={{ padding: "36px 22px 0" }}>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", textAlign: "center" }}>
          A different path <span style={{ color: "#5DD07A" }}>→</span>
        </h2>
        {c.steps.map((s, i) => {
          const cols = ["#2BAEB4", "#FFD866", "#5DD07A"];
          return (
            <div key={i} style={{ marginBottom: 18, padding: "22px 22px", background: "rgba(255,255,255,0.04)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: cols[i], color: B_.ink, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{s.n}</div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#B8CACD" }}>{s.body}</p>
            </div>
          );
        })}
      </div>

      {/* Quote */}
      <div style={{ margin: "24px 16px 0", padding: "28px 22px", background: "#FFD866", borderRadius: 20, color: B_.ink, textAlign: "center", border: "2px solid #FFD866", boxShadow: "5px 5px 0 #5DD07A" }}>
        <div style={{ fontSize: 36, lineHeight: 0.8, color: B_.ink, fontWeight: 700, marginBottom: 6 }}>"</div>
        <p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 600, margin: "0 0 12px", fontStyle: "italic" }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 11, color: B_.ink, fontWeight: 700 }}>— {c.quote.by}</div>
      </div>

      {/* Product */}
      <div style={{ margin: "28px 16px 0", borderRadius: 20, overflow: "hidden", border: "2px solid #FFD866" }}>
        <I_.ProductPants bg="#E8F0FC" />
      </div>

      {/* CTA */}
      <div style={{ padding: "30px 22px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "17px 30px",
          background: "#FFD866", color: B_.ink,
          fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: "4px 4px 0 #5DD07A",
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#8A9B9D" }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "30px 24px 20px", fontSize: 14, lineHeight: 1.65, color: "#B8CACD" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: "#FFFFFF", margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "#8A9B9D", fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "20px 20px 26px", background: "#0A1618", textAlign: "center", fontSize: 10.5, color: "#5A6E70", letterSpacing: 0.3, lineHeight: 1.7 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#5A6E70" }}>Unsubscribe</a> · <a href="#" style={{ color: "#5A6E70" }}>Preferences</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V7 · MAGAZINE EDITORIAL — serif, drop-cap, letter-page style
   ═══════════════════════════════════════════════════════════════════ */
const V7_EditorialMix = () => {
  const c = window.E1_CONTENT;
  return (
    <div style={{ width: MW_, background: "#F7F1E6", fontFamily: F_.main, color: B_.ink }}>
      {/* masthead */}
      <div style={{ padding: "22px 22px 16px", borderBottom: `2px solid ${B_.ink}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={LOGO_} alt="BrightKidCo" style={{ height: 24 }} />
        <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1.5, color: B_.ink, fontWeight: 700 }}>Vol.&nbsp;1 · No.&nbsp;1</div>
      </div>

      {/* hero image full bleed */}
      <div style={{ position: "relative" }}>
        <I_.Hands bg="#FFF2D8" />
      </div>

      {/* article opener */}
      <div style={{ padding: "30px 22px 0" }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2.5, color: B_.teal, fontWeight: 700, marginBottom: 14 }}>
          The Welcome · A letter in four parts
        </div>
        <h1 style={{ fontFamily: F_.display, fontSize: 42, lineHeight: 0.95, fontWeight: 500, margin: "0 0 20px", letterSpacing: -1, fontStyle: "italic" }}>
          You haven't<br/>done anything<br/><span style={{ ...B_.gradientText, fontWeight: 600 }}>wrong.</span>
        </h1>
        <p style={{ fontFamily: F_.display, fontSize: 17, lineHeight: 1.45, color: B_.soft, fontStyle: "italic", margin: "0 0 18px", borderLeft: `3px solid ${B_.teal}`, paddingLeft: 14 }}>
          {c.hero.sub}
        </p>
        <div style={{ fontSize: 10, letterSpacing: 1, color: B_.muted, textTransform: "uppercase", fontWeight: 600 }}>
          By the BrightKidCo team · 4 min read
        </div>
      </div>

      {/* body with drop cap */}
      <div style={{ padding: "28px 22px 0", fontSize: 15, lineHeight: 1.7, color: B_.soft }}>
        <p style={{ margin: "0 0 14px" }}>
          <span style={{ fontFamily: F_.display, fontSize: 64, float: "left", lineHeight: 0.85, fontWeight: 500, marginRight: 10, marginTop: 2, ...B_.gradientText }}>I</span>
          f you're here, you've probably spent months — maybe years — feeling like you're doing something wrong. Reading Reddit at 2am. Watching other kids move on. Taking another break "for your mental health."
        </p>
        <p style={{ margin: "0 0 18px" }}>So before we say anything else:</p>
      </div>

      {/* creed pullquote */}
      <div style={{ margin: "0 22px", padding: "22px 0", borderTop: `1px solid #D6CEB8`, borderBottom: `1px solid #D6CEB8`, textAlign: "center" }}>
        {c.creed.map((line, i) => (
          <div key={i} style={{ fontFamily: F_.display, fontSize: 21, lineHeight: 1.35, fontStyle: "italic", fontWeight: 500, color: B_.ink }}>
            {line}
          </div>
        ))}
      </div>

      {/* section II */}
      <div style={{ padding: "36px 22px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: B_.teal, fontWeight: 700, marginBottom: 12 }}>
          Part I · The Reframe
        </div>
        <h2 style={{ fontFamily: F_.display, fontSize: 30, lineHeight: 1.1, fontWeight: 500, margin: "0 0 18px", letterSpacing: -0.6, fontStyle: "italic" }}>
          It was never about motivation.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? B_.ink : B_.soft, margin: "0 0 12px", fontWeight: i === 2 ? 600 : 400 }}>{p}</p>
        ))}
      </div>

      {/* illustrated divider */}
      <div style={{ margin: "28px 0 0" }}>
        <I_.Signal bg="#E8F5EC" />
      </div>

      {/* Part II - steps as magazine list */}
      <div style={{ padding: "30px 22px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: B_.teal, fontWeight: 700, marginBottom: 12 }}>
          Part II · A Different Path
        </div>
        {c.steps.map((s, i) => {
          const imgs = [I_.Signal, I_.Sensory, I_.CalmSun];
          const bgs = ["#E8F5EC", "#FFF2D8", "#EAF4F5"];
          const Img = imgs[i];
          return (
            <div key={i} style={{ margin: "0 0 26px", paddingBottom: 20, borderBottom: i < 2 ? `1px solid #D6CEB8` : "none" }}>
              <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: 14 }}>
                <Img bg={bgs[i]} />
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                <div style={{ fontFamily: F_.display, fontSize: 32, fontWeight: 500, fontStyle: "italic", ...B_.gradientText, lineHeight: 1 }}>{s.n}</div>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: B_.soft }}>{s.body}</p>
            </div>
          );
        })}
      </div>

      {/* letters page quote */}
      <div style={{ margin: "8px 22px 0", padding: "22px 0", borderTop: `2px solid ${B_.ink}`, borderBottom: `2px solid ${B_.ink}` }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: B_.teal, fontWeight: 700, marginBottom: 10 }}>
          From the letters page
        </div>
        <p style={{ fontFamily: F_.display, fontSize: 19, lineHeight: 1.4, fontStyle: "italic", fontWeight: 500, margin: "0 0 10px", color: B_.ink }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: B_.muted, letterSpacing: 0.3 }}>{c.quote.by}</div>
      </div>

      <div style={{ padding: "32px 22px 16px", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: B_.soft, margin: "0 0 20px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "15px 30px",
          background: B_.ink, color: "#F7F1E6",
          fontFamily: F_.display, fontSize: 17, fontWeight: 500, fontStyle: "italic",
          textDecoration: "none", borderRadius: 0,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11, color: B_.teal, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700 }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "20px 22px", fontSize: 14, lineHeight: 1.6, color: B_.soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontFamily: F_.display, fontSize: 22, color: B_.ink, margin: "0 0 8px", fontWeight: 500, fontStyle: "italic" }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: B_.muted }}>{c.signoff.ps}</p>
      </div>
      <div style={{ padding: "20px 22px 28px", background: B_.ink, textAlign: "center", fontSize: 10, color: "#A9A08A", letterSpacing: 1, textTransform: "uppercase" }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#A9A08A" }}>Unsubscribe</a> · <a href="#" style={{ color: "#A9A08A" }}>Preferences</a>
      </div>
    </div>
  );
};

Object.assign(window, { V5_HeroStack, V6_DarkPlayful, V7_EditorialMix });
