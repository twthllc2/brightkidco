/* PP At-Risk E2 -- Cross-Level (Flow 23, Day 3)
   Built from: atrisk-23-e2.md
   Pattern: Troubleshooting Guide layout
   No hero image. Three diagnostic cards with accent bands.
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
  main: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  display: "'Fraunces', Georgia, serif"
};

/* 2. SHARED DATA */
window.FLOW1_SHARED = {
  signoff: {
    line1: "With understanding,",
    name: "Lena S.",
    ps: "P.S. 60 days to try it. By your judgment. If nothing shifts in that window, full refund."
  },
  out: "Or reply and tell me what's happening",
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

var EmailShell = function(props) {
  return React.createElement("div", {
    style: { width: MW, background: props.bg, fontFamily: F.main, color: B.ink }
  },
    React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" } }, props.preheader),
    props.children
  );
};

var Header = function(props) {
  return React.createElement("div", {
    style: { background: props.bg, padding: "24px 20px 0", textAlign: "center", borderBottom: "1px solid #E8E0D8" }
  },
    React.createElement("img", { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="34"><text x="75" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#1F2D2F">BrightKidCo</text></svg>'), alt: "BrightKidCo", style: { height: 34 } })
  );
};

var Band = function(props) {
  var height = props.height || 40;
  return React.createElement("div", {
    style: { height: height, background: "linear-gradient(180deg, " + props.from + " 0%, " + props.to + " 100%)" }
  });
};

var Eyebrow = function(props) {
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.tealDeep, fontWeight: 700, marginBottom: 10 } }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", { style: { fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left" } }, props.children);
};

/* Troubleshooting Card with left accent band */
var TroubleshootCard = function(props) {
  var accent = props.accent;
  return React.createElement("div", {
    style: {
      background: "#FFFFFF",
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
      overflow: "hidden",
      marginBottom: 32,
      display: "flex"
    }
  },
    /* Left accent band */
    React.createElement("div", {
      style: { width: 6, flexShrink: 0, background: accent }
    }),
    /* Card content */
    React.createElement("div", {
      style: { padding: "24px 22px", flex: 1 }
    },
      /* Icon circle */
      React.createElement("div", {
        style: {
          width: 44, height: 44, borderRadius: "50%",
          background: accent + "1A",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 0 14px"
        }
      },
        React.createElement("div", {
          style: { fontSize: 18, fontWeight: 700, color: accent }
        }, props.icon)
      ),
      /* Heading */
      React.createElement("div", {
        style: { fontSize: 18, fontWeight: 600, color: "#333333", lineHeight: 1.3, marginBottom: 12 }
      }, props.heading),
      /* Body text */
      React.createElement("div", {
        style: { fontSize: 16, lineHeight: 1.6, color: "#333333", marginBottom: 16 }
      }, props.body),
      /* What to try section */
      React.createElement("div", {
        style: { background: "#F9F7F4", borderRadius: 8, padding: "16px 18px", marginBottom: 16 }
      },
        React.createElement("div", {
          style: { fontSize: 16, fontWeight: 700, color: accent, marginBottom: 6 }
        }, "What to try:"),
        React.createElement("div", {
          style: { fontSize: 16, lineHeight: 1.6, color: "#444444" }
        }, props.solution)
      ),
      /* Parent quote */
      React.createElement("div", { style: { borderTop: "1px solid #E8E0D8", paddingTop: 12 } },
        React.createElement("div", {
          style: { fontSize: 13, fontWeight: 700, color: "#888888", marginBottom: 4 }
        }, "Verbatim parent note:"),
        React.createElement("div", {
          style: { fontSize: 15, lineHeight: 1.5, color: "#666666", fontStyle: "italic" }
        }, "\u201C" + props.quote + "\u201D")
      )
    )
  );
};

var CTAClose = function(props) {
  return React.createElement("div", {
    style: { padding: "20px 22px 44px", textAlign: "center" }
  },
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#888888", margin: "0 0 24px" } }, props.intro),
    React.createElement("a", {
      href: "#",
      className: "bk-cta-btn",
      style: {
        display: "inline-block",
        padding: "17px 32px",
        background: "#2D6A4F",
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 6,
        letterSpacing: 0.3
      }
    }, props.button),
    props.fine ? React.createElement("div", {
      style: { marginTop: 16, fontSize: 15, color: "#2D6A4F", textDecoration: "underline" }
    }, props.fine) : null
  );
};

var Signoff = function(props) {
  var s = window.FLOW1_SHARED.signoff;
  return React.createElement("div", {
    style: { background: "#FFFFFF", padding: "0 22px 36px" }
  },
    React.createElement("div", { style: { borderTop: "1px solid #E8E0D8", paddingTop: 24 } },
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
        s.ps.replace(/^P\.S\.\s*/, "")
      )
    )
  );
};

var OutLine = function(props) {
  return React.createElement("div", { style: { background: props.bg || "#FFFFFF", padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: B.muted, fontStyle: "italic" } },
    React.createElement("a", { href: "#", style: { color: B.muted, textDecoration: "underline" } }, window.FLOW1_SHARED.out)
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

/* 4. EMBEDDED IMAGES */
var IMG_PROD1 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI0zDc5U2xk3MxNzjTvrzdV7OfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIKyNMjTI0zRLhNMaIczrhV8tQ9OVOfTl0PPeuU8/fllfb046O4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUILBCCpg3lAUpBc1RmuiWGbDnvOTrz6QxvnouOmCaxTFsKQx5fZ4j3a49Tvvj2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCpDSZNXNKkKzUWAQ0lIBc1ZNYN5aOd1g0zosUzZRnUq2IJDXPQa56MzWLOlxuXnntyNc95Ly65Mef1Q4erx+k7ejz9jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCoKzSyCyEqCuMXulpAXNi51DO8bEsqyolzqgM6zUubZcakNs0k3gqC5cTtrz9jUuSSC6xomkElJc00tONuCyhWzxa9HE7ejyeo2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI1JDTFTSZNM0uWa1rnssSIK0SODpF6WUAzqCiprNiwFlIsJc0q4FzTUlM3NNMQ0xTXDrzOfo8vc6yaE3TjeuCSUZ68zOvPuT0OOjclOemarnDteWj...";

var IMG_PROD2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZNTGk0kNMDaVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhGM251vMKuTl2492ZvjV7Ocmurn0UFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnDebjPWbSTRpx3JTWbzxvO1c97TNZLvh2a2xZrTOgFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS4TmbuLYaKlwubLxac7oaupGpJpm3XN03HNiduPVno52b2xpaFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcunNlqWyScGe++dW8d5SphOlaXXLeGrvNZ6ycm0zWL18/cZcmuu8aZ0zF63nlezzajuzWqlAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHFncbuZnXJead2M3h3OHbel5TpzFztOe+PYzePdHLRquvEnXl1TON5O+Nc1anVZz65OG+o5568DpeJn13z4a9jlle7n0mgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZTOdW4GWsc+1YnPXJl6sxrWJzS5x1Tecl1O+Tl25dV5rXTfDtlnNsYY1hO2Nx0nXj1a1nWY53O7jVhczoTzc/VWeONcT0dvN0XvfL1XsxqboUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAREi5q5WVEvIYnS5WYYZvOkaz3a59bhbzuWdd5ttjSdMUuY1yYwmmd65GuzO2tY3iVVuZbVGZrG8auLnWEy6Dhu7ObeWtdM1rTGY6pQFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYubjSRKZLyVmdblc4uBiGJ213bznXNczfRnn0ZVEF...";

var IMG_PROD3 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgMEB/9oADAMBAAIQAxAAAAL3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUQWQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKloy1AQQskEzSR5fpo8Sacuev0l/B9vXPS1IudESoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAmAIgtFanlc3s/LTX0/V53ZZvWtkTWCSpMoI+a+n8+Xxe7zrx9TPk+rqWvnZLBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBKtctIx5s3tjze7N1vzybVT1zW2Vq0pYUmJHlermTfLYytFTXt247m/V4ftbxa+dufW2esHy3D7fn53l7XH0r688Pdrnec9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQSiQgTEgCmHVlz1nzabcemO0TrMRaks7cyuvLR6OVb5XLUvBFZkzvUXy1gzmLJ4PfTzu3n+mrTXj6JtnZfO8b3/Czv376U1jg67+Qvt6ZymgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPhl7643rac9ETFDTDXzNc/ScnZLW2Sb2VlJgXze3G3m79VZenzqpMOfv5ePbTfj2TSJr256UtQsrYUmpa2Vic9MifnPpObWOT2OLqLFc7w5ujzpr3Ix2uXie35x2a+d6RpNLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEgETAmAlEFoiAVNKyObg6OHrw39XyO9OjPavL0Z6VJorJTK8cems0t25znMF4rJgtXz9raVtrN7Ut2wlBGe1THRJbOfNufSnx9t8/TedpL2xybZ1XwPp+TPXxvV5eXOvo68Ho6x51fR4F9KfH9ZNFbWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqWYxZu5K3PXjwN89q8/HrH0056cPVVFVtMSTCBCCUCYkTNbHB5vveN0466a21nrg4+iUSkJzXOIr5O/Rpy9fo5UjVvHPfSDNpWWmt...";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "Practical fixes for the three most common hurdles parents hit with body-signal learning.",
  heroBadge: "Troubleshooting guide",
  h1a: "Three roadblocks,",
  h1b: "what to do about each.",
  hookIntro: "Lena here again.",
  hook: "I hear from a lot of parents around this point in the process. The underwear arrived. Everyone had good intentions. And then, something got in the way.",
  hook2: "There are three roadblocks that come up most often. Here's what to do about each one.",
  roadblock1Heading: "Roadblock 1: Your child won't wear the underwear.",
  roadblock1Body: "This is the most common one by far. Some kids feel the difference in texture or fit and reject it immediately. That's not defiance, it's sensory sensitivity. Many autistic children experience tactile defensiveness, unfamiliar fabrics, and a preference for the familiar feel of pull-ups.",
  roadblock1Solution: "Start with 30-minute intervals. Put the underwear on for 30 minutes at a time during a preferred activity, a show they love, a preferred snack, a calm moment. Then switch back to their usual pull-up. Increase by 15 minutes every few days. The goal isn't immediate full-day wear. It's incremental familiarization. Some parents find that washing the underwear a few times with unscented detergent softens the fabric and makes the transition easier.",
  roadblock1Quote: "He treats underwear like a diaper.",

  roadblock2Heading: "Roadblock 2: Your child is wearing the underwear but showing no awareness signs.",
  roadblock2Body: "They're wearing it. They're having accidents. And they don't seem to notice. This can feel like nothing is happening.",
  roadblock2WhatsHappening: "The Body-Signal Learning Layer is working. It's creating a 30-60 second sustained 'uh-oh' sensation after each accident. For a deeply nervous system that picks up signals slowly, this feedback needs repetition before the brain learns to recognize it. Research shows autistic children have significantly reduced ability to sense internal body signals, including bladder fullness (Nicholson et al. 2019, Journal of Autism and Developmental Disorders, 49(9):3625-3637). The underwear provides the feedback their nervous system isn't generating on its own.",
  roadblock2Solution: "Increase wear time to 3+ hours continuously. The gentle sensation that lasts window is what builds neural pathways. Shorter wear periods don't give the brain enough repetition to form the connection. Aim for 3-4 hours of continuous wear daily for at least 2 weeks before evaluating.",
  roadblock2Quote: "He doesn't have full bladder awareness yet and doesn't realise he needs to go until it's happening.",

  roadblock3Heading: "Roadblock 3: Your child showed early progress, and now it stopped.",
  roadblock3Body: "You saw a pause, a look, maybe even a step toward the bathroom. And then, nothing. The signals stopped.",
  roadblock3WhatsHappening: "This isn't regression. Progress in body-signal learning is not linear. The nervous system is recalibrating. The pathways you built in those early moments are still there, they're just being integrated. Many parents report this pattern: early micro-wins, a quiet period, then more consistent signals emerging 2-4 weeks later.",
  roadblock3Solution: "Hold steady. Don't change anything. Don't go back to pull-ups full-time. Don't add pressure. The neural pathways are forming underneath, you just can't see them yet. Keep the same routine. The 30-60 second feedback window after each accident is still doing its work.",
  roadblock3Quote: "He paused. He felt something. After 4 years of nothing, that was everything.",

  transition: "The body-signal approach isn't an overnight solution. It's a learning process, for their nervous system and for you. Every child's timeline is different, and yours is the only one that matters.",
  transition2: "If none of these fit your situation, reply to this email. Tell me what you're seeing. I read every response.",
  ctaIntro: "",
  ctaButton: "Keep working with your 3+3 Bundle",
  ctaFine: "Or reply and tell me what's happening"
};

/* 6. EMAIL COMPONENT */
var AtRiskE2 = function() {
  var c = emailData;
  var BG_PAGE = "#F5F0EB";
  var BG_HEADER = "#F5F0EB";
  var BG_HERO = "#F5F0EB";
  var BG_CARDS = "#F5F0EB";
  var BG_TRANSITION = "#F5F0EB";
  var BG_CTA = "#F5F0EB";

  var accents = ["#C46A4D", "#5A7A9A", "#7A9A7A"];
  var icons = ["1", "2", "3"];

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_PAGE },
    React.createElement(Header, { bg: BG_HEADER }),

    /* Hero section - text only, no image */
    React.createElement("div", { style: { background: BG_HERO, padding: "48px 28px 32px", textAlign: "center" } },
      React.createElement("div", { style: { fontSize: 17, lineHeight: 1.6, color: "#333333" } },
        React.createElement("p", { style: { margin: "0 0 12px" } }, c.hookIntro),
        React.createElement("p", { style: { margin: "0 0 12px" } }, c.hook),
        React.createElement("p", { style: { margin: 0, fontWeight: 600 } }, c.hook2)
      )
    ),

    /* Three Troubleshooting Cards */
    React.createElement("div", { style: { background: BG_CARDS, padding: "0 14px" } },
      /* Card 1: Won't Wear */
      React.createElement(TroubleshootCard, {
        accent: accents[0],
        icon: icons[0],
        heading: c.roadblock1Heading,
        body: c.roadblock1Body,
        solution: c.roadblock1Solution,
        quote: c.roadblock1Quote
      }),
      /* Card 2: No Awareness */
      React.createElement(TroubleshootCard, {
        accent: accents[1],
        icon: icons[2],
        heading: c.roadblock2Heading,
        body: React.createElement("div", null,
          React.createElement("p", { style: { margin: "0 0 10px" } }, c.roadblock2Body),
          React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "#666666", marginBottom: 4 } }, "What's actually happening:"),
          React.createElement("p", { style: { margin: 0 } }, c.roadblock2WhatsHappening)
        ),
        solution: c.roadblock2Solution,
        quote: c.roadblock2Quote
      }),
      /* Card 3: Regression */
      React.createElement(TroubleshootCard, {
        accent: accents[2],
        icon: icons[2],
        heading: c.roadblock3Heading,
        body: React.createElement("div", null,
          React.createElement("p", { style: { margin: "0 0 10px" } }, c.roadblock3Body),
          React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "#666666", marginBottom: 4 } }, "What's actually happening:"),
          React.createElement("p", { style: { margin: 0 } }, c.roadblock3WhatsHappening)
        ),
        solution: c.roadblock3Solution,
        quote: c.roadblock3Quote
      })
    ),

    /* Transition paragraph */
    React.createElement("div", { style: { background: BG_TRANSITION, padding: "40px 28px 24px", textAlign: "center" } },
      React.createElement("div", { style: { fontSize: 17, lineHeight: 1.6, color: "#444444" } },
        React.createElement("p", { style: { margin: "0 0 14px" } }, c.transition),
        React.createElement("p", { style: { margin: 0 } }, c.transition2)
      )
    ),

    /* 3 product photos */
    React.createElement("div", { style: { background: BG_CARDS, padding: "0 14px 20px" } },
      React.createElement("div", { style: { display: "flex", gap: 8 } },
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
      )
    ),

    /* CTA Section */
    React.createElement(CTAClose, { intro: c.ctaIntro, button: c.ctaButton, fine: c.ctaFine }),

    /* Signoff */
    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.AtRiskE2 = AtRiskE2;
