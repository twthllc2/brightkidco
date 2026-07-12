/* Browse Abandonment · GF Cross-Level · 3 Emails
   Mobile-first 420px. Portrait image crops (3:4, 9:16). Clean placeholders.
*/

const B = window.BRAND;
const F = window.FONT;

const IMG = {
  potty:     "toddler-potty-ladder-pink-multicolor.jpg",
  backview:  "toddlers-backview-disposable-diapers.jpg",
  rearview:  "toddler-rearview-cat-mustard.jpg",
  founders:  "founders-holding-pants-yellow-watermelon.jpg",
  penguin:   "training-pant-penguin-multicolor.jpg",
  bunny:     "training-pant-bunny-hearts-pink.jpg",
  outdoors:  "toddler-outdoors-grass-disposable-diaper.jpg",
  dino:      "toddler-livingroom-dino-yellow.jpg",
  ladderY:   "toddler-potty-ladder-yellow-woodland.jpg",
  napping:   "toddler-napping-watermelon-pink-shorts.jpg",
  wmelon:    "training-pant-watermelon-pink.jpg",
};

/* Image block — 3:4 or 4:5 only. Constrained width, centered. */
const Photo = ({ src, alt, ratio = "3/4", w = "72%" }) => (
  <div style={{ display:"flex", justifyContent:"center", padding:"0 16px" }}>
    <div style={{
      borderRadius: 12, overflow: "hidden", width: w,
      border: `2px solid ${B.ink}`, boxShadow: `4px 4px 0 ${B.ink}`,
      aspectRatio: ratio,
    }}>
      {src ? (
        <img src={src} alt={alt || ""} style={{ display:"block", width:"100%", height:"100%", objectFit:"cover" }} />
      ) : (
        <div style={{ width:"100%", height:"100%", background:"#F0EDF8", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="24" height="24" viewBox="0 0 32 32" style={{ opacity:0.3 }}>
            <rect x="3" y="6" width="26" height="20" rx="3" stroke={B.teal} strokeWidth="1.8" fill="none" />
          </svg>
        </div>
      )}
    </div>
  </div>
);

/* Mini side image for testimonial cards — 1:1 crop, 90px */
const MiniPhoto = ({ src }) => (
  <div style={{ width:90, height:90, flexShrink:0, borderRadius:10, overflow:"hidden", border:`1.5px solid ${B.ink}` }}>
    {src ? (
      <img src={src} alt="" style={{ display:"block", width:"100%", height:"100%", objectFit:"cover" }} />
    ) : (
      <div style={{ width:"100%", height:"100%", background:"#F0EDF8", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <svg width="16" height="16" viewBox="0 0 32 32" style={{ opacity:0.3 }}><rect x="3" y="6" width="26" height="20" rx="3" stroke={B.teal} strokeWidth="1.8" fill="none" /></svg>
      </div>
    )}
  </div>
);

const AnchorCard = ({ dot, children }) => (
  <div style={{ display:"flex", gap:10, marginBottom:10, padding:"12px 14px", background:"#FFFFFF", borderRadius:12, border:`1.5px solid ${B.ink}`, boxShadow:`2px 2px 0 ${B.ink}` }}>
    <div style={{ width:8, height:8, borderRadius:"50%", background:dot||B.teal, flexShrink:0, marginTop:5 }} />
    <p style={{ fontSize:13.5, lineHeight:1.55, color:B.soft, margin:0 }}>{children}</p>
  </div>
);

const TCard = ({ quote, name, child }) => (
  <div style={{ marginBottom:8, background:"#FBF7EB", borderRadius:14, border:`2px solid ${B.ink}`, boxShadow:`3px 3px 0 ${B.ink}`, padding:"18px 18px" }}>
    <div style={{ fontSize:34, lineHeight:.7, color:"#D4A853", fontWeight:700, marginBottom:8 }}>{"\u201C"}</div>
    <p style={{ fontSize:14, lineHeight:1.6, color:B.soft, margin:"0 0 10px", fontStyle:"italic" }}>{quote}</p>
    <div style={{ fontSize:11.5, color:B.muted, fontWeight:600 }}>— {name}, {child}</div>
  </div>
);

/* ═══════════════════ E1 — THE SIGNAL ═══════════════════ */
const BrowseE1 = () => {
  const c = window.BROWSE.e1;
  const BG = { hero:"#FFFBF0", cream:"#FFF6E2", white:"#FFFFFF", warm:"#FAF7F0", mint:"#EAF6F2" };
  const P = { padding:"0 22px 24px" };
  return (
    <EmailShell preheader={c.preheader} bg={BG.hero}>
      <Header bg={BG.hero} />
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} />

      <div style={{ padding:"0 16px 8px" }}><Photo src={IMG.potty} alt="Toddler climbing pink potty ladder" ratio="3/4" /></div>
      <Band from={BG.hero} to={BG.cream} />

      <div style={{ background:BG.cream, ...P }}>
        <p style={{ fontFamily:F.display, fontSize:17, lineHeight:1.55, fontWeight:600, color:B.ink, margin:0 }}>{c.bridgeLine}</p>
      </div>

      <Band from={BG.cream} to={BG.warm} />
      <div style={{ background:BG.warm, ...P }}>
        <Eyebrow color={B.tealDeep}>{c.anchorEyebrow}</Eyebrow>
        {c.anchors.map((a,i) => <AnchorCard key={i}>{a}</AnchorCard>)}
        <p style={{ fontSize:14.5, fontWeight:600, color:B.ink, margin:"6px 0 0", fontStyle:"italic", textAlign:"center" }}>{c.bridgeClosing}</p>
      </div>

      <Band from={BG.warm} to={BG.white} />
      <div style={{ background:BG.white, ...P }}>
        <Eyebrow color={B.ink}>{c.validationEyebrow}</Eyebrow>
        {c.validationParas.map((p,i) => <p key={i} style={{ fontSize:14.5, lineHeight:1.65, color:B.soft, margin:"0 0 12px" }}>{p}</p>)}
        <p style={{ fontSize:15, fontWeight:700, color:B.ink, lineHeight:1.5, margin:"14px 0 6px" }}>{c.validationReframe}</p>
        <p style={{ fontSize:15.5, fontWeight:700, color:B.teal, marginBottom:20 }}>{c.validationKicker}</p>
        <Photo src={IMG.penguin} alt="Penguin flat lay" ratio="3/4" />
      </div>

      <Band from={BG.white} to={BG.mint} />
      <div style={{ background:BG.mint, ...P }}>
        <div style={{ borderLeft:`3px solid ${B.teal}`, paddingLeft:18, marginBottom:20 }}>
          <Eyebrow>{c.mechanismEyebrow}</Eyebrow>
          <p style={{ fontSize:14.5, lineHeight:1.65, color:B.soft, margin:"8px 0 0" }}>{c.mechanismBody}</p>
        </div>
        <Photo src={null} alt="" ratio="3/4" />
      </div>

      <Band from={BG.mint} to={BG.cream} />
      <div style={{ background:BG.cream, ...P }}>
        <Eyebrow color={B.ink}>{c.testimonialHeadline}</Eyebrow>
        {c.testimonials.map((t,i) => <TCard key={i} {...t} />)}
        <div style={{ marginBottom:16 }}><Photo src={IMG.backview} alt="Two toddlers backview soft diapers" ratio="3/4" /></div>
        <p style={{ fontSize:13.5, lineHeight:1.6, color:B.soft, fontStyle:"italic" }}>{c.testimonialsClosing}</p>
      </div>

      <div style={{ ...P, paddingBottom:16 }}><Photo src={IMG.rearview} alt="Toddler rearview mustard shorts" ratio="3/4" /></div>

      <ProductShowcaseSoft eyebrow={c.productEyebrow} line={c.productLine} ctaText="See the pants" />
      <div style={{ height:1, background:B.muted, opacity:.12, margin:"0 22px" }} />

      <div style={{ ...P }}>
        <p style={{ fontSize:14, lineHeight:1.65, color:B.soft, margin:"0 0 16px" }}>{c.ctaPermission}</p>
        <a href="#" style={{ color:B.ink, fontSize:15, fontWeight:600, textDecoration:"underline", textUnderlineOffset:4, textDecorationColor:B.teal }}>{c.ctaText}</a>
        <div style={{ marginTop:10, fontSize:12, color:B.muted, fontStyle:"italic" }}>{c.ctaFine}</div>
      </div>

      <Signoff /><OutLine /><Footer />
    </EmailShell>
  );
};

/* ═══════════════════ E2 — THREE PARENTS ═══════════════════ */
const BrowseE2 = () => {
  const c = window.BROWSE.e2;
  const BG = { hero:"#FFFBF0", cream:"#FFF6E2", warm:"#FAF7F0", lavender:"#F0EDF8", white:"#FFFFFF" };
  const P = { padding:"0 22px 24px" };
  return (
    <EmailShell preheader={c.preheader} bg={BG.hero}>
      <Header bg={BG.hero} />
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} subhead={c.subhead} />

      <div style={{ padding:"0 16px 8px" }}><Photo src={IMG.founders} alt="Founders photo" ratio="4/5" /></div>
      <Band from={BG.hero} to={BG.cream} />

      <div style={{ background:BG.cream, ...P }}>
        <p style={{ fontSize:14.5, lineHeight:1.65, color:B.soft, margin:"0 0 14px" }}>{c.opener}</p>
        {c.anchors.map((a,i) => <AnchorCard key={i}>{a}</AnchorCard>)}
        <p style={{ fontSize:14, fontWeight:600, color:B.ink, margin:"4px 0 0", fontStyle:"italic" }}>{c.anchorBridge}</p>
      </div>

      <Band from={BG.cream} to={BG.warm} />
      <div style={{ background:BG.warm, ...P }}>
        <Eyebrow color={B.ink}>{c.testimonialLabel}</Eyebrow>
        {c.testimonials.map((t,i) => {
          const banners = ["#FFD866","#E8C84A","#D4A853"];
          const pics = [IMG.bunny, IMG.outdoors, IMG.dino];
          return (
            <div key={i} style={{ marginBottom:12, background:"#FFFFFF", borderRadius:14, overflow:"hidden", border:`2px solid ${B.ink}`, boxShadow:`3px 3px 0 ${B.ink}` }}>
              <div style={{ padding:"9px 14px", background:banners[i], borderBottom:`2px solid ${B.ink}`, fontSize:11, fontWeight:700, color:B.ink, letterSpacing:.5 }}>{t.title}</div>
              <div style={{ padding:"14px 14px", display:"flex", gap:12 }}>
                <MiniPhoto src={pics[i]} />
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:30, lineHeight:.8, color:"#D4A853", fontWeight:700, marginBottom:6 }}>{"\u201C"}</div>
                  <p style={{ fontSize:13, lineHeight:1.5, color:B.soft, margin:"0 0 6px", fontStyle:"italic" }}>{t.quote.length>160?t.quote.substring(0,160)+"...":t.quote}</p>
                  <div style={{ fontSize:11, color:B.muted, fontWeight:600 }}>— {t.name}, {t.child}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Band from={BG.warm} to={BG.lavender} />
      <div style={{ background:BG.lavender, ...P }}>
        <div style={{ padding:"20px 20px", background:"#FFD866", borderRadius:16, border:`2px solid ${B.ink}`, boxShadow:`4px 4px 0 ${B.ink}`, transform:"rotate(-.3deg)", marginBottom:20 }}>
          <div style={{ fontSize:10.5, letterSpacing:2, textTransform:"uppercase", fontWeight:700, color:B.ink, marginBottom:8 }}>{c.mechanismLabel}</div>
          <p style={{ fontSize:14, lineHeight:1.55, fontWeight:500, margin:"0 0 8px", fontStyle:"italic" }}>{c.mechanismBody.split("\n\n")[0]}</p>
          <div style={{ fontSize:11, fontWeight:600, color:B.ink }}>— 49-study review</div>
        </div>
        <Photo src={IMG.ladderY} alt="Toddler climbing yellow woodland potty ladder" ratio="3/4" />
      </div>

      <Band from={BG.lavender} to={BG.white} height={30} />
      <div style={{ background:BG.white, ...P }}>
        <p style={{ fontSize:14, lineHeight:1.65, color:B.soft, margin:"0 0 16px" }}>{c.ctaIntro}</p>
        <a href="#" style={{ color:B.ink, fontSize:15, fontWeight:600, textDecoration:"underline", textUnderlineOffset:4, textDecorationColor:B.teal }}>{c.ctaText}</a>
        <div style={{ marginTop:10, fontSize:12, color:B.muted, fontStyle:"italic", marginBottom:20 }}>{c.ctaFine}</div>
        <Photo src={null} alt="" ratio="3/4" />
      </div>

      <Band from={BG.white} to={BG.warm} />
      <div style={{ background:BG.warm, ...P }}>
        <p style={{ fontSize:11, fontWeight:700, letterSpacing:1.2, textTransform:"uppercase", color:B.tealDeep, margin:"0 0 14px" }}>{c.migrationLabel}</p>
        {c.migrationLinks.map((l,i) => <div key={i} style={{ marginBottom:10, fontSize:14, lineHeight:1.5 }}><a href="#" style={{ color:B.teal, textDecoration:"underline" }}>{l}</a></div>)}
        <p style={{ fontSize:12.5, color:B.muted, margin:"12px 0 0", fontStyle:"italic" }}>{c.migrationFallback}</p>
      </div>

      <ProductShowcaseSoft eyebrow={c.productEyebrow} line={c.productLine} ctaText="See how it works" />
      <div style={{ height:1, background:B.muted, opacity:.12, margin:"0 22px" }} />
      <Signoff /><OutLine /><Footer />
    </EmailShell>
  );
};

/* ═══════════════════ E3 — 60 DAYS ═══════════════════ */
const BrowseE3 = () => {
  const c = window.BROWSE.e3;
  const BG = { hero:"#FFFBF0", cream:"#FFF6E2", white:"#FFFFFF", mint:"#EAF6F2", warm:"#FAF7F0", dark:B.ink };
  const P = { padding:"0 22px 24px" };
  return (
    <EmailShell preheader={c.preheader} bg={BG.hero}>
      <Header bg={BG.hero} />
      <TitleBlock badge={c.heroBadge} part1={c.h1a} part2={c.h1b} subhead={c.subhead} />

      <div style={{ padding:"0 16px 8px" }}><Photo src={IMG.founders} alt="Founders photo" ratio="4/5" /></div>
      <Band from={BG.hero} to={BG.cream} />

      <div style={{ background:BG.cream, ...P }}>
        <p style={{ fontFamily:F.display, fontSize:17, lineHeight:1.6, fontWeight:600, color:B.ink, margin:0 }}>{c.opener}</p>
      </div>

      <Band from={BG.cream} to={BG.white} />
      <div style={{ background:BG.white, ...P }}>
        <Eyebrow color={B.ink}>{c.anchorEyebrow}</Eyebrow>
        {c.anchors.map((a,i) => (
          <div key={i} style={{ marginBottom:8, background:"#FFFFFF", borderRadius:10, border:`2px solid ${B.ink}`, boxShadow:`2px 2px 0 ${B.ink}`, padding:"12px 14px", display:"flex", alignItems:"center", gap:10, transform:`rotate(${[.3,-.4,.2,-.3,.1][i]}deg)` }}>
            <div style={{ width:24, height:24, borderRadius:"50%", background:i<3?B.teal:B.green, color:"#FFF", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, flexShrink:0 }}>{i+1}</div>
            <p style={{ fontSize:13, lineHeight:1.45, color:B.soft, margin:0 }}>{a}</p>
          </div>
        ))}
        <p style={{ fontSize:14, lineHeight:1.55, color:B.ink, fontWeight:500, margin:"12px 0 20px" }}>{c.anchorBridge}</p>
        <Photo src={IMG.potty} alt="Toddler climbing pink potty ladder" ratio="3/4" />
      </div>

      <Band from={BG.white} to={BG.mint} />
      <div style={{ background:BG.mint, ...P }}>
        <div style={{ borderLeft:`3px solid ${B.teal}`, paddingLeft:18, marginBottom:20 }}>
          <Eyebrow>{c.mechanismEyebrow}</Eyebrow>
          {c.mechanismBody.split("\n\n").map((p,i) => <p key={i} style={{ fontSize:14, lineHeight:1.65, color:B.soft, margin:"0 0 10px" }}>{p}</p>)}
        </div>
        <Photo src={IMG.napping} alt="Toddler napping watermelon pink shorts" ratio="3/4" />
      </div>

      <Band from={BG.mint} to={BG.cream} />
      <div style={{ background:BG.cream, ...P }}>
        <Eyebrow color={B.ink}>{c.miniWinsEyebrow}</Eyebrow>
        {c.miniWins.map((w,i) => (
          <div key={i} style={{ marginBottom:8, background:"#FBF7EB", borderRadius:12, border:`2px solid ${B.ink}`, boxShadow:`2px 2px 0 ${B.ink}`, padding:"16px 16px" }}>
            <div style={{ fontSize:30, lineHeight:.7, color:"#D4A853", fontWeight:700, marginBottom:6 }}>{"\u201C"}</div>
            <p style={{ fontSize:13.5, lineHeight:1.55, color:B.soft, margin:"0 0 6px", fontStyle:"italic" }}>{w.quote}</p>
            <div style={{ fontSize:11, color:B.muted, fontWeight:600 }}>— {w.by}</div>
          </div>
        ))}
        <p style={{ fontSize:13.5, lineHeight:1.6, color:B.soft, margin:"10px 0 20px", fontStyle:"italic" }}>{c.miniWinsClosing}</p>
        <Photo src={null} alt="" ratio="3/4" />
      </div>

      <Band from={BG.cream} to={BG.warm} />
      <div style={{ background:BG.warm, ...P }}>
        <Eyebrow color={B.ink}>{c.productEyebrow}</Eyebrow>
        {c.productLayers.map((l,i) => <AnchorCard key={i} dot={B.green}>{l}</AnchorCard>)}
        <p style={{ fontSize:13, lineHeight:1.6, color:B.soft, margin:"8px 0 10px", fontStyle:"italic" }}>{c.productWearGuidance}</p>
        <p style={{ fontSize:14.5, fontWeight:700, color:B.ink, margin:"0 0 20px" }}>{c.productBundles}</p>
        <Photo src={IMG.wmelon} alt="Watermelon flat lay" ratio="3/4" />
      </div>

      <Band from={BG.warm} to={BG.mint} />
      <div style={{ background:BG.mint, ...P, paddingBottom:28 }}>
        <div style={{ background:B.green+"15", borderRadius:16, border:`2px solid ${B.green}`, padding:"28px 22px", textAlign:"center" }}>
          <Eyebrow color={B.ink}>{c.guaranteeLabel}</Eyebrow>
          <div style={{ fontFamily:F.main, fontSize:38, fontWeight:700, color:B.ink, lineHeight:1, marginBottom:6 }}>{c.guaranteeHeadline}</div>
          <div style={{ fontSize:18, fontStyle:"italic", color:B.soft, marginBottom:16 }}>{c.guaranteeSubline}</div>
          <p style={{ fontSize:13.5, lineHeight:1.6, color:B.soft, maxWidth:320, margin:"0 auto 16px", fontStyle:"italic" }}>{c.guaranteeBody}</p>
          {c.guaranteePoints.map((p,i) => (
            <div key={i} style={{ marginBottom:6, background:"#FFFFFF", borderRadius:10, border:`2px solid ${B.ink}`, padding:"10px 14px", boxShadow:`2px 2px 0 ${B.ink}`, display:"flex", alignItems:"center", gap:10, textAlign:"left" }}>
              <div style={{ width:24, height:24, borderRadius:"50%", background:B.green, color:"#FFF", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, flexShrink:0 }}>✓</div>
              <div style={{ fontSize:12.5, lineHeight:1.4 }}><strong>{p.title}</strong> — {p.body}</div>
            </div>
          ))}
        </div>
      </div>

      <Band from={BG.mint} to={BG.dark} height={40} />
      <div style={{ background:BG.dark, padding:"28px 22px 44px", textAlign:"center" }}>
        <p style={{ fontSize:14, lineHeight:1.6, color:"#B8CACD", margin:"0 0 22px" }}>{c.ctaLabel}</p>
        <a href="#" style={{ display:"inline-block", padding:"18px 36px", background:B.green, color:"#FFF", fontSize:15.5, fontWeight:700, letterSpacing:.3, textDecoration:"none", borderRadius:8, boxShadow:`0 4px 12px rgba(0,0,0,.25)` }}>{c.ctaButton}</a>
        {c.ctaFine && <div style={{ marginTop:16, fontSize:11.5, color:"#8A9B9D" }}>{c.ctaFine}</div>}
      </div>

      <div style={{ height:1, background:B.muted, opacity:.12, margin:"0 22px" }} />
      <Signoff /><OutLine /><Footer />
    </EmailShell>
  );
};

Object.assign(window, { BrowseE1, BrowseE2, BrowseE3 });
