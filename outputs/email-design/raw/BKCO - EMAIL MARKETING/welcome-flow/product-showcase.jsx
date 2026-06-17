/* SHARED PRODUCT SHOWCASE — Used by ALL BKCO flows
   3 variants for different email contexts:
   - ProductShowcaseFull   → hero product moment (E4, E6)
   - ProductShowcaseMedium → inline context (E5)
   - ProductShowcaseSoft   → gentle mention (E2, E3)
   Reused across every flow-folder via ../welcome-flow/product-showcase.jsx
   DO NOT MODIFY unless you intend to change the brand-wide product presentation.
*/

/* ═════════════════════════════════════════════════════
   FULL · Hero product block
   Lifestyle hero + price + 3 feature pills + sub-grid + CTA
   Used in: Email 4, Email 6
   ═════════════════════════════════════════════════════ */
const ProductShowcaseFull = ({ eyebrow, title, titleAccent, sub, priceFrom = "€34", priceNote = "Starter pair · 10% off first order", features, ctaButton, guaranteeBadge = true, ctaBg, ctaColor, ctaRadius, ageRange, microTrustText }) => {
  const defaultFeatures = features || [
    { icon: "◉", label: "Body-Signal Layer™" },
    { icon: "✓", label: "60-day guarantee" },
    { icon: "♡", label: "Sensory-friendly" },
  ];

  return (
    <div style={{ padding: "28px 14px 20px" }}>
      {/* Intro */}
      <div style={{ textAlign: "center", marginBottom: 18, padding: "0 16px" }}>
        <Eyebrow>{eyebrow || "The product"}</Eyebrow>
        <H2 size={28} center>
          {title}{" "}
          <span style={{ ...B.gradientText, fontWeight: 700 }}>{titleAccent}</span>
        </H2>
        {sub && (
          <p style={{ fontSize: 14, color: B.soft, lineHeight: 1.55, margin: "8px 0 0" }}>{sub}</p>
        )}
      </div>

      {/* Main product card */}
      <div style={{
        background: "#FFFFFF",
        border: `2px solid ${B.ink}`,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: `6px 6px 0 ${B.ink}`,
      }}>
        {/* Hero shot */}
        <div style={{ position: "relative", background: "#FFFDF6" }}>
          <ImgFrame
            height={300}
            radius={0}
            label="PRODUCT · HERO SHOT"
            sublabel="Lifestyle on-body · toddler wearing BrightKidCo pants · natural pose, soft window light. Ratio ~4:5"
          />
          {/* floating guarantee badge */}
          {guaranteeBadge && (
            <div style={{
              position: "absolute", top: 14, right: 14,
              background: "#FFD866", border: `2px solid ${B.ink}`,
              borderRadius: 999, padding: "6px 12px",
              fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
              transform: "rotate(4deg)", boxShadow: `2px 2px 0 ${B.ink}`,
              display: "flex", alignItems: "center", gap: 5,
            }}>
              <span style={{ fontSize: 13 }}>✿</span>
              <span>60 days calm</span>
            </div>
          )}
        </div>

        {/* Product info block */}
        <div style={{ padding: "22px 22px 22px", borderTop: `2px solid ${B.ink}` }}>
          {/* name + price row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 4 }}>
                BrightKidCo
              </div>
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, lineHeight: 1.2, color: B.ink }}>
                Body-Signal Learning<br/>Layer™ Pants
              </h3>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: B.muted, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>From</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: B.ink, lineHeight: 1, letterSpacing: -0.5 }}>
                {priceFrom}
              </div>
            </div>
          </div>

          {/* price note */}
          <div style={{ fontSize: 12.5, color: B.soft, marginBottom: 18, fontStyle: "italic" }}>
            {priceNote}
          </div>

          {/* feature pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {defaultFeatures.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 12px",
                background: "#FAF7F0", border: `1.5px solid ${B.ink}`,
                borderRadius: 999, fontSize: 11.5, fontWeight: 600,
                color: B.ink,
              }}>
                <span style={{ color: B.teal, fontWeight: 700 }}>{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a href="#" style={{
            display: "block",
            padding: "16px 24px",
            background: ctaBg || B.ink,
            color: ctaColor || "#D8F57C",
            fontSize: 15, fontWeight: 700,
            textDecoration: "none", borderRadius: ctaRadius !== undefined ? ctaRadius : 999,
            textAlign: "center",
            letterSpacing: 0.3,
          }}>
            {ctaButton || "Shop the pants"} →
          </a>

          {/* micro trust line */}
          <div style={{ marginTop: 12, textAlign: "center", fontSize: 11, color: B.muted, letterSpacing: 0.3 }}>
            {microTrustText || "Free shipping on orders over €50 · 60-day guarantee · Real returns"}
          </div>
        </div>
      </div>

      {/* 2-up sub row */}
      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <div style={{
          flex: 1, background: "#FFFFFF",
          border: `2px solid ${B.ink}`, borderRadius: 14,
          overflow: "hidden", boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          <div style={{ background: `${B.teal}15` }}>
            <ImgFrame height={110} radius={0} label="COLOURWAY 01" sublabel="Sage · soft green" />
          </div>
          <div style={{ padding: "10px 12px", fontSize: 11.5, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: `2px solid ${B.ink}` }}>
            3 colourways
          </div>
        </div>
        <div style={{
          flex: 1, background: "#FFFFFF",
          border: `2px solid ${B.ink}`, borderRadius: 14,
          overflow: "hidden", boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          <div style={{ background: `${B.green}15` }}>
            <ImgFrame height={110} radius={0} label="SIZE RANGE" sublabel="2T · 3T · 4T · 5T · 6T" />
          </div>
          <div style={{ padding: "10px 12px", fontSize: 11.5, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: `2px solid ${B.ink}` }}>
            {ageRange || "Ages 2–7"}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═════════════════════════════════════════════════════
   MEDIUM · Inline product card with Sarah-style context
   Side-by-side image + info, clean
   Used in: Email 5
   ═════════════════════════════════════════════════════ */
const ProductShowcaseMedium = ({ eyebrow, title, priceFrom = "€34", ctaButton }) => (
  <div style={{ padding: "12px 14px 20px" }}>
    <div style={{
      background: "#FFFFFF",
      border: `2px solid ${B.ink}`,
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: `4px 4px 0 ${B.ink}`,
    }}>
      {/* Two-column: image + content */}
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <div style={{ width: 140, flexShrink: 0, borderRight: `2px solid ${B.ink}`, background: "#FFFDF6" }}>
          <ImgFrame
            height={220}
            radius={0}
            label="PRODUCT"
            sublabel=""
          />
        </div>
        <div style={{ padding: "18px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 6 }}>
              {eyebrow || "The method Sarah used"}
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 700, lineHeight: 1.2, color: B.ink }}>
              {title || "Body-Signal Learning Layer™"}
            </h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: B.ink, letterSpacing: -0.3 }}>{priceFrom}</span>
              <span style={{ fontSize: 11, color: B.soft }}>starter pair</span>
            </div>
            <div style={{ fontSize: 11.5, color: B.soft, lineHeight: 1.5 }}>
              60-day calm-progress guarantee. Return anytime, any reason.
            </div>
          </div>
          <a href="#" style={{
            display: "inline-block",
            padding: "14px 18px",
            background: B.ink,
            color: "#D8F57C",
            fontSize: 13, fontWeight: 700,
            textDecoration: "none", borderRadius: 999,
            textAlign: "center", marginTop: 14,
            letterSpacing: 0.2,
          }}>
            {ctaButton || "See the pants"} →
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* ═════════════════════════════════════════════════════
   SOFT · End-of-email gentle product mention
   Tiny, text-forward, not pushy
   Used in: Email 2, Email 3
   ═════════════════════════════════════════════════════ */
const ProductShowcaseSoft = ({ eyebrow, line, ctaText = "See the different path" }) => (
  <div style={{ padding: "8px 22px 20px" }}>
    <div style={{
      background: "#FFFDF6",
      border: `2px dashed ${B.teal}`,
      borderRadius: 16,
      padding: "18px 18px",
      display: "flex", gap: 14, alignItems: "center",
    }}>
      {/* tiny product thumb */}
      <div style={{
        width: 60, height: 60, flexShrink: 0,
        background: "#FFFFFF", borderRadius: 12,
        border: `1.5px solid ${B.ink}`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="28" height="28" viewBox="0 0 32 32">
          <rect x="6" y="8" width="20" height="16" rx="4" stroke={B.teal} strokeWidth="1.8" fill="none" />
          <rect x="6" y="8" width="20" height="5" rx="2" fill={B.teal} opacity="0.2" />
          <circle cx="10" cy="11" r="0.8" fill={B.teal} />
          <circle cx="22" cy="11" r="0.8" fill={B.teal} />
        </svg>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 10, letterSpacing: 1.3, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 3 }}>
          {eyebrow || "Designed around this"}
        </div>
        <div style={{ fontSize: 13, color: B.ink, lineHeight: 1.45, marginBottom: 8, fontWeight: 500 }}>
          {line}
        </div>
        <a href="#" style={{
          display: "inline-block",
          fontSize: 12.5, fontWeight: 700,
          color: B.tealDeep, textDecoration: "none",
          borderBottom: `1.5px solid ${B.tealDeep}`,
          paddingBottom: 2,
        }}>
          {ctaText} →
        </a>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  ProductShowcaseFull,
  ProductShowcaseMedium,
  ProductShowcaseSoft,
});
