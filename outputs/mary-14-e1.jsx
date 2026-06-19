/* PP-Mary S. Story -- Flow 14, E1 (Cross-Level)
   Built from: mary-14-e1.md
   Voice: Mary S. (Founder), NOT Lena
   Day 21 post-purchase
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

/* 2. SHARED DATA -- Mary S. only, NEVER Lena */
window.FLOW14_SHARED = {
  signoff: {
    line1: ",",
    name: "Mary S., Founder",
    ps: "The 60-day guarantee is real. If the product doesn't work for your child, full refund, no questions. But most parents find the real change happens between week 3 and week 8. If you're in week 1 and nothing's happened yet, that's normal. Keep going."
  },
  out: "Hit reply. I read every message. You'll get me, not a template, not a bot.",
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

var GradientSpan = function(props) {
  return React.createElement("span", {
    style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 }
  }, props.children);
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

var Eyebrow = function(props) {
  return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.tealDeep, fontWeight: 700, marginBottom: 10 } }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", { style: { fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left", fontFamily: F.display } }, props.children);
};

var EmailShell = function(props) {
  return React.createElement("div", { style: { width: MW, background: props.bg, fontFamily: F.main, color: B.ink } },
    React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" } }, props.preheader),
    props.children
  );
};

/* Custom Mary Signoff */
var MarySignoff = function() {
  var s = window.FLOW14_SHARED.signoff;
  return React.createElement("div", { style: { background: B.ink, padding: "0 22px 36px" } },
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
          React.createElement("div", { style: { fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 } }, "Mary S."),
          React.createElement("div", { style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" } }, "Founder / Mom of an autistic child")
        )
      ),
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547", marginBottom: 16 } },
        React.createElement("div", { style: { flex: 1 } },
          React.createElement("div", { style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 } }, s.line1),
          React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 38, lineHeight: 0.95, fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2 } }, "Mary S.")
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
    window.FLOW14_SHARED.out
  );
};

var Footer = function() {
  var f = window.FLOW14_SHARED.footer;
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
var IMG_HERO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzYqCoKloAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmYl1rNNZZLvnoqC3GjTntKKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZvKUGrJDTOymC5x0XWmWXTETpMZOtzU0yNIqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHOMtVrM1kxbGrvOknHRda8fK8++fJmX6XPlwXt7Pk+28++/Di5+p083SdN6xuVcjVzE2zSpQKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTUSJNQk1FhFqCwJ5O3hz16Zlz1573ZeeN5atmDl7uOdcO/Xy+vt4fY5bz2upJomi5C2ZTdxo0zUqCpaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGS+fhwx27+vwe2tovOlJRFkKCNedeHK55+nUzVjnsnSJWufS5iF6a566eV7fL6Nct5us9bkJuQGixlNXOi5YNs+a47X5mj698fqm9JbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxlvz5jHpRrPS/R8P0N8Fk1x1MlpolZTWc4a6fP9Pgx2TLn6L4/X1ufmfV1m89ZRrPTnzX0b8/VN4a1jr05dOvh9KXPWalIoEM1osc1OeLJ5dccdp3xrHa+/wCX9LXP0RnfDeudTaVAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcJXy+vLHp4enVzqJlfd38nq6ecurjOkLmZLmRuSprl4vb5sdcTvzzrye2NZuZzzvefP7LOfTrIrKyzXbWOHs73fmJDTFNJRLBchx3xucct8M9GLeXt1LhMfU+d6dY9szrp59VpkmE6XGjTNSigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxHgjn6iM7RTN0N+/5vq3x9OY1ySFhVzd0xemU83nZ5+";
var IMG_PROD1 = "data:image/jpeg;base64,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";
var IMG_PROD2 = "data:image/jpeg;base64,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";
var IMG_PROD3 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAL3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUQWQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKloy1AQQskEzSR5fpoqSacuev0l/B9vXPS1IudESoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAmAIgtFanlc3s/LTX0/V53ZZvWtkTWCSpMoI+a+n8+Xxe7zrx9TPk+rqWvnZLBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBKtctIx5s3tjze7N1vzybVT1zW2Vq0pYUmJHlermTfLYytFTXn247m/V4ftbxa+dufW2esHy3D7fn53l7XH0r688Pdrnec9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQSiQgTEgCmHVlz1nzabcemO0TrMRaks7cyuvLR6OVb5XLUvBFZkzvUXy1gzmLJ4PfTzu3n+mrTXj6JtnZfO8b3/Czv376U1jg67+Qvt6ZymgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPhl7643rac9ETFDTDXzNc/ScnZLW2Sb2VlJgXze3G3m79VZenzqpMOfv5ePbTfj2TSJr256UtQsrYUmpa2Vic9MifnPpObWOT2OLqLFc7w5ujzpr3Ix2uXie35x2a+d6RpNLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEgETAmAlEFoiAVNKyObg6OHrw39XyO9OjPavL0Z6VJorJTK8cems0t25znMF4rJgtXz9raVtrN7Ut2wlBGe1THRJbOfNufSnx9t8/TedpL2xybZ1XwPp+TPXxvV5eXOvo68Ho6x51fR4F9KfH9ZNFbWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqWYxZu5K3PXjwN89q8/HrH0056cPVVFVtMSTCBCCUCYkTNbHB5vveN0466a21nrg4+iUSkJzXOIr5O/Rpy9fo5UjVvHPfSDNpWWmt";

/* 5. EMAIL DATA */
var emailData = {
  preheader: "It wasn't a business idea. It was a morning that changed everything.",
  heroBadge: "A letter from our founder",
  heroName: "Mary S.",
  heroTitle: "Founder, BrightKidCo",

  /* Opener */
  openerHook: "Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or still figuring it out, if they don't feel when they need to go, you've probably seen some of these:",
  openerBullets: [
    "Sitting on the toilet for 20 minutes. Nothing happens. You put the pull-up back on, and 30 seconds later it's wet.",
    "Playing in a wet diaper without a single reaction. No pause. No look down. Nothing.",
    "\"Almost trained\" three times. Every time it falls apart.",
    "Years of trying. You've stopped counting the failed attempts."
  ],
  openerClosing: "If any of those sound like your morning, I wrote this email for you.",

  /* Mary's Story */
  storyIntro: "I'm Mary S. I'm a mom. And I went through exactly this with my own child.",
  storyBody1: "My son was 4 when I realized something wasn't working. Not with him, with the methods. We tried everything the books and internet told us to try. Sticker charts. Timer sits. The naked weekend. Rewards. Schedules. Charts. Songs. Puppets. Bribes.",
  storyBody2: "None of it worked. Not because I wasn't trying hard enough. Not because he was being difficult. But because every single method assumed something that wasn't true for him.",
  storyPunch: "They assumed he could feel when he needed to go.",
  storyPunch2: "He couldn't.",

  /* The Moment */
  momentBody: "One morning, after yet another accident, I sat on the bathroom floor and realized: my son wasn't ignoring his body. His body wasn't sending the signal. The \"I need to go\" message was leaving his bladder and never arriving at his brain.",
  momentResearch: "I started researching. I found the science of interoception, the body's ability to sense internal states like hunger, thirst, and bladder fullness. The research was clear (Nicholson et al. 2019, Barmpagiannis & Baldimtsi 2025): autistic children process body signals differently. The gap isn't behavioral. It's neurological.",
  momentPivot: "That morning on the bathroom floor, I went from frustrated to determined.",
  momentMission: "If the methods didn't exist for kids like mine, I'd build them.",

  /* The Discovery */
  discoveryInsight: "The insight was clear once I found it:",
  discoveryBody: "Standard underwear assumes the child already feels the signal. Pull-ups wick the signal away entirely. Neither solves the real problem, building body awareness from scratch.",
  discoveryQuestion: "What if an underwear could create the signal instead of waiting for it?",
  discoveryResult: "That's what BrightKidCo became. The Body-Signal Learning Layer, a three-layer system designed to give a developing nervous system the feedback it needs. A gentle sensation that lasts 30-60 seconds. Not punishment. Not training in the traditional sense. Information. A signal that says: \"Something happened here.\"",
  discoveryHope: "For some kids, it's the first time they've ever felt it.",

  /* The Connection */
  connectionIntro: "Since founding BrightKidCo, I've heard from thousands of parents. Their stories span the full spectrum, and they all share one thing in common.",
  family1Label: "Families with a verbal preschooler who \"gets it but doesn't get it\":",
  family1Quote: "\"How do I know if it's refusal or inability?\"",
  family1Source: "Real parent",
  family2Label: "Families with a sensory-sensitive child who's tried every BCBA protocol:",
  family2Quote: "\"He sits for 45 minutes and then pees the second he stands up.\"",
  family2Source: "Real parent",
  family3Label: "Families with a non-verbal child who's never shown a sign in years:",
  family3Quote: "\"He looked down at the wet spot for the first time in 9 years.\"",
  family3Source: "Real parent",
  connectionClosing: "Whether your child is here at the beginning, stuck in the middle, or you've been at this so long you've stopped hoping, that gap, that missing signal, is the same.",
  connectionBio: "The child's age changes. The support needs change. But the biology of the interoception gap doesn't.",

  /* The Invitation */
  invitationStart: "If you're reading this, you've already taken a step that most parents never do. You've bought the underwear. You're trying. You're giving your child's nervous system a chance to learn what it's never had before.",
  invitationCourage: "That takes courage. I know because I was there.",
  invitationProduct: "The product you have is built from that morning on the bathroom floor. Every stitch, every layer of fabric, every design decision came from one place: the understanding that your child isn't broken. Their method wasn't broken. The assumption was broken.",
  invitationTimeline: "Body-signal learning takes time. Some kids show first signs in 2 weeks. Others need 8 weeks. Some take 3-6 months. All of that is normal. All of that is progress.",
  invitationGoal: "The goal isn't \"fully trained by next month.\" The goal is clear: one moment of awareness. One pause. One look down. One step toward the bathroom, even after the accident.",
  invitationMoment: "That moment changes everything.",
  invitationWhy: "Not because your child is \"finally getting it.\" But because their brain is receiving information it never had before. And once the brain gets the signal, the rest has a foundation to build on.",

  /* Closing */
  closingMission: "I built BrightKidCo so no other parent would have to sit on a bathroom floor wondering what they did wrong.",
  closingValidation: "You didn't do anything wrong. Neither did your child.",
  closingPermission: "Whether your journey takes 2 weeks or 6 months, whether your child shows subtle signals or dramatic progress, whether you're just starting or you've been at this for years, you belong here. This product was built for your child's nervous system. Exactly as it is.",
  closingThankYou: "Thank you for being part of this community. And thank you for trusting us with something so important.",
  closingReply: "If this email resonated, or if you have a question about your child's progress, hit reply. I read every message. You'll get me, not a template, not a bot.",
  closingSignoff: ", Mary S., Founder"
};

/* 6. MARY E1 COMPONENT */
var MaryE1 = function() {
  var c = emailData;
  var BG_HERO = "#FFFBF0";
  var BG_LETTER = "#FFF6E2";
  var BG_MARY = "#FAF0F4";
  var BG_MOMENT = "#EAF6F2";
  var BG_DISCOVERY = "#F0EDF8";
  var BG_CONNECTION = "#FFF6E2";
  var BG_INVITATION = "#FBF7F1";
  var BG_CLOSING = "#FFFFFF";
  var BG_CTA = B.ink;

  return React.createElement(EmailShell, { preheader: c.preheader, bg: BG_HERO },
    /* ======= HEADER ======= */
    React.createElement(Header, { bg: BG_HERO }),

    /* ======= SECTION 1: HERO (HERO-20 pattern: Handwritten Letter Opener) ======= */
    React.createElement("div", { style: { background: BG_HERO, padding: "32px 22px 16px", textAlign: "center" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: 16 } },
        React.createElement("span", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, c.heroBadge)
      ),
      React.createElement(H2, { size: 28, center: true },
        "Why I built ",
        React.createElement(GradientSpan, null, "BrightKidCo")
      ),
      React.createElement("div", { style: { fontSize: 14, color: B.soft, marginTop: 4 } }, c.heroName + ", " + c.heroTitle)
    ),

    /* Hero image */
    React.createElement("div", { style: { margin: "0 14px 20px", borderRadius: 20, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink } },
      React.createElement("img", { src: IMG_HERO, alt: "BrightKidCo founder story", style: { width: "100%", display: "block" } })
    ),

    React.createElement(Band, { from: BG_HERO, to: BG_LETTER }),

    /* ======= SECTION 2: OPENER (Recognition Anchors) ======= */
    React.createElement("div", { style: { background: BG_LETTER, padding: "4px 24px 28px" } },
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.soft, margin: "0 0 14px", fontStyle: "italic" } }, c.openerHook),
      c.openerBullets.map(function(bullet, i) {
        return React.createElement("div", { key: i, style: { display: "flex", alignItems: "flex-start", marginBottom: 10, gap: 8 } },
          React.createElement("div", { style: { width: 6, height: 6, borderRadius: "50%", background: B.teal, marginTop: 7, flexShrink: 0 } }),
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.ink, margin: 0, fontStyle: "italic" } }, bullet)
        );
      }),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "14px 0 0", fontWeight: 600 } }, c.openerClosing)
    ),

    React.createElement(Band, { from: BG_LETTER, to: BG_MARY }),

    /* ======= SECTION 3: MARY'S STORY (STORY-09 pattern: The Reframe) ======= */
    React.createElement("div", { style: { background: BG_MARY, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#8B5E5E" }, "My story"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px", fontWeight: 600 } }, c.storyIntro),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.storyBody1),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.storyBody2),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 22, fontWeight: 700, color: B.ink, margin: "0 0 10px", textAlign: "center" } }, c.storyPunch),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 28, fontWeight: 700, color: B.ink, margin: 0, textAlign: "center" } }, c.storyPunch2)
    ),

    React.createElement(Band, { from: BG_MARY, to: BG_MOMENT }),

    /* ======= SECTION 4: THE MOMENT (Discovery + Science) ======= */
    React.createElement("div", { style: { background: BG_MOMENT, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "The moment that changed everything"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.momentBody),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 14px", fontStyle: "italic" } }, c.momentResearch),
      React.createElement("div", { style: { background: B.teal, borderRadius: 8, padding: 18, textAlign: "center", marginBottom: 14 } },
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 17, color: "#FBF7F1", margin: 0, lineHeight: 1.5, fontWeight: 600 } }, c.momentPivot)
      ),
      React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: 0, textAlign: "center" } }, c.momentMission)
    ),

    React.createElement(Band, { from: BG_MOMENT, to: BG_DISCOVERY }),

    /* ======= SECTION 5: THE DISCOVERY (Mechanism + Insight) ======= */
    React.createElement("div", { style: { background: BG_DISCOVERY, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, { color: "#7A5FA8" }, "The discovery"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 12px", fontWeight: 600 } }, c.discoveryInsight),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.discoveryBody),
      React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 10, padding: "14px 16px", border: "1px solid rgba(43,174,180,0.2)", marginBottom: 14 } },
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 18, color: B.teal, margin: 0, fontStyle: "italic", lineHeight: 1.5 } }, c.discoveryQuestion)
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.discoveryResult),
      React.createElement("div", { style: { background: B.green, borderRadius: 8, padding: 14, textAlign: "center" } },
        React.createElement("p", { style: { fontSize: 15, color: B.ink, margin: 0, fontWeight: 600 } }, c.discoveryHope)
      )
    ),

    React.createElement(Band, { from: BG_DISCOVERY, to: BG_CONNECTION }),

    /* ======= SECTION 6: THE CONNECTION (Three-Family Pattern) ======= */
    React.createElement("div", { style: { background: BG_CONNECTION, padding: "28px 14px 8px" } },
      React.createElement("div", { style: { padding: "0 8px", marginBottom: 18 } },
        React.createElement(Eyebrow, null, "Different families, same gap"),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 16px" } }, c.connectionIntro)
      ),
      /* Family 1 */
      React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid " + B.ink, borderLeft: "4px solid " + B.teal, borderRadius: 16, overflow: "hidden", boxShadow: "3px 3px 0 " + B.ink, marginBottom: 14, marginLeft: 8, marginRight: 8 } },
        React.createElement("div", { style: { padding: "20px 18px" } },
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: B.teal, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 } }, c.family1Label),
          React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: B.ink, margin: "0 0 8px", fontStyle: "italic" } }, c.family1Quote),
          React.createElement("div", { style: { fontSize: 12, color: B.muted } }, "\u2014 " + c.family1Source)
        )
      ),
      /* Family 2 */
      React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid " + B.ink, borderLeft: "4px solid " + B.green, borderRadius: 16, overflow: "hidden", boxShadow: "3px 3px 0 " + B.ink, marginBottom: 14, marginLeft: 8, marginRight: 8 } },
        React.createElement("div", { style: { padding: "20px 18px" } },
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: B.green, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 } }, c.family2Label),
          React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: B.ink, margin: "0 0 8px", fontStyle: "italic" } }, c.family2Quote),
          React.createElement("div", { style: { fontSize: 12, color: B.muted } }, "\u2014 " + c.family2Source)
        )
      ),
      /* Family 3 */
      React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid " + B.ink, borderLeft: "4px solid #E8A23D", borderRadius: 16, overflow: "hidden", boxShadow: "3px 3px 0 " + B.ink, marginBottom: 14, marginLeft: 8, marginRight: 8 } },
        React.createElement("div", { style: { padding: "20px 18px" } },
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#E8A23D", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 } }, c.family3Label),
          React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: B.ink, margin: "0 0 8px", fontStyle: "italic" } }, c.family3Quote),
          React.createElement("div", { style: { fontSize: 12, color: B.muted } }, "\u2014 " + c.family3Source)
        )
      ),
      React.createElement("div", { style: { padding: "0 8px" } },
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 10px" } }, c.connectionClosing),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 600 } }, c.connectionBio)
      )
    ),

    React.createElement(Band, { from: BG_CONNECTION, to: BG_INVITATION }),

    /* ======= SECTION 7: PRODUCT PHOTOS (3 product images) ======= */
    React.createElement("div", { style: { background: BG_INVITATION, padding: "28px 14px 16px" } },
      React.createElement("div", { style: { padding: "0 8px 14px" } },
        React.createElement(Eyebrow, null, "The product you're wearing")
      ),
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

    React.createElement(Band, { from: BG_INVITATION, to: BG_CLOSING }),

    /* ======= SECTION 8: THE INVITATION ======= */
    React.createElement("div", { style: { background: BG_CLOSING, padding: "28px 22px 20px" } },
      React.createElement(Eyebrow, null, "You're already on the journey"),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.invitationStart),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px", fontWeight: 600 } }, c.invitationCourage),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.invitationProduct),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: "0 0 14px" } }, c.invitationTimeline),
      React.createElement("div", { style: { background: "#EAF6F2", borderRadius: 10, padding: "14px 16px", marginBottom: 14 } },
        React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 600 } }, c.invitationGoal)
      ),
      React.createElement("div", { style: { background: B.teal, borderRadius: 8, padding: 18, textAlign: "center", marginBottom: 14 } },
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 18, color: "#FBF7F1", margin: 0, lineHeight: 1.5, fontWeight: 700 } }, c.invitationMoment)
      ),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: B.ink, margin: 0 } }, c.invitationWhy)
    ),

    React.createElement(Band, { from: BG_CLOSING, to: BG_CTA, height: 50 }),

    /* ======= SECTION 9: CLOSING (Reply CTA, no purchase CTA) ======= */
    React.createElement("div", { style: { background: BG_CTA, padding: "32px 22px 44px", textAlign: "center", color: "#FFF" } },
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: "#B8CACD", margin: "0 0 16px" } }, c.closingMission),
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.7, color: "#FFFFFF", margin: "0 0 16px", fontWeight: 600 } }, c.closingValidation),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: "#B8CACD", margin: "0 0 16px" } }, c.closingPermission),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: "#B8CACD", margin: "0 0 24px" } }, c.closingThankYou),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.8, color: "#FFFFFF", margin: "0 0 24px" } }, c.closingReply),
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, "Hit reply \u2192")
    ),

    /* ======= SIGNOFF (Mary S.) ======= */
    React.createElement(MarySignoff, null),
    React.createElement(OutLine, null),
    React.createElement(Footer, null)
  );
};

window.MaryE1 = MaryE1;
