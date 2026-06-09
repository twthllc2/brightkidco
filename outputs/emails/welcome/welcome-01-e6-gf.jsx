/* Welcome Flow — E6 | General Family (GF)
   Wireframe: wireframes/welcome/welcome-01-e6-gf.md
   Strategy: strategy-map.json → welcome.emails.e6-gf
   Generated: 2026-06-09
*/

const Email_Welcome_E6_GF = () => (
  <EmailShell
    preheader="The moisture-wicking tech parents pay a premium for might be the exact thing preventing progress."
    bg="#FDF8F5"
  >
    {/* ══════════ SECTION 1: HEADER ══════════ */}
    <Header bg="#FDF8F5" />

    {/* ══════════ SECTION 2: HERO-7 — Counter-Intuitive Truth ══════════ */}
    <div style={{ background: "#FDF8F5", padding: "34px 22px", textAlign: "center" }}>
      {/* Hero lifestyle image */}
      <div style={{
        borderRadius: 20, overflow: "hidden",
        border: `2px solid ${B.ink}`, boxShadow: `6px 6px 0 ${B.ink}`,
        marginBottom: 22,
      }}>
        <ImgFrame
          height={260}
          aspect="3/2"
          label="HERO · LIFESTYLE"
          sublabel="Child playing comfortably in BrightKidCo Body-Signal underwear"
        />
      </div>

      {/* Eyebrow */}
      <div style={{
        fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase",
        color: B.teal, fontWeight: 700, marginBottom: 10,
      }}>
        SIGNAL REFRAME
      </div>

      {/* H1 */}
      <h1 style={{
        fontFamily: F.main, fontSize: 28, lineHeight: 1.15, fontWeight: 700,
        margin: "0 0 12px", letterSpacing: -0.4, color: B.ink,
      }}>
        Whether your child has been in pull-ups for three months or three years, if they never seem to notice when they're wet, there's a reason for that.
      </h1>

      {/* Subhead */}
      <p style={{
        fontSize: 20, lineHeight: 1.4, color: "#555555", margin: "0 0 24px",
        fontWeight: 600,
      }}>
        And it's probably not what you think.
      </p>

      {/* CTA inline */}
      <a href="#" style={{
        display: "inline-block", padding: "14px 28px",
        background: "#D85A30", color: "#FFFFFF", fontSize: 16, fontWeight: 700,
        textDecoration: "none", borderRadius: 6, letterSpacing: 0.3,
      }}>
        Try the Body-Signal approach →
      </a>
    </div>

    {/* ══════════ SECTION 3: GRADIENT BAND — cream → cool blue ══════════ */}
    <Band from="#FDF8F5" to="#E6F1FB" height={40} />

    {/* ══════════ SECTION 4: LETTER-03 — Pull-Up Reframe (PAS) ══════════ */}
    <div style={{ background: "#E6F1FB", padding: "4px 24px 28px" }}>
      {/* Body copy — verbatim from wireframe */}
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2C2C2A", margin: "0 0 14px" }}>
        Whether your child has been in pull-ups for three months or three years, if they never seem to notice when they're wet, there's a reason for that.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2C2C2A", margin: "0 0 14px" }}>
        And it's probably not what you think.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2C2C2A", margin: "0 0 14px" }}>
        Pull-ups are designed to keep kids completely dry. That's literally their job. But here's the catch: that moisture-wicking technology parents pay a premium for, $50 to $100+ every single month, was built for neurotypical kids who can already feel the "I need to go" signal. For those kids, staying dry during training is a helpful feature.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2C2C2A", margin: "0 0 24px" }}>
        For your child? It might be the very thing keeping them stuck.
      </p>

      {/* Blockquote */}
      <div style={{
        borderLeft: "3px solid #D85A30", background: "#FAECE7",
        borderRadius: 8, padding: "20px 20px 20px 20px",
        marginBottom: 24,
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic",
          lineHeight: 1.5, color: "#555555", margin: "0 0 8px",
        }}>
          "She'll pee herself and just keep playing in the puddle. It's like she doesn't care AT ALL."
        </p>
        <p style={{ fontSize: 13, color: "#8A9B9D", margin: 0, fontStyle: "italic" }}>
          — Real parent
        </p>
      </div>

      {/* Validation */}
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2C2C2A", margin: "0 0 20px" }}>
        <strong>That's not a parenting failure. That's a measurable neurological gap.</strong>
      </p>

      {/* SP-03: Stat Row */}
      <div style={{
        background: "#FFFFFF", borderRadius: 12, padding: "20px 22px",
        border: "1px solid #D3D1C7",
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 24, fontWeight: 700,
          color: "#D85A30", lineHeight: 1.2, marginBottom: 6,
        }}>
          49%
        </div>
        <div style={{ fontSize: 14, color: "#2C2C2A", lineHeight: 1.5, marginBottom: 4 }}>
          of autistic 4-5 year olds are not toilet trained yet
        </div>
        <div style={{ fontSize: 12, color: "#8A9B9D" }}>
          Wiggins et al., 2022, CDC/SPARK study
        </div>
      </div>
    </div>

    {/* ══════════ SECTION 5: GRADIENT BAND — cool blue → pale green ══════════ */}
    <Band from="#E6F1FB" to="#E1F5EE" height={40} />

    {/* ══════════ SECTION 6: EDU-12 — Mechanism Comparison Matrix ══════════ */}
    <div style={{ background: "#E1F5EE", padding: "28px 22px" }}>
      {/* H2 */}
      <h2 style={{
        fontFamily: F.main, fontSize: 28, lineHeight: 1.15, fontWeight: 700,
        margin: "0 0 16px", letterSpacing: -0.4, textAlign: "center", color: B.ink,
      }}>
        The 3-Layer Body-Signal Learning System
      </h2>

      {/* 3-Layer Table */}
      <div style={{
        border: `2px solid ${B.ink}`, borderRadius: 12, overflow: "hidden",
        marginBottom: 20,
      }}>
        {/* Header row */}
        <div style={{
          display: "flex", background: B.ink, color: "#FFFFFF",
          fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase",
        }}>
          <div style={{ flex: 1, padding: "10px 14px" }}>Layer</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>What It Does</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>Why It Matters</div>
        </div>
        {/* Row 1 */}
        <div style={{ display: "flex", background: "#FFFFFF", fontSize: 14, color: "#2C2C2A" }}>
          <div style={{ flex: 1, padding: "10px 14px", fontWeight: 700 }}>Layer 1: Inner Cotton</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>Gentle "uh-oh" sensation</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>Teaches the brain: "this is what wet feels like"</div>
        </div>
        {/* Row 2 */}
        <div style={{ display: "flex", background: "#FDF8F5", fontSize: 14, color: "#2C2C2A" }}>
          <div style={{ flex: 1, padding: "10px 14px", fontWeight: 700 }}>Layer 2: Smart Absorption</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>Absorbs 3x more than regular undies</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>Protects without blocking awareness</div>
        </div>
        {/* Row 3 */}
        <div style={{ display: "flex", background: "#FFFFFF", fontSize: 14, color: "#2C2C2A" }}>
          <div style={{ flex: 1, padding: "10px 14px", fontWeight: 700 }}>Layer 3: Protective Barrier</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>Leak-resistant outer layer</div>
          <div style={{ flex: 1, padding: "10px 14px" }}>Saves furniture & clothes</div>
        </div>
      </div>

      {/* Image: 3-Layer cross-section diagram */}
      <div style={{ marginBottom: 20 }}>
        <ImgFrame
          height={200}
          aspect="2/1"
          label="IMG-02: 3-LAYER CROSS-SECTION"
          sublabel="Body-Signal Learning Layer cross-section showing three-layer system"
        />
      </div>

      {/* Pull-Ups vs BKC Comparison Matrix */}
      <h3 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700, color: B.ink,
        margin: "0 0 14px", textAlign: "center",
      }}>
        Pull-Ups vs BrightKidCo
      </h3>
      <div style={{ display: "flex", gap: 10 }}>
        {/* Pull-Ups column */}
        <div style={{
          flex: 1, background: "#FAECE7", borderRadius: 12, padding: "16px 14px",
          border: `2px solid ${B.ink}`,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.ink, marginBottom: 12, textAlign: "center",
          }}>
            PULL-UPS
          </div>
          <div style={{ fontSize: 14, color: "#2C2C2A", marginBottom: 8 }}>✗ Dry</div>
          <div style={{ fontSize: 14, color: "#2C2C2A", marginBottom: 8 }}>✗ $50-100/mo</div>
          <div style={{ fontSize: 14, color: "#2C2C2A", marginBottom: 8 }}>✗ Diaper</div>
          <div style={{ fontSize: 14, color: "#2C2C2A" }}>✗ Blocks</div>
        </div>
        {/* BKC column */}
        <div style={{
          flex: 1, background: "#E1F5EE", borderRadius: 12, padding: "16px 14px",
          border: `2px solid ${B.ink}`,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
            color: B.ink, marginBottom: 12, textAlign: "center",
          }}>
            BRIGHTKIDCO
          </div>
          <div style={{ fontSize: 14, color: "#2C2C2A", marginBottom: 8 }}>✓ Signal</div>
          <div style={{ fontSize: 14, color: "#2C2C2A", marginBottom: 8 }}>✓ $13.33/pair</div>
          <div style={{ fontSize: 14, color: "#2C2C2A", marginBottom: 8 }}>✓ Big kid pride</div>
          <div style={{ fontSize: 14, color: "#2C2C2A" }}>✓ Teaches</div>
        </div>
      </div>
    </div>

    {/* ══════════ SECTION 7: GRADIENT BAND — pale green → cream (hard cut) ══════════ */}
    <div style={{ padding: "0 22px" }}>
      <div style={{ height: 1, background: "#D3D1C7", opacity: 0.8 }} />
    </div>

    {/* ══════════ SECTION 8: SOCIAL PROOF — Blockquotes ══════════ */}
    <div style={{ background: "#FAF8F5", padding: "24px 22px" }}>
      {/* Blockquote 1 */}
      <div style={{
        borderLeft: "3px solid #D85A30", background: "#FAECE7",
        borderRadius: 8, padding: "20px 20px 20px 20px", marginBottom: 14,
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic",
          lineHeight: 1.5, color: "#555555", margin: "0 0 8px",
        }}>
          "She started doing better once I eased up on the stressing out about her not getting it."
        </p>
        <p style={{ fontSize: 13, color: "#8A9B9D", margin: 0, fontStyle: "italic" }}>
          — Lynne C., real parent
        </p>
      </div>
      {/* Blockquote 2 */}
      <div style={{
        borderLeft: "3px solid #D85A30", background: "#FAECE7",
        borderRadius: 8, padding: "20px 20px 20px 20px",
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 16, fontStyle: "italic",
          lineHeight: 1.5, color: "#555555", margin: "0 0 8px",
        }}>
          "Potty training isn't linear. Some days are great. Others aren't. That's not starting over, that's how learning happens."
        </p>
        <p style={{ fontSize: 13, color: "#8A9B9D", margin: 0, fontStyle: "italic" }}>
          — From our community
        </p>
      </div>
    </div>

    {/* ══════════ SECTION 9: TRUST-2 — 60-Day Guarantee Detail Cards ══════════ */}
    <div style={{ background: "#FAF8F5", padding: "28px 22px" }}>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2C2C2A", margin: "0 0 16px" }}>
        This is the honest part: every child's nervous system is different. Some kids show first awareness in 2 weeks. For others it takes 8 weeks or more. Both are normal.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#2C2C2A", margin: "0 0 20px" }}>
        That's why the 60-Day Guarantee exists. Try the Body-Signal approach for 60 days. If you see any sign of awareness, a pause, a look down, a step toward the potty, you'll know the signal is working. If nothing changes, full refund. Your judgment.
      </p>

      {/* Guarantee Card */}
      <div style={{
        background: "#FFD866", borderRadius: 16, padding: "20px 22px",
        border: `2px solid ${B.ink}`, textAlign: "center", marginBottom: 20,
      }}>
        {/* Shield icon */}
        <svg width="40" height="40" viewBox="0 0 40 40" style={{ marginBottom: 10 }}>
          <path d="M20 4 L34 12 L34 22 C34 30 28 36 20 38 C12 36 6 30 6 22 L6 12 Z"
            stroke={B.ink} strokeWidth="1.5" fill="none" />
          <path d="M14 20 L18 24 L26 16" stroke={B.ink} strokeWidth="1.5" fill="none"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ fontSize: 14, fontWeight: 700, color: B.ink, marginBottom: 4 }}>
          60-Day Guarantee · Your Judgment
        </div>
        <div style={{ fontSize: 12, color: "#8A9B9D" }}>
          If nothing changes, full refund
        </div>
      </div>

      <p style={{
        fontFamily: F.display, fontSize: 17, fontStyle: "italic",
        lineHeight: 1.5, color: "#4A6568", margin: 0, textAlign: "center",
      }}>
        "You don't have to believe me. You just have to try."
      </p>
    </div>

    {/* ══════════ SECTION 10: PRODUCT SHOWCASE — 3+3 Bundle ══════════ */}
    <ProductShowcaseFull
      eyebrow="THE PRODUCT"
      title="Body-Signal Learning Layer™"
      titleAccent="Pants"
      sub="60-day calm-progress guarantee. Return anytime, any reason."
      priceFrom="$79.99"
      priceNote="$13.33 per pair with the bundle — less than half the single-pair price."
      ctaButton="Shop the 3+3 Bundle"
    />

    {/* ══════════ SECTION 11: PS LINE ══════════ */}
    <div style={{ background: "#FAF8F5", padding: "20px 22px" }}>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        <strong>P.S.</strong> The average parent spends $600-1,200/year on pull-ups. One BrightKidCo pair costs less than two weeks of disposables, and it actually teaches body awareness instead of blocking it.
      </p>
    </div>

    {/* ══════════ SECTION 12: CTA-5 — Bottom CTA ══════════ */}
    <div style={{ background: B.ink, padding: "20px 22px 44px", textAlign: "center" }}>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#B8CACD", margin: "0 0 24px" }}>
        Try the Body-Signal approach for 60 days. By your judgment.
      </p>
      <a href="#" style={{
        display: "inline-block", padding: "17px 32px",
        background: "#D8F57C", color: B.ink, fontSize: 15.5, fontWeight: 700,
        textDecoration: "none", borderRadius: 999, letterSpacing: 0.3,
      }}>
        Shop the 3+3 Bundle, $79.99, Free Shipping →
      </a>
      <div style={{ marginTop: 16, fontSize: 11.5, color: "#8A9B9D" }}>
        ✓ Free shipping · ✓ 60-Day Money-Back Guarantee · ✓ Secure checkout
      </div>
    </div>

    {/* ══════════ SECTION 13: LENA SIGNOFF (MEDIUM→LONG) ══════════ */}
    <div style={{ background: B.ink, padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 22,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* Gradient accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: B.gradient, opacity: 0.9,
        }} />

        {/* Avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
            background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden", border: `1.5px solid ${B.ink}`,
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill={B.ink} fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase",
              color: "#8FAFB2", fontWeight: 700, marginBottom: 2,
            }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Founder · BrightKidCo · Mom of two
            </div>
          </div>
        </div>

        {/* Signature flourish */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              With care,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
              fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
            }}>
              Lena
            </div>
          </div>
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Personal paragraphs — MEDIUM→LONG */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD" }}>
          <p style={{ margin: "0 0 12px" }}>
            I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. I know what it's like to look at a pull-up package and wonder if you're making the right call, or to buy something new and feel the same disappointment when nothing changes.
          </p>
          <p style={{ margin: "0 0 12px" }}>
            I'm not here to sell you hope. I'm here to explain how the signal works, and let you decide if it's right for your child.
          </p>
          <p style={{ margin: 0 }}>
            If you have questions, just hit reply. You'll get me, not a bot.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════ SECTION 14: FOOTER ══════════ */}
    <div style={{ background: B.ink, padding: "20px 22px 36px", textAlign: "center" }}>
      <div style={{ fontSize: 12, color: "#8A9B9D", marginBottom: 8 }}>
        BrightKidCo
      </div>
      <div style={{ fontSize: 11, color: "#8A9B9D", marginBottom: 12, lineHeight: 1.5 }}>
        1234 Commerce Street, Suite 200, Los Angeles, CA 90017
      </div>
      <div style={{ fontSize: 11, color: "#8A9B9D", marginBottom: 8 }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
        {" · "}
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
      </div>
      <div style={{ fontSize: 11, color: "#8A9B9D" }}>
        Questions? Reply to this email, we read every response.
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E6_GF });
