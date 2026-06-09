/* Winback Path B — E2 | L1 (Sarah — Verbal, Hope-Intact)
   Wireframe: wireframes/winback-b/winback-b-24-e2-l1.md
   Copy: copy/winback-b/winback-b-24-e2-l1.md
   Strategy: strategy-map.json → flows.winback-b.emails.e2-l1
   Generated: 2026-06-09
*/

const Email_winback_b_24_e2_l1 = () => (
  <EmailShell preheader="A different angle on the signal question that's been on your mind." bg="#FFFFFF">

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — From Name + View in Browser
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1A1A1A" }}>
        Lena from BrightKidCo
      </span>
      <a href="#" style={{ fontFamily: F.main, fontSize: 12, color: "#7A7A84", textDecoration: "underline" }}>
        View in browser
      </a>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: BRAND-GREEN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "0 32px" }}>
      <div style={{ height: 2, background: "#5DD07A" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HOOK — LETTER-03 Letter + Pull-Quote
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 32px" }}>
      {/* Paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#1A1A1A", margin: "0 0 16px" }}>
        You signed up 67 days ago. In that time, you've read the mechanism, you understand the interoception gap, and you're still asking the same question: "Will this actually work for my kid?"
      </p>

      {/* Paragraph 2 */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#1A1A1A", margin: "0 0 16px" }}>
        That's not skepticism. That's being a good parent.
      </p>

      {/* Paragraph 3 — new citation */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#1A1A1A", margin: 0 }}>
        Here's something we haven't told you yet: <em>a 2025 review of 49 scientific studies confirmed that body signal difficulties, the inability to sense internal body signals like bladder fullness, are a well-established feature of the autistic nervous system (Barmpagiannis & Baldimtsi 2025). Not a theory. Not a guess. Forty-nine studies, all pointing in the same direction.</em>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: VALIDATION + MECHANISM
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 48px" }}>
      {/* Validation paragraph 1 */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#1A1A1A", margin: "0 0 16px" }}>
        The real reason you haven't bought yet isn't the price. It's not the shipping. It's the hope-fear: "What if I get my hopes up and it doesn't work?"
      </p>

      {/* Lena's personal experience — lighter tone */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#7A7A84", margin: "0 0 16px" }}>
        I get that. Both my sons went through multiple failed methods before we found what worked. One trained at 6. The other was almost 8. I know what it feels like to want something to work so badly that you're almost afraid to try.
      </p>

      {/* Mechanism paragraph — mint box with green left border */}
      <div style={{ background: "#DBFFCD", borderLeft: "3px solid #5DD07A", borderRadius: 12, padding: "16px 20px" }}>
        <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#1A1A1A", margin: 0 }}>
          Here's what the new research reinforces: the problem isn't that you haven't tried hard enough or that your child is being stubborn. The problem is that standard potty training methods assume the child can feel the "I need to go" signal. BrightKidCo's Body-Signal Learning Layer doesn't train behavior, it gives the brain formation it's been missing. A gentle sensation that lasts 30-60 seconds, long enough for a nervous system that processes internal signals differently to register: "Something happened."
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: UPDATED OFFER — Two Doors
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 32px" }}>
      {/* Intro text */}
      <p style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#1A1A1A", margin: "0 0 20px" }}>
        You don't need to commit to a bundle to find out if the signal works for your child.
      </p>

      {/* Door 1 — 1 Pair */}
      <div style={{ background: "#DBFFCD", border: "1px solid #FBF7EB", borderRadius: 20, padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, textTransform: "uppercase", color: "#7A7A84", marginBottom: 8, letterSpacing: "0.05em" }}>
              TEST THE SIGNAL
            </div>
            <div style={{ fontFamily: F.main, fontSize: 22, fontWeight: 400, color: "#1A1A1A", lineHeight: "28px" }}>
              $34.99
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, color: "#7A7A84", marginTop: 4, fontStyle: "italic" }}>
              1 Pair
            </div>
          </div>
          <div style={{
            background: "#DBFFCD", borderRadius: 8,
            padding: "4px 12px", fontFamily: F.main, fontSize: 13, color: "#1A1A1A",
          }}>
            60-Day Guarantee
          </div>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: "22px", color: "#1A1A1A", margin: "16px 0 0" }}>
          One pair, $34.99. Put it alongside your current routine. Not as a replacement for pull-ups, not as a method you have to follow perfectly. Just add it. See if your child pauses. See if they look down. See if that never-before-seen moment of awareness shows up.
        </p>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: "22px", color: "#1A1A1A", margin: "12px 0 0" }}>
          One pair tells you everything you need to know. If you see any signal change, even a pause, even a glance down, you'll know the mechanism is real. If you don't? Full refund, 60 days, your judgment, no questions asked.
        </p>
      </div>

      {/* Door 2 — 3+3 Bundle */}
      <div style={{ background: "#FBF7EB", border: "1px solid #FBF7EB", borderRadius: 20, padding: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, textTransform: "uppercase", color: "#7A7A84", marginBottom: 8, letterSpacing: "0.05em" }}>
              FULL APPROACH
            </div>
            <div style={{ fontFamily: F.main, fontSize: 22, fontWeight: 400, color: "#1A1A1A", lineHeight: "28px" }}>
              $79.99
            </div>
            <div style={{ fontFamily: F.main, fontSize: 13, color: "#7A7A84", marginTop: 4, fontStyle: "italic" }}>
              3+3 Bundle · 6 pairs · Free shipping
            </div>
          </div>
          <div style={{
            background: "#DBFFCD", borderRadius: 8,
            padding: "4px 12px", fontFamily: F.main, fontSize: 13, color: "#1A1A1A",
          }}>
            60-Day Guarantee
          </div>
        </div>
        <p style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: "22px", color: "#1A1A1A", margin: "16px 0 0" }}>
          And if you're ready for the full approach? The 3+3 Bundle ($79.99, free shipping, 6 pairs, 62% savings) is still the bestseller for a reason. Same guarantee. Same zero-risk.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: CTA BUTTON — #5DD07A bg
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 32px", textAlign: "center" }}>
      {/* Primary CTA Button */}
      <a href="{{ shop_url }}" style={{
        display: "block", padding: "16px 32px",
        background: "#5DD07A", color: "#FFFFFF",
        fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: "20px",
        textDecoration: "none", borderRadius: 8,
        textAlign: "center", maxWidth: 320, margin: "0 auto",
      }}>
        See if the signal works for your child →
      </a>

      {/* Price note */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: "#7A7A84", margin: "16px 0 0" }}>
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: SIGNOFF — Lena Sign-Off (LONG Variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "32px 32px" }}>
      {/* With care, */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: "20px", color: "#1A1A1A", margin: "0 0 8px" }}>
        With care,
      </p>

      {/* Lena signature */}
      <p style={{ fontFamily: "'Caveat', cursive", fontSize: 28, color: "#1A1A1A", margin: "0 0 8px" }}>
        Lena ——
      </p>

      {/* Role */}
      <p style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, lineHeight: "20px", color: "#7A7A84", margin: "0 0 20px" }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. */}
      <p style={{ fontFamily: F.main, fontSize: 13, fontStyle: "italic", color: "#7A7A84", lineHeight: 1.6, margin: 0 }}>
        P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment. <a href="{{ shop_url }}" style={{ color: "#2BAEB4", textDecoration: "underline" }}>Link</a>
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "16px 32px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 9, color: "#9AA8A7", margin: "0 0 8px", lineHeight: "14px" }}>
        You're receiving this email because you signed up at brightkidco.com. If you'd like to update your preferences or unsubscribe, click here.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 9, color: "#9AA8A7", margin: "0 0 4px", lineHeight: "14px" }}>
        BrightKidCo LLC
      </p>
      <p style={{ fontFamily: F.main, fontSize: 9, color: "#9AA8A7", margin: "0 0 4px", lineHeight: "14px" }}>
        123 Innovation Drive, Suite 200
      </p>
      <p style={{ fontFamily: F.main, fontSize: 9, color: "#9AA8A7", margin: "0 0 4px", lineHeight: "14px" }}>
        San Francisco, CA 94105
      </p>
      <p style={{ fontFamily: F.main, fontSize: 9, color: "#9AA8A7", margin: "0 0 8px", lineHeight: "14px" }}>
        United States
      </p>
      <p style={{ fontFamily: F.main, fontSize: 9, color: "#9AA8A7", margin: "0 0 16px", lineHeight: "14px" }}>
        <a href="{% unsubscribe %}" style={{ color: "#9AA8A7", textDecoration: "underline" }}>Unsubscribe</a> · <a href="{{ manage_preferences_url }}" style={{ color: "#9AA8A7", textDecoration: "underline" }}>Preferences</a>
      </p>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #5DD07A, #2BAEB4)", margin: "0 auto", borderRadius: 3 }} />
    </div>

  </EmailShell>
);

Object.assign(window, { Email_winback_b_24_e2_l1 });
