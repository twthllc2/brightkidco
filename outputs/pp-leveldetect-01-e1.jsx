/* PP Level Detection E1 -- Cross-Level
   Built from: pp-leveldetect-01-e1.md
   Pattern: Level Detection segmentation
   Images: 1 hero + 3 product photos
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
  pink: "#FFB5A0",
  yellow: "#FFD866",
  mint: "#EAF6F2",
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
    name: "Lena",
    ps: "If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything."
  },
  out: "Reply to this email. Lena reads every response.",
  footer: {
    tagline: "Calm progress, one day at a time.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo Ltd / Berlin, Germany / support@brightkidco.com"
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
    React.createElement("h1", { style: { fontFamily: F.display, fontSize: props.fontSize || 34, lineHeight: 1.15, fontWeight: 700, margin: 0, letterSpacing: -0.8 } },
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
  return React.createElement("h2", { style: { fontFamily: F.display, fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left" } }, props.children);
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
        s.ps
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

/* 4. EMBEDDED IMAGES */
var IMG_HERO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/4QY2aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjYtMDUtMjE8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RGF0YT57JnF1b3Q7ZG9jJnF1b3Q7OiZxdW90O0RBSEtPRjNidmNzJnF1b3Q7LCZxdW90O3VzZXImcXVvdDs6JnF1b3Q7VUFFZkJPdnd0V1UmcXVvdDssJnF1b3Q7YnJhbmQmcXVvdDs6JnF1b3Q7QkFFZkJNU3FISXMmcXVvdDt9PC9BdHRyaWI6RGF0YT4KICAgICA8QXR0cmliOkV4dElkPjY3MWJmMGZjLTJlODMtNDVjOS05NDNmLWNhYTViYmFjOGYzOTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6Q29udGFpbnNBaUdlbmVyYXRlZENvbnRlbnQ9J2h0dHBzOi8vY2FudmEuY29tL2V4cG9ydCc+CiAgPENvbnRhaW5z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";
var IMG_PROD1 = "data:image/jpeg;base64,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";
var IMG_PROD2 = "data:image/jpeg;base64,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";
var IMG_PROD3 = "data:image/jpeg;base64,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";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "One tap. Help us send you the right content.",
  heroBadge: "Quick question",
  headline1: "Which one sounds like",
  headline2: "your child?",
  subhead: "Two weeks in. Help us send you the right content.",
  levels: [
    { emoji: "\uD83D\uDCAC", color: "#5DD07A", title: "Verbal & aware", desc: "Can tell you when they need to go, but signals arrive late" },
    { emoji: "\uD83E\uDD14", color: "#2BAEB4", title: "Sometimes aware", desc: "Inconsistent signals, mixed communication, pauses sometimes" },
    { emoji: "\uD83E\uDEE7", color: "#FFB5A0", title: "Rarely aware", desc: "Doesn't react to wet, no signal, needs full-body sensation" },
    { emoji: "\u2753", color: "#FFD866", title: "Not sure yet", desc: "Still figuring it out, and that's completely fine", dashed: true }
  ],
  helperText: "Pick the one that sounds most like your child. We'll tailor what you see next.",
  signoffLine: "Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.",
  footerBrand: "BrightKidCo \u00b7 support@brightkidco.com",
  footerStats: "16,511 reviews \u00b7 4.9 \u2605 \u00b7 100,000+ parents trust BrightKidCo"
};

/* 6. PP LEVEL DETECTION E1 COMPONENT */
var PPLevelDetect = function() {
  var c = emailData;
  var BG_HERO = "#FBF7F1";
  var BG_CARDS = "#FFFFFF";
  var BG_HELPER = "#F6F2EA";
  var BG_CTA = B.ink;

  /* Level card as clickable button */
  var LevelCard = function(props) {
    var lv = props.level;
    var isDashed = lv.dashed;
    return React.createElement("a", { href: "#", style: {
      display: "block", background: isDashed ? B.mint : "#FFFFFF",
      border: isDashed ? "2px dashed " + B.teal : "2px solid " + B.ink,
      borderRadius: 16, padding: "16px 18px", textDecoration: "none",
      marginBottom: 10, cursor: "pointer",
      boxShadow: isDashed ? "none" : "3px 3px 0 " + B.ink
    }},
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } },
        React.createElement("div", { style: {
          width: 44, height: 44, borderRadius: "50%", background: lv.color,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, flexShrink: 0, border: "2px solid " + B.ink
        }}, lv.emoji),
        React.createElement("div", { style: { flex: 1, minWidth: 0 } },
          React.createElement("div", { style: { fontSize: 17, fontFamily: F.display, fontWeight: 700, color: B.ink, marginBottom: 2 } }, lv.title),
          React.createElement("div", { style: { fontSize: 13, color: B.soft, lineHeight: 1.4 } }, lv.desc)
        )
      )
    );
  };

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* HEADER */
    React.createElement(Header, { bg: BG_HERO }),

    /* HERO SECTION */
    React.createElement("div", { style: { background: BG_HERO, padding: "32px 22px 8px", textAlign: "center" } },
      React.createElement(PartBadge, null, c.heroBadge),
      React.createElement("h1", { style: { fontFamily: F.display, fontSize: 34, lineHeight: 1.15, fontWeight: 700, color: B.ink, margin: "0 0 12px" } },
        c.headline1,
        React.createElement("br"),
        React.createElement("span", { style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, c.headline2)
      ),
      React.createElement("p", { style: { fontSize: 17, color: B.soft, lineHeight: 1.4, fontWeight: 500 } }, c.subhead)
    ),

    /* HERO IMAGE */
    React.createElement("div", { style: { margin: "16px 14px 20px", borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink } },
      React.createElement("img", { src: IMG_HERO, alt: "BrightKidCo Training Pant", style: { width: "100%", display: "block" } })
    ),

    /* LEVEL SELECTION CARDS */
    React.createElement("div", { style: { background: BG_CARDS, padding: "28px 14px 20px" } },
      React.createElement("div", { style: { padding: "0 8px", marginBottom: 16 } },
        React.createElement("div", { style: { textAlign: "center", marginBottom: 8 } },
          React.createElement("span", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, "Select your level")
        )
      ),
      c.levels.map(function(lv, i) {
        return React.createElement(LevelCard, { key: i, level: lv });
      })
    ),

    /* HELPER TEXT */
    React.createElement("div", { style: { background: BG_HELPER, padding: "18px 22px 24px", textAlign: "center" } },
      React.createElement("p", { style: { fontSize: 14, color: B.muted, lineHeight: 1.6, margin: 0 } }, c.helperText)
    ),

    /* CTA: THE CARDS ARE THE INTERACTION - no separate CTA button */
    React.createElement("div", { style: { background: BG_CTA, padding: "24px 22px 36px", textAlign: "center" } },
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 12px" } }, "Tap the card that sounds like your child above."),
      React.createElement("div", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 700, letterSpacing: 0.3 } }, "Your choice \u2192")
    ),

    /* SIGNOFF */
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.PPLevelDetect = PPLevelDetect;
