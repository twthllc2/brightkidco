/* Browse Abandonment · GF Cross-Level · 3 Emails
   CONVERGENCE: Wireframe section order × Giuliano visual patterns
   Each: 2-3 FramedImage (180-260px), varied card styles, 10+ sections, no repeated patterns
   E1: Method cards (like Email 3)  E2: Banner testimonial cards  E3: Product + guarantee
*/

/* ═════════════════════════════════════════════════════
   EMAIL 1 — The Signal (30 min)
   Hero diagram → 6 method cards (130px ImgFrame each) → validation → 
   mid image → mechanism border → 3 testimonial cards → ProductShowcaseSoft → text-link CTA
   ═════════════════════════════════════════════════════ */
const BrowseE1 = () => {
  const c = window.BROWSE.e1;
  const BG = { HERO: "#FFFBF0", LETTER: "#FFF6E2", ANCHORS: "#FFFFFF", VALIDATION: "#FAF7F0", MECH: "#EAF6F2", TEST: "#FFF6E2" };

  return (
    <EmailShell preheader={c.preheader} bg={BG.HERO}>
      <Header bg={BG.HERO} />

      <div style={{ margin: "20px 14px 0" }}>
        <FramedImage height={240} label="HERO · BODY-SIGNAL PATHWAY"
          sublabel="Simple icon-based diagram · child → body signal → brain → awareness. Soft pastel teal/green tones. 3:4 crop" shadow={6} />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />
      <Band from={BG.HERO} to={BG.LETTER} />

      <Letter bg={BG.LETTER} first="" paras={[c.opener]} />
      <Band from={BG.LETTER} to={BG.ANCHORS} />

      {/* 6 numbered method cards with 130px ImgFrame (like Welcome Flow Email 3) */}
      <div style={{ background: BG.ANCHORS, padding: "16px 14px 12px" }}>
        <Eyebrow>You might see some of these in your house:</Eyebrow>
        {c.anchors.map((a, i) => {
          const accent = [B.teal, "#E8A23D", B.green, "#FFB5A0", "#D4A853", "#8FAFB2"][i];
          const labels = ["TIMER", "SENSORY", "AWARENESS", "REGRESSION", "INITIATE", "ENVIRONMENT"];
          const imgs = [
            "Clock / timer on kitchen counter",
            "Child playing, unaware of wetness",
            "Child sleeping, no reaction to wet",
            "Calendar with circled dates",
            "Child standing, not moving",
            "Bathroom with bright lights",
          ];
          return (
            <div key={i} style={{
              marginBottom: 12, background: "#FFF", borderRadius: 16,
              overflow: "hidden", border: `2px solid ${B.ink}`, boxShadow: `3px 3px 0 ${B.ink}`,
            }}>
              <div style={{ background: `${accent}18` }}>
                <ImgFrame height={130} radius={0} label={`SIGNAL · ${labels[i]}`} sublabel={imgs[i]} />
              </div>
              <div style={{ padding: "12px 16px", borderTop: `2px solid ${B.ink}`, background: "#FFFDF6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: accent, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, border: `2px solid ${B.ink}` }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: B.ink }}>{labels[i]}</span>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.5, color: B.soft, margin: 0 }}>{a}</p>
              </div>
            </div>
          );
        })}
        <p style={{ fontSize: 14, fontWeight: 600, color: B.ink, margin: "10px 8px 0", fontStyle: "italic", textAlign: "center" }}>{c.bridgeLine}</p>
      </div>

      <Band from={BG.ANCHORS} to={BG.VALIDATION} />

      <div style={{ background: BG.VALIDATION, padding: "8px 14px 0" }}>
        <FramedImage height={240} label="ILLUSTRATION · SIGNAL TIMING"
          sublabel="Neurological pathway illustration · brain to bladder signal loop. Gentle teal tones. 3:4 crop" shadow={4} />
      </div>

      <div style={{ background: BG.VALIDATION, padding: "20px 22px 24px" }}>
        <Eyebrow>{c.validationLabel}</Eyebrow>
        {c.validationParagraphs.map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: B.soft, margin: "0 0 10px" }}>{p}</p>
        ))}
        <p style={{ fontSize: 15.5, fontWeight: 700, color: B.ink, margin: "16px 0 0", lineHeight: 1.4 }}>{c.validationReframe}</p>
      </div>

      <Band from={BG.VALIDATION} to={BG.MECH} />

      <div style={{ background: BG.MECH, padding: "28px 22px 24px" }}>
        <div style={{ borderLeft: `2px solid ${B.teal}`, paddingLeft: 18 }}>
          <Eyebrow>{c.mechanismLabel}</Eyebrow>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.soft, margin: "8px 0 0" }}>{c.mechanismBody}</p>
        </div>
      </div>

      <Band from={BG.MECH} to={BG.TEST} />

      <div style={{ background: BG.TEST, padding: "24px 14px 20px" }}>
        <div style={{ padding: "0 8px", marginBottom: 14 }}><Eyebrow>{c.testimonialsLabel}</Eyebrow></div>
        {c.testimonials.map((t, i) => (
          <div key={i} style={{ marginBottom: 10, background: "#FBF7EB", borderRadius: 14, border: `2px solid ${B.ink}`, boxShadow: `3px 3px 0 ${B.ink}`, padding: "14px 16px" }}>
            <div style={{ fontSize: 30, lineHeight: 0.8, color: "#D4A853", fontWeight: 700, marginBottom: 4 }}>{"\""}</div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: B.soft, margin: "0 0 6px", fontStyle: "italic" }}>{t.quote}</p>
            <div style={{ fontSize: 11.5, color: B.muted, fontWeight: 600 }}>— {t.name}, {t.child}</div>
          </div>
        ))}
      </div>

      <Band from={BG.TEST} to="#FFFFFF" height={30} />

      {/* ProductShowcaseSoft — Giuliano's pattern: always before CTA */}
      <ProductShowcaseSoft
        eyebrow="Built around the signal gap"
        line="BrightKidCo Body-Signal Learning Layer™ — designed to keep the feedback loop intact."
        ctaText="See the pants"
      />

      <div style={{ height: 1, background: B.muted, opacity: 0.15, margin: "0 22px" }} />

      {/* Permission text + text-link CTA */}
      <div style={{ padding: "16px 22px 24px" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>{c.ctaIntro}</p>
        <a href="#" style={{ color: B.ink, fontSize: 15, fontWeight: 600, textDecoration: "underline" }}>{c.ctaButton}</a>
        <div style={{ marginTop: 10, fontSize: 12, color: B.muted, fontStyle: "italic" }}>{c.ctaFine}</div>
      </div>

      <Signoff /><OutLine /><Footer />
    </EmailShell>
  );
};

/* ═════════════════════════════════════════════════════
   EMAIL 2 — Three Parents (24h)
   Hero → 3 banner testimonial cards (with side image) → mid image →
   sticker quote → CTA → migration anchors → ProductShowcaseSoft
   ═════════════════════════════════════════════════════ */
const BrowseE2 = () => {
  const c = window.BROWSE.e2;
  const BG = { HERO: "#FFFBF0", STORIES: "#FFF6E2", MECH: "#F0EDF8", CTA: "#FFFFFF", MIGRATE: "#FAF7F0" };

  return (
    <EmailShell preheader={c.preheader} bg={BG.HERO}>
      <Header bg={BG.HERO} />

      <div style={{ margin: "20px 14px 0" }}>
        <FramedImage height={240} label="HERO · CONNECTION MOMENT"
          sublabel="Warm lifestyle shot · parent and child in quiet moment. Soft natural light. 9:16 crop" shadow={6} />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} subhead={c.subhead} />
      <Band from={BG.HERO} to={BG.STORIES} />

      <div style={{ background: BG.STORIES, padding: "20px 22px 12px" }}>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: B.soft, margin: 0 }}>{c.opener}</p>
      </div>

      {/* 3 testimonial cards with colored banner + inline 90px ImgFrame */}
      <div style={{ background: BG.STORIES, padding: "0 14px 12px" }}>
        {c.testimonials.map((t, i) => {
          const banners = ["#FFD866", "#D4A853", "#E8C84A"];
          return (
            <div key={i} style={{ marginBottom: 12, background: "#FFFFFF", borderRadius: 14, overflow: "hidden", border: `2px solid ${B.ink}`, boxShadow: `3px 3px 0 ${B.ink}` }}>
              <div style={{ padding: "8px 14px", background: banners[i], borderBottom: `2px solid ${B.ink}`, fontSize: 11.5, fontWeight: 700, color: B.ink }}>{t.title}</div>
              <div style={{ padding: "12px 14px", display: "flex", gap: 12 }}>
                <div style={{ width: 90, flexShrink: 0 }}>
                  <ImgFrame height={90} radius={10} label={["VERBAL TODDLER","SENSORY PLAY","NON-VERBAL MOMENT"][i]} sublabel={["Child playing, warm light","Sensory toys, calm setting","Quiet connection, parent+child"][i]} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 28, lineHeight: 0.8, color: "#D4A853", fontWeight: 700, marginBottom: 2 }}>{"\""}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: B.soft, margin: "0 0 6px", fontStyle: "italic" }}>{t.quote.length > 180 ? t.quote.substring(0, 180) + "..." : t.quote}</p>
                  <div style={{ fontSize: 11, color: B.muted, fontWeight: 600 }}>— {t.name}, {t.child}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Band from={BG.STORIES} to={BG.MECH} />

      <div style={{ background: BG.MECH, padding: "8px 14px 0" }}>
        <FramedImage height={240} label="DIAGRAM · INTEROCEPTION PATHWAY"
          sublabel="Simple brain-body connection diagram. Teal and cream tones. 3:4 crop" shadow={4} />
      </div>

      <div style={{ background: BG.MECH, padding: "12px 14px 20px" }}>
        <div style={{ padding: "18px 20px", background: "#FFD866", borderRadius: 16, border: `2px solid ${B.ink}`, boxShadow: `4px 4px 0 ${B.ink}`, transform: "rotate(-0.3deg)" }}>
          <div style={{ fontSize: 10.5, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>{c.mechanismLabel}</div>
          <p style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 500, margin: "0 0 8px", fontStyle: "italic" }}>
            "Interoception is the body's ability to sense internal signals. Research shows this works differently in kids whose nervous systems process differently. The Body-Signal layer creates feedback the brain was missing."
          </p>
          <div style={{ fontSize: 11, fontWeight: 600 }}>— 49-study review</div>
        </div>
      </div>

      <Band from={BG.MECH} to={BG.CTA} height={30} />

      <div style={{ padding: "16px 22px 20px" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: B.soft, margin: "0 0 14px" }}>{c.ctaIntro}</p>
        <a href="#" style={{ color: B.ink, fontSize: 15, fontWeight: 600, textDecoration: "underline" }}>{c.ctaButton}</a>
        <div style={{ marginTop: 10, fontSize: 12, color: B.muted, fontStyle: "italic" }}>{c.ctaFine}</div>
      </div>

      <Band from={BG.CTA} to={BG.MIGRATE} height={10} />

      <div style={{ background: BG.MIGRATE, padding: "20px 22px 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: B.tealDeep, margin: "0 0 14px" }}>{c.migrationLabel}</p>
        {c.migrationLinks.map((link, i) => (
          <div key={i} style={{ marginBottom: 8, fontSize: 14, lineHeight: 1.5 }}><a href="#" style={{ color: B.teal, textDecoration: "underline" }}>{link}</a></div>
        ))}
        <p style={{ fontSize: 12.5, color: B.muted, margin: "12px 0 0", fontStyle: "italic" }}>{c.migrationFallback}</p>
      </div>

      <ProductShowcaseSoft
        eyebrow="The common thread across every story"
        line="Body-Signal Learning Layer™ — the piece every parent above was missing."
        ctaText="See how it works"
      />

      <div style={{ height: 1, background: B.muted, opacity: 0.15, margin: "0 22px" }} />
      <Signoff /><OutLine /><Footer />
    </EmailShell>
  );
};

/* ═════════════════════════════════════════════════════
   EMAIL 3 — 60 Days (72h)
   Product hero → hook → 5 anchor cards → mechanism+Mahler → mini-wins →
   ProductShowcaseFull → guarantee seal → CTAClose filled button
   ═════════════════════════════════════════════════════ */
const BrowseE3 = () => {
  const c = window.BROWSE.e3;
  const BG = { HERO: "#FFFBF0", LETTER: "#FFF6E2", ANCHORS: "#FFFFFF", MECH: "#EAF6F2", MINI: "#FFF6E2", PRODUCT: "#F5F1EA", GUARANTEE: "#EAF6F2" };

  return (
    <EmailShell preheader={c.preheader} bg={BG.HERO}>
      <Header bg={BG.HERO} />

      <div style={{ margin: "20px 14px 0" }}>
        <FramedImage height={240} label="HERO · BODY-SIGNAL PANTS"
          sublabel="Hero product shot · 2-3 pairs of BrightKidCo pants · soft editorial light, calm composition. 3:4 crop" shadow={6} />
      </div>

      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} subhead={c.subhead} />
      <Band from={BG.HERO} to={BG.LETTER} />

      <Letter bg={BG.LETTER} first="" paras={c.opener.split("\n\n")} />
      <Band from={BG.LETTER} to={BG.ANCHORS} />

      {/* 5 anchor cards — rounded white, numbered (DIFFERENT from E1's method cards) */}
      <div style={{ background: BG.ANCHORS, padding: "16px 14px 16px" }}>
        <Eyebrow>{c.anchorLabel}</Eyebrow>
        {c.anchors.map((a, i) => (
          <div key={i} style={{ marginBottom: 8, background: "#FFFFFF", borderRadius: 10, border: `2px solid ${B.ink}`, boxShadow: `2px 2px 0 ${B.ink}`, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, transform: `rotate(${[0.3,-0.4,0.2,-0.3,0.1][i]}deg)` }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: i < 3 ? B.teal : B.green, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <p style={{ fontSize: 13, lineHeight: 1.4, color: B.soft, margin: 0 }}>{a}</p>
          </div>
        ))}
        <p style={{ fontSize: 14, lineHeight: 1.55, color: B.ink, fontWeight: 500, margin: "12px 8px 0" }}>{c.anchorBridge}</p>
      </div>

      <Band from={BG.ANCHORS} to={BG.MECH} />

      <div style={{ background: BG.MECH, padding: "28px 22px 24px" }}>
        <Eyebrow>{c.mechanismLabel}</Eyebrow>
        {c.mechanismBody.split("\n\n").map((p, i) => (
          <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: B.soft, margin: "0 0 10px" }}>{p}</p>
        ))}
      </div>

      <Band from={BG.MECH} to={BG.MINI} />

      <div style={{ background: BG.MINI, padding: "8px 14px 0" }}>
        <FramedImage height={240} label="LIFESTYLE · QUIET MOMENT"
          sublabel="Child in calm home setting · soft natural light, neutral tones. 9:16 crop" shadow={4} />
      </div>

      {/* Mini-win cream cards */}
      <div style={{ background: BG.MINI, padding: "12px 14px 16px" }}>
        <Eyebrow>{c.miniWinsLabel}</Eyebrow>
        {c.miniWins.map((w, i) => (
          <div key={i} style={{ marginBottom: 10, background: "#FBF7EB", borderRadius: 12, border: `2px solid ${B.ink}`, boxShadow: `2px 2px 0 ${B.ink}`, padding: "12px 14px" }}>
            <div style={{ fontSize: 28, lineHeight: 0.8, color: "#D4A853", fontWeight: 700, marginBottom: 2 }}>{"\""}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.5, color: B.soft, margin: "0 0 4px", fontStyle: "italic" }}>{w.quote}</p>
            <div style={{ fontSize: 11, color: B.muted, fontWeight: 600 }}>— {w.by}</div>
          </div>
        ))}
      </div>

      <Band from={BG.MINI} to={BG.PRODUCT} />

      <div style={{ background: BG.PRODUCT }}>
        <ProductShowcaseFull
          eyebrow="The 3-layer system"
          title="Body-Signal" titleAccent="Learning Layer™"
          sub="Designed to keep the feedback loop intact. Opposite of a pull-up."
          priceFrom="$79.99" priceNote="3+3 Bundle · 6 pairs · Free shipping · Starter pair $34.99"
          ctaButton="See how the body-signal layer works"
          features={[{ icon: "◉", label: "Signal layer" }, { icon: "✓", label: "Smart absorption" }, { icon: "♡", label: "60-day guarantee" }]} />
      </div>

      <Band from={BG.PRODUCT} to={BG.GUARANTEE} />

      <div style={{ background: BG.GUARANTEE, padding: "24px 14px 24px", textAlign: "center" }}>
        <Eyebrow>{window.BROWSE.e3.guaranteeLabel}</Eyebrow>
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", background: "#FFFFFF", borderRadius: "50%", width: 150, height: 150, border: `3px solid ${B.ink}`, boxShadow: `5px 5px 0 ${B.ink}`, justifyContent: "center", margin: "10px auto 18px" }}>
          <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: B.muted, fontWeight: 700 }}>Protected by</div>
          <div style={{ fontSize: 42, fontWeight: 700, lineHeight: 1, ...B.gradientText }}>60</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: B.ink, marginTop: 1 }}>Calm Days</div>
          <div style={{ fontSize: 9, color: B.soft, marginTop: 1 }}>Full refund</div>
        </div>
        <p style={{ fontSize: 13.5, lineHeight: 1.55, color: B.soft, margin: "0 8px 14px", fontStyle: "italic" }}>{window.BROWSE.e3.guaranteeBody}</p>
        {window.BROWSE.e3.guaranteePoints.map((p, i) => (
          <div key={i} style={{ marginBottom: 6, background: "#FFFFFF", borderRadius: 10, border: `2px solid ${B.ink}`, padding: "8px 12px", boxShadow: `2px 2px 0 ${B.ink}`, display: "flex", alignItems: "center", gap: 8, textAlign: "left" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: B.green, color: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>✓</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.4 }}><strong>{p.title}</strong> — {p.body}</div>
          </div>
        ))}
      </div>

      <Band from={BG.GUARANTEE} to={B.ink} height={40} />

      <CTAClose intro={c.ctaLabel} button={c.ctaButton} fine={c.ctaFine} />

      <div style={{ height: 1, background: B.muted, opacity: 0.15, margin: "0 22px" }} />
      <Signoff /><OutLine /><Footer />
    </EmailShell>
  );
};

Object.assign(window, { BrowseE1, BrowseE2, BrowseE3 });
