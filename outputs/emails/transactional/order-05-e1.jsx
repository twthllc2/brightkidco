/* Transactional Order Confirmation — E1 | Cross-Level
   Wireframe: wireframes/transactional/order-05-e1.md
   Strategy: strategy-map.json → transactional.emails.e1
   Generated: 2026-06-09
*/

const Email_transactional_order_05_e1 = () => (
  <EmailShell preheader="Your BrightKidCo order is locked in. Here's what your first week looks like, and what to expect when the package lands." bg="#FBF7F1">

    {/* Apple Mail animation for Signal Arrival illustration */}
    <style>{`
      @keyframes signalDotPulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      @keyframes signalGlowPulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
    `}</style>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#8A9B9D" }}>
        Your BrightKidCo order is locked in. Here's what your first week looks like, and what to expect when the package lands.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>
    <div style={{ background: "#FFFFFF", padding: "8px 20px 24px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568" }}>
        Lena from BrightKidCo
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-2 Warm Hero
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "48px 32px" }}>
      <h1 style={{
        fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.15,
        letterSpacing: -0.3, color: "#1F2D2F", margin: "0 0 16px", textAlign: "center",
      }}>
        Your order is confirmed ✓
      </h1>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 500, lineHeight: 1.5,
        color: "#4A6568", margin: "0 0 32px", textAlign: "center",
      }}>
        Thank you, your order is placed and being prepped.
      </p>
      <div style={{ textAlign: "center" }}>
        <a href="#" style={{
          display: "inline-block", padding: "0 32px", height: 52, lineHeight: "52px",
          background: "#2BAEB4", color: "#D8F57C", fontFamily: F.main,
          fontSize: 15.5, fontWeight: 700, letterSpacing: 0.3,
          textDecoration: "none", borderRadius: 8, textAlign: "center",
        }}>
          Track your order
        </a>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: RECEIPT CARD — Order Details
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "0 32px 44px" }}>
      <div style={{
        background: "#FFFFFF", border: "1px solid #E5E5E5", borderRadius: 8,
        padding: "24px 22px",
      }}>
        {/* "Your Order:" header */}
        <p style={{
          fontFamily: F.main, fontSize: 18, fontWeight: 600, color: "#1F2D2F",
          margin: "0 0 16px",
        }}>
          Your Order:
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "#E5E5E5", margin: "0 0 16px" }} />

        {/* Product name */}
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
          lineHeight: 1.8, color: "#1F2D2F", margin: "0 0 16px",
        }}>
          3+3 Body-Signal Learning Layer Bundle (6 pairs)
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "#E5E5E5", margin: "0 0 16px" }} />

        {/* Order number */}
        <p style={{
          fontFamily: "'Courier New', Courier, monospace", fontSize: 14,
          fontWeight: 400, color: "#999999", margin: "0 0 12px",
        }}>
          Order #: BKC-[ORDER_NUMBER]
        </p>

        {/* Shipping address */}
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
          fontWeight: 400, color: "#8A9B9D", margin: "0 0 8px",
        }}>
          Shipping to: [SHIPPING_ADDRESS]
        </p>

        {/* Estimated delivery */}
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
          fontWeight: 400, color: "#8A9B9D", margin: "0 0 16px",
        }}>
          Estimated delivery: [DELIVERY_DATE]
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "#E5E5E5", margin: "0 0 16px" }} />

        {/* Tracking note */}
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
          fontWeight: 400, lineHeight: 1.6, color: "#8A9B9D", margin: "0 0 8px",
        }}>
          Tracking: You'll receive a shipping notification with tracking as soon as it leaves our facility.
        </p>
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
          fontWeight: 400, lineHeight: 1.6, color: "#8A9B9D", margin: 0,
        }}>
          We'll send you a tracking link the moment it ships, usually within 1-2 business days.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: WHAT'S INSIDE — Package Contents
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 32px 44px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 20, fontWeight: 600, color: "#1F2D2F",
        margin: "0 0 20px",
      }}>
        What's inside your package:
      </p>

      {/* Signal-dot bullet 1 */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4",
          flexShrink: 0, marginTop: 8, marginRight: 12,
        }} />
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16,
          fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          6 pairs of Body-Signal Learning Layer underwear (mix of sizes selected)
        </p>
      </div>

      {/* Signal-dot bullet 2 */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4",
          flexShrink: 0, marginTop: 8, marginRight: 12,
        }} />
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16,
          fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          Quick-start guide, one page, no fluff
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: HAND-DRAWN SVG SQUIGGLE DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 0", height: 32, overflow: "hidden" }}>
      <svg width="100%" height="32" viewBox="0 0 600 32" preserveAspectRatio="xMidYMid meet">
        <path
          d="M0,16 C30,6 60,26 90,16 C120,6 150,26 180,16 C210,6 240,26 270,16 C300,6 330,26 360,16 C390,6 420,26 450,16 C480,6 510,26 540,16 C570,6 600,20 600,16"
          stroke="#2BAEB4" strokeWidth="2" fill="none" opacity="0.7"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SIGNAL ARRIVAL ILLUSTRATION — Custom SVG
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "16px 0" }}>
      <svg width="100%" height="120" viewBox="0 0 600 120" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B8B8B8" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#2BAEB4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2BAEB4" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2BAEB4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2BAEB4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connecting pathway line */}
        <line x1="40" y1="60" x2="500" y2="60" stroke="url(#sigGrad)" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Faint disconnected pulses (left) — Three Frequencies easter egg */}
        <circle cx="60" cy="60" r="4" fill="#B8B8B8" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.8;0.35" dur="2s" begin="0s" repeatCount="indefinite" />
        </circle>
        <text x="60" y="80" textAnchor="middle" fontSize="6" fill="#B8B8B8" fontFamily="Helvetica, Arial, sans-serif">I</text>

        <circle cx="120" cy="60" r="4" fill="#B8B8B8" opacity="0.45">
          <animate attributeName="opacity" values="0.45;0.9;0.45" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <text x="120" y="80" textAnchor="middle" fontSize="6" fill="#B8B8B8" fontFamily="Helvetica, Arial, sans-serif">II</text>

        <circle cx="180" cy="60" r="4" fill="#B8B8B8" opacity="0.55">
          <animate attributeName="opacity" values="0.55;1;0.55" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <text x="180" y="80" textAnchor="middle" fontSize="6" fill="#B8B8B8" fontFamily="Helvetica, Arial, sans-serif">III</text>

        {/* Converging emerald dots */}
        <circle cx="250" cy="60" r="3.5" fill="#2BAEB4" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="60" r="3.5" fill="#2BAEB4" opacity="0.65">
          <animate attributeName="opacity" values="0.65;1;0.65" dur="2s" begin="1.1s" repeatCount="indefinite" />
        </circle>
        <circle cx="390" cy="60" r="3.5" fill="#2BAEB4" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="450" cy="60" r="3.5" fill="#2BAEB4" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Arrival glow circle */}
        <circle cx="530" cy="60" r="28" fill="url(#glowGrad)">
          <animate attributeName="r" values="28;32;28" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="530" cy="60" r="14" fill="#2BAEB4" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.6;0.25" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="530" cy="60" r="7" fill="#2BAEB4" opacity="1" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: LETTER — LETTER-01 Warm Welcome (Lena Voice)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 32px" }}>
      {/* Welcome header */}
      <p style={{
        fontFamily: F.main, fontSize: 20, fontWeight: 600, color: "#1F2D2F",
        margin: "0 0 24px",
      }}>
        Welcome to the family, for real.
      </p>

      {/* Paragraph 1 */}
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
        lineHeight: 1.8, color: "#4A6568", margin: "0 0 20px",
      }}>
        That moment when you hit 'place order', I know what was on your mind. Whether your child says 'I need to go' after it's already happened, or doesn't react to being wet at all, or walks around in a wet pull-up like nothing's wrong, you've taken a step that matters.
      </p>

      {/* Paragraph 2 */}
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
        lineHeight: 1.8, color: "#4A6568", margin: "0 0 28px",
      }}>
        I've been where you are. Both my autistic sons went through it, one trained at 6, the other at almost 8. I know the hope, the hesitation, the 'what if this doesn't work either' feeling. You're in good company here.
      </p>

      {/* Week 1 Pull-Quote Card */}
      <div style={{
        background: "#FBF7F1", borderLeft: "3px solid #5DD07A",
        padding: "16px 20px 16px 16px", marginBottom: 24, borderRadius: "0 8px 8px 0",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 600, color: "#1F2D2F",
          margin: "0 0 16px",
        }}>
          Week 1, what to expect:
        </p>

        {/* Week 1 paragraph 1 */}
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
          lineHeight: 1.8, color: "#4A6568", margin: "0 0 14px",
        }}>
          Put the underwear on your child for 1-2 hours at home. Don't prompt. Don't ask. Don't set a timer. Just let them wear it and go about your normal day.
        </p>

        {/* Week 1 paragraph 2 */}
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
          lineHeight: 1.8, color: "#4A6568", margin: "0 0 14px",
        }}>
          The Body-Signal Learning Layer creates a gentle 30-60 second 'uh-oh' sensation, gentle sensation that lasts that gives the brain time to register: something happened. Pull-ups and regular underwear don't do this. That's the whole difference.
        </p>

        {/* Week 1 paragraph 3 */}
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
          lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          Some kids show awareness in 2 weeks. Others need 8 weeks. Both are normal. The first win might be small, a pause, a look down, a walk toward the bathroom. Those count.
        </p>
      </div>

      {/* Important note — bold anchor */}
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
        lineHeight: 1.8, color: "#4A6568", margin: 0,
      }}>
        <span style={{ fontWeight: 700, color: "#1F2D2F" }}>Important:</span> No pressure. No schedules. The underwear does the teaching. Your job is just to let it happen.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: RECOGNITION ANCHORS — What to Watch For
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 32px 44px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, color: "#1F2D2F",
        margin: "0 0 20px",
      }}>
        Over the next few weeks, you might notice things like:
      </p>

      {/* Signal-dot bullet 1 */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4",
          flexShrink: 0, marginTop: 8, marginRight: 12,
        }} />
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16,
          fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          Your child pausing mid-play and looking down, that's the signal landing
        </p>
      </div>

      {/* Signal-dot bullet 2 */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4",
          flexShrink: 0, marginTop: 8, marginRight: 12,
        }} />
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16,
          fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          Pulling at their pants in awareness, the first time they notice
        </p>
      </div>

      {/* Signal-dot bullet 3 */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4",
          flexShrink: 0, marginTop: 8, marginRight: 12,
        }} />
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16,
          fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          Saying 'wet' or showing you with a gesture, any acknowledgment counts
        </p>
      </div>

      {/* Signal-dot bullet 4 */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4",
          flexShrink: 0, marginTop: 8, marginRight: 12,
        }} />
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16,
          fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          Staying dry 2 hours instead of 30 minutes, small but real progress
        </p>
      </div>

      {/* Signal-dot bullet 5 */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 20 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#2BAEB4",
          flexShrink: 0, marginTop: 8, marginRight: 12,
        }} />
        <p style={{
          fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16,
          fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0,
        }}>
          Walking toward the bathroom, even after the fact
        </p>
      </div>

      {/* Closing note */}
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 16, fontWeight: 400,
        lineHeight: 1.8, color: "#4A6568", margin: 0,
      }}>
        If you see any of these, that's the Body-Signal Learning working. Not every kid shows the same signs, and not at the same speed. That's okay. Your child's timeline is the right timeline.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: TONAL SHIFT RULE
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E5E5E5" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 11: CROSS-SELL — Bonus Items (2-Column Grid)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "44px 32px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, color: "#4A6568",
        margin: "0 0 24px",
      }}>
        While you're waiting for delivery, a few things that pair with your purchase:
      </p>

      {/* 2-column grid */}
      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        {/* Wash Bag card */}
        <div style={{
          flex: 1, border: "2px solid #1F2D2F", borderRadius: 16,
          boxShadow: "6px 6px 0 #1F2D2F", padding: "20px 18px",
        }}>
          <p style={{
            fontFamily: F.main, fontSize: 17, fontWeight: 600, color: "#1F2D2F",
            margin: "0 0 6px",
          }}>
            Wash Bag
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#2BAEB4",
            margin: "0 0 12px",
          }}>
            $14.99
          </p>
          <p style={{
            fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
            fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0,
          }}>
            Keeps the learning signal strong, wash after wash. The gentle signal layer stays intact longer with proper care. Toss your BKC pairs in this bag and wash as usual.
          </p>
        </div>

        {/* Mattress Protector card */}
        <div style={{
          flex: 1, border: "2px solid #1F2D2F", borderRadius: 16,
          boxShadow: "6px 6px 0 #1F2D2F", padding: "20px 18px",
        }}>
          <p style={{
            fontFamily: F.main, fontSize: 17, fontWeight: 600, color: "#1F2D2F",
            margin: "0 0 6px",
          }}>
            Mattress Protector
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 700, color: "#2BAEB4",
            margin: "0 0 12px",
          }}>
            $24.99
          </p>
          <p style={{
            fontFamily: "Helvetica, Arial, sans-serif", fontSize: 14,
            fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0,
          }}>
            For nighttime body-signal learning. Daytime awareness often leads to nighttime readiness, and a protected mattress means zero stress about accidents while the learning continues.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400, fontStyle: "italic",
        color: "#8A9B9D", margin: "0 0 24px",
      }}>
        Both are optional add-ons, not essentials. Your 6-pair bundle is all you need to start.
      </p>

      {/* CTA — Add the Wash Bag */}
      <div style={{ textAlign: "center" }}>
        <a href="#" style={{
          display: "inline-block", padding: "0 32px", height: 52, lineHeight: "52px",
          background: "#2BAEB4", color: "#D8F57C", fontFamily: F.main,
          fontSize: 15.5, fontWeight: 700, letterSpacing: 0.3,
          textDecoration: "none", borderRadius: 8, textAlign: "center",
        }}>
          Add the Wash Bag ($14.99)
        </a>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: TRUST — TRUST-1 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "44px 32px" }}>
      <div style={{
        borderLeft: "3px solid #5DD07A", paddingLeft: 20,
        paddingTop: 20, paddingBottom: 20,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6,
          color: "#1F2D2F", margin: 0,
        }}>
          60 days to try it. By your judgment. If it doesn't work for your child, full refund. No forms. No hoops. Just email us and we handle it.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: SIGNOFF — Lena
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 22,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* Top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5, position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden",
              border: "1.5px solid #1F2D2F",
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
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

        {/* Dashed divider + personal message */}
        <div style={{
          borderTop: "1.5px dashed #3A4547", borderBottom: "1.5px dashed #3A4547",
          paddingTop: 16, paddingBottom: 16, marginBottom: 16,
        }}>
          <p style={{
            fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13,
            fontWeight: 400, lineHeight: 1.65, color: "#B8CACD",
            margin: "0 0 16px",
          }}>
            Thanks for trusting us with your order. If you have a question, about the product, the washing instructions, what to expect, hit reply. You'll get me, not a template, not a bot. I read everything.
          </p>

          <p style={{
            fontFamily: "Helvetica, Arial, sans-serif", fontSize: 13,
            fontWeight: 400, lineHeight: 1.65, color: "#B8CACD",
            margin: "0 0 4px",
          }}>
            Talk soon,
          </p>

          {/* Signature */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95,
                fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2,
              }}>
                Lena
              </div>
            </div>
            {/* Flourish SVG */}
            <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
              <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 14: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#1F2D2F",
        margin: "0 0 8px",
      }}>
        BrightKidCo
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11,
        letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px",
      }}>
        [Physical Address]
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11,
        letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 8px",
      }}>
        <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a>
      </p>
      <p style={{
        fontFamily: "Helvetica, Arial, sans-serif", fontSize: 11,
        letterSpacing: 0.02, color: "#8A9B9D", margin: "0 0 24px",
      }}>
        Reply to this email. Lena reads every response.
      </p>
      {/* Gradient accent bar */}
      <div style={{
        margin: "0 auto", width: 60, height: 3,
        background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", borderRadius: 3,
      }} />
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["transactional/order-05-e1"] = Email_transactional_order_05_e1;
