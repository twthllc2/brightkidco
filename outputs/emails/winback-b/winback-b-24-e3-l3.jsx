/* Winback Path B — E3 | L3 (Maria, Dignity-First Parent)
   Flow 24 · Day 74 · L3
   Wireframe: wireframes/winback-b/winback-b-24-e3-l3.md
   Generated: 2026-06-09
*/

const Email_winback_b_24_e3_l3 = () => (
  <EmailShell preheader="This my last email unless you tell me otherwise. The door stays open either way. Whenever you're ready, if ever." bg={B.cream}>

    {/* ══════════════════════════════════════════════════════════════
       MINIMAL HEADER — Wordmark only
       No hero image. No tagline. No from name.
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "16px 24px", borderBottom: "1px solid #DBFFCD" }}>
      <div style={{ fontFamily: F.main, fontSize: 13, fontWeight: 700, letterSpacing: 1, color: B.ink, textTransform: "uppercase" }}>
        BrightKidCo
      </div>
    </div>

    {/* ── 48px Permission Cadence Spacing ── */}
    <div style={{ height: 48, background: B.cream }} />

    {/* ══════════════════════════════════════════════════════════════
       SECTION 1: RECOGNITION HOOK
       Body text leads, no headline
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: 24, fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink }}>
      <p style={{ margin: "0 0 16px" }}>
        You've been at this longer than most of us can imagine.
      </p>
      <p style={{ margin: "0 0 16px" }}>
        I don't know exactly where you are with potty training, whether you've stepped back completely, whether you still think about it sometimes, or whether you've made a kind of peace with where things are. I do know that you signed up for these emails, and that means at some point, you were looking for something different.
      </p>
      <p style={{ margin: "0 0 16px" }}>
        Maybe that was months ago. Maybe you've moved on. Maybe you're in the space that so many L3 parents describe: <em>"I don't 'hope' anymore. I just keep him clean and safe."</em>
      </p>
      <p style={{ margin: "0 0 16px" }}>
        That's not giving up. That's protecting what matters. And I want you to hear that, from one parent to another, whatever you've chosen, you've done right by your child.
      </p>
      <p style={{ margin: 0 }}>
        I've said this in every email in this series, and I mean it every time: whether you buy anything or not, whether you try again or not, whether you're still reading closely or just skimming before unsubscribing, you've been doing the hardest work a parent can do. And you've kept going, in whatever way that looks like for your family.
      </p>
    </div>

    {/* ── 48px Permission Cadence Spacing ── */}
    <div style={{ height: 48, background: B.cream }} />

    {/* ══════════════════════════════════════════════════════════════
       SECTION 2: THE VERBATIM TRIAD — The Mirror Wall
       CONTRAPTION: 6 parent quotes, two groups of three
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      {/* ── Intro text ── */}
      <div style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink, marginBottom: 20 }}>
        <p style={{ margin: 0 }}>
          I've heard versions of this from parents who've been in your shoes. Parents who've tried everything, and I mean <em>everything</em>, not as a phrase but as a lived reality:
        </p>
      </div>

      {/* ── Mint Card — Verbatim Triad ── */}
      <div style={{
        background: "#DBFFCD", borderRadius: 12, padding: 24,
      }}>
        {/* ── GROUP 1: THE EXHAUSTED ENUMERATION ── */}
        <div style={{ marginBottom: 20 }}>
          {/* Quote 1 */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", color: B.soft, lineHeight: 1.5 }}>
              "We did 40 hours of ABA a week for 2 years. He's still in pull-ups."
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: B.muted, marginTop: 6 }}>
              — L3 parent, after years of intensive therapy
            </div>
          </div>

          {/* Quote 2 */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", color: B.soft, lineHeight: 1.5 }}>
              "We even did a residential program for 3 weeks. Back in pull-ups within a month."
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: B.muted, marginTop: 6 }}>
              — L3 parent, last-resort attempt
            </div>
          </div>

          {/* Quote 3 */}
          <div style={{ marginBottom: 0 }}>
            <div style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", color: B.soft, lineHeight: 1.5 }}>
              {"I spent $2500 on a private potty consultant. Same result."}
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: B.muted, marginTop: 6 }}>
              — L3 parent, method cycling exhaustion
            </div>
          </div>
        </div>

        {/* ── 1px separator — same color as card ── */}
        <div style={{ height: 1, background: "#DBFFCD", marginBottom: 20 }} />

        {/* ── GROUP 2: THE RESIGNED PEACE ── */}
        <div>
          {/* Quote 4 */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", color: B.soft, lineHeight: 1.5 }}>
              "We stopped active training 2 years ago to focus on dignity."
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: B.muted, marginTop: 6 }}>
              — L3 parent, dignity-first parent
            </div>
          </div>

          {/* Quote 5 */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", color: B.soft, lineHeight: 1.5 }}>
              "He'll get there when he gets there. Or he won't. Either way, he's my son."
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: B.muted, marginTop: 6 }}>
              — L3 parent, resigned acceptance
            </div>
          </div>

          {/* Quote 6 */}
          <div style={{ marginBottom: 0 }}>
            <div style={{ fontFamily: F.main, fontSize: 16, fontStyle: "italic", color: B.soft, lineHeight: 1.5 }}>
              "Maybe one day. Maybe never. We're at peace either way."
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: B.muted, marginTop: 6 }}>
              — L3 parent, quiet resolution
            </div>
          </div>
        </div>
      </div>

      {/* ── Connecting text — Maureen Bennie + Nicholson science ── */}
      <div style={{ fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink, marginTop: 20 }}>
        <p style={{ margin: "0 0 16px" }}>
          I know this because my older son was 8 before we figured out body-signal learning. One of the parents I hear from most, Maureen Bennie, her son was 9.5 when he finally trained. Another family in our community: 8 years. Late is not never.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          I'm not saying your child will train by a certain age. I'm not making promises about outcomes, and I never will. What I am saying is that the nervous system continues to develop. The body-signal pathway doesn't close at 7 or 8 or 10. It's always there, waiting for the right input.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          Research shows that body signal differences in autism are real, measurable, and persistent, but the capacity for the brain to learn to register body signals exists well beyond early childhood. Nicholson et al. (2019) demonstrated that diminished body awareness doesn't mean the pathway is absent, it means the signal needs reinforcement.
        </p>
        <p style={{ margin: 0 }}>
          The Body-Signal Learning Layer is designed for exactly this: sustained, gentle feedback that gives a deeply nervous system that picks up signals slowly something it can finally register.
        </p>
      </div>
    </div>

    {/* ── 48px Permission Cadence Spacing ── */}
    <div style={{ height: 48, background: B.cream }} />

    {/* ══════════════════════════════════════════════════════════════
       SECTION 3: GENTLE RE-INVITATION
       Cream card #FBF7EB, 12px radius, 32px padding
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px" }}>
      <div style={{
        background: "#FBF7EB", borderRadius: 12, padding: 32,
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6, color: B.ink,
      }}>
        <p style={{ margin: "0 0 16px" }}>
          This my last email unless you tell me to keep going.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          So here's what I want to leave with you. One mechanism. One offer. No timeline attached to either.
        </p>

        <p style={{ margin: "0 0 16px" }}>
          The mechanism: The Body-Signal Learning Layer creates a gentle, sustained "uh-oh" sensation, 30 to 60 seconds of feedback that gives a brain that's been missing the signal time to register: <em>something happened.</em> Pull-ups wick that sensation away completely. Regular underwear provides a quick, diffuse signal that a slow to pick up signals brain may not catch. The 3-layer Body-Signal system is built specifically for this: cotton inner layer (gentle, sustained signal), smart absorption (protects without blocking the feedback loop), and a leak-resistant outer barrier.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          It's not a cure. It's not a magic fix. It's not going to change who your child is, because there's nothing to change. His autism is part of him. What the Body-Signal Layer does is give his brain <em>information</em>, the kind of information a nervous system that's been operating without a key signal can finally use.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          The offer: We offer a single pair for $34.99, deliberately small, deliberately low-commitment. You can add it alongside whatever you're currently using. Nothing replaces your routine. Nothing asks you to stop using pull-ups or specialty diapers. Just an addition. A quiet experiment with no strings attached.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          60 days to try it. Your timeline. Your judgment.
        </p>
        <p style={{ margin: "0 0 16px" }}>
          If nothing changes, no pause, no look, no awareness shift, no tolerated-wearing moment, full refund. No questions asked. No pressure to explain why. The guarantee is the only honest response to the parent who's been burned before.
        </p>
        <p style={{ margin: 0 }}>
          I'm not asking you to hope. I'm asking you to consider a mechanism you may not have encountered before. And to know that the door is open whenever, and if ever, you decide to walk through it.
        </p>
      </div>
    </div>

    {/* ── 48px Permission Cadence Spacing ── */}
    <div style={{ height: 48, background: B.cream }} />

    {/* ══════════════════════════════════════════════════════════════
       CTA — TEXT LINK ONLY
       No button. No pill. No uppercase. No bold. No colored bg.
       Left-aligned, underlined, B.soft → #039902 on hover
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ padding: "0 24px", minHeight: 48 }}>
      <a href="#" style={{
        fontFamily: F.main, fontSize: 17,
        color: B.soft, textDecoration: "underline",
        display: "inline-block", minHeight: 48, lineHeight: "48px",
      }}>
        When you decide, it's here.
      </a>
    </div>

    {/* ── 48px Permission Cadence Spacing ── */}
    <div style={{ height: 48, background: B.cream }} />

    {/* ══════════════════════════════════════════════════════════════
       LENA SIGN-OFF — Long Variant (Light Background)
       White bg, letter-like
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "32px 24px", fontFamily: F.main }}>
      {/* "With care," */}
      <div style={{ fontSize: 17, color: B.ink, marginBottom: 12 }}>
        With care,
      </div>

      {/* Lena —— */}
      <div style={{ fontSize: 17, color: B.ink, marginBottom: 4 }}>
        Lena ——
      </div>
      <div style={{ fontSize: 14, fontStyle: "italic", color: B.soft }}>
        Customer Support · Mom of two autistic sons
      </div>

      {/* ── Thin divider ── */}
      <div style={{ height: 1, background: B.muted, opacity: 0.4, margin: "20px 0" }} />

      {/* P.S. */}
      <div style={{ fontSize: 14, fontStyle: "italic", color: B.soft, lineHeight: 1.6 }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment.{" "}
        <a href="#" style={{ color: "#039902", textDecoration: "underline" }}>
          Explore Body-Signal Underwear
        </a>
      </div>
    </div>

    {/* ── 1px rule — #DBFFCD at 50% ── */}
    <div style={{ height: 1, background: "rgba(219,255,205,0.5)" }} />

    {/* ══════════════════════════════════════════════════════════════
       FOOTER
       ══════════════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "16px 24px", fontFamily: F.main, fontSize: 10, color: B.muted }}>
      <div style={{ marginBottom: 8 }}>
        You're receiving this because you signed up for email updates from BrightKidCo. If you'd prefer not to hear from us, you can unsubscribe at any time.
      </div>
      <div style={{ marginBottom: 4 }}>
        BrightKidCo
      </div>
      <div>
        <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>Unsubscribe</a>
      </div>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e3_l3 });
