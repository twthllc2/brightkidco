/* PP Mid Check-In D45, Check-In E2 (Flow 13, Day 45)
   Cross-Level (L1/L2/L3/GF) | Phase 2 | Wave 6
   Built from: mid-13-d45.md
   Pattern: Giuliano reference primitives
   Images: embedded product photos
*/

/* 1. BRAND TOKENS */
window.BRAND = {
  teal: "#2BAEB4",
  tealDeep: "#1E8A8F",
  green: "#5DD07A",
  greenDeep: "#3BB35E",
  brandGreen: "#039902",
  mint: "#DBFFCD",
  creamCard: "#FBF7EB",
  creamAlt: "#FAF5E8",
  brandYellow: "#F5C84B",
  softGray: "#9AA8A7",
  darkText: "#1A1A1A",
  bodyGray: "#4A4A4A",
  offWhite: "#FAF9F7",
  ink: "#1F2D2F",
  soft: "#4A6568",
  muted: "#8A9B9D",
  cream: "#FBF7F1",
  paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)"
};

window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif"
};

/* 2. SHARED DATA */
window.FLOW13_SHARED = {
  signoff: {
    name: "Lena",
    role: "Customer Support, Mom of two autistic sons"
  },
  out: "Reply to this email. Lena reads every response."
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
    React.createElement("img", { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#1A1A1A">BrightKidCo</text></svg>'), alt: "BrightKidCo", style: { height: 34 } })
  );
};

var Divider = function() {
  return React.createElement("div", {
    style: { height: 1, background: "#9AA8A7", margin: "0 22px" }
  });
};

var CTAClose = function(props) {
  return React.createElement("div", { style: { background: props.bg || "#1A1A1A", padding: "20px 22px 44px", textAlign: "center", color: "#FFF" } },
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" } }, props.intro),
    React.createElement("a", { href: "#", className: "bk-cta-btn", style: { display: "inline-block", padding: "17px 32px", background: "#039902", color: "#FFF", fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, props.button),
    props.fine ? React.createElement("div", { style: { marginTop: 16, fontSize: 11.5, color: "#8A9B9D" } }, props.fine) : null
  );
};

var EmailShell = function(props) {
  return React.createElement("div", { style: { width: MW, background: props.bg, fontFamily: F.main, color: "#1A1A1A" } },
    React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: "#8A9B9D", background: "#F6F2EA", textAlign: "center", fontStyle: "italic" } }, props.preheader),
    props.children
  );
};

/* 4. EMBEDDED IMAGES */
var IMG_PROD1 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzYqCoKloAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmYl1rNNZZLvnoqC3GjTntKKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZvKUGrJDTOymC5x0XWmWXTETpMZOtzU0yNIqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHOMtVrM1kxbGrvOknHRda8fK8++fJmX6XPlwXt7Pk+28++/Di5+p083SdN6xuVcjVzE2zSpQKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTUSJNQk1FhFqCwJ5O3hz16Zlz1573ZeeN5atmDl7uOdcO/Xy+vt4fY5bz2upJomi5C2ZTdxo0zUqCpaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGS+fhwx27+vwe2tovOlJRFkKCNedeHK55+nUzVjnsnSJWufS5iF6a566eV7fL6Nct5us9bkJuQGixlNXOi5YNs+a47X5mj698fqm9JbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxlvz5jHpRrPS/R8P0N8Fk1x1MlpolZTWc4a6fP9Pgx2TLn6L4/X1ufmfV1m89ZRrPTnzX0b8/VN4a1jr05dOvh9KXPWalIoEM1osc1OeLJ5dccdp3xrHa+/wCX9LXP0RnfDeudTaVAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcJXy+vLHp4enVzqJlfd38nq6ecurjOkLmZLmRuSprl4vb5sdcTvzzrye2NZuZzzvefP7LOfTrIrKyzXbWOHs73fmJDTFNJRLBchx3xucct8M9GLeXt1LhMfU+d6dY9szrp59VpkmE6XGjTNSigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxHgjn6iM7RTN0N+/5vq3x9OY1ySFhVzd0xemU83nZ5+";

var IMG_PROD2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI0zDc5U2xk3MxNzjTvrzdV7OfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIKyNMjTI0zRLhNMaIczrhV8tQ9OVOfTl0PPeuU8/fllfb046O4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUILBCCpg3lAUpBc1RmuiWGbDnvOTrz6QxvnouOmCaxTFsKQx5fZ4j3a49Tvvj2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCpDSZNXNKkKzUWAQ0lIBc1ZNYN5aOd1g0zosUzZRnUq2IJDXPQa56MzWLOlxuXnntyNc95Ly65Mef1Q4erx+k7ejz9jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCoKzSyCyEqCuMXulpAXNi51DO8bEsqyolzqgM6zUubZcakNs0k3gqC5cTtrz9jUuSSC6xomkElJc00tONuCyhWzxa9HE7ejyeo2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI1JDTFTSZNM0uWa1rnssSIK0SODpF6WUAzqCiprNiwFlIsJc0q4FzTUlM3NNMQ0xTXDrzOfo8vc6yaE3TjeuCSUZ68zOvPuT0OOjclOemarnDteWj";

var IMG_PROD3 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAL3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUQWQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKloy1AQQskEzSR5fpo8Sacuev0l/B9vXPS1IudESoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAmAIgtFanlc3s/LTX0/V53ZZvWtkTWCSpMoI+a+n8+Xxe7zrx9TPk+rqWvnZLBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBKtctIx5s3tjze7N1vzybVT1zW2Vq0pYUmJHlermTfLYytFTXn247m/V4ftbxa+dufW2esHy3D7fn53l7XH0r688Pdrnec9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQSiQgTEgCmHVlz1nzabcemU0TrMRaks7cyuvLR6OVb5XLUvBFZkzvUXy1gzmLJ4PfTzu3n+mrTXj6JtnZfO8b3/Czv376U1jg67+Qvt6ZymgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPhl7643rac9ETFDTDXzNc/ScnZLW2Sb2VlJgXze3G3m79VZenzqpMOfv5ePbTfj2TSJr256UtQsrYUmpa2Vic9MifnPpObWOT2OLqLFc7w5ujzpr3Ix2uXie35x2a+d6RpNLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEgETAmAlEFoiAVNKyObg6OHrw39XyO9OjPavL0Z6VJorJTK8cems0t25znMF4rJgtXz9raVtrN7Ut2wlBGe1THRJbOfNufSnx9t8/TedpL2xybZ1XwPp+TPXxvV5eXOvo68Ho6x51fR4F9KfH9ZNFbWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqWYxZu5K3PXjwN89q8/HrH0056cPVVFVtMSTCBCCUCYkTNbHB5vveN0466a21nrg4+iUSkJzXOIr5O/Rpy9fo5UjVvHPfSDNpWWmt";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "Here's what to check, and what's actually normal right now.",
  heroBadge: "Day 45 check-in",
  h1a: "If progress is slower",
  h1b: "than you hoped",
  hook: "Whether you're seeing the first tiny signs or nothing at all yet, 45 days in, I want to check in with something real.",
  hook2: "If progress is slower than you hoped, here's what we know about this stage.",
  hook3: "Some kids show their first clear awareness around Day 30-45. Others are just starting to register the sensation, a pause before the accident, a look down, a hand touching wet fabric. And some are still in the \"wearing it without noticing\" phase. All three of these are on the spectrum of normal at Day 45.",
  hook4: "The 60-day window exists because every nervous system builds awareness on its own schedule. If your child is 3 or 10, verbal or not, diagnosed or still figuring it out, the body-signal pathway doesn't follow a calendar.",
  validation: "If you're feeling discouraged, that's fair. You've been at this for weeks. You're washing underwear, watching for signs, and wondering if anything is changing.",
  validationBold: "the absence of visible progress is not the same as the absence of progress.",
  validation2: "The interoception pathway in the brain builds through repetition of sensation, not through the absence of accidents. Every time your child wears the Body-Signal underwear, the nervous system is receiving input it's never had before. Even if nothing looks different on the outside, the wiring is happening underneath.",
  validation3: "Both my sons went through this. One showed awareness at 5 weeks. The other took almost 12. Both got there, but their nervous systems had different timelines.",
  troubleshootingIntro: "Here are three common things to check if you're at Day 45 and wondering where the progress is:",
  check1Title: "Wear consistency",
  check1Body: "Are they getting 2-3 hours of uninterrupted wear in the Body-Signal underwear daily? The signal needs sustained exposure. Short on-and-off wears don't give the brain enough repetition. If they'll tolerate longer, try extending.",
  check2Title: "Bathroom stress",
  check2Body: "Is there tension around potty time? If your child senses pressure, verbal prompting, hovering, checking, their nervous system may be bracing rather than receiving. Reduce prompts. Let the underwear do the teaching. The \"uh-oh\" sensation teaches what pressure can't.",
  check3Title: "Regression after early signs",
  check3Body: "If you saw progress and then it disappeared, that's not starting over. That's the nervous system recalibrating. The pathways you built are still there. Regression at this stage is common and temporary. Hold steady.",
  testimonialIntro: "Every family's Day 45 looks different. Here are three real experiences:",
  sarah: "He went from 'sometimes' to 'most times' around week 6. Pre-K is in September, for the first time, I think we'll make it.",
  lisa: "She paused before she peed. Just once. After 4 years of nothing, that was the first time I knew the signal existed. It happened Week 7.",
  maria: "He's not trained. But he looked down at his wet underwear for the first time in 9 years. That's nothing. That's a real change.",
  testimonialClosing: "If any of these sound familiar, the signal is working. It just needs more time.",
  mechanismTitle: "Why Day 45 often looks quiet",
  mechanismBody: "Nicholson et al. (2019) found that autistic children show a measurable delay in body awareness, the ability to sense internal body states like bladder fullness. The Body-Signal Learning Layer creates a sustained 30-60 second \"uh-oh\" sensation after every accident, giving the brain a consistent feedback signal it's never had before.",
  mechanismBody2: "Building a neural pathway that converts that feedback into awareness takes time. For some kids, 2-4 weeks. For others, 8-12 weeks. Both are real outcomes. The 60-day window isn't a deadline, it's the minimum time the nervous system needs to show whether the signal is starting to register.",
  productIntro: "If you started with 1 pair and you're wondering whether more consistent wear would help, most parents find that having 3-6 pairs in rotation makes the difference. More pairs mean more consistent daily wear, less laundry stress, and fewer days where the underwear isn't available.",
  bundle1: "If you have 1 pair:",
  bundle1Text: "The 3+3 Bundle (\u20ac79.99, free shipping) gives you enough rotation for consistent daily wear.",
  bundle2: "If you have 3+3:",
  bundle2Text: "You're set. Keep the rotation going.",
  bundle3: "If you need nothing:",
  bundle3Text: "That's fine too. The underwear does the work.",
  guarantee: "If you're at Day 45 and nothing has changed, the 60-day guarantee is here. If you decide this approach isn't right for your child, you get every dollar back. No questions. No hoops.",
  guarantee2: "But before you make that call: try the three checks above for one more week. Sometimes all it takes is a small adjustment.",
  ctaIntro: "See if your child's signal is starting",
  ctaButton: "Check in on your progress \u2192",
  ctaFine: "\u20ac13.33 per pair with the bundle, less than half the single-pair price.",
  nextTime: "Next time: Day 60, the moment of truth. What to expect and what comes after.",
  signoffLine: "I know 45 days feels like a long time when you're waiting for change. But I also know what it's like to look back and realize the shift happened in small, invisible steps you couldn't see from inside it. Keep going. The wiring is happening.",
  ps: "Hit reply anytime. I read every message. If you want to tell me what you're seeing (or not seeing) with your child, I'll respond with whatever I can offer.",
  footerBrand: "BrightKidCo \u00b7 support@brightkidco.com",
  footerAddress: "123 Main Street, Portland, OR 97201",
  footerUnsub: "You're receiving this because you purchased BrightKidCo Body-Signal Learning Underwear. We'll never spam you, just honest check-ins."
};

/* 6. MID-13-D45 COMPONENT */
var Mid13D45 = function() {
  var c = emailData;
  var BG = "#FAF9F7";
  var BG_CREAM = "#FBF7EB";
  var BG_MINT = "#DBFFCD";
  var BG_ALT = "#FAF5E8";
  var GREEN = "#039902";
  var GRAY = "#9AA8A7";
  var DARK = "#1A1A1A";
  var BODY = "#4A4A4A";

  var checkCard = function(title, body) {
    return React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "16px 18px", marginBottom: 12, border: "1px solid #E0E0E0" } },
      React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 } },
        React.createElement("span", { style: { color: GREEN, fontSize: 16, fontWeight: 700, flexShrink: 0, marginTop: 1 } }, "\u2713"),
        React.createElement("div", null,
          React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 4 } }, title),
          React.createElement("div", { style: { fontSize: 14, lineHeight: 1.6, color: BODY } }, body)
        )
      )
    );
  };

  var testimonialCard = function(text, name, level, color) {
    return React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid " + DARK, borderLeft: "4px solid " + color, borderRadius: 16, overflow: "hidden", boxShadow: "3px 3px 0 " + DARK, marginBottom: 14 } },
      React.createElement("div", { style: { padding: "20px 18px" } },
        React.createElement("div", { style: { fontSize: 36, lineHeight: 0.8, color: color, fontWeight: 700, marginBottom: 8 } }, "\u201C"),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: BODY, margin: "0 0 12px", fontStyle: "italic" } }, text),
        React.createElement("div", { style: { fontSize: 12, color: DARK, fontWeight: 700 } },
          "\u2014 " + name + ", ",
          React.createElement("span", { style: { fontWeight: 400, color: GRAY } }, level)
        )
      )
    );
  };

  var section = function(bg, children) {
    return React.createElement("div", { style: { background: bg, padding: "28px 22px" } }, children);
  };

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG },
    /* Header */
    React.createElement(Header, { bg: BG }),
    React.createElement(Divider),

    /* Title Block */
    React.createElement("div", { style: { padding: "34px 22px 0", textAlign: "center" } },
      React.createElement("div", {
        style: {
          display: "inline-block", background: "#FFD866", padding: "7px 14px",
          borderRadius: 999, fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5,
          textTransform: "uppercase", marginBottom: 16, border: "2px solid " + DARK,
          transform: "rotate(-1.5deg)", whiteSpace: "nowrap", lineHeight: 1.4
        }
      }, c.heroBadge),
      React.createElement("h1", {
        style: { fontSize: 34, lineHeight: 1.05, fontWeight: 700, margin: 0, letterSpacing: -0.8, color: DARK }
      },
        c.h1a,
        React.createElement("br"),
        React.createElement("span", { style: { color: GREEN, fontWeight: 700 } }, c.h1b)
      )
    ),

    /* Gradient Band to Cream Card */
    React.createElement(Band, { from: BG, to: BG_CREAM }),

    /* HOOK / OBSERVATION */
    section(BG_CREAM,
      React.createElement("div", null,
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 14px" } }, c.hook),
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 14px", fontWeight: 600 } }, c.hook2),
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 14px" } }, c.hook3),
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 } }, c.hook4)
      )
    ),

    React.createElement(Band, { from: BG_CREAM, to: BG }),

    /* VALIDATION */
    section(BG,
      React.createElement("div", null,
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 14px" } }, c.validation),
        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.6, color: BODY, margin: "0 0 14px", fontStyle: "italic", borderLeft: "3px solid " + GRAY, paddingLeft: 16 }
        }, c.validationBold),
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 14px" } }, c.validation2),
        React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 } }, c.validation3)
      )
    ),

    React.createElement(Band, { from: BG, to: BG_MINT, height: 50 }),

    /* TROUBLESHOOTING */
    React.createElement("div", { style: { background: BG_MINT, padding: "28px 22px" } },
      React.createElement("h2", { style: { fontSize: 20, lineHeight: 1.2, fontWeight: 700, margin: "0 0 16px", color: DARK } }, "Three things to check"),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 18px" } }, c.troubleshootingIntro),
      checkCard(c.check1Title, c.check1Body),
      checkCard(c.check2Title, c.check2Body),
      checkCard(c.check3Title, c.check3Body)
    ),

    React.createElement(Band, { from: BG_MINT, to: BG_CREAM, height: 50 }),

    /* THREE-FAMILY TESTIMONIALS */
    React.createElement("div", { style: { background: BG_CREAM, padding: "28px 22px" } },
      React.createElement("h2", { style: { fontSize: 20, lineHeight: 1.2, fontWeight: 700, margin: "0 0 16px", color: DARK } }, "Every family's Day 45 looks different"),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 18px" } }, c.testimonialIntro),
      testimonialCard(c.sarah, "Sarah", "Level 1", GREEN),
      testimonialCard(c.lisa, "Lisa", "Level 2", B.teal),
      testimonialCard(c.maria, "Maria", "Level 3", "#E8A23D"),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: BODY, margin: "18px 0 0" } }, c.testimonialClosing)
    ),

    React.createElement(Band, { from: BG_CREAM, to: BG }),

    /* MECHANISM / EDUCATION */
    React.createElement("div", { style: { background: BG, padding: "28px 22px" } },
      React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: GRAY, fontWeight: 700, marginBottom: 10 } }, "The science"),
      React.createElement("h2", { style: { fontSize: 20, lineHeight: 1.2, fontWeight: 700, margin: "0 0 16px", color: DARK } }, c.mechanismTitle),
      React.createElement("div", { style: { background: "#F0F0EE", borderRadius: 12, padding: "16px 18px", borderLeft: "3px solid " + GRAY } },
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: BODY, margin: "0 0 10px" } }, c.mechanismBody),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: BODY, margin: 0 } }, c.mechanismBody2)
      )
    ),

    React.createElement(Band, { from: BG, to: BG_ALT, height: 50 }),

    /* PRODUCT / OFFER */
    React.createElement("div", { style: { background: BG_ALT, padding: "28px 22px" } },
      React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: GRAY, fontWeight: 700, marginBottom: 10 } }, "The product"),
      React.createElement("h2", { style: { fontSize: 20, lineHeight: 1.2, fontWeight: 700, margin: "0 0 16px", color: DARK } }, "More pairs, more consistent wear"),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: BODY, margin: "0 0 16px" } }, c.productIntro),
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "16px 18px", marginBottom: 12, border: "1px solid #E0E0E0" } },
        React.createElement("div", { style: { fontSize: 14, lineHeight: 1.6, color: BODY } },
          React.createElement("strong", { style: { color: DARK } }, c.bundle1), " ", c.bundle1Text
        )
      ),
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "16px 18px", marginBottom: 12, border: "1px solid #E0E0E0" } },
        React.createElement("div", { style: { fontSize: 14, lineHeight: 1.6, color: BODY } },
          React.createElement("strong", { style: { color: DARK } }, c.bundle2), " ", c.bundle2Text
        )
      ),
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "16px 18px", marginBottom: 12, border: "1px solid #E0E0E0" } },
        React.createElement("div", { style: { fontSize: 14, lineHeight: 1.6, color: BODY } },
          React.createElement("strong", { style: { color: DARK } }, c.bundle3), " ", c.bundle3Text
        )
      )
    ),

    /* Product Photos */
    React.createElement("div", { style: { background: BG_ALT, padding: "0 14px 20px", display: "flex", gap: 8 } },
      [
        { src: IMG_PROD1, label: "Cloud Raindrop" },
        { src: IMG_PROD2, label: "Fox Woodland" },
        { src: IMG_PROD3, label: "Penguin Party" }
      ].map(function(img, i) {
        return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + DARK, boxShadow: "3px 3px 0 " + DARK } },
          React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 140, objectFit: "cover" } }),
          React.createElement("div", { style: { padding: "8px 10px", fontSize: 11, fontWeight: 700, color: DARK, textAlign: "center", borderTop: "2px solid " + DARK, background: "#FFFDF6" } }, img.label)
        );
      })
    ),

    React.createElement(Band, { from: BG_ALT, to: BG }),

    /* GUARANTEE */
    React.createElement("div", { style: { background: BG, padding: "28px 22px 20px", textAlign: "center" } },
      React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: GRAY, fontWeight: 700, marginBottom: 10 } }, "Our promise"),
      React.createElement("h2", { style: { fontSize: 22, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", color: DARK, textAlign: "center" } },
        "The ",
        React.createElement("span", { style: { color: GREEN } }, "60-Day"),
        " Guarantee"
      ),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.65, color: BODY, margin: "0 0 14px", fontStyle: "italic" } }, c.guarantee),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.65, color: BODY, margin: 0 } }, c.guarantee2)
    ),

    React.createElement(Band, { from: BG, to: DARK, height: 50 }),

    /* CTA */
    React.createElement(CTAClose, { intro: c.ctaIntro, button: c.ctaButton, fine: c.ctaFine }),

    /* LENA SIGN-OFF */
    React.createElement("div", { style: { background: DARK, padding: "0 22px 36px" } },
      React.createElement("div", {
        style: { position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40", borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden" }
      },
        React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.gradient, opacity: 0.9 } }),
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 } },
          React.createElement("div", {
            style: { width: 58, height: 58, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg, #FFD866 0%, " + B.teal + " 100%)", padding: 2.5 }
          },
            React.createElement("div", {
              style: { width: "100%", height: "100%", borderRadius: "50%", background: "#FFFDF6", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1.5px solid " + DARK }
            },
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
            React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Customer Support / Mom of two autistic sons")
          )
        ),
        React.createElement("div", {
          style: { display: "flex", alignItems: "flex-start", gap: 14, paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547", marginBottom: 16 }
        },
          React.createElement("div", { style: { flex: 1 } },
            React.createElement("div", { style: { fontSize: 14, lineHeight: 1.65, color: "#B8CACD" } }, c.signoffLine),
            React.createElement("div", {
              style: { fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 10 }
            }, "Lena"),
            React.createElement("svg", { width: 54, height: 40, viewBox: "0 0 54 40", style: { opacity: 0.55, display: "block", marginTop: -4 } },
              React.createElement("path", { d: "M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round" }),
              React.createElement("path", { d: "M48,12 L52,10 L50,14", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
            )
          )
        ),
        React.createElement("div", { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" } },
          React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
          c.ps
        )
      )
    ),

    /* OUTLINE */
    React.createElement("div", { style: { background: "#FFFFFF", padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: "#8A9B9D", fontStyle: "italic" } },
      window.FLOW13_SHARED.out
    ),

    /* FOOTER */
    React.createElement("div", { style: { background: "#FFFFFF", padding: "30px 24px", textAlign: "center" } },
      React.createElement("div", { style: { fontSize: 14, color: DARK, fontWeight: 500, marginBottom: 14 } }, c.footerBrand),
      React.createElement("div", { style: { fontSize: 13, lineHeight: 1.6, color: BODY, marginBottom: 16 } },
        React.createElement("a", { href: "#", style: { color: DARK, textDecoration: "underline" } }, "Unsubscribe"),
        " | ",
        React.createElement("a", { href: "#", style: { color: DARK, textDecoration: "underline" } }, "Update Preferences")
      ),
      React.createElement("div", { style: { fontSize: 12, color: "#8A9B9D", marginBottom: 8 } }, c.footerAddress),
      React.createElement("div", { style: { fontSize: 11.5, color: "#8A9B9D", lineHeight: 1.6, margin: "0 auto", maxWidth: 340 } }, c.footerUnsub),
      React.createElement("div", { style: { margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 } })
    )
  );
};

window.Mid13D45 = Mid13D45;
