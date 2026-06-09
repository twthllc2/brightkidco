/* Winback Path B — E3 | L2 (Lisa, BCBA-Professional Parent)
   Flow 24 · Day 74 · L2
   Wireframe: wireframes/winback-b/winback-b-24-e3-l2.md
   Generated: 2026-06-09
*/

const Email_winback_b_24_e3_l2 = () => (
  <EmailShell preheader="This my last email. No pressure, just one piece that might still fit." bg={B.cream}>

    {/* ══════════════════════════════════════════════════════════════
       SIGNAL BAR — CONTRAPTION
       Green bar tapering to a 12px dot, "Still here when you are."
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ padding: "20px 24px 0", background: B.cream }}>
      <div style={{ position: "relative", height: 24 }}>
        {/* Green bar — full width left, tapers to dot right */}
        <div style={{
          position: "absolute", top: 10, left: 0, right: 18,
          height: 3,
          background: "#039902",
          borderRadius: "2px 0 0 2px",
        }} />
        {/* 12px dot at right edge */}
        <div style={{
          position: "absolute", top: 5, right: 0,
          width: 12, height: 12,
          background: "#039902",
          borderRadius: "50%",
        }} />
      </div>
      <div style={{
        textAlign: "right", marginTop: 8, marginBottom: 16,
        fontFamily: F.main, fontSize: 11, color: "#9AA8A7",
      }}>
        Still here when you are.
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       HEADER — Wordmark + From Name
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "16px 32px", borderBottom: "1px solid #DBFFCD" }}>
      <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, letterSpacing: 1, color: B.ink, textTransform: "uppercase" }}>
        BrightKidCo
      </div>
      <div style={{ fontFamily: F.main, fontSize: 13, color: B.soft, marginTop: 4 }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       HERO — HERO-20 Handwritten Letter Opener
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 32px 24px" }}>
      <h1 style={{
        fontFamily: F.main, fontSize: 28, fontWeight: 400, lineHeight: 1.3,
        color: B.ink, margin: 0,
      }}>
        60 days later, one honest thing
      </h1>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 1: HOOK — LETTER-02 Handwritten Opener
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "24px 32px", fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink }}>
      <p style={{ margin: "0 0 16px" }}>
        Two months ago you signed up. You read the science. Maybe you showed it to your BCBA. Maybe you saved it for later.
      </p>
      <p style={{ margin: "0 0 16px" }}>
        I don't know where you landed. Whether you decided to wait, found something else, or just got buried under everything else you're managing, I get it. All of it.
      </p>
      <p style={{ margin: 0 }}>
        This my last email. Not because I'm giving up on you. Because after two months, I owe you an honest signal: the door stays open, but I won't keep tapping.
      </p>
    </div>

    {/* ── Hairline ── */}
    <div style={{ height: 1, background: "#FBF7EB", margin: "0 24px" }} />

    {/* ══════════════════════════════════════════════════════════════
       SECTION 2: VALIDATION + FAILED-METHOD NAMING
       Cream card, left green border
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 24px" }}>
      <div style={{
        background: "#FBF7EB", borderRadius: 16, padding: 20,
        borderLeft: "3px solid #039902",
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink,
      }}>
        <p style={{ margin: "0 0 16px" }}>
          You've been through protocols your BCBA designed specifically for your child. You've sat on the bathroom floor for hours. You've watched your child hold and withhold and struggle with a sensation no one else seems able to explain.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          And you're still here, reading this. That's not stubbornness. That's a mom who hasn't found the missing piece yet, and knows it exists.
        </p>
        <p style={{ margin: 0 }}>
          {"You didn\u2019t fail. The methods assumed your child could feel the \u201CI need to go\u201D signal. Standard potty training, ABA protocols, even well-intentioned OT strategies all make one assumption: the signal arrives. For many autistic children, it doesn\u2019t, not in time, not in a way the brain can use."}
        </p>
      </div>
    </div>

    {/* ── Hairline ── */}
    <div style={{ height: 1, background: "#FBF7EB", margin: "0 24px" }} />

    {/* ══════════════════════════════════════════════════════════════
       SECTION 3: MECHANISM REFRESHER
       Science citations + stat box
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "24px 32px", fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink }}>
      <p style={{ margin: "0 0 16px" }}>
        Here's the piece I want you to sit with one more time:
      </p>
      <p style={{ margin: "0 0 16px" }}>
        Interoception researcher Kelly Mahler calls it the eighth sensory system, the internal sense that tells us when we're hungry, thirsty, or need the bathroom. For autistic children, this system works differently. Not broken. Just wired on a different frequency.
      </p>
      <p style={{ margin: "0 0 16px" }}>
        Nicholson et al. (2019) found that autistic children show significantly diminished body awareness, the ability to sense internal body states like bladder fullness. It's not training. It's neurology.
      </p>

      {/* ── Stat Box — Mint #DBFFCD ── */}
      <div style={{
        background: "#DBFFCD", borderRadius: 12, padding: 12, margin: "0 0 16px",
      }}>
        <div style={{ fontFamily: F.main, fontSize: 22, fontWeight: 400, color: "#039902", marginBottom: 8 }}>
          49%
        </div>
        <div style={{ fontFamily: F.main, fontSize: 16, color: B.ink, lineHeight: 1.5, marginBottom: 8 }}>
          of autistic 4-5 year olds aren't toilet trained. 6x the rate of typically developing kids.
        </div>
        <div style={{ fontFamily: F.main, fontSize: 13, color: B.muted }}>
          SPARK study, Wiggins et al. 2022
        </div>
      </div>

      <p style={{ margin: "0 0 16px" }}>
        The Body-Signal Learning Layer doesn't replace what your BCBA has built. It adds the sensory component, 30-60 seconds of sustained "uh-oh" feedback that gives a nervous system that picks up signals slowly time to register: something happened.
      </p>
      <p style={{ margin: 0 }}>
        Pull-ups wick that signal away completely. Standard underwear gives a signal that's too diffuse, too quick. Ours creates the gentle sensation that lasts the brain needs.
      </p>
    </div>

    {/* ── Hairline ── */}
    <div style={{ height: 1, background: "#FBF7EB", margin: "0 24px" }} />

    {/* ══════════════════════════════════════════════════════════════
       SECTION 4: BCBA ACKNOWLEDGMENT + TESTIMONIAL
       Cream card with testimonial sub-card
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 24px" }}>
      <div style={{
        background: "#FBF7EB", borderRadius: 16, padding: 24,
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink,
      }}>
        <p style={{ margin: "0 0 16px" }}>
          Your BCBA has been working with your child for years. They've built routines, compliance, sitting tolerance, desensitization. That work isn't wasted. It's the foundation.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          What we hear from BCBAs who recommend us is consistent: "ABA gave us the behavior piece. We needed something for the sensory piece." The Body-Signal Learning Layer fits alongside existing programming. It's not a replacement. It's the missing input channel.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          Here's what one L2 mom told us last month, and I'm sharing it because it's exactly the kind of win you might see:
        </p>

        {/* ── Testimonial Card ── */}
        <div style={{
          borderLeft: "2px solid #9AA8A7", padding: "16px 20px", margin: "0 0 16px",
        }}>
          <div style={{ color: "#039902", fontSize: 36, lineHeight: 1, marginBottom: 8 }}>"</div>
          <div style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", color: B.soft, lineHeight: 1.5 }}>
            After 4 years of prompt-dependent sits, my son initiated. Once. He walked to the bathroom on his own. It wasn't a full success, he went after sitting there for a few minutes, not before. But he walked there himself. For the first time in his life, his body told him something and he followed it to the right room.
          </div>
          <div style={{ fontFamily: F.main, fontSize: 13, color: B.muted, marginTop: 10 }}>
            — L2 parent, verbatim
          </div>
        </div>

        <p style={{ margin: 0 }}>
          That's not a miracle. That's a signal finally arriving. It took her son 6 weeks of wearing the underwear before that happened. Weeks of nothing, then a pause, then a look down, then one step toward the bathroom.
        </p>
      </div>
    </div>

    {/* ── Hairline ── */}
    <div style={{ height: 1, background: "#FBF7EB", margin: "0 24px" }} />

    {/* ══════════════════════════════════════════════════════════════
       SECTION 5: REALISTIC TIMELINES + GUARANTEE
       Timeline callout box with em-dash list
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "24px 32px", fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink }}>
      <p style={{ margin: "0 0 16px" }}>
        If you ever decide to try, here's what honest timelines look like for kids like yours:
      </p>

      {/* ── Timeline Callout Box ── */}
      <div style={{
        border: "1px solid #039902", borderRadius: 12, padding: 20, margin: "0 0 16px",
      }}>
        <div style={{ marginBottom: 8 }}>
          — L2 kids typically show first signals in <span style={{ color: "#039902" }}>4-8 weeks</span>.
        </div>
        <div style={{ marginBottom: 8 }}>
          — Some need 12+. Progress isn't linear. Regression cycles are normal, they're not starting over, they're recalibrating.
        </div>
        <div>
          — The <span style={{ color: "#039902" }}>60-day guarantee</span> covers the full learning window.
        </div>
      </div>

      <p style={{ margin: 0, color: "#039902" }}>
        If your child shows no awareness, no pause, no look, no step, full refund. Not because we're generous. Because an honest product doesn't need to trap you.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       SECTION 6: PERMISSION-NOT-TO-BUY + CTA — Green Band
       Full-width #039902, white text, pill CTA
       ══════════════════════════════════════════════════════════════ */}
    <div style={{
      background: "#039902", padding: "40px 32px", textAlign: "center",
      fontFamily: F.main, fontSize: 17, color: "#FFFFFF", lineHeight: 1.6,
    }}>
      <p style={{ margin: "0 0 16px" }}>
        If today isn't the day, that's a real answer. The product will be here next month. So will I.
      </p>
      <p style={{ margin: "0 0 24px" }}>
        But if you're still wondering whether this could be the missing piece for your child, the 60-day guarantee means you don't have to believe me. You just have to try. Your judgment. Your timeline. Your call.
      </p>

      {/* ── CTA Pill Button — White bg, green text ── */}
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 32px",
        background: "#FFFFFF",
        color: "#039902",
        fontFamily: F.main, fontSize: 17, fontWeight: 400,
        textDecoration: "none", borderRadius: 50,
        minHeight: 48, lineHeight: "48px",
        boxSizing: "border-box",
      }}>
        {"Try the 3+3 Bundle, 60-Day Guarantee"}
      </a>

      <div style={{ marginTop: 16, fontFamily: F.main, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </div>

      <div style={{ marginTop: 12, fontFamily: F.main, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
        <a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>
          1 Pair ($34.99) to try
        </a>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════════════
       LENA SIGN-OFF — Long Variant (Dark Background)
       Two-Dot Signature Easter Egg
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: 24, fontFamily: F.main, color: "#FFFFFF" }}>
      {/* "With care," */}
      <div style={{ fontSize: 20, letterSpacing: 0.5 }}>
        With care,
      </div>

      {/* ── Two-Dot Signature Easter Egg ── */}
      {/* Two asymmetric white dots at 40% opacity, one slightly higher */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, marginBottom: 12 }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#FFFFFF", opacity: 0.4,
          marginTop: -2,
        }} />
        <div style={{
          width: 6, height: 6, borderRadius: "50%", background: "#FFFFFF", opacity: 0.4,
          marginTop: 2,
        }} />
      </div>

      {/* Lena —— */}
      <div style={{ fontSize: 18, marginBottom: 4 }}>
        Lena ——
      </div>
      <div style={{ fontSize: 13, opacity: 0.7 }}>
        Customer Support · Mom of two autistic sons
      </div>

      {/* ── White divider at 30% opacity ── */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.3)", margin: "20px 0" }} />

      {/* P.S. */}
      <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
        P.S. I have two autistic sons. One trained at 6. The other at almost 8. I know what it's like to wait, and to wonder if you should try one more time. Trust your read. If this isn't the moment, the science will still be here when it is.
      </div>

      {/* P.P.S. */}
      <div style={{ fontSize: 14, lineHeight: 1.6 }}>
        P.P.S. Reply to this email anytime, it comes to me, not a bot. If you have a question I haven't answered, hit reply. I read everything.
      </div>
    </div>

    {/* ── 1px rule ── */}
    <div style={{ height: 1, background: "rgba(224,224,224,0.5)" }} />

    {/* ══════════════════════════════════════════════════════════════
       FOOTER
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "16px 32px", fontFamily: F.main, fontSize: 11, color: B.muted }}>
      <div style={{ marginBottom: 8 }}>
        You're receiving this email because you signed up at BrightKidCo. If you'd prefer not to hear from us anymore, you can unsubscribe here.
      </div>
      <div>
        BrightKidCo LLC · support@brightkidco.com
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e3_l2 });
