/* SHARED PRIMITIVES — Used by ALL BKCO flows
   14 components + MW (420px width) + LOGO
   Reused across every flow-folder via ../welcome-flow/primitives.jsx
   DO NOT MODIFY unless you intend to change the brand-wide design language.
*/

const MW = 420;
const LOGO = "../assets/brightkidco-logo-v2.png";
const B = window.BRAND;
const F = window.FONT;

/* ── Image placeholder (dashed teal frame) ── */
const ImgFrame = ({ height = 200, label, sublabel, radius = 20, aspect }) => (
  <div style={{
    position: "relative", width: "100%", height: aspect ? undefined : height,
    aspectRatio: aspect, background: "#FFFFFF", border: `2px dashed ${B.teal}`,
    borderRadius: radius, display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", padding: "18px 22px",
    textAlign: "center", overflow: "hidden",
  }}>
    <svg width="14" height="14" style={{ position: "absolute", top: 10, left: 10 }} viewBox="0 0 14 14"><path d="M1,6 L1,1 L6,1" stroke={B.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
    <svg width="14" height="14" style={{ position: "absolute", top: 10, right: 10 }} viewBox="0 0 14 14"><path d="M8,1 L13,1 L13,6" stroke={B.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
    <svg width="14" height="14" style={{ position: "absolute", bottom: 10, left: 10 }} viewBox="0 0 14 14"><path d="M1,8 L1,13 L6,13" stroke={B.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
    <svg width="14" height="14" style={{ position: "absolute", bottom: 10, right: 10 }} viewBox="0 0 14 14"><path d="M8,13 L13,13 L13,8" stroke={B.teal} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
    <svg width="32" height="32" viewBox="0 0 32 32" style={{ marginBottom: 10, opacity: 0.5 }}>
      <rect x="3" y="6" width="26" height="20" rx="3" stroke={B.teal} strokeWidth="1.8" fill="none" />
      <circle cx="11" cy="13" r="2.5" fill={B.teal} opacity="0.5" />
      <path d="M5,23 L12,16 L18,21 L22,18 L27,23" stroke={B.teal} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    </svg>
    <div style={{ fontFamily: F.main, fontSize: 12.5, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: B.teal, marginBottom: 6 }}>{label}</div>
    <div style={{ fontFamily: F.main, fontSize: 12, lineHeight: 1.5, color: B.soft, maxWidth: 300 }}>{sublabel}</div>
  </div>
);

/* ── Framed image wrapper (black border + drop-shadow ink block) ── */
const FramedImage = ({ children, height, label, sublabel, shadow = 4 }) => (
  <div style={{ borderRadius: 20, overflow: "hidden", border: `2px solid ${B.ink}`, boxShadow: `${shadow}px ${shadow}px 0 ${B.ink}` }}>
    <ImgFrame height={height} radius={0} label={label} sublabel={sublabel} />
    {children}
  </div>
);

/* ── Gradient transition band ── */
const Band = ({ from, to, height = 40 }) => (
  <div style={{ height, background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)` }} />
);

/* ── Header with logo ── */
const Header = ({ bg }) => (
  <div style={{ background: bg, padding: "24px 20px 0", textAlign: "center" }}>
    <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
  </div>
);

/* ── Part badge (sticker) ── */
const PartBadge = ({ children }) => (
  <div style={{
    display: "inline-block", background: "#FFD866",
    padding: "7px 14px", borderRadius: 999, fontSize: 10.5,
    fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
    marginBottom: 16, border: `2px solid ${B.ink}`, transform: "rotate(-1.5deg)",
    whiteSpace: "nowrap", lineHeight: 1.4,
  }}>{children}</div>
);

/* ── Title block ── */
const TitleBlock = ({ badge, part1, part2, accent2 = true, subhead }) => (
  <div style={{ padding: "34px 22px 0", textAlign: "center" }}>
    <PartBadge>{badge}</PartBadge>
    <h1 style={{ fontSize: 40, lineHeight: 1, fontWeight: 700, margin: 0, letterSpacing: -0.8 }}>
      {part1}<br/>
      {accent2 ? <span style={{ ...B.gradientText, fontWeight: 700 }}>{part2}</span> : part2}
    </h1>
    {subhead && (
      <p style={{ fontSize: 17, color: B.soft, marginTop: 14, lineHeight: 1.4, fontWeight: 500 }}>{subhead}</p>
    )}
  </div>
);

/* ── Letter block (plain paragraph stack, warm bg) ── */
const Letter = ({ bg, paras, first }) => (
  <div style={{ background: bg, padding: "4px 24px 28px", fontSize: 15, lineHeight: 1.7, color: B.soft }}>
    {first && <p style={{ margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600 }}>{first}</p>}
    {paras.map((p, i) => (
      <p key={i} style={{ margin: i === paras.length - 1 ? 0 : "0 0 14px" }}>{p}</p>
    ))}
  </div>
);

/* ── Section eyebrow ── */
const Eyebrow = ({ children, color = B.tealDeep }) => (
  <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color, fontWeight: 700, marginBottom: 10 }}>{children}</div>
);

/* ── Section H2 with gradient accent word ── */
const H2 = ({ children, center, size = 28 }) => (
  <h2 style={{ fontSize: size, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: center ? "center" : "left" }}>{children}</h2>
);

/* ── CTA section (dark ink) ── */
const CTAClose = ({ intro, button, fine, bg = B.ink }) => (
  <div style={{ background: bg, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" }}>
    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" }}>{intro}</p>
    <a href="#" style={{
      display: "inline-block", padding: "17px 32px",
      background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
      textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
    }}>{button} →</a>
    {fine && <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>{fine}</div>}
  </div>
);

/* ── Signoff (personal · Lena)
   Warm, human close: avatar + handwritten signature + role + P.S.
   Used at end of every email in Flow 1 + Flow 2.
*/
const Signoff = ({ bg = B.ink }) => {
  const s = window.FLOW1_SHARED.signoff;
  return (
    <div style={{ background: bg, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5,
            position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              border: `1.5px solid ${B.ink}`,
            }}>
              {/* Portrait placeholder — swap src for real photo */}
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                {/* simple warm portrait silhouette */}
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill={B.ink} fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Founder · BrightKidCo · Mom of two
            </div>
          </div>
        </div>

        {/* Handwritten signature — Caveat font, gradient accent color */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              {s.line1}
            </div>
            <div style={{
              fontFamily: F.hand,
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#D8F57C",
              letterSpacing: -0.5,
              marginTop: 2,
            }}>
              Lena
            </div>
          </div>

          {/* tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Personal P.S. */}
        <div style={{
          fontSize: 13, lineHeight: 1.65, color: "#B8CACD",
          fontStyle: "italic",
        }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          {s.ps.replace(/^P\.S\.\s*/, "")}
        </div>
      </div>
    </div>
  );
};

/* ── Soft "Out" line (unsubscribe-adjacent, calming) ── */
const OutLine = ({ bg = "#FFFFFF" }) => (
  <div style={{ background: bg, padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: B.muted, fontStyle: "italic" }}>
    {window.FLOW1_SHARED.out}
  </div>
);

/* ── BREZ-inspired footer ── */
const Footer = () => {
  const f = window.FLOW1_SHARED.footer;
  return (
    <div style={{ background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" }}>
      <div style={{ fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500, color: B.ink, marginBottom: 30, letterSpacing: -0.2 }}>
        {f.tagline}
      </div>
      {f.links.map((l, i) => (
        <div key={i} style={{ fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 }}>
          <a href="#" style={{ color: B.ink, textDecoration: "none" }}>{l}</a>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>
      <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        No longer want to receive these emails? <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a>.<br/>
        <span style={{ fontSize: 11 }}>{f.address}</span>
      </div>
      <div style={{ margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
    </div>
  );
};

/* ── Email shell (wraps each email) ── */
const EmailShell = ({ children, preheader, bg }) => (
  <div style={{ width: MW, background: bg, fontFamily: F.main, color: B.ink }}>
    {/* preheader (hidden in email clients, visible in preview) */}
    <div style={{ padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" }}>
      Preheader: {preheader}
    </div>
    {children}
  </div>
);

Object.assign(window, {
  MW, LOGO, B, F,
  ImgFrame, FramedImage, Band,
  Header, PartBadge, TitleBlock,
  Letter, Eyebrow, H2,
  CTAClose, Signoff, OutLine, Footer, EmailShell,
});
