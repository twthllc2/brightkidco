(() => {
  // email-build/welcome-01-e8-l1.jsx
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
    },
    /* E8 Warm Resolution overrides */
    warmBg: "#FDFCF8",
    warmText: "#3A3530",
    warmHeading: "#2C2420",
    forestGreen: "#2D5A3D",
    forestGreenHover: "#4A7A5A",
    terracotta: "#B55A3B",
    socialPanel: "#F9F6F0",
    guaranteePanel: "#E8F0E8",
    guaranteeBorder: "#D0E0D0",
    footerGray: "#8A8580"
  };
  window.FONT = {
    main: "'Georgia', 'Times New Roman', serif",
    sans: "'Helvetica', 'Arial', system-ui, sans-serif",
    display: "'Fraunces', Georgia, serif"
  };
  window.FLOW1_SHARED = {
    signoff: {
      line1: "With care,",
      name: "Lena",
      ps: "Not sure yet? Reply to this email and tell me about your child. I personally read every response, no bots, no templates. If BrightKidCo isn't right for your family, I'll tell you honestly."
    },
    out: "Reply to this email. Lena reads every response.",
    footer: {
      tagline: "Calm progress, one day at a time.",
      links: ["Our Method", "Shop the Pants", "Parent Stories"],
      address: "BrightKidCo LLC\n123 Commerce Street, Suite 200\nPortland, OR 97204\nUnited States"
    }
  };
  var MW = 420;
  var B = window.BRAND;
  var F = window.FONT;
  var Band = function(props) {
    var height = props.height || 40;
    return React.createElement("div", {
      style: { height, background: "linear-gradient(180deg, " + props.from + " 0%, " + props.to + " 100%)" }
    });
  };
  var Header = function(props) {
    return React.createElement(
      "div",
      {
        style: { background: props.bg, padding: "24px 20px 0", textAlign: "center" }
      },
      React.createElement("img", { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="#2C2420">BrightKidCo</text></svg>'), alt: "BrightKidCo", style: { height: 34 } }),
      /* Accent line below logo */
      React.createElement("div", { style: { width: 60, height: 2, background: B.terracotta, margin: "12px auto 0", borderRadius: 1 } })
    );
  };
  var Eyebrow = function(props) {
    return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.tealDeep, fontWeight: 700, marginBottom: 10 } }, props.children);
  };
  var H2 = function(props) {
    return React.createElement("h2", { style: { fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: -0.4, textAlign: props.center ? "center" : "left", fontFamily: F.main } }, props.children);
  };
  var CTAClose = function(props) {
    var bg = props.bg || B.forestGreen;
    return React.createElement(
      "div",
      { style: { background: bg, padding: "28px 22px 44px", textAlign: "center", color: "#FFF" } },
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: "#D0E0D0", margin: "0 0 24px", fontFamily: F.main } }, props.intro),
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "18px 36px", background: "#FFFFFF", color: B.forestGreen, fontSize: 17, fontWeight: 700, textDecoration: "none", borderRadius: 6, letterSpacing: 0.3, fontFamily: F.sans } }, props.button),
      props.fine ? React.createElement("div", { style: { marginTop: 16, fontSize: 13, color: "#B8CACD", fontFamily: F.sans } }, props.fine) : null,
      /* Trust signals */
      props.trust ? React.createElement(
        "div",
        { style: { marginTop: 20, display: "flex", flexDirection: "column", gap: 6, alignItems: "center" } },
        React.createElement("div", { style: { fontSize: 13, color: "#D0E0D0", fontFamily: F.sans } }, "\u2713 Free shipping on all bundles"),
        React.createElement("div", { style: { fontSize: 13, color: "#D0E0D0", fontFamily: F.sans } }, "\u2713 60-day money-back guarantee, no risk"),
        React.createElement("div", { style: { fontSize: 13, color: "#D0E0D0", fontFamily: F.sans } }, "\u2713 24/7 parent support, real humans, real answers")
      ) : null
    );
  };
  var Footer = function() {
    var f = window.FLOW1_SHARED.footer;
    return React.createElement(
      "div",
      { style: { background: B.warmBg, padding: "30px 24px 30px", textAlign: "center" } },
      React.createElement("div", { style: { fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500, color: B.warmHeading, marginBottom: 30, letterSpacing: -0.2 } }, f.tagline),
      f.links.map(function(l, i) {
        return React.createElement(
          "div",
          { key: i, style: { fontSize: 14, color: B.warmHeading, fontWeight: 500, marginBottom: 14 } },
          React.createElement("a", { href: "#", style: { color: B.warmHeading, textDecoration: "none" } }, l)
        );
      }),
      React.createElement(
        "div",
        { style: { fontSize: 11.5, color: B.muted, lineHeight: 1.65, margin: "0 auto", maxWidth: 340 } },
        React.createElement("a", { href: "#", style: { color: B.warmHeading, textDecoration: "underline" } }, "Unsubscribe"),
        " | ",
        React.createElement("a", { href: "#", style: { color: B.warmHeading, textDecoration: "underline" } }, "Manage Preferences"),
        React.createElement("br"),
        React.createElement("span", { style: { fontSize: 11 } }, "Questions? Hit reply, Lena reads every message."),
        React.createElement("br"),
        React.createElement("span", { style: { fontSize: 10, marginTop: 8, display: "block" } }, f.address),
        React.createElement("span", { style: { fontSize: 10, display: "block", marginTop: 8 } }, "\xA9 2026 BrightKidCo. All rights reserved.")
      ),
      React.createElement("div", { style: { margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 } })
    );
  };
  var EmailShell = function(props) {
    return React.createElement(
      "div",
      { style: { width: MW, background: props.bg, fontFamily: F.main, color: B.warmText } },
      React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" } }, props.preheader),
      props.children
    );
  };
  var IMG_CLOUD = "data:image/jpeg;base64,IMGCLOUD";
  var IMG_FOX = "data:image/jpeg;base64,IMGFOX";
  var IMG_PENGUIN = "data:image/jpeg;base64,IMGPENGUIN";
  var emailData = {
    preheader: "September is coming. Here's what you need to know.",
    heroBadge: "Last email, here's the offer",
    /* Hook */
    hook: "Pre-K doesn't wait. You know that better than anyone. But the right approach can close the gap before September gets here.",
    /* Validation */
    validation: "You've read the science over these past three weeks. You've seen how the numbers stack up, 49% of autistic 4-5 year olds aren't toilet trained yet (Wiggins et al. 2022, N=743, CDC-funded). Not because their parents didn't try. Because traditional methods assume a body signal that hasn't arrived yet.",
    validationClose: "I know that hit close to home when you first read it. It did for me too.",
    /* Recap bullets */
    recapIntro: "Here's what 21 days of emails boiled down to:",
    recapBullets: [
      { bold: "The problem", rest: " isn't behavior, it's neurology. His brain and bladder are sending signals on different frequencies. That gap is real and measurable." },
      { bold: "The mechanism", rest: " closes that gap. The Body-Signal Learning Layer creates a sustained 30-60 second 'uh-oh' sensation, time his brain needs to register what's happening. Pull-ups wick that signal away completely." },
      { bold: "The proof", rest: " speaks for itself. Research confirms interoception can be trained. The children who start earlier close the gap faster." }
    ],
    /* Social Proof */
    socialIntro: "Real parents, real words:",
    socialQuotes: [
      { text: "He says 'I need to pee' AFTER it's already happened. Some days he's great, other days zero.", source: "Sarah, L1 mom" },
      { text: "He had a perfect week, then a month of accidents. I didn't know if it was refusal or inability. Turns out it was neither, he just couldn't feel it.", source: "L1 parent, 3 weeks into Body-Signal" },
      { text: "He went today! Once! But he went!", source: "Real review, real moment" }
    ],
    /* Product Intro */
    productIntro: "The 3+3 Bundle was designed for this exact situation. Six pairs mean you always have a clean set ready, no rushing laundry, no 'he's in pull-ups because everything else is dirty.' Three-layer system:",
    productLayers: [
      { icon: "\u{1F4A7}", name: "Cotton inner", desc: "Gentle wetness signal that creates the 'uh-oh' moment" },
      { icon: "\u{1F6E1}\uFE0F", name: "Smart absorption layer", desc: "Protects furniture and floors without blocking the feedback loop" },
      { icon: "\u2714\uFE0F", name: "Outer leak-resistant barrier", desc: "Confidence for outings and Pre-K drop-offs" }
    ],
    productPrice: "At \u20AC79.99 with free shipping, that's less than two months of disposable pull-ups. And unlike pull-ups, these actually teach something.",
    /* Guarantee */
    guaranteeHeadline: "The 60-day guarantee isn't a sales tactic.",
    guaranteeBody: "It's the only honest offer when the outcome depends on your child's nervous system.",
    guaranteeDetail: "Try the 3+3 Bundle for 60 days. If your child shows no sign of body awareness, no pause, no look down, no step toward the potty, send them back. Full refund. No hoops, no restocking fees, no 'but you need to try harder.'",
    guaranteeClosing: "Your judgment, your timeline, your call.",
    /* CTA */
    ctaIntro: "That's \u20AC13.33 per pair with the bundle, less than half the single-pair price.",
    ctaButton: "Get the 3+3 Bundle, \u20AC79.99",
    ctaSecondary: "or browse individual pairs starting at \u20AC34.99",
    /* Lena sign-off */
    signoffText1: "Whatever you choose, thanks for reading this far. If this isn't the day, that's okay. The product will be here next month. So will I.",
    signoffText2: "I have two autistic sons. I know what it's like when 'later' turns into another year. But I also know what it's like to push too early. Trust your read.",
    signoffClosing: "With care,",
    signoffName: "Lena",
    signoffPS: "Not sure yet? Reply to this email and tell me about your child. I personally read every response, no bots, no templates. If BrightKidCo isn't right for your family, I'll tell you honestly."
  };
  var WelcomeE8L1 = function() {
    var c = emailData;
    var BG_HERO = B.warmBg;
    var BG_VALIDATION = "#F5F1EA";
    var BG_RECAP = B.warmBg;
    var BG_SOCIAL = B.socialPanel;
    var BG_PRODUCT = "#F0EDF8";
    var BG_PHOTOS = "#FFFFFF";
    var BG_GUARANTEE = B.guaranteePanel;
    var BG_CTA = B.forestGreen;
    var accents = [B.terracotta, B.teal, "#5DD07A"];
    return React.createElement(
      EmailShell,
      { preheader: c.preheader, bg: BG_HERO },
      /* ======= HEADER ======= */
      React.createElement(Header, { bg: BG_HERO }),
      /* ======= SECTION 1: HOOK ======= */
      React.createElement(
        "div",
        { style: { padding: "34px 22px 0", textAlign: "center" } },
        React.createElement("div", { style: { display: "inline-block", background: "#FFD866", padding: "7px 14px", borderRadius: 999, fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16, border: "2px solid " + B.ink, transform: "rotate(-1.5deg)", whiteSpace: "nowrap", lineHeight: 1.4 } }, "Welcome \xB7 Final"),
        React.createElement("h1", { style: { fontFamily: F.main, fontSize: 22, lineHeight: 1.3, fontWeight: 700, margin: 0, color: B.warmHeading } }, c.hook)
      ),
      React.createElement(Band, { from: BG_HERO, to: BG_VALIDATION, height: 28 }),
      /* ======= SECTION 2: VALIDATION ======= */
      React.createElement(
        "div",
        { style: { background: BG_VALIDATION, padding: "28px 22px 24px" } },
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 15, lineHeight: 1.7, color: B.warmText, margin: "0 0 14px" } }, c.validation),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 15, lineHeight: 1.7, color: B.warmText, margin: 0, fontWeight: 600, fontStyle: "italic" } }, c.validationClose)
      ),
      React.createElement(Band, { from: BG_VALIDATION, to: BG_RECAP, height: 28 }),
      /* ======= SECTION 3: RECAP (3 bullet blocks) ======= */
      React.createElement(
        "div",
        { style: { background: BG_RECAP, padding: "28px 22px 16px" } },
        React.createElement(Eyebrow, null, "The recap"),
        React.createElement(H2, { size: 22 }, c.recapIntro),
        React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 16 } },
          c.recapBullets.map(function(b, i) {
            return React.createElement(
              "div",
              { key: i, style: { display: "flex", gap: 12, alignItems: "flex-start" } },
              React.createElement("div", { style: { width: 32, height: 32, background: accents[i], borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#FFF", flexShrink: 0 } }, i + 1),
              React.createElement(
                "p",
                { style: { fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: B.warmText, margin: 0 } },
                React.createElement("strong", null, b.bold),
                b.rest
              )
            );
          })
        )
      ),
      /* Section divider dots */
      React.createElement(
        "div",
        { style: { padding: "20px 0 0", textAlign: "center", background: BG_RECAP } },
        React.createElement("span", { style: { fontSize: 18, color: B.footerGray, opacity: 0.7, letterSpacing: 8 } }, "\xB7 \xB7 \xB7")
      ),
      React.createElement(Band, { from: BG_RECAP, to: BG_SOCIAL, height: 28 }),
      /* ======= SECTION 4: SOCIAL PROOF (Quote block with left accent) ======= */
      React.createElement(
        "div",
        { style: { background: BG_SOCIAL, padding: "28px 18px 8px" } },
        React.createElement(Eyebrow, null, "Social proof"),
        React.createElement(H2, { size: 20 }, c.socialIntro),
        React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 14 } },
          c.socialQuotes.map(function(q, i) {
            return React.createElement(
              "div",
              { key: i, style: { display: "flex", alignItems: "stretch" } },
              React.createElement("div", { style: { width: 4, background: accents[i], flexShrink: 0, borderRadius: 2 } }),
              React.createElement(
                "div",
                { style: { background: "#FFFFFF", borderRadius: 12, padding: "18px 16px", flex: 1 } },
                React.createElement(
                  "p",
                  { style: { fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: B.warmText, margin: "0 0 10px", fontStyle: "italic" } },
                  React.createElement("span", { style: { fontSize: 28, color: accents[i], fontWeight: 700, lineHeight: 0.8, display: "block", marginBottom: 4 } }, "\u201C"),
                  q.text
                ),
                React.createElement("div", { style: { fontFamily: F.sans, fontSize: 12, color: B.muted, fontWeight: 700 } }, "\u2013 " + q.source)
              )
            );
          })
        )
      ),
      React.createElement(Band, { from: BG_SOCIAL, to: BG_PRODUCT, height: 28 }),
      /* ======= SECTION 5: PRODUCT INTRO + THREE-LAYER VISUAL STACK ======= */
      React.createElement(
        "div",
        { style: { background: BG_PRODUCT, padding: "28px 22px 16px" } },
        React.createElement(Eyebrow, null, "The product"),
        React.createElement(
          H2,
          { size: 22 },
          "The 3+3 Bundle"
        ),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 15, lineHeight: 1.7, color: B.warmText, margin: "0 0 18px" } }, c.productIntro),
        /* Three-Layer Visual Stack */
        React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 10 } },
          c.productLayers.map(function(layer, i) {
            var layerColors = [B.terracotta, B.teal, "#5DD07A"];
            return React.createElement(
              "div",
              { key: i, style: { display: "flex", alignItems: "center", background: "#FFFFFF", borderRadius: 12, padding: "14px 16px", borderLeft: "4px solid " + layerColors[i] } },
              React.createElement("div", { style: { fontSize: 22, marginRight: 12, flexShrink: 0 } }, layer.icon),
              React.createElement(
                "div",
                null,
                React.createElement("div", { style: { fontFamily: F.main, fontSize: 14, fontWeight: 700, color: B.warmHeading, marginBottom: 2 } }, layer.name),
                React.createElement("div", { style: { fontFamily: F.main, fontSize: 12, color: B.soft, lineHeight: 1.5 } }, layer.desc)
              )
            );
          })
        ),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 14, lineHeight: 1.7, color: B.warmText, margin: "18px 0 0" } }, c.productPrice)
      ),
      React.createElement(Band, { from: BG_PRODUCT, to: BG_PHOTOS, height: 20 }),
      /* ======= SECTION 6: PRODUCT PHOTOS (3 product images) ======= */
      React.createElement(
        "div",
        { style: { background: BG_PHOTOS, padding: "0 14px 16px", display: "flex", gap: 8 } },
        [
          { src: IMG_CLOUD, label: "Cloud Raindrop" },
          { src: IMG_FOX, label: "Fox Woodland" },
          { src: IMG_PENGUIN, label: "Penguin Party" }
        ].map(function(img, i) {
          return React.createElement(
            "div",
            { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
            React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
            React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
          );
        })
      ),
      /* Section divider dots */
      React.createElement(
        "div",
        { style: { padding: "10px 0 0", textAlign: "center", background: BG_PHOTOS } },
        React.createElement("span", { style: { fontSize: 18, color: B.footerGray, opacity: 0.7, letterSpacing: 8 } }, "\xB7 \xB7 \xB7")
      ),
      React.createElement(Band, { from: BG_PHOTOS, to: BG_GUARANTEE, height: 28 }),
      /* ======= SECTION 7: GUARANTEE (accent panel) ======= */
      React.createElement(
        "div",
        { style: { background: BG_GUARANTEE, padding: "28px 22px 24px", border: "1px solid " + B.guaranteeBorder, borderRadius: 8, margin: "0 18px" } },
        React.createElement(
          "div",
          { style: { textAlign: "center", marginBottom: 16 } },
          React.createElement("div", { style: { fontFamily: F.main, fontSize: 18, fontWeight: 700, color: B.warmHeading, lineHeight: 1.3 } }, c.guaranteeHeadline),
          React.createElement("div", { style: { fontFamily: F.main, fontSize: 14, color: B.soft, marginTop: 4 } }, c.guaranteeBody)
        ),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 14, lineHeight: 1.7, color: B.warmText, margin: "0 0 12px" } }, c.guaranteeDetail),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 16, lineHeight: 1.5, color: B.warmHeading, margin: 0, fontWeight: 600, textAlign: "center" } }, c.guaranteeClosing)
      ),
      React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, height: 28 }),
      /* ======= SECTION 8: PRIMARY CTA ======= */
      React.createElement(CTAClose, {
        intro: c.ctaIntro,
        button: c.ctaButton,
        fine: null,
        trust: true
      }),
      /* Secondary text link */
      React.createElement(
        "div",
        { style: { background: BG_CTA, padding: "0 22px 20px", textAlign: "center" } },
        React.createElement("a", { href: "#", style: { fontFamily: F.main, fontSize: 13, color: "#D0E0D0", textDecoration: "underline" } }, c.ctaSecondary)
      ),
      /* ======= SECTION 9: LENA SIGN-OFF (custom) ======= */
      React.createElement(
        "div",
        { style: { background: B.warmBg, padding: "24px 22px 0" } },
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 15, lineHeight: 1.7, color: B.warmText, margin: "0 0 14px" } }, c.signoffText1),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 15, lineHeight: 1.7, color: B.warmText, margin: "0 0 20px" } }, c.signoffText2),
        React.createElement("p", { style: { fontFamily: F.main, fontSize: 15, color: B.warmText, margin: "0 0 4px" } }, c.signoffClosing),
        React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 36, color: B.warmHeading, lineHeight: 0.95, fontWeight: 500 } }, c.signoffName)
      ),
      /* ======= SECTION 10: PS ======= */
      React.createElement(
        "div",
        { style: { background: B.warmBg, padding: "20px 22px 0" } },
        React.createElement(
          "div",
          { style: { borderTop: "1px dashed " + B.muted, paddingTop: 18 } },
          React.createElement(
            "p",
            { style: { fontFamily: F.main, fontSize: 13, lineHeight: 1.65, color: B.soft, margin: 0 } },
            React.createElement("span", { style: { fontWeight: 700, color: B.warmText } }, "PS: "),
            c.signoffPS
          )
        )
      ),
      React.createElement(
        "div",
        { style: { padding: "0 22px", background: B.warmBg } },
        React.createElement("div", { style: { borderTop: "1px dashed " + B.muted, paddingTop: 18 } })
      ),
      /* ======= FOOTER ======= */
      React.createElement(Footer, null)
    );
  };
  window.WelcomeE8L1 = WelcomeE8L1;
})();
