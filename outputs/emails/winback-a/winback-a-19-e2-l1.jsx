/* Winback Path A — E2 (Day 7) | Level 1 (Sarah)
   Wireframe: wireframes/winback-a/winback-a-19-e2-l1.md
   Strategy: strategy-map.json → flows.winback-a.emails.e2-l1
   Generated: 2026-06-09
*/

const Email_winback_a_19_e2_l1 = () => (
  <EmailShell preheader="{{ first_name | default: "hey" }}, that Pre-K deadline doesn't have to be a wall." bg="#FBF7F1">

    {/* === SECTION 1: HEADER === */}
    <div style={{ background: "#FFFFFF", padding: "16px 22px", borderBottom: "1px solid #E8DED5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src="../assets/brightkidco-logo-v2.png" alt="BrightKidCo" style={{ height: 28 }} />
      <div style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568" }}>Lena from BrightKidCo</div>
    </div>

    {/* === SECTION 2: HERO-10 Bold Declaration === */}
    <div style={{ background: "#FFFFFF", padding: "48px 22px 0" }}>
      <div style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#00CC66", marginBottom: 14, textAlign: "center" }}>
        DAY 7 · WINBACK CHECK-IN
      </div>
      <h1 style={{ fontFamily: F.main, fontSize: 30, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.3, color: "#1F2D2F", margin: "0 0 16px", textAlign: "center" }}>
        Pre-K is coming — here's the gap you can close
      </h1>
      <ImgFrame height={180} label="TRAINING PANT" sublabel="fox red-white — flat lay, 420 × 180" />
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "24px 0 0", textAlign: "center" }}>
        How one mom turned 90 days into real progress
      </p>
    </div>

    {/* === SECTION 3: DESDEEP-8 Icon Story (Decorative) === */}
    <div style={{ background: "#FFFFFF", padding: "12px 22px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,204,102,0.2)" }} />
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,204,102,0.2)" }} />
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,204,102,0.2)" }} />
      </div>
    </div>

    {/* === SECTION 4: LETTER-02 Handwritten Opener — Hook + Validation === */}
    <div style={{ background: "#FFFFFF", padding: "32px 22px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 18px" }}>
        It's been 90 days since you first tried the Body-Signal Learning Layer. Maybe it worked. Maybe it sat in a drawer. Either way, I wanted to share something that landed in my inbox last week.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 14px" }}>
        Sarah, a mom just like you, wrote me this:
      </p>

      <div style={{ background: "#DBFFCD", borderRadius: 20, padding: 20, borderLeft: "3px solid #00CC66", marginBottom: 18 }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          "He went today! Once! But he went! We'd been trying for 3 years. 3 weeks in Body-Signal undies and he paused. Looked down. Walked to the potty. That never happened before."
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        <span style={{ fontWeight: 600, color: "#1F2D2F" }}>That pause. That look. That walk.</span> That's the interoception gap starting to close. Not magic. Not an overnight fix. Just a nervous system finally receiving a signal it never got before.
      </p>
    </div>

    {/* === SECTION 5: SP-02 Expert Endorsement — Pre-K Success Story === */}
    <div style={{ background: "#FFFFFF", padding: "32px 22px" }}>
      <div style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#00CC66", marginBottom: 14 }}>
        PRE-K SUCCESS STORY
      </div>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 18px" }}>
        Here's what Sarah (different Sarah, same story) told me about her Pre-K journey:
      </p>

      <div style={{ background: "#FBF7F1", borderRadius: 20, padding: 22, borderLeft: "3px solid #00CC66", boxShadow: "4px 4px 0 #1F2D2F", marginBottom: 18 }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#1F2D2F", margin: 0 }}>
          "Pre-K starts in 2 months. I was terrified he'd be the kid in pull-ups. After 4 weeks in the 3+3 Bundle, he started telling me BEFORE. Not every time. But enough that his teacher said he's ready. That sentence, 'he's ready', I cried."
        </p>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: 0 }}>
        Her son was exactly where yours might be: talks about the potty, understands the concept, but the body signal doesn't arrive in time. The underwear gave his brain the extra seconds it needed to register: <span style={{ fontWeight: 600, color: "#1F2D2F" }}>something is happening.</span>
      </p>
    </div>

    {/* === SECTION 6: Thin Rule === */}
    <div style={{ background: "#FFFFFF", padding: "0 22px" }}>
      <div style={{ height: 1, background: "#E8DED5" }} />
    </div>

    {/* === SECTION 7: EDU-3 Interoception Explainer — Mechanism === */}
    <div style={{ background: "#FFFFFF", padding: "32px 22px" }}>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 14px" }}>
        The reason it works is straightforward, but not straightforward. Traditional potty training methods assume your child can feel the "I need to go" signal. For many autistic children, that signal is delayed or absent (Nicholson et al. 2019). <span style={{ fontWeight: 600, color: "#1F2D2F" }}>It's not stubbornness. It's neurology.</span>
      </p>
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", margin: "0 0 22px" }}>
        The Body-Signal Learning Layer doesn't teach your child to feel. It gives their nervous system the feedback it's been missing, a gentle sensation that lasts that bridges the gap between bladder fullness and brain awareness.
      </p>

      {/* Stat Callout */}
      <div style={{ background: "#FFFFFF", border: "1px solid rgba(0,204,102,0.3)", borderRadius: 14, padding: 22, marginBottom: 18 }}>
        <div style={{ fontFamily: F.main, fontSize: 40, fontWeight: 800, color: "#00CC66", textAlign: "center" }}>82%</div>
        <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F", textAlign: "center", marginTop: 6 }}>
          of kids show clearer body awareness within 2-4 weeks of consistent wear
        </div>
        <div style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", textAlign: "center", marginTop: 8 }}>
          Internal data, N=672 families
        </div>
      </div>

      <ImgFrame height={110} label="GUIDE BOOK" sublabel="potty training guide — 200 × 110" />
    </div>

    {/* === SECTION 8: ProductShowcaseFull === */}
    <div style={{ background: "#FFFFFF", padding: "32px 22px" }}>
      <div style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#00CC66", marginBottom: 14 }}>
        THE PRODUCT
      </div>

      <ImgFrame height={200} label="TRAINING PANT" sublabel="fox red-white — 300 × 200" />

      <h2 style={{ fontFamily: F.main, fontSize: 20, fontWeight: 600, color: "#1F2D2F", margin: "20px 0 18px", textAlign: "center" }}>
        Body-Signal Learning Layer™ Pants
      </h2>

      <div style={{ background: "#FFFFFF", border: "2px solid #00CC66", borderRadius: 20, padding: "16px 22px", marginBottom: 12, boxShadow: "4px 4px 0 #1F2D2F" }}>
        <div style={{ fontFamily: F.main, fontSize: 15, fontWeight: 500, color: "#1F2D2F", textAlign: "center" }}>
          3+3 Bundle · $79.99
        </div>
        <div style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568", textAlign: "center", marginTop: 4 }}>
          6 pairs · Free shipping · 62% savings · $13.33 per pair · WELCOME10 applies
        </div>
      </div>

      <div style={{ background: "#FFFFFF", border: "1px solid #4A6568", borderRadius: 14, padding: "12px 22px" }}>
        <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#4A6568", textAlign: "center" }}>
          1 Pair · $34.99 · Try one before committing
        </div>
      </div>
    </div>

    {/* === SECTION 9: TRUST-1 60-Day Guarantee === */}
    <div style={{ background: "#FBF7F1", padding: "32px 22px" }}>
      <div style={{ background: "#FBF7F1", border: "2px solid #00CC66", borderRadius: 20, padding: 24, textAlign: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#00CC66", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
          60 days to try it. By your judgment. If your child shows zero awareness progress, full refund. No forms. No hoops.
        </p>
      </div>
    </div>

    {/* === SECTION 10: CTA-5 Product CTA — Pre-K Framed === */}
    <div style={{ background: "#FFFFFF", padding: "32px 22px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: "#00CC66",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 0.3,
        textDecoration: "none",
        borderRadius: 999,
        width: 300,
        height: 56,
        lineHeight: "56px",
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        See how other Pre-K parents made it work →
      </a>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#8A9B9D", margin: "16px 0 0" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, fontStyle: "italic", color: "#8A9B9D", margin: "12px 0 0" }}>
        Next time: The final nudge — one last look at what's possible before the door closes.
      </p>
    </div>

    {/* === SECTION 11: Lena Signoff — Winback (LONG) === */}
    <div style={{ background: "#FFFFFF", padding: "32px 22px" }}>
      <div style={{ position: "relative", background: "#1F2A2C", border: "1.5px solid #2F3D40", borderRadius: 20, padding: "26px 24px 24px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #FFD866, #00CC66)", opacity: 0.9 }} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{ width: 58, height: 58, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg, #FFD866 0%, #00CC66 100%)", padding: 2.5 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#FFFDF6", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1.5px solid #1F2D2F" }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>Lena S.</div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>Customer Support · Mom of two autistic sons</div>
          </div>
        </div>

        <div style={{ borderTop: "1.5px dashed #3A4547", paddingTop: 16, paddingBottom: 16, marginBottom: 16, borderBottom: "1.5px dashed #3A4547" }}>
          <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>With care,</div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 42, lineHeight: 0.95, fontWeight: 500, color: "#D8F57C", letterSpacing: -0.5, marginTop: 2 }}>Lena</div>
        </div>

        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#D8F57C", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>P.S.</span>
          My older son was 8 before we figured this out. If the first attempt didn't click, that's normal. Some nervous systems just need more time. The 60-day guarantee restarts whenever you're ready to try again.
        </div>
      </div>
    </div>

    {/* === SECTION 12: FOOTER === */}
    <div style={{ background: "#FFFFFF", padding: "30px 22px", textAlign: "center" }}>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #2BAEB4, #5DD07A)", borderRadius: 3, margin: "0 auto 20px" }} />

      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 500, color: "#4A6568", margin: "0 0 14px" }}>
        <a href="#" style={{ color: "#4A6568", textDecoration: "none" }}>Shop</a>
        {" · "}
        <a href="#" style={{ color: "#4A6568", textDecoration: "none" }}>FAQ</a>
        {" · "}
        <a href="#" style={{ color: "#4A6568", textDecoration: "none" }}>Contact</a>
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 22, margin: "14px 0 20px" }}>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="#1F2D2F" stroke="none" /></svg></a>
        <a href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" strokeWidth="1.8"><path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </div>

      <p style={{ fontFamily: F.main, fontSize: 11.5, color: "#8A9B9D", lineHeight: 1.65, margin: "0 auto", maxWidth: 340 }}>
        You're receiving this because you purchased from BrightKidCo. If your child's situation has changed, you can update preferences or unsubscribe anytime.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", marginTop: 8 }}>
        BrightKidCo LLC · 123 Commerce Street, Suite 200, Portland, OR 97201
      </p>
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["winback-a/winback-a-19-e2-l1"] = Email_winback_a_19_e2_l1;
