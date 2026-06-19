/* PP-Extended Upsell E3 (Flow 12, Email 3) -- Day 60
   Built from: ppupsell-12-e3.md
   Pattern: Giuliano reference
   Images: product photos (flat-lay)
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
window.SHARED = {
  signoff: {
    line1: "With care,",
    name: "Lena Bauer",
    ps: "My older son was 8 before he trained. At the 60-day mark with our first pair, I was still waiting for the first signal. It came at day 74, a pause, just a pause. But that pause changed everything. Wherever you are in this journey, you're not behind. You're exactly where your child needs you to be."
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
    React.createElement("h1", { style: { fontFamily: F.display, fontSize: 40, lineHeight: 1, fontWeight: 700, margin: 0, letterSpacing: -0.8 } },
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
  var s = window.SHARED.signoff;
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
          React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Customer Support \u00B7 Mom of two autistic sons")
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
    window.SHARED.out
  );
};

var Footer = function() {
  var f = window.SHARED.footer;
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

/* 4. EMAIL DATA */
var emailData = {
  preheader: "Two months of body-signal learning. Wherever you are on the journey, here's what comes next.",
  heroBadge: "Day 60 checkpoint",
  h1a: "60 days in.",
  h1b: "Here's what's happening.",
  hook: "Whether your child is showing their first small signs of awareness after two months, or you're still waiting for that first pause, the 60-day mark is a real milestone.",
  hook2: "Not because every child is trained by now. Most aren't.",
  hook3: "But because two months of consistent body-signal input is the point where the nervous system has had enough repetition to start building new pathways. Whether your child is 3 or 10, whether they're telling you \"wet\" with words or showing you with a gesture, whether you've seen one mini-win or zero, the signal work you've been doing matters.",
  validation: "If you're feeling something between \"we're making progress\" and \"we're still in pull-ups\", that's the exact middle ground most parents at this stage are in. Not failure. Not magic success. Real, honest, incremental work.",
  validation2: "Some parents tell us: \"He paused for the first time last week. That's never happened before.\" Others say: \"Nothing yet. I'm starting to wonder if this works for my child.\" Both are real. Both are welcome here. And both tell us your child's nervous system has been receiving information it was missing before, even if the visible results haven't caught up yet.",
  validation3: "This is the part of the journey where consistency matters most. The neural pathways are forming beneath the surface, like roots before a plant shows above ground.",
  mechanism: "Research on body signal learning shows that the first 4-8 weeks are about desensitization and signal detection, the brain learning to recognize a sensation it's been filtering out (Barmpagiannis & Baldimtsi 2025). The next 4-8 weeks are about signal-action coupling, the brain connecting \"I feel something\" to \"I should do something about it.\"",
  mechanism2: "Two months is the transition point between these phases for many children.",
  mechanismListA: "If you've seen ANY awareness sign, a pause, a look, a pull at the pants, a step toward the bathroom, the signal is working. The learning is happening. The next phase is about building that connection into action.",
  mechanismListB: "If you haven't seen a sign yet, your child's nervous system may need more repetition to register the signal. Some children need 8-12 weeks before the first observable moment. That's not a failure. That's neurology on its own timeline.",
  testimonialIntro: "Three parents. Three different kids. One shared experience at the 60-day mark.",
  testimonialClosing: "If any of these stories sound familiar, keep reading.",
  productIntro: "At the 60-day mark, the most effective thing you can do is maintain the signal environment and add tools that help your child connect the body signal to the action of using the potty.",
  productSub: "Whether you've seen progress or you're still building the foundation, these additions support the next phase:",
  upsell1Title: "If you started with 1 Pair:",
  upsell1Body: "The single biggest lever for accelerating progress is rotation. 6 pairs (the 3+3 Bundle, \u20AC79.99) means your child has a clean, signal-ready pair every single day, no gaps, no washing delays, no missed learning windows. Free shipping, same 60-day guarantee.",
  upsell2Title: "If you have the 3+3 Bundle:",
  upsell2Body: "The Potty Training Targets Pack adds a visual cue for the \"where\", giving the body signal a target to aim at. The Reward Chart creates a visible feedback loop for the mini-wins you're tracking. The E-book deepens your understanding of the interoception pathway at this stage. All three together for \u20AC24.99.",
  upsell3Title: "If you have the 5+5 Bundle:",
  upsell3Body: "The Targets Pack and Reward Chart expand the body-signal learning into a complete awareness system. The E-book includes the next-level tracking protocols for families who've already seen progress.",
  guarantee: "The 60-day guarantee has been with you from day one. It's still here.",
  guarantee2: "If your child has shown NO sign of body awareness, no pause, no look, no change in behavior, after two months of consistent wear, and you feel this approach isn't right for your family, you're covered. Full refund. No questions. No hassle.",
  guarantee3: "But before you decide, here's the honest truth: if you've seen even one small sign, the foundation is there. The next phase, signal-to-action coupling, typically takes 4-8 more weeks. The accessories we're recommending exist specifically to support that next phase. Not to sell you more, to give the learning the structure it needs to become lasting.",
  ctaIntro: "When you're ready to take the next step.",
  ctaButton1: "Explore the 3+3 Bundle, 6 pairs, free shipping, \u20AC79.99",
  ctaFine1: "That's \u20AC13.33 per pair with the bundle, less than half the single-pair price.",
  ctaButton2: "Build Your Next-Phase Kit, Targets Pack + Chart + E-book, \u20AC24.99",
  ctaFine2: "60-day guarantee / No questions / Real returns",
  ctaClosing: "No rush. The progress you've made, whatever it looks like, is real."
};

/* 5. PRODUCT IMAGES (embedded base64) */
/* Using relative paths for product photos */
var IMG_PANTS_CLOUD = "email-assets/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg";
var IMG_PANTS_FOX = "email-assets/product-photos/flat-lay/training-pant-fox-woodland-white.jpg";
var IMG_PANTS_PENGUIN = "email-assets/product-photos/flat-lay/training-pant-penguin-multicolor.jpg";
var IMG_TARGETS = "email-assets/product-photos/accessories/potty-targets-stickers-chart.png";
var IMG_BOOK = "email-assets/product-photos/accessories/book-potty-training-guide.png";

/* 6. PPUPSELL-12-E3 COMPONENT */
var PPUpsell12E3 = function() {
  var c = emailData;
  var BG_HERO = "#FFFBF0";
  var BG_LETTER = "#FFF6E2";
  var BG_VALIDATION = "#FFF6E2";
  var BG_MECHANISM = "#EAF6F2";
  var BG_SOCIAL = "#FFF6E2";
  var BG_PRODUCT = "#F0EDF8";
  var BG_GUARANTEE = "#FFFBF0";
  var BG_CTA = B.ink;

  var testimonials = [
    { text: "At day 45 I was ready to give up. Nothing was happening. Then at day 52, he stopped mid-play, looked down at his pants, and walked to the bathroom. He still doesn't tell me BEFORE, but he's feeling something now that he never felt before. That's more than we've gotten in 2 years of everything else.", name: "Rachel", desc: "Level 1 mom" },
    { text: "We saw our first mini-win at day 38, a pause, just a pause. My BCBA said to keep going, that the foundation was being laid. At day 55 he initiated twice. TWICE. After 4 years of nothing proactive. My BCBA is now recommending the underwear to other families on her caseload.", name: "Jenna", desc: "Level 2 mom" },
    { text: "I wasn't looking for 'trained.' I was hoping for one less pull-up change a day. At 60 days, he doesn't react to wetness the way neurotypical kids do, but he pauses now. Just a few seconds. Then continues playing. That pause is more than I've seen in 7 years. For us, that's everything.", name: "Tanya", desc: "Level 3 mom" }
  ];

  var accents = [B.teal, B.green, "#E8A23D"];

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    React.createElement(Header, { bg: BG_HERO }),

    React.createElement(TitleBlock, { badge: c.heroBadge, part1: c.h1a, part1b: c.h1b, part2: c.h1b }),

    React.createElement(Band, { from: BG_HERO, to: BG_LETTER }),

    /* Hook + Validation */
    React.createElement(Letter, { bg: BG_LETTER, first: c.hook, paras: [c.hook2, c.hook3, c.validation, c.validation2, c.validation3] }),

    React.createElement(Band, { from: BG_LETTER, to: BG_MECHANISM }),

    /* Mechanism */
    React.createElement("div", { style: { background: BG_MECHANISM, padding: "28px 22px 16px" } },
      React.createElement(Eyebrow, null, "The 60-Day Science Checkpoint"),
      React.createElement(H2, { size: 24 },
        "From signal ",
        React.createElement("span", { style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, "detection"),
        " to signal ",
        React.createElement("span", { style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 } }, "action"),
        "."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.mechanism),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px", fontWeight: 600 } }, c.mechanism2),

      /* Two-pathway breakdown */
      React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 14 } },
        React.createElement("div", { style: { flex: 1, background: "#FFFFFF", borderRadius: 14, padding: "16px 14px", border: "2px solid " + B.teal } },
          React.createElement("div", { style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 8 } }, "Seen a sign?"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.55, color: B.soft, margin: 0 } }, c.mechanismListA)
        ),
        React.createElement("div", { style: { flex: 1, background: "#FFFFFF", borderRadius: 14, padding: "16px 14px", border: "2px dashed " + B.muted } },
          React.createElement("div", { style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 8 } }, "No sign yet?"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.55, color: B.soft, margin: 0 } }, c.mechanismListB)
        )
      )
    ),

    React.createElement(Band, { from: BG_MECHANISM, to: BG_SOCIAL }),

    /* Testimonials */
    React.createElement("div", { style: { background: BG_SOCIAL, padding: "24px 14px 8px" } },
      React.createElement("div", { style: { padding: "0 8px", marginBottom: 18 } },
        React.createElement(Eyebrow, null, "Three families at 60 days"),
        React.createElement(H2, { size: 22 }, c.testimonialIntro)
      ),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
        testimonials.map(function(t, i) {
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

    React.createElement(Band, { from: BG_SOCIAL, to: BG_PRODUCT }),

    /* Product + Photos */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "28px 22px 16px" } },
      React.createElement(Eyebrow, null, "The next phase of your journey"),
      React.createElement(H2, { size: 22 }, c.productIntro),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.65, color: B.soft, margin: "0 0 16px" } }, c.productSub)
    ),

    /* 3 product photos */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "0 14px 20px", display: "flex", gap: 8 } },
      [
        { src: IMG_PANTS_CLOUD, label: "Cloud Raindrop" },
        { src: IMG_PANTS_FOX, label: "Fox Woodland" },
        { src: IMG_PANTS_PENGUIN, label: "Penguin Party" }
      ].map(function(img, i) {
        return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
          React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 140, objectFit: "cover" } }),
          React.createElement("div", { style: { padding: "8px 10px", fontSize: 11, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
        );
      })
    ),

    /* Upsell cards */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "0 14px 24px" } },
      /* Upsell 1: 1 Pair buyers -> 3+3 Bundle */
      React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid " + B.ink, borderRadius: 16, padding: "20px 18px", marginBottom: 12, boxShadow: "3px 3px 0 " + B.ink } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.teal, fontWeight: 700, marginBottom: 8 } }, c.upsell1Title),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.upsell1Body)
      ),
      /* Upsell 2: 3+3 Bundle buyers -> Accessories */
      React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid " + B.ink, borderRadius: 16, padding: "20px 18px", marginBottom: 12, boxShadow: "3px 3px 0 " + B.ink } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.green, fontWeight: 700, marginBottom: 8 } }, c.upsell2Title),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.upsell2Body)
      ),
      /* Upsell 3: 5+5 Bundle buyers -> Accessories */
      React.createElement("div", { style: { background: "#FFFFFF", border: "2px dashed " + B.muted, borderRadius: 16, padding: "20px 18px", boxShadow: "3px 3px 0 " + B.ink } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 8 } }, c.upsell3Title),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.upsell3Body)
      )
    ),

    React.createElement(Band, { from: BG_PRODUCT, to: BG_GUARANTEE }),

    /* Guarantee */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "28px 22px 32px", textAlign: "center" } },
      React.createElement(Eyebrow, null, "Our promise"),
      React.createElement(H2, { size: 26, center: true },
        "The ",
        React.createElement("span", { style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" } }, "60-Day"),
        " Calm Progress Guarantee."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.65, color: B.soft, margin: "0 0 12px", fontWeight: 600 } }, c.guarantee),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.65, color: B.soft, margin: "0 0 12px" } }, c.guarantee2),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.65, color: B.soft, margin: "0 0 20px", fontStyle: "italic" } }, c.guarantee3),
      React.createElement("div", { style: { display: "inline-flex", flexDirection: "column", alignItems: "center", width: 160, height: 160, background: "#FFFFFF", borderRadius: "50%", border: "3px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink, justifyContent: "center" } },
        React.createElement("div", { style: { fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 } }, "Protected by"),
        React.createElement("div", { style: { fontSize: 48, fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" } }, "60"),
        React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: B.ink, marginTop: 2 } }, "Calm Days"),
        React.createElement("div", { style: { fontSize: 10, color: B.soft, marginTop: 4 } }, "Full refund / No questions")
      )
    ),

    React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 50 }),

    /* CTA block */
    React.createElement("div", { style: { background: BG_CTA, padding: "24px 22px 44px", textAlign: "center", color: "#FFF" } },
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 20px" } }, c.ctaIntro),

      /* Primary CTA for 1-pair buyers */
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 28px", background: "#D8F57C", color: B.ink, fontSize: 14, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3, marginBottom: 12 } }, c.ctaButton1 + " \u2192"),
      React.createElement("div", { style: { fontSize: 11.5, color: "#8A9B9D", marginBottom: 20 } }, c.ctaFine1),

      /* Secondary CTA for bundle buyers */
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "14px 24px", background: "transparent", color: "#D8F57C", fontSize: 13, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3, border: "2px solid #D8F57C", marginBottom: 16 } }, c.ctaButton2 + " \u2192"),

      React.createElement("div", { style: { fontSize: 12, color: "#B8CACD", marginTop: 8, fontStyle: "italic" } }, c.ctaClosing),
      React.createElement("div", { style: { marginTop: 14, fontSize: 11.5, color: "#8A9B9D" } }, c.ctaFine2)
    ),

    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.PPUpsell12E3 = PPUpsell12E3;
