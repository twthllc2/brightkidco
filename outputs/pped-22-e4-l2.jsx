/* PP-Extended Education E4 -- Level 2 (Lisa)
   Day 21 Check-In
   Flow: PP-Extended Education (Flow 11)
   Avatar: Level 2, Lisa (Mixed Verbal, Method-Cycling, ~40% audience)
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
  bkcGreen: "#039902",
  mint: "#DBFFCD",
  creamLight: "#FBF7EB",
  creamWarm: "#F7F3EB",
  divider: "#D4C9B3",
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

window.FLOW1_SHARED = {
  signoff: {
    line1: "Talk soon,",
    name: "Lena",
    ps: "I have two autistic sons. One trained at 6, the other at almost 8. Week 3 looked like nothing for both of them. Week 8 was different. Not promising you the same, just telling you what I've seen."
  },
  out: "Reply to this email. Lena reads every response.",
  footer: {
    tagline: "Calm progress, one day at a time.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo Ltd / Berlin, Germany / hello@brightkidco.com"
  }
};

/* 2. PRIMITIVES */
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

var Divider = function() {
  return React.createElement("div", {
    style: { height: 1, background: B.divider, margin: "0 24px" }
  });
};

var Signoff = function(props) {
  var s = window.FLOW1_SHARED.signoff;
  return React.createElement("div", { style: { background: B.creamLight, padding: "0 22px 36px" } },
    React.createElement("div", { style: { position: "relative", background: "#FFFDF6", border: "1.5px solid " + B.divider, borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden" } },
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
          React.createElement("div", { style: { fontSize: 17, fontWeight: 700, color: B.ink, lineHeight: 1.2 } }, s.name + " Bauer"),
          React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Customer Support / Mom of two autistic sons")
        )
      ),
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed " + B.divider, borderBottom: "1.5px dashed " + B.divider, marginBottom: 16 } },
        React.createElement("div", { style: { flex: 1 } },
          React.createElement("div", { style: { fontSize: 12.5, color: "#6B7C7E", marginBottom: 2 } }, s.line1),
          React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: B.bkcGreen, letterSpacing: -0.5, marginTop: 2 } }, "Lena")
        ),
        React.createElement("svg", { width: 54, height: 40, viewBox: "0 0 54 40", style: { flexShrink: 0, opacity: 0.55 } },
          React.createElement("path", { d: "M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10", stroke: B.bkcGreen, strokeWidth: 1.5, fill: "none", strokeLinecap: "round" }),
          React.createElement("path", { d: "M48,12 L52,10 L50,14", stroke: B.bkcGreen, strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
        )
      ),
      React.createElement("div", { style: { fontSize: 13, lineHeight: 1.65, color: "#6B7C7E", fontStyle: "italic" } },
        React.createElement("span", { style: { color: B.bkcGreen, fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
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
      "You're receiving this because you purchased the Body-Signal Learning Layer on brightkidco.com. ",
      React.createElement("a", { href: "#", style: { color: B.ink, textDecoration: "underline" } }, "Update preferences"),
      " or ",
      React.createElement("a", { href: "#", style: { color: B.ink, textDecoration: "underline" } }, "unsubscribe"),
      ".",
      React.createElement("br"),
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

/* 3. EMAIL DATA */
var emailData = {
  preheader: "21 days of body-signal learning. Here's what happens neurologically at this point, and what to look for next.",
  heroBadge: "Day 21 Check-In",
  h1a: "3 weeks in,",
  h1b: "here's what your child's brain is doing",
  openingGreeting: "Lena here.",
  openingPara1: "Three weeks ago you started the Body-Signal Learning Layer. If you're reading this, you're still in it, and that already matters more than you think.",
  openingPara2: "Here's what's happening neurologically at day 21.",

  bridgeTitle: "What the first 3 weeks actually accomplish",
  bridgePara1: "Most parents think if nothing obvious has happened by week 3, nothing is happening. That's not how interoception works.",
  bridgePara2: "For autistic children, the brain processes sustained tactile input differently. Autistic brains don't habituate to sensory input the way neurotypical brains do. They keep processing it, fresh, every time. That \"nothing happened\" feeling? The sensation is landing. The brain is just still deciding what to do with it.",
  bridgePara3: "Your BCBA built the behavioral foundation over months or years of ABA. What you're doing now is adding the sensory layer ABA can't reach: sustained, localized body-signal input that gives the brain something to attach the behavior to.",

  scienceTitle: "What the research says about this specific window",
  sciencePara1: "A 2020 study by Hample, Mahler and Amspacher showed that autistic children who received structured interoception training began showing measurable improvement in body awareness after 4-6 weeks. Not 3 days. Not 1 week. The nervous system needs exposure cycles.",
  sciencePara2: "Internally, across 672 families in our data, 82% showed clearer body awareness within 2-4 weeks of consistent wear. That doesn't mean \"trained\", it means the first signal registered. A pause before an accident. A look at the wet spot. A hand toward the pants.",
  sciencePunch: "That's not failure. That's the first synapse firing.",

  checklistTitle: "If you're in the \"nothing yet\" camp, here's what to check",
  checklistItems: [
    { icon: "\u231B", title: "Wear time", text: "Is your child getting 2+ hours daily of consistent wear? Intermittent wear = intermittent input. The brain can't build a pathway on 20 minutes here and there." },
    { icon: "\uD83C\uDFE0", title: "The environment", text: "Sensory-overloaded bathrooms (flushing echoes, bright lights, cold tile) can override the learning signal. If your child resists bathroom time, it may not be the underwear, it may be the room. Try pairing wear-time with a low-stimulus activity for the first 2 weeks before introducing bathroom association." },
    { icon: "\uD83D\uDC55", title: "Clothing choices", text: "If your child is already sensitive to clothing textures, the learning layer adds another sensation on top. Try wearing the body-signal underwear under loose sweatpants or soft shorts, minimize competing sensory input during early weeks." },
    { icon: "\uD83D\uDCC5", title: "Daily rhythm", text: "The nervous system learns in patterns. Same time of day, same duration, same low-pressure context. Irregular schedules give the brain inconsistent data." }
  ],

  signsTitle: "If you're seeing small signs, you're ahead of the curve",
  signsPara1: "Some parents at week 3 report: a pause mid-play, a glance at the wet spot, a step toward the bathroom. These are not coincidences. The body signal pathway is forming. The 49 studies review (Barmpagiannis & Baldimtsi, 2025) confirmed that body signal differences are one of the most well-established features of the autistic nervous system, and also that these pathways respond to training.",
  signsPunch: "The signal isn't arriving fully yet. But it's starting to arrive at all. That's the bridge.",

  tableTitle: "Here's what realistic progress looks like for weeks 4-8 (L2 profile)",
  tableRows: [
    { week: "4-5", what: "First awareness: pause, look, hand-to-crotch gesture", means: "Signal reaching brain for the first time" },
    { week: "5-6", what: "Inconsistent initiation (1-2 times, then 4 days of nothing)", means: "Pathway strengthening. Non-linear is normal" },
    { week: "6-8", what: "Reduced prompt-dependency in one context (e.g., after school)", means: "Sensory + behavioral integration beginning" },
    { week: "8+", what: "Reliable signal in calm, familiar environments", means: "Your BCBA's foundation + sensory layer connecting" }
  ],
  tableClosing: "Not every child follows this table. Some faster, some slower. Both are within range.",

  guaranteeTitle: "The 60-day guarantee exists because every nervous system has its own timeline",
  guaranteePara1: "You're at day 21. You have 39 more days to observe. If your child shows no change, no pause, no awareness shift, no new signal, by day 60, full refund. No forms. No questions.",
  guaranteePara2: "We're not asking you to hope. We're asking you to observe the mechanism, and decide based on what you see.",
  guaranteePara3: "If today isn't a \"yes\", that's a real answer. The product will be here next month. So will I.",
  guaranteeQuote: "One L2 parent told me: \"She finally paused when she felt wetness. That was Week 4. We still have pull-up days. But she's feeling something for the first time.\" That's the mechanism working.",

  ctaIntro: "When you're ready, the body-signal learning guide is here:",
  ctaButton: "Read the body-signal learning guide"
};

/* 4. EMAIL COMPONENT */
var PPExtendedE4L2 = function() {
  var c = emailData;
  var BG_HERO = B.creamLight;
  var BG_BRIDGE = "#FFFFFF";
  var BG_SCIENCE = "#EAF6F2";
  var BG_CHECKLIST = "#FFFFFF";
  var BG_SIGNS = "#FFF6E2";
  var BG_TABLE = B.creamWarm;
  var BG_PHOTOS = "#F5F5F5";
  var BG_GUARANTEE = B.creamLight;
  var BG_CTA = B.mint;

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },

    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= SECTION 1: HERO ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "32px 24px 24px", textAlign: "center" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 16 } },
        React.createElement("span", { style: { display: "inline-block", background: B.bkcGreen, color: "#FFFFFF", padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, c.heroBadge)
      ),
      React.createElement("h1", { style: { fontFamily: F.main, fontSize: 26, lineHeight: 1.3, color: B.ink, margin: "0 0 20px", fontWeight: 700 } },
        c.h1a,
        React.createElement("br"),
        React.createElement("span", { style: { color: B.bkcGreen } }, c.h1b)
      ),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.65, color: B.ink, margin: "0 0 12px", fontWeight: 600 } }, c.openingGreeting),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 12px" } }, c.openingPara1),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0, fontWeight: 600 } }, c.openingPara2)
    ),

    React.createElement(Band, { from: BG_HERO, to: BG_BRIDGE, height: 36 }),

    /* ======= SECTION 2: BRIDGE (What 3 weeks accomplish) ======= */
    React.createElement("div", { style: { background: BG_BRIDGE, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "The science of the first 3 weeks"),
      React.createElement("h2", { style: { fontSize: 22, lineHeight: 1.2, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.3 } }, c.bridgeTitle),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.bridgePara1),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.bridgePara2),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.bridgePara3)
    ),

    React.createElement(Divider),
    React.createElement(Band, { from: BG_BRIDGE, to: BG_SCIENCE, height: 36 }),

    /* ======= SECTION 3: SCIENCE (Research window) ======= */
    React.createElement("div", { style: { background: BG_SCIENCE, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: B.bkcGreen }, "Research-backed"),
      React.createElement("h2", { style: { fontSize: 22, lineHeight: 1.2, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.3 } }, c.scienceTitle),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.sciencePara1),
      /* Stat callout */
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 10, padding: "16px 18px", border: "1px solid rgba(3,153,2,0.15)", marginBottom: 14 } },
        React.createElement("div", { style: { fontSize: 15, lineHeight: 1.6, color: B.soft } },
          React.createElement("span", { style: { color: B.bkcGreen, fontWeight: 700 } }, "82%"),
          " of 672 families in our data showed clearer body awareness within 2-4 weeks of consistent wear."
        ),
        React.createElement("div", { style: { fontSize: 10, color: B.muted, marginTop: 6, fontStyle: "italic" } }, "Internal data, self-reported")
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.sciencePara2),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: B.ink, margin: "14px 0 0", fontWeight: 700 } }, c.sciencePunch)
    ),

    React.createElement(Band, { from: BG_SCIENCE, to: BG_CHECKLIST, height: 36 }),

    /* ======= SECTION 4: CHECKLIST (4-point check) ======= */
    React.createElement("div", { style: { background: BG_CHECKLIST, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "Troubleshooting"),
      React.createElement("h2", { style: { fontSize: 20, lineHeight: 1.25, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.3 } }, c.checklistTitle),
      c.checklistItems.map(function(item, i) {
        return React.createElement("div", { key: i, style: { display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18 } },
          React.createElement("div", { style: { width: 36, height: 36, flexShrink: 0, borderRadius: "50%", background: BG_SCIENCE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, border: "1.5px solid " + B.bkcGreen } }, item.icon),
          React.createElement("div", { style: { flex: 1, minWidth: 0 } },
            React.createElement("p", { style: { fontSize: 14, fontWeight: 700, color: B.ink, margin: "0 0 4px", letterSpacing: 0.3 } }, (i + 1) + ". " + item.title),
            React.createElement("p", { style: { fontSize: 13.5, lineHeight: 1.6, color: B.soft, margin: 0 } }, item.text)
          )
        );
      })
    ),

    React.createElement(Divider),
    React.createElement(Band, { from: BG_CHECKLIST, to: BG_SIGNS, height: 36 }),

    /* ======= SECTION 5: SIGNS (Small wins) ======= */
    React.createElement("div", { style: { background: BG_SIGNS, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: B.bkcGreen }, "Early signs"),
      React.createElement("h2", { style: { fontSize: 20, lineHeight: 1.25, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.3 } }, c.signsTitle),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.signsPara1),
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 10, padding: 18, borderLeft: "4px solid " + B.bkcGreen } },
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0, fontWeight: 700, fontStyle: "italic" } }, c.signsPunch)
      )
    ),

    React.createElement(Band, { from: BG_SIGNS, to: BG_TABLE, height: 36 }),

    /* ======= SECTION 6: PROGRESS TABLE ======= */
    React.createElement("div", { style: { background: BG_TABLE, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "What to expect next"),
      React.createElement("h2", { style: { fontSize: 18, lineHeight: 1.3, fontWeight: 700, margin: "0 0 18px", letterSpacing: -0.2 } }, c.tableTitle),
      /* Table header */
      React.createElement("div", { style: { display: "flex", background: B.ink, borderRadius: "8px 8px 0 0", padding: "10px 12px" } },
        React.createElement("div", { style: { width: 55, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#B8CACD", fontWeight: 700 } }, "Week"),
        React.createElement("div", { style: { flex: 1, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#B8CACD", fontWeight: 700, paddingLeft: 8 } }, "What may happen"),
        React.createElement("div", { style: { flex: 1, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "#B8CACD", fontWeight: 700, paddingLeft: 8 } }, "What it means")
      ),
      /* Table rows */
      c.tableRows.map(function(row, i) {
        var bg = i % 2 === 0 ? "#FFFFFF" : BG_TABLE;
        return React.createElement("div", { key: i, style: { display: "flex", background: bg, padding: "12px 12px", borderBottom: "1px solid " + B.divider } },
          React.createElement("div", { style: { width: 55, fontSize: 13, fontWeight: 700, color: B.bkcGreen } }, row.week),
          React.createElement("div", { style: { flex: 1, fontSize: 13, lineHeight: 1.5, color: B.soft, paddingLeft: 8 } }, row.what),
          React.createElement("div", { style: { flex: 1, fontSize: 13, lineHeight: 1.5, color: B.ink, paddingLeft: 8, fontWeight: 500 } }, row.means)
        );
      }),
      React.createElement("p", { style: { fontSize: 13, lineHeight: 1.6, color: B.muted, margin: "14px 0 0", fontStyle: "italic" } }, c.tableClosing)
    ),

    React.createElement(Band, { from: BG_TABLE, to: BG_PHOTOS, height: 36 }),

    /* ======= SECTION 7: PRODUCT PHOTOS ======= */
    React.createElement("div", { style: { background: BG_PHOTOS, padding: "24px 14px 20px", display: "flex", gap: 8 } },
      [
        { src: IMG_CLOUD, label: "Cloud Raindrop" },
        { src: IMG_FOX, label: "Fox Woodland" },
        { src: IMG_PENGUIN, label: "Penguin Party" }
      ].map(function(img, i) {
        return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
          React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 130, objectFit: "cover" } }),
          React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
        );
      })
    ),

    React.createElement(Band, { from: BG_PHOTOS, to: BG_GUARANTEE, height: 36 }),

    /* ======= SECTION 8: GUARANTEE ======= */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "28px 22px 20px", textAlign: "center" } },
      React.createElement(Eyebrow, null, "Our promise"),
      React.createElement("h2", { style: { fontSize: 20, lineHeight: 1.3, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.2 } }, c.guaranteeTitle),
      /* 60-Day Seal */
      React.createElement("div", { style: { display: "inline-flex", width: 150, height: 150, borderRadius: "50%", border: "3px solid " + B.bkcGreen, background: "#FFFFFF", marginBottom: 18, flexDirection: "column", alignItems: "center", justifyContent: "center" } },
        React.createElement("div", { style: { fontSize: 9, fontWeight: 700, color: B.bkcGreen, textTransform: "uppercase", letterSpacing: 2 } }, "Calm Progress"),
        React.createElement("div", { style: { fontSize: 44, fontWeight: 900, color: B.bkcGreen, lineHeight: 1, marginTop: 2 } }, "60"),
        React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: B.ink, marginTop: 2 } }, "DAY"),
        React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: B.bkcGreen } }, "GUARANTEE"),
        React.createElement("div", { style: { fontSize: 9, color: B.muted, marginTop: 3 } }, "Full Refund / No Questions")
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.guaranteePara1),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.ink, margin: "0 0 14px", fontWeight: 600 } }, c.guaranteePara2),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.guaranteePara3),
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 10, padding: 16, textAlign: "left", marginTop: 8 } },
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.65, color: B.soft, margin: 0, fontStyle: "italic" } }, c.guaranteeQuote)
      )
    ),

    React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 40 }),

    /* ======= SECTION 9: CTA ======= */
    React.createElement("div", { style: { background: BG_CTA, padding: "28px 22px 36px", textAlign: "center" } },
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: B.ink, margin: "0 0 18px" } }, c.ctaIntro),
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "16px 32px", background: B.bkcGreen, color: "#FFFFFF", fontSize: 15, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, c.ctaButton + " \u2192")
    ),

    /* ======= SIGNOFF ======= */
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.PPExtendedE4L2 = PPExtendedE4L2;
