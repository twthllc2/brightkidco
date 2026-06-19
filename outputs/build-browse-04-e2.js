#!/usr/bin/env node
// Build script for Browse Abandonment E2 email
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PHOTOS_DIR = '/root/projects/brightkidco/outputs/email-assets/product-photos';

// Product photos to embed (3 photos matching the testimonial structure)
const photos = [
  { file: 'flat-lay/training-pant-cloud-raindrop-white.jpg', label: 'Cloud Raindrop' },
  { file: 'flat-lay/training-pant-fox-woodland-white.jpg', label: 'Fox Woodland' },
  { file: 'flat-lay/training-pant-penguin-multicolor.jpg', label: 'Penguin Party' },
];

// Base64 encode product photos
function encodeImage(filePath) {
  const data = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
  return `data:${mime};base64,${data.toString('base64')}`;
}

console.log('Encoding product photos...');
const photoData = photos.map(p => ({
  src: encodeImage(path.join(PHOTOS_DIR, p.file)),
  label: p.label,
}));
console.log(`Encoded ${photoData.length} photos.`);

// Build the JSX content
const jsx = `/* Browse Abandonment E2 -- Cross-Level
   Built from: browse-04-e2.md
   Pattern: Giuliano reference
   Strategy: Social Proof, Three-Family Testimonial Pattern
   Images: 3 embedded product photos
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
    ps: "P.S. I have two autistic sons. One was 6, the other almost 8 before we figured this out. I know how hard it is to hope again after so many letdowns. 60 days to try it. By your judgment."
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
      display: "inline-block",
      background: "#FFD866",
      padding: "7px 14px",
      borderRadius: 999,
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 16,
      border: "2px solid " + B.ink,
      transform: "rotate(-1.5deg)",
      whiteSpace: "nowrap",
      lineHeight: 1.4
    }
  }, props.children);
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
    React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, props.button + " \\u2192"),
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
        s.ps.replace(/^P\\.S\\.\\s*/, "")
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
var IMG_HERO = "${photoData[0].src}";
var IMG_PROD1 = "${photoData[0].src}";
var IMG_PROD2 = "${photoData[1].src}";
var IMG_PROD3 = "${photoData[2].src}";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "Three parents. Three different kids. One thing they all share.",
  heroBadge: "What 16,511 reviews have in common",
  h1a: "Three parents,",
  h1b: "three kids, one thread.",
  hook: "Whether your child is 3 or 10, verbal or not, diagnosed or still figuring it out, if they don't feel when they need to go, you're in the right place.",
  symptomsIntro: "Chances are you've seen some of these:",
  symptoms: [
    "He sits on the toilet for 20 minutes. Nothing happens. Then he pees 30 seconds after standing up.",
    "She plays in a wet pull-up without noticing. Doesn't flinch. Doesn't pause.",
    "He \\"almost trained\\" more than once. You can't figure out what's different this time.",
    "She knows what to do, she'll tell you she needs to go, but it's already happening by the time she says it.",
    "You've stopped counting the attempts. Years of pull-ups, and nothing shifted."
  ],
  symptomsClosing: "If any of those sound like your morning, keep reading.",
  testimonialsIntro: "Three parents. Three different kids. One common thread.",
  testimonials: [
    {
      headline: "Almost trained, but not quite",
      text: "My son is 3. Verbal. He can tell me 'I need to pee', after he's already done it. We tried Oh Crap. Sticker charts. Timer sits. Nothing worked. He'd sit for 20 minutes, get up, and pee on the floor 30 seconds later. I was ready to give up.",
      punch: "After a few weeks in BrightKidCo underwear, he paused. Mid-pee, he stopped. Looked down. Then walked to the bathroom. That pause never happened before. It's not perfect, but it's real.",
      name: "Sarah",
      desc: "mom of a 3-year-old"
    },
    {
      headline: "Sensory, BCBA, still stuck",
      text: "We've been in ABA for 2 years. BCBA protocol. Timed sits every 45 minutes. He'd go when prompted, but never on his own. The moment we stopped the schedule, the accidents came back. Prompt-dependency, his BCBA called it.",
      punch: "Kelly Mahler talks about interoception as the 'eighth sensory system', the one that tells you when you're hungry, thirsty, or need the bathroom. For my son, that system wasn't sending the signal. The underwear gave his brain the feedback it was missing. After a few weeks, he paused before an accident. First time in 4 years.",
      name: "Lisa",
      desc: "mom of a 5-year-old"
    },
    {
      headline: "Years of nothing, then something",
      text: "My son is 9. Non-verbal. Uses AAC. In 9 years, he's never shown any awareness of being wet. We tried everything, OT, social stories, specialists. Nothing. I made peace with pull-ups forever. It's just where were.",
      punch: "After a couple of months in Body-Signal underwear, he paused. He looked down at the wet spot. Then he walked toward the bathroom. Not trained. But feeling something for the first time. That pause was more than I'd seen in 9 years. Maureen Bennie's son was 9.5 when he trained. Late is not never.",
      name: "Maria",
      desc: "mom of a 9-year-old"
    }
  ],
  mechanismTitle: "The common thread",
  mechanismBody: "The common thread across every one of these stories: every child was missing the body signal.",
  mechanismExplain: "Interoception is the body's ability to sense internal signals, hunger, thirst, bladder fullness. Research shows this works differently in many autistic children and kids who process signals differently (Barmpagiannis & Baldimtsi 2025, 49-study review).",
  mechanismMethod: "Standard methods assume the signal is there. If it's not, they can't work.",
  mechanismSolution: "Body-Signal Learning Layer underwear creates a gentle, sustained \\"uh-oh\\" sensation, 30 to 60 seconds of feedback that gives the brain time to register: something happened.",
  mechanismTimeline: "Some kids show first signs in 2 weeks. Others need 8 weeks. Both are normal. Wins look different on different timelines, a pause, a look, a step toward the bathroom. That's not failure. That's the signal wiring.",
  ctaPermission: "Your child, your timeline, your judgment.",
  ctaIntro: "If this sounds like something your family could use, here's where to learn more about how the Body-Signal approach actually works.",
  ctaButton: "See how it works for kids like yours",
  ctaFine: "60-day guarantee. Full refund if it doesn't fit your child. No pressure either way.",
  nextTeaser: "Next time: 60 days to try it. Your judgment. No pressure.",
  migrationIntro: "If you're wondering whether your child's situation is specific enough for this product, here are three stories from parents who were asking the same question:",
  migrations: [
    { condition: "If your child is verbal, under 5, and \\"almost trained\\" multiple times", text: "Sarah's story might sound familiar.", link: "Read Sarah's full journey" },
    { condition: "If your child has sensory issues around the bathroom and you've worked with a therapist or BCBA", text: "here's what Lisa learned.", link: "Read Lisa's path" },
    { condition: "If your child is 7+, non-verbal or high-support needs", text: "Maria's experience will tell you what to expect.", link: "Read Maria's journey" }
  ],
  migrationClosing: "Not sure where your child fits? That's okay. The general framework works for all kids whose nervous systems process signals differently.",
  migrationLink: "Keep reading the general guide"
};

/* 6. BROWSE E2 COMPONENT */
var BrowseE2 = function() {
  var c = emailData;
  var BG_HERO = "#FBF7F1";
  var BG_SYMPTOMS = "#FFF6E2";
  var BG_TESTIMONIALS = "#FFFFFF";
  var BG_MECHANISM = "#EAF6F2";
  var BG_CTA = "#FFF6E2";
  var BG_MIGRATION = "#F0EDF8";
  var BG_DARK = B.ink;

  var accents = [B.teal, B.green, "#E8A23D"];

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= SECTION 1: UNIVERSAL RECOGNITION OPENER ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "32px 22px 16px", textAlign: "center" } },
      React.createElement(PartBadge, null, c.heroBadge),
      React.createElement("h1", { style: { fontFamily: F.display, fontSize: 28, lineHeight: 1.3, color: B.ink, margin: "0 0 16px" } },
        c.h1a,
        React.createElement("br"),
        React.createElement(GradientSpan, null, c.h1b)
      )
    ),

    /* Hero image */
    React.createElement("div", { style: { margin: "0 14px 20px", borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink } },
      React.createElement("img", { src: IMG_HERO, alt: "BrightKidCo Training Pant", style: { width: "100%", display: "block" } })
    ),

    /* Hook */
    React.createElement("div", { style: { background: BG_HERO, padding: "0 22px 16px" } },
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.hook)
    ),

    React.createElement(Band, { from: BG_HERO, to: BG_SYMPTOMS }),

    /* Symptoms list */
    React.createElement("div", { style: { background: BG_SYMPTOMS, padding: "24px 22px 20px" } },
      React.createElement("p", { style: { fontSize: 14, fontWeight: 600, color: B.ink, margin: "0 0 14px" } }, c.symptomsIntro),
      c.symptoms.map(function(s, i) {
        return React.createElement("div", { key: i, style: { display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" } },
          React.createElement("span", { style: { color: B.teal, fontWeight: 700, fontSize: 14, flexShrink: 0, lineHeight: 1.6 } }, "\u2014"),
          React.createElement("span", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft } }, s)
        );
      }),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.ink, margin: "12px 0 0", fontWeight: 600, fontStyle: "italic" } }, c.symptomsClosing)
    ),

    React.createElement(Band, { from: BG_SYMPTOMS, to: BG_TESTIMONIALS }),

    /* ======= SECTION 2: THREE-FAMILY TESTIMONIAL BLOCK ======= */
    React.createElement("div", { style: { background: BG_TESTIMONIALS, padding: "28px 14px 8px" } },
      React.createElement("div", { style: { padding: "0 8px", marginBottom: 18 } },
        React.createElement(Eyebrow, null, "Real stories from real parents"),
        React.createElement(H2, { size: 22 }, c.testimonialsIntro)
      ),
      /* Testimonial cards */
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
        c.testimonials.map(function(t, i) {
          return React.createElement("div", { key: i, style: { background: "#FBF7F1", border: "2px solid " + B.ink, borderLeft: "4px solid " + accents[i], borderRadius: 16, overflow: "hidden", boxShadow: "3px 3px 0 " + B.ink } },
            React.createElement("div", { style: { padding: "20px 18px" } },
              React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, color: accents[i], marginBottom: 6 } }, t.headline),
              React.createElement("div", { style: { fontSize: 36, lineHeight: 0.8, color: accents[i], fontWeight: 700, marginBottom: 8 } }, "\u201C"),
              React.createElement("p", { style: { fontSize: 13.5, lineHeight: 1.6, color: B.soft, margin: "0 0 10px", fontStyle: "italic" } }, t.text),
              React.createElement("div", { style: { width: 30, height: 1, background: accents[i], opacity: 0.4, margin: "0 0 10px" } }),
              React.createElement("p", { style: { fontSize: 13.5, lineHeight: 1.6, color: B.ink, margin: "0 0 12px", fontWeight: 500 } }, t.punch),
              React.createElement("div", { style: { fontSize: 12, color: B.ink, fontWeight: 700 } },
                "\u2014 " + t.name + ", ",
                React.createElement("span", { style: { fontWeight: 400, color: B.muted } }, t.desc)
              )
            )
          );
        })
      )
    ),

    React.createElement(Band, { from: BG_TESTIMONIALS, to: BG_MECHANISM }),

    /* ======= SECTION 3: MECHANISM REVEAL ======= */
    React.createElement("div", { style: { background: BG_MECHANISM, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "What connects these stories"),
      React.createElement(H2, { size: 24 },
        c.mechanismTitle,
        " ",
        React.createElement(GradientSpan, null, "explained.")
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px", fontWeight: 600 } }, c.mechanismBody),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.mechanismExplain),
      /* Stat callout */
      React.createElement("div", { style: { background: "#FFF", borderRadius: 10, padding: "14px 16px", border: "1px solid rgba(43,174,180,0.2)", marginBottom: 14 } },
        React.createElement("div", { style: { fontSize: 13, color: B.soft, lineHeight: 1.5 } },
          React.createElement("span", { style: { color: B.teal, fontWeight: 700 } }, "49%"),
          " of autistic children show interoception differences that affect daily functioning."
        ),
        React.createElement("div", { style: { fontSize: 10, color: B.muted, marginTop: 6, fontStyle: "italic" } }, "Barmpagiannis & Baldimtsi 2025, 49-study review")
      ),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 14px" } }, c.mechanismMethod),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 14px", fontWeight: 600 } }, c.mechanismSolution),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: 0, fontStyle: "italic" } }, c.mechanismTimeline)
    ),

    React.createElement(Band, { from: BG_MECHANISM, to: BG_CTA }),

    /* ======= SECTION 4: UNIVERSAL CTA + PERMISSION ======= */
    React.createElement("div", { style: { background: BG_CTA, padding: "28px 22px 20px", textAlign: "center" } },
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 18, fontWeight: 700, color: B.ink, margin: "0 0 12px", lineHeight: 1.4 } }, c.ctaPermission),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 18px" } }, c.ctaIntro),
      React.createElement("a", { href: "#", style: { display: "inline-block", background: B.teal, color: "#FBF7F1", fontSize: 15, fontWeight: 600, textDecoration: "none", padding: "14px 32px", borderRadius: 10, letterSpacing: 0.3 } }, c.ctaButton + " \u2192"),
      React.createElement("p", { style: { fontSize: 12, color: B.muted, marginTop: 12 } }, c.ctaFine)
    ),

    /* Next email teaser */
    React.createElement("div", { style: { background: BG_CTA, padding: "0 22px 20px", textAlign: "center" } },
      React.createElement("div", { style: { display: "inline-block", background: "#1F2D2F", borderRadius: 8, padding: "12px 18px" } },
        React.createElement("p", { style: { fontSize: 12, color: "#B8CACD", margin: 0, fontStyle: "italic" } }, c.nextTeaser)
      )
    ),

    React.createElement(Band, { from: BG_CTA, to: BG_MIGRATION }),

    /* ======= SECTION 6: MIGRATION ANCHORS ======= */
    React.createElement("div", { style: { background: BG_MIGRATION, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#7A5FA8" }, "Not sure where to start?"),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 16px", fontStyle: "italic" } }, c.migrationIntro),
      c.migrations.map(function(m, i) {
        return React.createElement("div", { key: i, style: { background: "#FFFFFF", borderRadius: 12, padding: "14px 16px", marginBottom: 10, borderLeft: "3px solid " + accents[i] } },
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.5, color: B.ink, margin: "0 0 4px", fontWeight: 600 } }, m.condition + ","),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.5, color: B.soft, margin: "0 0 6px" } }, m.text),
          React.createElement("a", { href: "#", style: { fontSize: 12, color: B.teal, fontWeight: 700, textDecoration: "none" } }, m.link + " \u2192")
        );
      }),
      React.createElement("p", { style: { fontSize: 13, lineHeight: 1.6, color: B.soft, margin: "8px 0 0" } },
        c.migrationClosing + " ",
        React.createElement("a", { href: "#", style: { color: B.teal, fontWeight: 700, textDecoration: "none" } }, c.migrationLink),
        "."
      )
    ),

    React.createElement(Band, { from: BG_MIGRATION, to: BG_DARK, height: 50 }),

    /* ======= PRODUCT PHOTOS ======= */
    React.createElement("div", { style: { background: BG_DARK, padding: "20px 14px 0" } },
      React.createElement("div", { style: { display: "flex", gap: 8 } },
        [
          { src: IMG_PROD1, label: "Cloud Raindrop" },
          { src: IMG_PROD2, label: "Fox Woodland" },
          { src: IMG_PROD3, label: "Penguin Party" }
        ].map(function(img, i) {
          return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid #3A4547", boxShadow: "3px 3px 0 rgba(0,0,0,0.3)" } },
            React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
            React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: "#B8CACD", textAlign: "center", borderTop: "2px solid #3A4547", background: "#1F2A2C" } }, img.label)
          );
        })
      )
    ),

    React.createElement(CTAClose, { intro: c.ctaPermission, button: c.ctaButton, fine: c.ctaFine }),
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.BrowseE2 = BrowseE2;
`;

// Write the JSX file
const jsxPath = '/root/projects/brightkidco/outputs/browse-04-e2.jsx';
fs.writeFileSync(jsxPath, jsx);
console.log('JSX written to ' + jsxPath);

// Transpile with esbuild
console.log('Transpiling with esbuild...');
try {
  execSync('npx esbuild ' + jsxPath + ' --format=iife --loader:.jsx=jsx --jsx=transform --outfile=/tmp/browse-04-e2.js', { stdio: 'inherit' });
} catch (e) {
  console.error('esbuild failed:', e.message);
  process.exit(1);
}

// Read the transpiled JS
const transpiledJs = fs.readFileSync('/tmp/browse-04-e2.js', 'utf8');

// Build the HTML
const preheader = "Three parents. Three different kids. One thing they all share.";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>BrightKidCo</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Questrial&display=swap" rel="stylesheet">
<style>
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; min-width: 100%; background-color: #FBF7F1; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }
  td { font-family: 'Questrial', system-ui, sans-serif; color: #1F2D2F; }
  img { display: block; border: 0; outline: none; line-height: 0; max-width: 100%; height: auto; }
  a img { border: 0; outline: none; }
  .preheader { display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; max-height: 0; max-width: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; }
  @media screen and (max-width: 420px) {
    .bk-email { width: 100% !important; max-width: 100% !important; }
    .bk-section { padding-left: 18px !important; padding-right: 18px !important; }
    .bk-cta-btn { display: block !important; width: 100% !important; text-align: center !important; }
  }
  @media screen and (min-width: 601px) {
    .bk-email { width: 420px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;width:100% !important;height:100% !important;min-width:100%;background-color:#FBF7F1;">

<!--[if (gte mso 9)|(IE)]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FBF7F1;"><tr><td align="center" style="padding:0;">
<table role="presentation" width="420" align="center" style="width:420px;" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;">
<![endif]-->

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FBF7F1;">
  <tr>
    <td align="center" style="padding:0;background-color:#FBF7F1;">
      <div class="bk-email" style="max-width:420px;width:100%;margin:0 auto;background-color:#FBF7F1;font-family:'Questrial',system-ui,sans-serif;color:#1F2D2F;">
        <div class="preheader" style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;max-height:0;max-width:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;">${preheader}</div>
        <div id="root"></div>
      </div>
    </td>
  </tr>
</table>

<!--[if (gte mso 9)|(IE)]>
</td></tr></table>
</td></tr></table>
<![endif]-->

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script>
${transpiledJs}
</script>
<script>
/* Mount the email */
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(BrowseE2));
</script>
</body>
</html>`;

const outPath = '/root/projects/brightkidco/outputs/browse-04-e2.html';
fs.writeFileSync(outPath, html);
console.log('HTML written to ' + outPath);
console.log('Build complete!');
