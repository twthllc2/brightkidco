/* Variants 7-10: Chat, Scrapbook, Clinical, Bold Mono */

const MOBILE_W3 = 420;
const LOGO3 = "../../assets/brightkidco-logo-new.png";

/* ═══════════════════════════════════════════════════════════════════
   V7 · CONVERSATIONAL CHAT — iMessage-like bubbles
   ═══════════════════════════════════════════════════════════════════ */
const V7_Chat = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  const Bubble = ({ children, from = "them", big = false }) => (
    <div style={{
      display: "flex", justifyContent: from === "me" ? "flex-end" : "flex-start",
      marginBottom: 8,
    }}>
      <div style={{
        maxWidth: "78%",
        padding: big ? "14px 18px" : "10px 15px",
        background: from === "me" ? B.gradient : "#EFEEF0",
        color: from === "me" ? "#FFF" : "#1F2D2F",
        borderRadius: 20,
        borderBottomRightRadius: from === "me" ? 4 : 20,
        borderBottomLeftRadius: from === "me" ? 20 : 4,
        fontSize: big ? 16 : 14.5,
        lineHeight: 1.45,
        fontWeight: from === "me" ? 600 : 400,
      }}>{children}</div>
    </div>
  );

  return (
    <div style={{ width: MOBILE_W3, background: "#FFF", fontFamily: F.main, color: "#1F2D2F" }}>
      {/* Header like chat */}
      <div style={{ padding: "16px 20px", background: "#F7F7F9", borderBottom: "1px solid #E5E5E8", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: B.gradient, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontWeight: 700, fontSize: 14 }}>
          BK
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>BrightKidCo</div>
          <div style={{ fontSize: 11, color: "#5DD07A", fontWeight: 600 }}>● active now</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "center" }}>
          <img src={LOGO3} alt="" style={{ height: 16, opacity: 0.6 }} />
        </div>
      </div>

      <div style={{ padding: "20px 16px 24px", background: "#FFF" }}>
        <div style={{ textAlign: "center", fontSize: 10.5, color: "#999", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, marginBottom: 18 }}>
          Letter 1 of 4 · Today 9:00
        </div>

        <Bubble>Hi, and welcome 👋</Bubble>
        <Bubble>We just want to say something first.</Bubble>
        <Bubble big>
          <span style={{ fontSize: 20, fontWeight: 700, display: "block", marginBottom: 4 }}>You haven't done anything wrong.</span>
          The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting.
        </Bubble>

        <div style={{ height: 18 }} />

        <Bubble>If you're here, you've probably spent months — maybe years — feeling like you're doing something wrong.</Bubble>
        <Bubble>Reading Reddit at 2am. Watching other kids move on.</Bubble>
        <Bubble>So let us say this clearly:</Bubble>

        <div style={{ height: 8 }} />
        {c.creed.map((line, i) => (
          <Bubble key={i} from="me">{line}</Bubble>
        ))}

        <div style={{ height: 24, textAlign: "center", fontSize: 10.5, color: "#999", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, marginTop: 12, marginBottom: 12 }}>
          The Reframe
        </div>

        <Bubble>
          <span style={{ fontWeight: 700, fontSize: 16, display: "block", marginBottom: 4 }}>
            It was never about <span style={B.gradientText}>motivation.</span>
          </span>
        </Bubble>
        {c.reframeBody.map((p, i) => (
          <Bubble key={i}><span style={{ fontWeight: i === 2 ? 600 : 400 }}>{p}</span></Bubble>
        ))}

        <div style={{ height: 24, textAlign: "center", fontSize: 10.5, color: "#999", letterSpacing: 1, textTransform: "uppercase", fontWeight: 600, marginTop: 12, marginBottom: 12 }}>
          A Different Path
        </div>

        {c.steps.map((s, i) => (
          <Bubble key={i}>
            <span style={{ fontWeight: 700, ...B.gradientText, display: "block", marginBottom: 4 }}>{s.n} — {s.title}</span>
            <span style={{ fontSize: 13.5 }}>{s.body}</span>
          </Bubble>
        ))}

        <div style={{ height: 20 }} />

        <Bubble big>
          <span style={{ fontStyle: "italic" }}>"{c.quote.text}"</span>
          <span style={{ display: "block", marginTop: 8, fontSize: 11, color: "#666", fontWeight: 600 }}>— {c.quote.by}</span>
        </Bubble>

        <div style={{ height: 20 }} />
        <Bubble>{c.ctaIntro}</Bubble>

        <div style={{ textAlign: "center", margin: "24px 0 12px" }}>
          <a href="#" style={{
            display: "inline-block", padding: "14px 28px",
            background: B.gradient, color: "#FFF",
            fontSize: 15, fontWeight: 700,
            textDecoration: "none", borderRadius: 999,
          }}>{c.ctaButton} →</a>
        </div>
        <div style={{ textAlign: "center", fontSize: 11, color: "#999" }}>{c.ctaFinePrint}</div>

        <div style={{ height: 20 }} />
        <Bubble>— {c.signoff.name}</Bubble>
        <Bubble><span style={{ fontSize: 12.5, color: "#666" }}>{c.signoff.ps}</span></Bubble>
      </div>

      <div style={{ padding: "16px 20px", background: "#F7F7F9", textAlign: "center", fontSize: 10.5, color: "#999" }}>
        {c.footer.tagline} · <a href="#" style={{ color: "#999" }}>Unsubscribe</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V8 · SCRAPBOOK / JOURNAL — mixed textures, tape, handwritten
   ═══════════════════════════════════════════════════════════════════ */
const V8_Scrapbook = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  const handwritten = "'Caveat', 'Fraunces', cursive";
  const Tape = ({ rot = 0, top = 0, left = "50%" }) => (
    <div style={{
      position: "absolute", top, left, transform: `translateX(-50%) rotate(${rot}deg)`,
      width: 60, height: 20, background: "rgba(255,214,102,0.7)", border: "1px solid rgba(0,0,0,0.05)",
    }} />
  );
  return (
    <div style={{ width: MOBILE_W3, background: "#F4EEE0", fontFamily: F.main, color: "#2A2418" }}>
      <div style={{ padding: "24px 20px 0", textAlign: "center" }}>
        <img src={LOGO3} alt="BrightKidCo" style={{ height: 26 }} />
      </div>

      {/* Opening note on paper */}
      <div style={{ position: "relative", margin: "40px 20px 0", padding: "36px 24px 28px", background: "#FFFCF3", boxShadow: "0 3px 10px rgba(0,0,0,0.06), 0 1px 0 #EBE0C5", borderRadius: 2 }}>
        <Tape rot={-4} top={-10} />
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#8B7A52", fontWeight: 700, marginBottom: 12, textAlign: "center" }}>
          Note № 1 of 4
        </div>
        <h1 style={{ fontFamily: handwritten, fontSize: 40, lineHeight: 1.05, fontWeight: 500, margin: "0 0 8px", textAlign: "center", letterSpacing: -0.5 }}>
          You haven't done<br/><span style={B.gradientText}>anything wrong.</span>
        </h1>
        <div style={{ textAlign: "center", fontSize: 14, lineHeight: 1.6, color: "#5A4E36", fontStyle: "italic", marginTop: 12 }}>
          We know you've tried everything.
        </div>
      </div>

      {/* Letter body */}
      <div style={{ padding: "32px 28px 0", fontSize: 15, lineHeight: 1.7, color: "#4A3E26" }}>
        <p style={{ margin: "0 0 14px" }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: "0 0 18px" }}>{c.letterOpening[2]}</p>
      </div>

      {/* Creed as handwritten list on index card */}
      <div style={{ position: "relative", margin: "8px 20px 0", padding: "26px 24px", background: "#FFF", boxShadow: "0 4px 12px rgba(0,0,0,0.07)", transform: "rotate(-1deg)", borderRadius: 2 }}>
        <Tape rot={8} top={-10} left="30%" />
        <Tape rot={-6} top={-10} left="75%" />
        {c.creed.map((line, i) => (
          <div key={i} style={{ fontFamily: handwritten, fontSize: 22, lineHeight: 1.3, margin: "0 0 4px", color: "#2A2418" }}>
            <span style={{ color: B.green, marginRight: 8 }}>✓</span>
            {line}
          </div>
        ))}
      </div>

      {/* Reframe — annotated-style */}
      <div style={{ padding: "40px 28px 0" }}>
        <div style={{ fontFamily: handwritten, fontSize: 18, color: B.teal, fontWeight: 500, marginBottom: 10, transform: "rotate(-2deg)", display: "inline-block" }}>
          here's the thing ↓
        </div>
        <h2 style={{ fontSize: 26, lineHeight: 1.2, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.5 }}>
          It was never about <span style={{ position: "relative" }}>
            <span style={B.gradientText}>motivation</span>
            <svg width="120" height="8" viewBox="0 0 120 8" style={{ position: "absolute", bottom: -4, left: 0 }}>
              <path d="M2 5 Q 30 1, 60 4 T 118 3" stroke={B.teal} strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>.
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A3E26" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? "#2A2418" : "#4A3E26" }}>{p}</p>
          ))}
        </div>
      </div>

      {/* Steps — stacked cards with tape */}
      <div style={{ padding: "36px 20px 0" }}>
        <div style={{ textAlign: "center", fontFamily: handwritten, fontSize: 28, fontWeight: 500, margin: "0 0 22px", ...B.gradientText }}>
          A different path →
        </div>
        {c.steps.map((s, i) => {
          const rot = ["-1.2deg", "0.8deg", "-0.5deg"];
          const bg = ["#E8F5EC", "#FFF2D8", "#FFE8D6"];
          return (
            <div key={i} style={{ position: "relative", padding: "20px 20px", background: bg[i], marginBottom: 14, borderRadius: 2, transform: `rotate(${rot[i]})`, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              <Tape rot={i % 2 === 0 ? -5 : 5} top={-8} left={i % 2 === 0 ? "20%" : "80%"} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ fontFamily: handwritten, fontSize: 28, ...B.gradientText, fontWeight: 500 }}>№{s.n}</div>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#2A2418", lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#4A3E26" }}>{s.body}</p>
            </div>
          );
        })}
      </div>

      {/* Quote — polaroid */}
      <div style={{ position: "relative", margin: "32px 30px 0", padding: "20px 18px 28px", background: "#FFF", boxShadow: "0 6px 16px rgba(0,0,0,0.08)", transform: "rotate(1deg)" }}>
        <Tape rot={-8} top={-10} left="30%" />
        <p style={{ fontFamily: handwritten, fontSize: 20, lineHeight: 1.4, fontWeight: 500, margin: "0 0 14px", color: "#2A2418", textAlign: "center" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 11, color: "#8B7A52", textAlign: "center" }}>— {c.quote.by}</div>
      </div>

      {/* CTA */}
      <div style={{ padding: "40px 24px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A3E26", margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "16px 30px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          boxShadow: "3px 3px 0 #2A2418",
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontFamily: handwritten, fontSize: 16, color: "#8B7A52" }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "30px 28px 20px", fontSize: 14, lineHeight: 1.65, color: "#4A3E26" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontFamily: handwritten, fontSize: 26, color: "#2A2418", margin: "0 0 8px", fontWeight: 500 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "#8B7A52", fontStyle: "italic" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "16px 20px 24px", background: "#EBE0C5", textAlign: "center", fontSize: 10.5, color: "#8B7A52" }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#8B7A52" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8B7A52" }}>Preferences</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V9 · CLINICAL PREMIUM — BREZ-like, soft medical, trustworthy
   ═══════════════════════════════════════════════════════════════════ */
const V9_Clinical = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  return (
    <div style={{ width: MOBILE_W3, background: "#F4F9F9", fontFamily: F.main, color: "#1A2B2D" }}>
      <div style={{ padding: "32px 28px 0", textAlign: "center" }}>
        <img src={LOGO3} alt="BrightKidCo" style={{ height: 28 }} />
      </div>

      <div style={{ padding: "48px 28px 0" }}>
        <div style={{ display: "inline-block", padding: "5px 12px", background: "#E0F2EE", color: B.tealDeep, borderRadius: 999, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 20 }}>
          ● Module 01 of 04
        </div>
        <h1 style={{ fontSize: 38, lineHeight: 1.1, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.8 }}>
          You haven't done<br/>
          <span style={B.gradientText}>anything wrong.</span>
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "#4B5F61", margin: 0 }}>
          The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting.
        </p>
      </div>

      {/* Card-based letter */}
      <div style={{ margin: "40px 20px 0", padding: "32px 28px", background: "#FFF", borderRadius: 20, boxShadow: "0 2px 16px rgba(26,43,45,0.06)" }}>
        <div style={{ fontSize: 15, lineHeight: 1.75, color: "#3B4F51" }}>
          <p style={{ margin: "0 0 14px" }}>Hi, and welcome.</p>
          <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
          <p style={{ margin: "0 0 20px" }}>{c.letterOpening[2]}</p>
        </div>
        <div style={{ padding: "18px 0 0", borderTop: "1px solid #E0EDEB" }}>
          {c.creed.map((line, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: B.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6 L5 9 L10 3" stroke="#FFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#1A2B2D" }}>{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reframe */}
      <div style={{ padding: "40px 28px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 12 }}>
          ① The Science
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.2, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.5 }}>
          It was never about<br/><span style={B.gradientText}>motivation.</span>
        </h2>
        <div style={{ fontSize: 14.5, lineHeight: 1.75, color: "#4B5F61" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? "#1A2B2D" : "#4B5F61" }}>{p}</p>
          ))}
        </div>
        <div style={{ marginTop: 18, padding: "14px 18px", background: "#E0F2EE", borderRadius: 12, fontSize: 13, lineHeight: 1.6, color: B.tealDeep, display: "flex", gap: 10 }}>
          <div style={{ fontWeight: 700 }}>↳</div>
          <div>This is called <strong>interoception</strong> — the brain's ability to notice internal body signals.</div>
        </div>
      </div>

      {/* Steps */}
      <div style={{ padding: "40px 20px 0" }}>
        <div style={{ padding: "0 8px 14px", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700 }}>
          ② The Method
        </div>
        <div style={{ background: "#FFF", borderRadius: 20, padding: "8px 0", boxShadow: "0 2px 16px rgba(26,43,45,0.06)" }}>
          {c.steps.map((s, i) => (
            <div key={i} style={{ padding: "22px 22px", borderBottom: i < 2 ? "1px solid #E8F0EF" : "none" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 700, ...B.gradientText, letterSpacing: 1 }}>0{i+1}</div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, lineHeight: 1.3, color: "#1A2B2D" }}>{s.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "#4B5F61" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div style={{ margin: "40px 20px 0", padding: "28px 24px", background: B.gradient, borderRadius: 20, color: "#FFF" }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, opacity: 0.85, marginBottom: 12 }}>
          From a parent
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.5, fontWeight: 600, margin: "0 0 14px", color: "#FFF" }}>
          "{c.quote.text}"
        </p>
        <div style={{ fontSize: 12, opacity: 0.9, fontWeight: 600 }}>— {c.quote.by}</div>
      </div>

      <div style={{ padding: "40px 28px 0", textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4B5F61", margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "block", padding: "18px 24px",
          background: B.gradient, color: "#FFF",
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 14,
          textAlign: "center",
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#8B9FA1" }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "36px 28px 20px", fontSize: 14, lineHeight: 1.7, color: "#4B5F61" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 18, color: "#1A2B2D", margin: "0 0 10px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "#8B9FA1" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "20px 28px 28px", textAlign: "center", fontSize: 10.5, color: "#8B9FA1", letterSpacing: 0.3 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "#8B9FA1" }}>Unsubscribe</a> · <a href="#" style={{ color: "#8B9FA1" }}>Preferences</a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   V10 · BOLD MONOCHROME — huge type, statement-like
   ═══════════════════════════════════════════════════════════════════ */
const V10_BoldMono = () => {
  const c = window.E1_CONTENT;
  const B = window.BRAND;
  const F = window.FONT;
  return (
    <div style={{ width: MOBILE_W3, background: "#0E1617", fontFamily: F.main, color: "#FFF" }}>
      <div style={{ padding: "28px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src={LOGO3} alt="BrightKidCo" style={{ height: 22, filter: "brightness(0) invert(1)" }} />
        <div style={{ fontSize: 10, letterSpacing: 2, color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>01/04</div>
      </div>

      <div style={{ padding: "60px 24px 40px" }}>
        <h1 style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 700, margin: 0, letterSpacing: -2.5 }}>
          You<br/>
          haven't<br/>
          done<br/>
          anything<br/>
          <span style={B.gradientText}>wrong.</span>
        </h1>
      </div>

      <div style={{ padding: "0 24px 48px" }}>
        <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 24 }} />
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: "0 0 14px" }}>
          The charts. The timers. The rewards. The naked days. The ABA protocols. The waiting.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: 0 }}>
          {c.letterOpening[1]}
        </p>
      </div>

      {/* Creed — giant */}
      <div style={{ padding: "48px 24px", background: "#FFF", color: "#0E1617" }}>
        {c.creed.map((line, i) => (
          <div key={i} style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 8px", letterSpacing: -0.8 }}>
            <span style={{ color: B.teal, marginRight: 8 }}>0{i+1}</span>
            {i === 0 ? <span style={B.gradientText}>{line}</span> : line}
          </div>
        ))}
      </div>

      {/* Reframe */}
      <div style={{ padding: "56px 24px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: B.green, fontWeight: 700, marginBottom: 16 }}>
          ▸ The Reframe
        </div>
        <h2 style={{ fontSize: 40, lineHeight: 1.05, fontWeight: 700, margin: "0 0 20px", letterSpacing: -1.2 }}>
          It was<br/>never about<br/>
          <span style={B.gradientText}>motivation.</span>
        </h2>
        <div style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
          {c.reframeBody.map((p, i) => (
            <p key={i} style={{ margin: "0 0 14px", fontWeight: i === 2 ? 700 : 400, color: i === 2 ? "#FFF" : "rgba(255,255,255,0.75)" }}>{p}</p>
          ))}
        </div>
      </div>

      {/* Steps — numbered huge */}
      <div style={{ padding: "56px 0 0" }}>
        <div style={{ padding: "0 24px", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: B.green, fontWeight: 700, marginBottom: 20 }}>
          ▸ A Different Path
        </div>
        {c.steps.map((s, i) => (
          <div key={i} style={{ padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontSize: 72, lineHeight: 0.85, fontWeight: 700, ...B.gradientText, letterSpacing: -3, marginBottom: 12 }}>
              {s.n}
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.5 }}>{s.title}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>{s.body}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div style={{ padding: "56px 24px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ fontSize: 90, lineHeight: 0.6, fontWeight: 700, ...B.gradientText, marginBottom: 8 }}>"</div>
        <p style={{ fontSize: 22, lineHeight: 1.35, fontWeight: 700, margin: "0 0 14px", letterSpacing: -0.5 }}>
          {c.quote.text}
        </p>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 1, textTransform: "uppercase", fontWeight: 700 }}>— {c.quote.by}</div>
      </div>

      {/* CTA */}
      <div style={{ padding: "56px 24px", background: "#FFF", color: "#0E1617" }}>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "#555", margin: "0 0 22px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "block", padding: "22px 24px",
          background: B.gradient, color: "#FFF",
          fontSize: 16, fontWeight: 700, letterSpacing: 0.3,
          textDecoration: "none", borderRadius: 0,
          textAlign: "center",
        }}>{c.ctaButton.toUpperCase()} →</a>
        <div style={{ marginTop: 14, fontSize: 11, color: "#999", textAlign: "center", letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 600 }}>{c.ctaFinePrint}</div>
      </div>

      <div style={{ padding: "40px 24px", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>
        <p style={{ margin: "0 0 4px" }}>{c.signoff.line1}</p>
        <p style={{ fontSize: 20, color: "#FFF", margin: "0 0 10px", fontWeight: 700 }}>{c.signoff.name}</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>{c.signoff.ps}</p>
      </div>

      <div style={{ padding: "20px 24px 28px", borderTop: "1px solid rgba(255,255,255,0.12)", textAlign: "center", fontSize: 10.5, color: "rgba(255,255,255,0.5)", letterSpacing: 0.3 }}>
        {c.footer.tagline}<br/>
        <a href="#" style={{ color: "rgba(255,255,255,0.5)" }}>Unsubscribe</a> · <a href="#" style={{ color: "rgba(255,255,255,0.5)" }}>Preferences</a>
      </div>
    </div>
  );
};

window.V7_Chat = V7_Chat;
window.V8_Scrapbook = V8_Scrapbook;
window.V9_Clinical = V9_Clinical;
window.V10_BoldMono = V10_BoldMono;
