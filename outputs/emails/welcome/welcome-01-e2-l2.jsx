/* Welcome Flow — E2 | L2
   Wireframe: wireframes/welcome/welcome-01-e2-l2.md
   Strategy: strategy-map.json → welcome.emails.e2-l2
   Generated: 2026-06-09
*/

const Email_Welcome_E2_L2 = () => (
  <EmailShell
    preheader="The signal comes too late for prompt systems to work. Here's what's actually happening neurologically."
    bg="#FAFAF8"
  >
    {/* ── Header ── */}
    <Header bg="#FAFAF8" />

    {/* ══════ HERO: HERO-13 — Scientific Hook ══════ */}
    <div style={{
      padding: "40px 24px",
      background: "#F5F0EB",
      textAlign: "center",
    }}>
      <div style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: 2,
        textTransform: "uppercase", color: "#8B7E9E", marginBottom: 14,
        fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
      }}>
        THE SIGNAL GAP
      </div>
      <h1 style={{
        fontSize: 24, lineHeight: 1.15, fontWeight: 700, margin: "0 0 14px",
        letterSpacing: -0.5, color: "#2D2A24",
        fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
      }}>
        Why your BCBA protocol couldn't fix this
      </h1>
      <p style={{
        fontSize: 16, lineHeight: 1.5, color: "#4A6568", margin: "0 0 20px",
        fontFamily: "Georgia, serif",
      }}>
        The signal comes too late for prompt systems to work. Here's what's actually happening neurologically.
      </p>
      <a href="#body-signal" style={{
        display: "inline-block", padding: "14px 28px",
        background: "#1F2D2F", color: "#D8F57C",
        fontSize: 14, fontWeight: 700,
        textDecoration: "none", borderRadius: 999,
        letterSpacing: 0.3,
        fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
      }}>
        See the pants →
      </a>
    </div>

    {/* ══════ 20.2 — Dot Pattern Divider ══════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: "32px 0" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
    </div>

    {/* ══════ HOOK + FAILED METHODS: LETTER-03 ══════ */}
    <div style={{ padding: "0 24px 28px" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: "#2D2A24", margin: "0 0 14px",
        fontWeight: 600, fontFamily: "Georgia, serif",
      }}>
        "We've been doing scheduled sits for two years. He never goes on his own."
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        I hear this from Level 2 parents almost daily. You set the timer. He sits. Nothing happens. You put the pull-up back on. Five minutes later, it's wet.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        The sitself became the signal. Not the body.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        You've tried the BCBA protocol, scheduled sits with reinforcement. You've tried OT sensory work, brushes, weighted lap pads, social stories about using the potty. You've tried sticker charts, timer watches, the three-day method, and "just wait until he's ready." You've read the books. You've spent the money.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        And here you are. Sticker charts that collected dust. Timer sits that became a fight. A child who performs perfectly at ABA when the prompt says "time to go", and then pees on the living room floor thirty seconds after the pull-up goes back on.
      </p>

      {/* Pull Quote Box */}
      <div style={{
        margin: "16px 0", padding: "16px 20px",
        borderLeft: "3px solid #8B7E9E", background: "#F5F0EB",
        borderRadius: 6,
      }}>
        <p style={{
          fontSize: 16, lineHeight: 1.5, color: "#2D2A24", margin: 0,
          fontStyle: "italic", fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
        }}>
          You've tried 40+ methods. Every single one assumed your child CAN feel when they need to go.
        </p>
      </div>
    </div>

    {/* ══════ VALIDATION: LETTER-03 continued ══════ */}
    <div style={{ padding: "0 24px 28px" }}>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: "#2D2A24", margin: "0 0 14px",
        fontWeight: 600, fontFamily: "Georgia, serif",
      }}>
        Prompt-dependency is not training.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        Your child didn't fail. Your BCBA didn't fail. Your OT didn't fail. The protocol was sound, for a brain that receives the "I need to go" signal on time.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        But here's what the research says: <strong>autistic children show significantly diminished body awareness</strong>, the ability to sense internal body states like bladder fullness (Nicholson et al., 2019, Journal of Autism and Developmental Disorders). The signal is either delayed, weakened, or absent entirely.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        Your BCBA protocol built compliance. It taught your child to sit on command, to wait for the adult cue, to follow the routine. That's real progress. But compliance is not awareness. You can prompt a child to sit on a toilet. You cannot prompt a child to feel a full bladder.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif" }}>
        That feeling, the "uh-oh, I need to go", has to come from inside. And if the internal signal isn't registering, no amount of prompting will build it.
      </p>

      {/* Citation Callout Box */}
      <div style={{
        margin: "20px 0 0", padding: "16px 20px",
        borderLeft: "3px solid #8B7E9E", background: "#F5F0EB",
        borderRadius: 6,
      }}>
        <p style={{ fontSize: 14, lineHeight: 1.5, color: "#4A6568", margin: 0, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
          Nicholson et al. (2019), Journal of Autism and Developmental Disorders, 49(9):3625-3637
        </p>
      </div>
    </div>

    {/* ══════ 20.2 — Dot Pattern Divider ══════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: "4px 0 32px" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
    </div>

    {/* ══════ MECHANISM: EDU-10 — How It Works ══════ */}
    <div style={{ padding: "0 24px 32px", background: "#F5F0EB", margin: "0 0 0", paddingTop: 32, paddingBottom: 32 }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: 2,
          textTransform: "uppercase", color: "#8B7E9E", marginBottom: 10,
          fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
        }}>
          THE MECHANISM
        </div>
        <h2 style={{
          fontSize: 22, lineHeight: 1.15, fontWeight: 700, margin: 0,
          color: "#2D2A24", fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
        }}>
          Interoception: the 8th sensory system
        </h2>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 20px", fontFamily: "Georgia, serif", textAlign: "center" }}>
        Research confirms only 59% of autistic children can reliably communicate when they need to urinate. That's not defiance — it's a nervous system that isn't receiving the message.
      </p>

      {/* 3-Layer Diagram */}
      <div style={{ margin: "0 0 20px" }}>
        {/* Signal Bridge Arrow */}
        <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
          <svg viewBox="0 0 300 40" width="300" height="40" style={{ display: "block", margin: "0 auto" }}>
            <text x="20" y="16" fontSize="11" fill="#8B7E9E" fontFamily="Georgia, serif" fontWeight="500">Bladder</text>
            <line x1="70" y1="20" x2="230" y2="20" stroke="#8B7E9E" strokeWidth="2" strokeDasharray="6,4" strokeLinecap="round" />
            <polygon points="228,15 238,20 228,25" fill="#8B7E9E" />
            <text x="245" y="16" fontSize="11" fill="#8B7E9E" fontFamily="Georgia, serif" fontWeight="500">Brain</text>
          </svg>
        </div>

        {/* Layer 1 */}
        <div style={{
          display: "flex", alignItems: "stretch",
          border: "1.5px solid #C46A4A", borderRadius: 8, overflow: "hidden",
          marginBottom: 8,
        }}>
          <div style={{
            width: 44, flexShrink: 0, background: "#F5EDE0",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#C46A4A",
            fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
          }}>
            01
          </div>
          <div style={{ padding: "12px 16px", background: "#F5EDE0", flex: 1 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#2D2A24", marginBottom: 4,
              fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
            }}>
              Body-Signal Layer
            </div>
            <div style={{ fontSize: 13, color: "#4A6568", lineHeight: 1.5, fontFamily: "Georgia, serif" }}>
              Cotton inner generates a gentle, sustained "uh-oh" sensation for 30-60 seconds
            </div>
          </div>
        </div>

        {/* Layer 2 */}
        <div style={{
          display: "flex", alignItems: "stretch",
          border: "1.5px solid #C46A4A", borderRadius: 8, overflow: "hidden",
          marginBottom: 8,
        }}>
          <div style={{
            width: 44, flexShrink: 0, background: "#E8DCC8",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#C46A4A",
            fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
          }}>
            02
          </div>
          <div style={{ padding: "12px 16px", background: "#E8DCC8", flex: 1 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#2D2A24", marginBottom: 4,
              fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
            }}>
              Smart Absorption
            </div>
            <div style={{ fontSize: 13, color: "#4A6568", lineHeight: 1.5, fontFamily: "Georgia, serif" }}>
              Protects without blocking awareness
            </div>
          </div>
        </div>

        {/* Layer 3 */}
        <div style={{
          display: "flex", alignItems: "stretch",
          border: "1.5px solid #C46A4A", borderRadius: 8, overflow: "hidden",
        }}>
          <div style={{
            width: 44, flexShrink: 0, background: "#6B8F8F",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#FFFFFF",
            fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
          }}>
            03
          </div>
          <div style={{ padding: "12px 16px", background: "#6B8F8F", flex: 1 }}>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#FFFFFF", marginBottom: 4,
              fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
            }}>
              Leak-Resistant Barrier
            </div>
            <div style={{ fontSize: 13, color: "#E8E8E8", lineHeight: 1.5, fontFamily: "Georgia, serif" }}>
              Protects furniture while keeping the signal intact
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif", textAlign: "center" }}>
        Pull-ups actively prevent this feedback loop. They keep children "too dry to learn."
      </p>
    </div>

    {/* ══════ SOCIAL PROOF: SP-02 — Expert Endorsement ══════ */}
    <div style={{ padding: "32px 24px" }}>
      {/* Large quotation mark */}
      <div style={{
        fontSize: 48, lineHeight: 1, color: "#8B7E9E", marginBottom: 8,
        fontFamily: "Georgia, serif",
      }}>
        "
      </div>
      <p style={{
        fontSize: 18, lineHeight: 1.5, color: "#2D2A24", margin: "0 0 16px",
        fontStyle: "italic",
        fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
      }}>
        He sits on the toilet for 45 minutes and then pees the second he stands up.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
        I hear this exact story from L2 parents over and over. Not because their kids are stubborn. Because the body doesn't signal until it's too late, and at that point, the child is already off the toilet.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
        One of our L2 parents wrote us after four weeks: "He initiated. Once. After four years. He walked to the bathroom on his own, not because I told him to, not because his BCBA prompted him, because he FELT it."
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif" }}>
        That's the difference. Prompt-dependency teaches a child to respond to an external cue. Body-signal learning teaches the brain to recognize an internal cue. One is compliance. The other is awareness.
      </p>
    </div>

    {/* ══════ 20.2 — Dot Pattern Divider ══════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: "4px 0 32px" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BA88E" }} />
    </div>

    {/* ══════ PRODUCT INTRO TEXT ══════ */}
    <div style={{ padding: "0 24px 20px" }}>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        The body-signal underwear isn't another training method. It's not a book, a chart, or a protocol. It's a piece of clothing that does one thing: <strong>gives your child's brain a signal it's not receiving on its own.</strong>
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 14px", fontFamily: "Georgia, serif" }}>
        Designed with input from occupational therapists and autism parents. Made from 100% cotton, recommended by the American Academy of Dermatology and consistently preferred by autistic individuals for tactile comfort (Kyriacou et al., 2023). PFAS-free. BPA-free. Built for multiple washes.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#2D2A24", margin: "0 0 10px", fontWeight: 700, fontFamily: "Georgia, serif" }}>
        The 3+3 Bundle, $79.99 with free shipping:
      </p>
      <div style={{ paddingLeft: 20, marginBottom: 14 }}>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 6px", fontFamily: "Georgia, serif" }}>
          <span style={{ color: "#C46A4A", marginRight: 8 }}>■</span>6 pairs for rotation (wash 3, wear 3)
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: "0 0 6px", fontFamily: "Georgia, serif" }}>
          <span style={{ color: "#C46A4A", marginRight: 8 }}>■</span>Worn under existing pull-ups during the transition period
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif" }}>
          <span style={{ color: "#C46A4A", marginRight: 8 }}>■</span>No schedules to follow. No books to read. Just wear, wash, repeat.
        </p>
      </div>
    </div>

    {/* ══════ PRODUCT SHOWCASE: ProductShowcaseMedium ══════ */}
    <div id="body-signal">
    <ProductShowcaseMedium
      eyebrow="THE BODY-SIGNAL APPROACH"
      title="Body-Signal Learning Layer™"
      priceFrom="€34"
      ctaButton="See the pants"
    />
    </div>

    {/* ══════ GUARANTEE: TRUST-2 — Guarantee Detail Cards ══════ */}
    <div style={{
      margin: "0 22px 32px", padding: "20px 24px",
      background: "#F0F4EE", borderRadius: 16,
    }}>
      <h3 style={{
        fontSize: 18, fontWeight: 700, color: "#2D2A24",
        margin: "0 0 16px",
        fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
      }}>
        60 days. Your judgment.
      </h3>

      {/* Trust signal 1 */}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
        <span style={{ fontSize: 14, color: "#8BA88E", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif" }}>
          If, after 60 days, your child shows no sign of increased body awareness, no pause, no look down, no step toward the bathroom, send them back for a full refund.
        </p>
      </div>

      {/* Trust signal 2 */}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
        <span style={{ fontSize: 14, color: "#8BA88E", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif" }}>
          No questions. No hoops.
        </p>
      </div>

      {/* Trust signal 3 */}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16 }}>
        <span style={{ fontSize: 14, color: "#8BA88E", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif" }}>
          Some kids respond in 2 weeks. Others take 8-12 weeks. Some need longer. All of those timelines are normal, and the 60-day guarantee covers the full learning window.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A6568", margin: 0, fontFamily: "Georgia, serif" }}>
        If your BCBA or OT has questions about the mechanism, have them reach out. We'll explain the sensory science. We want your whole team on the same page.
      </p>
    </div>

    {/* ══════ CTA: CTA-5 — Product CTA ══════ */}
    <div style={{ background: "#1F2D2F", padding: "20px 22px 44px", textAlign: "center" }}>
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#B8CACD",
        margin: "0 0 16px", fontFamily: "Georgia, serif",
      }}>
        Let your BCBA's work pay off, add the sensory layer.
      </p>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: "#B8CACD",
        margin: "0 0 24px", fontFamily: "Georgia, serif",
      }}>
        Your child has the behavioral foundation. They know the routine. They know what the toilet is for. What they've been missing is the body signal, the internal "I need to go" that every other method assumed was already there.
      </p>
      <p style={{
        fontSize: 15, lineHeight: 1.7, color: "#B8CACD",
        margin: "0 0 24px", fontFamily: "Georgia, serif",
      }}>
        This adds the missing piece to everything they've already learned.
      </p>

      {/* Primary CTA Button */}
      <a href="#" style={{
        display: "inline-block", padding: "17px 32px",
        background: "#D8F57C", color: "#1F2D2F",
        fontSize: 15.5, fontWeight: 700,
        textDecoration: "none", borderRadius: 999,
        letterSpacing: 0.3,
        fontFamily: "Plus Jakarta Sans, Inter, sans-serif",
      }}>
        Add the Sensory Layer, Get the 3+3 Bundle →
      </a>

      {/* Secondary link */}
      <div style={{ marginTop: 18 }}>
        <a href="#" style={{
          fontSize: 12, color: "#8A9B9D",
          textDecoration: "underline",
          fontFamily: "Georgia, serif",
        }}>
          Start with 1 Pair ($34.99), see if the signal works first
        </a>
      </div>

      {/* Fine print */}
      <div style={{ marginTop: 14, fontSize: 11.5, color: "#8A9B9D", fontFamily: "Georgia, serif" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </div>
    </div>

    {/* ══════ NEXT TIME TEASER ══════ */}
    <div style={{ padding: "24px 24px" }}>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4A6568", margin: 0, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
        Next time: The research behind the body-signal approach — and why 49% of children face this gap.
      </p>
    </div>

    {/* ── Signoff ── */}
    <Signoff />

    {/* ── OutLine + Footer ── */}
    <OutLine />
    <Footer />

    {/* ── Dark Mode ── */}
    <style>{`
      @media (prefers-color-scheme: dark) {
        /* Global overrides */
        body, .email-wrap, table td { background-color: #1a1f1e !important; }
        h1, h2, h3, strong { color: #f0f0f0 !important; }
        p, span, td, div { color: #d0d0d0 !important; }

        /* Hero section */
        [style*="background: #F5F0EB"],
        [style*="background-color: #F5F0EB"] {
          background-color: #2a2520 !important;
        }

        /* CTA dark block */
        [style*="background: #1F2D2F"],
        [style*="background-color: #1F2D2F"] {
          background-color: #0d1516 !important;
        }

        /* Guarantee sage block */
        [style*="background: #F0F4EE"],
        [style*="background-color: #F0F4EE"] {
          background-color: #1e2822 !important;
        }

        /* Pull quote / callout boxes */
        [style*="background: #F5F0EB"],
        [style*="background-color: #F5F0EB"] {
          background-color: #2a2520 !important;
        }

        /* Product card backgrounds */
        [style*="background: #FDFBF8"],
        [style*="background-color: #FDFBF8"] {
          background-color: #1e1f1e !important;
        }

        /* Mechanism layer backgrounds */
        [style*="background: #F5EDE0"],
        [style*="background-color: #F5EDE0"] {
          background-color: #2a2520 !important;
        }
        [style*="background: #E8DCC8"],
        [style*="background-color: #E8DCC8"] {
          background-color: #2a2820 !important;
        }

        /* Link color */
        a { color: #2BAEB4 !important; }

        /* CTA button override */
        [style*="background: #D8F57C"],
        [style*="background-color: #D8F57C"] {
          background-color: #2BAEB4 !important;
          color: #1a1f1e !important;
        }

        /* Image dimming */
        img { opacity: 0.85; }
      }
    `}</style>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E2_L2 });
