/* PP-Extended Education E1 (D22) -- L3 Maria
   Built from: pped-22-e1-l3.md
   Pattern: L3 calibration -- earth tones, quiet warmth, dignity-centered
   Images: 4 embedded product photos
   CTA: text links only, no buttons
*/

/* 1. BRAND TOKENS -- L3 EARTH TONES */
window.BRAND = {
  teal: "#2BAEB4",
  tealDeep: "#1E8A8F",
  sage: "#8A9B9D",
  sageDeep: "#6B7C7E",
  earth: "#C4A882",
  earthDeep: "#A8895E",
  cream: "#FBF7EB",
  creamDark: "#F0E8D8",
  ink: "#1F2D2F",
  soft: "#4A6568",
  muted: "#8A9B9D",
  paper: "#FFFFFF",
  accent: "#9AA8A7",
  divider: "rgba(219,255,205,0.30)",
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
    name: "Lena",
    ps: "Both my boys were different. One trained at 6. The other was almost 8. If your timeline looks nothing like mine, that doesn't mean it's wrong."
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
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.sageDeep, fontWeight: 700, marginBottom: 10 } }, props.children);
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
        s.ps
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

/* 4. EMBEDDED IMAGES -- reuse product photos from cart-e1 */
var IMG_HERO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzYqCoKloAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmYl1rNNZZLvnoqC3GjTntKKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZvKUGrJDTOymC5x0XWmWXTETpMZOtzU0yNIqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHOMtVrM1kxbGrvOknHRda8fK8++fJmX6XPlwXt7Pk+28++/Di5+p083SdN6xuVcjVzE2zSpQKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTUSJNQk1FhFqCwJ5O3hz16Zlz1573ZeeN5atmDl7uOdcO/Xy+vt4fY5bz2upJomi5C2ZTdxo0zUqCpaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGS+fhwx27+vwe2tovOlJRFkKCNedeHK55+nUzVjnsnSJWufS5iF6a566eV7fL6Nct5us9bkJuQGixlNXOi5YNs+a47X5mj698fqm9JbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxlvz5jHpRrPS/R8P0N8Fk1x1MlpolZTWc4a6fP9Pgx2TLn6L4/X1ufmfV1m89ZRrPTnzX0b8/VN4a1jr05dOvh9KXPWalIoEM1osc1OeLJ5dccdp3xrHa+/wCX9LXP0RnfDeudTaVAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcJXy+vLHp4enVzqJlfd38nq6ecurjOkLmZLmRuSprl4vb5sdcTvzzrye2NZuZzzvefP7LOfTrIrKyzXbWOHs73fmJDTFNJRLBchx3xucct8M9GLeXt1LhMfU+d6dY9szrp59VpkmE6XGjTNSigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxHgjn6iM7RTN0N+/5vq3x9OY1ySFhVzd0xemU83nZ5+";

var IMG_PROD1 = "data:image/jpeg;base64,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";

var IMG_PROD2 = "data:image/jpeg;base64,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";

var IMG_PROD3 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAL3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUQWQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKloy1AQQskEzSR5fpo6Sacuev0l/B9vXPS1IudESoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAmAIgtFanlc3s/LTX0/V53ZZvWtkTWCSpMoI+a+n8+Xxe7zrx9TPk+rqWvnZLBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBKtctIx5s3tjze7N1vzybVT1zW2Vq0pYUmJHlermTfLYytFTXn247m/V4ftbxa+dufW2esHy3D7fn53l7XH0r688Pdrnec9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQSiQgTEgCmHVlz1nzabcemO0TrMRaks7cyuvLR6OVb5XLUvBFZkzvUXy1gzmLJ4PfTzu3n+mrTXj6JtnZfO8b3/Czv376U1jg67+Qvt6ZymgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPhl7643rac9ETFDTDXzNc/ScnZLW2Sb2VlJgXze3G3m79VZenzqpMOfv5ePbTfj2TSJr256UtQsrYUmpa2Vic9MifnPpObWOT2OLqLFc7w5ujzpr3Ix2uXie35x2a+d6RpNLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEgETAmAlEFoiAVNKyObg6OHrw39XyO9OjPavL0Z6VJorJTK8cems0t25znMF4rJgtXz9raVtrN7Ut2wlBGe1THRJbOfNufSnx9t8/TedpL2xybZ1XwPp+TPXxvV5eXOvo68Ho6x51fR4F9KfH9ZNFbWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqWYxZu5K3PXjwN89q8/HrH0056cPVVFVtMSTCBCCUCYkTNbHB5vveN0466a21nrg4+iUSkJzXOIr5O/Rpy9fo5UjVvHPfSDNpWWmt";


/* 5. EMAIL DATA */
var emailData = {
  preheader: "Body-signal learning. Your pace. Your timeline.",
  heroBadge: "D22",
  h1a: "After all these years,",
  h1b: "you know your child better than anyone.",
  hook: "That's not a line. That's the truth.",
  hookBody: "You've watched him in ways no therapist, no consultant, no book author ever could. You know when something is different. When a pause that never happened before happens. When he looks down instead of through. When the signal, for the first time, arrives somewhere.",
  hookBody2: "And when it doesn't. That too.",
  validation: "You've been on this road for years. You've heard every pitch, every promise, every 'this time it will be different.' And every time, life went back to the way it was.",
  validationReframe: "That's not failure. That's his nervous system doing exactly what autistic nervous systems do, processing body signals on a pathway that doesn't match the standard map.",
  researchCitation: "The research is settled. Barmpagiannis and Baldimtsi's 2025 systematic review of 49 studies confirms: body signal differences in autism are real, measurable, and persistent through childhood.",
  researchPunch: "The 'I need to go' signal doesn't arrive the way traditional methods assume it should.",
  researchClosing: "You didn't miss something. The signal pathway was never built the way the method manuals assumed.",
  mechanismName: "The BSL Layer doesn't train. It provides information.",
  mechanismIntro: "The Body-Signal Learning Layer doesn't change who your child is.",
  mechanismNot: "The BSL Layer is not a training program. It's not a schedule. It's not a reward system. It's a gentle sensation that lasts, a loop that gives his brain information it's been missing.",
  mechanismHow: "When an accident happens inside BrightKidCo underwear, Layer 1 preserves a gentle 'uh-oh' sensation for 30 to 60 seconds. Just enough, sustained enough, for a nervous system that picks up signals slowly to register: something happened.",
  mechanismContrast: "Pull-ups wick that entire sensation away in seconds. The brain never receives the feedback.",
  mechanismClosing: "The BSL Layer doesn't train. It provides information. The brain does the rest, at its own pace. Some children notice within two weeks. Others take months. All of that is normal.",
  testimonialQuote: "He's not trained. I don't know if he ever will be. But for the first time in 9 years, he noticed. That's enough for now.",
  testimonialStory: "A mom wrote us recently. Her son is 9, non-verbal, Level 3. She'd stopped pushing years ago. She kept him clean, kept him safe, kept him loved. She'd stopped believing in progress.",
  testimonialStory2: "Someone sent her a pair of BrightKidCo underwear. She didn't expect anything. She put it on him alongside his regular diapers. No pressure. No countdown. Just added it to his morning routine.",
  testimonialStory3: "Three weeks later, she saw him pause. Pause, a full three-second pause, after an accident. He looked down. He touched the spot. Then he went back to what he was doing.",
  testimonialClosing: "That's the gentle path. Not a destination. A step. One step. Taken at his pace.",
  productIntro: "You already have a pair. You've had it for a few weeks now.",
  productBody: "Maybe it's sitting in a drawer. Maybe he's worn it a few times. Maybe the rhythm hasn't found itself yet. All of that is okay.",
  productBody2: "The BSL Layer works best as an addition, worn alongside your current routine. Not a replacement. Not a switch. Just an extra source of information for his nervous system to learn from.",
  productClose: "One pair. Added alongside. No pressure to switch. No deadline to be diaper-free.",
  productFinal: "You decide how it fits. That's the whole point.",
  guaranteeIntro: "The 60-day guarantee exists for one reason: so you can try without having to believe.",
  guaranteeBody: "If something shifts, it shifts. If not, you've been doing the right thing all along. Full refund. No questions. That's not a sales tactic. That's the only fair offer for someone who's been burned by promises before.",
  ctaQuote: "He's not trained. I don't know if he ever will be. But for the first time in 9 years, he noticed. That's enough for now.",
  ctaBody: "You know your child. You know your timeline. Whatever that timeline looks like, it's the right one.",
  ctaBody2: "If nothing has changed yet, that's not a sign that nothing will. Some pathways take longer to form than others."
};


/* 6. EMAIL COMPONENT */
var PPEdExtE1L3 = function() {
  var c = emailData;
  var BG_HERO = "#FBF7EB";
  var BG_LETTER = "#F5F1EA";
  var BG_RESEARCH = "#EAF6F2";
  var BG_MECHANISM = "#F5F1EA";
  var BG_TESTIMONIAL = "#FBF7EB";
  var BG_PRODUCT = "#F5F1EA";
  var BG_GUARANTEE = "#FBF7EB";
  var BG_CTA = B.ink;

  var GradientSpan = function(props) {
    return React.createElement("span", {
      style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 }
    }, props.children);
  };

  var Divider = function() {
    return React.createElement("div", {
      style: { height: 1, background: "rgba(219,255,205,0.30)", margin: "0 24px" }
    });
  };

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= SECTION 1: HOOK / OBSERVATION ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "48px 32px 16px" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 16 } },
        React.createElement("span", { style: { display: "inline-block", background: "#F0E8D8", color: B.sageDeep, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, c.heroBadge)
      ),
      React.createElement("h1", { style: { fontFamily: F.display, fontSize: 24, lineHeight: 1.4, color: B.ink, margin: "0 0 20px", fontWeight: 400, textAlign: "center" } },
        c.h1a,
        React.createElement("br"),
        React.createElement(GradientSpan, null, c.h1b)
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 16px", textAlign: "center", fontStyle: "italic" } }, c.hook)
    ),

    /* Hero image */
    React.createElement("div", { style: { margin: "0 14px 20px", borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink } },
      React.createElement("img", { src: IMG_HERO, alt: "BrightKidCo Training Pant", style: { width: "100%", display: "block" } })
    ),

    /* Hook body */
    React.createElement("div", { style: { background: BG_HERO, padding: "0 32px 40px" } },
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.hookBody),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: 0 } }, c.hookBody2)
    ),

    React.createElement(Band, { from: BG_HERO, to: BG_LETTER }),

    /* ======= SECTION 2: VALIDATION ======= */
    React.createElement("div", { style: { background: BG_LETTER, padding: "40px 32px 20px" } },
      React.createElement(Eyebrow, null, "Validation"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.validation),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px", fontWeight: 500 } }, c.validationReframe)
    ),

    React.createElement(Divider),

    /* ======= SECTION 2B: RESEARCH CITATION ======= */
    React.createElement("div", { style: { background: BG_LETTER, padding: "20px 32px 40px" } },
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "20px 16px", borderLeft: "3px solid " + B.accent } },
        React.createElement("p", { style: { fontSize: 13, lineHeight: 1.7, color: B.soft, margin: "0 0 8px" } }, c.researchCitation),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 8px", fontWeight: 600 } }, c.researchPunch),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0 } }, c.researchClosing)
      )
    ),

    React.createElement(Band, { from: BG_LETTER, to: BG_RESEARCH }),

    /* ======= SECTION 3: MECHANISM / EDUCATION ======= */
    React.createElement("div", { style: { background: BG_RESEARCH, padding: "40px 32px 20px" } },
      React.createElement(Eyebrow, null, "How it works"),
      React.createElement("h2", { style: { fontFamily: F.display, fontSize: 22, lineHeight: 1.3, color: B.ink, margin: "0 0 16px", fontWeight: 400 } }, c.mechanismName),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.mechanismIntro),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.mechanismNot)
    ),

    /* Mechanism detail cards */
    React.createElement("div", { style: { background: BG_RESEARCH, padding: "0 24px 14px" } },
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "16px 16px", marginBottom: 10, borderLeft: "3px solid #2BAEB4" } },
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: 0 } }, c.mechanismHow)
      ),
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "16px 16px", marginBottom: 14, borderLeft: "3px solid #FFD866" } },
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 500 } }, c.mechanismContrast)
      ),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.8, color: B.soft, margin: "0 0 20px", textAlign: "center", fontStyle: "italic" } }, c.mechanismClosing)
    ),

    React.createElement(Band, { from: BG_RESEARCH, to: BG_MECHANISM }),

    /* ======= SECTION 3B: PRODUCT PHOTOS ======= */
    React.createElement("div", { style: { background: BG_MECHANISM, padding: "0 14px 20px" } },
      React.createElement("div", { style: { display: "flex", gap: 8 } },
        [
          { src: IMG_PROD1, label: "Cloud Raindrop" },
          { src: IMG_PROD2, label: "Fox Woodland" },
          { src: IMG_PROD3, label: "Penguin Party" }
        ].map(function(img, i) {
          return React.createElement("div", { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
            React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
            React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
          );
        })
      )
    ),

    React.createElement(Band, { from: BG_MECHANISM, to: BG_TESTIMONIAL }),

    /* ======= SECTION 4: TESTIMONIAL / SOCIAL PROOF ======= */
    React.createElement("div", { style: { background: BG_TESTIMONIAL, padding: "40px 32px 20px" } },
      React.createElement(Eyebrow, null, "A story from a mom"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.testimonialStory),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.testimonialStory2),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.testimonialStory3)
    ),

    /* Quote card */
    React.createElement("div", { style: { background: BG_TESTIMONIAL, padding: "0 24px 14px" } },
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: "24px 20px", border: "1px solid " + B.accent } },
        React.createElement("div", { style: { fontFamily: F.display, fontSize: 36, lineHeight: 0.8, color: B.accent, marginBottom: 8 } }, "\u201C"),
        React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 12px", fontStyle: "italic" } }, c.testimonialQuote),
        React.createElement("div", { style: { fontSize: 12, color: B.muted } }, "\u2014 a mom of a non-verbal 9-year-old")
      )
    ),

    React.createElement("div", { style: { background: BG_TESTIMONIAL, padding: "14px 32px 40px" } },
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.8, color: B.soft, margin: 0, textAlign: "center" } }, c.testimonialClosing)
    ),

    React.createElement(Band, { from: BG_TESTIMONIAL, to: BG_PRODUCT }),

    /* ======= SECTION 5: PRODUCT / OFFER (Gentle Reframe) ======= */
    React.createElement("div", { style: { background: BG_PRODUCT, padding: "40px 32px 20px" } },
      React.createElement(Eyebrow, null, "Your pair"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px", fontWeight: 500 } }, c.productIntro),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.productBody),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px" } }, c.productBody2),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px", fontWeight: 500 } }, c.productClose),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: 0, fontStyle: "italic" } }, c.productFinal)
    ),

    React.createElement(Band, { from: BG_PRODUCT, to: BG_GUARANTEE }),

    /* ======= SECTION 6: GUARANTEE / RISK REMOVAL ======= */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "40px 32px 32px", textAlign: "center" } },
      React.createElement(Eyebrow, { color: B.sageDeep }, "Our promise"),
      React.createElement("h2", { style: { fontFamily: F.display, fontSize: 22, lineHeight: 1.3, color: B.ink, margin: "0 0 16px", fontWeight: 400 } },
        "The 60-Day Calm Progress Guarantee"
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 20px", fontStyle: "italic" } }, c.guaranteeIntro),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.8, color: B.soft, margin: 0 } }, c.guaranteeBody)
    ),

    /* 60-day seal */
    React.createElement("div", { style: { background: BG_GUARANTEE, padding: "0 24px 32px", textAlign: "center" } },
      React.createElement("div", { style: { display: "inline-flex", flexDirection: "column", alignItems: "center", width: 140, height: 140, background: "#FFFFFF", borderRadius: "50%", border: "3px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink, justifyContent: "center" } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 } }, "Protected by"),
        React.createElement("div", { style: { fontSize: 44, fontWeight: 700, lineHeight: 1, color: B.ink } }, "60"),
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: B.ink, marginTop: 2 } }, "Calm Days"),
        React.createElement("div", { style: { fontSize: 9, color: B.soft, marginTop: 4 } }, "Full refund / No questions")
      )
    ),

    React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 50 }),

    /* ======= SECTION 7: CTA (Gentle / Permission-Based) ======= */
    React.createElement("div", { style: { background: BG_CTA, padding: "36px 32px 24px", textAlign: "center", color: "#FBF7F1" } },
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, lineHeight: 1.5, color: "#FBF7F1", margin: "0 0 14px", fontWeight: 400 } }, c.ctaBody),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: "#B8CACD", margin: "0 0 14px" } }, c.ctaBody2),
      /* Testimonial echo */
      React.createElement("div", { style: { background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px", margin: "0 0 24px" } },
        React.createElement("p", { style: { fontSize: 13, lineHeight: 1.7, color: "#D8F57C", margin: 0, fontStyle: "italic" } }, "\u201C" + c.ctaQuote + "\u201D"),
        React.createElement("div", { style: { fontSize: 11, color: "#6B7C7E", marginTop: 6 } }, "\u2014 L3 mom")
      )
    ),

    /* CTA: text link only -- L3 calibration */
    React.createElement("div", { style: { background: BG_CTA, padding: "0 32px 44px", textAlign: "center" } },
      React.createElement("a", { href: "#", style: { fontFamily: "'Questrial', sans-serif", fontSize: 15, color: "#9AA8A7", textDecoration: "none", borderBottom: "1px solid #9AA8A7", paddingBottom: 2 } }, "Take a look at the pants \u2192"),
      React.createElement("p", { style: { fontSize: 11, color: "#6B7C7E", marginTop: 14 } }, "60-day guarantee / No questions / Real returns")
    ),

    React.createElement(Signoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.PPEdExtE1L3 = PPEdExtE1L3;
