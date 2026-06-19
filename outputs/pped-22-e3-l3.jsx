/* PP-Extended Education E3 (D36) -- L3 Maria
   "Small signs that matter: the micro-wins tracking system"
   Flow 22, E3, Level 3 (Non-Verbal, High Support, Dignity-First)
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
    line1: "Talk soon,",
    name: "Lena Bauer",
    ps: "P.S. If you want to see how the body-signal approach works, check our method page. No pressure."
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

var Eyebrow = function(props) {
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.tealDeep, fontWeight: 700, marginBottom: 10 } }, props.children);
};

var GradientSpan = function(props) {
  return React.createElement("span", {
    style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 }
  }, props.children);
};

var CTAClose = function(props) {
  var bg = props.bg || B.ink;
  return React.createElement("div", {
    style: { background: bg, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" }
  },
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

/* 4. EMBEDDED IMAGES */
IMG_PLACEHOLDER

/* 5. EMAIL DATA */
var emailData = {
  preheader: "You\u2019ve been watching for signs. Here\u2019s what progress actually looks like for your child.",
  heroBadge: "Extended Education",
  heroLine1: "The signs you",
  heroLine2: "might be missing",
  hook1: "You\u2019ve been looking for the wrong signs.",
  hook2: "The ones that matter for your child are not the ones the books describe. Not the ones therapists measure. Not the ones other parents post about.",
  hook3: "The signs that matter for your child are smaller. So small you might have missed them.",
  observations: [
    "A pause before sitting down.",
    "A glance down at the wet spot instead of walking through it.",
    "A flap of the hands at the moment of changing.",
    "Ten seconds of dry time that wasn\u2019t there before."
  ],
  observationsPunch: "These are not failures. These are not \u201Calmost there\u201D nothings. These are the first sparks of a nervous system beginning to register information it never received before.",
  tableHeadline: "What micro-wins look like for L3 children",
  tableIntro: "Most tracking systems measure the wrong things. Your child\u2019s nervous system processes differently. For your child, a win looks different:",
  tableRows: [
    { old: "Did he train?", nu: "Did he pause at all today?" },
    { old: "Did he tell you?", nu: "Did anything different happen around changing?" },
    { old: "Is he dry?", nu: "Was he dry 30 seconds longer than last week?" },
    { old: "Did he initiate?", nu: "Did he react to wetness sooner than before?" }
  ],
  tableClosing: "Each question acknowledges that his body is learning a language it never learned to speak. The first signs will be barely visible.",
  trackingHeadline: "Micro-wins you can track starting today",
  wins: [
    {
      num: "1",
      title: "The Pause",
      desc: "A hesitation, a brief stop in movement, right before or after voiding. Even half a second. This is the nervous system registering: something happened."
    },
    {
      num: "2",
      title: "The Look",
      desc: "Eyes moving toward the wet spot or the body. The brain is connecting the internal event to the external reality for the first time."
    },
    {
      num: "3",
      title: "The Reaction",
      desc: "A change in behavior at the moment of wetness. Not discomfort, that may never come for a slow to pick up signals child. But any shift. A flap. A vocalization. A small stillness."
    },
    {
      num: "4",
      title: "The Duration",
      desc: "Measuring in seconds, not hours. Was he dry for 30 seconds this week when last week it was zero? That is the signal pathway starting to hold."
    },
    {
      num: "5",
      title: "The Awareness Window",
      desc: "The time between \u201Che voided\u201D and \u201Che shows awareness of it.\u201D The gap may be 10 seconds. Next month it might be 8 seconds. That\u2019s progress."
    }
  ],
  winsClosing: "None of these mean your child is \u201Ctraining.\u201D They mean his body is communicating with his brain a way it hasn\u2019t before. That is the only outcome the Body-Signal Learning Layer is designed to create.",
  trackingSystem: "The tracking system",
  trackingBody1: "Take one note per day. Just one.",
  trackingBody2: "Pick one micro-win category from the list above. At the end of each day, ask yourself one question: \u201CDid I see it today?\u201D Yes or no. That\u2019s it.",
  trackingBody3: "Write it down. A single word. A tally mark on a sticky note. A note in your phone.",
  trackingBody4: "At the end of the week, look back. Not for a trend. Not for evidence of progress. Just to see: did I notice anything this week I wouldn\u2019t have noticed before?",
  trackingBody5: "Some weeks the answer will be no. That is real. That is not failure. That is the honest pace of your child\u2019s nervous system.",
  trackingBody6: "Some weeks the answer will be yes. A single yes. And that single yes is a signal your child\u2019s brain is doing something it never did before.",
  lifeHeadline: "What this means alongside your life",
  lifeBody: "You already track everything. Medications, appointments, IEP goals, sleep hours, stool patterns. You do not need another system. You need permission to change what you count as a signal.",
  productIntro: "The BSL underwear you added alongside your diapers, it is not here to transform your daily reality. It is here to provide the sustained 30 to 60 seconds of gentle feedback that your child\u2019s nervous system that picks up signals slowly needs to begin registering what it previously could not.",
  productLine: "One pair. \u20AC34.99. Add alongside your current routine. No replacement of anything. Just an addition.",
  productWin: "If you see one micro-win 60 days, one pause, one look, one shift, you will know the signal is reaching a brain it never reached before.",
  productNoWin: "If you don\u2019t see anything, that is also information. A full refund stands. No questions.",
  testimonial: "One L3 parent told us: \u201CHe\u2019s not trained. But he looked down at his wet underwear for the first time in 9 years. That\u2019s nothing. That\u2019s a real change.\u201D",
  ctaLine: "When you decide, it\u2019s here.",
  ctaButton: "Add 1 pair to your routine",
  ctaFine: "30 to 60 seconds of gentle feedback per wear / \u20AC34.99 / Full refund if nothing changes",
  lenaStory: "I have two autistic sons. One at 6, the other at almost 8. The younger one, we thought he\u2019d never get the signal. He\u2019d been in diapers for years with zero awareness. Then one day he paused. Just paused. That was the first micro-win. It took months before the next one. But the next one came. The small signs matter. Trust your read."
};

/* 6. EMAIL COMPONENT */
var PPEdE3L3 = function() {
  var c = emailData;
  var BG_HERO = "#FBF7F1";
  var BG_HOOK = "#F2E6DF";
  var BG_TABLE = "#EAF6F2";
  var BG_WINS = "#F0EDF8";
  var BG_TRACKING = "#FBF7F1";
  var BG_LIFE = "#EAF6F2";
  var BG_PRODUCT = "#FFF6E2";
  var BG_PHOTOS = "#FFFFFF";
  var BG_CTA = B.ink;

  var numberColors = [B.teal, B.green, "#FFD866", B.tealDeep, B.greenDeep];

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= HERO ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "32px 24px 16px", textAlign: "center" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 16 } },
        React.createElement("span", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, c.heroBadge)
      ),
      React.createElement("h1", { style: { fontFamily: F.display, fontSize: 28, lineHeight: 1.25, color: B.ink, margin: "0 0 16px" } },
        c.heroLine1, React.createElement("br"),
        React.createElement(GradientSpan, null, c.heroLine2)
      )
    ),

    /* ======= HOOK / OPENING ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "0 24px 24px" } },
      React.createElement("p", { style: { fontSize: 17, lineHeight: 1.7, color: B.ink, margin: "0 0 14px", fontWeight: 600 } }, c.hook1),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.75, color: B.soft, margin: "0 0 14px" } }, c.hook2),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.75, color: B.soft, margin: "0 0 0" } }, c.hook3)
    ),

    React.createElement(Band, { from: BG_HERO, to: BG_HOOK, height: 28 }),

    /* ======= OBSERVATIONS ======= */
    React.createElement("div", { style: { background: BG_HOOK, padding: "28px 22px 20px" } },
      React.createElement("div", { style: { marginBottom: 16 } },
        c.observations.map(function(obs, i) {
          return React.createElement("p", { key: i, style: { fontSize: 15, lineHeight: 1.6, color: B.ink, margin: "0 0 8px", fontStyle: "italic", paddingLeft: 12, borderLeft: "3px solid " + B.teal } }, obs);
        })
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.75, color: B.ink, margin: 0, fontWeight: 600 } }, c.observationsPunch)
    ),

    React.createElement(Band, { from: BG_HOOK, to: BG_TABLE, height: 28 }),

    /* ======= MICRO-WIN TABLE ======= */
    React.createElement("div", { style: { background: BG_TABLE, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "The reframe"),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: "0 0 4px" } }, c.tableHeadline),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 16px", fontStyle: "italic" } }, c.tableIntro),
      /* Comparison Table */
      React.createElement("div", { style: { background: "#FFF", borderRadius: 12, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink, marginBottom: 14 } },
        React.createElement("div", { style: { display: "flex", background: B.ink, padding: "10px 14px" } },
          React.createElement("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, color: "#FFD866", letterSpacing: 1, textTransform: "uppercase" } }, "Instead of asking"),
          React.createElement("div", { style: { flex: 1, fontSize: 11, fontWeight: 700, color: "#D8F57C", letterSpacing: 1, textTransform: "uppercase", paddingLeft: 12 } }, "Ask this")
        ),
        c.tableRows.map(function(row, i) {
          var bg = i % 2 === 0 ? "#F7F3EE" : "#FFFFFF";
          return React.createElement("div", { key: i, style: { display: "flex", background: bg, padding: "10px 14px", borderTop: "1px solid #EDE9E1" } },
            React.createElement("div", { style: { flex: 1, fontSize: 13, color: B.muted, textDecoration: "line-through", lineHeight: 1.4 } }, row.old),
            React.createElement("div", { style: { flex: 1, fontSize: 13, color: B.ink, fontWeight: 600, lineHeight: 1.4, paddingLeft: 12 } }, row.nu)
          );
        })
      ),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.tableClosing)
    ),

    React.createElement(Band, { from: BG_TABLE, to: BG_WINS, height: 28 }),

    /* ======= 5 MICRO-WIN CATEGORIES ======= */
    React.createElement("div", { style: { background: BG_WINS, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#7A5FA8" }, "What to look for"),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: "0 0 16px" } }, c.trackingHeadline),
      c.wins.map(function(win, i) {
        return React.createElement("div", { key: i, style: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 } },
          React.createElement("div", { style: { background: numberColors[i], color: i === 2 ? B.ink : "#FBF7F1", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 } }, win.num),
          React.createElement("div", null,
            React.createElement("p", { style: { fontSize: 14, fontWeight: 700, color: B.ink, margin: "0 0 2px" } }, win.title),
            React.createElement("p", { style: { fontSize: 13, lineHeight: 1.55, color: B.soft, margin: 0 } }, win.desc)
          )
        );
      }),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "8px 0 0", fontWeight: 600 } }, c.winsClosing)
    ),

    React.createElement(Band, { from: BG_WINS, to: BG_TRACKING, height: 28 }),

    /* ======= TRACKING SYSTEM ======= */
    React.createElement("div", { style: { background: BG_TRACKING, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "The system"),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: "0 0 16px" } }, c.trackingSystem),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.ink, margin: "0 0 12px", fontWeight: 600 } }, c.trackingBody1),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 12px" } }, c.trackingBody2),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 12px" } }, c.trackingBody3),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 12px" } }, c.trackingBody4),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 12px" } }, c.trackingBody5),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 600 } }, c.trackingBody6)
    ),

    React.createElement(Band, { from: BG_TRACKING, to: BG_LIFE, height: 28 }),

    /* ======= LIFE / PRODUCT ======= */
    React.createElement("div", { style: { background: BG_LIFE, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "Alongside your life"),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 18, fontWeight: 700, color: B.ink, margin: "0 0 12px" } }, c.lifeHeadline),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.lifeBody),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.productIntro),
      /* Product highlight card */
      React.createElement("div", { style: { background: "#FFF", borderRadius: 12, padding: 18, border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink, marginBottom: 14 } },
        React.createElement("div", { style: { fontSize: 15, lineHeight: 1.7, color: B.ink, fontWeight: 600, margin: "0 0 10px" } }, c.productLine),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 8px" } }, c.productWin),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.teal, margin: 0, fontWeight: 600 } }, c.productNoWin)
      ),
      /* Testimonial quote */
      React.createElement("div", { style: { background: "#FFF", padding: 16, borderRadius: 12, borderLeft: "3px solid #FFD866", marginBottom: 14 } },
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.ink, margin: 0, fontStyle: "italic" } }, "\u201C" + c.testimonial.replace(/^One L3 parent told us: /, "").replace(/\u201C/g, "").replace(/\u201D/g, "") + "\u201D"),
        React.createElement("div", { style: { fontSize: 11, color: B.teal, marginTop: 8 } }, "\u2014 L3 parent")
      )
    ),

    React.createElement(Band, { from: BG_LIFE, to: "#F5F5F5", height: 28 }),

    /* ======= PRODUCT PHOTOS ======= */
    React.createElement("div", { style: { background: "#F5F5F5", padding: "0 14px 20px", display: "flex", gap: 8 } },
      [
        { src: IMG_CLOUD_RAINDROP, label: "Cloud Raindrop" },
        { src: IMG_FOX_WOODLAND, label: "Fox Woodland" },
        { src: IMG_PENGUIN, label: "Penguin Party" }
      ].map(function(img, i) {
        return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
          React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 140, objectFit: "cover" } }),
          React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
        );
      })
    ),

    React.createElement(Band, { from: "#F5F5F5", to: BG_HERO, height: 28 }),

    /* ======= CTA ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "20px 14px" } },
      React.createElement("div", { style: { background: B.ink, borderRadius: 14, padding: "28px 24px", textAlign: "center" } },
        React.createElement("p", { style: { fontFamily: "'Caveat', cursive", fontSize: 18, color: "#D8F57C", marginBottom: 4 } }, "no rush, just here when you need it"),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: "#FBF7F1", marginBottom: 16, lineHeight: 1.3 } }, c.ctaLine),
        React.createElement("a", { href: "#", style: { display: "inline-block", background: B.teal, color: "#FBF7F1", fontFamily: F.main, fontSize: 15, fontWeight: 400, textDecoration: "none", padding: "14px 36px", borderRadius: 10, letterSpacing: 0.3 } }, c.ctaButton + " \u2192"),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 12, color: "#6B7C7E", marginTop: 12 } }, c.ctaFine)
      )
    ),

    React.createElement(Band, { from: BG_HERO, to: BG_CTA, height: 50 }),

    /* ======= SIGNOFF (Lena's story) ======= */
    React.createElement("div", { style: { background: B.ink, padding: "0 22px 24px" } },
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
            React.createElement("div", { style: { fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 } }, "Lena Bauer"),
            React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Customer Support / Mom of two autistic sons")
          )
        ),
        React.createElement("div", { style: { paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547", marginBottom: 16 } },
          React.createElement("div", { style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 } }, "Talk soon,"),
          React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2, marginBottom: 14 } }, "Lena"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", margin: 0 } }, c.lenaStory)
        ),
        React.createElement("div", { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" } },
          React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
          window.FLOW1_SHARED.signoff.ps.replace(/^P\.S\.\s*/, "")
        )
      )
    ),

    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.PPEdE3L3 = PPEdE3L3;
