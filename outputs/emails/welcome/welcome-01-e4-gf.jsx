/* Welcome Flow — E4 | General Family (GF)
   Wireframe: wireframes/welcome/welcome-01-e4-gf.md
   Strategy: strategy-map.json → welcome.emails.e4-gf
   Generated: 2026-06-09
*/

const Email_Welcome_E4_GF = () => {
  const hr = (
    <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
      <div style={{ width: 80, height: 1, background: "#E3DCD2" }} />
    </div>
  );

  return (
    <EmailShell
      preheader="Whether your child is 3 or 10, verbal or non-verbal, diagnosed or still figuring it out, these three families all found the same thing."
      bg="#FAF8F5"
    >
      {/* ── Header ── */}
      <Header bg="#FAF8F5" />

      {/* ══════ HERO: Story Fragment ══════ */}
      <div style={{ background: "#F5EDE3" }}>
        <img
          src="/root/projects/brightkidco/raw/product-photos/lifestyle/toddler-livingroom-dino-yellow.png"
          alt="A happy toddler playing in a warm living room wearing BrightKidCo training pants"
          style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: "20px 32px 24px", textAlign: "center" }}>
          <div style={{
            fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
            color: B.muted, fontWeight: 700, marginBottom: 10,
          }}>
            THREE FAMILIES
          </div>
          <h1 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 28, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.2,
            color: B.ink, margin: 0,
          }}>
            Three kids, three stories,<br />one thing in common
          </h1>
        </div>
      </div>

      {hr}

      {/* ══════ HOOK: Double Column ══════ */}
      <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
        <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ width: "50%", paddingRight: 10, verticalAlign: "top" }}>
                <p style={{
                  fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
                  margin: 0, fontFamily: F.main,
                }}>
                  Whether your child is just starting to show signs, or you're years into what feels like every possible method, if they don't feel when they need to go, you've been fighting the wrong battle.
                </p>
              </td>
              <td style={{ width: "50%", paddingLeft: 10, verticalAlign: "top" }}>
                <p style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 18, fontStyle: "italic", lineHeight: 1.5,
                  color: B.ink, margin: 0,
                }}>
                  I hear from parents every day who are exhausted, out of ideas, and wondering if this will ever click. Let me introduce you to three families. Three different kids. Three completely different stories. One thing in common.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {hr}

      {/* ══════ VALIDATION: Letter + Pull-Quotes + Stat ══════ */}
      <div style={{ background: "#FBF7F1", padding: "32px 24px" }}>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: "0 0 24px", fontFamily: F.main,
        }}>
          If you've ever thought any of these things, you're not alone. You haven't failed. You've been working with advice that wasn't built for your child's nervous system.
        </p>

        {/* Quote 1 */}
        <div style={{
          background: "#FFFFFF", borderRadius: 16, padding: "20px 24px",
          border: "1px solid #E3DCD2", marginBottom: 16,
        }}>
          <p style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
            color: B.ink, margin: "0 0 8px",
          }}>
            "I feel like we have tried everything, reward systems, punishments and nothing seems to work."
          </p>
          <p style={{ fontSize: 12, color: B.muted, margin: 0 }}>
            — Real parent, Autistic-LanguageBank-full.txt (line 90-91)
          </p>
        </div>

        {/* Quote 2 */}
        <div style={{
          background: "#FFFFFF", borderRadius: 16, padding: "20px 24px",
          border: "1px solid #E3DCD2", marginBottom: 16,
        }}>
          <p style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
            color: B.ink, margin: "0 0 8px",
          }}>
            "I feel like a failure because he's still in pull ups."
          </p>
          <p style={{ fontSize: 12, color: B.muted, margin: 0 }}>
            — Real parent, Autistic-1-full.txt (line 2222-2223)
          </p>
        </div>

        {/* Stat Callout — Muted Sage */}
        <div style={{
          background: "#C8D5C0", borderRadius: 4, padding: 20,
          marginBottom: 16,
        }}>
          <p style={{
            fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: 0, fontFamily: F.main,
          }}>
            Nearly half of autistic 4-5 year olds, <strong>49%</strong>, are still not toilet trained (Wiggins et al. 2022, CDC-funded study of 743 children). That's compared to just 8% of typically developing children the same age.
          </p>
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: 0, fontFamily: F.main,
        }}>
          That statistic doesn't mean something is wrong with your child. It means what you're going through is documented, measurable, and far more common than you think.
        </p>
      </div>

      {hr}

      {/* ══════ MECHANISM: Comparison Matrix ══════ */}
      <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: "0 0 20px", fontFamily: F.main,
        }}>
          Here's what all three families have in common: their children weren't getting the body signal.
        </p>

        {/* Pull-ups vs BKC Signal — side-by-side */}
        <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: "collapse", marginBottom: 20 }}>
          <tbody>
            <tr>
              <td style={{ width: "50%", paddingRight: 8, verticalAlign: "top" }}>
                <div style={{
                  background: "#FAF7F0", border: "1.5px solid #E3DCD2",
                  borderRadius: 12, padding: "16px 14px",
                }}>
                  <div style={{
                    fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase",
                    color: B.muted, fontWeight: 700, marginBottom: 6,
                  }}>
                    Pull-ups
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: B.ink, lineHeight: 1.3 }}>
                    "Too dry to learn"
                  </div>
                </div>
              </td>
              <td style={{ width: "50%", paddingLeft: 8, verticalAlign: "top" }}>
                <div style={{
                  background: "#FFFFFF", border: `2px solid ${B.teal}`,
                  borderRadius: 12, padding: "16px 14px",
                }}>
                  <div style={{
                    fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase",
                    color: B.teal, fontWeight: 700, marginBottom: 6,
                  }}>
                    BKC Signal
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: B.ink, lineHeight: 1.3 }}>
                    "Just right" sensation
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Interoception explainer */}
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: "0 0 14px", fontFamily: F.main,
        }}>
          Interoception — the eighth sensory system — is how your brain knows when you're hungry, thirsty, or need the bathroom. For children with sensory processing differences, this signal is delayed, weakened, or absent. Research confirms this is a real, measurable neurological difference.
        </p>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: 0, fontFamily: F.main,
        }}>
          The Body-Signal Learning Layer creates that feedback — a gentle sensation that lasts 30-60 seconds after every accident. Enough time for the brain to register: <em>something happened</em>.
        </p>
      </div>

      {hr}

      {/* ══════ SIGNAL BRIDGE ILLUSTRATION ══════ */}
      <div style={{ background: "#FFFFFF", padding: "16px 24px" }}>
        <ImgFrame
          height={200}
          label="SIGNAL BRIDGE ILLUSTRATION"
          sublabel="Child → Bridge → Brain · Amber to green gradient · Minimal vector illustration in brand line style"
          radius={12}
        />
      </div>

      {hr}

      {/* ══════ THREE-FAMILY TESTIMONIALS ══════ */}
      <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
        <h2 style={{
          fontSize: 22, lineHeight: 1.3, fontWeight: 700,
          color: B.ink, margin: "0 0 20px", textAlign: "center",
          fontFamily: F.main,
        }}>
          Three different families. Three different kids. One thing in common.
        </h2>

        {/* Family 1 — Soft Coral border */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #E3DCD2",
          borderLeft: "4px solid #E8A98F", borderRadius: 16,
          padding: "20px 24px", marginBottom: 16,
        }}>
          <div style={{
            fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
            fontWeight: 700, color: B.muted, marginBottom: 10,
          }}>
            FAMILY 1
          </div>
          <p style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
            color: B.ink, margin: "0 0 10px",
          }}>
            "My son talks about the potty but won't actually do it. He says 'I need to pee' AFTER it's already happened. We'd been stuck for over a year. After about 3 weeks in these undies, he paused mid-accident. Looked down. Then walked to the potty. That pause, that had never happened before."
          </p>
          <p style={{ fontSize: 12, color: B.muted, margin: 0 }}>
            — Parent of a 4-year-old, mostly verbal, mild sensory differences
          </p>
        </div>

        {/* Family 2 — Gentle Teal border */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #E3DCD2",
          borderLeft: "4px solid #8AB9B5", borderRadius: 16,
          padding: "20px 24px", marginBottom: 16,
        }}>
          <div style={{
            fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
            fontWeight: 700, color: B.muted, marginBottom: 10,
          }}>
            FAMILY 2
          </div>
          <p style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
            color: B.ink, margin: "0 0 10px",
          }}>
            "We'd tried everything from the BCBA's protocol to OT sensory work to social stories. Scheduled sits for 2 years, he never went on his own. We didn't expect a product to solve it. But the wetness signal in these undies is different, he can actually feel it. After 6 weeks, he initiated once. Once! After 4 years of nothing."
          </p>
          <p style={{ fontSize: 12, color: B.muted, margin: 0 }}>
            — Parent of a 6-year-old, mixed verbal, moderate support needs
          </p>
        </div>

        {/* Family 3 — Pale Gold border */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #E3DCD2",
          borderLeft: "4px solid #D4B886", borderRadius: 16,
          padding: "20px 24px", marginBottom: 16,
        }}>
          <div style={{
            fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
            fontWeight: 700, color: B.muted, marginBottom: 10,
          }}>
            FAMILY 3
          </div>
          <p style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 16, fontStyle: "italic", lineHeight: 1.5,
            color: B.ink, margin: "0 0 10px",
          }}>
            "He's never shown a sign of feeling wet or dry, not once in 9 years. We'd made peace with maybe never. After 8 weeks in the body-signal underwear, he paused. He felt something. That was everything."
          </p>
          <p style={{ fontSize: 12, color: B.muted, margin: 0 }}>
            — Parent of a 9-year-old, non-verbal, high support needs
          </p>
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: 0, textAlign: "center", fontFamily: F.main,
        }}>
          If any of these sound familiar, your child's nervous system isn't broken. It's just not getting the information it needs.
        </p>
      </div>

      {hr}

      {/* ══════ PRODUCT SHOWCASE: 3-Layer System ══════ */}
      <div style={{ background: "#FFFFFF", padding: "32px 24px" }}>
        {/* Product image */}
        <div style={{ marginBottom: 20, borderRadius: 12, overflow: "hidden" }}>
          <img
            src="/root/projects/brightkidco/raw/product-photos/flat-lay/training-pant-fox-woodland-white.jpg"
            alt="BrightKidCo body-signal training pants in fox woodland white pattern"
            style={{ width: "100%", height: 400, objectFit: "cover", display: "block", background: "#E3DCD2" }}
          />
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: "0 0 20px", fontFamily: F.main,
        }}>
          The BrightKidCo Body-Signal Learning Layer is a 3-layer system built for sensory-sensitive children:
        </p>

        {/* Layer 1 — Cotton Inner */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3D3D3D", margin: 0, fontFamily: F.main }}>
            <span style={{ color: "#C8D5C0", fontWeight: 700, marginRight: 6 }}>◆</span>
            <strong>Layer 1 (Cotton Inner):</strong> 100% cotton, the fabric research consistently shows autistic individuals prefer (Kyriacou et al. 2023). Creates a gentle, noticeable "uh-oh" sensation that lasts 30-60 seconds, sustained enough for a slow to pick up signals brain to register.
          </p>
        </div>

        {/* Layer 2 — Smart Absorption */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3D3D3D", margin: 0, fontFamily: F.main }}>
            <span style={{ color: "#C8D5C0", fontWeight: 700, marginRight: 6 }}>◆</span>
            <strong>Layer 2 (Smart Absorption):</strong> Protects furniture and floors without wicking the signal away completely. Unlike pull-ups that keep kids "too dry to learn," this layer gives the brain feedback.
          </p>
        </div>

        {/* Layer 3 — Outer Barrier */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3D3D3D", margin: 0, fontFamily: F.main }}>
            <span style={{ color: "#C8D5C0", fontWeight: 700, marginRight: 6 }}>◆</span>
            <strong>Layer 3 (Outer Barrier):</strong> Leak-resistant outer layer so parents can actually leave the house while the body-signal learning happens.
          </p>
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3D3D3D", margin: "0 0 14px", fontFamily: F.main }}>
          PFAS-free. BPA-free. Designed alongside OT practitioners who understand sensory processing.
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3D3D3D", margin: 0, fontFamily: F.main }}>
          <strong>For reference:</strong> some kids show first signs in 2 weeks. Others need 8 weeks. Both normal. The key is repetition, 30-60 seconds of sensation after every accident, building neural pathways over time.
        </p>
      </div>

      {hr}

      {/* ══════ GUARANTEE: 60-Day Seal ══════ */}
      <div style={{ background: "#3D6B5E", padding: "40px 24px" }}>
        <h2 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: 22, fontWeight: 700, color: "#FFFFFF",
          textAlign: "center", margin: "0 0 16px", lineHeight: 1.3,
        }}>
          60 days to try it. By your judgment.
        </h2>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.9)",
          textAlign: "center", margin: "0 0 12px", fontFamily: F.main,
        }}>
          If your child shows any sign of awareness, a pause, a look, a step toward the bathroom, you'll know the signal is working. If nothing changes, full refund. No questions.
        </p>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.9)",
          textAlign: "center", margin: 0, fontFamily: F.main,
        }}>
          Thisn't a promise that every child will train. It's a promise that you get to decide whether it works for your family.
        </p>
      </div>

      {hr}

      {/* ══════ CTA: Product CTA ══════ */}
      <div style={{ background: "#FFFFFF", padding: "30px 24px", textAlign: "center" }}>
        {/* Primary CTA — Bundle */}
        <a href="https://www.brightkidco.com/collections/all-products" style={{
          display: "inline-block", padding: "0 32px",
          background: B.teal, color: "#FFFFFF",
          fontSize: 16, fontWeight: 700, letterSpacing: 0.5,
          textDecoration: "none", borderRadius: 8,
          height: 48, lineHeight: "48px",
          fontFamily: F.main,
        }}>
          Start with the 3+3 Bundle
        </a>

        <p style={{ fontSize: 14, color: B.ink, margin: "14px 0", fontFamily: F.main }}>
          $79.99 — 6 pairs, free shipping, 60-day guarantee
        </p>

        {/* Secondary CTA — Single pair */}
        <a href="https://www.brightkidco.com/collections/all-products" style={{
          display: "inline-block", padding: "10px 24px",
          background: "transparent", border: `1px solid ${B.teal}`,
          color: B.teal, fontSize: 14,
          textDecoration: "none", borderRadius: 8,
          fontFamily: F.main,
        }}>
          1 Pair ($34.99) — try alongside your current routine
        </a>

        <p style={{
          fontSize: 13, color: B.soft, margin: "12px 0 0",
          fontFamily: F.main, fontStyle: "italic",
        }}>
          $13.33 per pair with the bundle — less than half the single-pair price.
        </p>

        {/* Trust signals */}
        <div style={{ marginTop: 20, fontSize: 12, color: B.muted, fontFamily: F.main }}>
          ✓ Free shipping &nbsp;&nbsp; ✓ 60-day returns &nbsp;&nbsp; ✓ Secure checkout
        </div>
      </div>

      {hr}

      {/* ══════ NEXT TEASER ══════ */}
      <div style={{ background: "#FFFFFF", padding: "16px 24px", textAlign: "center" }}>
        <p style={{
          fontSize: 14, fontStyle: "italic", color: B.muted,
          margin: 0, fontFamily: F.main,
        }}>
          <strong>Next time:</strong> Real stories from parents who've been exactly where you are.
        </p>
      </div>

      {/* ══════ LENA SIGN-OFF (MEDIUM variant) ══════ */}
      <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
        <p style={{
          fontSize: 16, lineHeight: 1.6, color: "#3D3D3D",
          margin: "0 0 12px", fontFamily: F.main,
        }}>
          With understanding,
        </p>
        <p style={{
          fontFamily: "'Fraunces', serif", fontSize: 16, fontStyle: "italic",
          color: B.ink, margin: "0 0 4px",
        }}>
          Lena ——
        </p>
        <p style={{ fontSize: 14, color: B.muted, margin: "0 0 16px", fontFamily: F.main }}>
          Customer Support · Mom of two autistic sons
        </p>
        <p style={{
          fontSize: 14, lineHeight: 1.6, color: B.soft,
          margin: 0, fontFamily: F.main,
        }}>
          P.S. I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, that's normal here. Reply if anything resonated. I read every one.
        </p>
      </div>

      {/* ══════ OUTLINE ══════ */}
      <OutLine />

      {/* ══════ FOOTER ══════ */}
      <div style={{ background: "#FBF7F1", padding: "24px 24px 16px", textAlign: "center" }}>
        <p style={{ fontSize: 12, lineHeight: 1.3, color: B.muted, margin: "0 0 8px", fontFamily: F.main }}>
          Lena from BrightKidCo
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.3, color: B.muted, margin: "0 0 12px", fontFamily: F.main }}>
          BrightKidCo, 123 Main Street, Suite 100, San Francisco, CA 94102
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.3, color: B.muted, margin: "0 0 6px", fontFamily: F.main }}>
          <a href="{{unsubscribe_url}}" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a> — one click
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.3, color: B.muted, margin: "0 0 6px", fontFamily: F.main }}>
          <a href="{{manage_preferences_url}}" style={{ color: B.ink, textDecoration: "underline" }}>Update your preferences</a>
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.3, color: B.muted, margin: "0 0 6px", fontFamily: F.main }}>
          Reply to this email — Lena reads every response personally
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.3, color: B.muted, margin: 0, fontFamily: F.main }}>
          Questions? Hit reply, you'll get me, not a bot. I read everything.
        </p>
      </div>

      {/* ══════ EASTER EGG: Three Doors fallback ══════ */}
      <div style={{ background: "#FAF8F5", padding: "8px 24px 16px", textAlign: "center" }}>
        <p style={{ fontSize: 11, color: B.muted, margin: 0, fontFamily: F.main, fontStyle: "italic" }}>
          PS, however you got here, this approach works for all three.
        </p>
      </div>

    </EmailShell>
  );
};

Object.assign(window, { Email_Welcome_E4_GF });
