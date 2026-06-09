/* Review Request E2 — Flow 18, Email 2 (Day 45)
   Gentle follow-up review ask · Cross-Level (L1/L2/L3/GF)
   Wireframe: wireframes/review-request/review-18-e2.md
   Copy: copy/review-request/review-18-e2.md
   Strategy: strategy-map.json → review-request.emails.e2
   Generated: 2026-06-09
*/

const Email_review_request_review_18_e2 = () => (
  <EmailShell
    preheader="Whether your child just started showing signs or you've been at this for years, here's why your experience matters to the mom who's next."
    bg="#FBF7F1"
  >

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HEADER — Logo + From Name
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px 0", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
      <p style={{
        fontFamily: F.main, fontSize: 13, color: B.muted,
        margin: "8px 0 0", letterSpacing: 0.3,
      }}>
        Lena from BrightKidCo
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HERO — HERO-14 Quote Bomb (Validation Hook)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px 34px" }}>
      {/* Eyebrow */}
      <p style={{
        fontFamily: F.main, fontSize: 10.5, fontWeight: 700,
        letterSpacing: 2, textTransform: "uppercase",
        color: B.teal, margin: "0 0 14px",
      }}>
        YOUR STORY MATTERS
      </p>

      {/* Headline */}
      <h1 style={{
        fontFamily: F.main, fontSize: 28, fontWeight: 700,
        lineHeight: 1.15, letterSpacing: -0.02,
        color: B.ink, margin: "0 0 24px",
      }}>
        Your story matters to someone right now
      </h1>

      {/* Greeting */}
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 700,
        color: B.ink, margin: "0 0 16px",
      }}>
        Hey [first_name],
      </p>

      {/* Hook paragraph 1 */}
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400,
        lineHeight: 1.6, color: B.soft, margin: "0 0 16px",
      }}>
        You got an email from me a couple weeks ago asking if you'd leave a review. If you've been meaning to and haven't gotten to it, I get it. Life with a kid who doesn't feel when they need to go doesn't leave a lot of spare minutes.
      </p>

      {/* Hook paragraph 2 — bold reading path */}
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        But I'm writing one more time because I want to tell you something specific about{" "}
        <strong>why your story matters right now</strong>.
      </p>
    </div>

    {/* --- divider --- */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: RECOGNITION ANCHORS — LETTER-01
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Intro scenario */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: B.ink, margin: "0 0 16px",
      }}>
        There's a mom somewhere in the middle of her 2am search who's reading reviews right now. She might be sitting in the dark with her phone, trying to figure out if this is yet another thing that won't work for her kid.
      </p>

      {/* Lead-in */}
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 700,
        color: B.ink, margin: "0 0 16px",
      }}>
        She has a child who:
      </p>

      {/* Anchors card — cream background */}
      <div style={{
        background: B.cream, borderRadius: 16, padding: 24,
      }}>
        {[
          "sits on the toilet for 20 minutes and nothing happens",
          "plays in a wet pull-up without noticing or reacting",
          "\u201Calmost trained\u201D three times, each time it didn\u2019t stick",
          "can\u2019t tell you they need to go, whether in words or by pulling at their pants",
          "has been in pull-ups for years and she\u2019s stopped counting the attempts",
        ].map((anchor, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start",
            marginBottom: i < 4 ? 14 : 0, gap: 10,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: B.muted, flexShrink: 0, marginTop: 8,
            }} />
            <p style={{
              fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
              color: B.soft, margin: 0,
            }}>
              {anchor}
            </p>
          </div>
        ))}
      </div>

      {/* Post-anchors */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: B.ink, margin: "20px 0 0",
      }}>
        If even one of those sounds like her morning, your review might be the one she reads that makes her feel less alone. And maybe gives her the nudge to try something different.
      </p>
    </div>

    {/* --- divider --- */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: THREE-FAMILY TRIPTYCH — SP-04
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7F1", padding: "24px 24px" }}>
      {/* Intro */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: B.ink, margin: "0 0 24px",
      }}>
        I'll show you what I mean. Three parents, three different kids, all writing about the same product, but their wins look completely different:
      </p>

      {/* ── Card 1 — Sarah (L1) — warm amber left border ── */}
      <div style={{
        background: B.cream, borderRadius: 16, padding: 20,
        borderLeft: "3px solid #D4945F", marginBottom: 16,
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 17, fontStyle: "italic",
          lineHeight: 1.5, color: B.ink, margin: "0 0 12px",
        }}>
          &ldquo;He went from &lsquo;almost trained&rsquo; to staying dry for hours in about 6 weeks. I didn&rsquo;t think that was possible after a year of sticker charts.&rdquo;
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 11, fontWeight: 700,
          fontVariant: "small-caps", letterSpacing: "0.05em",
          color: B.muted, margin: "0 0 6px",
        }}>
          Sarah, mom of a 4-year-old who talks about the potty but wouldn&rsquo;t use it
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 10, textTransform: "uppercase",
          letterSpacing: 1, color: B.muted, margin: "0 0 4px",
        }}>
          VERBAL &middot; AGE 4
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 10, color: B.teal, margin: 0,
        }}>
          MINI-WIN: Hours dry
        </p>
      </div>

      {/* ── Card 2 — Lisa (L2) — soft teal left border ── */}
      <div style={{
        background: B.cream, borderRadius: 16, padding: 20,
        borderLeft: "3px solid #5A8F8C", marginBottom: 16,
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 17, fontStyle: "italic",
          lineHeight: 1.5, color: B.ink, margin: "0 0 12px",
        }}>
          &ldquo;She finally paused when she felt wetness. Then she looked down. Then she walked to the bathroom. That was Week 4. It&rsquo;s the first time anything has worked after 3 years of ABA protocols.&rdquo;
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 11, fontWeight: 700,
          fontVariant: "small-caps", letterSpacing: "0.05em",
          color: B.muted, margin: "0 0 6px",
        }}>
          Lisa, mom of a 6-year-old with sensory processing differences
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 10, textTransform: "uppercase",
          letterSpacing: 1, color: B.muted, margin: "0 0 4px",
        }}>
          SENSORY &middot; AGE 6
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 10, color: B.teal, margin: 0,
        }}>
          MINI-WIN: Week 4 pause
        </p>
      </div>

      {/* ── Card 3 — Maria (L3) — muted sage left border ── */}
      <div style={{
        background: B.cream, borderRadius: 16, padding: 20,
        borderLeft: "3px solid #7B9E7B", marginBottom: 20,
      }}>
        <p style={{
          fontFamily: F.display, fontSize: 17, fontStyle: "italic",
          lineHeight: 1.5, color: B.ink, margin: "0 0 12px",
        }}>
          &ldquo;He&rsquo;s not trained yet. But for the first time in 9 years, he touched the wet spot and looked at me like &lsquo;what is this.&rsquo; That moment, that feeling, I&rsquo;d been waiting for it since he was a baby. It&rsquo;s enough for now.&rdquo;
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 11, fontWeight: 700,
          fontVariant: "small-caps", letterSpacing: "0.05em",
          color: B.muted, margin: "0 0 6px",
        }}>
          Maria, mom of a 9-year-old non-verbal son
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 10, textTransform: "uppercase",
          letterSpacing: 1, color: B.muted, margin: "0 0 4px",
        }}>
          NON-VERBAL &middot; AGE 9
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 10, color: B.teal, margin: 0,
        }}>
          MINI-WIN: First touch awareness
        </p>
      </div>

      {/* Bridge line */}
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 700,
        lineHeight: 1.6, color: B.ink, margin: "0 0 12px",
      }}>
        Whether your child is like Sarah&rsquo;s, Lisa&rsquo;s, or Maria&rsquo;s, or somewhere in between, your honest experience, whatever it looks like, is what the next mom needs to see.
      </p>

      {/* Closing */}
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 700,
        fontStyle: "italic", color: B.ink, margin: 0,
      }}>
        Not a perfect review. A real one.
      </p>
    </div>

    {/* --- divider --- */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: THE ASK — Gentle, Grateful, Specific
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Lead-in */}
      <p style={{
        fontFamily: F.main, fontSize: 17, color: B.ink, margin: "0 0 12px",
      }}>
        So here&rsquo;s the ask, and it&rsquo;s a small one:
      </p>

      {/* Bold ask */}
      <p style={{
        fontFamily: F.main, fontSize: 17, fontWeight: 700,
        color: B.ink, margin: "0 0 16px",
      }}>
        If the product has made any difference, even a tiny one, would you share that?
      </p>

      {/* Permission */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        If it hasn&rsquo;t, that&rsquo;s also real and worth saying. Either way, your experience helps another mom decide whether this is worth trying for her kid. That&rsquo;s the kind of honesty this community is built on.
      </p>

      {/* Effort framing */}
      <p style={{
        fontFamily: F.main, fontSize: 16, color: B.muted, margin: 0,
      }}>
        It takes about 2 minutes. Here&rsquo;s the link:
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: CTA — Permission CTA (Primary Button)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px 30px", textAlign: "center" }}>
      <a href="#" style={{
        display: "block", width: "100%", height: 52, lineHeight: "52px",
        background: B.teal, color: "#FFFFFF",
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        textDecoration: "none", borderRadius: 999,
        textAlign: "center",
      }}>
        &rarr; Share your experience
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: PERMISSION NOT TO REVIEW — Soft Out
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 24px 30px" }}>
      {/* Soft out paragraph 1 */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: B.soft, margin: "0 0 16px",
      }}>
        And if this isn&rsquo;t the right moment, if you&rsquo;re not ready to write, or if the product simply hasn&rsquo;t worked for your child, that&rsquo;s a real answer too. No hard feelings. This email is the last one you&rsquo;ll get from me on reviews.
      </p>

      {/* Soft out paragraph 2 */}
      <p style={{
        fontFamily: F.main, fontSize: 17, lineHeight: 1.6,
        color: B.ink, margin: 0,
      }}>
        Whether you leave one or not, I&rsquo;m glad you gave us a try. That takes trust, and I don&rsquo;t take it lightly.
      </p>
    </div>

    {/* --- divider --- */}
    <div style={{ padding: "0 24px" }}>
      <div style={{ height: 1, background: "#E8E2DA" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: 60-DAY SEAL — Trust Anchor
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <div style={{
        background: B.cream, borderRadius: 16,
        border: `2px solid ${B.green}`,
        padding: 20, textAlign: "center",
      }}>
        {/* Seal icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" style={{ marginBottom: 8 }}>
          <circle cx="14" cy="14" r="12" stroke={B.green} strokeWidth="2" fill="none" />
          <path d="M8 14.5 L12 18.5 L20 10.5" stroke={B.green} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p style={{
          fontFamily: F.main, fontSize: 16, color: B.ink, margin: 0,
        }}>
          Try it for 60 days. Your judgment.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: LENA SIGN-OFF — SHORT Variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "24px 24px 30px" }}>
      <div style={{
        background: "#1F2A2C", borderRadius: 22,
        border: "1.5px solid #2F3D40", padding: "26px 24px 24px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${B.teal} 0%, ${B.green} 100%)`,
          opacity: 0.9,
        }} />

        {/* Closing */}
        <p style={{
          fontFamily: F.main, fontSize: 16, color: "#FFFFFF",
          margin: "0 0 12px",
        }}>
          Thanks for being here.
        </p>

        {/* Body */}
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.6,
          color: "#B8CACD", margin: "0 0 20px",
        }}>
          If you have a question or just want to tell me how it&rsquo;s going, hit reply. You&rsquo;ll get me, not a template, not a bot. I read everything.
        </p>

        {/* Handwritten name + flourish */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          padding: "16px 0", marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 42,
              lineHeight: 0.95, fontWeight: 500,
              color: B.teal, letterSpacing: -0.5,
            }}>
              Lena &md;&md;
            </div>
          </div>
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke={B.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke={B.teal} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Title */}
        <p style={{
          fontFamily: F.main, fontSize: 12, color: "#8A9B9D",
          margin: 0,
        }}>
          Customer Support &middot; Mom of two autistic sons
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
      {/* Brand tagline */}
      <p style={{
        fontFamily: F.main, fontSize: 11.5, lineHeight: 1.6,
        color: B.muted, margin: "0 0 8px",
      }}>
        BrightKidCo &middot; Built for the brain that learns differently.
      </p>

      {/* Unsubscribe + Manage Preferences */}
      <p style={{
        fontFamily: F.main, fontSize: 11.5, lineHeight: 1.6,
        color: B.muted, margin: "0 0 8px",
      }}>
        <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>Unsubscribe</a>
        {" "}&middot;{" "}
        <a href="#" style={{ color: B.muted, textDecoration: "underline" }}>Manage Preferences</a>
      </p>

      {/* Review stats */}
      <p style={{
        fontFamily: F.main, fontSize: 11.5, lineHeight: 1.6,
        color: B.muted, margin: "0 0 20px",
      }}>
        16,511 reviews &middot; 4.9&#9733;
      </p>

      {/* Gradient accent bar */}
      <div style={{
        width: 60, height: 3, margin: "0 auto",
        background: `linear-gradient(90deg, ${B.teal} 0%, ${B.green} 100%)`,
        borderRadius: 3,
      }} />
    </div>

  </EmailShell>
);

Object.assign(window.EMAILS, { "review-request/review-18-e2": Email_review_request_review_18_e2 });
