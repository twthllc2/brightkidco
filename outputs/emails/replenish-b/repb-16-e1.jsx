/* Replenish B — E1 | 75-Day Rotation Check-In (Cross-Level)
   Wireframe: wireframes/replenish-b/repb-16-e1.md
   Copy: copy/replenish-b/repb-16-e1.md
   Flow 16 · Day 75 post-purchase · 3+3 buyers
   Generated: 2026-06-09
*/

const Email_replenish_b_repb_16_e1 = () => (
  <EmailShell preheader="Your 3+3 bundle has been working hard for 75 days. Here's what to ask yourself, and when to reorder." bg="#FAF9F7">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Brand Logo
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "24px 20px", textAlign: "center" }}>
      <img src={LOGO} alt="BrightKidCo" style={{ height: 34 }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-5 Mirror Moment
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "linear-gradient(180deg, #DBFFCD 0%, #FAF9F7 100%)", padding: "0 24px 24px", textAlign: "center" }}>

      {/* Hero illustration placeholder */}
      <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 24 }}>
        <ImgFrame height={220} label="HERO ILLUSTRATION" sublabel="garden-path-winding.png" radius={16} />
      </div>

      {/* Headline */}
      <h1 style={{ fontFamily: F.main, fontSize: 28, fontWeight: 700, lineHeight: 1.3, color: "#1A1A1A", margin: "0 0 16px" }}>
        75 days of body-signal learning.
      </h1>

      {/* Subhead */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        Wherever you are in the journey, the signal is wiring.
      </p>
    </div>

    {/* Thin divider — #DBFFCD */}
    <div style={{ height: 1, background: "#DBFFCD" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: RECOGNITION ANCHORS — Letter Stack
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "24px" }}>
      {/* Intro line */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        At 75 days, parents tell me they're usually in one of these places:
      </p>

      {/* Recognition Anchors Card */}
      <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 24, marginBottom: 20 }}>

        {/* Anchor 1 */}
        <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M10 2 C6 2 3 5 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 5 14 2 10 2Z" fill="#5DD07A" opacity="0.8" />
            <path d="M10 6 L10 14 M7 10 L10 6" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0 }}>
            He's starting to pause before an accident. Not every time. But sometimes. And that's new.
          </p>
        </div>

        {/* Anchor 2 */}
        <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M10 2 C6 2 3 5 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 5 14 2 10 2Z" fill="#5DD07A" opacity="0.8" />
            <path d="M10 6 L10 14 M7 10 L10 6" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0 }}>
            She tolerates the underwear now, doesn't fight it, doesn't ask to take it off. That's sensory progress you didn't have 10 weeks ago.
          </p>
        </div>

        {/* Anchor 3 */}
        <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M10 2 C6 2 3 5 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 5 14 2 10 2Z" fill="#5DD07A" opacity="0.8" />
            <path d="M10 6 L10 14 M7 10 L10 6" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0 }}>
            Nothing obvious has changed yet. And you're wondering if this still on track.
          </p>
        </div>

        {/* Anchor 4 */}
        <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M10 2 C6 2 3 5 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 5 14 2 10 2Z" fill="#5DD07A" opacity="0.8" />
            <path d="M10 6 L10 14 M7 10 L10 6" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0 }}>
            You've seen real progress, dry stretches, awareness moments, even a few successful potty trips. And now you're wondering: what's next?
          </p>
        </div>

        {/* Anchor 5 */}
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M10 2 C6 2 3 5 3 9 C3 14 10 18 10 18 C10 18 17 14 17 9 C17 5 14 2 10 2Z" fill="#5DD07A" opacity="0.8" />
            <path d="M10 6 L10 14 M7 10 L10 6" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.8, color: "#4A6568", margin: 0 }}>
            You took a break somewhere in those 75 days. Maybe a week. Maybe a month. That's normal here.
          </p>
        </div>
      </div>

      {/* Post-anchors validation */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        Wherever you are on that list, every single one of those is a real outcome. And every single one tells me the underwear is doing its job: giving the nervous system information it was missing before.
      </p>
    </div>

    {/* Thin divider — #DBFFCD */}
    <div style={{ height: 1, background: "#DBFFCD" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: THREE-FAMILY TESTIMONIAL — SP-09
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FBF7EB", padding: "24px" }}>
      {/* Intro */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        Three families, three different timelines, one common thread:
      </p>

      {/* Card 1 — Sarah (L1, teal left-border) */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, borderLeft: "3px solid #2BAEB4", padding: 20, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        {/* Quote marks */}
        <div style={{ fontFamily: "'Georgia', serif", fontSize: 36, lineHeight: 1, color: "#F5C84B", marginBottom: 8, fontWeight: 700 }}>"</div>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          He went from 'almost trained' to 'mostly there' around the 8-week mark. The rotation meant we always had a clean pair ready when he needed to go.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, fontStyle: "italic", lineHeight: 1.4, color: "#8A9B9D", margin: 0 }}>
          Sarah, mom of a verbal 4-year-old
        </p>
      </div>

      {/* Card 2 — Lisa (L2, green left-border) */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, borderLeft: "3px solid #5DD07A", padding: 20, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: 36, lineHeight: 1, color: "#F5C84B", marginBottom: 8, fontWeight: 700 }}>"</div>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          She finally started pausing before accidents in Week 6. That pause, that split-second where you can see her brain registering 'something happened', is everything I was hoping for.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, fontStyle: "italic", lineHeight: 1.4, color: "#8A9B9D", margin: 0 }}>
          Lisa, mom of a 6-year-old with sensory differences
        </p>
      </div>

      {/* Card 3 — Maria (L3, muted left-border) */}
      <div style={{ background: "#FFFFFF", borderRadius: 12, borderLeft: "3px solid #8A9B9D", padding: 20, marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: 36, lineHeight: 1, color: "#F5C84B", marginBottom: 8, fontWeight: 700 }}>"</div>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#4A6568", margin: "0 0 12px" }}>
          He's not trained. But he's feeling the wetness for the first time in 7 years. That alone was worth the 75 days. The rotation means the underwear is always part of his routine now, and every small signal builds on the last.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, fontStyle: "italic", lineHeight: 1.4, color: "#8A9B9D", margin: 0 }}>
          Maria, mom of a non-verbal 8-year-old
        </p>
      </div>

      {/* Closing */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: 0 }}>
        If any of those sound familiar, if you've seen even one small change in 75 days, the signal-wiring is happening. It just happens on different timelines for different nervous systems.
      </p>
    </div>

    {/* Thin divider — #DBFFCD */}
    <div style={{ height: 1, background: "#DBFFCD" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: VALIDATION + MECHANISM — LETTER-02
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "24px" }}>
      {/* Bold lead-in */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 20px" }}>
        I want to be honest with you:
      </p>

      {/* Body paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        75 days into the Body-Signal approach, some families are seeing real momentum. Others are still in the "wait and watch" phase. Both are legitimate outcomes.
      </p>

      {/* Body paragraph 2 — mechanism */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        Here's what I've learned watching thousands of families go through this:
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        The underwear doesn't train your child. It <em>informs</em> their nervous system. The signal has to reach the brain, and for some kids, that pathway takes longer to wire. The 3+3 rotation means that signal is available every single day, multiple times a day, without you having to do anything extra.
      </p>

      {/* Conditional paths */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 8px" }}>
        If you've seen nothing yet:
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: "0 0 20px" }}>
        That's not a sign it's not working. It's a sign the wiring is still in progress. Some kids need 8, 12, even 16 weeks before the first observable signal.
      </p>

      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 8px" }}>
        If you've seen mini-wins:
      </p>
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
        The pathway is building. Keep going. The next 75 days often look very different from the first 75.
      </p>
    </div>

    {/* Thin divider — #DBFFCD */}
    <div style={{ height: 1, background: "#DBFFCD" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: ROTATION VALUE / UPSELL — Product Card
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "rgba(219,255,205,0.2)", padding: "24px" }}>
      <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        {/* Eyebrow */}
        <div style={{ fontFamily: F.main, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: "#2BAEB4", marginBottom: 8 }}>
          THE 5+5 BUNDLE
        </div>

        {/* Body copy paragraph 1 */}
        <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 700, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 12px" }}>
          The 3+3 bundle was designed for exactly this: 6 pairs in rotation so your child always has a clean, signal-ready pair available.
        </p>

        {/* Body copy paragraph 2 */}
        <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: "#4A6568", margin: 0 }}>
          5+5 bundle adds 4 more pairs, enough for a full two-week cycle without scrambling. More pairs = more signal opportunities = less laundry stress for you.
        </p>
      </div>
    </div>

    {/* Thin divider — #DBFFCD */}
    <div style={{ height: 1, background: "#DBFFCD" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: CTA — CTA-11 Permission CTA
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "30px 24px", textAlign: "center" }}>
      {/* Pre-CTA copy */}
      <p style={{ fontFamily: F.main, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 24px" }}>
        If the 3+3 is still working for your family, great. No need to change anything. The underwear will keep doing its job for many more weeks.
      </p>

      {/* Primary CTA button */}
      <a href="https://www.brightkidco.com/collections/all-products" style={{
        display: "inline-block",
        padding: "0 32px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: 0.5,
        textDecoration: "none",
        borderRadius: 50,
        height: 48,
        lineHeight: "48px",
        marginBottom: 20,
      }}>
        Refresh Your 3+3 →
      </a>

      {/* Secondary CTA — text link */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, margin: "0 0 20px" }}>
        <a href="https://www.brightkidco.com/collections/all-products" style={{ color: "#2BAEB4", textDecoration: "underline" }}>
          Explore the 5+5 Bundle →
        </a>
      </p>

      {/* Permission closing */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#4A6568", fontStyle: "italic", margin: 0 }}>
        No rush. The signal-wiring happens on your child's timeline, not ours.
      </p>
    </div>

    {/* Thin divider — #DBFFCD */}
    <div style={{ height: 1, background: "#DBFFCD" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: NEXT TEASER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "16px 24px" }}>
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#8A9B9D", margin: 0 }}>
        <strong>Next time:</strong> The final check-in — what 150 days of rotation means for the long game.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: LENA SIGN-OFF — SHORT variant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#1F2D2F", padding: "44px 22px 36px" }}>
      <div style={{
        position: "relative",
        background: "#1F2A2C",
        border: "1.5px solid #2F3D40",
        borderRadius: 22,
        padding: "26px 24px 24px",
        overflow: "hidden",
      }}>
        {/* Subtle top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)", opacity: 0.9,
        }} />

        {/* Top row: avatar + name/role */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          {/* Avatar with warm ring */}
          <div style={{
            width: 58, height: 58, flexShrink: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD866 0%, #2BAEB4 100%)",
            padding: 2.5,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "#FFFDF6",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", border: "1.5px solid #1F2D2F",
            }}>
              <svg width="58" height="58" viewBox="0 0 58 58">
                <rect width="58" height="58" fill="#F5E8D0" />
                <circle cx="29" cy="22" r="10" fill="#D4A574" />
                <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
                <text x="29" y="55" textAnchor="middle" fontSize="6" fill="#1F2D2F" fontWeight="700" letterSpacing="0.5" opacity="0.4">PHOTO</text>
              </svg>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: "uppercase", color: "#8FAFB2", fontWeight: 700, marginBottom: 2 }}>
              A note from
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
              Lena Bauer
            </div>
            <div style={{ fontSize: 12, color: "#8FAFB2", marginTop: 2, fontStyle: "italic" }}>
              Customer Support · Mom of two autistic sons
            </div>
          </div>
        </div>

        {/* Handwritten signature — Caveat font */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          paddingTop: 16, paddingBottom: 16,
          borderTop: "1.5px dashed #3A4547",
          borderBottom: "1.5px dashed #3A4547",
          marginBottom: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#B8CACD", marginBottom: 2 }}>
              Talk soon,
            </div>
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 42,
              lineHeight: 0.95,
              fontWeight: 500,
              color: "#2BAEB4",
              letterSpacing: -0.5,
              marginTop: 2,
            }}>
              Lena
            </div>
          </div>

          {/* Tiny flourish SVG */}
          <svg width="54" height="40" viewBox="0 0 54 40" style={{ flexShrink: 0, opacity: 0.55 }}>
            <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48,12 L52,10 L50,14" stroke="#2BAEB4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* P.S. — Easter Egg reply-bait */}
        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#B8CACD", fontStyle: "italic" }}>
          <span style={{ color: "#2BAEB4", fontWeight: 700, fontStyle: "normal", marginRight: 4 }}>
            P.S.
          </span>
          If your child is still not showing any awareness signals after 75 days, that's not failure. Some kids need longer. Reply if you want me to look at your specific situation. I read everything.
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: FOOTER — CAN-SPAM Compliant
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FAF9F7", padding: "24px 24px 16px", textAlign: "center" }}>
      {/* Thin divider above footer */}
      <div style={{ height: 1, background: "#DBFFCD", marginBottom: 20 }} />

      {/* Brand name */}
      <p style={{ fontFamily: F.main, fontSize: 12, fontWeight: 700, letterSpacing: 0.5, color: "#1A1A1A", margin: "0 0 4px" }}>
        BrightKidCo
      </p>

      {/* Tagline */}
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: "#8A9B9D", fontStyle: "italic", margin: "0 0 12px" }}>
        Built for the brain that learns differently.
      </p>

      {/* Physical address */}
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: "#8A9B9D", margin: "0 0 8px" }}>
        [Physical Address]
      </p>

      {/* Purchase context */}
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: "#8A9B9D", margin: "0 0 12px" }}>
        You're receiving this because you purchased the 3+3 Body-Signal Learning Bundle.
      </p>

      {/* Links */}
      <p style={{ fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: "#8A9B9D", margin: 0 }}>
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>Unsubscribe</a>
        {" | "}
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>Manage Preferences</a>
        {" | "}
        <a href="#" style={{ color: "#2BAEB4", textDecoration: "underline" }}>Privacy Policy</a>
      </p>
    </div>

  </EmailShell>
);

window.EMAILS = window.EMAILS || {};
window.EMAILS["replenish-b/repb-16-e1"] = Email_replenish_b_repb_16_e1;
