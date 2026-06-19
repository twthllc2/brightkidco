// cart-02-e1 · Content Data
// Flow: Cart Abandonment · Email 1 · Cross-Level
// Subject: You left something, no rush
// Source: outputs/copy/cart/cart-02-e1.md

window.FLOW_CART = window.FLOW_CART || {};

window.FLOW_CART.e1 = {
  // ── Metadata ──
  subject: "You left something, no rush",
  preheader: "Your cart's still here. So is the 60-day guarantee. Whenever you're ready.",
  fromName: "Lena from BrightKidCo",
  level: "Cross-Level",
  timing: "1 hour post-abandonment",

  // ── Hero ──
  eyebrow: "Your cart's still here",
  h1: "You left something, no rush.",

  // ── Section 1: Hook ──
  hookFirst: "Whether you had one foot on the checkout button or you were still reading, if your child doesn't seem to feel when they need to go, you were looking in the right place.",
  hookParas: [
    "Your cart's still saved, no rush. The more useful thing in this email might be the explanation for why nothing's quite worked yet.",
  ],

  // ── Section 2: Validation (Recognition Anchors) ──
  validationFirst: "You've probably seen some version of this:",
  validationAnchors: [
    "Your child sits on the toilet for 20 minutes, nothing happens, and then they're wet 30 seconds after standing up.",
    "Or they play right through a wet diaper without reacting.",
    "Or they've been \"almost trained\" three times now.",
    "Or they don't initiate, ever.",
  ],
  validationClosing: "If even one of those sounds like your morning, you're not alone. And that pattern isn't about effort. It's about a signal your child's nervous system may not be receiving in time.",

  // ── Section 3: Mechanism ──
  mechanismFirst: "Here's what most parents never get told: the \"I need to go\" message travels from the bladder to the brain along a neurological pathway called interoception, the body's ability to sense internal signals.",
  mechanismParas: [
    "Research consistently shows this pathway works differently in children with sensory differences (Barmpagiannis & Baldimtsi 2025, 49-study review). The signal either arrives too late, or it doesn't arrive at all.",
    "That's not stubbornness. It's not defiance. It's signal-timing. And no method built on the assumption that the signal already exists can address that.",
  ],

  // ── Section 4: Three-Family Testimonials ──
  testimonialsIntro: "A few real stories from parents who had the same question you're sitting with:",
  testimonials: [
    {
      quote: "He talked about the potty but wouldn't actually go. After two weeks in Body-Signal underwear, he paused mid-play and looked down. That pause had never happened in three years.",
      author: "Sarah",
      detail: "mom of a verbal 4-year-old",
    },
    {
      quote: "My BCBA built the behavioral foundation. But nothing changed until my son's nervous system started receiving the wetness signal. That's what the underwear did, not training, just information his brain was missing.",
      author: "Lisa",
      detail: "mom of a 6-year-old with sensory differences",
    },
    {
      quote: "He'd never shown any awareness in 9 years. Not one sign. After 6 weeks, he pulled at his pants. That was the first signal his nervous system had ever sent him. Not trained. But feeling something for the first time, that was enough.",
      author: "Maria",
      detail: "mom of a non-verbal 8-year-old",
    },
  ],
  testimonialsClosing: "Three different kids. Three different timelines. One common piece: the body-signal connection had never been given a chance to form.",

  // ── Section 5: Product Introduction ──
  productCopy: "The product in your cart, the Body-Signal Learning Layer underwear, is designed around exactly that missing connection. The cotton inner layer creates a gentle, sustained \"uh-oh\" sensation that lasts 30\u201360 seconds. Long enough for a brain that processes signals differently to register: something happened. Without a prompt. Without a timer. Without a sticker chart. Just the body doing the teaching.",

  // ── Section 6: Guarantee ──
  guaranteeCopy: "60 days to try it. By your judgment. If it doesn't work for your child, if you see no pause, no look, no step toward the bathroom, full refund. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.",

  // ── Section 7: CTA ──
  ctaButton: "Check out when you're ready",
  ctaFinePrint: "Your original offer is saved",

  // ── Teaser ──
  teaser: "Next time: What other parents actually noticed after trying it.",

  // ── Signoff ──
  signoffGreeting: "Talk soon,",
  signoffName: "Lena",
  signoffTitle: "Customer Support \u00b7 Mom of two autistic sons",
  ps: "If you want to see how the body-signal approach works, [link]. No pressure.",

  // ── Footer ──
  footerBrand: "BrightKidCo",
  footerAddress: "[Physical Address]",
  footerUnsub: "[Unsubscribe Link]",
  footerReply: "Reply to this email. Lena reads every response.",
};


/* cart-02-e1 · Cart Abandonment Email 1 · Cross-Level
   Subject: You left something, no rush
   Structure: Header → Hero (eyebrow + H1 + signal-path SVG + CTA) →
              Validation (recognition anchors) → Testimonials (3 cards) →
              Mechanism (interoception panel) → Product (flat-lay) →
              Guarantee → CTA → Teaser → Signoff → Footer
   Source: outputs/copy/cart/cart-02-e1.md
*/

const CartE1 = () => {
  const c = window.FLOW_CART.e1;

  // ── Color Palette ──
  const BG = "#FAF7F0";
  const TEXT = "#3A3530";
  const HEADLINE = "#2B2824";
  const EMERALD = "#067A6B";
  const SAGE = "#8B9D83";
  const MUTED = "#8A9B9D";
  const WARM_GREY = "#C4BFB5";
  const PANEL_BG = "#F5F1EA";
  const BORDER = "#E5E0D8";
  const FOOTER_BG = "#1C1A17";
  const FOOTER_TEXT = "#E5E0D8";

  // ── Fonts ──
  const FONT_DISPLAY = "'Questrial', 'Helvetica Neue', Helvetica, Arial, sans-serif";
  const FONT_BODY = "Helvetica, Arial, sans-serif";

  // ── Signal-Path SVG ──
  const SignalPath = () => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "376",
    height: "48",
    viewBox: "0 0 376 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "24",
    x2: "356",
    y2: "24",
    stroke: EMERALD,
    strokeWidth: "1.5",
    strokeDasharray: "4 6",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "24",
    r: "8",
    fill: BG,
    stroke: EMERALD,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "24",
    r: "4",
    fill: EMERALD,
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M76,24 L80,20",
    stroke: HEADLINE,
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "188",
    cy: "24",
    r: "8",
    fill: BG,
    stroke: EMERALD,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "188",
    cy: "24",
    r: "4",
    fill: EMERALD,
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M182,24 Q185,18 188,24 Q191,30 194,24",
    stroke: HEADLINE,
    strokeWidth: "1.2",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "296",
    cy: "24",
    r: "8",
    fill: BG,
    stroke: EMERALD,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "296",
    cy: "24",
    r: "4",
    fill: EMERALD
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "296",
    cy: "24",
    r: "12",
    fill: "none",
    stroke: EMERALD,
    strokeWidth: "1",
    opacity: "0.3"
  })));

  // ── Wave Divider ──
  const Divider = () => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "4",
    viewBox: "0 0 40 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,2 Q5,0 10,2 Q15,4 20,2 Q25,0 30,2 Q35,4 40,2",
    stroke: EMERALD,
    strokeWidth: "1.2",
    fill: "none",
    opacity: "0.5",
    strokeLinecap: "round"
  })));

  // ── Signal Dot (for recognition anchors) ──
  const SignalDot = () => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      border: `1px solid ${EMERALD}`,
      background: BG,
      verticalAlign: "middle",
      marginRight: 8,
      flexShrink: 0
    }
  });

  // ── Testimonial Card ──
  const TestimonialCard = ({
    quote,
    author,
    detail
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: `2px solid ${EMERALD}`,
      borderRadius: 8,
      padding: "20px 20px 20px 18px",
      background: "#FFFFFF",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      color: TEXT,
      margin: "0 0 12px",
      fontFamily: FONT_BODY
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.4,
      color: MUTED,
      fontFamily: FONT_BODY,
      letterSpacing: "0.02em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: 13
    }
  }, author), ", ", detail));

  // ── 60-Day Seal ──
  const Seal60 = () => /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      width: 56,
      height: 56,
      borderRadius: "50%",
      border: `2px solid ${EMERALD}`,
      background: BG,
      lineHeight: "52px",
      textAlign: "center",
      fontSize: 11,
      fontWeight: 700,
      color: EMERALD,
      letterSpacing: "0.05em",
      fontFamily: FONT_BODY
    }
  }, "60 DAYS"));

  // ── Signal Dot Progression (Easter Egg) ──
  const SignalProgression = () => /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "16px 0"
    }
  }, [0.15, 0.5, 1].map((fill, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: fill < 1 ? `linear-gradient(90deg, ${EMERALD} ${fill * 100}%, transparent ${fill * 100}%)` : EMERALD,
      border: `1px solid ${EMERALD}`,
      marginLeft: i > 0 ? 20 : 0,
      opacity: fill < 1 ? 1 : 1
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      fontFamily: FONT_BODY,
      background: BG,
      color: TEXT,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: BG,
      padding: "24px 20px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/brightkidco-logo-v2.png",
    alt: "BrightKidCo",
    style: {
      height: 34,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: BG,
      padding: "28px 22px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: MUTED,
      marginBottom: 14
    }
  }, c.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      lineHeight: 1.15,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: HEADLINE,
      margin: "0 0 20px",
      fontFamily: FONT_DISPLAY
    }
  }, c.h1), /*#__PURE__*/React.createElement(SignalPath, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-block",
      background: EMERALD,
      color: "#FFFFFF",
      padding: "14px 32px",
      borderRadius: 6,
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "0.02em",
      fontFamily: FONT_BODY,
      lineHeight: 1,
      minHeight: 48
    }
  }, c.ctaButton)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: MUTED,
      textAlign: "center",
      paddingBottom: 8
    }
  }, c.ctaFinePrint)), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 22px 8px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: TEXT,
      margin: 0,
      fontFamily: FONT_BODY
    }
  }, c.validationFirst), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, c.validationAnchors.map((anchor, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(SignalDot, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: TEXT,
      fontFamily: FONT_BODY
    }
  }, anchor)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: TEXT,
      margin: "12px 0 0",
      fontFamily: FONT_BODY
    }
  }, c.validationClosing)), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px 0"
    }
  }, c.testimonials.map((t, i) => /*#__PURE__*/React.createElement(TestimonialCard, {
    key: i,
    quote: t.quote,
    author: t.author,
    detail: t.detail
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      color: TEXT,
      margin: "16px 0 0",
      textAlign: "center",
      fontFamily: FONT_BODY
    }
  }, c.testimonialsClosing)), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: PANEL_BG,
      borderRadius: 8,
      padding: "24px 22px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: TEXT,
      margin: "0 0 12px",
      fontFamily: FONT_BODY
    }
  }, c.mechanismFirst), c.mechanismParas.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: TEXT,
      margin: i < c.mechanismParas.length - 1 ? "0 0 12px" : 0,
      fontFamily: FONT_BODY
    }
  }, p)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../product-photos/flat-lay/training-pant-watermelon-pink.jpg",
    alt: "Body-Signal Learning Layer training pants",
    style: {
      maxWidth: 280,
      width: "100%",
      height: "auto",
      borderRadius: 8,
      border: `2px solid ${BORDER}`,
      display: "block",
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: TEXT,
      margin: 0,
      textAlign: "left",
      fontFamily: FONT_BODY
    }
  }, c.productCopy)), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Seal60, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.4,
      color: TEXT,
      margin: "0 auto",
      maxWidth: 480,
      textAlign: "center",
      fontFamily: FONT_BODY,
      fontWeight: 500
    }
  }, c.guaranteeCopy)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 22px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-block",
      background: EMERALD,
      color: "#FFFFFF",
      padding: "14px 32px",
      borderRadius: 6,
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "0.02em",
      fontFamily: FONT_BODY,
      lineHeight: 1,
      minHeight: 48
    }
  }, c.ctaButton), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: MUTED,
      textAlign: "center",
      marginTop: 10
    }
  }, c.ctaFinePrint)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 22px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.4,
      color: MUTED,
      margin: 0,
      fontFamily: FONT_BODY,
      fontWeight: 500
    }
  }, c.teaser)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 22px 0"
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 22px 28px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      color: TEXT,
      margin: "0 0 4px",
      fontFamily: FONT_BODY
    }
  }, c.signoffGreeting), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: TEXT,
      fontFamily: "'Georgia', serif",
      fontStyle: "italic",
      margin: "4px 0 8px",
      letterSpacing: "-0.02em"
    }
  }, c.signoffName), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.4,
      color: MUTED,
      margin: "0 0 16px",
      fontFamily: FONT_BODY,
      fontWeight: 500,
      letterSpacing: "0.02em"
    }
  }, c.signoffTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: TEXT,
      margin: 0,
      fontFamily: FONT_BODY
    }
  }, /*#__PURE__*/React.createElement("em", null, c.ps))), /*#__PURE__*/React.createElement(SignalProgression, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOTER_BG,
      padding: "24px 22px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 1.6,
      color: FOOTER_TEXT,
      fontFamily: FONT_BODY
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 6
    }
  }, c.footerBrand), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, c.footerAddress), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: FOOTER_TEXT,
      textDecoration: "underline"
    }
  }, c.footerUnsub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: FOOTER_TEXT
    }
  }, c.footerReply))));
};
window.CartE1 = CartE1;
window.__defaultExport = CartE1;