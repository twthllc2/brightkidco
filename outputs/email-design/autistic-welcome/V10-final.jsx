/* V10 Standalone · Story Book (refined)
   - Image placeholder frames with descriptions
   - Gradient transitions between color sections
   - BrightKidCo footer (BREZ-inspired clean layout)
*/

const MW10 = 420;
const LOGO10 = "../assets/brightkidco-logo-v2.png";
const Bv = window.BRAND;
const Fv = window.FONT;

/* ─ Image placeholder: white frame with dashed border + description ─ */
const ImgFrame = ({ height = 200, label, sublabel, radius = 20, aspect }) => {
  const h = aspect ? undefined : height;
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: h,
      aspectRatio: aspect,
      background: "#FFFFFF",
      border: `2px dashed ${Bv.teal}`,
      borderRadius: radius,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "18px 22px",
      textAlign: "center",
      overflow: "hidden",
    }}>
      {/* corner marks */}
      <svg width="14" height="14" style={{ position: "absolute", top: 10, left: 10 }} viewBox="0 0 14 14"><path d="M1,6 L1,1 L6,1" stroke={Bv.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
      <svg width="14" height="14" style={{ position: "absolute", top: 10, right: 10 }} viewBox="0 0 14 14"><path d="M8,1 L13,1 L13,6" stroke={Bv.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
      <svg width="14" height="14" style={{ position: "absolute", bottom: 10, left: 10 }} viewBox="0 0 14 14"><path d="M1,8 L1,13 L6,13" stroke={Bv.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
      <svg width="14" height="14" style={{ position: "absolute", bottom: 10, right: 10 }} viewBox="0 0 14 14"><path d="M8,13 L13,13 L13,8" stroke={Bv.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
      {/* picture icon */}
      <svg width="32" height="32" viewBox="0 0 32 32" style={{ marginBottom: 10, opacity: 0.5 }}>
        <rect x="3" y="6" width="26" height="20" rx="3" stroke={Bv.teal} strokeWidth="1.8" fill="none" />
        <circle cx="11" cy="13" r="2.5" fill={Bv.teal} opacity="0.5" />
        <path d="M5,23 L12,16 L18,21 L22,18 L27,23" stroke={Bv.teal} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      </svg>
      <div style={{ fontFamily: Fv.main, fontSize: 12.5, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: Bv.teal, marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontFamily: Fv.main, fontSize: 12, lineHeight: 1.5, color: Bv.soft, maxWidth: 300 }}>
        {sublabel}
      </div>
    </div>
  );
};

/* Gradient transition helper — smooth fade between two bg colors */
const GradientBand = ({ from, to, height = 40 }) => (
  <div style={{ height, background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)` }} />
);

const V10_Final = () => {
  const c = window.E1_CONTENT;

  // Color chapters used for transitions
  const BG_HERO = "#FFFBF0";
  const BG_LETTER = "#FFF6E2";
  const BG_CREED = "#FFFBF0";
  const BG_REFRAME = "#EAF6F2";
  const BG_PATH = "#FFFBF0";
  const BG_QUOTE = "#FFF6E2";
  const BG_PRODUCT = "#F0EDF8";
  const BG_CTA = Bv.ink;

  return (
    <div style={{ width: MW10, background: BG_HERO, fontFamily: Fv.main, color: Bv.ink }}>
      {/* ═══════════ HEADER ═══════════ */}
      <div style={{ padding: "24px 20px 0", textAlign: "center" }}>
        <img src={LOGO10} alt="BrightKidCo" style={{ height: 34 }} />
      </div>

      {/* ═══════════ HERO IMAGE PLACEHOLDER ═══════════ */}
      <div style={{ margin: "24px 14px 0", position: "relative" }}>
        <div style={{ borderRadius: 24, overflow: "hidden", border: `3px solid ${Bv.ink}`, boxShadow: `0 10px 0 -2px ${Bv.teal}, 0 14px 0 -2px ${Bv.ink}` }}>
          <ImgFrame
            height={240}
            radius={0}
            label="HERO IMAGE"
            sublabel="Lifestyle shot · parent & autistic child in calm moment together — morning light, soft tones. Ratio ~5:3"
          />
        </div>
      </div>

      {/* ═══════════ TITLE ═══════════ */}
      <div style={{ padding: "34px 22px 0", textAlign: "center" }}>
        <div style={{
          display: "inline-block", background: "#FFD866",
          padding: "7px 14px", borderRadius: 999, fontSize: 10.5,
          fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
          marginBottom: 16, border: `2px solid ${Bv.ink}`, transform: "rotate(-1.5deg)",
          whiteSpace: "nowrap", lineHeight: 1.4,
        }}>
          ✿ Part one of six
        </div>
        <h1 style={{ fontSize: 40, lineHeight: 1, fontWeight: 700, margin: 0, letterSpacing: -0.8 }}>
          You haven't done<br/>
          anything <span style={{ ...Bv.gradientText, fontWeight: 700 }}>wrong.</span>
        </h1>
      </div>

      {/* ─ Transition hero → letter ─ */}
      <GradientBand from={BG_HERO} to={BG_LETTER} height={40} />

      {/* ═══════════ LETTER OPENING ═══════════ */}
      <div style={{ background: BG_LETTER, padding: "4px 24px 28px", fontSize: 15, lineHeight: 1.7, color: Bv.soft }}>
        <p style={{ margin: "0 0 14px", fontSize: 17, color: Bv.ink, fontWeight: 600 }}>Hi, and welcome.</p>
        <p style={{ margin: "0 0 14px" }}>{c.letterOpening[1]}</p>
        <p style={{ margin: 0 }}>{c.letterOpening[2]}</p>
      </div>

      {/* ─ Transition letter → creed ─ */}
      <GradientBand from={BG_LETTER} to={BG_CREED} height={32} />

      {/* ═══════════ CREED — tilted stickers ═══════════ */}
      <div style={{ background: BG_CREED, padding: "8px 16px 36px" }}>
        {c.creed.map((line, i) => {
          const cols = [Bv.teal, Bv.green, "#FFB5A0"];
          const rot = [-1, 0.8, -0.5];
          return (
            <div key={i} style={{
              background: cols[i], color: "#FFF", padding: "16px 20px",
              borderRadius: 16, transform: `rotate(${rot[i]}deg)`, marginBottom: 12,
              boxShadow: `3px 3px 0 ${Bv.ink}`, border: `2px solid ${Bv.ink}`,
              fontSize: 19, fontWeight: 700, lineHeight: 1.25,
            }}>{line}</div>
          );
        })}
      </div>

      {/* ─ Transition creed → section image → reframe ─ */}
      <GradientBand from={BG_CREED} to={BG_REFRAME} height={40} />

      {/* ═══════════ SECTION IMAGE (between creed and reframe) ═══════════ */}
      <div style={{ background: BG_REFRAME, padding: "0 14px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", border: `2px solid ${Bv.ink}`, boxShadow: `4px 4px 0 ${Bv.ink}` }}>
          <ImgFrame
            height={200}
            radius={0}
            label="SECTION IMAGE"
            sublabel="Close-up / detail shot · child hands holding pants, or cozy bedroom floor scene. Warm & quiet. Ratio ~16:9"
          />
        </div>
      </div>

      {/* ═══════════ REFRAME ═══════════ */}
      <div style={{ background: BG_REFRAME, padding: "28px 22px 8px" }}>
        <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: Bv.tealDeep, fontWeight: 700, marginBottom: 10 }}>
          The part nobody explained
        </div>
        <h2 style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4 }}>
          It was never about <span style={{ ...Bv.gradientText, fontWeight: 700 }}>motivation</span>.
        </h2>
        {c.reframeBody.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: i === 2 ? Bv.ink : Bv.soft, margin: "0 0 12px", fontWeight: i === 2 ? 700 : 400 }}>{p}</p>
        ))}
      </div>

      {/* ─ Transition reframe → path ─ */}
      <GradientBand from={BG_REFRAME} to={BG_PATH} height={40} />

      {/* ═══════════ A DIFFERENT PATH ═══════════ */}
      <div style={{ background: BG_PATH, padding: "16px 22px 0" }}>
        <h2 style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px", textAlign: "center" }}>
          A <span style={{ ...Bv.gradientText, fontWeight: 700 }}>different path</span> →
        </h2>
      </div>

      {/* ═══════════ STEPS — each with image placeholder ═══════════ */}
      <div style={{ background: BG_PATH, padding: "0 14px 0" }}>
        {c.steps.map((s, i) => {
          const bgs = ["#E6F7E9", "#FFF2D8", "#EAF4F5"];
          const accents = [Bv.green, "#E8A23D", Bv.teal];
          const imgLabels = [
            { l: "STEP 01 IMAGE", s: "Child with calm, focused body-awareness moment — e.g. sitting on toilet, relaxed, no pressure" },
            { l: "STEP 02 IMAGE", s: "Product detail · soft fabric close-up, tag-free seam, kid's hand feeling the material" },
            { l: "STEP 03 IMAGE", s: "Happy family moment · parent & child laughing, no stress, dry-day celebration" },
          ];
          return (
            <div key={i} style={{ marginBottom: 22, background: "#FFF", borderRadius: 18, overflow: "hidden", border: `2px solid ${Bv.ink}`, boxShadow: `3px 3px 0 ${Bv.ink}` }}>
              <div style={{ background: bgs[i] }}>
                <ImgFrame height={170} radius={0} label={imgLabels[i].l} sublabel={imgLabels[i].s} />
              </div>
              <div style={{ padding: "18px 20px 22px", borderTop: `2px solid ${Bv.ink}`, background: "#FFFDF6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: accents[i], color: "#FFF",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, border: `2px solid ${Bv.ink}`,
                  }}>{s.n}</div>
                  <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700, lineHeight: 1.3 }}>{s.title}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: Bv.soft }}>{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─ Transition path → quote ─ */}
      <GradientBand from={BG_PATH} to={BG_QUOTE} height={36} />

      {/* ═══════════ PARENT QUOTE ═══════════ */}
      <div style={{ background: BG_QUOTE, padding: "16px 14px 36px" }}>
        <div style={{ padding: "26px 22px", background: "#FFD866", borderRadius: 20, border: `2px solid ${Bv.ink}`, boxShadow: `4px 4px 0 ${Bv.ink}`, textAlign: "center", transform: "rotate(-0.5deg)" }}>
          <div style={{ fontSize: 36, lineHeight: 0.8, color: Bv.ink, fontWeight: 700, marginBottom: 6 }}>"</div>
          <p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 500, margin: "0 0 12px", fontStyle: "italic", color: Bv.ink }}>
            {c.quote.text}
          </p>
          <div style={{ fontSize: 11, color: Bv.ink, fontWeight: 700 }}>— {c.quote.by}</div>
        </div>
      </div>

      {/* ─ Transition quote → product ─ */}
      <GradientBand from={BG_QUOTE} to={BG_PRODUCT} height={36} />

      {/* ═══════════ PRODUCT SCENE — KIDS WEARING PANTS ═══════════ */}
      <div style={{ background: BG_PRODUCT, padding: "12px 14px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 18, padding: "0 16px" }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px", lineHeight: 1.2 }}>
            Made for <span style={{ ...Bv.gradientText, fontWeight: 700 }}>real days.</span>
          </h3>
          <p style={{ fontSize: 13.5, color: Bv.soft, margin: 0, lineHeight: 1.55 }}>
            Soft, sensory-safe, stays on all day.
          </p>
        </div>
        <div style={{ borderRadius: 20, overflow: "hidden", border: `2px solid ${Bv.ink}`, boxShadow: `4px 4px 0 ${Bv.ink}` }}>
          <ImgFrame
            height={320}
            radius={0}
            label="PRODUCT HERO · KIDS WEARING"
            sublabel={"Main product shot · 2-3 neurodivergent kids (different ages 3-7) happily wearing BrightKidCo pants. Movement, play, natural. Ratio ~4:5 (portrait)"}
          />
        </div>
      </div>

      {/* small secondary product row */}
      <div style={{ background: BG_PRODUCT, padding: "8px 14px 4px", display: "flex", gap: 10 }}>
        <div style={{ flex: 1, borderRadius: 14, overflow: "hidden", border: `2px solid ${Bv.ink}`, boxShadow: `3px 3px 0 ${Bv.ink}` }}>
          <ImgFrame height={130} radius={0} label="PRODUCT A" sublabel="Flat-lay · 3 colours" />
        </div>
        <div style={{ flex: 1, borderRadius: 14, overflow: "hidden", border: `2px solid ${Bv.ink}`, boxShadow: `3px 3px 0 ${Bv.ink}` }}>
          <ImgFrame height={130} radius={0} label="DETAIL SHOT" sublabel="Soft seam · no tag" />
        </div>
      </div>

      {/* ─ Transition product → CTA (dark) ─ */}
      <GradientBand from={BG_PRODUCT} to={BG_CTA} height={50} />

      {/* ═══════════ CTA ═══════════ */}
      <div style={{ background: BG_CTA, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" }}>{c.ctaIntro}</p>
        <a href="#" style={{
          display: "inline-block", padding: "17px 32px",
          background: "#D8F57C", color: Bv.ink,
          fontSize: 15.5, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          letterSpacing: 0.3,
        }}>{c.ctaButton} →</a>
        <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>{c.ctaFinePrint}</div>
      </div>

      {/* ═══════════ SHARED SIGNOFF (personal · Lena) ═══════════ */}
      <window.Signoff bg={BG_CTA} />

      {/* ═══════════ SHARED OUT-LINE + FOOTER ═══════════ */}
      <window.OutLine />
      <window.Footer />
    </div>
  );
};

window.V10_Final = V10_Final;
