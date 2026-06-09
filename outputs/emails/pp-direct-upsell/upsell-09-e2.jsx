/* PP-Direct Upsell — E2 | Cross-Level (R1-R6)
   Wireframe: wireframes/pp-direct-upsell/upsell-09-e2.md
   Copy: copy/pp-direct-upsell/upsell-09-e2.md
   Strategy: strategy-map.json → flows.pp-direct-upsell.emails.e2
   Generated: 2026-06-09
*/

const Email_pp_direct_upsell_09_e2 = () => (
  <EmailShell preheader="The mattress protector that doesn't feel like a mattress protector. Cotton-side up, no crinkles, no plastic feel." bg="#FAF9F7">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: FROM NAME
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px 16px", borderBottom: "1px solid #E6E2DC" }}>
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: BRAND WORDMARK (centered)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "48px 24px 24px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-13 Scientific Hook
       Split-frame visual: child sleeping + cross-section protector layers
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "0 0 24px" }}>

      {/* Split-frame hero illustration — SVG cutaway */}
      <div style={{ width: "100%", position: "relative" }}>
        <svg width="100%" height="340" viewBox="0 0 552 340" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
          {/* Background — warm cream */}
          <rect width="552" height="340" fill="#FAF9F7" />

          {/* Left half — Child sleeping silhouette under duvet */}
          {/* Duvet / bed */}
          <rect x="20" y="140" width="250" height="140" rx="16" fill="#F0EEEB" opacity="0.8" />
          {/* Pillow */}
          <ellipse cx="80" cy="160" rx="50" ry="22" fill="#FFFFFF" opacity="0.9" />
          {/* Child silhouette — intentionally no facial features */}
          <circle cx="90" cy="115" r="28" fill="#E8E0D4" opacity="0.7" />
          {/* Body under duvet hint */}
          <path d="M62,143 Q90,130 118,143 L118,200 Q90,195 62,200 Z" fill="#E8E0D4" opacity="0.5" />
          {/* Body-Signal underwear hint — small teal accent */}
          <rect x="78" y="138" width="24" height="8" rx="4" fill="#2BAEB4" opacity="0.35" />
          {/* Duvet fold line */}
          <path d="M30,180 Q140,170 250,180" stroke="#D8D4CE" strokeWidth="1.5" fill="none" />

          {/* Right half — Cross-section cutaway */}
          {/* Cotton top layer */}
          <rect x="290" y="100" width="240" height="50" rx="6" fill="#E8E0D4" opacity="0.4" />
          {/* Cotton fiber strokes */}
          <line x1="310" y1="115" x2="340" y2="135" stroke="#E8E0D4" strokeWidth="2" opacity="0.5" />
          <line x1="350" y1="112" x2="380" y2="138" stroke="#E8E0D4" strokeWidth="2" opacity="0.4" />
          <line x1="400" y1="118" x2="430" y2="132" stroke="#E8E0D4" strokeWidth="2" opacity="0.5" />
          <line x1="450" y1="114" x2="480" y2="136" stroke="#E8E0D4" strokeWidth="2" opacity="0.4" />
          <text x="410" y="128" textAnchor="middle" fontSize="10" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif" opacity="0.7">COTTON TOP</text>

          {/* Waterproof membrane — blue-white gradient */}
          <defs>
            <linearGradient id="membraneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D6E5F0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8F0F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <rect x="290" y="155" width="240" height="40" rx="4" fill="url(#membraneGrad)" />
          <text x="410" y="178" textAnchor="middle" fontSize="10" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif" opacity="0.7">WATERPROOF MEMBRANE</text>

          {/* Mattress — muted warm gray */}
          <rect x="290" y="200" width="240" height="80" rx="6" fill="#E8E4E0" opacity="0.7" />
          {/* Shield icon — thin gold outline */}
          <path d="M410,215 L410,255 M400,220 L410,210 L420,220 L420,248 L410,258 L400,248 Z" stroke="#FFD866" strokeWidth="1.5" fill="none" opacity="0.8" />
          <text x="410" y="272" textAnchor="middle" fontSize="10" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif" opacity="0.7">MATTRESS</text>

          {/* Signal-path dotted arc — child → protector → mattress */}
          <path d="M90,140 Q200,60 410,100" stroke="#2BAEB4" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M410,100 Q410,140 410,200" stroke="#2BAEB4" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
          </path>

          {/* Divider line between halves */}
          <line x1="276" y1="60" x2="276" y2="300" stroke="#E6E2DC" strokeWidth="1" opacity="0.5" />

          {/* Cotton seed easter egg — bottom-right, 20% opacity */}
          <g opacity="0.2" transform="translate(510, 310)">
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="none" stroke="#8A9B9D" strokeWidth="1" />
            <line x1="0" y1="-4" x2="0" y2="-10" stroke="#8A9B9D" strokeWidth="1" />
            <path d="M-3,-10 Q0,-14 3,-10" stroke="#8A9B9D" strokeWidth="0.8" fill="none" />
          </g>
        </svg>
      </div>

      {/* Eyebrow + Headline overlay */}
      <div style={{ padding: "0 32px" }}>
        <div style={{ fontFamily: F.main, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#8A9B9D", marginBottom: 10 }}>
          LEARNING PHASE PROTECTION
        </div>
        <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 400, lineHeight: 1.4, letterSpacing: "0.03em", color: "#2D2A24", margin: 0 }}>
          One thing every parent wishes they'd bought sooner
        </h1>
      </div>
    </div>

    {/* ── Divider: thin line + centered emerald diamond ◇ ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: HOOK — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: "0 0 14px" }}>
        You've got the Body-Signal underwear. You're in the early days of the learning phase. Here's what no one tells you about that: accidents aren't a sign it isn't working. They're the whole point. The wetness signal is what teaches the nervous system. But while your child's brain is learning to read that signal, your furniture is doing the absorbing.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: 0 }}>
        That's where the BrightKidCo Mattress Protector comes in. Not because we're trying to sell you another thing. Because I wish someone had told me about it before my older son went through his learning phase, and I had to replace a mattress.
      </p>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION — LETTER-01 Paragraph Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "32px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: "0 0 14px" }}>
        The learning phase is messy. Intentionally. Your child needs to feel the wetness to build the neural pathway. That means some mornings you'll strip the bed. Some naps end with damp sheets. Some car rides require the seat cover. None of that means anything is wrong, it means your child's nervous system is getting the feedback it's been missing.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: 0 }}>
        But what happens to the mattress underneath? If you're anything like me, you've been layering towels and hoping for the best. You shouldn't have to choose between letting the signal work and protecting your furniture.
      </p>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: MECHANISM — ED1 3-Layer Product Diagram
       Cutaway illustration + copy
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>

      {/* Section header */}
      <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 700, color: "#1F2D2F", marginBottom: 16 }}>
        3-Layer Protection
      </div>

      {/* Cutaway illustration — Ethereal Glass style */}
      <div style={{ width: "100%", marginBottom: 20 }}>
        <svg width="100%" height="200" viewBox="0 0 552 200" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
          <rect width="552" height="200" fill="#FFFFFF" />

          {/* Layer 1: Cotton fibers — warm cream strokes */}
          <rect x="60" y="20" width="432" height="45" rx="6" fill="#E8E0D4" opacity="0.3" />
          <line x1="100" y1="30" x2="140" y2="55" stroke="#E8E0D4" strokeWidth="2.5" opacity="0.5" />
          <line x1="180" y1="28" x2="220" y2="58" stroke="#E8E0D4" strokeWidth="2.5" opacity="0.4" />
          <line x1="260" y1="32" x2="300" y2="52" stroke="#E8E0D4" strokeWidth="2.5" opacity="0.5" />
          <line x1="340" y1="29" x2="380" y2="56" stroke="#E8E0D4" strokeWidth="2.5" opacity="0.4" />
          <line x1="420" y1="31" x2="460" y2="53" stroke="#E8E0D4" strokeWidth="2.5" opacity="0.5" />
          <text x="276" y="48" textAnchor="middle" fontSize="11" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif" fontWeight="500" letterSpacing="0.5">COTTON FIBERS</text>

          {/* Layer 2: Waterproof membrane — blue-white gradient */}
          <defs>
            <linearGradient id="memGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D6E5F0" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#E8F0F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D6E5F0" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect x="60" y="72" width="432" height="40" rx="4" fill="url(#memGrad2)" />
          <text x="276" y="96" textAnchor="middle" fontSize="11" fill="#4A6568" fontFamily="Helvetica, Arial, sans-serif" fontWeight="500" letterSpacing="0.5">BREATHABLE WATERPROOF MEMBRANE</text>

          {/* Layer 3: Mattress — muted warm gray */}
          <rect x="60" y="120" width="432" height="55" rx="6" fill="#E8E4E0" opacity="0.6" />
          {/* Shield icon — thin gold outline */}
          <path d="M276,130 L276,160 M268,134 L276,126 L284,134 L284,156 L276,164 L268,156 Z" stroke="#FFD866" strokeWidth="1.5" fill="none" opacity="0.7" />
          <text x="276" y="170" textAnchor="middle" fontSize="11" fill="#8A9B9D" fontFamily="Helvetica, Arial, sans-serif" fontWeight="500" letterSpacing="0.5">PROTECTED MATTRESS</text>

          {/* Signal-path dotted arc — animated on Apple Mail */}
          <path d="M276,10 Q276,100 276,180" stroke="#2BAEB4" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.35">
            <animate attributeName="opacity" values="0.35;0.7;0.35" dur="5s" repeatCount="indefinite" />
          </path>
          {/* Small dots along path */}
          <circle cx="276" cy="30" r="2" fill="#2BAEB4" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="276" cy="60" r="2" fill="#2BAEB4" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="276" cy="90" r="2" fill="#2BAEB4" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="276" cy="120" r="2" fill="#2BAEB4" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Copy — verbatim */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: "0 0 14px" }}>
        Standard waterproof mattress protectors feel like what they are, plastic bags under a sheet. They crinkle. They trap heat. They turn the bed into an uncomfortable sensory experience, which is exactly the wrong thing for a child who's already navigating sensory differences.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: 0 }}>
        The BrightKidCo Mattress Protector ($24.99) is built the same way the underwear is: cotton facing on top, breathable waterproof barrier in the middle, no crinkles, no plastic feel. Your child sleeps on cotton, the same cotton they're wearing in their Body-Signal underwear. There's nothing new to adjust to. The protection is invisible.
      </p>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: BENEFIT CARDS — Z-Axis Cascade
       3 stacked cards with progressive emerald border opacity
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>

      {/* Card 1 — 80% emerald border, slight left rotation */}
      <div style={{
        background: "#F0EEEB", borderRadius: 8, padding: "20px 24px",
        borderLeft: "2px solid rgba(3, 153, 2, 0.8)",
        marginBottom: 16, transform: "rotate(-1deg)",
      }}>
        <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em", color: "#1F2D2F", textTransform: "lowercase", marginBottom: 6 }}>
          cotton top
        </div>
        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#5C5A55" }}>
          same fabric as underwear
        </div>
      </div>

      {/* Card 2 — 60% emerald border, slight right rotation */}
      <div style={{
        background: "#F0EEEB", borderRadius: 8, padding: "20px 24px",
        borderLeft: "2px solid rgba(3, 153, 2, 0.6)",
        marginBottom: 16, transform: "rotate(1deg)",
      }}>
        <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em", color: "#1F2D2F", textTransform: "lowercase", marginBottom: 6 }}>
          breathable membrane
        </div>
        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#5C5A55" }}>
          no crinkles
        </div>
      </div>

      {/* Card 3 — 40% emerald border, no rotation */}
      <div style={{
        background: "#F0EEEB", borderRadius: 8, padding: "20px 24px",
        borderLeft: "2px solid rgba(3, 153, 2, 0.4)",
      }}>
        <div style={{ fontFamily: F.main, fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em", color: "#1F2D2F", textTransform: "lowercase", marginBottom: 6 }}>
          protection
        </div>
        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#5C5A55" }}>
          12-inch fit
        </div>
      </div>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: PRODUCT SHOWCASE — ProductShowcaseFull
       Mattress protector with specs + cross-sell
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>

      {/* Product image placeholder */}
      <ImgFrame height={260} label="Mattress Protector" sublabel="Cotton-facing side visible · 600×400px" />

      {/* Price callout — emerald, only colored text outside CTA */}
      <div style={{ fontFamily: F.main, fontSize: 20, fontWeight: 400, color: "#039902", marginTop: 20, marginBottom: 12, textAlign: "center" }}>
        $24.99
      </div>

      {/* Specs — verbatim */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: "0 0 14px" }}>
        The Mattress Protector ($24.99) fits mattresses up to 12 inches deep. Same cotton top that your child is already wearing in their Body-Signal underwear. Breathable waterproof membrane, so the mattress stays dry without trapping heat. Machine washable. Tumble dry low. Add it to your next order, or pick it up now if the learning phase is actively happening in your home.
      </p>

      {/* Cross-sell reference to E1's Wash Bag */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", margin: 0 }}>
        The Wash Bag ($14.99) from E1 pairs with it naturally: the Wash Bag preserves the Body-Signal Layer in your underwear, and the Mattress Protector protects your furniture while the signal does its work.
      </p>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: TESTIMONIALS — SP-04 Trust Pills Row
       2 parent testimonials, utility-focused
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>

      {/* Testimonial 1 */}
      <div style={{ background: "#FFFFFF", borderRadius: 8, padding: 24, marginBottom: 16 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 10px" }}>
          "Wish I'd bought this with my first order instead of my third."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>
          — L2 mom
        </p>
      </div>

      {/* Testimonial 2 */}
      <div style={{ background: "#FFFFFF", borderRadius: 8, padding: 24 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: "0 0 10px" }}>
          "This one actually stays put. Doesn't slide off the corner. And my kid doesn't fight bedtime anymore because it doesn't feel different from his sheet."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: 0 }}>
          — Parent of 6yo
        </p>
      </div>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: GUARANTEE — TRUST-2 Detail Cards
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>

      {/* Guarantee copy — verbatim */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#5C5A55", marginBottom: 20 }}>
        Same guarantee as everything we make: 60 days. If the protector doesn't fit, doesn't hold up, or doesn't make your life easier, full refund. No questions. Your judgment.
      </p>

      {/* Three trust cards stacked */}
      {/* Card 1: 60-Day Guarantee */}
      <div style={{ background: "#F0EEEB", borderRadius: 8, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>
          ✓ 60-Day Guarantee
        </div>
        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#5C5A55" }}>
          Full refund
        </div>
      </div>

      {/* Card 2: No Questions */}
      <div style={{ background: "#F0EEEB", borderRadius: 8, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>
          ✓ Full Refund, No Questions
        </div>
        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#5C5A55" }}>
          Your judgment
        </div>
      </div>

      {/* Card 3: Your Judgment */}
      <div style={{ background: "#F0EEEB", borderRadius: 8, padding: "16px 20px" }}>
        <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#1F2D2F", marginBottom: 4 }}>
          ✓ Your Judgment
        </div>
        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#5C5A55" }}>
          You decide
        </div>
      </div>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CTA — CTA-5 Product CTA
       Emerald primary button + secondary link + trust signals
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>

      {/* Primary CTA button — emerald #039902 */}
      <a href="https://www.brightkidco.com/products/mattress-protector" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#039902",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "0.5px",
        textDecoration: "none",
        borderRadius: 8,
        height: 48,
        lineHeight: "48px",
        textAlign: "center",
        transition: "transform 0.2s ease-out",
      }}>
        Protect your furniture during the learning phase
      </a>

      {/* Secondary link */}
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 400, color: "#4A6568", margin: "16px 0 0" }}>
        Or add the Wash Bag too, $39.98 for both
      </p>

      {/* Trust signals */}
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, color: "#8A9B9D", margin: "12px 0 0" }}>
        ✓ Free shipping · ✓ 60-day returns
      </p>
    </div>

    {/* ── Divider ── */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
        <span style={{ fontSize: 10, color: "#039902", lineHeight: 1 }}>◇</span>
        <div style={{ flex: 1, height: 1, background: "#E6E2DC" }} />
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: LENA SIGN-OFF — LONG variant (E2+)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 4px" }}>
        Thanks for being here. If you have a question about the learning phase, the mattress protector, anything, hit reply. You'll get me, not a template, not a bot. I read everything.
      </p>
      <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Lena ——
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "16px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.3, color: "#8A9B9D", margin: "0 0 8px", textAlign: "center" }}>
        BrightKidCo
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.3, color: "#8A9B9D", margin: "0 0 8px", textAlign: "center" }}>
        [Physical Address]
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.3, color: "#8A9B9D", margin: "0 0 8px", textAlign: "center" }}>
        <a href="{{unsubscribe_url}}" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.3, color: "#8A9B9D", margin: 0, textAlign: "center" }}>
        Reply to this email, Lena reads every response.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_pp_direct_upsell_09_e2 });
window.EMAILS = window.EMAILS || {};
window.EMAILS["pp-direct-upsell/upsell-09-e2"] = Email_pp_direct_upsell_09_e2;
