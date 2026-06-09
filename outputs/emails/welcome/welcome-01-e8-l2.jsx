/* Welcome Flow — E8 (Day 21) | Level 2 — Lisa
   Wireframe: wireframes/welcome/welcome-01-e8-l2.md
   Strategy: strategy-map.json → welcome.emails.e8-l2
   Generated: 2026-06-09
*/

const Email_welcome_01_e8_l2 = () => (
  <EmailShell preheader="Whatever you decide, the 60-day guarantee still stands." bg="#FBF7F1">

    {/* ════════════════ SECTION 1: HEADER ════════════════ */}
    <Header bg="#FBF7F1" />

    {/* ════════════════ SECTION 2: HERO IMAGE ════════════════ */}
    <div style={{ position: "relative", width: "100%", height: 300, overflow: "hidden" }}>
      <img
        src="../../raw/product-photos/lifestyle/toddler-backpack-moon-cloud-blue.png"
        alt="Toddler with moon and cloud pattern backpack, wearing BrightKidCo training pants"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* Warm gradient overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(0deg, rgba(31,45,47,0.7) 0%, rgba(31,45,47,0.3) 40%, transparent 100%)",
        padding: "40px 22px 24px",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 22, fontWeight: 400, lineHeight: 1.4,
          color: "#FFFFFF", margin: 0, letterSpacing: 0.2,
        }}>
          This my last email (for now)
        </p>
      </div>
    </div>

    {/* ════════════════ SECTION 3: HOOK — PERSONAL LETTER ════════════════ */}
    <div style={{ padding: "32px 22px 28px", background: "#FBF7F1" }}>
      <p style={{
        fontFamily: F.main, fontSize: 20, fontWeight: 400, lineHeight: 1.4,
        color: "#1F2D2F", margin: "0 0 20px", fontStyle: "italic",
        letterSpacing: 0.3,
      }}>
        I have two autistic sons. One trained at 6. The other took us until he was almost 8.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.7,
        color: "#1F2D2F", margin: 0,
      }}>
        I know what you're going through. Not because I read about it in a research paper. Because I've lived it, the morning carpet cleanups, the "I don't know, I didn't feel it," the quiet dread of another year in pull-ups.
      </p>
    </div>

    {/* ── dot pattern divider ── */}
    <div style={{ padding: "0 22px" }}>
      <div style={{ borderTop: "1px dotted #8A9B9D" }} />
    </div>

    {/* ════════════════ SECTION 4: SIX-CHECK RECAP ════════════════ */}
    <div style={{ padding: "32px 22px 8px", background: "#FBF7F1" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.6,
        color: "#4A6568", margin: "0 0 20px",
      }}>
        Over the last three weeks, I've walked through every element I know matters for L2 parents like you:
      </p>

      {/* Check item 1 */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4, background: "#5DD07A",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginTop: 2,
        }}>
          <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>✓</span>
        </div>
        <div>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F" }}>
            Real symptom recognition
          </span>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568" }}>
            {" "}— You've named the failed methods: BCBA protocols, OT sensory work, social stories, scheduled sits, sticker charts, timer prompts. You didn't fail at those. They were built for a different nervous system.
          </span>
        </div>
      </div>

      {/* Check item 2 */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4, background: "#5DD07A",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginTop: 2,
        }}>
          <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>✓</span>
        </div>
        <div>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F" }}>
            Mechanism specificity
          </span>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568" }}>
            {" "}— The interoception gap is real. Nicholson et al. (2019) proved it: autistic children show diminished body awareness, the ability to sense internal body states like bladder fullness. It's not training. It's neurology.
          </span>
        </div>
      </div>

      {/* Check item 3 */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4, background: "#5DD07A",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginTop: 2,
        }}>
          <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>✓</span>
        </div>
        <div>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F" }}>
            BCBA context
          </span>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568" }}>
            {" "}— Your BCBA built a behavioral foundation. That work matters. Prompt-dependent doesn't mean "not learning." It means your child learned to wait for the adult cue instead of feeling the internal signal. The behavioral layer is solid. What's missing is the sensory layer.
          </span>
        </div>
      </div>

      {/* Check item 4 */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4, background: "#5DD07A",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginTop: 2,
        }}>
          <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>✓</span>
        </div>
        <div>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F" }}>
            Realistic timelines
          </span>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568" }}>
            {" "}— 4-8 weeks for first consistent signals. Some longer. Some shorter. The 60-day guarantee covers the full learning window, not because we're generous, but because that's how neurology works.
          </span>
        </div>
      </div>

      {/* Check item 5 */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4, background: "#5DD07A",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginTop: 2,
        }}>
          <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>✓</span>
        </div>
        <div>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F" }}>
            60-day guarantee
          </span>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568" }}>
            {" "}— Not a sales tactic. The only honest thing to offer when the outcome depends on your child's nervous system. Try it. By your judgment. If nothing shifts, full refund.
          </span>
        </div>
      </div>

      {/* Check item 6 */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 0 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4, background: "#5DD07A",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginTop: 2,
        }}>
          <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>✓</span>
        </div>
        <div>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#1F2D2F" }}>
            Permission-not-to-buy
          </span>
          <span style={{ fontFamily: F.main, fontSize: 15, fontWeight: 400, color: "#4A6568" }}>
            {" "}— If thisn't the day, that's okay. The product will be here next month. So will I.
          </span>
        </div>
      </div>
    </div>

    {/* ── dot pattern divider ── */}
    <div style={{ padding: "24px 22px" }}>
      <div style={{ borderTop: "1px dotted #8A9B9D" }} />
    </div>

    {/* ════════════════ SECTION 5: MECHANISM REMINDER (EDU-14) ════════════════ */}
    <div style={{ padding: "0 22px 32px" }}>
      <div style={{
        background: "#FFFFFF",
        border: "2px solid #1F2D2F",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "8px 8px 0 #1F2D2F",
        maxWidth: 420,
        margin: "0 auto",
      }}>
        {/* Product image row */}
        <div style={{ display: "flex", borderBottom: "2px solid #1F2D2F" }}>
          <div style={{ flex: 1, background: "#FFFDF6", padding: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="../../raw/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg"
              alt="BrightKidCo pocket diaper in moon and cloud blue pattern, flat-lay product photo"
              style={{ width: 140, height: 140, objectFit: "contain", borderRadius: 8 }}
            />
          </div>
          <div style={{ flex: 1, padding: "16px 18px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 10, letterSpacing: 1.3, textTransform: "uppercase", color: "#2BAEB4", fontWeight: 700, marginBottom: 6 }}>
              Quick Reference
            </div>
            <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "#1F2D2F" }}>
              BrightKidCo's body-signal underwear works differently:
            </div>
          </div>
        </div>

        {/* 3-layer diagram */}
        <div style={{ padding: "18px 22px" }}>
          {/* Layer 1 */}
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%", background: "#2BAEB4",
              color: "#FFFFFF", fontSize: 13, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>1</div>
            <div>
              <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F", marginBottom: 2 }}>
                Soft cotton inner
              </div>
              <div style={{ fontFamily: F.main, fontSize: 13, lineHeight: 1.5, color: "#4A6568" }}>
                Creates a gentle "uh-oh" sensation after every accident. Just enough signal for the brain to register: something happened.
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center", color: "#8A9B9D", fontSize: 16, margin: "0 0 14px", paddingLeft: 14 }}>↓</div>

          {/* Layer 2 */}
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%", background: "#2BAEB4",
              color: "#FFFFFF", fontSize: 13, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>2</div>
            <div>
              <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F", marginBottom: 2 }}>
                Smart absorption core
              </div>
              <div style={{ fontFamily: F.main, fontSize: 13, lineHeight: 1.5, color: "#4A6568" }}>
                Protects without blocking awareness.
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center", color: "#8A9B9D", fontSize: 16, margin: "0 0 14px", paddingLeft: 14 }}>↓</div>

          {/* Layer 3 */}
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%", background: "#2BAEB4",
              color: "#FFFFFF", fontSize: 13, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>3</div>
            <div>
              <div style={{ fontFamily: F.main, fontSize: 14, fontWeight: 400, color: "#1F2D2F", marginBottom: 2 }}>
                Leak-resistant outer barrier
              </div>
              <div style={{ fontFamily: F.main, fontSize: 13, lineHeight: 1.5, color: "#4A6568" }}>
                Contains accidents without creating "diaper mode."
              </div>
            </div>
          </div>

          {/* Mechanism chain */}
          <div style={{
            background: "#FBF7F1", borderRadius: 8, padding: "14px 16px",
            fontFamily: F.main, fontSize: 13, lineHeight: 1.6, color: "#4A6568",
            fontStyle: "italic",
          }}>
            Child pees → feels the gentle sensation → brain connects "I peed" → "I feel it" → "I should use the potty." Over time, awareness builds.
          </div>
        </div>
      </div>
    </div>

    {/* ── dot pattern divider ── */}
    <div style={{ padding: "0 22px" }}>
      <div style={{ borderTop: "1px dotted #8A9B9D" }} />
    </div>

    {/* ════════════════ SECTION 6: SOCIAL PROOF STRIP ════════════════ */}
    <div style={{ padding: "28px 22px", background: "rgba(251,247,241,0.8)" }}>
      {/* Quote 1 */}
      <div style={{ marginBottom: 14, paddingLeft: 16, borderLeft: "3px solid #2BAEB4" }}>
        <p style={{
          fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.5,
          color: "#1F2D2F", margin: 0, fontStyle: "italic",
        }}>
          "He initiated. Once. After 4 years."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: "4px 0 0" }}>
          — L2 parent
        </p>
      </div>

      {/* Quote 2 */}
      <div style={{ marginBottom: 20, paddingLeft: 16, borderLeft: "3px solid #2BAEB4" }}>
        <p style={{
          fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.5,
          color: "#1F2D2F", margin: 0, fontStyle: "italic",
        }}>
          "If I could just get him the signal, I know the rest would follow."
        </p>
        <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: "4px 0 0" }}>
          — L2 parent
        </p>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
        <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#1F2D2F", textAlign: "center" }}>
          <span style={{ fontWeight: 700 }}>92%</span> of parents report clearer body awareness within 2 weeks.
        </div>
        <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#1F2D2F", textAlign: "center" }}>
          <span style={{ fontWeight: 700 }}>87%</span> reduced pull-up use within 1 month.
        </div>
        <div style={{ fontFamily: F.main, fontSize: 16, fontWeight: 400, color: "#1F2D2F", textAlign: "center" }}>
          <span style={{ fontWeight: 700 }}>97.6%</span> would recommend BrightKidCo to another parent.
        </div>
      </div>

      {/* Star rating + review count */}
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 6 }}>
          {[1,2,3,4,5].map((_, i) => (
            <span key={i} style={{ color: "#5DD07A", fontSize: 18 }}>★</span>
          ))}
        </div>
        <p style={{ fontFamily: F.main, fontSize: 14, color: "#4A6568", margin: 0 }}>
          16,511 reviews · 4.9★, from parents who've been where you are.
        </p>
      </div>
    </div>

    {/* ── dot pattern divider ── */}
    <div style={{ padding: "0 22px" }}>
      <div style={{ borderTop: "1px dotted #8A9B9D" }} />
    </div>

    {/* ════════════════ SECTION 7: GUARANTEE BLOCK ════════════════ */}
    <div style={{ padding: "28px 22px" }}>
      <div style={{
        background: "#FBF7F1",
        borderLeft: "2px solid #5DD07A",
        borderRadius: "0 16px 16px 0",
        padding: "20px 24px",
        boxShadow: "8px 8px 0 #1F2D2F",
      }}>
        <h3 style={{
          fontFamily: F.main, fontSize: 22, fontWeight: 400, lineHeight: 1.3,
          color: "#1F2D2F", margin: "0 0 14px",
        }}>
          60 days. Your judgment.
        </h3>
        <p style={{
          fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6,
          color: "#4A6568", margin: "0 0 12px",
        }}>
          If your child shows no sign of body awareness, no pause, no look, no step toward the potty, full refund. No forms. No hoops. No "you didn't try hard enough."
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 15, fontWeight: 400, lineHeight: 1.6,
          color: "#4A6568", margin: 0,
        }}>
          The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.
        </p>
      </div>
    </div>

    {/* ════════════════ SECTION 8: CTA ════════════════ */}
    <div style={{ padding: "24px 22px 16px", textAlign: "center" }}>
      <a href="#" style={{
        display: "inline-block",
        padding: "14px 28px",
        background: "#2BAEB4",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16,
        fontWeight: 400,
        textDecoration: "none",
        borderRadius: 6,
        boxShadow: "2px 2px 0 #1F2D2F",
        letterSpacing: 0.2,
      }}>
        When you're ready, the 3+3 Bundle is here
      </a>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        color: "#4A6568", marginTop: 16, marginBottom: 0,
      }}>
        Or start with 1 Pair, $34.99
      </p>
    </div>

    {/* ════════════════ SECTION 9: LENA SIGN-OFF (LONG) ════════════════ */}
    <div style={{ padding: "28px 22px 32px" }}>
      <div style={{
        background: "#FBF7F1",
        borderRadius: 16,
        padding: "24px 22px",
        border: "1px solid #E8E2DA",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic",
          lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px",
        }}>
          Whatever you choose, thanks for reading this far. If thisn't the day, that's okay. The product will be here next month. So will I.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic",
          lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 16px",
        }}>
          I have two autistic sons. I know what it's like when "later" turns into another year. But I also know what it's like to push too early.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic",
          lineHeight: 1.6, color: "#1F2D2F", margin: "0 0 20px",
        }}>
          Trust your read.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400, fontStyle: "italic",
          lineHeight: 1.6, color: "#1F2D2F", margin: 0,
        }}>
          With care,
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
          <p style={{
            fontFamily: F.main, fontSize: 18, fontWeight: 400, fontStyle: "italic",
            lineHeight: 1.5, color: "#1F2D2F", margin: 0,
          }}>
            Lena ——
          </p>
          {/* Two green dots Easter egg */}
          <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5DD07A" }} />
          </div>
        </div>
      </div>
    </div>

    {/* ════════════════ SECTION 10: FOOTER ════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 22px 30px", textAlign: "center" }}>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 6px" }}>
        Lena from BrightKidCo
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 14px" }}>
        support@brightkidco.com
      </p>
      <p style={{ fontFamily: F.main, fontSize: 11, color: "#8A9B9D", margin: "0 0 16px" }}>
        1234 Commerce Blvd, Suite 100, Los Angeles, CA 90001
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: "0 0 8px" }}>
        No longer want these emails? <a href="#" style={{ color: "#1F2D2F", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#1F2D2F", textDecoration: "underline" }}>Manage Preferences</a>.
      </p>
      <p style={{ fontFamily: F.main, fontSize: 12, color: "#8A9B9D", margin: 0 }}>
        Questions? Reply to this email, I read every response.
      </p>
    </div>

  </EmailShell>
);

Object.assign(window, { Email_welcome_01_e8_l2 });
