/* FAQ/Objection Library — E4 | Cross-Level
   Wireframe: wireframes/faq-library/faq-21-e4.md
   Strategy: strategy-map.json → flows.faq-library.emails.e4
   Generated: 2026-06-09
*/

const Email_faq_21_e4 = () => (
  <EmailShell preheader="Skeptical spouse? Tight budget? Never heard of us? I'll answer all three, straight." bg={B.paper}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: PREHEADER BAR
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "8px 20px", textAlign: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 13, color: B.muted }}>
        Skeptical spouse? Tight budget? Never heard of us? I'll answer all three, straight.
      </span>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.paper, padding: "40px 22px 10px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <div style={{ fontSize: 14, color: B.soft, marginTop: 8, fontFamily: F.main }}>
        Lena from BrightKidCo
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO-3 — Permission Open
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "40px 22px", textAlign: "center" }}>
      {/* Hero illustration — three overlapping speech bubbles with question marks */}
      <div style={{ marginBottom: 24 }}>
        <svg width="420" height="240" viewBox="0 0 420 240" style={{ maxWidth: "100%" }}>
          {/* Bubble 1 — large, teal tint */}
          <ellipse cx="180" cy="120" rx="110" ry="85"
            fill={`${B.teal}15`} stroke={`${B.teal}30`} strokeWidth="1.5" />
          <text x="180" y="115" textAnchor="middle" fontSize="48" fill={B.teal} opacity="0.5"
            fontFamily={F.main}>?</text>
          <circle cx="180" cy="140" r="4" fill={B.teal} opacity="0.3" />

          {/* Bubble 2 — medium, green tint */}
          <ellipse cx="270" cy="100" rx="85" ry="70"
            fill={`${B.green}12`} stroke={`${B.green}25`} strokeWidth="1.5" />
          <text x="270" y="95" textAnchor="middle" fontSize="42" fill={B.green} opacity="0.45"
            fontFamily={F.main}>?</text>
          <circle cx="270" cy="115" r="4" fill={B.green} opacity="0.3" />

          {/* Bubble 3 — small, muted tint */}
          <ellipse cx="220" cy="160" rx="70" ry="55"
            fill={`${B.muted}0D`} stroke={`${B.muted}20`} strokeWidth="1.5" />
          <text x="220" y="155" textAnchor="middle" fontSize="36" fill={B.muted} opacity="0.4"
            fontFamily={F.main}>?</text>
          <circle cx="220" cy="172" r="4" fill={B.teal} opacity="0.3" />
        </svg>
      </div>

      {/* Eyebrow */}
      <div style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, marginBottom: 12, fontFamily: F.main,
      }}>THE THREE QUESTIONS</div>

      {/* Headline */}
      <h1 style={{
        fontSize: 32, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px",
        letterSpacing: -0.5, color: B.ink, fontFamily: F.main,
      }}>
        The Three Questions I Get Every Single Day
      </h1>

      {/* Subhead — the three questions */}
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        Can I try this without my partner's buy-in?<br />
        After everything I've already spent, is this worth it?<br />
        Never heard of BrightKidCo, why should I trust you?
      </p>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: 0,
        fontFamily: F.main,
      }}>
        I hear all three. Often from the same person, in the same breath.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: WAVE DIVIDER — Signal Wave SVG
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="320" height="16" viewBox="0 0 320 16" style={{ opacity: 0.6 }}>
        <path d="M0,8 C20,2 40,14 60,8 C80,2 100,14 120,8 C140,2 160,14 180,8 C200,2 220,14 240,8 C260,2 280,14 300,8 C310,5 320,8 320,8"
          stroke={B.cream} strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: PARTNER OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 22px", background: B.paper }}>
      {/* Eyebrow */}
      <div style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, marginBottom: 12, fontFamily: F.main,
      }}>THE PARTNER QUESTION</div>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        You're caught between wanting to try something new and not wanting to create conflict at home. I hear this from parents every week. Your partner is skeptical. They think it's another thing that won't work. They don't want to change the routine.
      </p>

      {/* Pull-Quote */}
      <div style={{
        borderLeft: `3px solid ${B.green}`, padding: "12px 18px", margin: "0 0 16px",
      }}>
        <p style={{
          fontSize: 24, lineHeight: 1.4, color: B.ink, margin: 0,
          fontFamily: F.display, fontStyle: "italic",
        }}>
          "You don't need anyone's permission to try something that could help your child."
        </p>
      </div>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 12px",
        fontFamily: F.main,
      }}>
        The 60-day guarantee is your partner's safety net too. It's not a commitment, it's a trial. If after 60 days nothing changes, you get every penny back. No financial risk, no fight to have.
      </p>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: 0,
        fontFamily: F.main,
      }}>
        And here's what often happens: skeptical partners change their mind when they see the first mini-signal, the pause, the look down, the pull at the pants. The product works without their active involvement. You can try it without changing their routine at all.
      </p>

      <p style={{
        fontSize: 16, lineHeight: 1.4, color: B.teal, margin: "16px 0 0",
        fontFamily: F.display, fontStyle: "italic",
      }}>
        This is your decision. 60 days, by your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5b: WAVE DIVIDER — Thinner Wave
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="200" height="12" viewBox="0 0 200 12" style={{ opacity: 0.5 }}>
        <path d="M0,6 C15,2 30,10 45,6 C60,2 75,10 90,6 C105,2 120,10 135,6 C150,2 165,10 180,6 C190,4 200,6 200,6"
          stroke={B.cream} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: COST OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 22px", background: B.cream }}>
      {/* Eyebrow */}
      <div style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, marginBottom: 12, fontFamily: F.main,
      }}>THE COST QUESTION</div>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        You've already spent, on ABA, on consultants, on potty seats, on methods that didn't work. The last thing you need is another expense that doesn't deliver.
      </p>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        I know. We're not asking you to invest more hope. We're removing the risk entirely.
      </p>

      {/* Pull-Quote */}
      <div style={{
        borderLeft: `3px solid ${B.green}`, padding: "12px 18px", margin: "0 0 16px",
      }}>
        <p style={{
          fontSize: 24, lineHeight: 1.4, color: B.ink, margin: 0,
          fontFamily: F.display, fontStyle: "italic",
        }}>
          "One pair, 60 days, your judgment."
        </p>
      </div>

      {/* Product block — 3+3 Bundle */}
      <div style={{
        background: B.paper, border: `2px solid ${B.ink}`, borderRadius: 16,
        padding: "20px 22px", boxShadow: `4px 4px 0 ${B.ink}`, marginBottom: 16,
      }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
          color: B.tealDeep, marginBottom: 6,
        }}>BrightKidCo</div>
        <div style={{ fontSize: 19, fontWeight: 700, color: B.ink, marginBottom: 8, lineHeight: 1.2 }}>
          3+3 Bundle
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: B.ink, marginBottom: 4, letterSpacing: -0.5 }}>
          $79.99
        </div>
        <div style={{ fontSize: 13, color: B.soft, marginBottom: 12, fontStyle: "italic" }}>
          Free shipping · ~$13 per pair · Reusable, washable
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            padding: "6px 12px", background: "#FAF7F0",
            border: `1.5px solid ${B.ink}`, borderRadius: 999,
            fontSize: 11.5, fontWeight: 600, color: B.ink,
          }}>
            <span style={{ color: B.teal }}>◉</span> Body-Signal Layer™
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            padding: "6px 12px", background: "#FAF7F0",
            border: `1.5px solid ${B.ink}`, borderRadius: 999,
            fontSize: 11.5, fontWeight: 600, color: B.ink,
          }}>
            <span style={{ color: B.teal }}>✓</span> 60-day guarantee
          </div>
        </div>
      </div>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 12px",
        fontFamily: F.main,
      }}>
        But the math isn't really the point. The point is: <strong style={{ color: B.ink }}>one pair, 60 days, your judgment.</strong> If it doesn't work for your child, you get every penny back. No questions, no "but have you tried..." You've risked enough. The risk is ours for this one.
      </p>

      <p style={{
        fontSize: 16, lineHeight: 1.4, color: B.teal, margin: 0,
        fontFamily: F.display, fontStyle: "italic",
      }}>
        60 days. By your judgment.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6b: WAVE DIVIDER — Thinner Wave
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="200" height="12" viewBox="0 0 200 12" style={{ opacity: 0.5 }}>
        <path d="M0,6 C15,2 30,10 45,6 C60,2 75,10 90,6 C105,2 120,10 135,6 C150,2 165,10 180,6 C190,4 200,6 200,6"
          stroke={B.cream} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: BRAND OBJECTION (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 22px", background: B.paper }}>
      {/* Eyebrow */}
      <div style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, marginBottom: 12, fontFamily: F.main,
      }}>THE BRAND QUESTION</div>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        You've never heard of BrightKidCo. There are hundreds of potty training products out there. Why should you trust a brand you don't know?
      </p>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        That's a completely fair question. There are a lot of products that promise results and don't deliver. You have every right to be skeptical.
      </p>

      {/* Pull-Quote */}
      <div style={{
        borderLeft: `3px solid ${B.green}`, padding: "12px 18px", margin: "0 0 16px",
      }}>
        <p style={{
          fontSize: 24, lineHeight: 1.4, color: B.ink, margin: 0,
          fontFamily: F.display, fontStyle: "italic",
        }}>
          "You don't have to trust the brand. Trust the mechanism."
        </p>
      </div>

      {/* EDU-10: Mechanism Callout */}
      <div style={{
        background: "#DBFFCD", borderRadius: 12, padding: "18px 20px", marginBottom: 16,
      }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
          color: B.tealDeep, marginBottom: 8, fontFamily: F.main,
        }}>BODY-SIGNAL LEARNING LAYER</div>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: B.ink, margin: 0, fontFamily: F.main,
        }}>
          Creates a sustained wetness sensation that lasts 30–60 seconds, designed specifically for nervous systems that need MORE signal. No other product does this.
        </p>
      </div>

      {/* SP-04: Trust Pills Row */}
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{
          fontSize: 14, color: B.muted, fontFamily: F.main, lineHeight: 1.6,
        }}>
          16,511 reviews · 4.9★ · 100,000+ parents
        </div>
      </div>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: 0,
        fontFamily: F.main,
      }}>
        And if you reply to this email, you get me, not a template, not a bot. I have two autistic sons. I've been where you are.
      </p>

      <p style={{
        fontSize: 16, lineHeight: 1.4, color: B.teal, margin: "16px 0 0",
        fontFamily: F.display, fontStyle: "italic",
      }}>
        You don't have to trust the brand. Trust the mechanism. If it doesn't work, you've lost nothing but a few weeks of trying something different.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7b: WAVE DIVIDER — Thinnest Wave
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="200" height="10" viewBox="0 0 200 10" style={{ opacity: 0.45 }}>
        <path d="M0,5 C15,1 30,9 45,5 C60,1 75,9 90,5 C105,1 120,9 135,5 C150,1 165,9 180,5 C190,3 200,5 200,5"
          stroke={B.cream} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: COMMON THREAD (LETTER-03)
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "32px 22px", background: B.cream }}>
      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main, fontWeight: 600,
      }}>
        Every one of these objections comes from the same place — you've been let down before. By methods. By products. By promises.
      </p>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        I can't promise you a specific outcome. I can promise you a real mechanism, designed for nervous systems that process signals differently. And I can promise you can try it with zero risk.
      </p>

      <p style={{
        fontSize: 17, lineHeight: 1.7, color: B.soft, margin: 0,
        fontFamily: F.main, fontWeight: 600,
      }}>
        Not because you need to prove anything. Because you deserve a tool that actually fits your child's neurology.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: GUARANTEE — TRUST-1: 60-Day Seal
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "20px 22px", textAlign: "center", background: B.paper }}>
      <div style={{
        display: "inline-block", background: "#FFD866", borderRadius: "50%",
        width: 100, height: 100, lineHeight: "100px", textAlign: "center",
        border: `2px solid ${B.ink}`, boxShadow: `2px 2px 0 ${B.ink}`,
        marginBottom: 12,
      }}>
        <span style={{
          fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase",
          color: B.ink, fontFamily: F.main, lineHeight: "1.3", display: "inline-block",
          verticalAlign: "middle",
        }}>
          60-DAY<br/>GUARANTEE
        </span>
      </div>
      <p style={{
        fontSize: 14, lineHeight: 1.5, color: B.soft, margin: 0,
        fontFamily: F.main, maxWidth: 300, marginLeft: "auto", marginRight: "auto",
      }}>
        Try it for 60 days. If it doesn't work, full refund. No questions.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: CTA — CTA-4: Gentle Invite
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "30px 22px", textAlign: "center" }}>
      <a href="https://www.brightkidco.com/products/3-3-bundle" style={{
        display: "inline-block", padding: "14px 32px",
        background: B.teal, color: "#FFFFFF",
        fontSize: 16, fontWeight: 600, fontFamily: F.main,
        textDecoration: "none", borderRadius: 999,
        letterSpacing: 1.2, textTransform: "uppercase",
        minHeight: 48, lineHeight: "48px", textAlign: "center",
      }}>
        Shop the 3+3 Bundle →
      </a>

      <p style={{
        fontSize: 14, color: B.muted, margin: "14px 0 0",
        fontFamily: F.main,
      }}>
        $79.99 · Free Shipping · 60-Day Guarantee
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: LENA SIGN-OFF — MEDIUM variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ padding: "24px 22px", background: B.paper }}>
      <p style={{
        fontSize: 16, lineHeight: 1.6, color: B.ink, margin: "0 0 8px",
        fontFamily: F.display, fontStyle: "italic",
      }}>With understanding,</p>

      <p style={{
        fontSize: 14, lineHeight: 1.5, color: B.soft, margin: "0 0 16px",
        fontFamily: F.main,
      }}>
        Lena ——<br />
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. 1 */}
      <div style={{
        background: "#F8F5EF", borderRadius: 12, padding: "14px 16px", marginBottom: 10,
      }}>
        <p style={{
          fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0, fontStyle: "italic",
          fontFamily: F.main,
        }}>
          <span style={{ fontWeight: 700, fontStyle: "normal" }}>P.S.</span> Both my sons went through this. I know what it feels like to try everything and wonder if this time will be different. It was for us — not because of magic, because of mechanism.{" "}
          <a href="https://www.brightkidco.com/products/3-3-bundle" style={{ color: B.teal, textDecoration: "none" }}>
            Shop the 3+3 Bundle →
          </a>
        </p>
      </div>

      {/* P.S. 2 */}
      <div style={{
        background: "#F8F5EF", borderRadius: 12, padding: "14px 16px",
      }}>
        <p style={{
          fontSize: 14, lineHeight: 1.6, color: B.soft, margin: 0, fontStyle: "italic",
          fontFamily: F.main,
        }}>
          <span style={{ fontWeight: 700, fontStyle: "normal" }}>P.S.</span> If you want a one-page summary to share with your partner, reply to this email and I'll send it over. No pressure, no push. L
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: FOOTER (UTIL-04)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 22px 16px", textAlign: "center" }}>
      <div style={{
        fontFamily: F.display, fontSize: 16, fontStyle: "italic", fontWeight: 500,
        color: B.ink, marginBottom: 16, letterSpacing: -0.2,
      }}>
        Built for the brain that learns differently.
      </div>

      <div style={{ fontSize: 14, color: B.ink, fontWeight: 500, marginBottom: 10 }}>
        <a href="#" style={{ color: B.ink, textDecoration: "none" }}>Shop</a>
        {" · "}
        <a href="#" style={{ color: B.ink, textDecoration: "none" }}>Parent Stories</a>
        {" · "}
        <a href="#" style={{ color: B.ink, textDecoration: "none" }}>Contact us</a>
        {" · "}
        <a href="#" style={{ color: B.ink, textDecoration: "none" }}>FAQ</a>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 18, margin: "12px 0 16px" }}>
        <a href="#" style={{ color: B.ink }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill={B.ink} stroke="none" />
          </svg>
        </a>
        <a href="#" style={{ color: B.ink }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={B.ink} strokeWidth="1.8">
            <path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div style={{
        fontSize: 12, color: B.muted, lineHeight: 1.5, fontFamily: F.main,
        marginBottom: 8,
      }}>
        16,511 reviews · 4.9 ★, 100,000+ parents trust BrightKidCo
      </div>

      <div style={{ fontSize: 11, color: B.muted, lineHeight: 1.4, marginBottom: 10 }}>
        <span style={{ fontSize: 11 }}>123 Commerce Street, Suite 200, Portland, OR 97201</span>
      </div>

      <div style={{ fontSize: 11.5, color: B.muted, lineHeight: 1.6 }}>
        No longer want to receive these emails? <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a>.
      </div>

      <div style={{ margin: "20px auto 0", width: 60, height: 3, background: B.gradient, borderRadius: 3 }} />
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_faq_21_e4 });
