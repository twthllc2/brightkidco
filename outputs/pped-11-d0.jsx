/* PP-Education D0 — Flow 11, E1 — Day 0 (Immediate post-purchase)
   Copy: pped-11-d0.md
   Pattern: Post-Purchase Education, Cross-Level
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

window.FLOW1_SHARED = {
  signoff: {
    line1: "With understanding,",
    name: "Lena Bauer",
    ps: "P.S. Both my sons went through this. One showed first awareness at 2 weeks. The other took 3 months. Both got there in their own time. Your child will too."
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
  return React.createElement(
    "div",
    { style: { background: props.bg, padding: "24px 20px 0", textAlign: "center" } },
    React.createElement("img", {
      src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#1A1A1A">BrightKidCo</text></svg>'),
      alt: "BrightKidCo",
      style: { height: 34 }
    })
  );
};

var Eyebrow = function(props) {
  return React.createElement("div", {
    style: {
      fontSize: 10.5,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: props.color || B.tealDeep,
      fontWeight: 700,
      marginBottom: 10
    }
  }, props.children);
};

var GradientSpan = function(props) {
  return React.createElement("span", {
    style: {
      background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
      fontWeight: 700
    }
  }, props.children);
};

var Signoff = function(props) {
  var s = window.FLOW1_SHARED.signoff;
  return React.createElement(
    "div",
    { style: { background: props.bg || B.ink, padding: "0 22px 36px" } },
    React.createElement(
      "div",
      { style: {
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden"
      } },
      React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.gradient, opacity: 0.9 } }),
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 } },
        React.createElement(
          "div",
          { style: {
            width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, " + B.teal + " 100%)",
            padding: 2.5
          } },
          React.createElement(
            "div",
            { style: {
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden", border: "1.5px solid " + B.ink
            } },
            React.createElement(
              "svg", { width: 58, height: 58, viewBox: "0 0 58 58" },
              React.createElement("rect", { width: 58, height: 58, fill: "#F5E8D0" }),
              React.createElement("circle", { cx: 29, cy: 22, r: 10, fill: "#D4A574" }),
              React.createElement("path", { d: "M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z", fill: "#C98C6B" })
            )
          )
        ),
        React.createElement(
          "div",
          { style: { flex: 1, minWidth: 0 } },
          React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 } }, "A note from"),
          React.createElement("div", { style: { fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 } }, s.name),
          React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Customer Support / Mom of two autistic sons")
        )
      ),
      React.createElement(
        "div",
        { style: {
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16
        } },
        React.createElement(
          "div",
          { style: { flex: 1 } },
          React.createElement("div", { style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 } }, s.line1),
          React.createElement("div", { style: {
            fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
            fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2
          } }, "Lena")
        ),
        React.createElement(
          "svg",
          { width: 54, height: 40, viewBox: "0 0 54 40", style: { flexShrink: 0, opacity: 0.55 } },
          React.createElement("path", { d: "M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round" }),
          React.createElement("path", { d: "M48,12 L52,10 L50,14", stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
        )
      ),
      React.createElement(
        "div",
        { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" } },
        React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.S."),
        s.ps.replace(/^P\.S\.\s*/, "")
      )
    )
  );
};

var OutLine = function(props) {
  return React.createElement(
    "div",
    { style: {
      background: props.bg || "#FFFFFF",
      padding: "18px 24px 0",
      textAlign: "center",
      fontSize: 12.5,
      color: B.muted,
      fontStyle: "italic"
    } },
    window.FLOW1_SHARED.out
  );
};

var Footer = function() {
  var f = window.FLOW1_SHARED.footer;
  return React.createElement(
    "div",
    { style: { background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" } },
    React.createElement("div", {
      style: {
        fontFamily: F.display, fontSize: 20, fontStyle: "italic",
        fontWeight: 500, color: B.ink, marginBottom: 30, letterSpacing: -0.2
      }
    }, f.tagline),
    f.links.map(function(l, i) {
      return React.createElement(
        "div",
        { key: i, style: { fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 } },
        React.createElement("a", { href: "#", style: { color: B.ink, textDecoration: "none" } }, l)
      );
    }),
    React.createElement(
      "div",
      { style: { fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 } },
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
  return React.createElement(
    "div",
    { style: { width: MW, background: props.bg, fontFamily: F.main, color: B.ink } },
    React.createElement("div", {
      style: {
        padding: "6px 20px", fontSize: 11, color: B.muted,
        background: "#F6F2EA", textAlign: "center", fontStyle: "italic"
      }
    }, props.preheader),
    props.children
  );
};

/* 3. EMAIL DATA */
var emailData = {
  preheader: "No prompts. No pressure. Just one hour of wearing. Here's what Week 1 looks like.",
  heroBadge: "Week 1 Guide",
  /* Hook */
  hook1: "Whether your child is 3 or 10, verbal or non-verbal, newly navigating this or years into the journey, if the \"I need to go\" signal hasn't been arriving the way traditional methods assume it should, you're in the right place.",
  hook2: "Your Bright Body-Signal underwear has arrived (or is on its way to you now). Maybe you're excited. Maybe you're skeptical. Maybe you're both, and that's completely normal.",
  hook3: "You bought this because something wasn't working with every other method you tried. That wasn't you. That wasn't your child. That was a signal-timing gap, a piece most potty training approaches simply don't address.",
  /* Week 1 Guide */
  week1Intro: "Here's the approach for the first seven days:",
  week1Bold: "Put the underwear on like regular underwear. Let your child wear it for 1\u20132 hours daily. No prompts. No pressure. No timer sits. No \"tell me when you need to go.\"",
  week1Body: "Just let the sensation do the teaching.",
  week1Detail: "For Week 1, the only goal is: let your child's nervous system notice a new feeling. That's it. Not the toilet. Not a \"success.\" Not a change in bathroom behavior.",
  week1Note: "If your child touches the underwear, looks down, pauses during play, or shows any curiosity, that's enough. If they show nothing for the entire week, that's also exactly right.",
  /* Three-Family Testimonials */
  familyIntro: "Three parents, three different kids, one common starting point:",
  family1: "My son put them on, played for an hour, and I saw nothing. On Day 6 he paused mid-play and looked down. That was the first time in 3 years he's noticed anything.",
  family2: "My daughter screamed when we tried to put them on. I almost gave up. Day 4 she tolerated 45 minutes. That was our win for the week.",
  family3: "We're on Day 10 and haven't seen anything yet. I'm trying to trust the process. My husband says I'm impatient. Maybe he's right.",
  familyClosing: "If any of those sound like your morning, keep going. You're not behind. You're not doing it wrong.",
  /* Recognition Anchors */
  anchorsIntro: "Here's what Week 1 typically looks like across different kids:",
  anchors: [
    "He sits on the toilet, you wait, nothing happens. Then 30 seconds after you put the pull-up back on, there's pee in it.",
    "She plays in a wet pull-up without flinching. Hasn't noticed in years.",
    "He doesn't react when he's wet. Doesn't ask for a change. Doesn't acknowledge it happened.",
    "She knows what to do but won't do it. \"Almost trained\" for months or longer.",
    "He's been in pull-ups for years and you've stopped counting the attempts."
  ],
  anchorsClosing: "If even one of these describes your child, you bought the right product. The mechanism is built for exactly this.",
  /* Timeline */
  timelineTitle: "When will something happen?",
  timelineBody: "Timelines vary, and that's not a bug, it's how nervous systems work:",
  timelineItems: [
    "Some kids show first awareness in 1\u20132 weeks (a pause, a look down, a step toward the bathroom)",
    "Others need 4\u20138 weeks of consistent wear before the signal starts registering",
    "Some require 12+ weeks"
  ],
  timelineClosing: "All of these are normal. The nervous system doesn't follow a calendar.",
  /* Wins */
  winsTitle: "What counts as a win this week:",
  wins: [
    "They wore the underwear for any amount of time without a fight",
    "They paused, even once, during an accident",
    "They touched their pants while wet or pulled at them",
    "They showed curiosity about the underwear",
    "They tolerated it for 30+ minutes",
    "They said \"wet\" or showed you with a gesture",
    "They stayed dry 2 hours instead of 30 minutes"
  ],
  winsClosing: "That's a real win. Not \"fully trained.\" Not \"accident-free.\" Any one of these.",
  /* Mechanism */
  mechanismBody: "The reason standard methods fail isn't motivation or defiance. It's neurology.",
  mechanismStat: "49%",
  mechanismStatText: " of autistic 4\u20135 year olds aren't toilet trained yet",
  mechanismDetail: "\u2014 not because parents didn't try, but because traditional methods assume a signal that isn't reliably arriving.",
  mechanismSolution: "The BSL Layer creates a gentle sensation lasting 30\u201360 seconds that gives the brain time to register: something happened. Pull-ups wick that sensation away completely. Week 1 is about reintroducing that sensation.",
  /* CTA */
  ctaBody: "Week 1 is about showing up. Nothing more.",
  ctaDetail: "If your child wears the underwear for one hour today, even if nothing \"happens\", you've done enough.",
  ctaTeaser: "When you're ready for Week 2, I'll be here.",
  ctaButton: "Keep a progress log",
  ctaTracking: "Tracking tiny signs, a pause, a look, a touch, helps you see what's actually changing.",
  nextTeaser: "Next time: What Week 1 actually looks like, and why no news is good news.",
  /* P.S. */
  ps1: "P.S. Both my sons went through this. One showed first awareness at 2 weeks. The other took 3 months. Both got there in their own time. Your child will too.",
  ps2: "P.S. Track every pause, every look, every gesture this week. Those tiny moments matter more than you think."
};

/* 4. MAIN COMPONENT */
var PPED11D0 = function() {
  var c = emailData;

  /* Palette from creative strategy */
  var BG_MAIN = "#FAF9F7";
  var BG_CREAM = "#FBF7EB";
  var BG_MINT = "#DBFFCD";
  var BG_WHITE = "#FFFFFF";
  var C_DARK = "#1A1A1A";
  var C_BODY = "#4A4A4A";
  var C_MINT = "#DBFFCD";
  var C_GREEN = "#039902";
  var C_YELLOW = "#F5C84B";

  var cardStyle = {
    background: BG_CREAM,
    borderRadius: 16,
    padding: "28px 24px"
  };

  var sectionPad = { padding: "0 24px" };

  return React.createElement(
    EmailShell,
    { preheader: c.preheader, bg: BG_MAIN },

    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_MAIN }),

    /* ======= WEEK 1 GUIDE BADGE ======= */
    React.createElement(
      "div",
      { style: { background: BG_MAIN, padding: "24px 24px 0", textAlign: "center" } },
      React.createElement("span", {
        style: {
          display: "inline-block",
          background: BG_MINT,
          color: C_DARK,
          padding: "6px 18px",
          borderRadius: 20,
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          fontWeight: 700
        }
      }, c.heroBadge)
    ),

    /* ======= PRODUCT IMAGE ======= */
    React.createElement(
      "div",
      { style: { background: BG_MAIN, padding: "20px 24px 0", textAlign: "center" } },
      React.createElement("img", {
        src: "data:image/jpeg;base64," + window.IMG_CLOUD,
        alt: "BrightKidCo Cloud Raindrop training pants",
        style: { width: 200, height: 200, objectFit: "cover", borderRadius: 16, border: "2px solid " + C_DARK }
      })
    ),

    /* ======= SECTION 1: HOOK + VALIDATION ======= */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingTop: 32, paddingBottom: 8 }) },
      React.createElement("h1", {
        style: {
          fontFamily: F.display,
          fontSize: 24,
          lineHeight: 1.5,
          color: C_DARK,
          margin: "0 0 16px",
          fontWeight: 400
        }
      }, c.hook1),
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 14px" }
      }, c.hook2),
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: 0 }
      }, c.hook3)
    ),

    /* ======= SECTION 2: WEEK 1 GUIDE ======= */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingTop: 24, paddingBottom: 24 }) },
      React.createElement(
        "div",
        { style: cardStyle },
        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_DARK, margin: "0 0 16px" }
        }, c.week1Intro),
        React.createElement("p", {
          style: {
            fontSize: 17,
            lineHeight: 1.7,
            color: C_DARK,
            margin: "0 0 16px",
            fontWeight: 600,
            fontStyle: "italic"
          }
        }, c.week1Bold),
        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 14px", fontStyle: "italic" }
        }, c.week1Body),
        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 14px" }
        }, c.week1Detail),
        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: 0 }
        }, c.week1Note)
      )
    ),

    /* ======= SECTION 3: THREE-FAMILY TESTIMONIALS ======= */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingBottom: 24 }) },
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_DARK, margin: "0 0 16px" }
      }, c.familyIntro),

      /* Testimonial 1 */
      React.createElement(
        "div",
        { style: { background: BG_CREAM, borderRadius: 12, padding: "18px 18px", marginBottom: 8 } },
        React.createElement("p", {
          style: { fontSize: 16, lineHeight: 1.6, color: C_BODY, margin: 0, fontStyle: "italic" }
        }, "\u201C" + c.family1 + "\u201D")
      ),

      /* Mint separator */
      React.createElement("div", { style: { height: 3, background: C_MINT, borderRadius: 2, marginBottom: 8 } }),

      /* Testimonial 2 */
      React.createElement(
        "div",
        { style: { background: BG_CREAM, borderRadius: 12, padding: "18px 18px", marginBottom: 8 } },
        React.createElement("p", {
          style: { fontSize: 16, lineHeight: 1.6, color: C_BODY, margin: 0, fontStyle: "italic" }
        }, "\u201C" + c.family2 + "\u201D")
      ),

      /* Mint separator */
      React.createElement("div", { style: { height: 3, background: C_MINT, borderRadius: 2, marginBottom: 8 } }),

      /* Testimonial 3 */
      React.createElement(
        "div",
        { style: { background: BG_CREAM, borderRadius: 12, padding: "18px 18px", marginBottom: 16 } },
        React.createElement("p", {
          style: { fontSize: 16, lineHeight: 1.6, color: C_BODY, margin: 0, fontStyle: "italic" }
        }, "\u201C" + c.family3 + "\u201D")
      ),

      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: 0 }
      }, c.familyClosing)
    ),

    /* ======= SECTION 4: RECOGNITION ANCHORS ======= */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingBottom: 24 }) },
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_DARK, margin: "0 0 14px" }
      }, c.anchorsIntro),

      c.anchors.map(function(anchor, i) {
        return React.createElement(
          "div",
          { key: i, style: { display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" } },
          React.createElement("span", {
            style: { fontSize: 16, color: C_BODY, flexShrink: 0, marginTop: 1 }
          }, "\u2014"),
          React.createElement("p", {
            style: { fontSize: 16, lineHeight: 1.6, color: C_BODY, margin: 0 }
          }, anchor)
        );
      }),

      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_DARK, margin: "14px 0 0", fontWeight: 600 }
      }, c.anchorsClosing)
    ),

    /* ======= SECTION 5: TIMELINE + WINS ======= */
    /* Timeline */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingBottom: 20 }) },
      React.createElement("h2", {
        style: {
          fontFamily: F.display,
          fontSize: 20,
          fontWeight: 700,
          color: C_DARK,
          margin: "0 0 12px"
        }
      }, c.timelineTitle),
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 12px" }
      }, c.timelineBody),

      c.timelineItems.map(function(item, i) {
        return React.createElement(
          "div",
          { key: i, style: { display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" } },
          React.createElement("span", {
            style: { fontSize: 16, color: C_BODY, flexShrink: 0, marginTop: 1 }
          }, "\u2014"),
          React.createElement("p", {
            style: { fontSize: 16, lineHeight: 1.6, color: C_BODY, margin: 0 }
          }, item)
        );
      }),

      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_DARK, margin: "12px 0 0", fontWeight: 600 }
      }, c.timelineClosing)
    ),

    /* Wins */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingBottom: 28 }) },
      React.createElement(
        "div",
        { style: { background: BG_MINT, borderRadius: 16, padding: "24px 24px" } },
        React.createElement("h2", {
          style: {
            fontFamily: F.display,
            fontSize: 20,
            fontWeight: 700,
            color: C_DARK,
            margin: "0 0 14px"
          }
        }, c.winsTitle),

        c.wins.map(function(win, i) {
          return React.createElement(
            "div",
            { key: i, style: { display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" } },
            React.createElement("span", {
              style: { fontSize: 16, color: C_BODY, flexShrink: 0, marginTop: 1 }
            }, "\u2014"),
            React.createElement("p", {
              style: { fontSize: 16, lineHeight: 1.6, color: C_BODY, margin: 0 }
            }, win)
          );
        }),

        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_DARK, margin: "14px 0 0", fontWeight: 600 }
        }, c.winsClosing)
      )
    ),

    /* ======= SECTION 6: MECHANISM DEEP DIVE ======= */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingBottom: 28 }) },
      React.createElement(
        "div",
        { style: cardStyle },
        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 14px" }
        }, c.mechanismBody),

        /* Stat highlight */
        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 14px" }
        },
          React.createElement("span", {
            style: {
              background: C_YELLOW,
              padding: "2px 8px",
              borderRadius: 4,
              fontWeight: 700,
              color: C_DARK
            }
          }, c.mechanismStat),
          React.createElement("span", null, c.mechanismStatText),
          React.createElement("span", null, c.mechanismDetail)
        ),

        React.createElement("p", {
          style: { fontSize: 17, lineHeight: 1.7, color: C_DARK, margin: 0, fontWeight: 600 }
        }, c.mechanismSolution)
      )
    ),

    /* ======= SECTION 7: CTA ======= */
    React.createElement(
      "div",
      { style: Object.assign({}, sectionPad, { paddingBottom: 28 }) },
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 10px" }
      }, c.ctaBody),
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 14px" }
      }, c.ctaDetail),
      React.createElement("p", {
        style: { fontSize: 17, lineHeight: 1.7, color: C_BODY, margin: "0 0 20px", fontStyle: "italic" }
      }, c.ctaTeaser),

      /* CTA Button */
      React.createElement("a", {
        href: "#",
        style: {
          display: "block",
          background: C_GREEN,
          color: "#FFFFFF",
          fontSize: 17,
          fontWeight: 400,
          textDecoration: "none",
          padding: "16px 32px",
          borderRadius: 50,
          textAlign: "center",
          minHeight: 48,
          lineHeight: "48px"
        }
      }, c.ctaButton + " \u2192"),

      React.createElement("p", {
        style: {
          fontSize: 14,
          lineHeight: 1.6,
          color: C_BODY,
          margin: "14px 0 0",
          textAlign: "center",
          fontStyle: "italic"
        }
      }, c.ctaTracking),

      React.createElement("p", {
        style: {
          fontSize: 17,
          lineHeight: 1.7,
          color: C_BODY,
          margin: "24px 0 0"
        }
      }, c.nextTeaser)
    ),

    /* ======= SIGNOFF ======= */
    React.createElement(Signoff, null),

    /* ======= P.S. LINES ======= */
    React.createElement(
      "div",
      { style: { background: B.ink, padding: "0 24px 20px" } },
      React.createElement("p", {
        style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 8px", fontStyle: "italic" }
      }, c.ps1),
      React.createElement("p", {
        style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: 0, fontStyle: "italic" }
      }, c.ps2)
    ),

    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.PPED11D0 = PPED11D0;
