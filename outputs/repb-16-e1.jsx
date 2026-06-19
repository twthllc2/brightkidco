/* Replenish B E1 -- "75-Day Rotation Check-In"
   Built from: repb-16-e1.md
   Flow: 16, Replenishment Path B (3+3 Buyers)
   Email Position: E1 (of 2)
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
  },
  mint: "#DBFFCD",
  testimonialBg: "#FBF7EB",
  brandGreen: "#039902"
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
    title: "Customer Support, Mom of two autistic sons",
    ps: "P.S. If your child is still not showing any awareness signals after 75 days, that's not failure. Some kids need longer. Reply if you want me to look at your specific situation. I read everything."
  },
  out: "Reply to this email. Lena reads every response.",
  footer: {
    tagline: "Built for the brain that learns differently.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo Ltd / Berlin, Germany / hello@brightkidco.com",
    note: "You're receiving this because you purchased the 3+3 Body-Signal Learning Bundle."
  }
};

/* 3. PRIMITIVES */
var MW = 420;
var B = window.BRAND;
var F = window.FONT;

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
    React.createElement("img", {
      src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#1F2D2F">BrightKidCo</text></svg>'),
      alt: "BrightKidCo",
      style: { height: 34 }
    })
  );
};

var Eyebrow = function(props) {
  return React.createElement("div", {
    style: {
      fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase",
      color: props.color || B.tealDeep, fontWeight: 700, marginBottom: 10
    }
  }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", {
    style: {
      fontSize: props.size || 28, lineHeight: 1.15, fontWeight: 700,
      margin: "0 0 16px", letterSpacing: -0.4,
      textAlign: props.center ? "center" : "left",
      color: B.ink
    }
  }, props.children);
};

var LeafIcon = function() {
  return React.createElement("span", {
    style: { color: B.brandGreen, marginRight: 8, fontSize: 14 }
  }, "\u{1F331}");
};

/* 4. EMAIL DATA */
var emailData = {
  preheader: "Your 3+3 bundle has been working hard for 75 days. Here's what to ask yourself, and when to reorder.",
  headline: "75 days of body-signal learning.",
  subhead: "Wherever you are in the journey, the signal is wiring.",
  opener: "Whether your child is showing first signals or still in the familiarization phase, whether you're seeing mini-wins each week or wondering if it's doing anything at all, if your 3+3 bundle has been in the rotation for 75 days, you've already done the hardest part: consistent exposure to the Body-Signal Learning Layer.",
  openerEnd: "And that consistency is the variable that matters most.",
  anchorsTitle: "At 75 days, parents tell me they're usually in one of these places:",
  anchors: [
    "He's starting to pause before an accident. Not every time. But sometimes. And that's new.",
    "She tolerates the underwear now, doesn't fight it, doesn't ask to take it off. That's sensory progress you didn't have 10 weeks ago.",
    "Nothing obvious has changed yet. And you're wondering if this still on track.",
    "You've seen real progress, dry stretches, awareness moments, even a few successful potty trips. And now you're wondering: what's next?",
    "You took a break somewhere in those 75 days. Maybe a week. Maybe a month. That's normal here."
  ],
  anchorsClosing: "Wherever you are on that list, every single one of those is a real outcome. And every single one tells me the underwear is doing its job: giving the nervous system information it was missing before.",
  testimonialsTitle: "Three families, three different timelines, one common thread:",
  testimonials: [
    {
      text: "He went from 'almost trained' to 'mostly there' around the 8-week mark. The rotation meant we always had a clean pair ready when he needed to go.",
      name: "Sarah",
      desc: "mom of a verbal 4-year-old"
    },
    {
      text: "She finally started pausing before accidents in Week 6. That pause, that split-second where you can see her brain registering 'something happened', is everything I was hoping for.",
      name: "Lisa",
      desc: "mom of a 6-year-old with sensory differences"
    },
    {
      text: "He's not trained. But he's feeling the wetness for the first time in 7 years. That alone was worth the 75 days. The rotation means the underwear is always part of his routine now, and every small signal builds on the last.",
      name: "Maria",
      desc: "mom of a non-verbal 8-year-old"
    }
  ],
  testimonialClosing: "If any of those sound familiar, if you've seen even one small change in 75 days, the signal-wiring is happening. It just happens on different timelines for different nervous systems.",
  validationTitle: "I want to be honest with you:",
  validationIntro: "75 days into the Body-Signal approach, some families are seeing real momentum. Others are still in the 'wait and watch' phase. Both are legitimate outcomes.",
  validationBody: "Here's what I've learned watching thousands of families go through this: The underwear doesn't train your child. It informs their nervous system. The signal has to reach the brain, and for some kids, that pathway takes longer to wire. The 3+3 rotation means that signal is available every single day, multiple times a day, without you having to do anything extra.",
  validationBold1: "If you've seen nothing yet:",
  validationBold1Text: "That's not a sign it's not working. It's a sign the wiring is still in progress. Some kids need 8, 12, even 16 weeks before the first observable signal.",
  validationBold2: "If you've seen mini-wins:",
  validationBold2Text: "The pathway is building. Keep going. The next 75 days often look very different from the first 75.",
  rotationBody: "The 3+3 bundle was designed for exactly this: 6 pairs in rotation so your child always has a clean, signal-ready pair available. At 75 days of consistent wear, the fabric is doing its job, but if you're doing laundry more than twice a week, you might benefit from expanding the rotation.",
  upsellTitle: "5+5 bundle adds 4 more pairs",
  upsellBody: "Enough for a full two-week cycle without scrambling. More pairs = more signal opportunities = less laundry stress for you.",
  ctaBody1: "If the 3+3 is still working for your family, great. No need to change anything. The underwear will keep doing its job for many more weeks.",
  ctaBody2: "If you're ready to expand the rotation, or if you just want to have fresh pairs on hand, here's the reorder link:",
  cta1: "Refresh Your 3+3",
  cta2: "Explore the 5+5 Bundle",
  ctaClosing: "No rush. The signal-wiring happens on your child's timeline, not ours.",
  nextTime: "Next time: The final check-in, what 150 days of rotation means for the long game."
};

/* 5. REPLENISH B E1 COMPONENT */
var ReplenishBE1 = function() {
  var c = emailData;
  var BG_HERO = "#DBFFCD";
  var BG_CONTENT = "#FAF9F7";
  var BG_TESTIMONIAL = "#FBF7EB";
  var BG_UPSELL_MINT = "#DBFFCD";
  var BG_CTA = "#FAF9F7";

  var accents = [B.teal, B.green, "#E8A23D"];

  return React.createElement("div", { style: { width: MW, background: BG_CONTENT, fontFamily: F.main, color: B.ink } },
    /* Preheader bar */
    React.createElement("div", {
      style: { padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" }
    }, c.preheader),

    /* HEADER */
    React.createElement(Header, { bg: BG_CONTENT }),

    /* HERO BAND */
    React.createElement("div", { style: { background: "linear-gradient(180deg, " + BG_HERO + " 0%, " + BG_CONTENT + " 100%)", padding: "28px 22px 0", textAlign: "center" } },
      React.createElement(Eyebrow, null, "75-Day Rotation Check-In"),
      React.createElement("h1", {
        style: {
          fontSize: 26, lineHeight: 1.25, fontWeight: 700, margin: "0 0 12px",
          color: B.ink, fontFamily: F.display
        }
      }, c.headline),
      React.createElement("p", {
        style: { fontSize: 17, color: B.soft, lineHeight: 1.6, margin: "0 0 20px", fontWeight: 400 }
      }, c.subhead)
    ),

    /* Hero image */
    React.createElement("div", {
      style: { margin: "0 14px 20px", borderRadius: 16, overflow: "hidden" }
    },
      React.createElement("img", {
        src: "data:image/jpeg;base64,IMG_HERO_PLACEHOLDER",
        alt: "A winding path growing clearer, representing the body-signal learning journey",
        style: { width: "100%", display: "block" }
      })
    ),

    /* SECTION 1: Opener */
    React.createElement("div", { style: { background: BG_CONTENT, padding: "4px 22px 24px" } },
      React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.opener),
      React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 600 } }, c.openerEnd)
    ),

    /* Section divider */
    React.createElement("div", { style: { textAlign: "center", padding: "8px 0" } },
      React.createElement("span", { style: { color: B.muted, fontSize: 16 } }, ",")
    ),

    /* SECTION 2: Recognition Anchors */
    React.createElement("div", { style: { background: BG_CONTENT, padding: "4px 22px 24px" } },
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.6, color: B.soft, margin: "0 0 16px", fontStyle: "italic" } }, c.anchorsTitle),
      c.anchors.map(function(anchor, i) {
        return React.createElement("div", {
          key: i,
          style: {
            display: "flex", alignItems: "flex-start", marginBottom: 12, gap: 6
          }
        },
          React.createElement(LeafIcon),
          React.createElement("span", {
            style: { fontSize: 15.5, lineHeight: 1.7, color: B.soft }
          }, anchor)
        );
      }),
      React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.7, color: B.soft, margin: "16px 0 0" } }, c.anchorsClosing)
    ),

    /* Section divider */
    React.createElement("div", { style: { textAlign: "center", padding: "8px 0" } },
      React.createElement("span", { style: { color: B.muted, fontSize: 16 } }, ",")
    ),

    /* SECTION 3: Three-Family Testimonials */
    React.createElement("div", { style: { background: BG_TESTIMONIAL, padding: "28px 14px 24px" } },
      React.createElement("div", { style: { padding: "0 8px", marginBottom: 18 } },
        React.createElement(Eyebrow, null, "Real stories, real timelines"),
        React.createElement(H2, { size: 22 }, c.testimonialsTitle)
      ),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
        c.testimonials.map(function(t, i) {
          return React.createElement("div", {
            key: i,
            style: {
              background: "#FFFFFF",
              border: "2px solid " + B.ink,
              borderLeft: "4px solid " + accents[i],
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "3px 3px 0 " + B.ink
            }
          },
            React.createElement("div", { style: { padding: "20px 18px" } },
              React.createElement("div", {
                style: { fontSize: 36, lineHeight: 0.8, color: accents[i], fontWeight: 700, marginBottom: 8 }
              }, "\u201C"),
              React.createElement("p", {
                style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 12px", fontStyle: "italic" }
              }, t.text),
              React.createElement("div", { style: { fontSize: 12, color: B.ink, fontWeight: 700 } },
                "\u2014 " + t.name + ", ",
                React.createElement("span", { style: { fontWeight: 400, color: B.muted } }, t.desc)
              )
            )
          );
        })
      ),
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "18px 8px 0" } }, c.testimonialClosing)
    ),

    /* Section divider */
    React.createElement("div", { style: { textAlign: "center", padding: "8px 0", background: BG_CONTENT } },
      React.createElement("span", { style: { color: B.muted, fontSize: 16 } }, ",")
    ),

    /* SECTION 4: Validation + Mechanism */
    React.createElement("div", { style: { background: BG_CONTENT, padding: "4px 22px 24px" } },
      React.createElement("p", { style: { fontSize: 16, lineHeight: 1.6, color: B.ink, margin: "0 0 14px" } },
        React.createElement("strong", null, c.validationTitle),
        " ",
        c.validationIntro
      ),
      React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.validationBody),
      React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } },
        React.createElement("strong", null, c.validationBold1),
        " ",
        c.validationBold1Text
      ),
      React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.7, color: B.soft, margin: 0 } },
        React.createElement("strong", null, c.validationBold2),
        " ",
        c.validationBold2Text
      )
    ),

    /* Section divider */
    React.createElement("div", { style: { textAlign: "center", padding: "8px 0" } },
      React.createElement("span", { style: { color: B.muted, fontSize: 16 } }, ",")
    ),

    /* SECTION 5: Rotation Value + Upsell */
    React.createElement("div", {
      style: {
        background: "linear-gradient(180deg, " + BG_CONTENT + " 0%, #EDFAF2 50%, " + BG_CONTENT + " 100%)",
        padding: "4px 22px 24px"
      }
    },
      React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.7, color: B.soft, margin: "0 0 14px" } }, c.rotationBody),

      /* Upsell card */
      React.createElement("div", {
        style: {
          background: "#FFFFFF",
          border: "2px solid " + B.ink,
          borderRadius: 16,
          padding: "22px 20px",
          boxShadow: "3px 3px 0 " + B.ink,
          marginTop: 8
        }
      },
        React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "flex-start" } },
          React.createElement("div", {
            style: {
              width: 48, height: 48, borderRadius: "50%",
              background: BG_UPSELL_MINT,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, border: "2px solid " + B.ink
            }
          },
            React.createElement("span", { style: { fontSize: 20 } }, "\u{1F33F}")
          ),
          React.createElement("div", null,
            React.createElement("div", {
              style: { fontSize: 17, fontWeight: 700, color: B.ink, marginBottom: 6 }
            }, c.upsellTitle),
            React.createElement("div", {
              style: { fontSize: 14, lineHeight: 1.5, color: B.soft }
            }, c.upsellBody)
          )
        )
      )
    ),

    /* SECTION 6: CTA Band */
    React.createElement("div", { style: { background: BG_CTA, padding: "24px 22px 28px", textAlign: "center" } },
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: B.soft, margin: "0 0 10px" } }, c.ctaBody1),
      React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: B.soft, margin: "0 0 20px" } }, c.ctaBody2),

      /* CTA 1: Primary button */
      React.createElement("a", {
        href: "#",
        style: {
          display: "inline-block",
          padding: "15px 32px",
          background: B.brandGreen,
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: 700,
          textDecoration: "none",
          borderRadius: 999,
          letterSpacing: 0.3,
          marginBottom: 14
        }
      }, c.cta1 + " \u2192"),

      React.createElement("br"),

      /* CTA 2: Text link */
      React.createElement("a", {
        href: "#",
        style: {
          display: "inline-block",
          color: B.brandGreen,
          fontSize: 15,
          textDecoration: "none",
          fontWeight: 700,
          marginBottom: 16
        }
      }, c.cta2 + " \u2192"),

      React.createElement("p", {
        style: { fontSize: 14, lineHeight: 1.5, color: B.muted, margin: "12px 0 0", fontStyle: "italic" }
      }, c.ctaClosing),

      React.createElement("p", {
        style: { fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "16px 0 0" }
      }, React.createElement("em", null, c.nextTime))
    ),

    /* LENA SIGN-OFF */
    React.createElement("div", { style: { background: B.ink, padding: "0 22px 36px" } },
      React.createElement("div", {
        style: {
          position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40",
          borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden"
        }
      },
        React.createElement("div", {
          style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.gradient, opacity: 0.9 }
        }),
        React.createElement("div", {
          style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }
        },
          React.createElement("div", {
            style: {
              width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
              background: "linear-gradient(135deg, #FFD866 0%, " + B.teal + " 100%)", padding: 2.5
            }
          },
            React.createElement("div", {
              style: {
                width: "100%", height: "100%", borderRadius: "50%", background: "#FFFDF6",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden", border: "1.5px solid " + B.ink
              }
            },
              React.createElement("svg", { width: 58, height: 58, viewBox: "0 0 58 58" },
                React.createElement("rect", { width: 58, height: 58, fill: "#F5E8D0" }),
                React.createElement("circle", { cx: 29, cy: 22, r: 10, fill: "#D4A574" }),
                React.createElement("path", { d: "M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z", fill: "#C98C6B" })
              )
            )
          ),
          React.createElement("div", { style: { flex: 1, minWidth: 0 } },
            React.createElement("div", {
              style: {
                fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
                color: "#8FAFB2", fontWeight: 700, marginBottom: 2
              }
            }, "A note from"),
            React.createElement("div", {
              style: { fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }
            }, window.FLOW1_SHARED.signoff.name),
            React.createElement("div", {
              style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }
            }, window.FLOW1_SHARED.signoff.title)
          )
        ),
        React.createElement("div", {
          style: {
            display: "flex", alignItems: "center", gap: 14,
            paddingTop: 16, paddingBottom: 16,
            borderTop: "1.5px dashed #3A4547",
            borderBottom: "1.5px dashed #3A4547",
            marginBottom: 16
          }
        },
          React.createElement("div", { style: { flex: 1 } },
            React.createElement("div", {
              style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }
            }, window.FLOW1_SHARED.signoff.line1),
            React.createElement("div", {
              style: {
                fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
                fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2
              }
            }, "Lena")
          ),
          React.createElement("svg", {
            width: 54, height: 40, viewBox: "0 0 54 40",
            style: { flexShrink: 0, opacity: 0.55 }
          },
            React.createElement("path", {
              d: "M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10",
              stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round"
            }),
            React.createElement("path", {
              d: "M48,12 L52,10 L50,14",
              stroke: "#D8F57C", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round"
            })
          )
        ),
        React.createElement("div", {
          style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }
        },
          React.createElement("span", {
            style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }
          }, "P.S."),
          window.FLOW1_SHARED.signoff.ps.replace(/^P\.S\.\s*/, "")
        )
      )
    ),

    /* Reply line */
    React.createElement("div", {
      style: { background: "#FFFFFF", padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: B.muted, fontStyle: "italic" }
    }, window.FLOW1_SHARED.out),

    /* FOOTER */
    React.createElement("div", {
      style: { background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" }
    },
      React.createElement("div", {
        style: {
          fontFamily: F.display, fontSize: 16, fontStyle: "italic", fontWeight: 500,
          color: B.muted, marginBottom: 20, letterSpacing: -0.2
        }
      }, window.FLOW1_SHARED.footer.tagline),
      React.createElement("div", {
        style: {
          width: 40, height: 1, background: B.mint, margin: "0 auto 20px"
        }
      }),
      React.createElement("div", {
        style: { fontSize: 12, color: B.muted, lineHeight: 1.8, marginBottom: 16 }
      },
        React.createElement("strong", { style: { color: B.ink, fontSize: 14 } }, "BrightKidCo"),
        React.createElement("br"),
        window.FLOW1_SHARED.footer.address
      ),
      React.createElement("div", {
        style: { fontSize: 11, color: B.muted, lineHeight: 1.8, marginBottom: 16 }
      }, window.FLOW1_SHARED.footer.note),
      React.createElement("div", {
        style: { fontSize: 11, color: B.muted, lineHeight: 1.8 }
      },
        React.createElement("a", { href: "#", style: { color: B.brandGreen, textDecoration: "underline" } }, "Unsubscribe"),
        " | ",
        React.createElement("a", { href: "#", style: { color: B.brandGreen, textDecoration: "underline" } }, "Manage Preferences"),
        " | ",
        React.createElement("a", { href: "#", style: { color: B.brandGreen, textDecoration: "underline" } }, "Privacy Policy")
      ),
      React.createElement("div", {
        style: { margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }
      })
    )
  );
};

window.ReplenishBE1 = ReplenishBE1;
