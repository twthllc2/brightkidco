/* Winback B — E3 (GF — Inclusive / All Levels)
   Flow: Winback Path B, Never-Bought (60 days no purchase)
   Email Position: E3, Day 74 (Final Soft Invitation)
   Variant: GF (General Fallback, Inclusive for All Levels)
   Voice: Lena S. · Customer Support · Mom of two autistic sons
*/

/* 1. BRAND TOKENS — Winback-specific palette */
window.BRAND = {
  cream: "#FBF7EB",
  darkGray: "#2D2D2D",
  medGray: "#4A4A4A",
  brandGreen: "#039902",
  brandMint: "#DBFFCD",
  warmLight: "#FFF8F0",
  footerGray: "#9AA8A7",
  white: "#FFFFFF",
  gradient: "linear-gradient(135deg, #039902 0%, #2BAEB4 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #039902 0%, #2BAEB4 100%)",
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
    line1: "With care,",
    name: "Lena",
    ps: "My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment."
  },
  out: "Reply to this email. Lena reads every response.",
  footer: {
    tagline: "Calm progress, one day at a time.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo LLC · support@brightkidco.com"
  }
};

/* 2. PRIMITIVES */
var MW = 420;
var B = window.BRAND;
var F = window.FONT;

var EmailShell = function(props) {
  return React.createElement("div", { style: { width: MW, background: props.bg, fontFamily: F.main, color: B.darkGray } },
    React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: B.footerGray, background: B.warmLight, textAlign: "center", fontStyle: "italic" } }, props.preheader),
    props.children
  );
};

var Header = function(props) {
  return React.createElement("div", { style: { background: props.bg, padding: "24px 20px 0", textAlign: "center" } },
    React.createElement("img", { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#039902">BrightKidCo</text></svg>'), alt: "BrightKidCo", style: { height: 34 } })
  );
};

var Band = function(props) {
  var height = props.height || 36;
  return React.createElement("div", { style: { height: height, background: "linear-gradient(180deg, " + props.from + " 0%, " + props.to + " 100%)" } });
};

var Eyebrow = function(props) {
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.brandGreen, fontWeight: 700, marginBottom: 10 } }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", { style: { fontSize: props.size || 24, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left", color: B.darkGray } }, props.children);
};

var GradientSpan = function(props) {
  return React.createElement("span", { style: { background: "linear-gradient(135deg, #039902 0%, #2BAEB4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, props.children);
};

/* 3. EMBEDDED IMAGES — placeholder vars (replaced at build time) */
var IMG_CLOUD = "CLOUD_PLACEHOLDER";
var IMG_FOX = "FOX_PLACEHOLDER";
var IMG_PENGUIN = "PENGUIN_PLACEHOLDER";
var IMG_WATERMELON = "WATERMELON_PLACEHOLDER";

/* 4. EMAIL DATA */
var emailData = {
  preheader: "If your child's situation ever changes, or if today just isn't the day, the door's always open.",
  headline: "One last thing before I go quiet",
  section1: [
    "Whether your child is 3 and just starting to show signs of resistance, or 10 and you've stopped counting the attempts, if they don't seem to feel when they need to go, you've been trying to solve a problem that standard methods weren't built for.",
    "This my last email in this series. Not because the door closes, because I don't believe in filling your inbox with noise when you've already had enough on your plate.",
    "I want to leave you with one thing."
  ],
  pullQuote: "Nearly half of autistic 4-5 year olds, 49%, aren't toilet trained yet.",
  pullQuoteSource: "Wiggins et al. 2022, CDC-funded SEED-2 study of 743 children",
  section2: [
    "You've probably thought some version of: \"What am I doing wrong?\" Or \"Why can't I figure this out?\" Or maybe you've moved past that entirely and just accepted this how things are.",
    "Let me be clear: the research says something different than what you've probably internalized.",
    "That's 6 times the rate of typically developing kids the same age.",
    "And a 2025 review of 49 scientific studies confirmed that body signal differences, the ability to feel body signals like a full bladder, are a well-established feature of autism (Barmpagiannis & Baldimtsi 2025). Thisn't a theory. It's settled science.",
    "You didn't fail. The methods were solving the wrong problem."
  ],
  section3: [
    "Here's the piece most parents never hear:",
    "Standard potty training, sticker charts, timer sits, reward systems, all assume your child can feel the \"I need to go\" signal. For kids whose nervous systems process body signals differently, that signal arrives too late or doesn't arrive at all.",
    "The Body-Signal Learning Layer (BSL) doesn't change your child. It gives their brainformation it's been missing. A gentle sensation that lasts, 30 to 60 seconds, that bridges the gap between \"something is happening\" and \"I know what to do about it.\"",
    "Interoception researcher Kelly Mahler calls it the \"eighth sensory system\", the sense that tells us when we're hungry, thirsty, or need the bathroom. For autistic children, this sense works differently (Mahler 2016).",
    "And here's what gives me genuine hope: interoception can be trained. An 8-week study showed autistic children's body awareness significantly improved with structured practice noticing internal signals (Hample, Mahler & Amspacher 2020).",
    "It's not permanent. It's not a life sentence. It's a gap that can be bridged."
  ],
  miniWins: [
    { icon: "\uD83D\uDC40", text: "Look at the wet spot" },
    { icon: "\uD83D\uDC57", text: "Pull at pants" },
    { icon: "\u23F8", text: "Pause before" },
    { icon: "\u23F1", text: "Stay dry 2hrs" },
    { icon: "\uD83D\uDEAB", text: "No meltdown" },
    { icon: "\uD83D\uDC46", text: "Show a gesture" }
  ],
  miniWinSuccess: [
    ", He looks at the wet spot for the first time after it happens",
    ", She pulls at her pants when she feels something, not before, but after",
    ", He pauses. Just pauses. Before an accident",
    ", She stays dry for 2 hours instead of 30 minutes",
    ", He doesn't melt down when you bring him to the bathroom",
    ", She shows you with a gesture, pointing, tugging, looking down"
  ],
  miniWinClosing: "These aren't failures. These are the first signals arriving. For some kids, that first pause happens in 2 weeks. For others, it takes 8 weeks. Both are normal.",
  miniWinQuotes: [
    "He paused. He felt something.",
    "He looked down at the wet spot for the first time in 9 years."
  ],
  miniWinQuotesClosing: "These are real wins. Not because they mean the journey is over, but because they mean the journey has started.",
  offerIntro: "If you've read this far and something clicked, if you recognized your child in any of those descriptions, the product is here. Always has been, always will be.",
  bundleName: "The 3+3 Bundle",
  bundleDesc: "6 pairs of Body-Signal Learning Underwear",
  bundlePrice: "\u20AC79.99",
  bundleSaving: "62% off the single-pair price, about \u20AC13 per pair.",
  bundlePerPair: "That's \u20AC13.33 per pair with the bundle, less than half the single-pair price.",
  singleName: "1 Pair",
  singlePrice: "\u20AC34.99",
  singleDesc: "Add it alongside whatever you're currently doing. No replacement of anything. Just an addition.",
  guaranteeTitle: "60 days to try it. By your judgment.",
  guaranteeBody: "If your child shows no sign of body awareness, no pause, no look, no step toward the potty, no gesture, full refund. No forms. No questions. That's not a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.",
  section5: [
    "If today isn't the day, I mean that.",
    "I have two autistic sons. One trained at 6. The other took us until he was almost 8. I took breaks. I stepped back. I know what it's like when \"later\" turns into another year.",
    "But I also know what it's like to find something that finally makes sense. Not because it promises everything, but because it explains why nothing else worked.",
    "When you're ready, the science will still be here. So will I."
  ],
  ctaIntro: "Try it for 60 days, your judgment",
  ctaButton: "Try it for 60 days, your judgment",
  ctaUrl: "brightkidco.com/products/3-3-bundle",
  ctaFinePrint: "60-day guarantee \u00B7 No questions \u00B7 Real returns",
  signoffLine: "With care,",
  signoffName: "Lena",
  signoffTitle: "Customer Support \u00B7 Mom of two autistic sons",
  signoffPS: "My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.",
  footerCompliance: "You're receiving this email because you signed up at BrightKidCo. If you'd prefer not to hear from us anymore, you can unsubscribe here.",
  footerAddress: "BrightKidCo LLC \u00B7 support@brightkidco.com"
};

/* 5. WINBACK B E3 COMPONENT */
var WinbackBE3 = function() {
  var c = emailData;
  var BG_HERO = B.cream;
  var BG_BODY = B.cream;
  var BG_PULLQUOTE = B.brandMint;
  var BG_MINIWINS = B.warmLight;
  var BG_OFFER = B.cream;
  var BG_CTA = B.darkGray;

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= HEADLINE ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "28px 22px 16px", textAlign: "center" } },
      React.createElement("h1", { style: { fontSize: 28, lineHeight: 1.3, fontWeight: 400, margin: "0 0 16px", color: B.darkGray, fontFamily: F.main } }, c.headline)
    ),

    /* ======= SECTION 1: HOOK ======= */
    React.createElement("div", { style: { background: BG_BODY, padding: "0 22px 20px" } },
      c.section1.map(function(p, i) {
        return React.createElement("p", { key: i, style: { fontSize: 16, lineHeight: 1.6, color: B.medGray, margin: "0 0 14px", fontFamily: F.main } }, p);
      })
    ),

    React.createElement(Band, { from: BG_BODY, to: BG_PULLQUOTE, height: 36 }),

    /* ======= PULL QUOTE: 49% Stat ======= */
    React.createElement("div", { style: { background: BG_PULLQUOTE, padding: "40px 22px", textAlign: "center" } },
      React.createElement("div", { style: { fontSize: 48, fontWeight: 700, color: B.brandGreen, lineHeight: 1, marginBottom: 12, fontFamily: F.main } }, "49%"),
      React.createElement("p", { style: { fontSize: 20, lineHeight: 1.4, color: B.darkGray, margin: "0 0 8px", fontStyle: "italic", fontFamily: F.main } }, "of autistic 4-5 year olds aren't toilet trained yet."),
      React.createElement("div", { style: { fontSize: 11, color: B.medGray, marginTop: 8 } }, c.pullQuoteSource)
    ),

    React.createElement(Band, { from: BG_PULLQUOTE, to: BG_BODY, height: 36 }),

    /* ======= SECTION 2: VALIDATION + SCIENCE ======= */
    React.createElement("div", { style: { background: BG_BODY, padding: "0 22px 20px" } },
      c.section2.map(function(p, i) {
        var isBold = i === 4;
        return React.createElement("p", { key: i, style: { fontSize: 16, lineHeight: 1.6, color: isBold ? B.darkGray : B.medGray, margin: "0 0 14px", fontWeight: isBold ? 600 : 400, fontFamily: F.main } }, p);
      }),
      /* Stat highlight boxes */
      React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 8, marginBottom: 8 } },
        [
          { num: "49%", label: "not toilet trained" },
          { num: "6\u00D7", label: "the rate" },
          { num: "49", label: "studies confirmed" }
        ].map(function(s, i) {
          return React.createElement("div", { key: i, style: { flex: 1, background: B.white, border: "1px solid " + B.brandMint, borderRadius: 12, padding: "14px 8px", textAlign: "center" } },
            React.createElement("div", { style: { fontSize: 24, fontWeight: 700, color: B.brandGreen, lineHeight: 1 } }, s.num),
            React.createElement("div", { style: { fontSize: 10, color: B.medGray, marginTop: 4 } }, s.label)
          );
        })
      )
    ),

    React.createElement(Band, { from: BG_BODY, to: B.warmLight, height: 36 }),

    /* ======= SECTION 3: MECHANISM (BSL Layer) ======= */
    React.createElement("div", { style: { background: B.warmLight, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "What the research says"),
      React.createElement(H2, { size: 22 }, "The body-signal gap"),
      c.section3.slice(1).map(function(p, i) {
        return React.createElement("p", { key: i, style: { fontSize: 16, lineHeight: 1.6, color: B.medGray, margin: "0 0 14px", fontFamily: F.main } }, p);
      }),
      /* Kelly Mahler callout */
      React.createElement("div", { style: { background: B.white, borderRadius: 12, padding: 16, borderLeft: "4px solid " + B.brandGreen, marginTop: 12 } },
        React.createElement("div", { style: { fontSize: 13, color: B.medGray, lineHeight: 1.5 } },
          React.createElement("span", { style: { color: B.brandGreen, fontWeight: 700 } }, "Interoception"),
          ", the \"eighth sensory system\" (Mahler 2016). The sense that tells us when we're hungry, thirsty, or need the bathroom."
        )
      )
    ),

    React.createElement(Band, { from: B.warmLight, to: BG_BODY, height: 36 }),

    /* ======= SECTION 4: MINI-WIN GRID ======= */
    React.createElement("div", { style: { background: BG_BODY, padding: "0 22px 16px" } },
      React.createElement(Eyebrow, null, "What progress actually looks like"),
      React.createElement(H2, { size: 20 }, "Success isn't \"fully trained in 30 days.\""),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.medGray, margin: "0 0 16px" } }, "Success is:"),

      /* 3x2 Mini-Win Grid */
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 } },
        c.miniWins.map(function(w, i) {
          return React.createElement("div", { key: i, style: { background: B.white, border: "1px solid " + B.brandMint, borderRadius: 12, padding: "14px 8px", textAlign: "center" } },
            React.createElement("div", { style: { fontSize: 28, marginBottom: 6 } }, w.icon),
            React.createElement("div", { style: { fontSize: 12, lineHeight: 1.3, color: B.medGray } }, w.text)
          );
        })
      ),

      /* Mini-win success descriptions */
      c.miniWinSuccess.map(function(item, i) {
        return React.createElement("p", { key: i, style: { fontSize: 14, lineHeight: 1.5, color: B.medGray, margin: "0 0 6px", paddingLeft: 8 } }, item);
      }),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.medGray, margin: "14px 0" } }, c.miniWinClosing),

      /* Parent quotes */
      c.miniWinQuotes.map(function(q, i) {
        return React.createElement("div", { key: i, style: { background: B.brandMint, borderRadius: 12, padding: "14px 16px", marginBottom: 10 } },
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.5, color: B.darkGray, margin: 0, fontStyle: "italic" } },
            "\u201C" + q + "\u201D"
          )
        );
      }),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.medGray, margin: "8px 0 0" } }, c.miniWinQuotesClosing)
    ),

    React.createElement(Band, { from: BG_BODY, to: BG_OFFER, height: 36 }),

    /* ======= SECTION 5: OFFER + GUARANTEE ======= */
    React.createElement("div", { style: { background: BG_OFFER, padding: "0 22px 20px" } },
      React.createElement(Eyebrow, null, "The last invitation"),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.6, color: B.medGray, margin: "0 0 16px" } }, c.offerIntro),

      /* Bundle offer */
      React.createElement("div", { style: { background: B.white, border: "2px solid " + B.brandMint, borderRadius: 16, padding: "18px 16px", marginBottom: 14 } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: B.brandGreen, fontWeight: 700, marginBottom: 6 } }, c.bundleName),
        React.createElement("p", { style: { fontSize: 14, color: B.medGray, margin: "0 0 8px" } }, c.bundleDesc),
        React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8 } },
          React.createElement("span", { style: { fontSize: 28, fontWeight: 700, color: B.darkGray } }, c.bundlePrice),
          React.createElement("span", { style: { fontSize: 13, color: B.brandGreen } }, "free shipping")
        ),
        React.createElement("p", { style: { fontSize: 13, color: B.medGray, margin: "6px 0 0" } }, c.bundleSaving),
        React.createElement("p", { style: { fontSize: 13, color: B.brandGreen, margin: "4px 0 0", fontWeight: 600 } }, c.bundlePerPair)
      ),

      /* Single pair */
      React.createElement("div", { style: { background: B.white, border: "1px solid " + B.brandMint, borderRadius: 12, padding: "14px 16px", marginBottom: 16 } },
        React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 } },
          React.createElement("span", { style: { fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: B.medGray, fontWeight: 700 } }, c.singleName),
          React.createElement("span", { style: { fontSize: 22, fontWeight: 700, color: B.darkGray } }, c.singlePrice)
        ),
        React.createElement("p", { style: { fontSize: 13, color: B.medGray, margin: 0 } }, c.singleDesc)
      ),

      /* Guarantee */
      React.createElement("div", { style: { background: B.white, borderRadius: 12, padding: "16px", textAlign: "center", border: "2px dashed " + B.brandMint } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: B.brandGreen, fontWeight: 700, marginBottom: 6 } }, "Our promise"),
        React.createElement("p", { style: { fontSize: 16, fontWeight: 700, color: B.darkGray, margin: "0 0 8px" } }, c.guaranteeTitle),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.medGray, margin: 0, fontStyle: "italic" } }, c.guaranteeBody)
      )
    ),

    React.createElement(Band, { from: BG_OFFER, to: BG_CTA, height: 50 }),

    /* ======= CTA ======= */
    React.createElement("div", { style: { background: BG_CTA, padding: "20px 22px 44px", textAlign: "center" } },
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: B.brandGreen, color: B.white, fontSize: 16, fontWeight: 700, textDecoration: "none", borderRadius: 8, letterSpacing: 0.3, boxShadow: "0px 3px 6px rgba(0,0,0,0.1)" } }, c.ctaButton),
      React.createElement("div", { style: { marginTop: 16, fontSize: 11.5, color: B.footerGray } }, c.ctaFinePrint)
    ),

    /* ======= SECTION 6: FINAL WORD ======= */
    React.createElement("div", { style: { background: BG_CTA, padding: "0 22px 28px" } },
      c.section5.map(function(p, i) {
        return React.createElement("p", { key: i, style: { fontSize: 15, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 12px" } }, p);
      })
    ),

    /* ======= LENA SIGN-OFF (LONG VARIANT) ======= */
    React.createElement("div", { style: { background: BG_CTA, padding: "0 22px 36px" } },
      React.createElement("div", { style: { position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40", borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden" } },
        React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(135deg, #039902 0%, #2BAEB4 100%)", opacity: 0.9 } }),
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 } },
          React.createElement("div", { style: { width: 58, height: 58, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)", padding: 2.5 } },
            React.createElement("div", { style: { width: "100%", height: "100%", borderRadius: "50%", background: "#FFFDF6", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1.5px solid #1F2D2F" } },
              React.createElement("svg", { width: 58, height: 58, viewBox: "0 0 58 58" },
                React.createElement("rect", { width: 58, height: 58, fill: "#F5E8D0" }),
                React.createElement("circle", { cx: 29, cy: 22, r: 10, fill: "#D4A574" }),
                React.createElement("path", { d: "M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z", fill: "#C98C6B" })
              )
            )
          ),
          React.createElement("div", { style: { flex: 1, minWidth: 0 } },
            React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 } }, "A note from"),
            React.createElement("div", { style: { fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 } }, "Lena"),
            React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Customer Support \u00B7 Mom of two autistic sons")
          )
        ),
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547", marginBottom: 16 } },
          React.createElement("div", { style: { flex: 1 } },
            React.createElement("div", { style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 } }, "With care,"),
            React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2 } }, "Lena")
          ),
          React.createElement("svg", { width: 54, height: 40, viewBox: "0 0 54 40", style: { flexShrink: 0, opacity: 0.55 } },
            React.createElement("path", { d: "M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round" }),
            React.createElement("path", { d: "M48,12 L52,10 L50,14", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
          )
        ),
        React.createElement("div", { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" } },
          React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
          c.signoffPS
        )
      )
    ),

    /* ======= OUTLINE ======= */
    React.createElement("div", { style: { background: B.darkGray, padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: B.footerGray, fontStyle: "italic" } },
      window.FLOW1_SHARED.out
    ),

    /* ======= FOOTER ======= */
    React.createElement("div", { style: { background: B.white, padding: "30px 24px 30px", textAlign: "center" } },
      React.createElement("div", { style: { fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500, color: B.darkGray, marginBottom: 30, letterSpacing: -0.2 } }, "Calm progress, one day at a time."),
      React.createElement("div", { style: { fontSize: 14, color: B.darkGray, fontWeight: 500, marginBottom: 14 } },
        React.createElement("a", { href: "#", style: { color: B.darkGray, textDecoration: "none" } }, "Our Method")
      ),
      React.createElement("div", { style: { fontSize: 14, color: B.darkGray, fontWeight: 500, marginBottom: 14 } },
        React.createElement("a", { href: "#", style: { color: B.darkGray, textDecoration: "none" } }, "Shop the Pants")
      ),
      React.createElement("div", { style: { fontSize: 14, color: B.darkGray, fontWeight: 500, marginBottom: 14 } },
        React.createElement("a", { href: "#", style: { color: B.darkGray, textDecoration: "none" } }, "Parent Stories")
      ),
      React.createElement("div", { style: { fontSize: 11.5, color: B.footerGray, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 } },
        c.footerCompliance,
        React.createElement("br"),
        React.createElement("span", { style: { fontSize: 11 } }, c.footerAddress)
      ),
      React.createElement("div", { style: { margin: "28px auto 0", width: 60, height: 3, background: "linear-gradient(135deg, #039902 0%, #2BAEB4 100%)", borderRadius: 3 } })
    )
  );
};

window.WinbackBE3 = WinbackBE3;
