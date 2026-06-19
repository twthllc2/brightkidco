/* mid-13-d60.jsx — PP-Mid Check-In E3, Day 60 (Cross-Level) */
(() => {
  var MW = 420;
  var B = window.BRAND;
  var F = window.FONT;
  var BG_HERO = "#FBF7F1";
  var BG_OBSERVATION = "#FFF6E2";
  var BG_VALIDATION = "#EAF6F2";
  var BG_ANCHORS = "#FFFDF6";
  var BG_TESTIMONIAL = "#F0EDF8";
  var BG_TROUBLE = "#FBF7F1";
  var BG_GUARANTEE = "#FFF8E6";
  var BG_CTA = "#1F2D2F";
  var BG_FOOTER = "#FFFFFF";

  var Band = function(props) {
    return React.createElement("div", {
      style: { height: props.h || 40, background: "linear-gradient(180deg, " + props.from + " 0%, " + props.to + " 100%)" }
    });
  };
  var Header = function(props) {
    return React.createElement("div", {
      style: { background: props.bg, padding: "24px 20px 0", textAlign: "center" }
    }, React.createElement("img", {
      src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#1F2D2F">BrightKidCo</text></svg>'),
      alt: "BrightKidCo", style: { height: 34 }
    }));
  };
  var Eyebrow = function(props) {
    return React.createElement("div", {
      style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || "#1E8A8F", fontWeight: 700, marginBottom: 10 }
    }, props.children);
  };
  var GradientSpan = function(props) {
    return React.createElement("span", {
      style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 }
    }, props.children);
  };

  /* Product photos as base64 */
  var IMG_CLOUD = "data:image/jpeg;base64," + window.__IMG_CLOUD__;
  var IMG_FOX = "data:image/jpeg;base64," + window.__IMG_FOX__;
  var IMG_PENGUIN = "data:image/jpeg;base64," + window.__IMG_PENGUIN__;

  var emailData = {
    preheader: "Whether your child is showing clear signs or still building awareness, both belong here.",
    headline1: "60 days.",
    headline2: "Where are you?",
    observation: [
      "60 days. That's two months of consistent wear, consistent signals, consistent learning.",
      "Whether your child is starting to pause before an accident, or you're still waiting for the first sign of awareness, both are real outcomes. Both belong in this conversation.",
      "Because the nervous system doesn't follow a calendar. Some kids show first signals at 2 weeks. Others need 8 to 12 weeks. Some are building awareness quietly, in ways that don't look like \"progress\" on a chart but are real steps inside the brain.",
      "Wherever you are right now, that's where this email meets you."
    ],
    validationIntro: "Let me name what might be true for you:",
    validationPaths: [
      { label: "If you're seeing progress:", text: "Your child pauses before peeing. Or pulls at their pants when wet. Or walked toward the bathroom, even after the accident. That's the body signal wiring. The brain is learning: \"This feeling means something. I should do something about it.\" Keep going. Growing awareness leads to longer dry periods. Some kids start initiating, showing you, telling you, or leading you to the bathroom. That's the next phase." },
      { label: "If you're not seeing what you hoped:", text: "That's not failure. That's neurology. Every nervous system has its own pace. Some children need more time for the body-signal feedback loop to register. The 60-day window exists because we know timelines vary. If your child is slow to pick up signals, doesn't seem to feel wet or dry, they may need more sustained exposure. The neural pathways are still forming even when there's no visible sign." },
      { label: "If you're somewhere in between, mini-wins mixed with setbacks:", text: "That's the most common path. Progress isn't a straight line. It looks more like: two steps forward, one step back, a plateau, then another step. Regression after progress isn't starting over. The pathways you built are still there. The nervous system is recalibrating." }
    ],
    anchorsIntro: "You've probably seen some version of one of these by now:",
    anchors: [
      "He paused mid-play. Looked down at his pants. Then kept playing. But that pause, that never happened before.",
      "She felt wet and pulled at her pants. Then signed or said \"wet\", a first.",
      "He stayed dry for 2 hours instead of 45 minutes. Small shift. Real shift.",
      "She's been in the underwear for 8 weeks and there's no change yet. Still waiting.",
      "He walks toward the bathroom after an accident, not before, but the connection is building."
    ],
    anchorsClosing: "If any of these match your experience, you're on the path. Your child's path.",
    testimonialIntro: "Three parents, three different kids, one common experience at 60 days:",
    testimonials: [
      { text: "He went from 'I need to pee' after the fact to pausing before. Not every time. But sometimes. That's more than we had in 3 years of trying other methods.", source: "Week 8 update from a mom whose 4-year-old \"almost trained\" for two years." },
      { text: "She finally paused when she felt wetness. That was Week 6. Then nothing for two weeks. Then she looked down again. It's slow, but it's happening.", source: "Week 8 update from a mom whose 7-year-old has sensory processing differences and had tried BCBA protocols for years." },
      { text: "He's not trained. But he's feeling something for the first time. He looked at the wet spot. That's everything.", source: "Week 8 update from a mom whose 9-year-old is non-verbal and had never shown any awareness of body signals in his life." }
    ],
    testimonialClosing: "If any of these sound like your story, the signal is working, even if it's quiet.",
    troubleshootingIntro: "If you're still not seeing signs, here are three things to check before considering next steps:",
    troubleshooting: [
      { title: "Consistency of wear.", body: "Is your child getting 2-4 hours in the Body-Signal underwear most days? The learning happens through repeated exposure. Gaps of 2-3 days can slow the feedback loop. Try increasing wear time gradually, 30 more minutes each week." },
      { title: "Stress around bathroom time.", body: "If bathroom visits feel like pressure, the child's nervous system tightens. Learning shuts down. Try stepping back entirely for 3-5 days, no prompts, no questions, just wear. Let the underwear do the teaching." },
      { title: "Sensory tolerance.", body: "If your child is refusing to wear the underwear or taking it off immediately, that's sensory, not defiance. Try shorter intervals (20-30 minutes) paired with a preferred activity. Build tolerance slowly. Some kids need 12+ weeks before the sensation becomes familiar enough to register." }
    ],
    guaranteeBody: "The 60-Day Guarantee is here. If you feel this approach isn't right for your child, for any reason, you're welcome to use it. No questions. No hoops.",
    guaranteeSuggestion: "But before you decide: try increasing wear time for another two weeks. Some of the biggest shifts happen between week 8 and week 12. The nervous system sometimes needs that extra window.",
    guaranteeClosing: "You decide what's right for your family. That's always been the deal.",
    ctaIntro: "If you're seeing signs, even small ones, your child may need fresh pairs to continue the learning without gaps.",
    ctaButton: "Reorder your Body-Signal underwear",
    ctaBundles: "3+3 Bundle (€79.99) or 5+5 Bundle (€119.99), free shipping, same 60-day guarantee.",
    ctaValue: "That's €13.33 per pair with the bundle, less than half the single-pair price.",
    ctaNotReady: "If you're not there yet, that's okay. The product will be here when you're ready. So will I.",
    closing: [
      "Whether your child is showing clear awareness, building it slowly, or still waiting for the first spark, the fact that you've given this 60 days of consistent effort says everything about your commitment. Not every parent makes it to this checkpoint. You did.",
      "Whatever comes next, more progress, a plateau, a different approach, you have what you need to decide. Trust your read."
    ]
  };

  var c = emailData;

  var Root = function() {
    return React.createElement("div", {
      style: { width: MW, background: BG_HERO, fontFamily: F.main, color: "#2D2D2D" }
    },
      /* PREHEADER */
      React.createElement("div", {
        style: { padding: "6px 20px", fontSize: 11, color: "#6B6B6B", background: "#F6F2EA", textAlign: "center", fontStyle: "italic" }
      }, c.preheader),

      /* HEADER */
      React.createElement(Header, { bg: BG_HERO }),

      /* HERO SECTION */
      React.createElement("div", {
        style: { background: BG_HERO, padding: "32px 24px 16px", textAlign: "center" }
      },
        React.createElement("h1", {
          style: { fontFamily: "'Fraunces', Georgia, serif", fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: "0 0 8px", letterSpacing: -0.4 }
        }, c.headline1),
        React.createElement("h1", {
          style: { fontFamily: "'Fraunces', Georgia, serif", fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: 0, letterSpacing: -0.4 }
        }, c.headline2)
      ),

      React.createElement(Band, { from: BG_HERO, to: BG_OBSERVATION }),

      /* SECTION 1: OBSERVATION OPENING */
      React.createElement("div", {
        style: { background: BG_OBSERVATION, padding: "28px 22px 20px" }
      },
        React.createElement(Eyebrow, null, "60-day check-in"),
        c.observation.map(function(p, i) {
          return React.createElement("p", {
            key: i, style: {
              fontSize: 15, lineHeight: 1.7,
              margin: i === 0 ? "0" : "0 0 14px",
              fontWeight: i === 0 ? 600 : 400,
              color: i === 0 ? "#2D2D2D" : "#4A6568"
            }
          }, p);
        })
      ),

      React.createElement(Band, { from: BG_OBSERVATION, to: BG_VALIDATION }),

      /* SECTION 2: VALIDATION */
      React.createElement("div", {
        style: { background: BG_VALIDATION, padding: "28px 22px 20px" }
      },
        React.createElement(Eyebrow, null, "Wherever you are"),
        React.createElement("p", {
          style: { fontSize: 15, lineHeight: 1.7, color: "#2D2D2D", margin: "0 0 16px", fontWeight: 500 }
        }, c.validationIntro),
        c.validationPaths.map(function(path, i) {
          return React.createElement("div", {
            key: i, style: {
              background: "#FFFFFF", borderRadius: 12, padding: "14px 16px",
              marginBottom: i < c.validationPaths.length - 1 ? 10 : 0,
              borderLeft: "4px solid " + (i === 0 ? "#7EC8A0" : i === 1 ? "#E8C87A" : "#4A90D9")
            }
          },
            React.createElement("p", {
              style: { fontSize: 13, fontWeight: 700, color: "#2D2D2D", margin: "0 0 6px" }
            }, path.label),
            React.createElement("p", {
              style: { fontSize: 14, lineHeight: 1.6, color: "#4A6568", margin: 0 }
            }, path.text)
          );
        })
      ),

      React.createElement(Band, { from: BG_VALIDATION, to: BG_ANCHORS }),

      /* SECTION 3: RECOGNITION ANCHORS */
      React.createElement("div", {
        style: { background: BG_ANCHORS, padding: "28px 22px 20px" }
      },
        React.createElement(Eyebrow, { color: "#4A90D9" }, "Recognition anchors"),
        React.createElement("p", {
          style: { fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px" }
        }, c.anchorsIntro),
        c.anchors.map(function(anchor, i) {
          return React.createElement("div", {
            key: i, style: {
              display: "flex", gap: 12, marginBottom: 12,
              alignItems: "flex-start"
            }
          },
            React.createElement("div", {
              style: {
                width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                background: i < 3 ? "linear-gradient(135deg, #2BAEB4, #5DD07A)" : (i === 3 ? "#E8C87A" : "#4A90D9"),
                display: "flex", alignItems: "center", justifyContent: "center",
                color: i === 3 ? "#2D2D2D" : "#FFFFFF", fontSize: 12, fontWeight: 700
              }
            }, "\u2713"),
            React.createElement("p", {
              style: { fontSize: 14, lineHeight: 1.6, color: "#4A6568", margin: 0, flex: 1 }
            }, anchor)
          );
        }),
        React.createElement("p", {
          style: { fontSize: 14, lineHeight: 1.6, color: "#2D2D2D", margin: "10px 0 0", fontWeight: 500 }
        }, c.anchorsClosing)
      ),

      React.createElement(Band, { from: BG_ANCHORS, to: BG_TESTIMONIAL }),

      /* SECTION 4: THREE-FAMILY TESTIMONIALS */
      React.createElement("div", {
        style: { background: BG_TESTIMONIAL, padding: "28px 22px 20px" }
      },
        React.createElement(Eyebrow, null, "Three families, one checkpoint"),
        React.createElement("p", {
          style: { fontSize: 15, lineHeight: 1.7, color: "#2D2D2D", margin: "0 0 14px", fontWeight: 500 }
        }, c.testimonialIntro),
        c.testimonials.map(function(t, i) {
          var accentColors = ["#2BAEB4", "#5DD07A", "#E8C87A"];
          return React.createElement("div", {
            key: i, style: {
              background: "#FFFFFF", borderRadius: 14, padding: "16px 18px",
              marginBottom: i < c.testimonials.length - 1 ? 12 : 0,
              borderLeft: "4px solid " + accentColors[i],
              fontFamily: "'Fraunces', Georgia, serif"
            }
          },
            React.createElement("div", {
              style: { fontSize: 36, lineHeight: 0.8, color: accentColors[i], fontWeight: 700, marginBottom: 8 }
            }, "\u201C"),
            React.createElement("p", {
              style: { fontSize: 14, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px", fontStyle: "italic", fontFamily: "'Questrial', sans-serif" }
            }, t.text),
            React.createElement("p", {
              style: { fontSize: 12, color: "#6B6B6B", margin: 0, fontFamily: "'Questrial', sans-serif", fontStyle: "italic" }
            }, t.source)
          );
        }),
        React.createElement("p", {
          style: { fontSize: 14, lineHeight: 1.6, color: "#4A6568", margin: "14px 0 0" }
        }, c.testimonialClosing)
      ),

      React.createElement(Band, { from: BG_TESTIMONIAL, to: BG_TROUBLE }),

      /* SECTION 5: TROUBLESHOOTING */
      React.createElement("div", {
        style: { background: BG_TROUBLE, padding: "28px 22px 20px" }
      },
        React.createElement(Eyebrow, { color: "#6B6B6B" }, "Troubleshooting"),
        React.createElement("p", {
          style: { fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px" }
        }, c.troubleshootingIntro),
        c.troubleshooting.map(function(item, i) {
          return React.createElement("div", {
            key: i, style: {
              background: "#FFFFFF", borderRadius: 12, padding: "16px 18px",
              marginBottom: i < c.troubleshooting.length - 1 ? 10 : 0,
              border: "1px solid #E8E4DD"
            }
          },
            React.createElement("div", {
              style: { display: "flex", gap: 10, alignItems: "flex-start" }
            },
              React.createElement("div", {
                style: {
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: "#F0EDF8", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, color: "#4A90D9"
                }
              }, String(i + 1)),
              React.createElement("div", null,
                React.createElement("p", {
                  style: { fontSize: 14, fontWeight: 700, color: "#2D2D2D", margin: "0 0 4px" }
                }, item.title),
                React.createElement("p", {
                  style: { fontSize: 13, lineHeight: 1.6, color: "#6B6B6B", margin: 0 }
                }, item.body)
              )
            )
          );
        })
      ),

      React.createElement(Band, { from: BG_TROUBLE, to: BG_GUARANTEE }),

      /* SECTION 6: GUARANTEE */
      React.createElement("div", {
        style: { background: BG_GUARANTEE, padding: "28px 22px 24px", textAlign: "center" }
      },
        React.createElement(Eyebrow, { color: "#B8860B" }, "Our promise"),
        React.createElement("h2", {
          style: { fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, lineHeight: 1.2, fontWeight: 700, color: "#2D2D2D", margin: "0 0 14px", textAlign: "center" }
        },
          "The ", React.createElement(GradientSpan, null, "60-Day"), " Calm Progress Guarantee."
        ),
        React.createElement("div", {
          style: {
            background: "#FFFFFF", borderRadius: 16, padding: "18px 16px", marginBottom: 12,
            border: "2px dashed #E8C87A", textAlign: "left"
          }
        },
          React.createElement("p", {
            style: { fontSize: 14, lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px", fontStyle: "italic" }
          }, c.guaranteeBody),
          React.createElement("p", {
            style: { fontSize: 14, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic" }
          }, c.guaranteeSuggestion)
        ),
        React.createElement("p", {
          style: { fontSize: 14, lineHeight: 1.6, color: "#2D2D2D", margin: 0, fontWeight: 500 }
        }, c.guaranteeClosing)
      ),

      React.createElement(Band, { from: BG_GUARANTEE, to: BG_CTA, h: 50 }),

      /* SECTION 7: CTA */
      React.createElement("div", {
        style: { background: BG_CTA, padding: "24px 22px 28px", textAlign: "center", color: "#FFFFFF" }
      },
        React.createElement("p", {
          style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 16px" }
        }, c.ctaIntro),
        React.createElement("a", {
          href: "#", style: {
            display: "inline-block", padding: "16px 28px", background: "#D8F57C", color: "#1F2D2F",
            fontSize: 15, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3
          }
        }, c.ctaButton + " \u2192"),
        React.createElement("p", {
          style: { fontSize: 13, color: "#8A9B9D", margin: "14px 0 6px" }
        }, c.ctaBundles),
        React.createElement("p", {
          style: { fontSize: 12, color: "#6B6B6B", margin: "0 0 14px" }
        }, c.ctaValue),
        React.createElement("p", {
          style: { fontSize: 13, color: "#B8CACD", margin: 0, fontStyle: "italic" }
        }, c.ctaNotReady)
      ),

      /* SECTION 8: CLOSING */
      React.createElement("div", {
        style: { background: BG_FOOTER, padding: "28px 22px 20px" }
      },
        c.closing.map(function(p, i) {
          return React.createElement("p", {
            key: i, style: {
              fontSize: 14, lineHeight: 1.7, color: "#4A6568",
              margin: i === c.closing.length - 1 ? "0" : "0 0 12px",
              fontStyle: i === 1 ? "italic" : "normal",
              fontWeight: i === 1 ? 500 : 400
            }
          }, p);
        })
      ),

      /* SECTION 9: LENA CLOSE */
      React.createElement("div", {
        style: { background: BG_FOOTER, padding: "0 22px 32px" }
      },
        React.createElement("div", {
          style: {
            position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40",
            borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden"
          }
        },
          React.createElement("div", {
            style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", opacity: 0.9 }
          }),
          /* Avatar + Name */
          React.createElement("div", {
            style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }
          },
            React.createElement("div", {
              style: {
                width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
                background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)", padding: 2.5
              }
            },
              React.createElement("div", {
                style: {
                  width: "100%", height: "100%", borderRadius: "50%", background: "#FFFDF6",
                  display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                  border: "1.5px solid #1F2D2F"
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
                style: { fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }
              }, "A note from"),
              React.createElement("div", {
                style: { fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }
              }, "Lena Bauer"),
              React.createElement("div", {
                style: { fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }
              }, "Customer Support \u00B7 Mom of two autistic sons")
            )
          ),
          /* Sign-off line */
          React.createElement("div", {
            style: {
              display: "flex", alignItems: "center", gap: 14,
              paddingTop: 16, paddingBottom: 16,
              borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547",
              marginBottom: 16
            }
          },
            React.createElement("div", { style: { flex: 1 } },
              React.createElement("div", {
                style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }
              }, "With care,"),
              React.createElement("div", {
                style: {
                  fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
                  fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2
                }
              }, "Lena")
            ),
            React.createElement("svg", {
              width: 54, height: 40, viewBox: "0 0 54 40", style: { flexShrink: 0, opacity: 0.55 }
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
          /* Bio */
          React.createElement("div", {
            style: { fontSize: 12, lineHeight: 1.6, color: "#B8CACD", fontStyle: "italic" }
          },
            "One of my sons was 8 before he trained. The other took us until he was almost 7. I know what it's like when the progress doesn't match the effort. I also know what it's like when the signal finally arrives, quietly, on its own timeline, when the nervous system is ready. Not when the calendar says it should be."
          ),
          React.createElement("div", {
            style: { fontSize: 12, lineHeight: 1.6, color: "#B8CACD", fontStyle: "italic", marginTop: 10 }
          },
            "Trust your child. Trust yourself. And if you need anything, hit reply. You'll get me, not a bot."
          ),
          /* P.S. */
          React.createElement("div", {
            style: { fontSize: 12, lineHeight: 1.6, color: "#B8CACD", fontStyle: "italic", marginTop: 14, borderTop: "1px solid #3A4547", paddingTop: 14 }
          },
            React.createElement("span", {
              style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }
            }, "P.S."),
            "If you're wondering whether the guarantee is worth using, just reply and tell me what's happening with your child. I can help you figure out the next best step, whatever that looks like."
          )
        )
      ),

      /* SECTION 10: OUTLINE + FOOTER */
      React.createElement("div", {
        style: { background: "#FFFFFF", padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: "#8A9B9D", fontStyle: "italic" }
      }, "Reply to this email. Lena reads every response."),

      React.createElement("div", {
        style: { background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" }
      },
        React.createElement("div", {
          style: {
            fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontStyle: "italic",
            fontWeight: 500, color: "#1F2D2F", marginBottom: 20, letterSpacing: -0.2
          }
        }, "Built for the brain that learns differently."),
        React.createElement("div", {
          style: { fontSize: 13, fontWeight: 700, color: "#1F2D2F", marginBottom: 14 }
        }, "BrightKidCo"),
        React.createElement("div", {
          style: { fontSize: 13, color: "#1F2D2F", marginBottom: 8 }
        }, "Body-Signal Learning Underwear for Kids Who Learn Differently"),
        React.createElement("div", {
          style: { fontSize: 12, color: "#6B6B6B", marginBottom: 12 }
        }, "Questions? Reply to this email. Lena reads every message."),
        React.createElement("div", {
          style: { fontSize: 11.5, color: "#6B6B6B", marginBottom: 14 }
        }, "60-Day Money-Back Guarantee \u00B7 Free Shipping on bundles over \u20AC79.99"),
        React.createElement("div", {
          style: { fontSize: 11, color: "#8A9B9D" }
        },
          React.createElement("a", { href: "%%unsubscribe_url%%", style: { color: "#1F2D2F", textDecoration: "underline" } }, "Unsubscribe"),
          " \u00B7 ",
          React.createElement("a", { href: "%%preferences_url%%", style: { color: "#1F2D2F", textDecoration: "underline" } }, "Manage Preferences")
        ),
        React.createElement("div", {
          style: { fontSize: 10, color: "#8A9B9D", marginTop: 14 }
        }, "\u00A9 BrightKidCo. All rights reserved."),
        React.createElement("div", {
          style: { margin: "28px auto 0", width: 60, height: 3, background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", borderRadius: 3 }
        })
      )
    );
  };

  window.Mid13D60 = Root;
})();
