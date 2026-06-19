/* PP Mid Check-In D30, Flow 13, Email 1
   Built from: mid-13-d30.md
   Pattern: Post-Purchase Mid Check-In
   Color palette: Sensory-Calming / Warm
   Images: 4 product photos
*/

/* 1. BRAND TOKENS — PP Mid Check-In palette */
window.BRAND = {
  bg: "#FBF9F6",
  text: "#2D2B28",
  textSoft: "#7A7570",
  sage: "#8B9D83",
  sageDeep: "#6B8163",
  terracotta: "#C47A5A",
  terracottaDeep: "#A8623E",
  amber: "#D4A574",
  divider: "#E6E2DC",
  testimonialBg: "#F2F5F0",
  paper: "#FFFFFF",
  gradient: "linear-gradient(135deg, #8B9D83 0%, #C47A5A 100%)",
  gradientText: {
    background: "linear-gradient(135deg, #8B9D83 0%, #C47A5A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent"
  }
};

window.FONT = {
  main: "'Questrial', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif",
  hand: "'Caveat', cursive"
};

/* 2. SHARED DATA */
window.MID_CHECKIN_SHARED = {
  signoff: {
    greeting: "With understanding,",
    name: "Lena",
    ps: "If nothing changed in 30 days, that was my older son too. We kept the underwear in rotation, stopped prompting, and Week 6 was when he finally paused. The nervous system doesn't follow our calendars."
  },
  out: "Reply to this email. Lena reads everything.",
  footer: {
    company: "BrightKidCo",
    address: "[Physical Address, Insert]",
    unsubscribe: "[Unsubscribe Link] · [Preferences Link]",
    reason: "You're receiving this because you purchased Body-Signal Learning Layer underwear.",
    guarantee: "60-Day Guarantee: If your child shows no progress, full refund. No questions."
  }
};

/* 3. PRIMITIVES */
var MW = 420;
var B = window.BRAND;
var F = window.FONT;
var S = window.MID_CHECKIN_SHARED;

var Band = function(props) {
  var height = props.height || 40;
  return React.createElement("div", {
    style: { height: height, background: "linear-gradient(180deg, " + props.from + " 0%, " + props.to + " 100%)" }
  });
};

var Divider = function() {
  return React.createElement("div", {
    style: { height: 1, background: B.divider, margin: "0 22px" }
  });
};

var Header = function(props) {
  return React.createElement("div", {
    style: { background: props.bg, padding: "24px 20px 0", textAlign: "center" }
  },
    React.createElement("img", {
      src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#2D2B28">BrightKidCo</text></svg>'),
      alt: "BrightKidCo",
      style: { height: 34 }
    })
  );
};

var Eyebrow = function(props) {
  return React.createElement("div", {
    style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.sageDeep, fontWeight: 700, marginBottom: 10 }
  }, props.children);
};

var H2 = function(props) {
  return React.createElement("h2", {
    style: {
      fontSize: props.size || 24,
      lineHeight: 1.2,
      fontWeight: 700,
      margin: "0 0 16px",
      letterSpacing: -0.3,
      textAlign: props.center ? "center" : "left",
      color: B.text,
      fontFamily: F.display
    }
  }, props.children);
};

var Section = function(props) {
  return React.createElement("div", {
    style: { background: props.bg || B.bg, padding: props.pad || "28px 22px 16px" }
  }, props.children);
};

/* 4. PRODUCT IMAGES — relative paths */
var IMG_CLOUD = "email-assets/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg";
var IMG_FOX = "email-assets/product-photos/flat-lay/training-pant-fox-woodland-white.jpg";
var IMG_PENGUIN = "email-assets/product-photos/flat-lay/training-pant-penguin-multicolor.jpg";
var IMG_WATERMELON = "email-assets/product-photos/flat-lay/training-pant-watermelon-pink.jpg";
var IMG_TODDLER_PINK = "email-assets/product-photos/lifestyle/toddler-potty-ladder-pink-multicolor.png";
var IMG_TODDLER_YELLOW = "email-assets/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png";

/* 5. EMAIL COMPONENT */
var Mid13D30 = function() {
  var BG = B.bg;
  var BG_TESTIMONIAL = B.testimonialBg;

  /* Section 1: Hook */
  var hookSection = React.createElement(Section, { bg: BG, pad: "28px 22px 16px" },
    React.createElement(Eyebrow, null, "Day 30 Check-In"),
    React.createElement(H2, null, "One month. Here's what that means."),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "30 days ago, you opened the box."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "Since then, your child has been wearing Body-Signal underwear, some days consistently, other days less. Maybe you've started noticing changes. Maybe you're still waiting for the first real sign."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or years into the journey, if you're not sure what Day 30 is supposed to look like, you're not alone."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: 0, fontWeight: 600 } },
      "That's what this email is for."
    )
  );

  /* Signal-Strength Indicator */
  var signalIndicator = React.createElement("div", {
    style: { background: BG, padding: "8px 22px 28px", textAlign: "center" }
  },
    React.createElement("div", {
      style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 10 }
    },
      /* Dot 1 — lit */
      React.createElement("div", { style: { textAlign: "center" } },
        React.createElement("div", { style: { width: 16, height: 16, borderRadius: "50%", background: B.sage, margin: "0 auto 6px", border: "2px solid " + B.sageDeep } }),
        React.createElement("div", { style: { fontSize: 10, color: B.sage, fontWeight: 700, letterSpacing: 0.5 } }, "Just Beginning")
      ),
      /* Line */
      React.createElement("div", { style: { width: 40, height: 2, background: B.divider, margin: "0 -4px 18px" } }),
      /* Dot 2 — dimmed */
      React.createElement("div", { style: { textAlign: "center" } },
        React.createElement("div", { style: { width: 16, height: 16, borderRadius: "50%", background: "transparent", margin: "0 auto 6px", border: "2px solid " + B.divider } }),
        React.createElement("div", { style: { fontSize: 10, color: B.textSoft, letterSpacing: 0.5 } }, "Building")
      ),
      /* Line */
      React.createElement("div", { style: { width: 40, height: 2, background: B.divider, margin: "0 -4px 18px" } }),
      /* Dot 3 — dimmed */
      React.createElement("div", { style: { textAlign: "center" } },
        React.createElement("div", { style: { width: 16, height: 16, borderRadius: "50%", background: "transparent", margin: "0 auto 6px", border: "2px solid " + B.divider } }),
        React.createElement("div", { style: { fontSize: 10, color: B.textSoft, letterSpacing: 0.5 } }, "Signaling")
      )
    )
  );

  /* Section 2: Recognition Anchors */
  var anchorsSection = React.createElement(Section, { bg: BG },
    React.createElement(H2, null, "Where you might be right now"),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 16px" } },
      "Every journey looks different at 30 days. You might recognize one of these:"
    ),
    React.createElement("ul", { style: { margin: "0 0 16px", padding: "0 0 0 20px" } },
      [
        "A pause before the accident. A look down at the wet spot. A hand toward the pants. A fleeting moment that says \"something happened here.\"",
        "A child who still plays through a wet pull-up without reacting, no awareness, no change in behavior, no signal at all.",
        "Patterns that come and go, one good day, then three days back to square one. The kind of progress that makes you wonder if it's real.",
        "A child who seemed to get it in Week 2, then regressed. The underwear that showed promise, then stopped working.",
        "Or nothing you can point to. No pause. No look. No reaction. Just more of the same routine you've been in for months."
      ].map(function(item, i) {
        return React.createElement("li", {
          key: i,
          style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, marginBottom: 12, paddingLeft: 4 }
        }, item);
      })
    ),
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, margin: 0, fontStyle: "italic" } },
      "If any of these sound like your morning, keep reading. What you're seeing (or not seeing) has an explanation."
    )
  );

  /* Section 3: Validation */
  var validationSection = React.createElement(Section, { bg: BG_TESTIMONIAL, pad: "28px 22px 28px" },
    React.createElement(Eyebrow, { color: B.sageDeep }, "Here's the real checkpoint"),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "Here's the thing about 30 days: it's not a deadline. It's a benchmark."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "Not a test of whether the underwear is working. Not a signal that something's wrong if nothing's changed."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "The Body-Signal Learning Layer works by building neural pathways through repetition, sustained, gentle feedback delivered every time there's wetness. For some nervous systems, that feedback wires quickly. For others, the brain needs more exposure before it learns to recognize the signal."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.text, margin: 0, fontWeight: 600 } },
      "Your child isn't behind. The method isn't failing. The learning layer is doing its job, even if you can't see it yet."
    )
  );

  /* Section 4: Mechanism */
  var mechanismSection = React.createElement(Section, { bg: BG },
    React.createElement(Eyebrow, null, "Why 30 days isn't the finish line"),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "Nicholson et al. (2019) showed that body awareness, the ability to sense internal body states like bladder fullness, follows a delayed developmental arc in autistic children. The signal IS arriving for many kids. It's just arriving milliseconds too late to prevent the accident."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "The Body-Signal Learning Layer compensates for that delay by creating a 30-to-60-second window of gentle feedback after every wetness event. That gentle sensation that lasts is what the brain needs to start connecting \"this feeling\" with \"I need the potty.\""
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px" } },
      "But building that connection takes repetition. Lots of it."
    ),
    React.createElement("ul", { style: { margin: "0 0 16px", padding: "0 0 0 20px" } },
      [
        "Some kids show first awareness signs at 2 weeks. They're the quicker end of the curve.",
        "Others need 6 to 8 weeks before the first pause. That's equally normal.",
        "Some need the full 12 weeks before a recognizable signal emerges."
      ].map(function(item, i) {
        return React.createElement("li", {
          key: i,
          style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, marginBottom: 10, paddingLeft: 4 }
        }, item);
      })
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.text, margin: 0, fontWeight: 600 } },
      "The 60-day guarantee window exists because every nervous system works on its own timeline. Day 30 is the midpoint, not the end."
    )
  );

  /* Section 5: Three-Family Testimonial Pattern */
  var testimonials = [
    {
      text: "He went from 'almost trained' to 'mostly trained' in 6 weeks. At 30 days, I was still sitting on the bathroom floor wondering if anything was happening. The first real pause came at Week 5.",
      name: "Sarah",
      desc: "L1 parent"
    },
    {
      text: "She finally paused, just once, when she felt wet. That was Week 4. Before that: thirty days of absolutely nothing I could point to. But that one pause was the crack in the wall.",
      name: "Lisa",
      desc: "L2 parent"
    },
    {
      text: "He's not trained. I don't know if he'll ever be 'trained' the way the books describe it. But he's feeling something for the first time in 9 years. After half a lifetime of nothing, that's everything.",
      name: "Maria",
      desc: "L3 parent"
    }
  ];

  var testimonialSection = React.createElement(Section, { bg: BG_TESTIMONIAL },
    React.createElement(H2, null, "Three families. Three timelines. One common thread."),
    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, marginBottom: 18 } },
      testimonials.map(function(t, i) {
        return React.createElement("div", {
          key: i,
          style: {
            background: "#FFFFFF",
            borderRadius: 12,
            padding: "20px 18px",
            borderLeft: "4px solid " + B.sage,
            border: "1px solid " + B.divider,
            borderLeftWidth: 4,
            borderLeftColor: B.sage
          }
        },
          React.createElement("p", {
            style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, margin: "0 0 12px", fontStyle: "italic", fontFamily: F.display }
          }, "\u201C" + t.text + "\u201D"),
          React.createElement("div", { style: { fontSize: 12, color: B.text, fontWeight: 600 } },
            "\u2014 " + t.name + ", ",
            React.createElement("span", { style: { fontWeight: 400, color: B.textSoft } }, t.desc)
          )
        );
      })
    ),
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, margin: 0 } },
      "Every single one of these parents was unsure at Day 30. Every single one kept going. The signal doesn't announce itself. It shows up in small ways, and it shows up on its own timeline."
    ),
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.text, margin: "14px 0 0", fontWeight: 600 } },
      "If any of these stories sound like your month, the signal is building. You just can't see it yet."
    )
  );

  /* Section 6: Mini-Win Guide */
  var miniWins = [
    "A pause, even once, before peeing",
    "A glance down at the wet spot after the accident",
    "A hand reaching toward the pants after wetting",
    "A step toward the bathroom (even after the fact)",
    "A pull at the waistband that wasn't there before",
    "Staying dry for 2 hours instead of 30 minutes",
    "Tolerating the underwear for longer stretches without pulling it off",
    "Looking at the potty when you say \"bathroom time\""
  ];

  var miniWinSection = React.createElement(Section, { bg: BG },
    React.createElement(H2, null, "What counts as progress right now"),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.6, color: B.textSoft, margin: "0 0 16px" } },
      "At Day 30, \"success\" doesn't mean fully trained. It means any of these:"
    ),
    React.createElement("ul", { style: { margin: "0 0 16px", padding: "0 0 0 20px", listStyle: "none" } },
      miniWins.map(function(item, i) {
        return React.createElement("li", {
          key: i,
          style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, marginBottom: 10, paddingLeft: 4, position: "relative" }
        },
          React.createElement("span", { style: { color: B.sage, fontWeight: 700, marginRight: 6 } }, "\u25CF"),
          item
        );
      })
    ),
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.text, margin: "0 0 14px", fontWeight: 600 } },
      "If you've seen even one of these, that's the body signal connection beginning to fire. Document it. Name it. That's your child's nervous system saying \"I'm learning.\""
    ),
    React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, margin: 0 } },
      "If you've seen none, that's also normal. Keep the underwear in the rotation. The repetition is still building the pathway. Day 45 may look completely different."
    )
  );

  /* Section 7: Practical Tips */
  var tipsSection = React.createElement(Section, { bg: BG_TESTIMONIAL, pad: "28px 22px 28px" },
    React.createElement(Eyebrow, null, "Three things to try this week"),
    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
      [
        {
          num: "1",
          title: "Increase wear time if you're not seeing anything.",
          body: "Try 3-4 hours daily instead of 1-2. More exposure = more feedback loops = faster pathway building."
        },
        {
          num: "2",
          title: "Watch for both verbal and non-verbal signals.",
          body: "Some children will say \"wet\" or show you with a gesture. Others will pull at their pants, touch the fabric, or change their posture. Both are valid signals."
        },
        {
          num: "3",
          title: "Drop the prompting for a week.",
          body: "If you've been doing scheduled sits or timers, pause them. Let the underwear sensation be the only teacher. Prompt-dependence can mask body signal progress."
        }
      ].map(function(tip, i) {
        return React.createElement("div", {
          key: i,
          style: { display: "flex", gap: 14, alignItems: "flex-start" }
        },
          React.createElement("div", {
            style: {
              width: 32, height: 32, flexShrink: 0, borderRadius: "50%",
              background: B.sage, color: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700
            }
          }, tip.num),
          React.createElement("div", { style: { flex: 1, minWidth: 0 } },
            React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.text, margin: "0 0 4px", fontWeight: 600 } }, tip.title),
            React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: B.textSoft, margin: 0 } }, tip.body)
          )
        );
      })
    )
  );

  /* Lifestyle photo between sections */
  var lifestylePhoto = React.createElement("div", {
    style: { background: BG, padding: "0 14px 8px" }
  },
    React.createElement("div", {
      style: { borderRadius: 14, overflow: "hidden" }
    },
      React.createElement("img", {
        src: IMG_TODDLER_PINK,
        alt: "Toddler learning with Body-Signal underwear",
        style: { width: "100%", display: "block", maxHeight: 220, objectFit: "cover" }
      })
    )
  );

  /* Product Photos */
  var productPhotos = React.createElement("div", {
    style: { background: BG, padding: "8px 14px 20px" }
  },
    React.createElement("div", { style: { display: "flex", gap: 8 } },
      [
        { src: IMG_CLOUD, label: "Cloud Raindrop", price: "\u20AC34" },
        { src: IMG_FOX, label: "Fox Woodland", price: "\u20AC34" },
        { src: IMG_PENGUIN, label: "Penguin Party", price: "\u20AC34" },
        { src: IMG_WATERMELON, label: "Watermelon", price: "\u20AC34" }
      ].map(function(img, i) {
        return React.createElement("div", {
          key: i,
          style: { flex: 1, borderRadius: 12, overflow: "hidden", border: "1px solid " + B.divider }
        },
          React.createElement("img", {
            src: img.src, alt: img.label,
            style: { width: "100%", display: "block", height: 110, objectFit: "cover" }
          }),
          React.createElement("div", {
            style: { padding: "6px 6px", fontSize: 10, fontWeight: 600, color: B.text, textAlign: "center", background: "#FFFFFF", lineHeight: 1.3 }
          },
            React.createElement("div", null, img.label),
            React.createElement("div", { style: { color: B.sage, marginTop: 2 } }, img.price)
          )
        );
      })
    )
  );

  /* Section 8: CTA */
  var ctaSection = React.createElement(Section, { bg: BG, pad: "28px 22px 16px" },
    React.createElement(H2, { center: true }, "You're halfway through"),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px", textAlign: "center" } },
      "You have 30 more days in the guarantee window. That's 30 more days of body-signal feedback. 30 more days for the nervous system to wire the connection."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.textSoft, margin: "0 0 14px", textAlign: "center" } },
      "The underwear is doing its job every time your child wears it. Whether the signal shows up next week, next month, or needs more time, the learning layer is working."
    ),
    React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.text, margin: "0 0 24px", textAlign: "center", fontWeight: 600 } },
      "Keep wearing. Keep noticing. The progress you're looking for might arrive next week. Or the week after. Both are real outcomes."
    ),
    /* Primary CTA */
    React.createElement("div", { style: { textAlign: "center", marginBottom: 14 } },
      React.createElement("a", {
        href: "#",
        style: {
          display: "inline-block",
          padding: "16px 32px",
          background: B.terracotta,
          color: "#FFFFFF",
          fontSize: 15,
          fontWeight: 700,
          textDecoration: "none",
          borderRadius: 8,
          letterSpacing: 0.3
        }
      }, "Explore the 3+3 Bundle to extend your rotation \u2192")
    ),
    /* Secondary CTA */
    React.createElement("div", { style: { textAlign: "center" } },
      React.createElement("a", {
        href: "#",
        style: {
          display: "inline-block",
          padding: "14px 28px",
          background: "transparent",
          color: B.terracotta,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          border: "2px solid " + B.terracotta,
          borderRadius: 8
        }
      }, "Reach out to Lena, hit reply. I read everything.")
    )
  );

  /* Next time teaser */
  var nextTime = React.createElement("div", {
    style: { background: BG, padding: "16px 22px 24px", textAlign: "center" }
  },
    React.createElement("p", { style: { fontSize: 13, color: B.textSoft, margin: 0, fontStyle: "italic" } },
      "Next time: Day 45 \u2014 the halfway point between first signals and lasting change."
    )
  );

  /* Lena Signoff */
  var signoffSection = React.createElement("div", {
    style: { background: BG, padding: "0 22px 8px" }
  },
    React.createElement(Divider),
    React.createElement("div", { style: { padding: "24px 0 20px" } },
      React.createElement("p", { style: { fontSize: 15, color: B.text, margin: "0 0 4px", lineHeight: 1.4 } }, S.signoff.greeting),
      React.createElement("p", {
        style: {
          fontFamily: F.hand,
          fontSize: 36,
          lineHeight: 0.95,
          color: B.sage,
          margin: "4px 0 12px",
          fontWeight: 600
        }
      }, S.signoff.name),
      React.createElement("p", { style: { fontSize: 13, color: B.textSoft, margin: "0 0 16px" } },
        "Customer Support \u00B7 Mom of two autistic sons"
      ),
      React.createElement("p", { style: { fontSize: 13, lineHeight: 1.6, color: B.textSoft, fontStyle: "italic", margin: 0 } },
        React.createElement("span", { style: { fontWeight: 700, fontStyle: "normal", color: B.sage, marginRight: 4 } }, "PS, "),
        S.signoff.ps
      )
    )
  );

  /* Footer */
  var footerSection = React.createElement("div", {
    style: { background: BG, padding: "0 22px 30px" }
  },
    React.createElement(Divider),
    React.createElement("div", { style: { padding: "20px 0", textAlign: "center" } },
      React.createElement("p", { style: { fontSize: 14, fontWeight: 700, color: B.text, margin: "0 0 8px" } }, S.footer.company),
      React.createElement("p", { style: { fontSize: 12, color: B.textSoft, margin: "0 0 6px" } }, S.footer.address),
      React.createElement("p", { style: { fontSize: 12, color: B.textSoft, margin: "0 0 12px" } }, S.footer.unsubscribe),
      React.createElement("p", { style: { fontSize: 12, color: B.textSoft, margin: "0 0 14px", lineHeight: 1.5 } }, S.footer.reason),
      React.createElement("p", { style: { fontSize: 12, color: B.sage, margin: 0, fontStyle: "italic" } }, S.footer.guarantee)
    )
  );

  /* Easter Egg — hidden Lena note */
  var easterEgg = React.createElement("div", {
    style: { background: BG, padding: "0 22px 30px", textAlign: "center" }
  },
    React.createElement("p", {
      style: { fontSize: 12, color: B.divider, lineHeight: 1.6, fontStyle: "italic", margin: 0 }
    },
      "You made it to the bottom of a 30-day check-in email. If nothing has changed yet, I see you. My older son was 8 before he trained. At 30 days we had zero. Keep going.,Lena"
    )
  );

  /* Assemble */
  return React.createElement("div", {
    style: { width: MW, background: BG, fontFamily: F.main, color: B.text, margin: "0 auto" }
  },
    React.createElement("div", {
      style: { padding: "6px 20px", fontSize: 11, color: B.textSoft, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" }
    }, "Whether your child is showing signs or still registering the sensation, both are on track for Day 30."),
    React.createElement(Header, { bg: BG }),
    /* Badge */
    React.createElement("div", { style: { padding: "24px 22px 0", textAlign: "center" } },
      React.createElement("div", {
        style: {
          display: "inline-block",
          background: B.amber,
          padding: "7px 14px",
          borderRadius: 999,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 16,
          border: "2px solid " + B.text,
          transform: "rotate(-1.5deg)",
          whiteSpace: "nowrap",
          lineHeight: 1.4
        }
      }, "30 days in. What's normal right now?")
    ),
    /* Hero */
    React.createElement("div", { style: { padding: "0 22px", textAlign: "center" } },
      React.createElement("h1", {
        style: { fontSize: 32, lineHeight: 1.1, fontWeight: 700, margin: "0 0 8px", fontFamily: F.display, color: B.text }
      },
        "One month.",
        React.createElement("br"),
        React.createElement("span", { style: B.gradientText }, "Here's what that means.")
      )
    ),
    hookSection,
    signalIndicator,
    Divider(),
    anchorsSection,
    Divider(),
    validationSection,
    Divider(),
    mechanismSection,
    Divider(),
    lifestylePhoto,
    Divider(),
    testimonialSection,
    Divider(),
    productPhotos,
    Divider(),
    miniWinSection,
    Divider(),
    tipsSection,
    Divider(),
    ctaSection,
    nextTime,
    signoffSection,
    footerSection,
    easterEgg
  );
};

window.Mid13D30 = Mid13D30;
