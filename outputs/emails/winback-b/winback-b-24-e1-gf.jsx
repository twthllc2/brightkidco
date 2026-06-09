/* Winback Path B — E1 | GF (General Fallback, All Levels)
   Wireframe: wireframes/winback-b/winback-b-24-e1-gf.md
   Copy: copy/winback-b/winback-b-24-e1-gf.md
   Strategy: strategy-map.json → flows.winback-b.emails.e1-gf
   Generated: 2026-06-09
*/

const Email_winback_b_24_e1_gf = () => (
  <EmailShell preheader="No reply needed. But if your child's body-signal learning has been on your mind, this might be the nudge you need." bg="#FBF7F1">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#F6F2EA", padding: "6px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 11, fontStyle: "italic", color: "#9AA8A7" }}>
        No reply needed. But if your child's body-signal learning has been on your mind, this might be the nudge you need.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", marginTop: 8 }}>
        Lena from BrightKidCo
      </div>
      <div style={{ height: 2, background: "#039902", marginTop: 12 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO-13 — Scientific Hook (Subject Echo)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "40px 24px 32px", position: "relative" }}>
      {/* Soft leaf illustration — lower-left corner */}
      <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: "absolute", bottom: 40, left: 24, opacity: 0.6 }}>
        <path d="M10,50 Q15,30 30,20 Q25,35 40,15 Q30,30 45,10 Q35,28 50,8" stroke="#6B8E6B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M30,20 Q28,28 30,40" stroke="#6B8E6B" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 400, lineHeight: 1.3, color: "#1F2D2F", margin: 0, textAlign: "center" }}>
        60 days. Still curious?
      </h1>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: DESDEEP-16 — Paper Texture Band
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 8, background: "linear-gradient(180deg, #F6F2EA 0%, #FBF7F1 100%)" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: OBSERVATION — Recognition Anchors
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* Opening line */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        Maybe your child sits on the toilet and nothing happens, then pees thirty seconds after standing up. You wait, you watch, you feel hopeful, and then you're changing clothes again.
      </p>

      {/* Observation Card — Cream bg, Mint left-border */}
      <div style={{
        background: "#FBF7EB",
        borderLeft: "4px solid #DBFFCD",
        borderRadius: 16,
        padding: 16,
        margin: "0 0 16px",
      }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          • Sits on the toilet, nothing happens, then pees 30 seconds after standing up.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          • Plays through a wet pull-up like nothing's wrong. No pause. No reaction. Just playing, soaked, unbothered.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          • Never given a single signal. No word. No gesture. No glance toward the bathroom. Just silence.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          • Younger, methods aren't clicking. Sticker chart didn't work. Timed sits turned into a power struggle.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          • Older child, stopped counting failed attempts. Not because you gave up, because you needed to protect yourself from the hope-crash cycle.
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        If any of that sounds familiar, you're not behind. You're not doing anything wrong. You're dealing with something most potty training advice doesn't account for: a nervous system that processes body signals differently.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER — 1px dashed #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed rgba(154,168,167,0.25)" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: VALIDATION — Research-Backed Reframe
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px" }}>
        Research shows that children with autism have significantly reduced ability to sense internal body signals, including when they need to use the bathroom (Nicholson et al., 2019). It's not defiance. It's not stubbornness. And it's certainly not that you haven't tried hard enough.
      </p>

      {/* Stat Card — 49% */}
      <div style={{
        background: "#FBF7EB",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        padding: "20px 24px",
        textAlign: "center",
        margin: "0 0 16px",
      }}>
        <div style={{ fontFamily: F.main, fontSize: 28, fontWeight: 400, color: "#1F2D2F", lineHeight: 1.2 }}>
          49%
        </div>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#4A4A4A", margin: "8px 0 6px" }}>
          of autistic 4-5 year olds aren't toilet trained, vs 8% of typically developing.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#9AA8A7", margin: 0 }}>
          SPARK study, Wiggins et al. 2022
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Nearly half of autistic 4-5 year olds aren't toilet trained, 49%, to be exact. That's compared to just 8% of typically developing children the same age (SPARK study, Wiggins et al., 2022). This isn't a parenting failure. This is a documented, measurable neurological difference.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER — 1px dashed #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed rgba(154,168,167,0.25)" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: MECHANISM — Interoception Gap (ED8)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* Eyebrow */}
      <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, letterSpacing: 1.5, textTransform: "uppercase", color: "#9AA8A7", marginBottom: 16 }}>
        WHAT'S ACTUALLY HAPPENING
      </div>

      {/* Mechanism Highlight Box — Mint left-border */}
      <div style={{
        borderLeft: "4px solid #DBFFCD",
        padding: 16,
        margin: "0 0 20px",
      }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          Interoception researcher Kelly Mahler calls it the 'eighth sensory system', the sense that tells you when you're hungry, thirsty, or need the bathroom. For many children with sensory differences, this system sends the signal late. Or quietly. Or not at all.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          A 2025 review of 49 scientific studies confirmed that body signal difficulties are a well-established feature of autism, not a theory, not a guess, not a trend. This is settled science (Barmpagiannis & Baldimtsi, 2025).
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          The signal comes, but by the time the brain processes it, the body has already let go. Only 19% of autistic children can recognize when they're thirsty. If they can't feel thirst, one of the most basic body signals, imagine how hard it is to feel a full bladder (Iqbal, 2022).
        </p>
      </div>

      {/* Soft dashed divider */}
      <div style={{ borderTop: "1px dashed rgba(154,168,167,0.4)", margin: "0 0 20px" }} />

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        This is why methods that rely on motivation, rewards, or schedules so often fail. You can't reward a child for feeling something their brain hasn't registered yet. It's not about trying harder. It's about giving the nervous system something it can actually work with.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        The good news: interoception can be trained. An 8-week study showed that autistic children's body awareness significantly improved when they were given structured practice noticing internal signals (Hample, Mahler & Amspacher, 2020). The earlier you start, the better.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
        <span style={{ color: "#039902" }}>BrightKidCo Body-Signal Learning Underwear is designed around this gap.</span> Instead of wicking wetness away the way pull-ups do, our underwear lets a child feel the sensation. Just enough to start building the brain-body connection.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Internal observation from 672 families showed that kids who wore them consistently for 2+ hours a day showed <span style={{ color: "#5DD07A" }}>clearer body awareness within 2-4 weeks</span>. Not overnight. Not magic. Not every child, but a meaningful majority.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER — 1px dashed #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed rgba(154,168,167,0.25)" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: SECONDARY DOUBT HANDLING
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      {/* White Card with Mint accent border */}
      <div style={{
        background: "#FFFFFF",
        border: "1px solid #DBFFCD",
        borderRadius: 16,
        padding: 24,
      }}>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          Maybe you're thinking: 'I've tried so many things already. What makes this different?'
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 14px" }}>
          That's a fair question. The difference isn't the promise. It's the mechanism. This isn't a sticker chart with a better design. It's not a timer with a different interval. It's a fundamentally different understanding of what's happening, and that understanding is backed by 49 scientific studies on interoception and autism.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
          You don't have to believe me. You don't have to believe the research. You only have to believe your own eyes, and 60 days to see if something shifts.
        </p>

        {/* GF Parent Testimonial */}
        <p style={{ fontFamily: F.display, fontSize: 15, fontStyle: "italic", lineHeight: 1.6, color: "#4A4A4A", margin: 0 }}>
          One GF parent told us: 'He knew the routine. He could tell me "I need to pee" after he'd already gone. We spent months thinking he was being difficult. Turned out the signal was reaching his brain after he was already wet. Once we addressed that, everything shifted.'
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER — 1px dashed #9AA8A7 25%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ borderTop: "1px dashed rgba(154,168,167,0.25)" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: PERMISSION + PRICING (CTA-5 + Product)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px" }}>
        I'm not going to tell you this is the solution for every child. Every nervous system is different. What I can tell you is this: the 60-day guarantee means you can try it without wondering 'what if.'
      </p>

      {/* Pricing Card */}
      <div style={{
        background: "#FFFFFF",
        border: "1px solid #E8E2DA",
        borderRadius: 16,
        padding: 24,
        margin: "0 0 16px",
      }}>
        <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 400, color: "#1F2D2F", margin: "0 0 8px" }}>
          1 Pair: $34.99
        </p>
        <p style={{ fontFamily: F.main, fontSize: 20, fontWeight: 400, color: "#1F2D2F", margin: "0 0 8px" }}>
          3+3 Bundle (BESTSELLER): $79.99
        </p>
        <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#5DD07A", margin: 0 }}>
          Free shipping on bundle
        </p>
      </div>

      {/* Worry-Free Return Card — Contraption */}
      <div style={{
        background: "#FBF7EB",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        padding: "20px 16px",
        margin: "0 0 20px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          {/* Laundry basket icon */}
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F0F7EF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B8E6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h16l-1.5 11a2 2 0 01-2 2h-9a2 2 0 01-2-2L4 7z" />
                <path d="M8 7V5a4 4 0 018 0v2" />
              </svg>
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, color: "#4A4A4A" }}>Wear for<br/>60 days.</div>
          </div>
          {/* Refresh arrows icon */}
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F0F7EF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B8E6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2v6h-6" />
                <path d="M3 12a9 9 0 0115-6.7L21 8" />
                <path d="M3 22v-6h6" />
                <path d="M21 12a9 9 0 01-15 6.7L3 16" />
              </svg>
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, color: "#4A4A4A" }}>Not seeing<br/>change?</div>
          </div>
          {/* Speech bubble icon */}
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F0F7EF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B8E6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, color: "#4A4A4A" }}>Return.<br/>Your call.</div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: "center", margin: "0 0 16px" }}>
        <a href="#" style={{
          display: "inline-block",
          width: "100%",
          maxWidth: 280,
          padding: "14px 24px",
          background: "#2BAEB4",
          color: "#FFFFFF",
          fontFamily: F.main,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.0,
          textDecoration: "none",
          borderRadius: 8,
          height: 48,
          textAlign: "center",
        }}>
          See how body-signal learning works →
        </a>
      </div>

      {/* Permission note */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic", color: "#4A4A4A", margin: "0 0 8px", textAlign: "center" }}>
        If today isn't the day, that's okay too. The product will be here next month. So will I.
      </p>

      {/* Price sub-text */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, fontStyle: "italic", color: "#9AA8A7", margin: 0, textAlign: "center" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: LENA SIGN-OFF — Long Variant (Winback)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "40px 24px 24px" }}>
      {/* 2px green rule at 30% opacity */}
      <div style={{ height: 2, background: "rgba(3,153,2,0.3)", marginBottom: 24 }} />

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#1F2D2F", margin: "0 0 8px" }}>
        With care,
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#1F2D2F", margin: "0 0 4px" }}>
        Lena,
      </p>
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, color: "#9AA8A7", margin: "0 0 20px" }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* Dashed divider */}
      <div style={{ borderTop: "1px dashed #9AA8A7", margin: "0 0 20px" }} />

      {/* P.S. */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A4A4A", margin: 0 }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment. <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>Link</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER — 1px #E0E0E0 at 50%
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ borderTop: "1px solid rgba(224,224,224,0.5)" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 24px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 13, fontWeight: 400, fontStyle: "italic", color: "#2BAEB4", margin: "0 0 16px" }}>
        Wherever you are on this journey, we're glad you're here.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#9AA8A7", margin: "0 0 8px" }}>
        You're receiving this email because you signed up at BrightKidCo.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#9AA8A7", margin: "0 0 8px" }}>
        <a href="#" style={{ color: "#9AA8A7", textDecoration: "underline" }}>Manage Preferences</a> | <a href="#" style={{ color: "#9AA8A7", textDecoration: "underline" }}>Unsubscribe</a>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, fontWeight: 400, color: "#9AA8A7", margin: 0 }}>
        BrightKidCo · 123 Commerce Street, Denver, CO 80202
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e1_gf });
