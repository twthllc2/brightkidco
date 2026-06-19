/* Checkout Abandonment E2 -- Cross-Level
   Built from: checkout-03-e2.md
   Pattern: Giuliano reference
   Images: 4 embedded product photos
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
    line1: "With care,",
    name: "Lena Bauer",
    ps1: "My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.",
    ps2: "If you have a question, hit reply. You'll get me, not a template. I read everything."
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
      React.createElement("div", { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic", marginBottom: 10 } },
        React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
        s.ps1
      ),
      React.createElement("div", { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" } },
        React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
        s.ps2
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
var IMG_HERO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzYqCoKloAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmYl1rNNZZLvnoqC3GjTntKKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZvKUGrJDTOymC5x0XWmWXTETpMZOtzU0yNIqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHOMtVrM1kxbGrvOknHRda8fK8++fJmX6XPlwXt7Pk+28++/Di5+p083SdN6xuVcjVzE2zSpQKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTUSJNQk1FhFqCwJ5O3hz16Zlz1573ZeeN5atmDl7uOdcO/Xy+vt4fY5bz2upJomi5C2ZTdxo0zUqCpaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGS+fhwx27+vwe2tovOlJRFkKCNedeHK55+nUzVjnsnSJWufS5iF6a566eV7fL6Nct5us9bkJuQGixlNXOi5YNs+a47X5mj698fqm9JbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxlvz5jHpRrPS/R8P0N8Fk1x1MlpolZTWc4a6fP9Pgx2TLn6L4/X1ufmfV1m89ZRrPTnzX0b8/VN4a1jr05dOvh9KXPWalIoEM1osc1OeLJ5dccdp3xrHa+/wCX9LXP0RnfDeudTaVAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcJXy+vLHp4enVzqJlfd38nq6ecurjOkLmZLmRuSprl4vb5sdcTvzzrye2NZuZzzvefP7LOfTrIrKyzXbWOHs73fmJDTFNJRLBchx3xucct8M9GLeXt1LhMfU+d6dY9szrp59VpkmE6XGjTNSigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxHgjn6iM7RTN0N+/5vq3x9OY1ySFhVzd0xemU83nZ5+";
var IMG_PROD1 = "data:image/jpeg;base64,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";
var IMG_PROD2 = "data:image/jpeg;base64,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";
var IMG_PROD3 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAL3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI0zDc5U2xk3MxNzjTvrzdV7OfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIKyNMjTI0zRLhNMaIczrhV8tQ9OVOfTl0PPeuU8/fllfb046O4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUILBCCpg3lAUpBc1RmuiWGbDnvOTrz6QxvnouOmCaxTFsKQx5fZ4j3a49Tvvj2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCpDSZNXNKkKzUWAQ0lIBc1ZNYN5aOd1g0zosUzZRnUq2IJDXPQa56MzWLOlxuXnntyNc95Ly65Mef1Q4erx+k7ejz9jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCoKzSyCyEqCuMXulpAXNi51DO8bEsqyolzqgM6zUubZcakNs0k3gqC5cTtrz9jUuSSC6xomkElJc00tONuCyhWzxa9HE7ejyeo2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI1JDTFTSZNM0uWa1rnssSIK0SODpF6WUAzqCiprNiwFlIsJc0q4FzTUlM3NNMQ0xTXDrzOfo8vc6yaE3TjeuCSUZ68zOvPuT0OOjclOemarnDteWjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxlvz5jHpRrPS/R8P0N8Fk1x1MlpolZTWc4a6fP9Pgx2TLn6L4/X1ufmfV1m89ZRrPTnzX0b8/VN4a1jr05dOvh9KXPWalIoEM1osc1OeLJ5dccdp3xrHa+/wCX9LXP0RnfDeudTaVAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcJXy+vLHp4enVzqJlfd38nq6ecurjOkLmZLmRuSprl4vb5sdcTvzzrye2NZuZzzvefP7LOfTrIrKyzXbWOHs73fmJDTFNJRLBchx3xucct8M9GLeXt1LhMfU+d6dY9szrp59VpkmE6XGjTNSigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxHgjn6iM7RTN0N+/5vq3x9OY1ySFhVzd0xemU83nZ5+";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "That's not doubt. That's experience talking. Here's what's different.",
  heroBadge: "You're allowed to be skeptical",
  h1a: "That hope-fear cycle",
  h1b: "deserves a real answer.",
  hook: "Whether you're 3 months in or 3 years in, whether your child is verbal or non-verbal, 3 or 10, diagnosed or still figuring it out, if you've felt hope before and watched it fade, this email is for you.",
  validation: "That hope-fear cycle, 'What if I get my hopes up again?', is the realest question you can ask. And it deserves a real answer, not a sales pitch.",
  testimonials: [
    { text: "If 3 weeks of success then total regression, I know that cycle." },
    { text: "If I had a dollar for every method I've tried... I'd have a lot of dollars." },
    { text: "We made peace with maybe never. Then something shifted." }
  ],
  testimonialClosing: "If even one of those sounds like your morning, here's why this approach is different from everything you've tried.",
  mechanism: "Every method you've tried assumed your child can feel the 'I need to go' signal when it happens. The research shows that for many kids who process signals differently, that signal either arrives too late or doesn't arrive at all. Not because they're stubborn. Not because you haven't tried hard enough. Because their nervous system processes body signals on a different timeline.",
  mechanismPunch: "That's not a training problem. That's a signal-timing gap.",
  mechanismSolution: "The Body-Signal Learning Layer was designed for that gap. It doesn't train behavior. It creates a gentle sensation that lasts that gives the brain the feedback it's been missing, 30 to 60 seconds of awareness time that a pull-up wicks away instantly.",
  timeline: "Some kids show their first signal in 2 weeks. Others need 8 weeks. Some show nothing for months, and then, one day, a pause. A look down. A step toward the bathroom. Both are normal. Both are progress.",
  productIntro: "The product in your cart, the Body-Signal Learning Layer underwear, is designed around exactly that missing connection. The cotton inner layer creates a gentle, sustained 'uh-oh' sensation that lasts 30-60 seconds. Long enough for a brain that processes signals differently to register: something happened. Without a prompt. Without a timer. Without a sticker chart. Just the body doing the teaching.",
  guarantee: "Here's what we ask: try it for 60 days. By your judgment. If your child shows no sign of body awareness, no pause, no look down, no pull at their pants, no step toward the potty, every dollar back. No questions. No shipping to return.",
  guaranteeClosing: "The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.",
  permission: "If today isn't the day, that's a real answer. The product will be here when you're ready.",
  ctaIntro: "Your original offer is saved.",
  ctaButton: "Check out when you're ready",
  ctaFinePrint: "60-day guarantee / No questions / Real returns"
};

/* 6. CHECKOUT E2 COMPONENT */
var CheckoutE2 = function() {
  var c = emailData;
  var BG_HERO = "#FFFBF0";
  var BG_LETTER = "#FFF6E2";
  var BG_SOCIAL = "#FFF6E2";
  var BG_MECHANISM = "#EAF6F2";
  var BG_TIMELINE = "#F0EDF8";
  var BG_PRODUCT = "#F0EDF8";
  var BG_GUARANTEE = "#FFFBF0";
  var BG_CTA = B.ink;

  var accents = [B.teal, B.green, "#E8A23D"];

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= SECTION 1: HOOK (Hero-3 pattern: Permission Open) ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "32px 22px 16px", textAlign: "center" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 16 } },
        React.createElement("span", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, c.heroBadge)
      ),
      React.createElement("h1", { style: { fontFamily: F.display, fontSize: 26, lineHeight: 1.3, color: B.ink, margin: "0 0 16px" } },
        c.h1a,
        React.createElement("br"),
        React.createElement(GradientSpan, null, c.h1b)
      )
    ),

    /* Hero image */
    React.createElement("div", { style: { margin: "0 14px 20px", borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink } },
      React.createElement("img", { src: IMG_HERO, alt: "BrightKidCo Training Pant", style: { width: "100%", display: "block" } })
    ),

    /* ======= SECTION 2: HOOK + VALIDATION (Letter pattern) ======= */
    React.createElement(Band, { from: BG_HERO, to: BG_LETTER }),
    React.createElement(Letter, { bg: BG_LETTER, first: c.hook, paras: [c.validation] }),

    React.createElement(Band, { from: BG_LETTER, to: BG_SOCIAL }),

    /* ======= SECTION 3: THREE-FAMILY TESTIMONIALS (SP-08 pattern: Stacked Mini-Reviews) ======= */
    React.createElement("div", { style: { background: BG_SOCIAL, padding: "24px 14px 8px" } },
      React.createElement("div", { style: { padding: "0 8px", marginBottom: 18 } },
        React.createElement(Eyebrow, null, "Three parents. Three different kids."),
        React.createElement(H2, { size: 22 }, "One common experience before Body-Signal:")
      ),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
        c.testimonials.map(function(t, i) {
          return React.createElement("div", { key: i, style: { background: "#FFFFFF", border: "2px solid " + B.ink, borderLeft: "4px solid " + accents[i], borderRadius: 16, overflow: "hidden", boxShadow: "3px 3px 0 " + B.ink } },
            React.createElement("div", { style: { padding: "20px 18px" } },
              React.createElement("div", { style: { fontSize: 36, lineHeight: 0.8, color: accents[i], fontWeight: 700, marginBottom: 8 } }, "\u201C"),
              React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0, fontStyle: "italic" } }, t.text)
            )
          );
        })
      ),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "18px 8px 0" } }, c.testimonialClosing)
    ),

    React.createElement(Band, { from: BG_SOCIAL, to: BG_MECHANISM }),

    /* ======= SECTION 4: MECHANISM (EDU-8 pattern: Mechanism Diagram) ======= */
    React.createElement("div", { style: { background: BG_MECHANISM, padding: "28px 22px 16px" } },
      React.createElement(Eyebrow, null, "Why nothing's worked"),
      React.createElement(H2, { size: 24 },
        "The signal ",
        React.createElement(GradientSpan, null, "timing"),
        " problem."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.mechanism),
      React.createElement("div", { style: { background: B.teal, borderRadius: 8, padding: 18, textAlign: "center", marginBottom: 14 } },
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 18, color: "#FBF7F1", margin: 0, lineHeight: 1.5, fontWeight: 700 } }, c.mechanismPunch)
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.mechanismSolution)
    ),

    React.createElement(Band, { from: BG_MECHANISM, to: BG_TIMELINE }),

    /* ======= SECTION 5: TIMELINE (EMO-5 pattern: Realistic Timeline) ======= */
    React.createElement("div", { style: { background: BG_TIMELINE, padding: "28px 22px 16px" } },
      React.createElement(Eyebrow, { color: "#7A5FA8" }, "What to expect"),
      React.createElement(H2, { size: 22 },
        "Every timeline is ",
        React.createElement(GradientSpan, null, "normal."),
        "."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.timeline)
    ),

    React.createElement(Band, { from: BG_TIMELINE, to: BG_PRODUCT }),

    /* ======= SECTION 6: PRODUCT + PHOTOS ======= */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "28px 22px 16px" } },
      React.createElement(Eyebrow, null, "The product in your cart"),
      React.createElement(H2, { size: 24 },
        "Body-Signal Learning ",
        React.createElement(GradientSpan, null, "Layer\u2122"),
        React.createElement("br"),
        "Underwear"
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 16px" } }, c.productIntro)
    ),

    /* 3 product photos */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "0 14px 20px", display: "flex", gap: 8 } },
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
    ),

    React.createElement(Band, { from: BG_PRODUCT, to: BG_GUARANTEE }),

    /* ======= SECTION 7: GUARANTEE (TRUST-1 pattern: 60-Day Seal) ======= */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "28px 22px 32px", textAlign: "center" } },
      React.createElement(Eyebrow, null, "Our promise"),
      React.createElement(H2, { size: 26, center: true },
        "The ",
        React.createElement(GradientSpan, null, "60-Day"),
        " Calm Progress Guarantee."
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.65, color: B.soft, margin: "0 0 16px", fontStyle: "italic" } }, c.guarantee),
      React.createElement("div", { style: { display: "inline-flex", flexDirection: "column", alignItems: "center", width: 160, height: 160, background: "#FFFFFF", borderRadius: "50%", border: "3px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink, justifyContent: "center", marginBottom: 16 } },
        React.createElement("div", { style: { fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 } }, "Protected by"),
        React.createElement("div", { style: { fontSize: 48, fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" } }, "60"),
        React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: B.ink, marginTop: 2 } }, "Calm Days"),
        React.createElement("div", { style: { fontSize: 10, color: B.soft, marginTop: 4 } }, "Full refund / No questions")
      ),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.65, color: B.ink, margin: "0 0 12px", fontWeight: 600 } }, c.guaranteeClosing),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.65, color: B.soft, margin: 0, fontStyle: "italic" } }, c.permission)
    ),

    React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 50 }),

    /* ======= SECTION 8: CTA ======= */
    React.createElement(CTAClose, { intro: c.ctaIntro, button: c.ctaButton, fine: c.ctaFinePrint }),

    /* ======= SIGNOFF ======= */
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.CheckoutE2 = CheckoutE2;
