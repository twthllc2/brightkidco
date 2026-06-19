/* PP-Direct Upsell E1 -- Cross-Level
   Built from: upsell-09-e1.md
   Pattern: Giuliano reference (cart-e1.jsx primitives)
   Images: 2 product photos (laundry bag, washing machine)
*/

/* 1. BRAND TOKENS */
window.BRAND = {
  teal: "#2BAEB4",
  tealDeep: "#1E8A8F",
  green: "#5DD07A",
  greenDeep: "#3BB35E",
  ink: "#1F2D2F",
  soft: "#4A6568",
  muted: "#8A9B9D",
  cream: "#FBF7F1",
  paper: "#FFFFFF",
  emerald: "#039902",
  warmBg: "#FAF9F7",
  warmBeige: "#E8E0D4",
  headlineColor: "#1A1A1A",
  bodyColor: "#4A4A4A",
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent"
  }
};

window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif"
};

/* 2. SHARED DATA */
window.FLOW1_SHARED = {
  signoff: {
    line1: "Thanks for being here.",
    name: "Lena Bauer",
    ps: "If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything."
  },
  out: "Reply to this email. Lena reads every response.",
  footer: {
    tagline: "Calm progress, one day at a time.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo Ltd / Berlin, Germany / hello@brightkidco.com"
  }
};

/* 3. PRIMITIVES */
var MW = 420;
var B = window.BRAND;
var F = window.FONT;

var ImgFrame = function(props) {
  var height = props.height || 200;
  var label = props.label;
  var sublabel = props.sublabel;
  var radius = props.radius || 20;
  return React.createElement("div", {
    style: {
      position: "relative", width: "100%", height: height,
      background: "#FFFFFF", border: "2px dashed " + B.teal,
      borderRadius: radius, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: "18px 22px",
      textAlign: "center", overflow: "hidden"
    }
  },
    React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: B.teal, marginBottom: 6 } }, label),
    React.createElement("div", { style: { fontSize: 12, lineHeight: 1.5, color: B.soft, maxWidth: 300 } }, sublabel)
  );
};

var FramedImage = function(props) {
  return React.createElement("div", {
    style: { borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink }
  },
    React.createElement(ImgFrame, { height: props.height || 200, radius: 0, label: props.label, sublabel: props.sublabel }),
    props.children
  );
};

var Band = function(props) {
  var height = props.height || 40;
  return React.createElement("div", {
    style: { height: height, background: "linear-gradient(180deg, " + props.from + " 0%, " + props.to + " 100%)" }
  });
};

var Header = function(props) {
  return React.createElement("div", {
    style: { background: props.bg, padding: "24px 20px 0", textAlign: "center" }
  },
    React.createElement("img", { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#1F2D2F">BrightKidCo</text></svg>'), alt: "BrightKidCo", style: { height: 34 } })
  );
};

var PartBadge = function(props) {
  return React.createElement("div", {
    style: {
      display: "inline-block", background: "#FFD866",
      padding: "7px 14px", borderRadius: 999, fontSize: 10.5,
      fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
      marginBottom: 16, border: "2px solid " + B.ink, transform: "rotate(-1.5deg)",
      whiteSpace: "nowrap", lineHeight: 1.4
    }
  }, props.children);
};

var TitleBlock = function(props) {
  return React.createElement("div", { style: { padding: "34px 22px 0", textAlign: "center" } },
    React.createElement(PartBadge, null, props.badge),
    React.createElement(
      "h1",
      { style: { fontSize: 36, lineHeight: 1, fontWeight: 700, margin: 0, letterSpacing: -0.8, fontFamily: F.display } },
      props.part1,
      React.createElement("br"),
      props.accent2 !== false
        ? React.createElement("span", { style: { background: "linear-gradient(135deg, #039902 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, props.part2)
        : props.part2
    ),
    props.subhead ? React.createElement("p", { style: { fontSize: 17, color: B.soft, marginTop: 14, lineHeight: 1.4, fontWeight: 500 } }, props.subhead) : null
  );
};

var Letter = function(props) {
  var paras = props.paras || [];
  return React.createElement("div", { style: { background: props.bg, padding: "4px 24px 28px", fontSize: 15, lineHeight: 1.7, color: B.bodyColor } },
    props.first ? React.createElement("p", { style: { margin: "0 0 14px", fontSize: 17, color: B.headlineColor, fontWeight: 600 } }, props.first) : null,
    paras.map(function(p, i) {
      return React.createElement("p", { key: i, style: { margin: i === paras.length - 1 ? 0 : "0 0 14px" } }, p);
    })
  );
};

var Eyebrow = function(props) {
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.emerald, fontWeight: 700, marginBottom: 10 } }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", { style: { fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left", fontFamily: F.display } }, props.children);
};

var CTAClose = function(props) {
  var bg = props.bg || B.ink;
  return React.createElement("div", { style: { background: bg, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" } },
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" } }, props.intro),
    React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: B.emerald, color: "#FFF", fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, props.button + " \u2192"),
    props.fine ? React.createElement("div", { style: { marginTop: 16, fontSize: 11.5, color: "#8A9B9D" } }, props.fine) : null
  );
};

var Signoff = function(props) {
  var s = window.FLOW1_SHARED.signoff;
  return React.createElement("div", { style: { background: props.bg || B.ink, padding: "0 22px 36px" } },
    React.createElement("div", { style: { position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40", borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden" } },
      React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.gradient, opacity: 0.9 } }),
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 } },
        React.createElement("div", { style: { width: 58, height: 58, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg, #FFD866 0%, " + B.teal + " 100%)", padding: 2.5 } },
          React.createElement("div", { style: { width: "100%", height: "100%", borderRadius: "50%", background: "#FFFDF6", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1.5px solid " + B.ink } },
            React.createElement("svg", { width: 58, height: 58, viewBox: "0 0 58 58" },
              React.createElement("rect", { width: 58, height: 58, fill: "#F5E8D0" }),
              React.createElement("circle", { cx: 29, cy: 22, r: 10, fill: "#D4A574" }),
              React.createElement("path", { d: "M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z", fill: "#C98C6B" })
            )
          )
        ),
        React.createElement("div", { style: { flex: 1, minWidth: 0 } },
          React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 } }, "A note from"),
          React.createElement("div", { style: { fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 } }, s.name),
          React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Customer Support / Mom of two autistic sons")
        )
      ),
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547", marginBottom: 16 } },
        React.createElement("div", { style: { flex: 1 } },
          React.createElement("div", { style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 } }, s.line1),
          React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2 } }, "Lena")
        ),
        React.createElement("svg", { width: 54, height: 40, viewBox: "0 0 54 40", style: { flexShrink: 0, opacity: 0.55 } },
          React.createElement("path", { d: "M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round" }),
          React.createElement("path", { d: "M48,12 L52,10 L50,14", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
        )
      ),
      React.createElement("div", { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" } },
        React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
        s.ps.replace(/^P\.S\.\s*/, "")
      )
    )
  );
};

var OutLine = function(props) {
  return React.createElement("div", { style: { background: props.bg || "#FFFFFF", padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: B.muted, fontStyle: "italic" } },
    window.FLOW1_SHARED.out
  );
};

var Footer = function() {
  var f = window.FLOW1_SHARED.footer;
  return React.createElement("div", { style: { background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" } },
    React.createElement("div", { style: { fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500, color: B.ink, marginBottom: 30, letterSpacing: -0.2 } }, f.tagline),
    f.links.map(function(l, i) {
      return React.createElement("div", { key: i, style: { fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 } },
        React.createElement("a", { href: "#", style: { color: B.ink, textDecoration: "none" } }, l)
      );
    }),
    React.createElement("div", { style: { fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 } },
      "No longer want to receive these emails? ",
      React.createElement("a", { href: "#", style: { color: B.ink, textDecoration: "underline" } }, "Unsubscribe"),
      ". ",
      React.createElement("br"),
      React.createElement("span", { style: { fontSize: 11 } }, f.address)
    ),
    React.createElement("div", { style: { margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 } })
  );
};

var EmailShell = function(props) {
  return React.createElement("div", { style: { width: MW, background: props.bg, fontFamily: F.main, color: B.ink } },
    React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" } }, props.preheader),
    props.children
  );
};

/* 4. WASH BAG SVG ILLUSTRATION */
var WashBagSVG = function() {
  return React.createElement("svg", { width: "100%", height: "auto", viewBox: "0 0 240 280", style: { display: "block", maxWidth: 240 } },
    /* Bag body */
    React.createElement("rect", { x: 30, y: 40, width: 180, height: 200, rx: 16, fill: "#E8E0D4", stroke: "#D4C9B8", strokeWidth: 1 }),
    /* Mesh dots pattern */
    React.createElement("g", { opacity: 0.15 },
      React.createElement("circle", { cx: 50, cy: 70, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 70, cy: 70, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 90, cy: 70, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 110, cy: 70, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 130, cy: 70, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 150, cy: 70, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 170, cy: 70, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 60, cy: 90, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 80, cy: 90, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 100, cy: 90, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 120, cy: 90, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 140, cy: 90, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 160, cy: 90, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 50, cy: 110, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 70, cy: 110, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 90, cy: 110, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 110, cy: 110, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 130, cy: 110, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 150, cy: 110, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 170, cy: 110, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 60, cy: 130, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 80, cy: 130, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 100, cy: 130, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 120, cy: 130, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 140, cy: 130, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 160, cy: 130, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 50, cy: 150, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 70, cy: 150, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 90, cy: 150, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 110, cy: 150, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 130, cy: 150, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 150, cy: 150, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 170, cy: 150, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 60, cy: 170, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 80, cy: 170, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 100, cy: 170, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 120, cy: 170, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 140, cy: 170, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 160, cy: 170, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 50, cy: 190, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 70, cy: 190, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 90, cy: 190, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 110, cy: 190, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 130, cy: 190, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 150, cy: 190, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 170, cy: 190, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 60, cy: 210, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 80, cy: 210, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 100, cy: 210, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 120, cy: 210, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 140, cy: 210, r: 2, fill: "#C4BBA8" }),
      React.createElement("circle", { cx: 160, cy: 210, r: 2, fill: "#C4BBA8" })
    ),
    /* Zipper edge - emerald accent */
    React.createElement("line", { x1: 30, y1: 40, x2: 210, y2: 40, stroke: "#039902", strokeWidth: 1, opacity: 0.6 }),
    /* Zipper pull - subtle spiral */
    React.createElement("circle", { cx: 120, cy: 36, r: 6, fill: "none", stroke: "#C4BBA8", strokeWidth: 0.5 }),
    React.createElement("path", { d: "M120,33 Q123,36 120,39 Q117,36 120,33", fill: "none", stroke: "#C4BBA8", strokeWidth: 0.5 }),
    /* Underwear silhouette inside */
    React.createElement("g", { opacity: 0.2 },
      React.createElement("path", { d: "M80,140 Q80,120 100,115 Q120,110 140,115 Q160,120 160,140 L155,200 Q140,210 120,210 Q100,210 85,200 Z", fill: "#C4BBA8", stroke: "none" })
    ),
    /* Label */
    React.createElement("text", { x: 120, y: 255, textAnchor: "middle", fontFamily: "Questrial, sans-serif", fontSize: 11, fill: "#8A9B9D", fontWeight: 700, letterSpacing: 1.5 }, "WASH BAG")
  );
};

/* 5. EMAIL DATA */
var emailData = {
  preheader: "One small add-on that keeps the signal layer working wash after wash",
  heroBadge: "Keep it working",
  h1a: "How to make your",
  h1b: "underwear last longer.",
  hook: "Your order arrived a few days ago. You've got the Body-Signal underwear in hand, and your child is starting to explore the sensation. Whether they're already showing awareness, a pause, a look, a pull at the pants, or still in the familiarization phase, the underwear is doing its work every time they wear it. The question now is how to keep it working well, wash after wash.",
  mechanism: "The Body-Signal Learning Layer is the key mechanism. That's the cotton inner layer that creates the gentle sustained \"uh-oh\" sensation after every accident. This is what bridges the interoception gap, giving your child's brain the feedback it's been missing. But here's what most parents don't realize: standard washing machine cycles, with their aggressive agitation and high heat, can break down the signal-preserving properties of that inner layer over time. The cotton fibers that make the learning mechanism work need gentler care. Without it, the very layer that's doing the neurological teaching starts to lose effectiveness, and the learning window narrows with every wash that's too harsh.",
  productIntro: "The BrightKidCo Wash Bag (\u20AC14.99) was designed for exactly this reason. It's a dedicated mesh laundry bag that protects the Body-Signal Learning Layer during machine washing. You toss the underwear inside, zip it up, and run your regular cycle. The mesh barriers reduce abrasion, prevent the cotton from over-agitating, and maintain the structural integrity that makes the signal mechanism work. One Wash Bag covers up to 6 pairs, the same capacity as the 3+3 Bundle rotation. It's a one-time purchase that extends the functional life of every pair you own. Same commitment to sensory-friendly materials, soft, no tags, no rough edges.",
  guarantee: "60 days to try it alongside your current routine. If the Wash Bag doesn't make a difference in how the underwear performs for your child, full refund.",
  testimonial: "I didn't think a laundry bag mattered until I saw the difference at week four. The underwear held up better, and I wasn't replacing pairs as fast.",
  ctaIntro: "Add the Wash Bag to your routine.",
  ctaButton: "Add the Wash Bag to your routine",
  ctaFinePrint: "60-day guarantee / No questions / Real returns",
  nextTeaser: "One thing every parent wishes they'd bought sooner."
};

/* 6. UPSELL-09-E1 COMPONENT */
var UpsellE1 = function() {
  var c = emailData;
  var BG_HERO = "#FAF9F7";
  var BG_LETTER = "#FFF6E2";
  var BG_EDUCATION = "#F7F5F0";
  var BG_PRODUCT = "#FFFFFF";
  var BG_GUARANTEE = "#FAF9F7";
  var BG_CTA = B.ink;

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    React.createElement(Header, { bg: BG_HERO }),

    /* Title */
    React.createElement(TitleBlock, { badge: c.heroBadge, part1: c.h1a, part2: c.h1b }),

    React.createElement(Band, { from: BG_HERO, to: BG_LETTER }),

    /* Hook - Letter section */
    React.createElement(Letter, { bg: BG_LETTER, first: "Hi there.", paras: [c.hook] }),

    React.createElement(Band, { from: BG_LETTER, to: BG_EDUCATION }),

    /* Mechanism - Why care matters */
    React.createElement("div", { style: { background: BG_EDUCATION, padding: "28px 22px 16px" } },
      React.createElement(Eyebrow, null, "Why care matters"),
      React.createElement(H2, { size: 24 },
        "The signal layer ",
        React.createElement("span", { style: { background: "linear-gradient(135deg, #039902 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, "needs protection."),
        React.createElement("br"),
        "Here's why."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.bodyColor, margin: 0 } }, c.mechanism)
    ),

    React.createElement(Band, { from: BG_EDUCATION, to: BG_PRODUCT }),

    /* Product section with photo and SVG illustration */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "28px 22px 8px" } },
      React.createElement(Eyebrow, null, "The solution"),
      React.createElement(H2, { size: 24 },
        "The BrightKidCo ",
        React.createElement("span", { style: { background: "linear-gradient(135deg, #039902 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, "Wash Bag"),
        React.createElement("br"),
        "\u20AC14.99"
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.bodyColor, margin: "0 0 16px" } }, c.productIntro)
    ),

    /* Product photo - laundry bag */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "0 14px 12px" } },
      React.createElement("div", { style: { borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink } },
        React.createElement("img", {
          src: "email-assets/product-photos/flat-lay/laundry-bag-llama-cream.png",
          alt: "BrightKidCo Wash Bag - protects the Body-Signal Learning Layer during washing",
          style: { width: "100%", display: "block", height: 220, objectFit: "cover" }
        })
      )
    ),

    /* SVG Wash Bag illustration */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "12px 14px 20px", display: "flex", alignItems: "center", gap: 16 } },
      React.createElement("div", { style: { flex: 1, borderLeft: "2px solid " + B.emerald + "40", paddingLeft: 16 } },
        React.createElement("p", { style: { fontSize: 13, lineHeight: 1.5, color: B.soft, margin: 0 } },
          React.createElement("strong", { style: { color: B.headlineColor } }, "Up to 6 pairs per bag."),
          " Covers the full 3+3 Bundle rotation. One-time purchase."
        )
      ),
      React.createElement("div", { style: { flex: "0 0 auto", width: 100 } },
        React.createElement(WashBagSVG, null)
      )
    ),

    /* CTA block */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "8px 22px 20px", textAlign: "center", borderTop: "1px solid #E8E0D4" } },
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: B.emerald, color: "#FFF", fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, c.ctaButton + " \u2192"),
      React.createElement("div", { style: { marginTop: 12, fontSize: 13, color: B.muted } },
        React.createElement("a", { href: "#", style: { color: B.tealDeep, textDecoration: "underline" } }, "Learn more about caring for your Body-Signal underwear")
      )
    ),

    React.createElement(Band, { from: BG_PRODUCT, to: BG_GUARANTEE }),

    /* Guarantee */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "28px 22px 12px", textAlign: "center" } },
      React.createElement(Eyebrow, null, "Our promise"),
      React.createElement(H2, { size: 22, center: true },
        "60 days. Full refund."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.65, color: B.bodyColor, margin: "0 0 16px" } }, c.guarantee),
      /* Guarantee seal */
      React.createElement("div", { style: { display: "inline-flex", flexDirection: "column", alignItems: "center", width: 140, height: 140, background: "#FFFFFF", borderRadius: "50%", border: "3px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink, justifyContent: "center" } },
        React.createElement("div", { style: { fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 } }, "Protected by"),
        React.createElement("div", { style: { fontSize: 42, fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg, #039902 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" } }, "60"),
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: B.ink, marginTop: 2 } }, "Calm Days"),
        React.createElement("div", { style: { fontSize: 9, color: B.soft, marginTop: 4 } }, "Full refund / No questions")
      )
    ),

    /* Testimonial */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "16px 22px 28px", textAlign: "center" } },
      React.createElement("div", { style: { background: "#FFF6E2", borderRadius: 16, padding: "20px 18px", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
        React.createElement("div", { style: { fontSize: 32, lineHeight: 0.8, color: "#FFD866", fontWeight: 700, marginBottom: 8 } }, "\u201C"),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.bodyColor, margin: "0 0 8px", fontStyle: "italic" } }, c.testimonial),
        React.createElement("div", { style: { fontSize: 12, color: B.ink, fontWeight: 700 } },
          "\u2014 A BrightKidCo parent"
        )
      )
    ),

    /* Next time teaser */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "0 22px 20px", textAlign: "center" } },
      React.createElement("div", { style: { padding: "14px 16px", background: "#E8E0D4", borderRadius: 12 } },
        React.createElement("p", { style: { fontSize: 13, color: B.soft, margin: 0, fontStyle: "italic" } },
          React.createElement("strong", { style: { color: B.headlineColor } }, "Next time: "),
          c.nextTeaser
        )
      )
    ),

    React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 50 }),

    /* Dark CTA close */
    React.createElement(CTAClose, { intro: c.ctaIntro, button: "Add the Wash Bag", fine: c.ctaFinePrint }),

    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.UpsellE1 = UpsellE1;
