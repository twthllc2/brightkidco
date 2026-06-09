/* Winback Path B — E3 | GF (General Fallback, All Levels)
   Wireframe: wireframes/winback-b/winback-b-24-e3-gf.md
   Strategy: strategy-map.json → flows.winback-b.emails.e3-gf
   Generated: 2026-06-09
*/

const Email_winback_b_24_e3_gf = () => (
  <EmailShell preheader="If your child's situation ever changes, or if today just isn't the day, the door's always open." bg="#FBF7F1">

    {/* === SECTION 1: HEADER === */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.ink, marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
      <div style={{ height: 2, background: "#039902", marginTop: 12 }} />
    </div>

    {/* === SECTION 2: HERO — HERO-20 Handwritten Letter Opener === */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px 32px" }}>
      <h1 style={{
        fontFamily: F.main, fontSize: 28, fontWeight: 400, lineHeight: 1.3,
        color: B.ink, margin: 0,
      }}>
        One last thing before I go quiet
      </h1>

      {/* Threshold illustration — single thin light line through door crack */}
      <div style={{ marginTop: 20, marginBottom: 8 }}>
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          {/* Door frame */}
          <rect x="10" y="4" width="60" height="52" rx="2" stroke="#6B8E6B" strokeWidth="1.5" fill="none" />
          {/* Door crack — light line forming lowercase "i" */}
          <line x1="40" y1="10" x2="40" y2="50" stroke="#6B8E6B" strokeWidth="1.5" />
          {/* Dot of the "i" */}
          <circle cx="40" cy="7" r="1.5" fill="#6B8E6B" />
        </svg>
      </div>

      <div style={{ height: 32 }} />
    </div>

    {/* === SECTION 3: HOOK — Whether...Or...If... (LETTER-02) === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        Whether your child is 3 and just starting to show signs of resistance, or 10 and you've stopped counting the attempts, if they don't seem to feel when they need to go, you've been trying to solve a problem that standard methods weren't built for.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        This my last email in this series. Not because the door closes, because I don't believe in filling your inbox with noise when you've already had enough on your plate.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: 0,
      }}>
        I want to leave you with one thing.
      </p>
    </div>

    {/* === DIVIDER === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed #8A9B9D" }} />
    </div>

    {/* === SECTION 4: VALIDATION — Problem Was Never You === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <div style={{
        background: "#FBF7EB", borderRadius: 16, borderLeft: "4px solid #DBFFCD",
        padding: 20,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          You've probably thought some version of: "What am I doing wrong?" Or "Why can't I figure this out?" Or maybe you've moved past that entirely and just accepted this how things are.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          Let me be clear: the research says something different than what you've probably internalized.
        </p>

        {/* Stat card — 49% highlight */}
        <div style={{
          background: "#FBF7EB", borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          padding: "20px 16px", marginBottom: 16,
        }}>
          <div style={{
            fontFamily: F.main, fontSize: 28, fontWeight: 400,
            color: "#039902", textAlign: "center", marginBottom: 4,
          }}>
            49%
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 16, fontWeight: 400,
            color: B.soft, textAlign: "center", lineHeight: 1.4,
          }}>
            of autistic 4-5 year olds aren't toilet trained yet.
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 13, fontWeight: 400,
            color: B.muted, textAlign: "center", marginTop: 6,
          }}>
            Wiggins et al. 2022, CDC-funded
          </div>
        </div>

        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          Nearly half of autistic 4-5 year olds, 49%, aren't toilet trained yet (Wiggins et al. 2022, CDC-funded SEED-2 study of 743 children). That's 6 times the rate of typically developing kids the same age.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          And a 2025 review of 49 scientific studies confirmed that body signal differences, the ability to feel body signals like a full bladder, are a well-established feature of autism (Barmpagiannis & Baldimtsi 2025). This isn't a theory. It's settled science.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: 0,
        }}>
          You didn't fail. The methods were solving the wrong problem.
        </p>
      </div>
    </div>

    {/* === DIVIDER === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed #8A9B9D" }} />
    </div>

    {/* === SECTION 5: MECHANISM — BSL Layer (EDU-1) === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      {/* Eyebrow */}
      <div style={{
        fontFamily: F.main, fontSize: 13, fontWeight: 400,
        letterSpacing: 1.5, textTransform: "uppercase",
        color: B.muted, marginBottom: 10,
      }}>
        WHAT CHANGES
      </div>

      {/* Mechanism highlight — mint left border */}
      <div style={{
        borderLeft: "4px solid #DBFFCD", padding: 16,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          Here's the piece most parents never hear:
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          Standard potty training, sticker charts, timer sits, reward systems, all assume your child can feel the "I need to go" signal. For kids whose nervous systems process body signals differently, that signal arrives too late or doesn't arrive at all.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          The Body-Signal Learning Layer (BSL) doesn't change your child. It gives their brain information it's been missing. A gentle sensation that lasts, 30 to 60 seconds, that bridges the gap between "something is happening" and "I know what to do about it."
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          Interoception researcher Kelly Mahler calls it the "eighth sensory system", the sense that tells us when we're hungry, thirsty, or need the bathroom. For autistic children, this sense works differently (Mahler 2016).
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          And here's what gives me genuine hope: interoception can be trained. An 8-week study showed autistic children's body awareness significantly improved with structured practice noticing internal signals (Hample, Mahler & Amspacher 2020).
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 8px",
        }}>
          It's not permanent. It's not a life sentence. It's a gap that can be bridged.
        </p>
      </div>

      {/* Citations */}
      <div style={{
        fontFamily: F.main, fontSize: 12, fontWeight: 400,
        color: B.muted, marginTop: 8,
      }}>
        Kelly Mahler "eighth sensory system" reference
      </div>
      <div style={{
        fontFamily: F.main, fontSize: 12, fontWeight: 400,
        color: B.muted, marginTop: 4,
      }}>
        "Interoception can be trained." [Hample, Mahler & Amspacher 2020]
      </div>
    </div>

    {/* === DIVIDER === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed #8A9B9D" }} />
    </div>

    {/* === SECTION 6: MINI-WIN GRID — CONTRAPTION === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        I want to be honest about what "success" means here, because I think the industry has taught us the wrong definition.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        Success is not "fully trained in 30 days." Success is:
      </p>

      {/* 3×2 Mini-Win Grid */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12,
        marginBottom: 16,
      }}>
        {/* Card 1: Look at wet spot */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #DBFFCD",
          borderRadius: 12, padding: 16, textAlign: "center",
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 8 }}>
            <circle cx="24" cy="24" r="18" stroke="#039902" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="8" stroke="#039902" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="3" fill="#039902" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.soft, lineHeight: 1.4 }}>
            Look at wet spot
          </div>
        </div>

        {/* Card 2: Pull at pants */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #DBFFCD",
          borderRadius: 12, padding: 16, textAlign: "center",
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 8 }}>
            <path d="M14 12 L14 36 L20 40 L28 40 L34 36 L34 12 Z" stroke="#039902" strokeWidth="1.5" fill="none" />
            <line x1="14" y1="24" x2="34" y2="24" stroke="#039902" strokeWidth="1.5" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.soft, lineHeight: 1.4 }}>
            Pull at pants
          </div>
        </div>

        {/* Card 3: Pause before */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #DBFFCD",
          borderRadius: 12, padding: 16, textAlign: "center",
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 8 }}>
            <rect x="14" y="12" width="6" height="24" rx="1" fill="#039902" />
            <rect x="28" y="12" width="6" height="24" rx="1" fill="#039902" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.soft, lineHeight: 1.4 }}>
            Pause before
          </div>
        </div>

        {/* Card 4: Stay dry 2 hours */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #DBFFCD",
          borderRadius: 12, padding: 16, textAlign: "center",
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 8 }}>
            <circle cx="24" cy="26" r="16" stroke="#039902" strokeWidth="1.5" />
            <line x1="24" y1="26" x2="24" y2="16" stroke="#039902" strokeWidth="1.5" />
            <line x1="24" y1="26" x2="30" y2="26" stroke="#039902" strokeWidth="1.5" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.soft, lineHeight: 1.4 }}>
            Stay dry 2 hours
          </div>
        </div>

        {/* Card 5: No meltdown */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #DBFFCD",
          borderRadius: 12, padding: 16, textAlign: "center",
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 8 }}>
            <circle cx="24" cy="24" r="16" stroke="#039902" strokeWidth="1.5" />
            <line x1="14" y1="14" x2="34" y2="34" stroke="#039902" strokeWidth="1.5" />
            <line x1="34" y1="14" x2="14" y2="34" stroke="#039902" strokeWidth="1.5" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.soft, lineHeight: 1.4 }}>
            No meltdown
          </div>
        </div>

        {/* Card 6: Show gesture */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #DBFFCD",
          borderRadius: 12, padding: 16, textAlign: "center",
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 8 }}>
            <circle cx="24" cy="12" r="4" stroke="#039902" strokeWidth="1.5" fill="none" />
            <line x1="24" y1="16" x2="24" y2="32" stroke="#039902" strokeWidth="1.5" />
            <line x1="24" y1="32" x2="18" y2="40" stroke="#039902" strokeWidth="1.5" />
            <line x1="24" y1="32" x2="30" y2="40" stroke="#039902" strokeWidth="1.5" />
            <line x1="24" y1="22" x2="16" y2="18" stroke="#039902" strokeWidth="1.5" />
            <line x1="24" y1="22" x2="32" y2="18" stroke="#039902" strokeWidth="1.5" />
          </svg>
          <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: B.soft, lineHeight: 1.4 }}>
            Show gesture
          </div>
        </div>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        These aren't failures. These are the first signals arriving. For some kids, that first pause happens in 2 weeks. For others, it takes 8 weeks. Both are normal.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        One mom told us: "He paused. He felt something." After 4 years of nothing, that was everything.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        Another: "He looked down at the wet spot for the first time in 9 years."
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: 0,
      }}>
        These are real wins. Not because they mean the journey is over, but because they mean the journey has started.
      </p>
    </div>

    {/* === DIVIDER === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed #8A9B9D" }} />
    </div>

    {/* === SECTION 7: OFFER + GUARANTEE === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <div style={{
        background: "#FBF7EB", borderRadius: 16, padding: 24,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "0 0 16px",
        }}>
          If you've read this far and something clicked, if you recognized your child in any of those descriptions, the product is here. Always has been, always will be.
        </p>

        {/* Pricing card */}
        <div style={{
          background: "#FFFFFF", borderRadius: 16, padding: 20,
          marginBottom: 16,
        }}>
          <div style={{ fontFamily: F.main, fontSize: 20, fontWeight: 400, color: B.ink, marginBottom: 4 }}>
            The 3+3 Bundle: 6 pairs of Body-Signal Learning Underwear for $79.99 with free shipping.
          </div>
          <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: B.soft }}>
            1 Pair: $34.99
          </div>
        </div>

        {/* Guarantee strip */}
        <div style={{
          background: "#DBFFCD", borderRadius: 8, padding: "12px 16px",
          textAlign: "center",
        }}>
          <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: B.ink }}>
            60 days to try it. By your judgment.
          </div>
        </div>

        <p style={{
          fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
          color: B.soft, margin: "16px 0 0",
        }}>
          If your child shows no sign of body awareness, no pause, no look, no step toward the potty, no gesture, full refund. No forms. No questions. That's not a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.
        </p>
      </div>
    </div>

    {/* === SECTION 8: CTA BUTTON === */}
    <div style={{ background: "#FFFFFF", padding: "16px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <a href="https://www.brightkidco.com/products/3-3-bundle" style={{
          display: "block", maxWidth: 320, margin: "0 auto",
          padding: "16px 32px", minHeight: 48,
          background: B.teal, color: "#FFFFFF",
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.0, textDecoration: "none",
          borderRadius: 8, textAlign: "center",
        }}>
          Try it for 60 days, your judgment →
        </a>
      </div>
      <div style={{
        fontFamily: F.main, fontSize: 13, fontWeight: 400, fontStyle: "italic",
        color: B.muted, textAlign: "center",
      }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </div>
    </div>

    {/* === SECTION 9: FINAL WORD — Door Is Open === */}
    <div style={{ background: "#FFFFFF", padding: "24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        If today isn't the day, I mean that.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        I have two autistic sons. One trained at 6. The other took us until he was almost 8. I took breaks. I stepped back. I know what it's like when "later" turns into another year.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        But I also know what it's like to find something that finally makes sense. Not because it promises everything, but because it explains why nothing else worked.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: 0,
      }}>
        When you're ready, the science will still be here. So will I.
      </p>
    </div>

    {/* === DIVIDER — Green rule === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ height: 2, background: "rgba(3,153,2,0.3)" }} />
    </div>

    {/* === SECTION 10: LENA SIGN-OFF — Long Variant (Winback) === */}
    <div style={{ background: "#FBF7F1", padding: "32px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400, color: B.ink,
        margin: "0 0 8px",
      }}>
        With care,
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400, color: B.ink,
        margin: "0 0 4px",
      }}>
        Lena ——
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 13, fontWeight: 400, color: B.muted,
        margin: "0 0 16px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Dashed divider */}
      <div style={{ borderTop: "1px dashed #8A9B9D", margin: "16px 0" }} />

      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6,
        color: B.soft, margin: 0,
      }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment. <a href="https://www.brightkidco.com/products/3-3-bundle" style={{ color: B.teal, textDecoration: "underline" }}>Link</a>
      </p>
    </div>

    {/* === DIVIDER === */}
    <div style={{ background: "#FFFFFF", padding: "0 24px" }}>
      <div style={{ height: 1, background: "rgba(224,224,224,0.5)" }} />
    </div>

    {/* === SECTION 11: FOOTER === */}
    <div style={{ background: "#FFFFFF", padding: "16px 24px 20px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.5,
        color: B.muted, margin: "0 0 8px",
      }}>
        You're receiving this email because you signed up at BrightKidCo. If you'd prefer not to hear from us anymore, you can <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>unsubscribe</a> here.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 12, fontWeight: 400, lineHeight: 1.5,
        color: B.muted, margin: 0,
      }}>
        BrightKidCo LLC · [Physical Address] · support@brightkidco.com
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e3_gf });
