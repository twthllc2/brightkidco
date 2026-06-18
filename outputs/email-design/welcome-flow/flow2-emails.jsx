/* Flow 2 · Discount Welcome — 4 emails
   Reuses all Flow 1 primitives. Adds: CodeBlock, ReminderBar.
   All emails share: Header · Footer · Signoff · OutLine · gradient Bands
*/

/* ═════════════════════════════════════════════════════
   NEW PRIMITIVE · CodeBlock
   Big, visible, copy-able code — hero moment of E1, refs in E2-4
   ═════════════════════════════════════════════════════ */
const CodeBlock = ({ code = "BRIGHT10", label = "Your welcome code", note, bg = "#FFFFFF", compact = false }) => (
  <div style={{
    background: bg,
    border: `2px solid ${B.ink}`,
    borderRadius: 22,
    boxShadow: `4px 4px 0 ${B.ink}`,
    padding: compact ? "18px 20px" : "28px 24px 24px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}>
    {/* tiny decorative gradient bar */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: B.gradient }} />

    <div style={{
      fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
      color: B.tealDeep, fontWeight: 700, marginBottom: compact ? 6 : 10,
      marginTop: compact ? 4 : 6,
    }}>
      {label}
    </div>

    {/* Code display — dashed border, mono-style */}
    <div style={{
      display: "inline-block",
      padding: compact ? "10px 22px" : "18px 36px",
      background: "#FAF7F0",
      border: `2.5px dashed ${B.ink}`,
      borderRadius: 14,
      fontFamily: "'Courier New', ui-monospace, Menlo, monospace",
      fontSize: compact ? 22 : 34,
      fontWeight: 700,
      color: B.ink,
      letterSpacing: compact ? 2 : 4,
      margin: compact ? "0 0 6px" : "0 0 14px",
    }}>
      {code}
    </div>

    {note && (
      <div style={{ fontSize: compact ? 11.5 : 13, color: B.soft, fontStyle: "italic", marginTop: 2 }}>
        {note}
      </div>
    )}

    {/* tap-to-copy hint */}
    {!compact && (
      <div style={{ marginTop: 10, fontSize: 11, color: B.muted, letterSpacing: 0.3 }}>
        Tap to copy · Auto-applied at checkout
      </div>
    )}
  </div>
);

/* ═════════════════════════════════════════════════════
   NEW PRIMITIVE · ReminderBar
   Small "code still valid · X days left" strip
   ═════════════════════════════════════════════════════ */
const ReminderBar = ({ label, body, bg = "#FFF6E2" }) => (
  <div style={{
    background: bg,
    padding: "14px 22px",
    display: "flex", alignItems: "center", gap: 12,
    borderTop: `1.5px solid ${B.ink}`, borderBottom: `1.5px solid ${B.ink}`,
  }}>
    <div style={{
      width: 32, height: 32, flexShrink: 0,
      background: "#FFFFFF", border: `1.5px solid ${B.ink}`,
      borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14,
    }}>⏱</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 10, letterSpacing: 1.3, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: B.ink, fontFamily: "'Courier New', monospace", letterSpacing: 1.5 }}>
        {body}
      </div>
    </div>
  </div>
);

/* ═════════════════════════════════════════════════════
   Email 1 · Code Delivery · Immediate
   ═════════════════════════════════════════════════════ */
const F2Email1 = () => {
  const c = window.FLOW2.e1;
  const BG_HERO = "#FFFBF0";
  const BG_CODE = "#FAF7F0";
  const BG_PRODUCT = "#F5F1EA";
  const BG_DIFF = "#FFF6E2";
  const BG_NEXT = "#EAF6F2";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Title */}
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_CODE} />

      {/* Greeting letter */}
      <Letter bg={BG_CODE} first={c.greeting} paras={c.letterOpening} />

      {/* Code block */}
      <div style={{ background: BG_CODE, padding: "8px 18px 24px" }}>
        <CodeBlock
          code={c.code}
          label={c.codeLabel}
          note={c.codeNote}
        />
      </div>

      <Band from={BG_CODE} to={BG_PRODUCT} />

      {/* Full product showcase — directly below code, decision-mode */}
      <div style={{ background: BG_PRODUCT }}>
        <ProductShowcaseFull
          eyebrow="The pants, with your code"
          title="Body-Signal"
          titleAccent="Learning Layer™"
          sub="Training underwear built around how sensory-sensitive children actually learn — not absorb."
          priceFrom="€30.60"
          priceNote="€34 minus BRIGHT10 · Starter pair"
          ctaButton="Shop with BRIGHT10"
          features={[
            { icon: "✓", label: "Code pre-applied" },
            { icon: "◉", label: "Body-Signal Layer™" },
            { icon: "♡", label: "60-day guarantee" },
          ]}
        />
      </div>

      <Band from={BG_PRODUCT} to={BG_DIFF} />

      {/* Short differentiation */}
      <div style={{ background: BG_DIFF, padding: "24px 22px 22px" }}>
        <Eyebrow>{c.differentiationLabel}</Eyebrow>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: B.ink, margin: 0, fontWeight: 500 }}>
          {c.differentiationBody}
        </p>
      </div>

      {/* Trustpilot inline */}
      <div style={{ background: BG_DIFF, padding: "0 22px 24px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "12px 14px", background: "#FFFFFF",
          border: `1.5px solid ${B.ink}`, borderRadius: 12,
        }}>
          <div style={{ display: "flex", gap: 2, color: "#00B67A", fontSize: 16 }}>
            ★★★★★
          </div>
          <div style={{ flex: 1, fontSize: 12.5, color: B.ink, fontWeight: 600 }}>
            {c.trustpilotRating}
          </div>
          <div style={{ fontSize: 10.5, color: B.muted, letterSpacing: 0.5 }}>
            {c.trustpilotLabel}
          </div>
        </div>
      </div>

      <Band from={BG_DIFF} to={BG_NEXT} />

      {/* What's next */}
      <div style={{ background: BG_NEXT, padding: "26px 22px 10px" }}>
        <Eyebrow>{c.whatsNext.label}</Eyebrow>
        <div style={{ marginTop: 12 }}>
          {c.whatsNext.items.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              padding: "14px 14px", background: "#FFFFFF",
              border: `1.5px solid ${B.ink}`, borderRadius: 14,
              marginBottom: 10,
            }}>
              <div style={{
                padding: "4px 9px", background: B.teal,
                color: "#FFFFFF", borderRadius: 999,
                fontSize: 10, fontWeight: 700, letterSpacing: 0.8,
                textTransform: "uppercase", flexShrink: 0,
                marginTop: 2,
              }}>
                {item.when}
              </div>
              <div style={{ flex: 1, fontSize: 13.5, lineHeight: 1.5, color: B.ink }}>
                {item.what}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: BG_NEXT, padding: "6px 22px 22px" }}>
        <p style={{ margin: 0, textAlign: "center", fontSize: 13, color: B.soft, fontStyle: "italic" }}>
          {c.whatsNext.footer}
        </p>
      </div>

      <Band from={BG_NEXT} to={BG_CTA} height={50} />

      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

/* ═════════════════════════════════════════════════════
   Email 2 · Mechanism · +36h
   ═════════════════════════════════════════════════════ */
const F2Email2 = () => {
  const c = window.FLOW2.e2;
  const BG_HERO = "#FFFBF0";
  const BG_LETTER = "#FAF7F0";
  const BG_DEF = "#FFF6E2";
  const BG_COMP = "#EAF6F2";
  const BG_EXPERT = "#F0EDF8";
  const BG_PRODUCT = "#FFFBF0";
  const BG_CTA = B.ink;

  const accents = { red: "#D97757", amber: "#E8A23D", green: B.green };

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} first="Hi again — Lena." paras={c.letterOpening.slice(1)} />

      <Band from={BG_LETTER} to={BG_DEF} />

      {/* Definition */}
      <div style={{ background: BG_DEF, padding: "30px 22px 26px" }}>
        <Eyebrow>{c.mechanismLabel}</Eyebrow>
        <H2 size={32} center>
          {c.mechanismTitle.split(".")[0]}
          <span style={{ ...B.gradientText, fontWeight: 700 }}>.</span>
        </H2>
        <div style={{
          marginTop: 14, padding: "16px 18px",
          background: "#FFFFFF", border: `2px solid ${B.ink}`,
          borderRadius: 14, fontSize: 13.5, lineHeight: 1.6, color: B.ink,
          boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          <span style={{ color: B.tealDeep, fontWeight: 700 }}>Interoception: </span>
          {c.mechanismDef.replace(/^Interoception [^:]*: /, "")}
        </div>
        <div style={{ marginTop: 18 }}>
          {c.mechanismBody.map((p, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.65, color: B.ink, margin: i === c.mechanismBody.length - 1 ? 0 : "0 0 12px" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <Band from={BG_DEF} to={BG_COMP} />

      {/* 3-card comparison */}
      <div style={{ background: BG_COMP, padding: "24px 14px 8px" }}>
        {c.comparison.map((item, i) => (
          <div key={i} style={{
            marginBottom: 12, background: "#FFFFFF",
            border: `2px solid ${B.ink}`, borderRadius: 16,
            padding: "16px 18px", display: "flex", alignItems: "center", gap: 14,
            boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: accents[item.color], color: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700, flexShrink: 0,
              border: `2px solid ${B.ink}`,
            }}>
              {item.good ? "✓" : "✕"}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: B.ink, marginBottom: 2 }}>
                {item.label}
              </div>
              <div style={{ fontSize: 13, color: B.soft, lineHeight: 1.4 }}>
                {item.bad || item.good}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Band from={BG_COMP} to={BG_EXPERT} />

      {/* OT Quote */}
      <div style={{ background: BG_EXPERT, padding: "28px 22px 26px" }}>
        <Eyebrow>Clinical perspective</Eyebrow>
        <div style={{
          marginTop: 12, padding: "20px 22px",
          background: "#FFFFFF", border: `2px solid ${B.ink}`,
          borderRadius: 16, boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          <div style={{ fontSize: 32, lineHeight: 1, color: B.teal, fontFamily: F.display, marginBottom: 4 }}>"</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: B.ink, margin: "0 0 14px", fontStyle: "italic" }}>
            {c.otQuote.body}
          </p>
          <div style={{ fontSize: 12, color: B.muted, fontWeight: 700, letterSpacing: 0.3 }}>
            — {c.otQuote.by}
          </div>
        </div>
      </div>

      <Band from={BG_EXPERT} to={BG_PRODUCT} />

      {/* Product placement · mid-tier */}
      <div style={{ background: BG_PRODUCT }}>
        <ProductShowcaseMedium
          eyebrow="Built around the signal"
          title="Body-Signal Learning Layer™"
          priceFrom="€30.60"
          ctaButton="See the pants"
        />
      </div>

      {/* Code reminder bar */}
      <ReminderBar label={c.codeReminderLabel} body={c.codeReminderBody} />

      <Band from={BG_PRODUCT} to={BG_CTA} height={50} />

      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

/* ═════════════════════════════════════════════════════
   Email 3 · Parent Story · +3 days
   ═════════════════════════════════════════════════════ */
const F2Email3 = () => {
  const c = window.FLOW2.e3;
  const BG_HERO = "#FAF7F0";
  const BG_INTRO = "#FFFBF0";
  const BG_CH = "#FFF6E2";
  const BG_PULL = "#EAF6F2";
  const BG_BADGES = "#FFFBF0";
  const BG_PRODUCT = "#F5F1EA";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />

      {/* Full-width hero of Sarah + child */}
      <div style={{ margin: "24px 14px 0" }}>
        <FramedImage
          height={260}
          label="HERO · PARENT + CHILD"
          sublabel="Real Sarah + Marcus · documentary, unposed · warm natural light · ratio ~4:3"
          shadow={6}
        />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} subhead={c.subhead} />

      <Band from={BG_HERO} to={BG_INTRO} />
      <Letter bg={BG_INTRO} first="Lena here again." paras={c.intro} />

      <Band from={BG_INTRO} to={BG_CH} />

      {/* Chapters */}
      <div style={{ background: BG_CH, padding: "24px 14px 8px" }}>
        {c.chapters.map((ch, i) => (
          <div key={i} style={{
            marginBottom: 14, background: "#FFFFFF",
            border: `2px solid ${B.ink}`, borderRadius: 18,
            overflow: "hidden", boxShadow: `3px 3px 0 ${B.ink}`,
          }}>
            <div style={{
              background: i === c.chapters.length - 1 ? `${B.green}25` : `${B.teal}15`,
              padding: "10px 16px",
              borderBottom: `2px solid ${B.ink}`,
              fontSize: 10.5, letterSpacing: 1.4, textTransform: "uppercase",
              color: B.ink, fontWeight: 700,
            }}>
              {ch.when}
            </div>
            <div style={{ padding: "16px 18px 18px" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700, color: B.ink, lineHeight: 1.25 }}>
                {ch.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: B.ink }}>
                {ch.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Band from={BG_CH} to={BG_PULL} />

      {/* Pull-quote */}
      <div style={{ background: BG_PULL, padding: "32px 22px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 56, lineHeight: 0.9, color: B.teal, fontFamily: F.display, marginBottom: 8 }}>"</div>
        <p style={{ fontSize: 20, lineHeight: 1.4, color: B.ink, margin: "0 0 14px", fontFamily: F.display, fontStyle: "italic", fontWeight: 500 }}>
          {c.pullQuote.body}
        </p>
        <div style={{ fontSize: 12, color: B.muted, fontWeight: 700, letterSpacing: 0.5 }}>
          — {c.pullQuote.by}
        </div>
      </div>

      <Band from={BG_PULL} to={BG_BADGES} />

      {/* Promise badges */}
      <div style={{ background: BG_BADGES, padding: "22px 18px 18px" }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {c.promiseBadges.map((b, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 14px",
              background: "#FFFFFF", border: `1.5px solid ${B.ink}`,
              borderRadius: 999, fontSize: 11.5, fontWeight: 600,
              color: B.ink,
            }}>
              <span style={{ color: B.teal, fontWeight: 700 }}>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Band from={BG_BADGES} to={BG_PRODUCT} />

      {/* Product placement · HIGH PRIORITY, "the product Sarah used" framing */}
      <div style={{ background: BG_PRODUCT }}>
        <ProductShowcaseFull
          eyebrow="The pants Sarah used"
          title="Body-Signal"
          titleAccent="Learning Layer™"
          sub="Same product, same guarantee. Your code already applied."
          priceFrom="€30.60"
          priceNote="€34 minus BRIGHT10 · Starter pair · 2 days left"
          ctaButton="Start with what worked for Sarah"
          features={[
            { icon: "✓", label: "BRIGHT10 applied" },
            { icon: "★", label: "4.9 on Trustpilot" },
            { icon: "♡", label: "60-day guarantee" },
          ]}
        />
      </div>

      {/* Code reminder */}
      <ReminderBar label={c.codeReminderLabel} body={c.codeReminderBody} />

      <Band from={BG_PRODUCT} to={BG_CTA} height={50} />

      <CTAClose intro={c.ctaIntro} button={c.ctaButton} fine={c.ctaFinePrint} />
      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

/* ═════════════════════════════════════════════════════
   Email 4 · Guarantee Closer · +2 days
   ═════════════════════════════════════════════════════ */
const F2Email4 = () => {
  const c = window.FLOW2.e4;
  const BG_HERO = "#FFFBF0";
  const BG_LETTER = "#FAF7F0";
  const BG_GUARANTEE = "#EAF6F2";
  const BG_COVERED = "#FFFBF0";
  const BG_RETURN = "#FFF6E2";
  const BG_PRODUCT = "#F5F1EA";
  const BG_CTA = B.ink;

  return (
    <EmailShell preheader={c.preheader} bg={BG_HERO}>
      <Header bg={BG_HERO} />
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <Band from={BG_HERO} to={BG_LETTER} />
      <Letter bg={BG_LETTER} first="Lena — final note." paras={c.letterOpening} />

      <Band from={BG_LETTER} to={BG_GUARANTEE} />

      {/* Guarantee hero */}
      <div style={{ background: BG_GUARANTEE, padding: "36px 22px 28px", textAlign: "center" }}>
        <Eyebrow>The real reason</Eyebrow>
        <H2 size={30} center>
          {c.guaranteeTitle}{" "}
          <span style={{ ...B.gradientText, fontWeight: 700 }}>{c.guaranteeAccent}</span>
        </H2>

        {/* Guarantee seal */}
        <div style={{ margin: "24px auto 18px", position: "relative", width: 160, height: 160 }}>
          <svg width="160" height="160" viewBox="0 0 160 160" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <path id="circle" d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
            </defs>
            <circle cx="80" cy="80" r="68" stroke={B.ink} strokeWidth="2" fill="#FFFFFF" />
            <circle cx="80" cy="80" r="56" stroke={B.ink} strokeWidth="1.5" fill="none" strokeDasharray="3 4" />
            <text fontSize="10" fontWeight="700" fill={B.ink} letterSpacing="2">
              <textPath href="#circle" startOffset="0">CALM PROGRESS · NO QUESTIONS · REAL RETURNS · </textPath>
            </text>
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: B.ink, lineHeight: 1, fontFamily: F.display, letterSpacing: -1 }}>60</div>
            <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", color: B.tealDeep, fontWeight: 700, marginTop: 4 }}>days</div>
          </div>
        </div>

        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.ink, margin: 0, maxWidth: 340, marginLeft: "auto", marginRight: "auto" }}>
          {c.guaranteeSub}
        </p>
      </div>

      <Band from={BG_GUARANTEE} to={BG_COVERED} />

      {/* What's covered / not covered */}
      <div style={{ background: BG_COVERED, padding: "26px 14px 8px" }}>
        <div style={{ padding: "0 8px", marginBottom: 16 }}>
          <Eyebrow>Plain language</Eyebrow>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: B.ink, lineHeight: 1.3 }}>
            What's covered. What's not.
          </h3>
        </div>

        {/* Covered */}
        <div style={{
          background: "#FFFFFF",
          border: `2px solid ${B.ink}`,
          borderRadius: 16,
          padding: "18px 20px", marginBottom: 10,
          boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          <div style={{
            display: "inline-block", padding: "3px 10px",
            background: B.green, color: "#FFFFFF",
            borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: 0.8,
            textTransform: "uppercase", marginBottom: 12,
          }}>
            Covered
          </div>
          {c.covered.yes.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, fontSize: 13.5, lineHeight: 1.5, color: B.ink }}>
              <span style={{ color: B.green, fontWeight: 700, fontSize: 15, flexShrink: 0 }}>✓</span>
              <span>{line}</span>
            </div>
          ))}
        </div>

        {/* Not covered */}
        <div style={{
          background: "#FFFFFF",
          border: `2px solid ${B.ink}`,
          borderRadius: 16,
          padding: "18px 20px",
          boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          <div style={{
            display: "inline-block", padding: "3px 10px",
            background: "#D97757", color: "#FFFFFF",
            borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: 0.8,
            textTransform: "uppercase", marginBottom: 12,
          }}>
            Not a thing
          </div>
          {c.covered.no.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, fontSize: 13.5, lineHeight: 1.5, color: B.ink }}>
              <span style={{ color: "#D97757", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>✕</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>

      <Band from={BG_COVERED} to={BG_RETURN} />

      {/* Return story · counter-intuitive trust builder */}
      <div style={{ background: BG_RETURN, padding: "28px 22px 26px" }}>
        <Eyebrow>{c.counterTestimonial.label}</Eyebrow>
        <div style={{
          marginTop: 12, padding: "22px 22px",
          background: "#FFFFFF", border: `2px solid ${B.ink}`,
          borderRadius: 18, boxShadow: `3px 3px 0 ${B.ink}`,
        }}>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: B.ink, margin: "0 0 14px", fontStyle: "italic" }}>
            {c.counterTestimonial.body}
          </p>
          <div style={{ fontSize: 12, color: B.muted, fontWeight: 700, letterSpacing: 0.3 }}>
            — {c.counterTestimonial.by}
          </div>
        </div>
        <p style={{ margin: "16px 4px 0", fontSize: 13, color: B.soft, lineHeight: 1.55, fontStyle: "italic", textAlign: "center" }}>
          {c.counterTestimonial.framing}
        </p>
      </div>

      <Band from={BG_RETURN} to={BG_PRODUCT} />

      {/* Product placement · HIGH conversion moment */}
      <div style={{ background: BG_PRODUCT }}>
        <ProductShowcaseFull
          eyebrow="Protected, either way"
          title="Start"
          titleAccent="protected."
          sub="Last day for your code — but the 60-day guarantee applies no matter when you buy."
          priceFrom="€30.60"
          priceNote="€34 minus BRIGHT10 · Last day"
          ctaButton="Start protected"
          features={[
            { icon: "✓", label: "60-day guarantee" },
            { icon: "◉", label: "No questions" },
            { icon: "♡", label: "Real returns" },
          ]}
        />
      </div>

      {/* Code final reminder */}
      <div style={{ background: BG_PRODUCT, padding: "0 22px 18px" }}>
        <div style={{
          padding: "14px 18px", background: "#FFFDF6",
          border: `2px dashed ${B.teal}`, borderRadius: 14,
          fontSize: 13, lineHeight: 1.55, color: B.ink,
        }}>
          <span style={{ fontWeight: 700, color: B.tealDeep, fontFamily: "'Courier New', monospace", letterSpacing: 1.2 }}>BRIGHT10 · Last day.</span>{" "}
          <span style={{ color: B.soft }}>{c.codeReassure}</span>
        </div>
      </div>

      <Band from={BG_PRODUCT} to={BG_CTA} height={50} />

      {/* Dual CTA */}
      <div style={{ background: BG_CTA, padding: "32px 22px 22px" }}>
        <p style={{ margin: "0 0 16px", fontSize: 14, color: "#BAD5D7", textAlign: "center", lineHeight: 1.55, fontStyle: "italic" }}>
          {c.ctaIntro}
        </p>

        <a href="#" style={{
          display: "block", width: "100%",
          padding: "18px 24px",
          background: "#D8F57C", color: B.ink,
          fontSize: 15, fontWeight: 700,
          textDecoration: "none", borderRadius: 999,
          textAlign: "center", letterSpacing: 0.3,
          marginBottom: 10,
        }}>
          {c.ctaButton} →
        </a>

        <a href="#" style={{
          display: "block", width: "100%",
          padding: "14px 24px",
          background: "transparent", color: "#BAD5D7",
          fontSize: 13, fontWeight: 600,
          textDecoration: "none", borderRadius: 999,
          textAlign: "center", letterSpacing: 0.2,
          border: "1.5px solid #3A4547",
        }}>
          {c.ctaSecondary}
        </a>

        <p style={{ margin: "18px 0 0", fontSize: 11.5, color: "#8A9B9D", textAlign: "center", letterSpacing: 0.3 }}>
          {c.ctaFinePrint}
        </p>
      </div>

      <Signoff />
      <OutLine />
      <Footer />
    </EmailShell>
  );
};

Object.assign(window, {
  CodeBlock, ReminderBar,
  F2Email1, F2Email2, F2Email3, F2Email4,
});
