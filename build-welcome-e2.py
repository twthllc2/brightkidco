#!/usr/bin/env python3
"""Build welcome-e2-l1.jsx from component library patterns and copy."""
import base64, os

PHOTO_DIR = "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay"
OUTPUT_JSX = "/root/projects/brightkidco/outputs/welcome-e2-l1.jsx"

# Encode images
def b64img(path):
    with open(path, "rb") as f:
        data = base64.b64encode(f.read()).decode()
    ext = path.rsplit(".", 1)[-1].lower()
    mime = "image/jpeg" if ext in ("jpg", "jpeg") else "image/png"
    return f"data:{mime};base64,{data}"

img_cloud = b64img(f"{PHOTO_DIR}/training-pant-cloud-raindrop-white.jpg")
img_fox = b64img(f"{PHOTO_DIR}/training-pant-fox-woodland-white.jpg")
img_penguin = b64img(f"{PHOTO_DIR}/training-pant-penguin-multicolor.jpg")
img_bunny = b64img(f"{PHOTO_DIR}/training-pant-bunny-hearts-pink.jpg")
img_watermelon = b64img(f"{PHOTO_DIR}/training-pant-watermelon-pink.jpg")

jsx = r'''/* Welcome Flow E2 — Level 1 (Sarah)
   Built from: welcome-01-e2-l1.md
   Pattern: 950-component library
   Images: 5 embedded product photos
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

var H2 = function(props) {
  return React.createElement("h2", { style: { fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left", fontFamily: F.display } }, props.children);
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

/* 4. EMBEDDED IMAGES */
var IMG_CLOUD = "''' + img_cloud + '''";
var IMG_FOX = "''' + img_fox + '''";
var IMG_PENGUIN = "''' + img_penguin + '''";
var IMG_BUNNY = "''' + img_bunny + '''";
var IMG_WATERMELON = "''' + img_watermelon + '''";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "You didn't fail. The method assumes your child feels the 'I need to go' signal, here's what's really happening.",
  heroBadge: "The real reason",
  heroHighlight: "didn't work",
  heroPrefix: "Oh Crap",

  /* Hook */
  hook: "Oh Crap stressed you both out. Sticker charts didn't stick. Timer sits became a battle.",

  /* Failed Methods */
  failedIntro: "You did everything the books and the internet told you.",
  failedItems: [
    "You set timers.",
    "You offered M&Ms.",
    "You did the naked weekend.",
    "It held for eight hours, then peed on the rug."
  ],
  failedCore: "You've tried 1-3 methods so far, and every single one assumed the same thing: that your child can feel when he needs to go.",
  failedPunch: "He can't.",
  failedExplain: "Not because he's stubborn. Not because you're doing it wrong. Because the \"I need to pee\" signal, that internal body sensation most of us take for granted, doesn't arrive in time for many autistic children.",

  /* Validation */
  validationHeadline: "You didn't fail. The methods did.",
  validationBody: "Oh Crap, sticker charts, timer sits, they all share a hidden assumption. They assume your child's nervous system sends the \"I need to go\" feeling loud and clear, and the only problem is getting him to the potty in time.",
  validationReframe: "But for many autistic children, that signal is delayed or absent entirely. By the time his brain registers the message, it's already happening.",
  validationPunchline: "That's not defiance. That's neurology.",

  /* Mechanism Deep */
  mechanismName: "The interoception gap",
  mechanismExplain: "The space between your child's body sending a signal and his brain receiving it.",
  mechanismDetail: "The signal arrives, but milliseconds or minutes too late. That's why timed methods don't work: you can't build awareness with a clock. You need a signal, a real, physical cue that his nervous system can recognize before the event.",
  mechanismSolution: "The body-signal underwear creates a gentle sensation that lasts, 30 to 60 seconds of feedback, that bridges that gap.",

  /* Social Proof */
  socialQuote1: "He says 'I need to pee' AFTER it's already happened.",
  socialSource1: "L1 parent",
  socialQuote2: "Some days he's great, other days zero.",
  socialSource2: "L1 parent",
  socialQuote3: "Is this interoception or stubbornness? That's the question I kept asking.",
  socialSource3: "L1 parent",
  socialClosing: "Every mom who's been where you are now will tell you the same thing: once you understand the gap, everything changes. Not because the methods get better, because you finally stop fighting the wrong problem.",

  /* Product Introduction */
  productHeadline: "Teach the brain to feel the signal before it's too late.",
  productLayer1: "Gentle, sensory-friendly fabric that creates a soft \"uh-oh\" sensation, not the instant absorbency of a pull-up that wicks everything away",
  productLayer2: "Protects furniture and floors without blocking the learning signal. Enough absorbency for accidents, never enough to let the brain ignore what happened",
  productLayer3: "Outer protection for confident wear, at home, at daycare, in the Pre-K classroom",
  productBundle: "The 3+3 Bundle gives you 6 pairs, enough for a full rotation of body-signal learning underwear. No more pull-ups that keep your child \"too dry to learn.\" No more soggy cotton training pants that teach nothing.",

  /* Guarantee */
  guaranteeIntro: "You don't have to believe the science. You just have to try it.",
  guaranteeDetail: "60 days. By your judgment. If your child shows no sign of body awareness, no pause, no look, no step toward the potty, full refund. No questions. No forms.",
  guaranteeClosing: "The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.",
  guaranteeUrgency: "And Pre-K is coming. Every week of body-signal learning is a week closer to closing that gap.",

  /* CTA */
  ctaUrgency: "Pre-K prep starts here",
  ctaIntro: "Shop the 3+3 Bundle",
  ctaButton: "See the Body-Signal System in Action",
  ctaPrice: "€79.99 with free shipping",
  ctaValue: "That's €13.33 per pair with the bundle, less than half the single-pair price.",
  ctaSecondary: "Learn how 6 pairs build the learning rotation",

  /* Next Email Teaser */
  nextTeaser: "Next time: The research behind the body-signal approach, and why 49% of children face this gap."
};

/* 6. WELCOME E2 L1 COMPONENT */
var WelcomeE2L1 = function() {
  var c = emailData;

  /* Background colors per section */
  var BG_HERO = "#FBF7F1";
  var BG_FAILED = "#F2E6DF";
  var BG_VALIDATION = "#EAF6F2";
  var BG_MECHANISM = "#F0EDF8";
  var BG_SOCIAL = "#FBF7F1";
  var BG_PRODUCT = "#FFF6E2";
  var BG_PHOTOS = "#FFFFFF";
  var BG_GUARANTEE = "#FBF7F1";
  var BG_CTA = B.ink;

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= SECTION 1: HOOK (HERO-16 pattern: Mechanism Tease) ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "32px 24px 16px", textAlign: "center" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 16 } },
        React.createElement("span", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, c.heroBadge)
      ),
      React.createElement("h1", { style: { fontFamily: F.display, fontSize: 26, lineHeight: 1.3, color: B.ink, margin: "0 0 16px" } },
        c.heroPrefix, " ",
        React.createElement(GradientSpan, null, c.heroHighlight)
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0, textAlign: "left" } }, c.hook)
    ),

    React.createElement(Band, { from: BG_HERO, to: BG_FAILED, height: 36 }),

    /* ======= SECTION 2: FAILED METHODS (DEEP-15 pattern: Method Graveyard) ======= */
    React.createElement("div", { style: { background: BG_FAILED, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#8B5E5E" }, "The methods that didn't work"),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 16, lineHeight: 1.6, color: B.ink, margin: "0 0 12px" } }, c.failedIntro),

      /* Strikethrough graveyard stones */
      c.failedItems.map(function(item, i) {
        var rotations = [-2, 1.5, -1, 2];
        return React.createElement("div", { key: i, style: { background: "#E8E8E8", padding: "10px 16px", borderRadius: 4, transform: "rotate(" + rotations[i % 4] + "deg)", marginBottom: 8, display: "inline-block", marginRight: 8 } },
          React.createElement("p", { style: { margin: 0, fontSize: 13, color: "#999", textDecoration: "line-through" } }, item)
        );
      }),

      React.createElement("div", { style: { marginTop: 16 } },
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 10px" } }, c.failedCore),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 28, fontWeight: 700, color: B.ink, margin: "0 0 10px", textAlign: "center" } }, c.failedPunch),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0 } }, c.failedExplain)
      )
    ),

    React.createElement(Band, { from: BG_FAILED, to: BG_VALIDATION, height: 36 }),

    /* ======= SECTION 3: VALIDATION (STORY-09 pattern: The Reframe) ======= */
    React.createElement("div", { style: { background: BG_VALIDATION, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "The reframe"),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 22, fontWeight: 600, color: B.ink, margin: "0 0 16px", textAlign: "center", lineHeight: 1.3 } }, "What you've been told vs. what's actually happening"),

      /* Reframe card: What we hear (strikethrough) */
      React.createElement("div", { style: { marginBottom: 12 } },
        React.createElement("div", { style: { background: "#F5EDED", borderRadius: "12px 12px 0 0", padding: "14px 16px" } },
          React.createElement("div", { style: { fontFamily: F.display, fontSize: 11, color: "#8B5E5E", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 } }, "What we hear"),
          React.createElement("p", { style: { fontSize: 14, color: B.ink, lineHeight: 1.5, margin: 0, textDecoration: "line-through", textDecorationColor: "#8B5E5E", textDecorationThickness: 1 } }, "Your child can feel it, he's just not listening. Try harder.")
        ),
        React.createElement("div", { style: { background: "#EAF6F2", borderRadius: "0 0 12px 12px", padding: "14px 16px" } },
          React.createElement("div", { style: { fontFamily: F.display, fontSize: 11, color: B.teal, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 } }, "What's actually happening"),
          React.createElement("p", { style: { fontSize: 14, color: B.ink, lineHeight: 1.5, margin: 0, fontWeight: 500 } }, c.validationBody)
        )
      ),

      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "12px 0" } }, c.validationReframe),

      /* Highlight box */
      React.createElement("div", { style: { background: B.teal, borderRadius: 8, padding: 18, textAlign: "center" } },
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 18, color: "#FBF7F1", margin: 0, lineHeight: 1.5 } }, c.validationPunchline)
      )
    ),

    React.createElement(Band, { from: BG_VALIDATION, to: BG_MECHANISM, height: 36 }),

    /* ======= SECTION 4: MECHANISM DEEP (ED3 pattern: Interoception Explainer) ======= */
    React.createElement("div", { style: { background: BG_MECHANISM, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#7A5FA8" }, "The science"),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: "0 0 4px" } }, c.mechanismName),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.ink, margin: "0 0 12px", fontStyle: "italic" } }, c.mechanismExplain),

      /* Stat callout */
      React.createElement("div", { style: { background: "#FFF", borderRadius: 10, padding: "14px 16px", border: "1px solid rgba(43,174,180,0.2)", marginBottom: 12 } },
        React.createElement("div", { style: { fontSize: 13, color: B.soft, lineHeight: 1.5 } },
          React.createElement("span", { style: { color: B.teal, fontWeight: 700 } }, "49%"),
          " of autistic children show interoception differences that affect daily functioning."
        ),
        React.createElement("div", { style: { fontSize: 10, color: B.muted, marginTop: 6, fontStyle: "italic" } }, "Research compilation, multiple studies")
      ),

      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 12px" } }, c.mechanismDetail),

      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 600 } }, c.mechanismSolution)
    ),

    React.createElement(Band, { from: BG_MECHANISM, to: BG_SOCIAL, height: 36 }),

    /* ======= SECTION 5: CTA 1 (CTA-1 pattern: after "aha" moment) ======= */
    React.createElement("div", { style: { background: BG_SOCIAL, padding: "0 14px 20px" } },
      React.createElement("div", { style: { background: "#1F2D2F", borderRadius: 14, padding: "28px 24px", textAlign: "center" } },
        React.createElement("p", { style: { fontFamily: "'Caveat', cursive", fontSize: 18, color: "#D8F57C", marginBottom: 4 } }, "no pressure, just options"),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 22, fontWeight: 700, color: "#FBF7F1", marginBottom: 16 } }, c.ctaButton),
        React.createElement("a", { href: "#", style: { display: "inline-block", background: B.teal, color: "#FBF7F1", fontFamily: F.main, fontSize: 15, fontWeight: 400, textDecoration: "none", padding: "14px 36px", borderRadius: 10, letterSpacing: 0.3 } }, c.ctaPrice + " \u2192"),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 12, color: "#6B7C7E", marginTop: 12 } }, c.ctaValue)
      )
    ),

    React.createElement(Band, { from: BG_SOCIAL, to: BG_PRODUCT, height: 36 }),

    /* ======= SECTION 6: SOCIAL PROOF (SP-08 pattern: Stacked Mini-Reviews) ======= */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "What parents are saying"),

      /* Quote 1 - gold border */
      React.createElement("div", { style: { background: "#FFF", padding: 14, borderRadius: 8, borderLeft: "3px solid #FFD866", marginBottom: 10 } },
        React.createElement("p", { style: { fontSize: 14, color: B.ink, lineHeight: 1.5, margin: 0, fontStyle: "italic" } }, "\u201C" + c.socialQuote1 + "\u201D"),
        React.createElement("div", { style: { fontSize: 11, color: B.teal, marginTop: 6 } }, "\u2014 " + c.socialSource1)
      ),

      /* Quote 2 - teal border */
      React.createElement("div", { style: { background: "#FFF", padding: 14, borderRadius: 8, borderLeft: "3px solid " + B.teal, marginBottom: 10 } },
        React.createElement("p", { style: { fontSize: 14, color: B.ink, lineHeight: 1.5, margin: 0, fontStyle: "italic" } }, "\u201C" + c.socialQuote2 + "\u201D"),
        React.createElement("div", { style: { fontSize: 11, color: B.teal, marginTop: 6 } }, "\u2014 " + c.socialSource2)
      ),

      /* Quote 3 - green border */
      React.createElement("div", { style: { background: "#FFF", padding: 14, borderRadius: 8, borderLeft: "3px solid " + B.green, marginBottom: 14 } },
        React.createElement("p", { style: { fontSize: 14, color: B.ink, lineHeight: 1.5, margin: 0, fontStyle: "italic" } }, "\u201C" + c.socialQuote3 + "\u201D"),
        React.createElement("div", { style: { fontSize: 11, color: B.teal, marginTop: 6 } }, "\u2014 " + c.socialSource3)
      ),

      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.socialClosing)
    ),

    React.createElement(Band, { from: BG_PRODUCT, to: BG_PHOTOS, height: 36 }),

    /* ======= SECTION 7: PRODUCT INTRODUCTION (HERO-16 pattern: 3-Layer Steps) ======= */
    React.createElement("div", { style: { background: BG_PHOTOS, padding: "28px 22px 16px" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 16 } },
        React.createElement("span", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, "How it works")
      ),
      React.createElement("h2", { style: { fontFamily: F.display, fontSize: 22, lineHeight: 1.3, color: B.ink, textAlign: "center", margin: "0 0 8px" } },
        "Three layers. ", React.createElement(GradientSpan, null, "One breakthrough."), "."
      ),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 16, lineHeight: 1.5, color: B.ink, textAlign: "center", margin: "0 0 20px", fontWeight: 600 } }, c.productHeadline),

      /* Layer 1 - teal */
      React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 } },
        React.createElement("div", { style: { background: B.teal, color: "#FBF7F1", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 } }, "1"),
        React.createElement("div", null,
          React.createElement("p", { style: { fontSize: 14, fontWeight: 700, color: B.ink, margin: "0 0 2px" } }, "Layer 1: Cotton Inner"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.5, color: B.soft, margin: 0 } }, c.productLayer1)
        )
      ),

      /* Layer 2 - green */
      React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 } },
        React.createElement("div", { style: { background: B.green, color: B.ink, width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 } }, "2"),
        React.createElement("div", null,
          React.createElement("p", { style: { fontSize: 14, fontWeight: 700, color: B.ink, margin: "0 0 2px" } }, "Layer 2: Smart Absorption"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.5, color: B.soft, margin: 0 } }, c.productLayer2)
        )
      ),

      /* Layer 3 - yellow */
      React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 } },
        React.createElement("div", { style: { background: "#FFD866", color: B.ink, width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 } }, "3"),
        React.createElement("div", null,
          React.createElement("p", { style: { fontSize: 14, fontWeight: 700, color: B.ink, margin: "0 0 2px" } }, "Layer 3: Leak-Resistant Barrier"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.5, color: B.soft, margin: 0 } }, c.productLayer3)
        )
      ),

      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.productBundle)
    ),

    React.createElement(Band, { from: BG_PHOTOS, to: "#F5F5F5", height: 28 }),

    /* ======= SECTION 8: PRODUCT PHOTOS (3 product images) ======= */
    React.createElement("div", { style: { background: "#F5F5F5", padding: "0 14px 16px", display: "flex", gap: 8 } },
      [
        { src: IMG_CLOUD, label: "Cloud Raindrop" },
        { src: IMG_FOX, label: "Fox Woodland" },
        { src: IMG_PENGUIN, label: "Penguin Party" }
      ].map(function(img, i) {
        return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
          React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
          React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
        );
      })
    ),

    /* 2 more product photos */
    React.createElement("div", { style: { background: "#F5F5F5", padding: "0 14px 16px", display: "flex", gap: 8 } },
      [
        { src: IMG_BUNNY, label: "Bunny Hearts" },
        { src: IMG_WATERMELON, label: "Watermelon" }
      ].map(function(img, i) {
        return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
          React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
          React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
        );
      })
    ),

    React.createElement(Band, { from: "#F5F5F5", to: BG_GUARANTEE, height: 36 }),

    /* ======= SECTION 9: GUARANTEE (TRUST-1 pattern: 60-Day Seal) ======= */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "28px 22px 20px", textAlign: "center" } },
      React.createElement(Eyebrow, null, "Our promise"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 16px", fontStyle: "italic" } }, c.guaranteeIntro),

      /* 60-Day Seal */
      React.createElement("div", { style: { display: "inline-block", width: 180, height: 180, borderRadius: "50%", background: "conic-gradient(#2BAEB4 0deg, #5DD07A 120deg, #FFD866 240deg, #2BAEB4 360deg)", padding: 6, marginBottom: 16 } },
        React.createElement("div", { style: { width: "100%", height: "100%", borderRadius: "50%", background: BG_GUARANTEE, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } },
          React.createElement("div", { style: { fontSize: 9, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: 2 } }, "Calm Progress"),
          React.createElement("div", { style: { fontSize: 50, fontWeight: 900, color: B.teal, lineHeight: 1, marginTop: 4 } }, "60"),
          React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: B.ink, marginTop: 2 } }, "DAY"),
          React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: B.green } }, "GUARANTEE"),
          React.createElement("div", { style: { fontSize: 9, color: B.muted, marginTop: 4 } }, "Full Refund Promise")
        )
      ),

      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 8px" } }, c.guaranteeDetail),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 8px", fontWeight: 600 } }, c.guaranteeClosing),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: 0, fontStyle: "italic" } }, c.guaranteeUrgency)
    ),

    React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 50 }),

    /* ======= SECTION 10: CTA 2 (CTAClose pattern: Bottom CTA) ======= */
    React.createElement(CTAClose, { intro: c.ctaIntro, button: c.ctaButton, fine: "60-day guarantee / No questions / Real returns" }),

    /* ======= SIGNOFF ======= */
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.WelcomeE2L1 = WelcomeE2L1;
'''

with open(OUTPUT_JSX, "w") as f:
    f.write(jsx)

print(f"JSX file written to {OUTPUT_JSX}")
print(f"File size: {os.path.getsize(OUTPUT_JSX)} bytes")
