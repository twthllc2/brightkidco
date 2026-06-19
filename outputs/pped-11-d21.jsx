/* PP-Education D21 (Flow 11, Email 4) -- "Three-Week Check-In"
   Built from: pped-11-d21.md
   Pattern: Cross-level check-in
   Images: 3 product photos
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
    line1: "With understanding,",
    name: "Lena Bauer",
    ps: "My older son was 8 before he trained. Week 3 for us was nothing. Week 4 was a pause. Week 8 was a step. The pathway builds at its own speed. 60 days to decide, your judgment."
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
    React.createElement("h1", { style: { fontSize: 40, lineHeight: 1, fontWeight: 700, margin: 0, letterSpacing: -0.8 } },
      props.part1,
      React.createElement("br"),
      props.accent2 !== false
        ? React.createElement("span", { style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, props.part2)
        : props.part2
    ),
    props.subhead ? React.createElement("p", { style: { fontSize: 17, color: B.soft, marginTop: 14, lineHeight: 1.4, fontWeight: 500 } }, props.subhead) : null
  );
};

var Letter = function(props) {
  var paras = props.paras || [];
  return React.createElement("div", { style: { background: props.bg, padding: "4px 24px 28px", fontSize: 15, lineHeight: 1.7, color: B.soft } },
    props.first ? React.createElement("p", { style: { margin: "0 0 14px", fontSize: 17, color: B.ink, fontWeight: 600 } }, props.first) : null,
    paras.map(function(p, i) {
      return React.createElement("p", { key: i, style: { margin: i === paras.length - 1 ? 0 : "0 0 14px" } }, p);
    })
  );
};

var Eyebrow = function(props) {
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.tealDeep, fontWeight: 700, marginBottom: 10 } }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", { style: { fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left" } }, props.children);
};

var GradientSpan = function(props) {
  return React.createElement("span", {
    style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 }
  }, props.children);
};

var CTAClose = function(props) {
  var bg = props.bg || B.ink;
  return React.createElement("div", { style: { background: bg, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" } },
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" } }, props.intro),
    React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, props.button + " \u2192"),
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

/* 4. PRODUCT IMAGES (relative paths) */
var IMG_PROD1 = "email-assets/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg";
var IMG_PROD2 = "email-assets/product-photos/flat-lay/training-pant-fox-woodland-white.jpg";
var IMG_PROD3 = "email-assets/product-photos/flat-lay/training-pant-penguin-multicolor.jpg";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "Wherever your child is on Day 21, here's what's normal.",
  heroBadge: "Week 3 check-in",
  h1a: "3 weeks in,",
  h1b: "what are you seeing?",
  observation: "Three weeks of the Body-Signal Learning Layer.",
  observationBridge: "Whether your child is 3 or 10. Whether they're verbal and can say \"wet\" or non-verbal and show you with a gesture. Whether you've seen one pause or zero.",
  observationClose: "If your child wears underwear that gives their nervous system feedback it's been missing, here's where you might be right now.",
  recognitionIntro: "Read through these and see which one fits your morning:",
  anchors: [
    "They paused for a second after an accident. Looked down. Then went back to playing.",
    "Nothing. Absolutely nothing. As if the underwear isn't there.",
    "A step toward the bathroom. After. But they walked that direction.",
    "They pulled at their pants. Not crying. Just, noticing.",
    "A tiny moment where they seemed to register something before it happened.",
    "Same as week 1. No change at all."
  ],
  anchorClose: "If even one of these sounds familiar, the signal is working. Even the \"nothing\" version.",
  validationBody: "If you saw nothing in week 3, that's not failure. That's neurology on its own timeline.",
  validationTimeline: "Some kids process the sensation in 2 weeks. Some need 8. Both are normal. All four of our families had different timelines:",
  testimonials: [
    { text: "He's been \"almost trained\" for months. Week 3, he paused. Just paused. But that pause never happened before.", name: "Sarah", desc: "mom of a verbal 4-year-old" },
    { text: "Nothing in week 1. Nothing in week 2. Week 3, she pulled at her pants after peeing. My BCBA said that's the body signal connection starting.", name: "Lisa", desc: "mom of a 6-year-old with sensory differences" },
    { text: "He's not trained. But he stopped mid-play and looked down. First time in 8 years he noticed. That's enough for now.", name: "Maria", desc: "mom of a non-verbal 8-year-old" }
  ],
  testimonialClosing: "Three different kids. Three different timelines. One common experience: the body-signal connection is building.",
  mechanismBody: "The Body-Signal Learning Layer works through repetition. Each \"uh-oh\" sensation, sustained for 30-60 seconds, tells the brain: something happened here. Week 3 is when some nervous systems start registering that message.",
  mechanismClose: "For others, the pathway is still forming. That takes what it takes.",
  winsIntro: "If any of these happened this week, document it:",
  wins: [
    "A pause after wetness",
    "A look at the spot",
    "A hand touching the underwear",
    "A step toward the bathroom",
    "Two hours dry instead of 30 minutes",
    "A hand signal or a word for wet",
    "Less resistance during diaper changes"
  ],
  winsClose: "These aren't little wins. They're the neural pathway becoming visible.",
  exitIntro: "At 3 weeks, you're in one of three places:",
  exit1Title: "If you're seeing first signs",
  exit1Body: "Keep going. The next phase of learning begins now. Week 4-6 is when signals strengthen and awareness grows. Some families find deeper guidance helpful at this stage.",
  exit2Title: "If you're not seeing anything yet",
  exit2Body: "That's within range. Some nervous systems need 8+ weeks to register the signal. The Body-Signal approach is a marathon, not a sprint.",
  exit3Title: "If you're unsure",
  exit3Body: "That's honest. You've given it 3 weeks. If you want to continue with more structured support as your child moves into weeks 4-8, we have resources designed for the next stage of body-signal learning.",
  ctaIntro: "Whenever you're ready.",
  ctaButton: "Continue your journey",
  ctaFinePrint: "60-day guarantee / Your judgment / No pressure"
};

/* 6. EMAIL COMPONENT */
var PPED11D21 = function() {
  var c = emailData;
  var BG_HERO = "#FFFBF0";
  var BG_LETTER = "#FFF6E2";
  var BG_ANCHORS = "#EAF6F2";
  var BG_VALIDATION = "#FFF6E2";
  var BG_SOCIAL = "#FFFBF0";
  var BG_MECHANISM = "#F0EDF8";
  var BG_WINS = "#FFF6E2";
  var BG_EXIT = "#EAF6F2";
  var BG_PHOTOS = "#FFFFFF";
  var BG_CTA = B.ink;
  var accents = [B.teal, B.green, "#E8A23D"];

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= SECTION 1: HERO (HERO-3 pattern: Permission Open) ======= */
    React.createElement(TitleBlock, { badge: c.heroBadge, part1: c.h1a, part2: c.h1b }),

    React.createElement(Band, { from: BG_HERO, to: BG_LETTER }),

    /* ======= SECTION 2: OBSERVATION (Letter pattern) ======= */
    React.createElement(Letter, {
      bg: BG_LETTER,
      first: c.observation,
      paras: [c.observationBridge, c.observationClose]
    }),

    React.createElement(Band, { from: BG_LETTER, to: BG_ANCHORS }),

    /* ======= SECTION 3: RECOGNITION ANCHORS (28.2 pattern) ======= */
    React.createElement("div", { style: { background: BG_ANCHORS, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "Where you might be"),
      React.createElement(H2, { size: 22 }, "Read through these and see which one fits your morning:"),
      c.anchors.map(function(anchor, i) {
        return React.createElement("div", {
          key: i,
          style: {
            display: "flex", alignItems: "flex-start", gap: 12,
            marginBottom: i === c.anchors.length - 1 ? 18 : 14,
            padding: "12px 14px",
            background: "#FFFFFF",
            borderRadius: 10,
            borderLeft: "3px solid " + B.teal
          }
        },
          React.createElement("span", { style: { color: B.teal, fontWeight: 700, fontSize: 16, lineHeight: 1.6, flexShrink: 0 } }, (i + 1) + "."),
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 } }, anchor)
        );
      }),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 600 } }, c.anchorClose)
    ),

    React.createElement(Band, { from: BG_ANCHORS, to: BG_VALIDATION }),

    /* ======= SECTION 4: VALIDATION (STORY-09 pattern: The Reframe) ======= */
    React.createElement("div", { style: { background: BG_VALIDATION, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "Validation"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.validationBody),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.validationTimeline)
    ),

    React.createElement(Band, { from: BG_VALIDATION, to: BG_SOCIAL }),

    /* ======= SECTION 5: THREE-FAMILY TESTIMONIALS (SP-08 pattern) ======= */
    React.createElement("div", { style: { background: BG_SOCIAL, padding: "24px 14px 8px" } },
      React.createElement("div", { style: { padding: "0 8px", marginBottom: 18 } },
        React.createElement(Eyebrow, null, "Three families, three timelines"),
        React.createElement(H2, { size: 22 }, "You're not alone in this.")
      ),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
        c.testimonials.map(function(t, i) {
          return React.createElement("div", { key: i, style: { background: "#FFFFFF", border: "2px solid " + B.ink, borderLeft: "4px solid " + accents[i], borderRadius: 16, overflow: "hidden", boxShadow: "3px 3px 0 " + B.ink } },
            React.createElement("div", { style: { padding: "20px 18px" } },
              React.createElement("div", { style: { fontSize: 36, lineHeight: 0.8, color: accents[i], fontWeight: 700, marginBottom: 8 } }, "\u201C"),
              React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 12px", fontStyle: "italic" } }, t.text),
              React.createElement("div", { style: { fontSize: 12, color: B.ink, fontWeight: 700 } },
                "\u2014 " + t.name + ", ",
                React.createElement("span", { style: { fontWeight: 400, color: B.muted } }, t.desc)
              )
            )
          );
        })
      ),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "18px 8px 0" } }, c.testimonialClosing)
    ),

    React.createElement(Band, { from: BG_SOCIAL, to: BG_MECHANISM }),

    /* ======= SECTION 6: MECHANISM REMINDER (EDU-8 pattern) ======= */
    React.createElement("div", { style: { background: BG_MECHANISM, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#7A5FA8" }, "How it works"),
      React.createElement(H2, { size: 24 },
        "The signal is ",
        React.createElement(GradientSpan, null, "building"),
        "."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.mechanismBody),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0, fontStyle: "italic" } }, c.mechanismClose)
    ),

    React.createElement(Band, { from: BG_MECHANISM, to: BG_WINS }),

    /* ======= SECTION 7: LOW-BAR WINS (EDU-3 pattern: Checklist) ======= */
    React.createElement("div", { style: { background: BG_WINS, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "Week 3 wins to document"),
      React.createElement(H2, { size: 22 }, "If any of these happened this week:"),
      c.wins.map(function(win, i) {
        return React.createElement("div", {
          key: i,
          style: {
            display: "flex", alignItems: "flex-start", gap: 10,
            marginBottom: i === c.wins.length - 1 ? 18 : 10
          }
        },
          React.createElement("span", { style: { fontSize: 18, lineHeight: 1.6 } }, "\u2610"),
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.ink, margin: 0 } }, win)
        );
      }),
      React.createElement("div", { style: { background: "#EAF6F2", borderRadius: 6, padding: "12px 16px", textAlign: "center" } },
        React.createElement("p", { style: { fontFamily: "'Caveat', cursive", fontSize: 16, color: B.teal, margin: 0 } }, c.winsClose)
      )
    ),

    React.createElement(Band, { from: BG_WINS, to: BG_EXIT }),

    /* ======= SECTION 8: EXIT OPTIONS (Triage cards) ======= */
    React.createElement("div", { style: { background: BG_EXIT, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "Where you are now"),
      React.createElement(H2, { size: 22 }, c.exitIntro),
      /* Exit 1 */
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 14, padding: "18px 16px", marginBottom: 12, borderLeft: "4px solid " + B.teal } },
        React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 6 } }, c.exit1Title + ","),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.exit1Body)
      ),
      /* Exit 2 */
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 14, padding: "18px 16px", marginBottom: 12, borderLeft: "4px solid " + B.green } },
        React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 6 } }, c.exit2Title + ","),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.exit2Body)
      ),
      /* Exit 3 */
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 14, padding: "18px 16px", borderLeft: "4px solid #FFD866" } },
        React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 6 } }, c.exit3Title + ","),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.exit3Body)
      )
    ),

    React.createElement(Band, { from: BG_EXIT, to: BG_PHOTOS }),

    /* ======= SECTION 9: PRODUCT PHOTOS (mandatory product images) ======= */
    React.createElement("div", { style: { background: BG_PHOTOS, padding: "0 14px 20px" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 14, paddingTop: 20 } },
        React.createElement(Eyebrow, null, "The pants that teach"),
        React.createElement(H2, { size: 22, center: true },
          "Body-Signal Learning ",
          React.createElement(GradientSpan, null, "Layer\u2122"),
        )
      ),
      React.createElement("div", { style: { display: "flex", gap: 8 } },
        [
          { src: IMG_PROD1, label: "Cloud Raindrop" },
          { src: IMG_PROD2, label: "Fox Woodland" },
          { src: IMG_PROD3, label: "Penguin Party" }
        ].map(function(img, i) {
          return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
            React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 140, objectFit: "cover" } }),
            React.createElement("div", { style: { padding: "8px 10px", fontSize: 11, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
          );
        })
      )
    ),

    React.createElement(Band, { from: BG_PHOTOS, to: BG_CTA, height: 50 }),

    /* ======= SECTION 10: CTA (permission-based) ======= */
    React.createElement(CTAClose, { intro: c.ctaIntro, button: c.ctaButton, fine: c.ctaFinePrint }),

    /* ======= SECTION 11: SIGNOFF ======= */
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.PPED11D21 = PPED11D21;
