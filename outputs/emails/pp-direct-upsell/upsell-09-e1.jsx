/* PP-Direct Upsell — E1 | Cross-Level (R1-R6)
   Wireframe: wireframes/pp-direct-upsell/upsell-09-e1.md
   Copy: copy/pp-direct-upsell/upsell-09-e1.md
   Strategy: strategy-map.json → pp-direct-upsell.emails.e1
   Generated: 2026-06-09
*/

const Email_pp_direct_upsell_09_e1 = () => (
  <EmailShell preheader="One small add-on that keeps the signal layer working wash after wash" bg="#FAF9F7">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: FROM NAME
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px 16px", borderBottom: "1px solid #E5E5E5" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-2 Warm Hero (Editorial Split)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "48px 24px 40px" }}>

      {/* Eyebrow */}
      <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "#8A9B9D", fontWeight: 700, fontFamily: F.main, marginBottom: 20 }}>
        CARE GUIDE
      </div>

      {/* Two-column: left 60% text, right 40% SVG illustration */}
      <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            {/* Left column — Headline */}
            <td style={{ verticalAlign: "top", width: "60%", paddingRight: 16 }}>
              <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 400, lineHeight: 1.4, letterSpacing: -0.3, color: "#1F2D2F", margin: 0 }}>
                How to make your Body-Signal underwear last longer
              </h1>
            </td>
            {/* Right column — Wash Bag SVG Illustration */}
            <td style={{ verticalAlign: "middle", width: "40%", textAlign: "right" }}>
              <svg width="240" height="240" viewBox="0 0 240 240" style={{ display: "block", marginLeft: "auto" }}>
                {/* Mesh bag body — warm grey outline */}
                <rect x="30" y="40" width="180" height="170" rx="16" fill="none" stroke="#D4C9B8" strokeWidth="1" />
                {/* Mesh micro-dot pattern */}
                {[...Array(8)].map((_, row) =>
                  [...Array(9)].map((_, col) => (
                    <circle key={`dot-${row}-${col}`}
                      cx={50 + col * 20}
                      cy={60 + row * 20}
                      r="2"
                      fill="#E8E0D4"
                      opacity="0.15"
                    />
                  ))
                )}
                {/* Emerald zipper accent line */}
                <line x1="30" y1="40" x2="210" y2="40" stroke="#039902" strokeWidth="1" opacity="0.8" />
                {/* Zipper pull — subtle spiral easter egg (6px, 3 rotations) */}
                <circle cx="120" cy="36" r="6" fill="none" stroke="#C4BBA8" strokeWidth="0.5" />
                <path d="M120,36 Q123,33 120,30 Q117,33 120,36" fill="none" stroke="#C4BBA8" strokeWidth="0.5" />
                <path d="M120,36 Q126,33 120,27 Q114,33 120,36" fill="none" stroke="#C4BBA8" strokeWidth="0.5" />
                <path d="M120,36 Q129,33 120,24 Q111,33 120,36" fill="none" stroke="#C4BBA8" strokeWidth="0.5" />
                {/* Faint underwear silhouette inside */}
                <ellipse cx="120" cy="130" rx="40" ry="30" fill="none" stroke="#C4BBA8" strokeWidth="1" opacity="0.2" />
                <path d="M80,130 Q80,165 95,175 L120,180 L145,175 Q160,165 160,130" fill="none" stroke="#C4BBA8" strokeWidth="1" opacity="0.2" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HOOK — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A4A4A", margin: 0 }}>
        Your order arrived a few days ago. You've got the Body-Signal underwear in hand, and your child is starting to explore the sensation. Whether they're already showing awareness, a pause, a look, a pull at the pants, or still in the familiarization phase, the underwear is doing its work every time they wear it. The question now is how to keep it working well, wash after wash.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: VALIDATION — LETTER-01 Paragraph Stack + Warning Callout
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "32px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A4A4A", margin: "0 0 20px" }}>
        The Body-Signal Learning Layer is the key mechanism, that's the cotton inner layer that creates the gentle sustained "uh-oh" sensation after every accident. This what bridges the interoception gap, giving your child's brain the feedback it's been missing. But here's what most parents don't realize: standard washing machine cycles, with their aggressive agitation and high heat, can break down the signal-preserving properties of that inner layer over time. The cotton fibers that make the learning mechanism work need gentler care. Without it, the very layer that's doing the neurological teaching starts to lose effectiveness, and the learning window narrows with every wash that's too harsh.
      </p>
      {/* Warning callout box */}
      <div style={{ background: "#E8E0D4", borderRadius: 4, padding: 20, borderLeft: "3px solid #D4C9B8" }}>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 15, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
          Standard wash cycles break down signal-preserving properties over time.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: MECHANISM — EDU-10 How It Works
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      <div style={{ position: "relative", paddingLeft: 20 }}>
        {/* 2px emerald left border at 50% opacity */}
        <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: "rgba(3, 153, 2, 0.5)" }} />
        {/* Eyebrow */}
        <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 500, letterSpacing: 0.15, textTransform: "uppercase", color: "#039902", marginBottom: 10 }}>
          how it works
        </div>
        {/* Product detail header */}
        <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: "#1F2D2F", margin: "0 0 4px" }}>
          The BrightKidCo Wash Bag
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 16px" }}>
          $14.99
        </p>
        <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A4A4A", margin: "0 0 18px" }}>
          The BrightKidCo Wash Bag ($14.99) was designed for exactly this reason. It's a dedicated mesh laundry bag that protects the Body-Signal Learning Layer during machine washing. You toss the underwear inside, zip it up, and run your regular cycle. The mesh barriers reduce abrasion, prevent the cotton from over-agitating, and maintain the structural integrity that makes the signal mechanism work. One Wash Bag covers up to 6 pairs, the same capacity as the 3+3 Bundle rotation. It's a one-time purchase that extends the functional life of every pair you own. Same commitment to sensory-friendly materials, soft, no tags, no rough edges.
        </p>
        {/* Diamond bullet features */}
        <div style={{ marginBottom: 4 }}>
          <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 10px" }}>
            <span style={{ color: "#039902", marginRight: 8 }}>◆</span> Mesh barriers reduce abrasion
          </p>
          <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 10px" }}>
            <span style={{ color: "#039902", marginRight: 8 }}>◆</span> Prevents cotton from over-agitating
          </p>
          <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 10px" }}>
            <span style={{ color: "#039902", marginRight: 8 }}>◆</span> Maintains structural integrity
          </p>
          <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 10px" }}>
            <span style={{ color: "#039902", marginRight: 8 }}>◆</span> Covers up to 6 pairs
          </p>
          <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
            <span style={{ color: "#039902", marginRight: 8 }}>◆</span> One-time purchase
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: PRODUCT — ProductShowcaseFull
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* Product image placeholder */}
      <ImgFrame
        height={400}
        label="WASH BAG PRODUCT PHOTO"
        sublabel="BrightKidCo mesh wash bag for body-signal underwear — 600×400px flat-lay"
        aspect="3/2"
      />
      {/* Product copy */}
      <p style={{ fontFamily: F.main, fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: "#1F2D2F", margin: "20px 0 8px" }}>
        Sensory-friendly materials
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A4A4A", margin: 0 }}>
        Soft, no tags, no rough edges. Same commitment as the underwear you're already wearing.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: TESTIMONIAL — SP-04 Trust Pills Row
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 8, padding: 24 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 12px" }}>
          "I didn't think a laundry bag mattered until I saw the difference at week four. The underwear held up better, and I wasn't replacing pairs as fast."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.3, color: "#8A9B9D", margin: 0 }}>
          — Real parent
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: TRUST — TRUST-8 Trust Icons Row
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 24px" }}>
      <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#8A9B9D", textAlign: "center", padding: "8px 0" }}>
              ✓ 60-Day Guarantee &nbsp;·&nbsp; ✓ Sensory-Friendly Materials &nbsp;·&nbsp; ✓ One-Time Purchase
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: CTA — FLOW-8 Post-Purchase Education
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <a href="https://www.brightkidco.com/products/wash-bag" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#039902",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 1.2,
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: 8,
        height: 48,
        lineHeight: "48px",
        textAlign: "center",
      }}>
        Add the Wash Bag to your routine
      </a>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", margin: "16px 0 0" }}>
        <a href="#" style={{ color: "#4A6568", textDecoration: "underline" }}>
          Learn more about caring for your Body-Signal underwear
        </a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: NEXT TEASER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, fontStyle: "italic", color: "#8A9B9D", margin: 0 }}>
        Next time: One thing every parent wishes they'd bought sooner.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: LENA SIGN-OFF — SHORT variant (E1-E2)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 4px" }}>
        Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.
      </p>
      <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Lena —,
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px 16px", textAlign: "center" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12, lineHeight: 1.3, color: "#8A9B9D", margin: "0 0 6px" }}>
        BrightKidCo · [Physical Address]
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12, lineHeight: 1.3, color: "#8A9B9D", margin: "0 0 6px" }}>
        If you'd prefer not to receive future emails, <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>unsubscribe here</a>.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 12, lineHeight: 1.3, color: "#8A9B9D", margin: 0 }}>
        Reply to this email, Lena reads every response.
      </p>
    </div>

  </EmailShell>
);

window.EMAILS["pp-direct-upsell/upsell-09-e1"] = Email_pp_direct_upsell_09_e1;
