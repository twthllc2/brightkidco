(() => {
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
      name: "Lena",
      ps: "My younger son was deeply prompt-dependent. It took us 5 months from starting body-signal learning to his first unprompted walk to the bathroom. Not because he wasn't trying, because his brain had to unlearn years of waiting for my voice before it could hear his own body's signal. If you're in this phase, you're exactly where you should be."
    },
    out: "Reply and tell me what you're seeing. I read every response.",
    footer: {
      tagline: "Calm progress, one day at a time.",
      links: ["Our Method", "Shop the Pants", "Parent Stories"],
      address: "BrightKidCo Ltd / Berlin, Germany / hello@brightkidco.com"
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
      { style: { background: props.bg, padding: "24px 20px 0", textAlign: "center" } },
      React.createElement("img", { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="140" height="34"><text x="70" y="24" text-anchor="middle" font-family="Questrial,sans-serif" font-size="18" font-weight="700" fill="#1F2D2F">BrightKidCo</text></svg>'), alt: "BrightKidCo", style: { height: 34 } })
    );
  };
  var Eyebrow = function(props) {
    return React.createElement("div", { style: { fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: props.color || B.tealDeep, fontWeight: 700, marginBottom: 10 } }, props.children);
  };
  var GradientSpan = function(props) {
    return React.createElement("span", {
      style: { background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent", fontWeight: 700 }
    }, props.children);
  };
  var CTAClose = function(props) {
    var bg = props.bg || B.ink;
    return React.createElement(
      "div",
      { style: { background: bg, padding: "20px 22px 44px", textAlign: "center", color: "#FFF" } },
      React.createElement("p", { style: { fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" } }, props.intro),
      React.createElement("a", { href: "#", style: { display: "inline-block", padding: "17px 32px", background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700, textDecoration: "none", borderRadius: 999, letterSpacing: 0.3 } }, props.button),
      props.fine ? React.createElement("div", { style: { marginTop: 16, fontSize: 11.5, color: "#8A9B9D" } }, props.fine) : null
    );
  };
  var Signoff = function(props) {
    var s = window.FLOW1_SHARED.signoff;
    return React.createElement(
      "div",
      { style: { background: props.bg || B.ink, padding: "0 22px 36px" } },
      React.createElement(
        "div",
        { style: { position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40", borderRadius: 22, padding: "26px 24px 24px", overflow: "hidden" } },
        React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.gradient, opacity: 0.9 } }),
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 } },
          React.createElement(
            "div",
            { style: { width: 58, height: 58, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg, #FFD866 0%, " + B.teal + " 100%)", padding: 2.5 } },
            React.createElement(
              "div",
              { style: { width: "100%", height: "100%", borderRadius: "50%", background: "#FFFDF6", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1.5px solid " + B.ink } },
              React.createElement(
                "svg",
                { width: 58, height: 58, viewBox: "0 0 58 58" },
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
          { style: { display: "flex", alignItems: "center", gap: 14, paddingTop: 16, paddingBottom: 16, borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547", marginBottom: 16 } },
          React.createElement(
            "div",
            { style: { flex: 1 } },
            React.createElement("div", { style: { fontSize: 12.5, color: "#B8CACD", marginBottom: 2 } }, s.line1),
            React.createElement("div", { style: { fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2 } }, "Lena")
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
      { style: { background: props.bg || "#FFFFFF", padding: "18px 24px 0", textAlign: "center", fontSize: 12.5, color: B.muted, fontStyle: "italic" } },
      window.FLOW1_SHARED.out
    );
  };
  var Footer = function() {
    var f = window.FLOW1_SHARED.footer;
    return React.createElement(
      "div",
      { style: { background: "#FFFFFF", padding: "30px 24px 30px", textAlign: "center" } },
      React.createElement("div", { style: { fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500, color: B.ink, marginBottom: 30, letterSpacing: -0.2 } }, f.tagline),
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
      React.createElement("div", { style: { padding: "6px 20px", fontSize: 11, color: B.muted, background: "#F6F2EA", textAlign: "center", fontStyle: "italic" } }, props.preheader),
      props.children
    );
  };
  var IMG_CLOUD = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI0zDc5U2xk3MxNzjTvrzdV7OfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIKyNMjTI0zRLhNMaIczrhV8tQ9OVOfTl0PPeuU8/fllfb046O4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUILBCCpg3lAUpBc1RmuiWGbDnvOTrz6QxvnouOmCaxTFsKQx5fZ4j3a49Tvvj2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCpDSZNXNKkKzUWAQ0lIBc1ZNYN5aOd1g0zosUzZRnUq2IJDXPQa56MzWLOlxuXnntyNc95Ly65Mef1Q4erx+k7ejz9jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCoKzSyCyEqCuMXulpAXNi51DO8bEsqyolzqgM6zUubZcakNs0k3gqC5cTtrz9jUuSSC6xomkElJc00tONuCyhWzxa9HE7ejyeo2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI1JDTFTSZNM0uWa1rnssSIK0SODpF6WUAzqCiprNiwFlIsJc0q4FzTUlM3NNMQ0xTXDrzOfo8vc6yaE3TjeuCSUZ68zOvPuT0OOjclOemarnDteWj";
  var IMG_FOX = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI0zDc5U2xk3MxNzjTvrzdV7OfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIKyNMjTI0zRLhNMaIczrhV8tQ9OVOfTl0PPeuU8/fllfb046O4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUILBCCpg3lAUpBc1RmuiWGbDnvOTrz6QxvnouOmCaxTFsKQx5fZ4j3a49Tvvj2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCpDSZNXNKkKzUWAQ0lIBc1ZNYN5aOd1g0zosUzZRnUq2IJDXPQa56MzWLOlxuXnntyNc95Ly65Mef1Q4erx+k7ejz9jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCoKzSyCyEqCuMXulpAXNi51DO8bEsqyolzqgM6zUubZcakNs0k3gqC5cTtrz9jUuSSC6xomkElJc00tONuCyhWzxa9HE7ejyeo2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrI1JDTFTSZNM0uWa1rnssSIK0SODpF6WUAzqCiprNiwFlIsJc0q4FzTUlM3NNMQ0xTXDrzOfo8vc6yaE3TjeuCSUZ68zOvPuT0OOjclOemarnDteWj";
  var IMG_PENGUIN = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGQABAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAL3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUQWQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKloy1AQQskEzSR5fpoSacuev0l/B9vXPS1IudESoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAmAIgtFanlc3s/LTX0/V53ZZvWtkTWCSpMoI+a+n8+Xxe7zrx9TPk+rqWvnZLBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBKtctIx5s3tjze7N1vzybVT1zW2Vq0pYUmJHlermTfLYytFTXn247m/V4ftbxa+dufW2esHy3D7fn53l7XH0r688Pdrnec9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQSiQgTEgCmHVlz1nzabcemO0TrMRaks7cyuvLR6OVb5XLUvBFZkzvUXy1gzmLJ4PfTzu3n+mrTXj6JtnZfO8b3/Czv376U1jg67+Qvt6ZymgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPhl7643rac9ETFDTDXzNc/ScnZLW2Sb2VlJgXze3G3m79VZenzqpMOfv5ePbTfj2TSJr256UtQsrYUmpa2Vic9MifnPpObWOT2OLqLFc7w5ujzpr3Ix2uXie35x2a+d6RpNLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEgETAmAlEFoiAVNKyObg6OHrw39XyO9OjPavL0Z6VJorJTK8cems0t25znMF4rJgtXz9raVtrN7Ut2wlBGe1THRJbOfNufSnx9t8/TedpL2xybZ1XwPp+TPXxvV5eXOvo68Ho6x51fR4F9KfH9ZNFbWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqWYxZu5K3PXjwN89q8/HrH0056cPVVFVtMSTCBCCUCYkTNbHB5vveN0466a21nrg4+iUSkJzXOIr5O/Rpy9fo5UjVvHPfSDNpWWmt";
  var IMG_BUNNY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAUABQADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAC++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlDNis0qCoqoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkjTBdsDbFTTFqsjTFis0msaEZWspdM6rQZAkxTdzDVxTSEslUloxTSIa5U6SYOrA256KzlemvOX0a85n0M6oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQqSNMjTMNsDUgqAKXNMXNzuWUmsaGsaS2W5lillTOoWagSow1GlDQuQM2wZaLjVIo49MdCLCZ3CshneSs6JrNJULjXKXpytmmKOvThu49Ln0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQqQ0xDpMSOk55XbzdZrV8w6zxfSs8Pbl1Tvvj1Rc6oUhQlAIFxZc6lgms0azRrlm57s6sAELFCCyoAsKoIo59OdLedNpyOqZNpQlMzeBcomma0QsUkSIslyvnmvRrC57d/N1s6igAAAAAAAAAAAAAAAAAAAAAAAAAAABCzKKkrUgsZNZuDeNYN51zLm4zubiXHPp4rPfrw97nh7A83p83c9G/k/TS6xupZRc0WBLmWCaJSIKQluk0S5sqpNUxdNNUzoIozaJbAsJNZW89onPqOV2OXfO056tqZ1Dm3Ik0MVTKhnrDk2OOt5XzdryO+/P3T1JaAAAAAAAAAAAAAAAAAAAAAAAAAAAActc5dosqCoElGaGdZN8Ovkl9PLrxm+vPpxNYZZz7Ysy5+izN1yMXr4411ujrZqhQBnWJS5lqUjOlXOiaxtLNYudxaiUst";
  var emailData = {
    preheader: "The difference between 'he goes' and 'he initiates' is a signal his brain hasn't learned to hear yet.",
    /* Hook */
    hookP1: "He goes when you prompt. After five weeks in BrightKidCo underwear, he might even be registering more accidents, pausing, looking down, sometimes making it to the bathroom when you're right there.",
    hookP2: "But he still doesn't come find you.",
    hookP3: "He still waits for your cue. The same scheduled sit, the same verbal reminder, the same timer. You're still the one carrying the mental load of his bathroom schedule. And after 5+ weeks of wearing the Body-Signal Learning Layer, part of you is wondering:",
    hookP4: "when does this become automatic?",
    hookP5: "I want to be direct with you about what's happening, and what needs to happen next.",
    /* Validation */
    valHeadline: "This is the hardest transition in body-signal learning for L2 kids",
    valP1: `Your BCBA's work on compliance and routines was essential. When you started scheduled sits, you built a foundation. Your child learned that when the timer goes off, or when you say "try to go", they go. That's nothing. That's years of structure that many families never achieve.`,
    valP2: "But here's the piece that no one explained:",
    valP3: "compliance is not internal awareness.",
    valP4: "Your child learned to respond to your cue. They did not learn to respond to their own body's signal. The prompt became the trigger, not the feeling of bladder fullness.",
    valP5: "This is not a failure of your BCBA's protocol. It wasn't designed to build interoception. It was designed to build routine. And it did. But now we need the next layer.",
    /* Mechanism */
    mechHeadline: "Why prompts overwrite internal signals",
    mechP1: "When a child always receives an external prompt, the brain learns to prioritize that external cue. The internal signal, bladder fullness, is vague and inconsistent. The brain takes the reliable path.",
    mechP2: "Autistic children show significantly diminished body awareness. When you add years of external prompting on top of that, the brain has no reason to tune into the internal signal. The BSL Layer has been creating a gentle sensation when your child wets, giving the brain a reliable external-to-internal bridge. Now comes the harder part: fading the adult prompts so the internal signal has room to emerge.",
    /* Protocol */
    protoHeadline: "Prompt fading protocol",
    protoIntro: "This is not about stopping prompts cold. That would confuse and frustrate both of you. It's a gradual transfer of responsibility from external cue to internal awareness.",
    week56Title: "Weeks 5-6: Delay, Don't Remove",
    week56Body: `Instead of prompting immediately at scheduled times, wait 30-60 seconds. Watch for ANY signal, a shift in posture, a hand to the waistband, a pause in play. If you see it, say "I noticed you shifted. Does your body feel like something's happening?" If you don't see it, prompt normally.`,
    week67Title: "Weeks 6-7: Expand the Window",
    week67Body: "Increase the delay to 2-3 minutes. Move slightly farther away when you prompt, from standing next to them to across the room. The physical distance subtly shifts responsibility toward their body awareness.",
    week78Title: "Weeks 7-8: Reduce Prompt Frequency",
    week78Body: `Cut one scheduled prompt per day. Replace it with a question: "How's your body feeling right now?" If they answer with an unrelated body sensation (hungry, tired, excited), validate it. ANY body awareness is progress. You're building the body signal muscle, not just bathroom behavior.`,
    week810Title: "Weeks 8-10: Observe the Shift",
    week810Body: `By this point, some L2 kids begin showing first independent signals, walking toward the bathroom unprompted, pausing mid-play with a look of recognition, saying "I think I have to go" (even if it's sometimes too late).`,
    week810Closing: "These are not failures. These are breakthroughs that happen to arrive late.",
    stallNote: "If progress stalls: Stay at the current prompt level for another week. Regression isn't starting over. It's sensory fluctuation. Hold steady.",
    /* Product Frame */
    productHeadline: "How the underwear fits this phase",
    productP1: "Your child is still wearing the Body-Signal Learning Layer every day. That's good, it's still creating the feedback loop their brain needs.",
    productP2: "At this phase, the underwear does two critical things that prompts alone cannot:",
    productBullet1: `Provides the "missed signal" education. When your child has an accident because the prompt was delayed or absent, the BKC layer creates that 30-60 second gentle sensation. The brain registers: something happened while I wasn't paying attention to my body. That's data the brain uses to tune in next time.`,
    productBullet2: `Absorbs the consequence without the shame. Because the layer protects clothing and furniture, you can stay calm. No frustration, no "I told you to try." Just: "It's okay. Your body is still learning the signal."`,
    /* Timeline */
    timelineHeadline: "The truth about prompt fading",
    timelineP1: "For L2 kids who have been prompted for 1-3+ years, the transition to independent initiation typically takes:",
    timeWeek48: "4-8 weeks before you see the first unprompted signal (a pause, a look, a step toward the bathroom)",
    timeWeek812: "8-12 weeks before partial independence (initiates some of the time, still needs prompts during distraction or dysregulation)",
    timeWeek1216: "12-16+ weeks before consistent initiation",
    timelineClosing: "These are real numbers from families who have been through this. Not marketing. Not optimism. Observation.",
    timelineDependent: "Your child's timeline depends on how deeply the prompt-dependency pattern is wired. A child who has been prompted 6+ times a day for 3 years needs more unwiring than a child who has had 1 year of moderate prompting.",
    timelineNormal: "Both timelines are normal.",
    /* Guarantee */
    guaranteeP1: "You've been in this for five weeks. That means you're still inside the 60-day window where you can decide if this approach fits your child.",
    guaranteeP2: `If you've been waiting for "it to click", this is the phase where clicking happens for most L2 kids. The first 4 weeks were signal establishment. Weeks 5-8 are about signal-to-action translation.`,
    guaranteeP3: "If by Day 60 your child hasn't shown any emerging awareness, no pauses, no changes in accident frequency, no recognition during wear, email me directly. We'll talk through what you're seeing. And if the approach genuinely isn't working for your child, I'll process your refund personally.",
    guaranteeP4: "60 days. Your judgment. That's the deal.",
    /* Permission */
    permissionP1: "If reading this feels overwhelming, like one more protocol to manage on top of everything else, I hear you.",
    permissionP2: "You don't have to implement every week of this schedule. You don't have to be perfect at prompt fading. If all you do this week is wait 30 seconds before your next prompt, that's progress.",
    permissionP3: "Some L2 families find that reducing prompts naturally creates more accidents in the short term. If that's more than you can handle right now, if you're exhausted, if your child is dysregulated, if you need a break, take it. The underwear doesn't stop working. The body-signal learning continues whether you actively prompt or not. The layer provides feedback every time your child wets, regardless of what else is happening.",
    permissionClosing: "This isn't another thing to add to your list. It's permission to let your child's body start doing some of the work.",
    permissionReady: "When you're ready to try the prompt-fading protocol, it will be here. So will I.",
    /* P.P.S. */
    pps: "If you've already seen your child pause or look down after an accident, that's the first step. The prompt fading builds on that. You're closer than you think.",
    /* CTA */
    ctaIntro: "Reply to this email. Tell me what you're seeing.",
    ctaButton: "Start with the 30-second delay"
  };
  var PPExtEdE3L2 = function() {
    var c = emailData;
    var BG_HERO = "#FBF7F1";
    var BG_HOOK = "#FBF7F1";
    var BG_VALIDATION = "#F2E6DF";
    var BG_MECHANISM = "#EAF6F2";
    var BG_PROTOCOL = "#F0EDF8";
    var BG_PRODUCT = "#FFF6E2";
    var BG_TIMELINE = "#FBF7F1";
    var BG_GUARANTEE = "#EAF6F2";
    var BG_PERMISSION = "#F7F3EE";
    var BG_PHOTOS = "#FFFFFF";
    var BG_CTA = B.ink;
    return React.createElement(
      EmailShell,
      { preheader: c.preheader, bg: BG_HERO },
      /* ======= HEADER ======= */
      React.createElement(Header, { bg: BG_HERO }),
      /* ======= HERO: Mechanism Tease (HERO-16) ======= */
      React.createElement(
        "div",
        { style: { background: BG_HERO, padding: "32px 24px 16px", textAlign: "center" } },
        React.createElement(
          "div",
          { style: { textAlign: "center", marginBottom: 16 } },
          React.createElement("span", { style: { display: "inline-block", background: "#D8F57C", color: B.ink, padding: "6px 16px", borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 } }, "The gap between prompted and independent")
        ),
        React.createElement(
          "h1",
          { style: { fontFamily: F.display, fontSize: 26, lineHeight: 1.3, color: B.ink, margin: "0 0 16px" } },
          "He goes when you tell him. ",
          React.createElement(GradientSpan, null, "But not on his own.")
        )
      ),
      /* ======= HOOK: Real Symptom Recognition ======= */
      React.createElement(Band, { from: BG_HERO, to: BG_HOOK, height: 8 }),
      React.createElement(
        "div",
        { style: { background: BG_HOOK, padding: "4px 24px 28px", fontSize: 15, lineHeight: 1.7, color: B.soft } },
        React.createElement("p", { style: { margin: "0 0 14px" } }, c.hookP1),
        React.createElement("p", { style: { margin: "0 0 14px", fontWeight: 600, color: B.ink, fontSize: 17 } }, c.hookP2),
        React.createElement("p", { style: { margin: "0 0 4px" } }, c.hookP3),
        React.createElement("p", { style: { margin: "0 0 14px", fontWeight: 700, color: B.tealDeep, fontStyle: "italic" } }, c.hookP4),
        React.createElement("p", { style: { margin: 0, fontStyle: "italic" } }, c.hookP5)
      ),
      React.createElement(Band, { from: BG_HOOK, to: BG_VALIDATION, height: 36 }),
      /* ======= VALIDATION: BCBA Acknowledgment (STORY-09: The Reframe) ======= */
      React.createElement(
        "div",
        { style: { background: BG_VALIDATION, padding: "28px 22px 20px" } },
        React.createElement(Eyebrow, { color: "#8B5E5E" }, "The reframe"),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 600, color: B.ink, margin: "0 0 16px", textAlign: "center", lineHeight: 1.3 } }, c.valHeadline),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 12px" } }, c.valP1),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 4px" } }, c.valP2),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 22, fontWeight: 700, color: B.ink, margin: "0 0 12px", textAlign: "center" } }, c.valP3),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 12px" } }, c.valP4),
        /* Highlight box */
        React.createElement(
          "div",
          { style: { background: B.teal, borderRadius: 8, padding: 18, textAlign: "center", marginBottom: 12 } },
          React.createElement("p", { style: { fontFamily: F.display, fontSize: 16, color: "#FBF7F1", margin: 0, lineHeight: 1.5 } }, "Compliance is not internal awareness.")
        ),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0 } }, c.valP5)
      ),
      React.createElement(Band, { from: BG_VALIDATION, to: BG_MECHANISM, height: 36 }),
      /* ======= MECHANISM: Why Prompts Overwrite (EDU-8: Mechanism) ======= */
      React.createElement(
        "div",
        { style: { background: BG_MECHANISM, padding: "28px 22px 20px" } },
        React.createElement(Eyebrow, { color: "#7A5FA8" }, "The mechanism"),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: "0 0 12px" } }, c.mechHeadline),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 12px" } }, c.mechP1),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: 0 } }, c.mechP2)
      ),
      React.createElement(Band, { from: BG_MECHANISM, to: BG_PROTOCOL, height: 36 }),
      /* ======= PROTOCOL: Week-by-Week (EDU-2: Step Cards) ======= */
      React.createElement(
        "div",
        { style: { background: BG_PROTOCOL, padding: "28px 22px 20px" } },
        React.createElement(Eyebrow, null, "The protocol"),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 22, fontWeight: 700, color: B.ink, margin: "0 0 4px" } }, c.protoHeadline),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 20px", fontStyle: "italic" } }, c.protoIntro),
        /* Week 5-6 */
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "stretch", marginBottom: 12 } },
          React.createElement("div", { style: { width: 6, background: B.teal, flexShrink: 0 } }),
          React.createElement(
            "div",
            { style: { padding: 16, flex: 1, background: "#FFFFFF", borderRadius: "0 12px 12px 0" } },
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 } },
              React.createElement("div", { style: { width: 36, height: 36, background: B.teal, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#FFF" } }, "1"),
              React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: B.ink } }, c.week56Title)
            ),
            React.createElement("div", { style: { fontSize: 13, color: B.soft, lineHeight: 1.6, paddingLeft: 46 } }, c.week56Body)
          )
        ),
        /* Week 6-7 */
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "stretch", marginBottom: 12 } },
          React.createElement("div", { style: { width: 6, background: B.green, flexShrink: 0 } }),
          React.createElement(
            "div",
            { style: { padding: 16, flex: 1, background: "#FFFFFF", borderRadius: "0 12px 12px 0" } },
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 } },
              React.createElement("div", { style: { width: 36, height: 36, background: B.green, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: B.ink } }, "2"),
              React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: B.ink } }, c.week67Title)
            ),
            React.createElement("div", { style: { fontSize: 13, color: B.soft, lineHeight: 1.6, paddingLeft: 46 } }, c.week67Body)
          )
        ),
        /* Week 7-8 */
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "stretch", marginBottom: 12 } },
          React.createElement("div", { style: { width: 6, background: "#FFD866", flexShrink: 0 } }),
          React.createElement(
            "div",
            { style: { padding: 16, flex: 1, background: "#FFFFFF", borderRadius: "0 12px 12px 0" } },
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 } },
              React.createElement("div", { style: { width: 36, height: 36, background: "#FFD866", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: B.ink } }, "3"),
              React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: B.ink } }, c.week78Title)
            ),
            React.createElement("div", { style: { fontSize: 13, color: B.soft, lineHeight: 1.6, paddingLeft: 46 } }, c.week78Body)
          )
        ),
        /* Week 8-10 */
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "stretch", marginBottom: 12 } },
          React.createElement("div", { style: { width: 6, background: "#D8F57C", flexShrink: 0 } }),
          React.createElement(
            "div",
            { style: { padding: 16, flex: 1, background: "#FFFFFF", borderRadius: "0 12px 12px 0" } },
            React.createElement(
              "div",
              { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 } },
              React.createElement("div", { style: { width: 36, height: 36, background: "#D8F57C", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: B.ink } }, "4"),
              React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: B.ink } }, c.week810Title)
            ),
            React.createElement("div", { style: { fontSize: 13, color: B.soft, lineHeight: 1.6, paddingLeft: 46 } }, c.week810Body)
          )
        ),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.tealDeep, margin: "12px 0 0", fontWeight: 600, textAlign: "center" } }, c.week810Closing),
        /* Stall note */
        React.createElement(
          "div",
          { style: { background: "#FFFFFF", borderRadius: 10, padding: 14, marginTop: 16, borderLeft: "3px solid " + B.muted } },
          React.createElement("p", { style: { fontSize: 13, color: B.soft, lineHeight: 1.6, margin: 0 } }, c.stallNote)
        )
      ),
      React.createElement(Band, { from: BG_PROTOCOL, to: BG_PRODUCT, height: 36 }),
      /* ======= PRODUCT FRAME: How the Underwear Fits This Phase ======= */
      React.createElement(
        "div",
        { style: { background: BG_PRODUCT, padding: "28px 22px 20px" } },
        React.createElement(Eyebrow, null, "Your underwear is still working"),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: "0 0 12px" } }, c.productHeadline),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 12px" } }, c.productP1),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 12px", fontWeight: 600 } }, c.productP2),
        /* Bullet 1 */
        React.createElement(
          "div",
          { style: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 } },
          React.createElement("div", { style: { background: B.teal, color: "#FBF7F1", width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 2 } }, "1"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.productBullet1)
        ),
        /* Bullet 2 */
        React.createElement(
          "div",
          { style: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 0 } },
          React.createElement("div", { style: { background: B.green, color: B.ink, width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 2 } }, "2"),
          React.createElement("p", { style: { fontSize: 13, lineHeight: 1.6, color: B.soft, margin: 0 } }, c.productBullet2)
        )
      ),
      React.createElement(Band, { from: BG_PRODUCT, to: BG_TIMELINE, height: 36 }),
      /* ======= TIMELINE: Realistic Timelines (EMO-5: Realistic Timeline) ======= */
      React.createElement(
        "div",
        { style: { background: BG_TIMELINE, padding: "28px 22px 20px" } },
        React.createElement(Eyebrow, null, "What to actually expect"),
        React.createElement("p", { style: { fontFamily: F.display, fontSize: 20, fontWeight: 700, color: B.ink, margin: "0 0 12px" } }, c.timelineHeadline),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 16px" } }, c.timelineP1),
        /* Timeline entries */
        React.createElement(
          "div",
          { style: { borderLeft: "3px solid " + B.teal, paddingLeft: 14, marginBottom: 10 } },
          React.createElement(
            "p",
            { style: { fontSize: 13, color: B.soft, margin: "0 0 10px", lineHeight: 1.6 } },
            React.createElement("span", { style: { color: B.teal, fontWeight: 700 } }, "4-8 weeks: "),
            c.timeWeek48
          ),
          React.createElement(
            "p",
            { style: { fontSize: 13, color: B.soft, margin: "0 0 10px", lineHeight: 1.6 } },
            React.createElement("span", { style: { color: B.green, fontWeight: 700 } }, "8-12 weeks: "),
            c.timeWeek812
          ),
          React.createElement(
            "p",
            { style: { fontSize: 13, color: B.soft, margin: 0, lineHeight: 1.6 } },
            React.createElement("span", { style: { color: "#FFD866", fontWeight: 700 } }, "12-16+ weeks: "),
            c.timeWeek1216
          )
        ),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "12px 0 8px", fontWeight: 600 } }, c.timelineClosing),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 8px" } }, c.timelineDependent),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.tealDeep, margin: 0, fontWeight: 700, textAlign: "center" } }, c.timelineNormal)
      ),
      React.createElement(Band, { from: BG_TIMELINE, to: BG_GUARANTEE, height: 36 }),
      /* ======= GUARANTEE: 60-Day Guarantee ======= */
      React.createElement(
        "div",
        { style: { background: BG_GUARANTEE, padding: "28px 22px 20px", textAlign: "center" } },
        React.createElement(Eyebrow, null, "Our promise"),
        React.createElement("p", { style: { fontSize: 15, lineHeight: 1.7, color: B.soft, margin: "0 0 16px" } }, c.guaranteeP1),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 12px" } }, c.guaranteeP2),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "0 0 12px" } }, c.guaranteeP3),
        /* 60-Day Seal */
        React.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column", alignItems: "center", width: 160, height: 160, background: "#FFFFFF", borderRadius: "50%", border: "3px solid " + B.ink, boxShadow: "6px 6px 0 " + B.ink, justifyContent: "center", margin: "12px 0" } },
          React.createElement("div", { style: { fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700, marginBottom: 4 } }, "Protected by"),
          React.createElement("div", { style: { fontSize: 48, fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" } }, "60"),
          React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: B.ink, marginTop: 2 } }, "Calm Days"),
          React.createElement("div", { style: { fontSize: 10, color: B.soft, marginTop: 4 } }, "Full refund / No questions")
        ),
        React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.ink, margin: "12px 0 0", fontWeight: 700 } }, c.guaranteeP4)
      ),
      React.createElement(Band, { from: BG_GUARANTEE, to: BG_PERMISSION, height: 36 }),
      /* ======= PERMISSION: Permission to Pause (EMO-11: Break Permission) ======= */
      React.createElement(
        "div",
        { style: { background: BG_PERMISSION, padding: "28px 22px 20px", textAlign: "center" } },
        React.createElement(
          "div",
          { style: { background: "#FFFFFF", borderRadius: 14, padding: "24px 20px" } },
          React.createElement("p", { style: { fontFamily: "'Caveat', cursive", fontSize: 22, color: "#FFD866", marginBottom: 10 } }, "take the break if you need it."),
          React.createElement("p", { style: { fontFamily: F.display, fontSize: 15, fontWeight: 500, color: B.ink, marginBottom: 12, lineHeight: 1.5 } }, c.permissionP1),
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 12px", textAlign: "left" } }, c.permissionP2),
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: "0 0 12px", textAlign: "left" } }, c.permissionP3),
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.tealDeep, margin: "0 0 4px", fontWeight: 600 } }, c.permissionClosing),
          React.createElement("p", { style: { fontSize: 14, lineHeight: 1.7, color: B.soft, margin: 0, textAlign: "left" } }, c.permissionReady)
        )
      ),
      React.createElement(Band, { from: BG_PERMISSION, to: BG_PHOTOS, height: 28 }),
      /* ======= PRODUCT PHOTOS (mandatory) ======= */
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
      React.createElement(
        "div",
        { style: { background: BG_PHOTOS, padding: "0 14px 16px", display: "flex", gap: 8 } },
        [
          { src: IMG_BUNNY, label: "Bunny Hearts" }
        ].map(function(img, i) {
          return React.createElement(
            "div",
            { key: i, style: { flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid " + B.ink, boxShadow: "3px 3px 0 " + B.ink } },
            React.createElement("img", { src: img.src, alt: img.label, style: { width: "100%", display: "block", height: 120, objectFit: "cover" } }),
            React.createElement("div", { style: { padding: "6px 8px", fontSize: 10, fontWeight: 700, color: B.ink, textAlign: "center", borderTop: "2px solid " + B.ink, background: "#FFFDF6" } }, img.label)
          );
        })
      ),
      /* ======= CTA ======= */
      React.createElement(Band, { from: BG_PHOTOS, to: BG_CTA, height: 50 }),
      React.createElement(CTAClose, { intro: c.ctaIntro, button: c.ctaButton, fine: "Reply to this email. I read every response." }),
      /* ======= SIGNOFF (with P.P.S.) ======= */
      React.createElement(Signoff, null),
      /* P.P.S. */
      React.createElement(
        "div",
        { style: { background: B.ink, padding: "0 22px 28px" } },
        React.createElement(
          "div",
          { style: { fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" } },
          React.createElement("span", { style: { color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 } }, "P.P.S."),
          c.pps
        )
      ),
      React.createElement(OutLine, null),
      React.createElement(Footer, null)
    );
  };
  window.PPExtEdE3L2 = PPExtEdE3L2;
})();
