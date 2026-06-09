/* Welcome Flow — E7 | L1 (Sarah — Verbal, 3-5, Pre-K Driven)
   Wireframe: wireframes/welcome/welcome-01-e7-l1.md
   Strategy: strategy-map.json → welcome.e7-l1
   Generated: 2026-06-09
*/

const Email_welcome_01_e7_l1 = () => {
  const wave = (
    <div style={{ padding: "8px 24px" }}>
      <svg width="372" height="20" viewBox="0 0 372 20" fill="none" style={{ display: "block" }}>
        <path d="M0,10 C62,0 124,20 186,10 C248,0 310,20 372,10" stroke="#EDE4D8" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );

  const hr = (
    <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
      <div style={{ width: 80, height: 1, background: "#EDE4D8" }} />
    </div>
  );

  return (
    <EmailShell preheader="He's been 'almost trained' for months. What the body is actually telling you, and why that last stretch needs something different." bg="#FAF9F7">

      {/* ── Header ── */}
      <Header bg="#FAF9F7" />

      {/* ══════════════════════════════════════════════════════
         SECTION 2: HERO — HERO-10 Bold Declaration
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FAF9F7", padding: "0 30px" }}>
        {/* Signal Bridge illustration placeholder */}
        <ImgFrame
          height={280}
          label="SIGNAL BRIDGE DIAGRAM"
          sublabel="Two-panel illustration: Panel 1 — 'How signals work for most children' (solid green arrow from body to brain). Panel 2 — 'How signals arrive for your child' (broken/fragmented arrow, signal arrives too late)."
        />
        <div style={{ padding: "20px 0 0", textAlign: "center" }}>
          <h1 style={{
            fontSize: 30, lineHeight: 1.3, fontWeight: 700,
            letterSpacing: -0.3, color: "#2D2D2D", margin: 0,
          }}>
            He's been 'almost trained' for months.<br />
            Here's why the last 10% is the hardest.
          </h1>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 3: GRADIENT BAND — sage → cream
         ══════════════════════════════════════════════════════ */}
      <Band from="#4A7C59" to="#FDF8F0" height={40} />

      {/* ══════════════════════════════════════════════════════
         SECTION 4: LETTER-01 — Hook + Validation
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FDF8F0", padding: "4px 30px 28px" }}>
        {/* Bold opener */}
        <p style={{ margin: "0 0 14px", fontSize: 26, fontWeight: 700, color: "#2D2D2D", lineHeight: 1.3 }}>
          He's been 'almost trained' for months.
        </p>
        <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          You know the pattern. A good day, he goes on his own, you feel that flutter of hope. Then three days of nothing. Then a week where he's perfect again, and you think "this it." Then it's not.
        </p>
        <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          The last 10% is the hardest because it's not about effort. It's not about motivation. It's not about you trying harder or finding a better chart or a stricter schedule.
        </p>

        {/* Validation sub-headline */}
        <p style={{ margin: "0 0 18px", fontSize: 22, fontWeight: 600, color: "#4A7C59", lineHeight: 1.3 }}>
          This where almost every parent gets stuck, and it's not your fault.
        </p>

        <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          The "almost trained" loop is the single most painful place to be. You're close enough that people don't understand why it's not done. Close enough that you question yourself. Close enough that every regression feels like starting over.
        </p>
        <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          But here's what's actually happening: his body IS getting the signal. It's just getting it too late.
        </p>

        {/* Pull-quote */}
        <div style={{ borderLeft: "3px solid #4A7C59", background: "#FDF8F0", padding: 16, margin: "0 0 14px", borderRadius: "0 8px 8px 0" }}>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, color: "#4A7C59", fontStyle: "italic" }}>
            "He gets it, but he doesn't get it."
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#8B6F47", letterSpacing: 0.5 }}>— L1 parent verbatim</p>
        </div>

        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          That's not a parenting failure. That's a timing problem, and timing problems respond to a completely different approach than behavior problems.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 5: WAVE DIVIDER + EDU-2 — Mechanism
         ══════════════════════════════════════════════════════ */}
      {wave}

      <div style={{ background: "#FFFFFF", padding: "22px 30px" }}>
        <div style={{ fontSize: 13, letterSpacing: 0.5, textTransform: "uppercase", color: "#4A7C59", fontWeight: 700, marginBottom: 10 }}>
          The mechanism
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#4A7C59", margin: "0 0 16px", lineHeight: 1.3 }}>
          Why the last 10% won't close with more practice or more prompts.
        </h2>

        <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          The interoception signal for bladder fullness is subtle. For many autistic children, that signal is compressed — the brain registers it, just milliseconds too late. Timed methods and sticker charts hit a wall at that last 10% because they all assume the "I need to go" feeling arrives early enough to act on.
        </p>
        <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          The <strong>Body-Signal Learning Layer (BSL)</strong> is designed for this specific problem. It provides gentle sensation that lasts — a 30-60 second "uh-oh" when an accident happens. Over time, the brain learns to associate the pre-event sensation with the post-event signal. The "almost trained" gap narrows.
        </p>

        {/* Signal timing bullet points */}
        <div style={{ padding: "12px 0" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
            <span style={{ color: "#4A7C59", fontSize: 14, marginTop: 2 }}>•</span>
            <span style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.5 }}>Interoception gap — the signal exists but arrives too late</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
            <span style={{ color: "#4A7C59", fontSize: 14, marginTop: 2 }}>•</span>
            <span style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.5 }}>Signal arrives too late (Nicholson 2019)</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
            <span style={{ color: "#4A7C59", fontSize: 14, marginTop: 2 }}>•</span>
            <span style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.5 }}>BSL extends the feedback window</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 6: WAVE DIVIDER + SP-01 — Yellow Quote Testimonials
         ══════════════════════════════════════════════════════ */}
      {wave}

      <div style={{ background: "#FDF8F0", padding: "22px 30px" }}>
        <div style={{ fontSize: 13, letterSpacing: 0.5, textTransform: "uppercase", color: "#4A7C59", fontWeight: 700, marginBottom: 10 }}>
          Real families
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#2D2D2D", margin: "0 0 18px", lineHeight: 1.3 }}>
          Real families who closed their last 10%:
        </h2>

        {/* Quote 1 — Yellow block */}
        <div style={{ background: "#FFD866", borderRadius: 8, padding: 16, marginBottom: 12 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#2D2D2D", fontStyle: "italic" }}>
            "She told me BEFORE for the first time."
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#8B6F47", letterSpacing: 0.5 }}>L1 parent</p>
        </div>

        {/* Quote 2 — Yellow block */}
        <div style={{ background: "#FFD866", borderRadius: 8, padding: 16, marginBottom: 12 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#2D2D2D", fontStyle: "italic" }}>
            "He stayed dry for 2 hours."
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#8B6F47", letterSpacing: 0.5 }}>L1 parent</p>
        </div>

        {/* Quote 3 — Yellow block */}
        <div style={{ background: "#FFD866", borderRadius: 8, padding: 16, marginBottom: 12 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#2D2D2D", fontStyle: "italic" }}>
            "We are now 90% peeing in the potty. Not magic overnight, but real progress. He notices when he's wet now. That never happened before."
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#8B6F47", letterSpacing: 0.5 }}>BKC customer</p>
        </div>

        {/* Quote 4 — Yellow block */}
        <div style={{ background: "#FFD866", borderRadius: 8, padding: 16, marginBottom: 18 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#2D2D2D", fontStyle: "italic" }}>
            "He went today! Once! But he went!"
          </p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#8B6F47", letterSpacing: 0.5 }}>L1 parent</p>
        </div>

        <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          These aren't dramatic transformations. They're the kind of small, steady shifts that happen when the nervous system starts learning something new. Two hours dry. One successful signal. A pause where there used to be nothing.
        </p>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          That's what gentle sensation that lasts does. It teaches the brain to recognize the message <em>before</em> the event, not after.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 7: GRADIENT BAND + PRODUCT SHOWCASE
         ══════════════════════════════════════════════════════ */}
      <Band from="#FDF8F0" to="#FFFFFF" height={40} />

      <div style={{ background: "#FFFFFF" }}>
        <ProductShowcaseFull
          eyebrow="The product"
          title="Body-Signal Learning"
          titleAccent="Layer™ Pants"
          priceFrom="$34"
          priceNote="3+3 Bundle · $79.99 total · Free shipping"
          features={[
            { icon: "◉", label: "Body-Signal Layer™" },
            { icon: "✓", label: "60-day guarantee" },
            { icon: "♡", label: "Sensory-friendly" },
          ]}
          ctaButton="See if the 3+3 Bundle Works for Your Child"
        />
        {/* Secondary value line */}
        <div style={{ padding: "0 22px 20px", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "#6B6B6B" }}>
            That's $13.33 per pair with the bundle — less than half the single-pair price.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 8: GRADIENT BAND + TRUST-1 — 60-Day Seal
         ══════════════════════════════════════════════════════ */}
      <Band from="#FFFFFF" to="#FDF8F0" height={40} />

      <div style={{ background: "#FDF8F0", padding: "28px 30px", textAlign: "center" }}>
        {/* Shield icon */}
        <div style={{ marginBottom: 12 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ display: "inline-block" }}>
            <path d="M12 2L3 7v5c0 5.25 3.75 10.13 9 11.25C17.25 22.13 21 17.25 21 12V7l-9-5z" fill="#4A7C59" opacity="0.2" stroke="#4A7C59" strokeWidth="1.5" />
            <path d="M9 12l2 2 4-4" stroke="#4A7C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#2D2D2D", margin: "0 0 14px", textAlign: "center" }}>
          60 days. Your judgment.
        </h2>
        <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D", textAlign: "center" }}>
          If the Body-Signal Learning Layer doesn't shift your child's awareness in 60 days, if you don't see those micro-wins starting to happen, send them back. Full refund. No forms. No hoops.
        </p>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#2D2D2D", textAlign: "center" }}>
          We're not selling an overnight solution. We're offering a mechanism that works for the specific neurological gap your child is experiencing. If it doesn't work for your child, we want to know so we can make it better. And you get your money back.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 9: CTA-5 — Product CTA (sage green button)
         ══════════════════════════════════════════════════════ */}
      {hr}

      <div style={{ background: "#FFFFFF", padding: "40px 30px", textAlign: "center" }}>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#2D2D2D", margin: "0 0 24px" }}>
          Pre-K is coming. Close the gap with 6 pairs of body-signal learning underwear.
        </p>
        <a href="#" style={{
          display: "inline-block", padding: "17px 32px",
          background: "#4A7C59", color: "#FFFFFF", fontSize: 17, fontWeight: 700,
          textDecoration: "none", borderRadius: 6, letterSpacing: 0.5,
        }}>
          See if the 3+3 Bundle Works for Your Child →
        </a>
        <div style={{ marginTop: 14, fontSize: 14, color: "#6B6B6B" }}>
          That's $13.33 per pair with the bundle — less than half the single-pair price.
        </div>
        <div style={{ marginTop: 12 }}>
          <a href="#" style={{ fontSize: 15, color: "#4A7C59", textDecoration: "underline" }}>
            or shop single pairs →
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 10: LENA SIGN-OFF (text-forward, no avatar)
         ══════════════════════════════════════════════════════ */}
      {hr}

      <div style={{ background: "#FFFFFF", padding: "30px 30px" }}>
        <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          You've been in the "almost trained" loop longer than you planned. I know what that feels like, I've been there with both of my sons. One trained at 6. The other took us until he was almost 8. The last 10% took the longest with both of them.
        </p>
        <p style={{ margin: "0 0 20px", fontSize: 17, lineHeight: 1.6, color: "#2D2D2D" }}>
          The Body-Signal Learning Layer isn't another method. It's a different approach entirely, one that addresses the actual gap, not the symptoms. If your child is stuck at that last stretch, this designed for exactly that moment.
        </p>
        <p style={{ margin: "0 0 24px", fontSize: 17, fontWeight: 700, color: "#2D2D2D" }}>
          With care,<br />
          Lena ——
        </p>
        <p style={{ margin: 0, fontSize: 15, fontStyle: "italic", color: "#6B6B6B" }}>
          <span style={{ fontWeight: 700, fontStyle: "normal" }}>P.S.</span> Reply to this email if anything here resonates. You'll get me, not a template, not a bot. I read every single response.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
         SECTION 11: FOOTER
         ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#FFFFFF", padding: "30px 30px", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#999999", marginBottom: 14 }}>
          BrightKidCo, LLC
        </div>
        <div style={{ fontSize: 11, color: "#999999", lineHeight: 1.65, marginBottom: 14 }}>
          123 Learning Lane, Suite 200, Portland, OR 97201, United States
        </div>
        <div style={{ fontSize: 11, marginBottom: 14 }}>
          <a href="#" style={{ color: "#2D2D2D", textDecoration: "underline" }}>Unsubscribe</a>
          {" | "}
          <a href="#" style={{ color: "#2D2D2D", textDecoration: "underline" }}>Manage Preferences</a>
        </div>
        <div style={{ fontSize: 11, color: "#999999", marginBottom: 20 }}>
          Questions? Hit reply, Lena reads every message.
        </div>
        {/* Easter egg */}
        <div style={{ fontSize: 11, fontStyle: "italic", color: "#8B6F47", marginBottom: 20 }}>
          1 in 6 children ages 3-12 have nighttime accidents, you're not alone in this.
        </div>
        <div style={{ margin: "0 auto", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_welcome_01_e7_l1 });
