#!/usr/bin/env python3
"""Build welcome-01-e7-l3.html from the copy file and product photos."""
import os
import subprocess

BASE = "/root/projects/brightkidco/outputs"
PHOTO_DIR = os.path.join(BASE, "email-assets/product-photos/base64")
OUTPUT_HTML = os.path.join(BASE, "welcome-01-e7-l3.html")
OUTPUT_JSX = os.path.join(BASE, "build/welcome-01-e7-l3.jsx")
OUTPUT_JS = os.path.join(BASE, "build/welcome-01-e7-l3.js")

# Read base64 product photos
photos = {}
for fname in sorted(os.listdir(PHOTO_DIR)):
    if fname.endswith('.b64'):
        key = fname.replace('.b64', '').replace('training-pant-', '').replace('-', '_')
        with open(os.path.join(PHOTO_DIR, fname)) as f:
            photos[key] = f.read().strip()

# Also read lifestyle photos for hero/lifestyle sections
lifestyle_dir = os.path.join(BASE, "email-assets/product-photos/lifestyle")
lifestyle_photos = {}
for fname in sorted(os.listdir(lifestyle_dir)):
    if fname.endswith('.png') or fname.endswith('.jpg'):
        key = fname.rsplit('.', 1)[0].replace('-', '_')
        import base64
        with open(os.path.join(lifestyle_dir, fname), 'rb') as f:
            lifestyle_photos[key] = base64.b64encode(f.read()).decode('ascii')

# Build the JSX content
jsx = r'''/* Welcome E7 L3 -- "Last Education Push"
   Built from: welcome-01-e7-l3.md
   Level: L3 (Maria) -- Dignity-First Variant
   Warm earth palette, serif typography, zero urgency
*/

/* 1. BRAND TOKENS (L3 warm earth palette) */
window.BRAND = {
  teal: "#C4704A",
  tealDeep: "#A85A38",
  green: "#D9A88E",
  greenDeep: "#C49070",
  ink: "#2C2416",
  soft: "#4A4238",
  muted: "#9C9389",
  cream: "#FBF8F4",
  paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #C4704A 0%, #D9A88E 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #C4704A 0%, #D9A88E 100%)",
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
    ps: ""
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
    React.createElement("img", { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#2C2416">BrightKidCo</text></svg>'), alt: "BrightKidCo", style: { height: 34 } })
  );
};

var Eyebrow = function(props) {
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || "#A85A38", fontWeight: 700, marginBottom: 10 } }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", { style: { fontFamily: "'Georgia', 'Times New Roman', Times, serif", fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left" } }, props.children);
};

var CTAClose = function(props) {
  var bg = props.bg || B.ink;
  return React.createElement("div", { style: { background: bg, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" } },
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px", fontFamily: "'Georgia', serif", fontStyle: "italic" } }, props.intro),
    React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: "#C4704A", color: "#FFFFFF", fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" } }, props.button),
    props.fine ? React.createElement("div", { style: { marginTop: 16, fontSize: 11.5, color: "#9C9389" } }, props.fine) : null
  );
};

var Signoff = function(props) {
  var s = window.FLOW1_SHARED.signoff;
  return React.createElement("div", { style: { background: props.bg || B.ink, padding: "0 22px 36px" } },
    React.createElement("div", { style: { position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40", borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden" } },
      React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.gradient, opacity: 0.9 } }),
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 } },
        React.createElement("div", { style: { width: 58, height: 58, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg, #FFD866 0%, #C4704A 100%)", padding: 2.5 } },
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
      React.createElement("div", { style: { paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed #3A4547", marginBottom: 16 } },
        React.createElement("div", { style: { flex: 1 } },
          React.createElement("div", { style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 } }, s.line1),
          React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: "#C4704A", letterSpacing: -0.5, marginTop: 2 } }, "Lena")
        )
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
    React.createElement("div", { style: { marginTop: 28, marginBottom: 0, width: 60, height: 3, background: B.gradient, borderRadius: 3, marginLeft: "auto", marginRight: "auto" } })
  );
};

var EmailShell = function(props) {
  return React.createElement("div", { style: { width: MW, background: props.bg, fontFamily: F.main, color: B.ink } },
    React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F5F0EA", textAlign: "center", fontStyle: "italic" } }, props.preheader),
    props.children
  );
};

/* 3. EMBEDDED IMAGES */
'''

# Add product photo variables
for key, b64 in photos.items():
    jsx += f'var IMG_{key.upper()} = "data:image/jpeg;base64,{b64}";\n'

# Add lifestyle photo variables  
for key, b64 in lifestyle_photos.items():
    if len(b64) < 150000:  # Skip very large files
        jsx += f'var LIFESTYLE_{key.upper()} = "data:image/jpeg;base64,{b64}";\n'

# Add email data and component
jsx += r'''
/* 4. EMAIL DATA */
var emailData = {
  preheader: "A gentle explanation of how body-signal learning actually works, no pressure, no promises.",
  /* Hook */
  hookBold: "He doesn't realize he needs to go. He doesn't realize he\u2019s gone.",
  hookBody: "You\u2019ve watched him play, eat, sleep, never a flinch, never a pause, never a look down. The wet diaper goes unnoticed. The dry one feels the same to him. Years of this, and you\u2019ve stopped expecting the signal to come.",
  hookExplain: "That\u2019s not a choice he\u2019s making. His nervous system processes body signals on a different frequency, one where the \u201CI need to go\u201D message arrives too late or doesn\u2019t arrive at all.",
  /* Deep Mechanism */
  mechSearch: "The search for a solution often leads to methods that assume the signal is there. Forty-nine peer-reviewed studies confirm body signal differences are a well-established feature of autism. The \u201Ceighth sensory system\u201D works differently for him.",
  mechBrain: "His brain isn\u2019t ignoring the signal. The signal never arrived in a way his brain could recognize. Research shows autistic children show significantly diminished body awareness \u2014 this isn\u2019t a training gap. It\u2019s a neurological difference no sticker chart can solve.",
  mechMetaphor: "Think of it like training wheels for the nervous system.",
  mechSolution: "The Body-Signal Learning Layer creates a gentle sensation that lasts \u2014 30 to 60 seconds of feedback that gives the brain time to register: something happened. Pull-ups wick that moisture away instantly, removing the only natural teacher the body has.",
  /* Mini-Win Testimonials */
  testimonialsIntro: "Other L3 parents have seen the smallest shifts. And here, those shifts matter.",
  quote1: "He looked down at the wet spot for the first time in 9 years.",
  quote1Context: "That pause, a single moment of awareness, is not an overnight change. It\u2019s a nervous system finally receiving information it was missing. For a child who has never shown a sign of feeling wet or dirty, that pause is the first page of a new chapter.",
  quote2: "He has 30 words. Bathroom isn\u2019t one of them. But yesterday, he paused mid-step and looked down.",
  quote2Context: "Not a trained response. Not a prompted behavior. A genuine moment of body awareness, the first ripple in water that\u2019s been still for years.",
  testimonialsClosing: "These aren\u2019t \u201Csuccess stories\u201D in the traditional sense. There are no before-and-after photos with dramatic results. What L3 parents report are micro-moments, a hesitation, a glance, a single step toward the bathroom that never happened before. And for a child whose nervous system has been running on a different operating system, those micro-moments are everything.",
  testimonialsSignals: "They aren\u2019t promises. They\u2019re signals, the first signals, delivered by a brain that\u2019s finally getting the information it needs.",
  /* Guarantee */
  guaranteeTitle: "Sixty days to see if it shifts anything.",
  guaranteeDetail: "If your child shows no sign, no pause, no look, no step toward the bathroom, send them back. Full refund. No questions. No return shipping.",
  guaranteeWhy: "This guarantee exists because the outcome depends on his nervous system, not on your effort. You\u2019ve done enough. You\u2019ve tried enough. Our job is to make something that works with his brain, not against it.",
  guaranteeClosing: "60 days. Your judgment.",
  /* CTA */
  ctaPrice: "\u20AC34,99",
  ctaSubtext: "No rush.",
  ctaWhen: "When you\u2019re ready, it\u2019s here.",
  ctaButton: "One Pair, See If It Shifts Anything",
  ctaFine: "Every purchase is backed by our 60-day gentle guarantee.",
  /* Next email teaser */
  nextTeaser: "Next time: One last thought before you decide.",
  /* Easter egg */
  easterEgg: "You made it to the bottom of Welcome Email 7. If you\u2019ve read all of them, thank you for trusting us with your attention."
};

/* 5. EMAIL COMPONENT */
var WelcomeE7L3 = function() {
  var c = emailData;
  var BG_HOOK = "#FBF8F4";
  var BG_MECH = "#F5F0EA";
  var BG_TESTIMONIALS = "#FBF8F4";
  var BG_PHOTOS = "#FFFFFF";
  var BG_GUARANTEE = "#F5F0EA";
  var BG_CTA = "#2C2416";

  return React.createElement(
    EmailShell,
    { preheader: c.preheader, bg: BG_HOOK },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HOOK }),

    /* ======= SECTION 1: HOOK ======= */
    React.createElement(
      "div",
      { style: { background: BG_HOOK, padding: "32px 24px 16px", textAlign: "center" } },
      React.createElement(
        "h1",
        { style: { fontFamily: "'Georgia', 'Times New Roman', Times, serif", fontSize: 26, lineHeight: 1.3, color: "#2C2416", margin: "0 0 16px", fontStyle: "italic", fontWeight: 400 } },
        c.hookBold
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: "#4A4238", margin: "0 0 14px", textAlign: "left" } }, c.hookBody),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: "#4A4238", margin: 0, textAlign: "left" } }, c.hookExplain)
    ),

    React.createElement(Band, { from: BG_HOOK, to: BG_MECH, height: 36 }),

    /* ======= SECTION 2: DEEP MECHANISM ======= */
    React.createElement(
      "div",
      { style: { background: BG_MECH, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#A85A38" }, "How it works"),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 15, lineHeight: 1.7, color: "#4A4238", margin: "0 0 14px" } }, c.mechSearch),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 15, lineHeight: 1.7, color: "#4A4238", margin: "0 0 14px" } }, c.mechBrain),
      /* Training wheels callout */
      React.createElement(
        "div",
        { style: { background: "#FBF8F4", borderRadius: 10, padding: "18px 18px", borderLeft: "4px solid #C4704A", marginBottom: 14 } },
        React.createElement(
          "p",
          { style: { fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.5, color: "#2C2416", margin: 0, fontStyle: "italic", fontWeight: 500 } },
          c.mechMetaphor
        )
      ),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 15, lineHeight: 1.7, color: "#4A4238", margin: 0 } }, c.mechSolution),
      /* Research citation */
      React.createElement(
        "div",
        { style: { marginTop: 14, fontSize: 12, color: "#9C9389", fontStyle: "italic" } },
        "Barmpagiannis & Baldimtsi (2025); Nicholson et al. (2019); Mahler (2016)"
      )
    ),

    React.createElement(Band, { from: BG_MECH, to: BG_TESTIMONIALS, height: 36 }),

    /* ======= SECTION 3: MINI-WIN TESTIMONIALS ======= */
    React.createElement(
      "div",
      { style: { background: BG_TESTIMONIALS, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#A85A38" }, "Micro-moments"),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 15, lineHeight: 1.7, color: "#4A4238", margin: "0 0 16px" } }, c.testimonialsIntro),
      /* Quote 1 */
      React.createElement(
        "div",
        { style: { background: "#FFFFFF", padding: 14, borderRadius: 8, borderLeft: "3px solid #D9A88E", marginBottom: 10 } },
        React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 15, color: "#2C2416", lineHeight: 1.5, margin: 0, fontStyle: "italic" } }, "\u201C" + c.quote1 + "\u201D"),
        React.createElement("div", { style: { fontSize: 11, color: "#A85A38", marginTop: 6 } }, "\u2014 L3 parent")
      ),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 14, lineHeight: 1.7, color: "#4A4238", margin: "0 0 14px" } }, c.quote1Context),
      /* Quote 2 */
      React.createElement(
        "div",
        { style: { background: "#FFFFFF", padding: 14, borderRadius: 8, borderLeft: "3px solid #C4704A", marginBottom: 10 } },
        React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 15, color: "#2C2416", lineHeight: 1.5, margin: 0, fontStyle: "italic" } }, "\u201C" + c.quote2 + "\u201D"),
        React.createElement("div", { style: { fontSize: 11, color: "#A85A38", marginTop: 6 } }, "\u2014 L3 parent")
      ),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 14, lineHeight: 1.7, color: "#4A4238", margin: "0 0 14px" } }, c.quote2Context),
      /* Closing */
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 14, lineHeight: 1.7, color: "#4A4238", margin: "0 0 10px" } }, c.testimonialsClosing),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 14, lineHeight: 1.7, color: "#2C2416", margin: 0, fontWeight: 600 } }, c.testimonialsSignals)
    ),

    React.createElement(Band, { from: BG_TESTIMONIALS, to: BG_PHOTOS, height: 36 }),

    /* ======= SECTION 4: PRODUCT PHOTOS (mandatory) ======= */
    React.createElement(
      "div",
      { style: { background: BG_PHOTOS, padding: "28px 22px 16px", textAlign: "center" } },
      React.createElement(Eyebrow, { color: "#A85A38" }, "Body-Signal Learning Underwear"),
      React.createElement(
        "div",
        { style: { fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.5, color: "#2C2416", margin: "0 0 20px", fontWeight: 600 } },
        "Training wheels for the nervous system."
      ),
      /* Product grid */
      React.createElement(
        "div",
        { style: { display: "flex", gap: 8, marginBottom: 10 } },
        [
          { src: IMG_CLOUD_RAINDROP_WHITE, label: "Cloud Raindrop" },
          { src: IMG_FOX_WOODLAND_WHITE, label: "Fox Woodland" },
          { src: IMG_PENGUIN_MULTICOLOR, label: "Penguin Party" }
        ].map(function(img, i) {
          return React.createElement(
            "div",
            { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid #2C2416", boxShadow: "3px 3px 0 #2C2416" } },
            React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
            React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: "#2C2416", textAlign: "center", borderTop: "2px solid #2C2416", background: "#FBF8F4" } }, img.label)
          );
        })
      ),
      /* Second row */
      React.createElement(
        "div",
        { style: { display: "flex", gap: 8 } },
        [
          { src: IMG_BUNNY_HEARTS_PINK, label: "Bunny Hearts" },
          { src: IMG_WATERMELON_PINK, label: "Watermelon" }
        ].map(function(img, i) {
          return React.createElement(
            "div",
            { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid #2C2416", boxShadow: "3px 3px 0 #2C2416" } },
            React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
            React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: "#2C2416", textAlign: "center", borderTop: "2px solid #2C2416", background: "#FBF8F4" } }, img.label)
          );
        })
      )
    ),

    React.createElement(Band, { from: BG_PHOTOS, to: BG_GUARANTEE, height: 36 }),

    /* ======= SECTION 5: GUARANTEE ======= */
    React.createElement(
      "div",
      { style: { background: BG_GUARANTEE, padding: "28px 22px 20px", textAlign: "center" } },
      React.createElement(Eyebrow, { color: "#A85A38" }, "Our promise"),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.5, color: "#2C2416", margin: "0 0 16px", fontWeight: 500 } }, c.guaranteeTitle),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 14, lineHeight: 1.7, color: "#4A4238", margin: "0 0 12px" } }, c.guaranteeDetail),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 14, lineHeight: 1.7, color: "#4A4238", margin: "0 0 12px" } }, c.guaranteeWhy),
      React.createElement("p", { style: { fontFamily: "'Georgia', serif", fontSize: 16, lineHeight: 1.5, color: "#2C2416", margin: 0, fontWeight: 600, fontStyle: "italic" } }, c.guaranteeClosing)
    ),

    React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 50 }),

    /* ======= SECTION 6: CTA ======= */
    React.createElement(CTAClose, {
      intro: c.ctaPrice + " \u2014 " + c.ctaSubtext + " " + c.ctaWhen,
      button: c.ctaButton,
      fine: c.ctaFine
    }),

    /* ======= NEXT EMAIL TEASER ======= */
    React.createElement(
      "div",
      { style: { background: BG_CTA, padding: "0 22px 20px" } },
      React.createElement(
        "div",
        { style: { textAlign: "center", fontSize: 13, color: "#9C9389", fontStyle: "italic" } },
        c.nextTeaser
      )
    ),

    /* ======= SIGNOFF ======= */
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null),

    /* ======= EASTER EGG ======= */
    React.createElement(
      "div",
      { style: { background: "#FFFFFF", padding: "20px 24px 30px", textAlign: "center" } },
      React.createElement(
        "p",
        { style: { fontSize: 11, lineHeight: 1.6, color: "#9C9389", fontStyle: "italic", margin: 0 } },
        c.easterEgg
      )
    )
  );
};

window.WelcomeE7L3 = WelcomeE7L3;
'''

# Write JSX file
os.makedirs(os.path.dirname(OUTPUT_JSX), exist_ok=True)
with open(OUTPUT_JSX, 'w') as f:
    f.write(jsx)

print(f"JSX written to {OUTPUT_JSX}")
print(f"File size: {os.path.getsize(OUTPUT_JSX)} bytes")

# Transpile with esbuild
result = subprocess.run([
    'npx', 'esbuild', OUTPUT_JSX,
    '--bundle', '--format=iife',
    '--outfile=' + OUTPUT_JS,
    '--loader:.jsx=jsx', '--jsx=transform'
], capture_output=True, text=True, timeout=30)

if result.returncode != 0:
    print(f"ESBUILD ERROR: {result.stderr}")
    exit(1)
print(f"Transpiled JS: {OUTPUT_JS} ({os.path.getsize(OUTPUT_JS)} bytes)")

# Read transpiled JS
with open(OUTPUT_JS) as f:
    transpiled_js = f.read()

# Build HTML shell
html = '''<!DOCTYPE html>
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
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; min-width: 100%; background-color: #FBF8F4; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }
  td { font-family: 'Questrial', system-ui, sans-serif; color: #2C2416; }
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
<body style="margin:0;padding:0;width:100% !important;height:100% !important;min-width:100%;background-color:#FBF8F4;">

<!--[if (gte mso 9)|(IE)]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FBF8F4;"><tr><td align="center" style="padding:0;">
<table role="presentation" width="420" align="center" style="width:420px;" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;">
<![endif]-->

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FBF8F4;">
  <tr>
    <td align="center" style="padding:0;background-color:#FBF8F4;">
      <div class="bk-email" style="max-width:420px;width:100%;margin:0 auto;background-color:#FBF8F4;font-family:'Questrial',system-ui,sans-serif;color:#2C2416;">
        <div class="preheader" style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;max-height:0;max-width:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;">A gentle explanation of how body-signal learning actually works, no pressure, no promises.</div>
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
''' + transpiled_js + '''
</script>
<script>
/* Mount the email */
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(WelcomeE7L3));
</script>
</body>
</html>'''

with open(OUTPUT_HTML, 'w') as f:
    f.write(html)

print(f"\nHTML written to {OUTPUT_HTML}")
print(f"HTML size: {os.path.getsize(OUTPUT_HTML)} bytes")
print("\nDone! Email built successfully.")
