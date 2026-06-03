/* Variants 4-6: Soft Minimal, Warm Beige, Playful Duotone
   Questrial main, Fraunces display, brand gradient headlines
*/

const MOBILE_W2 = 420;
const LOGO2 = "../../assets/brightkidco-logo-new.png";

/* ═══════════════════════════════════════════════════════════════════
   V4 · SOFT MINIMAL — white, lots of whitespace, one accent
   ═══════════════════════════════════════════════════════════════════ */
const V4_SoftMinimal = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  return (
    <div style={{ width: MOBILE_W2, background: "#FFFFFF", fontFamily: F.main, color: "#111" }}>
      <div style={{ padding: "32px 28px 0", textAlign: "center" }}>
        <img src={LOGO2} alt="BrightKidCo" style={{ height: 24 }} />
      </div>

      <div style={{ padding: "60px 32px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#999", fontWeight: 600, marginBottom: 20 }}>
          01 / 04
        </div>
        <h1 style={{ fontSize: 36, lineHeight: 1.1, fontWeight: 700, margin: "0 0 24px", letterSpacing: -0.8 }}>
          You haven't done<br/>
          <span style={B.gradientText}>anything wrong.</span>
        </h1>
        <div style={{ width: 32, height: 2, background: B.teal, marginBottom: 24 }} />
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", margin: 0 }}>
          The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting.
        </p>
      </div>

      <div style={{ padding: "56px 32px 0", fontSize: 15, lineHeight: 1.75, color: "#333" }}>
        <p style={{ margin: "0 0 18px" }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 18px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: "0 0 30px" }}>{c.letterOpening[2]}</p>

        <div style={{ padding: "24px 0", borderTop: "1px solid #EEE", borderBottom: "1px solid #EEE", margin: "0 0 16px" }}>
          {c.creed.map((line, i) => (
            <div key={i} style={{ fontSize: 20, lineHeight: 1.4, fontWeight: 700, color: "#111", margin: "0 0 6px" }}>
              {i === 0 ? <span style={B.gradientText}>{line}</span> : line}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "56px 32px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 14 }}>
          The Reframe
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.2, fontWeight: 700, margin: "0 0 20px", letterSpacing: -0.5 }}>
          It was never about<br/>
          <span style={B.gradientText}>motivation.</span>
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.75, color: "#444" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 14px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? "#111" : "#444" }}>{p}</p>
          ))}
        </div>
      </div>

      <div style={{ padding: "56px 32px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 14 }}>
          A Different Path
        </div>
        {c.steps.map((s, i) => (
          <div key={i} style={{ padding: "28px 0", borderBottom: i < 2 ? "1px solid #EEE" : "none" }}>
            <div style={{ fontSize: 11, letterSpacing: 2, color: "#CCC", fontWeight: 700, marginBottom: 8 }}>— {s.n}</div>
            <h3 style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, lineHeight: 1.3, color: "#111" }}>{s.title}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#555" }}>{s.body}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: "56px 32px 0" }}>
        <p style={{ fontSize: 19, lineHeight: 1.5, fontWeight: 400, margin: "0 0 14px", color: "#111" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: "#999", letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 600 }}>{c.quote.by}</div>
      </div>

      <div style={{ padding: "56px 32px 0" }}>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "#555", margin: "0 0 24px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "block", padding: "18px 24px",
          background: B.gradient, color: "#FFF",
          fontSize: 14, fontWeight: 700, letterSpacing: 0.5,
          textDecoration: "none", borderRadius: 2,
          textAlign: "center",
        }}>{c.ctaButton.toUpperCase()}</a>
        <div style={{ marginTop: 16, fontSize: 11, color: "#999", textAlign: "center", letterSpacing: 0.3 }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "56px 32px 32px", fontSize: 14, lineHeight: 1.7, color: "#555" }}>
        <p style={{ margin: "0 0 6px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 16, color: "#111", margin: "0 0 14px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12, color: "#999" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "24px 32px 32px", borderTop: "1px solid #EEE", textAlign: "center", fontSize: 10, color: "#999", letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 600 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#999" }}>Unsubscribe</a> · <a href="#" style={{ color: "#999" }}>Preferences</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V5 · WARM BEIGE — neutral, adult calm, tactile
   ═══════════════════════════════════════════════════════════════════ */
const V5_WarmBeige = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  const beige = "#E8DFD1";
  const paper = "#F4EDE0";
  const ink = "#2A2418";
  const soft = "#6B6152";
  return (
    <div style={{ width: MOBILE_W2, background: paper, fontFamily: F.main, color: ink }}>
      <div style={{ padding: "28px 28px 0", textAlign: "center" }}>
        <img src={LOGO2} alt="BrightKidCo" style={{ height: 26 }} />
      </div>

      <div style={{ padding: "44px 28px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: soft, fontWeight: 700, marginBottom: 18 }}>
          01 — A letter
        </div>
        <h1 style={{ fontFamily: F.display, fontSize: 40, lineHeight: 1.05, fontWeight: 400, margin: "0 0 18px", letterSpacing: -0.8, fontStyle: "italic" }}>
          You haven't done<br/>
          <span style={B.gradientText}>anything wrong.</span>
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: soft, margin: 0 }}>
          The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting.
        </p>
      </div>

      <div style={{ padding: "40px 28px 0", fontSize: 15, lineHeight: 1.75, color: ink }}>
        <p style={{ margin: "0 0 14px" }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px", color: soft }}>{c.letterOpening[1]}</p>
        <p style={{ margin: "0 0 24px", color: soft }}>{c.letterOpening[2]}</p>
      </div>

      <div style={{ margin: "0 20px", padding: "32px 28px", background: beige, borderRadius: 4 }}>
        {c.creed.map((line, i) => (
          <div key={i} style={{ fontFamily: F.display, fontSize: 20, lineHeight: 1.4, fontWeight: 500, fontStyle: "italic", margin: "0 0 6px", color: ink }}>
            {line}
          </div>
        ))}
      </div>

      <div style={{ padding: "44px 28px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 14 }}>
          · The Reframe
        </div>
        <h2 style={{ fontFamily: F.display, fontSize: 28, lineHeight: 1.2, fontWeight: 400, fontStyle: "italic", margin: "0 0 18px", letterSpacing: -0.4 }}>
          It was never about <span style={B.gradientText}>motivation.</span>
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.75, color: soft }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? ink : soft }}>{p}</p>
          ))}
        </div>
      </div>

      <div style={{ padding: "44px 28px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 14 }}>
          · A different path
        </div>
        {c.steps.map((s, i) => (
          <div key={i} style={{ padding: "22px 0", borderBottom: i < 2 ? `1px solid ${beige}` : "none", display: "flex", gap: 18 }}>
            <div style={{ fontFamily: F.display, fontSize: 32, ...B.gradientText, fontWeight: 400, fontStyle: "italic", lineHeight: 1, minWidth: 42 }}>{s.n}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: soft }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ margin: "44px 20px 0", padding: "28px 24px", background: beige, borderRadius: 4, textAlign: "center" }}>
        <p style={{ fontFamily: F.display, fontSize: 18, lineHeight: 1.5, fontStyle: "italic", fontWeight: 400, margin: "0 0 12px", color: ink }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: soft, letterSpacing: 0.5 }}>— {c.quote.by}</div>
      </div>

      <div style={{ padding: "44px 28px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: soft, margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "16px 32px",
          background: B.gradient, color: "#FFF",
          fontSize: 14, fontWeight: 700, letterSpacing: 0.5,
          textDecoration: "none", borderRadius: 2,
        }}>{c.ctaButton}</a>
        <div style={{ marginTop: 14, fontSize: 11, color: soft, letterSpacing: 0.3 }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "40px 28px 24px", fontSize: 14, lineHeight: 1.7, color: soft }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontFamily: F.display, fontSize: 20, color: ink, margin: "0 0 10px", fontWeight: 500, fontStyle: "italic" }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: soft }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "20px 28px 28px", background: beige, textAlign: "center", fontSize: 10.5, color: soft, letterSpacing: 0.3 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: soft }}>Unsubscribe</a> · <a href="#" style={{ color: soft }}>Preferences</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V6 · PLAYFUL DUOTONE — bold color blocks, Surreal-inspired
   ═══════════════════════════════════════════════════════════════════ */
const V6_Duotone = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  return (
    <div style={{ width: MOBILE_W2, background: "#FFF", fontFamily: F.main, color: "#1F2D2F" }}>
      {/* Top color block */}
      <div style={{ background: B.gradient, padding: "32px 24px 48px", color: "#FFF", position: "relative", overflow: "hidden" }}>
        <img src={LOGO2} alt="BrightKidCo" style={{ height: 26, filter: "brightness(0) invert(1)", marginBottom: 32 }} />
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 18, opacity: 0.9 }}>
          Letter 01 / 04
        </div>
        <h1 style={{ fontSize: 42, lineHeight: 1.02, fontWeight: 700, margin: 0, letterSpacing: -1, color: "#FFF" }}>
          You haven't<br/>done<br/>anything<br/>wrong.
        </h1>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ position: "absolute", bottom: -20, right: -20, opacity: 0.25 }}>
          <circle cx="40" cy="40" r="36" fill="#FFF" />
        </svg>
      </div>

      {/* White bubble on seam */}
      <div style={{ background: "#FFF", marginTop: -24, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: "32px 24px 0" }}>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3D5052", margin: "0 0 12px" }}>
          The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3D5052", margin: "0 0 18px" }}>
          {c.letterOpening[1]}
        </p>
      </div>

      {/* Peach block */}
      <div style={{ background: "#FFE8D6", padding: "36px 24px", margin: "20px 0 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#C47B5A", fontWeight: 700, marginBottom: 14 }}>
          Say this out loud
        </div>
        {c.creed.map((line, i) => (
          <h3 key={i} style={{ fontSize: 22, lineHeight: 1.25, fontWeight: 700, margin: "0 0 6px", color: "#1F2D2F" }}>
            {i === 0 ? <span style={B.gradientText}>{line}</span> : line}
          </h3>
        ))}
      </div>

      {/* White reframe */}
      <div style={{ padding: "40px 24px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 14 }}>
          The Reframe ✷
        </div>
        <h2 style={{ fontSize: 30, lineHeight: 1.15, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.6 }}>
          It was never about{" "}
          <span style={{ background: B.gradient, color: "#FFF", padding: "0 10px", borderRadius: 6, display: "inline-block" }}>motivation</span>.
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3D5052" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? "#1F2D2F" : "#3D5052" }}>{p}</p>
          ))}
        </div>
      </div>

      {/* Teal steps block */}
      <div style={{ background: B.teal, color: "#FFF", padding: "40px 24px", margin: "36px 0 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#FFF", fontWeight: 700, marginBottom: 8, opacity: 0.85 }}>
          ✷ A different path
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", letterSpacing: -0.5, color: "#FFF" }}>
          Gentle. Sensory-aware.<br/>Built for your child.
        </h2>
        {c.steps.map((s, i) => (
          <div key={i} style={{ padding: "18px 0", borderTop: "1.5px solid rgba(255,255,255,0.3)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#FFD866", lineHeight: 1 }}>{s.n}</div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, lineHeight: 1.3, color: "#FFF" }}>{s.title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.9)" }}>{s.body}</p>
          </div>
        ))}
      </div>

      {/* Yellow quote */}
      <div style={{ background: "#FFD866", padding: "36px 24px", color: "#1F2D2F" }}>
        <div style={{ fontSize: 60, lineHeight: 0.6, fontWeight: 700, marginBottom: 6, color: B.teal }}>"</div>
        <p style={{ fontSize: 18, lineHeight: 1.4, fontWeight: 600, margin: "0 0 12px" }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.3 }}>— {c.quote.by}</div>
      </div>

      {/* Dark CTA block */}
      <div style={{ background: "#1F2D2F", color: "#FFF", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "18px 32px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 16, fontSize: 11.5, color: "rgba(255,255,255,0.55)" }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "32px 24px 20px", fontSize: 14, lineHeight: 1.65, color: "#3D5052" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: "#1F2D2F", margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "#8A9B9D" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "16px 20px 24px", background: "#FFE8D6", textAlign: "center", fontSize: 10.5, color: "#8A7A6B", letterSpacing: 0.3 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#8A7A6B" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8A7A6B" }}>Preferences</a>
      </div>
    </div>
  );
};

window.V4_SoftMinimal = V4_SoftMinimal;
window.V5_WarmBeige = V5_WarmBeige;
window.V6_Duotone = V6_Duotone;
