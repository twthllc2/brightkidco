/* Welcome Flow — E6 | L1 (Sarah)
   Wireframe: wireframes/welcome/welcome-01-e6-l1.md
   Strategy: strategy-map.json → welcome.emails.e6-l1
   Generated: 2026-06-09
*/

const Email_Welcome_E6_L1 = () => (
  <EmailShell
    preheader="Before Pre-K starts, there's one thing you might not know about pull-ups"
    bg="#FAF9F7"
  >
    {/* ══════════ SECTION 1: HEADER — Dark navy ══════════ */}
    <Header bg="#1A2B3E" />

    {/* ══════════ SECTION 2: SUBJECT LINE CONTEXT BAR ══════════ */}
    <div style={{ background: "#F2F2F2", padding: "10px 20px", textAlign: "center" }}>
      <div style={{ fontSize: 13, color: "#888888" }}>
        Day 14 of your Welcome Journey
      </div>
    </div>

    {/* ══════════ SECTION 3: HERO-19 — Timeline Shock ══════════ */}
    <div style={{ background: "#FFFFFF", padding: "34px 22px" }}>
      {/* Hero icon: Calendar + question mark SVG */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          {/* Calendar outline */}
          <rect x="8" y="14" width="48" height="42" rx="6" stroke="#1A2B3E" strokeWidth="1.5" fill="none" />
          <line x1="8" y1="26" x2="56" y2="26" stroke="#1A2B3E" strokeWidth="1.5" />
          <line x1="20" y1="10" x2="20" y2="18" stroke="#1A2B3E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="44" y1="10" x2="44" y2="18" stroke="#1A2B3E" strokeWidth="1.5" strokeLinecap="round" />
          {/* Question mark */}
          <text x="32" y="46" textAnchor="middle" fontSize="22" fontWeight="700" fill="#E8923A" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">?</text>
        </svg>
      </div>

      {/* H1 */}
      <h1 style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 28, lineHeight: 1.2, fontWeight: 700,
        margin: "0 0 14px", color: "#1A2B3E",
      }}>
        Pre-K starts in a few months.
      </h1>

      {/* Sub */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 20, fontStyle: "italic", lineHeight: 1.5,
        color: "#555555", margin: "0 0 20px",
      }}>
        What if the thing helping is actually hurting?
      </p>

      {/* Body paragraphs — verbatim */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 14px",
      }}>
        You've got the forms, the tour date, the supply list. And somewhere in the back of your mind: <em>What if he's still in pull-ups?</em>
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 14px",
      }}>
        I hear this every single day. And here's something I wish someone had told me sooner.
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 14px",
      }}>
        The pull-ups you're buying, the ones that cost $50–$100 a month and keep him perfectly dry, might be the very thing standing between him and that Pre-K readiness goal.
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: 0,
      }}>
        Not because they're bad. Because they're too good at their job.
      </p>
    </div>

    {/* ══════════ SECTION 4: GRADIENT BAND — white → cream ══════════ */}
    <Band from="#FFFFFF" to="#F8F5F0" height={40} />

    {/* ══════════ SECTION 5: LETTER-01 — Validation ══════════ */}
    <div style={{ background: "#F8F5F0", padding: "24px 22px" }}>
      {/* Body copy — verbatim */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 14px",
      }}>
        Let me be clear: you didn't make a wrong choice using pull-ups. Every parent uses them. Every pediatrician recommends them. Every blog post says "start with pull-ups."
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 14px",
      }}>
        But here's what nobody told us, and what the research shows.
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 14px",
      }}>
        Pull-ups were designed for neurotypical kids who already feel the "I need to go" signal. The moisture-wicking technology that keeps a child completely dry is the exact mechanism that prevents progress when the signal is missing.
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 24px",
      }}>
        For an autistic child whose brain processes body signals differently, that perfect dryness is actually the problem.
      </p>

      {/* Pull Quote — Yellow Quote Block treatment */}
      <div style={{
        borderLeft: "3px solid #E8923A", background: "#FFD866",
        borderRadius: 8, padding: "20px 24px", marginBottom: 24,
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 20, fontStyle: "italic", lineHeight: 1.5,
          color: "#3D3D3D", margin: "0 0 8px", textAlign: "center",
        }}>
          "He says 'I need to pee' AFTER it's already happened."
        </p>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 13, color: "#555555", margin: 0, fontStyle: "italic",
          textAlign: "center",
        }}>
          — L1 parent
        </p>
      </div>

      {/* Follow-up */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: 0,
      }}>
        That quote isn't about refusal. It's about timing. The signal arrives, just milliseconds too late. And pull-ups ensure there's no feedback for the brain to learn from.
      </p>
    </div>

    {/* ══════════ SECTION 6: GRADIENT BAND — cream → white ══════════ */}
    <Band from="#F8F5F0" to="#FFFFFF" height={40} />

    {/* ══════════ SECTION 7: EDU-4 — Mechanism (Weakened, Pre-K Framed) ══════════ */}
    <div style={{ background: "#FFFFFF", padding: "28px 22px" }}>
      {/* H2 */}
      <h2 style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 24, fontWeight: 700, color: "#1A2B3E",
        margin: "0 0 20px", textAlign: "center",
      }}>
        The Pull-Up Reframe
      </h2>

      {/* Section header */}
      <div style={{
        fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
        color: "#888888", marginBottom: 20, textAlign: "center",
      }}>
        YOUR CHILD'S BODY SIGNAL SYSTEM
      </div>

      {/* 3-Layer Learning Reveal panel — stacked vertical */}
      {/* Layer 1 — Signal Creator */}
      <div style={{
        background: "#FFF8F0", borderRadius: 14, padding: "18px 20px",
        border: "1px solid #E0DCD4", marginBottom: 12,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 24, fontWeight: 700, color: "#E8923A", lineHeight: 1,
            flexShrink: 0, width: 32,
          }}>
            1
          </div>
          <div>
            <div style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 15, fontWeight: 700, color: "#1A2B3E", marginBottom: 4,
            }}>
              SIGNAL CREATOR
            </div>
            <div style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 13, color: "#888888", marginBottom: 6, textTransform: "uppercase",
              letterSpacing: 0.5,
            }}>
              Cotton Inner
            </div>
            <div style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 15, lineHeight: 1.5, color: "#2C2C2C",
            }}>
              Creates a gentle, sustained "uh-oh" sensation, 30–60 seconds of feedback the brain can register.
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2 — Smart Protection */}
      <div style={{
        background: "#F5F9F3", borderRadius: 14, padding: "18px 20px",
        border: "1px solid #E0DCD4", marginBottom: 12,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 24, fontWeight: 700, color: "#5B8C5A", lineHeight: 1,
            flexShrink: 0, width: 32,
          }}>
            2
          </div>
          <div>
            <div style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 15, fontWeight: 700, color: "#1A2B3E", marginBottom: 4,
            }}>
              SMART PROTECTION
            </div>
            <div style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 13, color: "#888888", marginBottom: 6, textTransform: "uppercase",
              letterSpacing: 0.5,
            }}>
              Absorption Core
            </div>
            <div style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 15, lineHeight: 1.5, color: "#2C2C2C",
            }}>
              Contains the accident without wicking away the learning signal.
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3 — Calm Containment */}
      <div style={{
        background: "#F0F5F8", borderRadius: 14, padding: "18px 20px",
        border: "1px solid #E0DCD4", marginBottom: 24,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 24, fontWeight: 700, color: "#4A7B9D", lineHeight: 1,
            flexShrink: 0, width: 32,
          }}>
            3
          </div>
          <div>
            <div style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 15, fontWeight: 700, color: "#1A2B3E", marginBottom: 4,
            }}>
              CALM CONTAINMENT
            </div>
            <div style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 13, color: "#888888", marginBottom: 6, textTransform: "uppercase",
              letterSpacing: 0.5,
            }}>
              Leak-Resistant Barrier
            </div>
            <div style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 15, lineHeight: 1.5, color: "#2C2C2C",
            }}>
              Leak-resistant. Floor-safe.
            </div>
          </div>
        </div>
      </div>

      {/* Science Callout */}
      <div style={{
        border: "1px solid #E0DCD4", borderRadius: 12,
        padding: "16px 20px", marginBottom: 20,
      }}>
        <div style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
          color: "#888888", marginBottom: 8,
        }}>
          Research shows
        </div>
        <div style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 18, fontWeight: 700, color: "#1A2B3E", lineHeight: 1.3,
          marginBottom: 6,
        }}>
          49% of autistic 4-5 year olds aren't toilet trained yet. That's <strong>6×</strong> the rate of typically developing kids.
        </div>
        <div style={{ fontSize: 13, color: "#888888" }}>
          Wiggins et al. (2022), CDC-funded SPARK study, N=743
        </div>
      </div>

      {/* Closing */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: 0,
      }}>
        This isn't you. This isn't him. This is a documented gap, and one we designed a specific solution for.
      </p>
    </div>

    {/* ══════════ SECTION 8: DIVIDER BAR ══════════ */}
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
      <div style={{ width: 60, height: 1, background: "#E0DCD4" }} />
    </div>

    {/* ══════════ SECTION 9: SP-01 — Yellow Quote Blocks ══════════ */}
    <div style={{ background: "#FAF9F7", padding: "24px 22px" }}>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#555555", margin: "0 0 18px",
      }}>
        Other parents who've made the switch, in their own words:
      </p>

      {/* Yellow Quote Block 1 */}
      <div style={{
        background: "#FFD866", border: "2px solid #1A2B3E",
        borderRadius: 20, padding: "18px 22px", marginBottom: 12,
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 16, fontStyle: "italic", lineHeight: 1.6,
          color: "#2C2C2C", margin: 0,
        }}>
          "He had a perfect week, then a month of accidents. I was ready to give up. After two weeks in BrightKidCo undies, he paused. Then he looked down. Then he walked to the potty. Small. But that never happened before."
        </p>
      </div>

      {/* Yellow Quote Block 2 */}
      <div style={{
        background: "#FFD866", border: "2px solid #1A2B3E",
        borderRadius: 20, padding: "18px 22px", marginBottom: 12,
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 16, fontStyle: "italic", lineHeight: 1.6,
          color: "#2C2C2C", margin: 0,
        }}>
          "I had no idea pull-ups were part of the problem. I just thought he wasn't ready. Now I see he was ready, he just needed the signal."
        </p>
      </div>

      {/* Yellow Quote Block 3 */}
      <div style={{
        background: "#FFD866", border: "2px solid #1A2B3E",
        borderRadius: 20, padding: "18px 22px", marginBottom: 18,
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 18, fontStyle: "italic", lineHeight: 1.5,
          color: "#2C2C2C", margin: 0, fontWeight: 600,
        }}>
          "He went today! Once! But he went!"
        </p>
      </div>

      {/* Commentary */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: 0,
      }}>
        That last one is my favorite. Because for parents, a single success in a sea of accidents isn't nothing. It's proof the connection is forming.
      </p>
    </div>

    {/* ══════════ SECTION 10: DIVIDER BAR ══════════ */}
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
      <div style={{ width: 60, height: 1, background: "#E0DCD4" }} />
    </div>

    {/* ══════════ SECTION 11: PRODUCT SHOWCASE — Pre-K Framed ══════════ */}
    <ProductShowcaseFull
      eyebrow="THE PRE-K WINDOW"
      title="Close the gap before September"
      titleAccent=""
      sub=""
      priceFrom="$79.99"
      priceNote="$13.33 per pair"
      ctaButton="Claim Your 60-Day Trial"
    />

    {/* Pre-K framing text */}
    <div style={{ background: "#FAF9F7", padding: "0 22px 20px" }}>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 15, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 12px",
      }}>
        If Pre-K starts in a few months, these six pairs give you the learning window to close the gap before September.
      </p>
      <p style={{ fontSize: 15, margin: 0 }}>
        <a href="#" style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 15, color: "#1A2B3E", textDecoration: "underline",
        }}>
          Or start with 1 pair for $34.99
        </a>
      </p>
    </div>

    {/* ══════════ SECTION 12: GRADIENT BAND — white → sage ══════════ */}
    <Band from="#FFFFFF" to="#E8F0E5" height={40} />

    {/* ══════════ SECTION 13: TRUST-1 — 60-Day Guarantee Seal ══════════ */}
    <div style={{ background: "#E8F0E5", padding: "28px 22px" }}>
      {/* Guarantee statement */}
      <h2 style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 24, fontWeight: 700, color: "#1A2B3E",
        margin: "0 0 16px", textAlign: "center",
      }}>
        60 days. By your judgment.
      </h2>

      {/* Body */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 14px",
      }}>
        If your child shows any sign of body awareness, a pause, a look, a step toward the potty, you'll know the signal is working. If nothing changes after 60 days, full refund. No questions. No hoops.
      </p>
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 16, lineHeight: 1.6, color: "#2C2C2C", margin: "0 0 20px",
      }}>
        The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.
      </p>

      {/* Shield Badge */}
      <div style={{
        display: "flex", justifyContent: "center", marginBottom: 20,
      }}>
        <div style={{
          border: "2px dashed #5B8C5A", borderRadius: 14,
          padding: "16px 24px", textAlign: "center", width: 150,
        }}>
          <svg width="32" height="32" viewBox="0 0 32 32" style={{ marginBottom: 6 }}>
            <path d="M16 3 L28 9 L28 17 C28 24 23 29 16 31 C9 29 4 24 4 17 L4 9 Z"
              stroke="#5B8C5A" strokeWidth="1.5" fill="none" />
            <path d="M11 16 L14 19 L21 13" stroke="#5B8C5A" strokeWidth="1.5" fill="none"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 14, fontWeight: 700, color: "#1A2B3E",
          }}>
            60-Day Guarantee
          </div>
        </div>
      </div>

      {/* Trust signals */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 20, marginBottom: 20,
        flexWrap: "wrap",
      }}>
        <div style={{ fontSize: 12, color: "#888888", display: "flex", alignItems: "center", gap: 4 }}>
          <span>🚚</span> Free shipping
        </div>
        <div style={{ fontSize: 12, color: "#888888", display: "flex", alignItems: "center", gap: 4 }}>
          <span>📅</span> 60-day returns
        </div>
        <div style={{ fontSize: 12, color: "#888888", display: "flex", alignItems: "center", gap: 4 }}>
          <span>🔒</span> Secure checkout
        </div>
      </div>

      {/* Closing */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 17, fontStyle: "italic", lineHeight: 1.5,
        color: "#3D3D3D", margin: 0, textAlign: "center",
      }}>
        "You don't have to believe me. You just have to try."
      </p>
    </div>

    {/* ══════════ SECTION 14: CTA SECTION ══════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 22px" }}>
      {/* Primary CTA */}
      <a href="#" style={{
        display: "block", padding: "16px 24px",
        background: "#1A2B3E", color: "#FFFFFF",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 17, fontWeight: 700, lineHeight: 1.2,
        textDecoration: "none", borderRadius: 6, textAlign: "center",
      }}>
        Claim Your 60-Day Trial, 3+3 Bundle $79.99 →
      </a>

      {/* Secondary link */}
      <p style={{ textAlign: "center", margin: "14px 0" }}>
        <a href="#" style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 15, color: "#1A2B3E", textDecoration: "underline",
        }}>
          Or start with 1 pair for $34.99
        </a>
      </p>

      {/* Price note */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 14, lineHeight: 1.5, color: "#555555",
        textAlign: "center", margin: "0 0 14px",
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>

      {/* Next time teaser */}
      <p style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 14, lineHeight: 1.5, color: "#555555",
        textAlign: "center", margin: 0,
      }}>
        <strong>Next time:</strong> Your decision — what to do next, with no pressure.
      </p>
    </div>

    {/* ══════════ SECTION 15: LENA SIGNOFF (MEDIUM→LONG) ══════════ */}
    <div style={{ background: "#1A2B3E", padding: "0 22px 36px" }}>
      <div style={{
        position: "relative", background: "#1F2A2C",
        border: "1.5px solid #2F3D40", borderRadius: 22,
        padding: "26px 24px 24px", overflow: "hidden",
      }}>
        {/* Gradient accent bar — amber→sage */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #E8923A 0%, #5B8C5A 100%)", opacity: 0.9,
        }} />

        {/* Avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0, borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden",
              border: "1.5px solid #1A2B3E",
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1A2B3E" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
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
        <div style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 14, lineHeight: 1.6, color: "#B8CACD",
        }}>
          <p style={{ margin: "0 0 12px" }}>
            No matter where you are in this, you're closer than you think. Pre-K won't wait, but the right approach can close the gap before it starts. I've been where you are. Two autistic sons. One trained at 6, the other at almost 8. I know what it's like to watch the calendar and feel the panic rise. And I know what it's like to find something that actually works.
          </p>
          <p style={{ margin: 0 }}>
            If you have any questions about how the Body-Signal system fits with your child, hit reply. You'll get me, not a template, not a bot. I read every response.
          </p>
        </div>
      </div>
    </div>

    {/* ══════════ SECTION 16: FOOTER ══════════ */}
    <div style={{ background: "#F2F2F2", padding: "20px 22px 36px", textAlign: "center" }}>
      <div style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 12, color: "#888888", marginBottom: 8,
      }}>
        BrightKidCo LLC
      </div>
      <div style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 12, color: "#888888", marginBottom: 12, lineHeight: 1.5,
      }}>
        1234 Commerce Street, Suite 200, Los Angeles, CA 90017
      </div>
      <div style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 12, color: "#888888", marginBottom: 8,
      }}>
        <a href="#" style={{ color: "#888888", textDecoration: "underline" }}>Unsubscribe</a>
        {" · "}
        <a href="#" style={{ color: "#888888", textDecoration: "underline" }}>Manage Preferences</a>
      </div>
      <div style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 12, color: "#888888",
      }}>
        Questions? Reply to this email, we read every response.
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E6_L1 });
