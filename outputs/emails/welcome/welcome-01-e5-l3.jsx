/* Welcome Flow — E5 | L3
   Wireframe: wireframes/welcome/welcome-01-e5-l3.md
   Strategy: strategy-map.json → welcome.emails.e5-l3
   Generated: 2026-06-09
*/

const Email_Welcome_E5_L3 = () => (
  <EmailShell preheader="After years of trying, the last thing you need is another thing to fail." bg="#F5F0EB">

    {/* ── Header ── */}
    <div style={{ background: "#F5F0EB", padding: "24px 20px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34, filter: "grayscale(20%)" }} />
    </div>

    {/* ════════════════ HERO — WHISPER TONE ════════════════ */}
    <div style={{ background: "#EDE4D8", padding: "40px 30px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Georgia', serif", fontSize: 28, fontWeight: 700, lineHeight: 1.3, letterSpacing: -0.3, color: "#2C2826", margin: 0 }}>
        The fear you're feeling, it's valid
      </h1>

      {/* Between Two Hands diptych placeholder */}
      <div style={{ marginTop: 24, display: "flex", gap: 8, justifyContent: "center" }}>
        <div style={{
          width: "48%", aspectRatio: "16/9",
          background: "linear-gradient(135deg, #D4C9BC 0%, #B8AFA4 100%)",
          borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ fontSize: 11, color: "#8C8884", textAlign: "center", padding: 8 }}>
            Parent hand<br/><span style={{ fontSize: 9, opacity: 0.6 }}>palm open</span>
          </div>
        </div>
        <div style={{
          width: "4%", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ width: 1, height: "60%", background: "#A39587", opacity: 0.3 }} />
        </div>
        <div style={{
          width: "48%", aspectRatio: "16/9",
          background: "linear-gradient(135deg, #C4B8A8 0%, #A39587 100%)",
          borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ fontSize: 11, color: "#8C8884", textAlign: "center", padding: 8 }}>
            Child hand<br/><span style={{ fontSize: 9, opacity: 0.6 }}>reaching</span>
          </div>
        </div>
      </div>
    </div>

    {/* ════════════════ SECTION 1: HOOK — NAMING THE OBJECTION ════════════════ */}
    <div style={{ padding: "32px 30px" }}>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.7, color: "#3C3836", margin: "0 0 16px" }}>
        You've been here before.
      </p>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.7, color: "#3C3836", margin: "0 0 16px" }}>
        A new product. A new method. A new email promising something different. And each time, a small part of you let itself believe, before it learned not to.
      </p>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.7, color: "#3C3836", margin: "0 0 16px" }}>
        So when you see the subject line of this email, I know what goes through your mind. Not because I'm guessing. Because I've heard it from parents just like you, in emails just like this one:
      </p>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.7, color: "#3C3836", fontStyle: "italic", margin: "0 0 16px" }}>
        What if I get my hopes up again?
      </p>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 18, lineHeight: 1.7, color: "#3C3836", margin: 0 }}>
        That's the realest question you can ask.
      </p>
    </div>

    {/* ── ── ── ── thin rule ── ── ── ── */}
    <div style={{ margin: "0 auto", width: "40%", borderTop: "1px solid #D4C9BC" }} />

    {/* ════════════════ SECTION 2: VALIDATION — THE WEIGHT OF WHAT YOU'VE CARRIED ════════════════ */}
    <div style={{ padding: "32px 30px" }}>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        Every product promises. Every method disappoints. You've watched your child grow through sizes of pull-ups that were never supposed to last this long. You've kept him clean, kept him comfortable, kept him safe, while carrying the weight of a question that never seems to get lighter.
      </p>

      {/* Quote 1 */}
      <div style={{ background: "#E8DED0", borderLeft: "3px solid #A39587", padding: "18px 18px 18px 22px", marginBottom: 8 }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "#3C3836", margin: "0 0 6px" }}>
          "I don't 'hope' anymore. I just keep him clean and safe."
        </p>
        <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 11, color: "#9C9894", margin: 0 }}>— One L3 mom</p>
      </div>

      {/* Quote 2 */}
      <div style={{ background: "#E8DED0", borderLeft: "3px solid #A39587", padding: "18px 18px 18px 22px", marginBottom: 16 }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "#3C3836", margin: "0 0 6px" }}>
          "I live each day between hopelessness, and holding on to any drop of hope."
        </p>
        <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 11, color: "#9C9894", margin: 0 }}>— Another L3 parent</p>
      </div>

      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        I read every single one of those responses. And I want you to know: that's not failure. That's 6, 7, 8 years of loving a child whose nervous system speaks a different language.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#2C2826", fontWeight: 700, margin: 0 }}>
        You have not failed. You have persisted. Those are not the same thing.
      </p>
    </div>

    {/* ── ── ── ── thin rule ── ── ── ── */}
    <div style={{ margin: "0 auto", width: "40%", borderTop: "1px solid #D4C9BC" }} />

    {/* ════════════════ SECTION 3: REFRAME — THE GIFT OF SKEPTICISM ════════════════ */}
    <div style={{ padding: "32px 30px" }}>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: "#3C3836", margin: "0 0 16px" }}>
        Your skepticism is not an obstacle. It's protection.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        The Body-Signal Learning Layer doesn't promise your child will train. It promises his brain will receive information it's been missing. That's all.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: 0 }}>
        The BSL three-layer system is a signal bridge. The gentle 30-60 second "uh-oh" sensation is the first time the brain gets feedback that something happened. Research confirms body signal differences in autism are settled science, and interoception can be trained. The BSL system creates the conditions for that training.
      </p>
    </div>

    {/* ── subtle separator ── */}
    <div style={{ margin: "0 auto", width: "40%", borderTop: "1px solid #D4C9BC" }} />

    {/* ════════════════ SECTION 4: MECHANISM — HOW IT ACTUALLY WORKS ════════════════ */}
    <div style={{ padding: "32px 30px" }}>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        There's no timeline. No "in two weeks you'll see X." No checklist.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        There's just a gentle sensation that lasts — a cool-to-wet transition lasting 30 to 60 seconds. For a brain that's never received this feedback before, that's long enough for the body signal system to register: I felt something.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: 0 }}>
        <strong>Pull-ups wick that signal away completely.</strong> The only feedback your child's brain could use to learn is removed before it can register.
      </p>
    </div>

    {/* ── ── ── ── thin rule ── ── ── ── */}
    <div style={{ margin: "0 auto", width: "40%", borderTop: "1px solid #D4C9BC" }} />

    {/* ════════════════ SECTION 5: SOCIAL PROOF — IN PARENT VOICES ════════════════ */}
    <div style={{ padding: "32px 30px" }}>
      {/* Quote 1 */}
      <div style={{ background: "#E8DED0", borderLeft: "3px solid #A39587", padding: "18px 18px 18px 22px", marginBottom: 8 }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "#3C3836", margin: 0 }}>
          "We did 40 hours of ABA a week for 2 years. He's still in pull-ups. We spent $2,500 on a private potty consultant. Same result."
        </p>
      </div>

      {/* Quote 2 */}
      <div style={{ background: "#E8DED0", borderLeft: "3px solid #A39587", padding: "18px 18px 18px 22px", marginBottom: 8 }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "#3C3836", margin: 0 }}>
          "He's never shown a single sign of feeling wet or dirty. Never. Not once in 9 years."
        </p>
      </div>

      {/* Quote 3 */}
      <div style={{ background: "#E8DED0", borderLeft: "3px solid #A39587", padding: "18px 18px 18px 22px", marginBottom: 16 }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "#3C3836", margin: 0 }}>
          "He looked down at the wet spot for the first time in 9 years."
        </p>
      </div>

      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        That last line, that's not a success story in the traditional sense. He didn't train that day. He didn't walk to the potty. He just looked down. But for a mom who had never seen any sign of body awareness in nearly a decade, a single look was everything.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: 0 }}>
        These are not testimonials I edited for maximum impact. They're real messages from real parents who tried the BSL approach. Some saw progress in weeks. Some saw it in months. Some are still waiting. And every single one of them will tell you the same thing: the mechanism is real. The timeline is your child's.
      </p>
    </div>

    {/* ── ── ── ── thin rule ── ── ── ── */}
    <div style={{ margin: "0 auto", width: "40%", borderTop: "1px solid #D4C9BC" }} />

    {/* ════════════════ SECTION 6: PRODUCT — 1 PAIR, ALONGSIDE ════════════════ */}
    <div style={{ padding: "32px 30px" }}>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        I'm not asking you to replace anything. Not your current routine, not the pull-ups you depend on, not the strategies your care team has in place.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        Just add this.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 16px" }}>
        1 Pair of Body-Signal Learning Underwear ($34.99). Put it on your child alongside what you're already doing. The 3-layer system does its work quietly, creating the signal when the signal is needed, protecting when it's not.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: 0 }}>
        Most L3 parents start with 1 pair. They use it during low-stress times at home. They watch. They wait. They don't replace anything.
      </p>
    </div>

    {/* ── ── ── ── thin rule ── ── ── ── */}
    <div style={{ margin: "0 auto", width: "40%", borderTop: "1px solid #D4C9BC" }} />

    {/* ════════════════ SECTION 7: GUARANTEE — THE ONLY PROMISE ════════════════ */}
    <div style={{ padding: "32px 30px", border: "1.5px dashed #A39587", borderRadius: 12, margin: "32px 30px" }}>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 17, lineHeight: 1.6, color: "#2C2826", margin: "0 0 14px" }}>
        60 days. Try it alongside your current routine. If your child shows any sign of body awareness they haven't shown before, a pause, a look, a reach, a step, you'll know the signal is reaching them. If nothing changes, full refund.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: "0 0 14px" }}>
        Not because it didn't sell. Because your judgment matters more than my revenue.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, lineHeight: 1.7, color: "#5C5854", margin: 0 }}>
        No forms to fill out. No hoops to jump through. Just an email to me, and your money back.
      </p>
    </div>

    {/* ════════════════ CTA & PERMISSION ════════════════ */}
    <div style={{ padding: "24px 30px 20px", textAlign: "center" }}>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "#5C5854", margin: "0 0 16px" }}>
        Try alongside for 60 days. If nothing changes, full refund.
      </p>
      <a href="#" style={{
        display: "inline-block",
        padding: "16px 32px",
        background: "#7C6F64",
        color: "#F5F0EB",
        fontSize: 16,
        fontWeight: 700,
        textDecoration: "none",
        borderRadius: 8,
        letterSpacing: 0.3,
        textAlign: "center",
      }}>
        Try 1 Pair, 60-Day Guarantee →
      </a>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 14, color: "#8C8884", marginTop: 14 }}>
        No pressure. No timeline. The offer doesn't expire.
      </p>
      <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 13, color: "#5C5854", marginTop: 12, lineHeight: 1.6 }}>
        Next time: Why pull-ups might be the one thing holding your child back.
      </p>
    </div>

    {/* ════════════════ LENA SIGN-OFF (MEDIUM VARIANT) ════════════════ */}
    <div style={{ padding: "0 30px 36px" }}>
      <div style={{
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* subtle top gradient accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.gradient, opacity: 0.9 }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #7C6F64 100%)",
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              border: `1.5px solid ${B.ink}`,
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
            <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }}>A note from</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>Lena Bauer</div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>Customer Support · Mom of two</div>
          </div>
        </div>

        {/* Personal content */}
        <div style={{ fontSize: 15.5, lineHeight: 1.65, color: "#B8CACD", marginBottom: 16 }}>
          <p style={{ margin: "0 0 14px" }}>
            I have two autistic sons. One trained at 6. The other, we're still in the middle of it.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            I know what it's like to read an email like this and feel the familiar knot in your chest. The one that says I've hoped before. I can't do it again.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            I'm not asking you to hope. I'm asking you to understand the mechanism. To hold it alongside everything you know about your child. And to decide, on your timeline, by your judgment, whether it might be worth trying alongside what you're already doing.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            If this isn't the day, that's okay. The product will be here next month. So will I.
          </p>
          <p style={{ margin: 0 }}>
            Reply to this email if you want. Tell me about your child. Tell me what you've tried. Tell me you're skeptical. I read everything, and I answer everything.
          </p>
        </div>

        {/* Em-dash + Lena signature */}
        <div style={{ borderTop: "1.5px dashed #3A4547", paddingTop: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: "#B8CACD", marginBottom: 4 }}>With understanding,</div>
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 42,
            lineHeight: 0.95,
            fontWeight: 500,
            color: "#D8F57C",
            letterSpacing: -0.5,
            marginTop: 2,
          }}>
            —— Lena
          </div>
          <div style={{ fontSize: 11, color: "#8FAFB2", marginTop: 4, fontStyle: "italic" }}>
            Customer Support · Mom of two autistic sons · BrightKidCo
          </div>
        </div>

        {/* P.S. */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          If you're wondering whether your child is "too far along" or "too severe" for this approach, the research says the childhood intervention window exists for a reason. Nicholson et al. (2019) found that body awareness improves with age in ASD, which means the brain CAN develop these pathways. The BSL system is designed to support that development, however long it takes.
        </div>
      </div>
    </div>

    {/* ════════════════ FOOTER ════════════════ */}
    <div style={{ background: "#EDE8E3", padding: "20px 24px 20px", textAlign: "center" }}>
      {/* Five dots motif */}
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4C9BC", opacity: 0.6 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4C9BC", opacity: 0.45 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4C9BC", opacity: 0.3 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4C9BC", opacity: 0.2 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4C9BC", opacity: 0.1 }} />
      </div>
      <div style={{ fontFamily: F.display, fontSize: 20, fontStyle: "italic", fontWeight: 500, color: B.ink, marginBottom: 20, letterSpacing: -0.2 }}>
        Calm progress, one day at a time.
      </div>
      {["Our Method", "Shop the Pants", "Parent Stories"].map((l, i) => (
        <div key={i} style={{ fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 14 }}>
          <a href="#" style={{ color: B.ink, textDecoration: "none" }}>{l}</a>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 28px" }}>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" strokeLinejoin="round" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>
      <div style={{ fontSize: 11.5, color: "#9C9894", lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        BrightKidCo · 123 Commerce Street, Suite 200, Nashville, TN 37201
      </div>
      <div style={{ fontSize: 11.5, color: "#9C9894", lineHeight: 1.65, marginTop: 10 }}>
        No longer want these emails? <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Manage Preferences</a>.
      </div>
      <div style={{ fontSize: 11.5, color: "#9C9894", lineHeight: 1.65, marginTop: 10 }}>
        Questions? Reply to this email, Lena reads every response.
      </div>
      <div style={{ fontSize: 10, color: "#9C9894", lineHeight: 1.5, marginTop: 10, opacity: 0.7 }}>
        This email is not medical advice. Every child's development is unique. Please consult your child's care team for personalized guidance.
      </div>
      <div style={{ margin: "28px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
    </div>

  </EmailShell>
);

Object.assign(window, { Email_Welcome_E5_L3 });
