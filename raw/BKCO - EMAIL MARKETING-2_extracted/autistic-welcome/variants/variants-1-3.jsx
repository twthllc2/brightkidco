/* Variants 1-3: Storybook, Editorial, Playful Cards
   Font system: Questrial main, Fraunces display accent
   Brand gradient: teal→green like logo
   Mobile viewport: 420px
*/

const MOBILE_W = 420;
const LOGO = "../../assets/brightkidco-logo-new.png";

/* ═══════════════════════════════════════════════════════════════════
   V1 · STORYBOOK — illustrative, paper feel, kid-brand
   ═══════════════════════════════════════════════════════════════════ */
const V1_Storybook = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  return (
    <div style={{ width: MOBILE_W, background: "#FFF9F0", fontFamily: F.main, color: "#2A2620", overflow: "hidden" }}>
      <div style={{ padding: "20px 20px 0", textAlign: "center" }}>
        <img src={LOGO} alt="BrightKidCo" style={{ height: 28 }} />
      </div>

      {/* Story opening */}
      <div style={{ position: "relative", margin: "24px 20px 0", padding: "36px 24px 28px", background: "#FFFFFF", borderRadius: 28, border: "2px solid #F0E6D0", boxShadow: "0 3px 0 #F0E6D0" }}>
        <svg width="80" height="40" viewBox="0 0 80 40" style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)" }}>
          <circle cx="20" cy="24" r="14" fill="#FFD866" />
          <circle cx="20" cy="24" r="14" fill="none" stroke="#2A2620" strokeWidth="2" />
          <path d="M20 6 L20 2 M6 12 L3 10 M34 12 L37 10 M6 24 L2 24 M34 24 L38 24" stroke="#2A2620" strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx="56" cy="28" rx="14" ry="7" fill="#E8F5FC" stroke="#2A2620" strokeWidth="2" />
        </svg>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#B08B4F", fontWeight: 700, textAlign: "center", marginTop: 18, marginBottom: 12 }}>
          Chapter one of four
        </div>
        <h1 style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 400, margin: 0, textAlign: "center", letterSpacing: -0.8 }}>
          You haven't<br/>done anything<br/>
          <span style={{ ...B.gradientText, fontWeight: 400, fontStyle: "italic", fontFamily: F.display }}>wrong.</span>
        </h1>
        <div style={{ margin: "20px auto 0", width: 40, height: 3, background: "#FFD866", borderRadius: 3 }} />
      </div>

      {/* Letter */}
      <div style={{ padding: "28px 28px 0", fontSize: 15, lineHeight: 1.7, color: "#4A4036" }}>
        <p style={{ margin: "0 0 14px" }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: "0 0 18px" }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed */}
      <div style={{ margin: "0 20px", padding: "22px 22px", background: "#FFF2D8", borderRadius: 20, border: "2px solid #F0E6D0" }}>
        {c.creed.map((line, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 2 ? "1.5px dashed #E0C98A" : "none" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="10" fill={B.green} stroke="#2A2620" strokeWidth="1.5" />
              <path d="M6 11 L10 15 L16 7" stroke="#FFF" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 17, fontWeight: 700, color: "#2A2620" }}>{line}</span>
          </div>
        ))}
      </div>

      {/* Reframe */}
      <div style={{ padding: "32px 28px 8px" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 10 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 26, lineHeight: 1.2, fontWeight: 700, margin: "0 0 14px", letterSpacing: -0.4 }}>
          It was never about <span style={{ background: "#FFD866", padding: "0 6px", borderRadius: 6 }}>motivation</span>.
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A4036" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? "#2A2620" : "#4A4036" }}>{p}</p>
          ))}
        </div>
      </div>

      {/* Path */}
      <div style={{ padding: "20px 20px 0" }}>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 20px", textAlign: "center", letterSpacing: -0.5 }}>
          Gentle. Sensory-aware.<br/>
          <span style={B.gradientText}>Built for your child.</span>
        </h2>
        {c.steps.map((s, i) => {
          const colors = ["#E8F5EC", "#FFF2D8", "#E8F0FC"];
          return (
            <div key={i} style={{ margin: "0 0 14px", padding: "22px 20px", background: colors[i], borderRadius: 22, border: "2px solid rgba(42,38,32,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "#FFFFFF", border: "2px solid #2A2620",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 15, fontWeight: 700,
                }}>{s.n}</div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#2A2620", lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#4A4036" }}>{s.body}</p>
            </div>
          );
        })}
      </div>

      {/* Quote */}
      <div style={{ margin: "28px 20px 0", padding: "26px 22px", background: "#FFFFFF", borderRadius: 22, border: "2px dashed #D4C09A", textAlign: "center" }}>
        <div style={{ fontSize: 40, lineHeight: 0.8, color: "#FFD866", marginBottom: 4 }}>"</div>
        <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 400, margin: "0 0 14px", color: "#2A2620" }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 12, color: "#7A6B52" }}>— {c.quote.by}</div>
      </div>

      {/* CTA */}
      <div style={{ padding: "32px 24px 8px", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A4036", margin: "0 0 20px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "16px 30px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: "3px 3px 0 #2A2620",
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#8A7B62" }}>{c.ctaFinePrint}</div>
      </div>

      {/* Sign-off */}
      <div style={{ padding: "30px 28px 20px", fontSize: 14, lineHeight: 1.65, color: "#4A4036" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: "#2A2620", margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "#7A6B52" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "16px 20px 24px", background: "#FFF2D8", textAlign: "center", fontSize: 10.5, color: "#7A6B52", letterSpacing: 0.3 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#7A6B52" }}>Unsubscribe</a> · <a href="#" style={{ color: "#7A6B52" }}>Preferences</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V2 · EDITORIAL MAGAZINE
   ═══════════════════════════════════════════════════════════════════ */
const V2_Editorial = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  return (
    <div style={{ width: MOBILE_W, background: "#F7F3EC", fontFamily: F.main, color: "#111" }}>
      <div style={{ padding: "20px 24px 14px", borderBottom: "2px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={LOGO} alt="BrightKidCo" style={{ height: 22 }} />
        <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1.5, color: "#111", fontWeight: 700 }}>Vol.&nbsp;1 · No.&nbsp;1</div>
      </div>

      <div style={{ padding: "32px 28px 0" }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2.5, color: B.tealDeep, fontWeight: 700, marginBottom: 14 }}>
          The Welcome · A letter in four parts
        </div>
        <h1 style={{ fontFamily: F.display, fontSize: 44, lineHeight: 0.95, fontWeight: 500, margin: "0 0 20px", letterSpacing: -1.2, fontStyle: "italic" }}>
          You haven't<br/>done<br/>
          <span style={B.gradientText}>anything wrong.</span>
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.5, color: "#444", margin: "0 0 18px", borderLeft: `3px solid ${B.teal}`, paddingLeft: 14 }}>
          The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting. We know you've tried.
        </p>
        <div style={{ fontSize: 10, letterSpacing: 1, color: "#666", textTransform: "uppercase", fontWeight: 700 }}>
          By the BrightKidCo team · 4 min read
        </div>
      </div>

      <div style={{ padding: "28px 28px 0", fontSize: 15, lineHeight: 1.7, color: "#222" }}>
        <p style={{ margin: "0 0 14px" }}>
          <span style={{ fontFamily: F.display, fontSize: 64, float: "left", lineHeight: 0.85, fontWeight: 500, marginRight: 8, marginTop: 4, ...B.gradientText }}>I</span>
          f you're here, you've probably spent months — maybe years — feeling like you're doing something wrong. Reading Reddit at 2am. Watching other kids move on. Taking another break "for your mental health."
        </p>
        <p style={{ margin: "0 0 16px" }}>So before we say anything else:</p>
        <p style={{ margin: "0 0 22px", fontSize: 22, lineHeight: 1.3, fontWeight: 700, textAlign: "center", padding: "18px 0", borderTop: "1px solid #D6CEB8", borderBottom: "1px solid #D6CEB8" }}>
          <span style={B.gradientText}>You are not failing.</span><br/>
          Your child isn't broken.<br/>
          You just need a different path.
        </p>
      </div>

      <div style={{ padding: "16px 28px 0" }}>
        <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 12 }}>
          Part I · The Reframe
        </div>
        <h2 style={{ fontFamily: F.display, fontSize: 30, lineHeight: 1.1, fontWeight: 500, margin: "0 0 18px", letterSpacing: -0.6, fontStyle: "italic" }}>
          It was never about motivation.
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.7, color: "#333" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "28px 0 0", fontFamily: F.display, fontSize: 24, color: B.teal, letterSpacing: 8 }}>
        · · ·
      </div>

      <div style={{ padding: "24px 28px 0" }}>
        <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 12 }}>
          Part II · A Different Path
        </div>
        {c.steps.map((s, i) => (
          <div key={i} style={{ margin: "0 0 22px", paddingBottom: 20, borderBottom: i < 2 ? "1px solid #D6CEB8" : "none" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
              <div style={{ fontFamily: F.display, fontSize: 36, fontWeight: 500, fontStyle: "italic", ...B.gradientText, lineHeight: 1 }}>{s.n}</div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, lineHeight: 1.25, color: "#111" }}>{s.title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "#444" }}>{s.body}</p>
          </div>
        ))}
      </div>

      <div style={{ margin: "0 28px", padding: "22px 0", borderTop: "2px solid #111", borderBottom: "2px solid #111" }}>
        <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 10 }}>
          From the letters page
        </div>
        <p style={{ fontFamily: F.display, fontSize: 18, lineHeight: 1.4, fontStyle: "italic", fontWeight: 400, margin: "0 0 10px" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: "#666", letterSpacing: 0.3 }}>{c.quote.by}</div>
      </div>

      <div style={{ padding: "30px 28px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#444", margin: "0 0 18px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "14px 28px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 4,
          letterSpacing: 0.3,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11, color: B.tealDeep, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700 }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "20px 28px", fontSize: 14, lineHeight: 1.6, color: "#444" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: "#111", margin: "0 0 10px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "#666" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "20px 28px 28px", background: "#111", textAlign: "center", fontSize: 10, color: "#A9A08A", letterSpacing: 1, textTransform: "uppercase" }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#A9A08A" }}>Unsubscribe</a> · <a href="#" style={{ color: "#A9A08A" }}>Preferences</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V3 · PLAYFUL CARDS — stickers/polaroids
   ═══════════════════════════════════════════════════════════════════ */
const V3_PlayfulCards = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  return (
    <div style={{ width: MOBILE_W, background: "#FAF5EC", fontFamily: F.main, color: "#1F2D2F" }}>
      <div style={{ padding: "24px 20px 0", textAlign: "center" }}>
        <img src={LOGO} alt="BrightKidCo" style={{ height: 30 }} />
      </div>

      <div style={{ padding: "30px 16px 0", textAlign: "center" }}>
        <div style={{
          display: "inline-block", transform: "rotate(-2deg)",
          background: "#FFD866", padding: "8px 16px", borderRadius: 999,
          fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
          color: "#1F2D2F", marginBottom: 18,
          boxShadow: "3px 3px 0 #1F2D2F", border: "2px solid #1F2D2F",
        }}>
          Letter 1 of 4 ✿
        </div>
        <h1 style={{ fontSize: 40, lineHeight: 1.05, fontWeight: 700, margin: 0, letterSpacing: -0.8 }}>
          You haven't done<br/>
          <span style={{ display: "inline-block", background: B.gradient, color: "white", padding: "2px 14px", borderRadius: 14, transform: "rotate(-1.5deg)", boxShadow: "3px 3px 0 #1F2D2F", border: "2px solid #1F2D2F", marginTop: 6 }}>anything wrong</span>
        </h1>
      </div>

      <div style={{ padding: "36px 20px 0" }}>
        <div style={{
          background: "#FFFFFF", padding: "18px 18px 22px", borderRadius: 6,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          transform: "rotate(-1.5deg)", marginBottom: 14,
        }}>
          <div style={{ background: "linear-gradient(135deg, #FFE8D6 0%, #FFD1B5 100%)", height: 120, borderRadius: 3, marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42 }}>
            <span>👶✨</span>
          </div>
          <p style={{ margin: 0, fontSize: 15, color: "#1F2D2F", textAlign: "center", fontWeight: 700 }}>
            hi, and welcome.
          </p>
        </div>

        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3D5052", margin: "0 0 14px" }}>
          {c.letterOpening[1]}
        </p>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3D5052", margin: "0 0 20px" }}>
          {c.letterOpening[2]}
        </p>
      </div>

      <div style={{ padding: "0 16px" }}>
        {c.creed.map((line, i) => {
          const bgs = [B.teal, B.green, "#FFB5A0"];
          const rotations = ["rotate(-1deg)", "rotate(1deg)", "rotate(-0.5deg)"];
          return (
            <div key={i} style={{
              background: bgs[i], color: "#FFF",
              padding: "16px 20px", borderRadius: 16,
              transform: rotations[i], marginBottom: 12,
              boxShadow: "3px 3px 0 #1F2D2F", border: "2px solid #1F2D2F",
              fontSize: 18, fontWeight: 700,
            }}>
              {line}
            </div>
          );
        })}
      </div>

      <div style={{ padding: "36px 20px 0" }}>
        <div style={{ display: "inline-block", background: "#1F2D2F", color: "#FFD866", padding: "6px 12px", borderRadius: 8, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>
          ⓘ The part nobody explained
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.5 }}>
          It was never about{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={B.gradientText}>motivation</span>
            <svg width="130" height="8" viewBox="0 0 130 8" style={{ position: "absolute", bottom: -4, left: 0 }}>
              <path d="M2 5 Q 30 1, 65 4 T 128 3" stroke={B.teal} strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>.
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3D5052" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? "#1F2D2F" : "#3D5052" }}>{p}</p>
          ))}
        </div>
      </div>

      <div style={{ padding: "36px 20px 0" }}>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 20px", textAlign: "center" }}>
          <span style={B.gradientText}>A different path →</span>
        </h2>
        {c.steps.map((s, i) => {
          const cols = [{bg: "#E6F7E9", acc: B.green}, {bg: "#FFE8D6", acc: "#FFB5A0"}, {bg: "#DDE9FB", acc: "#6B9FD4"}];
          const rot = ["rotate(-0.5deg)", "rotate(0.8deg)", "rotate(-0.3deg)"];
          return (
            <div key={i} style={{
              background: "#FFFFFF", padding: 4, borderRadius: 10,
              boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
              transform: rot[i], marginBottom: 18,
              border: "2px solid #1F2D2F",
            }}>
              <div style={{ background: cols[i].bg, padding: "18px 18px", borderRadius: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: cols[i].acc, color: "#FFF",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 700,
                    border: "2px solid #1F2D2F",
                  }}>{s.n}</div>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#1F2D2F", lineHeight: 1.3 }}>{s.title}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#3D5052" }}>{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ margin: "24px 16px 0", padding: "24px 20px", background: "#FFD866", borderRadius: 20, border: "2px solid #1F2D2F", boxShadow: "4px 4px 0 #1F2D2F", transform: "rotate(-0.5deg)", textAlign: "center" }}>
        <p style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600, margin: "0 0 12px", color: "#1F2D2F" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: "#1F2D2F", fontWeight: 700, letterSpacing: 0.3 }}>— {c.quote.by}</div>
      </div>

      <div style={{ padding: "36px 20px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#3D5052", margin: "0 0 20px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "16px 30px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: "4px 4px 0 #1F2D2F", border: "2px solid #1F2D2F",
          transform: "rotate(-0.5deg)",
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#8A9B9D" }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "30px 24px 20px", fontSize: 14, lineHeight: 1.65, color: "#3D5052" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: "#1F2D2F", margin: "0 0 8px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "#8A9B9D" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "16px 20px 24px", background: "#1F2D2F", textAlign: "center", fontSize: 10.5, color: "#8A9B9D", letterSpacing: 0.3 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#8A9B9D" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8A9B9D" }}>Preferences</a>
      </div>
    </div>
  );
};

window.V1_Storybook = V1_Storybook;
window.V2_Editorial = V2_Editorial;
window.V3_PlayfulCards = V3_PlayfulCards;
