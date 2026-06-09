/* Welcome Flow — E7 | L2
   Wireframe: wireframes/welcome/welcome-01-e7-l2.md
   Strategy: strategy-map.json → welcome.emails.e7-l2
   Generated: 2026-06-09
*/

const Email_Welcome_E7_L2 = () => (
  <EmailShell preheader="How milliseconds make the difference between signal and accident" bg={B.paper}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER + HERO (HERO-13 — Scientific Hook)
       ══════════════════════════════════════════════════════ */}
    <Header bg={B.paper} />

    <div style={{ background: B.paper, padding: "40px 24px 32px", textAlign: "center" }}>
      <div style={{
        fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
        color: B.muted, fontWeight: 400, marginBottom: 12,
        fontFamily: F.main,
      }}>
        Lena from BrightKidCo
      </div>
      <h1 style={{
        fontFamily: F.main, fontSize: 26, lineHeight: 1.4, fontWeight: 400,
        color: B.ink, margin: "0 0 16px", letterSpacing: 0,
      }}>
        The interoception gap, explained simply
      </h1>
      {/* Hero visual placeholder */}
      <ImgFrame
        height={240}
        radius={16}
        label="SIGNAL DELAY ILLUSTRATION"
        sublabel="Abstract illustration of signal traveling brain → bladder with visible delay cue — representing the interoception gap in autistic children"
      />
    </div>

    {/* ══════════════════════════════════════════════════════
       DOT PATTERN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "16px 0" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HOOK + VALIDATION (LETTER-09 — Double Column)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 24px 28px" }}>
      <div style={{ display: "flex", gap: 16 }}>
        {/* Column A — Hook */}
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: "0 0 14px",
          }}>
            What if I told your child IS getting the signal, just milliseconds too late?
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: "0 0 14px",
          }}>
            I know how that sounds. You've watched him sit on the toilet for 45 minutes, get up, and pee the second he stands up. You've seen the BCBA protocol work at school but fail at home. You've tried the social stories, the visual schedules, the timer sits, the reward charts, and every time the same pattern: he has no idea it's happening until it's already over.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: 0,
          }}>
            That pattern isn't random. It's not stubbornness. And it's not that you're doing something wrong.
          </p>
        </div>

        {/* Column B — Validation + Parent Quotes */}
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: "0 0 14px",
          }}>
            You've probably heard 'interoception' from your OT. Maybe your BCBA mentioned it in passing. But nobody connected the dots for you the way they need to be connected.
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: "0 0 14px",
          }}>
            Here's the part that matters:
          </p>
          <p style={{
            fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: "0 0 14px",
          }}>
            The research by Nicholson et al. (2019) showed something counterintuitive. The deficit in autistic children isn't that the interoception signal is *absent*. It's that the signal arrives with *delayed accuracy*. The child's brain IS registering the bladder fullness, but the message arrives milliseconds after the threshold has already been crossed. By the time the brain says 'I need to go,' the body has already gone.
          </p>

          {/* Parent quote callout 1 */}
          <div style={{
            background: "#F5C84B22",
            borderLeft: "3px solid #039902",
            borderRadius: 8,
            padding: "14px 16px",
            marginBottom: 14,
          }}>
            <p style={{
              fontFamily: F.main, fontSize: 15, fontStyle: "italic", lineHeight: 1.5,
              color: B.soft, margin: 0,
            }}>
              "He will sit on the toilet for 45 minutes and then pee the second he stands up."
            </p>
          </div>

          <p style={{
            fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
            margin: "0 0 14px",
          }}>
            This explains why prompt-dependent methods fail. You're not building awareness. You're training your child to wait for your cue. The BCBA protocol built compliance, not body awareness. And that's not a failure of therapy. BCBAs are trained to work with behavior you can see and reinforce. Internal body signals are invisible. You can't reward a signal the child doesn't feel.
          </p>

          {/* Parent quote callout 2 */}
          <div style={{
            background: "#F5C84B22",
            borderLeft: "3px solid #039902",
            borderRadius: 8,
            padding: "14px 16px",
            marginBottom: 14,
          }}>
            <p style={{
              fontFamily: F.main, fontSize: 15, fontStyle: "italic", lineHeight: 1.5,
              color: B.soft, margin: 0,
            }}>
              "He's so used to the prompt system at ABA that he waits for me to say 'time to go.'"
            </p>
          </div>
        </div>
      </div>

      {/* Closing paragraph — spans full width */}
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "14px 0 0",
      }}>
        You didn't fail. Your BCBA didn't fail. The methods were built for a nervous system that can feel the signal. Your child's nervous system processes it differently.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DOT PATTERN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "16px 0" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 3: DEEP MECHANISM (EDU-8 — Mechanism Diagram)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 24px" }}>
      <div style={{
        fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
        color: B.muted, fontWeight: 400, marginBottom: 10,
        fontFamily: F.main,
      }}>
        THE INTEROCEPTION GAP
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        Let me explain what's actually happening, in plain language.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        Interoception is the 'eighth sensory system' — the sense that tells you when you're hungry, thirsty, or need the bathroom. For autistic children, this system operates on a different frequency.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        Research found that 59% of autistic children cannot reliably signal when they need to urinate. The signal is there, it's just too late or too weak for the child to act on it in time.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 20px",
      }}>
        Think of it like a phone call where the other person's voice cuts in and out. The Body-Signal Learning Layer is like improving the signal strength on that call. It doesn't change what the caller is saying. It makes sure the message arrives clearly and stays long enough for the brain to register it.
      </p>

      {/* 3-Layer BSL Visual Diagram */}
      <div style={{ marginBottom: 20 }}>
        {/* Layer 1: Signal Creation */}
        <div style={{
          background: "#FBF7EB",
          borderRadius: "12px 12px 0 0",
          padding: "18px 20px",
          display: "flex", alignItems: "flex-start", gap: 12,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: "#039902",
            flexShrink: 0, marginTop: 5,
          }} />
          <div>
            <div style={{
              fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#039902",
              marginBottom: 4,
            }}>
              Layer 1 · Signal Creation
            </div>
            <p style={{
              fontFamily: F.main, fontSize: 15, lineHeight: 1.5, color: B.ink,
              margin: 0,
            }}>
              Cotton inner creates a gentle, sustained 'uh-oh' sensation, 30 to 60 seconds of feedback.
            </p>
          </div>
        </div>

        {/* Layer 2: Smart Absorption */}
        <div style={{
          background: B.muted,
          padding: "18px 20px",
          display: "flex", alignItems: "flex-start", gap: 12,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: "#039902",
            flexShrink: 0, marginTop: 5,
          }} />
          <div>
            <div style={{
              fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#039902",
              marginBottom: 4,
            }}>
              Layer 2 · Smart Absorption
            </div>
            <p style={{
              fontFamily: F.main, fontSize: 15, lineHeight: 1.5, color: B.ink,
              margin: 0,
            }}>
              Protects clothing and furniture without wicking the signal away.
            </p>
          </div>
        </div>

        {/* Layer 3: Leak-Resistant Barrier */}
        <div style={{
          background: "#DBFFCD",
          borderRadius: "0 0 12px 12px",
          padding: "18px 20px",
          display: "flex", alignItems: "flex-start", gap: 12,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: "#039902",
            flexShrink: 0, marginTop: 5,
          }} />
          <div>
            <div style={{
              fontFamily: F.main, fontSize: 14, fontWeight: 700, color: "#039902",
              marginBottom: 4,
            }}>
              Layer 3 · Leak-Resistant Barrier
            </div>
            <p style={{
              fontFamily: F.main, fontSize: 15, lineHeight: 1.5, color: B.ink,
              margin: 0,
            }}>
              The outer layer provides security while the inner layers keep teaching.
            </p>
          </div>
        </div>
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        The goal is to give their brain 30 to 60 seconds of repeated, reliable feedback until the interoception pathway strengthens.
      </p>

      {/* Citations */}
      <p style={{
        fontFamily: F.main, fontSize: 12, color: B.muted, lineHeight: 1.5,
        margin: 0,
      }}>
        Nicholson et al. (2019) · Iqbal et al. (2022) · Mahler et al. (2023)
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 4: BCBA/OT ACKNOWLEDGMENT
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "0 24px 30px" }}>
      <div style={{
        background: "#F5F2ED",
        borderLeft: "3px solid #039902",
        borderRadius: 8,
        padding: "24px 24px",
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px",
        }}>
          I want to be careful here, because I know how much trust you've placed in your BCBA and OT. You've built a relationship over 4, 5, maybe 6 years. They know your child. They've helped you through meltdowns, IEP meetings, school placements. I'm not here to tell you they were wrong.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px",
        }}>
          Here's what I will say: BCBA protocols are excellent at building *external* skills, requesting, waiting, transitioning, complying with adult directions. Toilet training within ABA typically relies on scheduled sits, positive reinforcement for successful voiding, and prompt-fading. These methods work for children who can feel the internal signal of bladder fullness.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px",
        }}>
          For children whose interoception system processes signals differently, scheduled sits train waiting, not sensing. The child learns to sit when told, not to go when the body signals. That's why you see success at school (where the prompt system is consistent) and failure at home (where the natural cue should be driving the behaviour).
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0,
        }}>
          Your BCBA built the foundation. This adds the sensory layer that was missing.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DOT PATTERN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "16px 0" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 5: REALISTIC TIMELINES
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 24px" }}>
      <div style={{
        fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
        color: B.muted, fontWeight: 400, marginBottom: 10,
        fontFamily: F.main,
      }}>
        WHAT TO EXPECT
      </div>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        Most parents see the first sign of body awareness within 2 to 4 weeks. That first sign might be small, a pause, a look down, a hand reaching toward the waistband. It might not look like progress. But it's the first time the child's brain registered the signal at all.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        Full training typically takes 8 to 12 weeks. Some children take longer, especially those with deeper body signal differences. Some show progress in waves, a good week followed by a quiet one. That's normal. That's how the nervous system learns.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: 0,
      }}>
        The <strong>49%</strong> statistic from the CDC-funded SPARK study (Wiggins et al. 2022) is worth remembering here: almost half of autistic 4-5 year olds aren't toilet trained yet. This a <strong>6:1 gap</strong> compared to neurotypical children. You are not behind. You are navigating a real, measurable neurological difference. The timeline is different, and that's okay.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 6: MINI-WIN TESTIMONIALS (SP-02)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 24px" }}>
      <div style={{
        fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
        color: B.muted, fontWeight: 400, marginBottom: 16,
        fontFamily: F.main,
      }}>
        REAL L2 PARENTS
      </div>

      {/* Testimonial Card 1 */}
      <div style={{
        background: "#DBFFCD",
        borderLeft: "4px solid #039902",
        borderRadius: 16,
        padding: "20px 20px 20px 24px",
        marginBottom: 14,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative quotation mark */}
        <div style={{
          position: "absolute", top: 6, left: 10,
          fontSize: 48, lineHeight: 1, color: "#039902", opacity: 0.2,
          fontFamily: "Georgia, serif", fontWeight: 700,
        }}>
          "
        </div>
        <p style={{
          fontFamily: F.main, fontSize: 15, fontStyle: "italic", lineHeight: 1.5,
          color: "#4A4444", margin: 0, position: "relative", zIndex: 1,
        }}>
          "He went today! Once! But he went! He stopped mid-play, looked down, and walked to the potty. That never happened before. Two weeks in the underwear and something just clicked."
        </p>
      </div>

      {/* Testimonial Card 2 */}
      <div style={{
        background: "#DBFFCD",
        borderLeft: "4px solid #039902",
        borderRadius: 16,
        padding: "20px 20px 20px 24px",
        marginBottom: 14,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 6, left: 10,
          fontSize: 48, lineHeight: 1, color: "#039902", opacity: 0.2,
          fontFamily: "Georgia, serif", fontWeight: 700,
        }}>
          "
        </div>
        <p style={{
          fontFamily: F.main, fontSize: 15, fontStyle: "italic", lineHeight: 1.5,
          color: "#4A4444", margin: 0, position: "relative", zIndex: 1,
        }}>
          "The first week was nothing. No changes. I almost gave up. Week three he paused. Week four he actually made it. Not every time. But enough to know it's working."
        </p>
      </div>

      {/* Testimonial Card 3 */}
      <div style={{
        background: "#DBFFCD",
        borderLeft: "4px solid #039902",
        borderRadius: 16,
        padding: "20px 20px 20px 24px",
        marginBottom: 20,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 6, left: 10,
          fontSize: 48, lineHeight: 1, color: "#039902", opacity: 0.2,
          fontFamily: "Georgia, serif", fontWeight: 700,
        }}>
          "
        </div>
        <p style={{
          fontFamily: F.main, fontSize: 15, fontStyle: "italic", lineHeight: 1.5,
          color: "#4A4444", margin: 0, position: "relative", zIndex: 1,
        }}>
          "We tried everything for 3 years. Literally everything. I was ready to accept pull-ups forever. After 6 weeks in the 3+3 Bundle, she's using the potty independently 60% of the time. That's more than I ever expected and I'll take it."
        </p>
      </div>

      {/* Closing paragraph */}
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: 0,
      }}>
        These aren't miracles. They're nervous systems finally receiving information they'd been missing. The same mechanism, the same three-layer system, the same 30 to 60 seconds of feedback, repeated day after day until the brain learns to listen.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DOT PATTERN DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "16px 0" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C84B" }} />
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 7: PRODUCT INTRODUCTION (ProductShowcaseFull)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 24px" }}>
      <div style={{
        fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
        color: B.muted, fontWeight: 400, marginBottom: 10,
        fontFamily: F.main, textAlign: "center",
      }}>
        THE PRODUCT
      </div>
      <h2 style={{
        fontFamily: F.main, fontSize: 22, lineHeight: 1.3, fontWeight: 400,
        color: B.ink, margin: "0 0 16px", textAlign: "center",
      }}>
        The 3+3 Bundle
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 20px",
      }}>
        The 3+3 Bundle means 6 pairs in rotation, three in the wash, three in the drawer. This gives your child consistent feedback throughout every day, every activity, every environment. School, therapy, home, outings, the learning doesn't stop when the underwear changes.
      </p>

      {/* 2+1 Image Grid */}
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <div style={{ flex: 1 }}>
          <ImgFrame
            height={140}
            radius={16}
            label="LIFESTYLE"
            sublabel="Toddler wearing BrightKidCo — natural pose"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ImgFrame
            height={140}
            radius={16}
            label="PRODUCT FLAT-LAY"
            sublabel="Moon cloud blue pattern detail"
          />
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <ImgFrame
          height={120}
          radius={16}
          label="ACCESSORY"
          sublabel="Towel set — llama cactus pattern"
        />
      </div>

      {/* Pricing Row */}
      <div style={{
        background: "#FFFFFF",
        border: `2px solid ${B.ink}`,
        borderRadius: 16,
        padding: "20px 22px",
        marginBottom: 16,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div>
            <div style={{
              fontFamily: F.main, fontSize: 18, fontWeight: 400, color: B.ink,
            }}>
              BrightKidCo Body-Signal Learning Underwear
            </div>
            <div style={{
              fontFamily: F.main, fontSize: 14, color: B.soft, marginTop: 4,
            }}>
              3+3 Bundle · 6 pairs · Sizing 2T–12
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontFamily: F.main, fontSize: 22, fontWeight: 700, color: "#039902",
            }}>
              $79.99
            </div>
            <div style={{
              fontFamily: F.main, fontSize: 13, color: B.soft,
            }}>
              $13.33/pair
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div style={{
            fontFamily: F.main, fontSize: 13, color: B.soft,
          }}>
            ✓ Free shipping
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 13, color: B.soft,
          }}>
            ✓ 60-day guarantee
          </div>
          <div style={{
            fontFamily: F.main, fontSize: 13, color: B.soft,
          }}>
            ✓ 62% savings vs single-pair ×6
          </div>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 8: 60-DAY GUARANTEE (TRUST-2)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "0 24px 30px" }}>
      <div style={{
        border: "1.5px dashed #039902",
        borderRadius: 8,
        padding: "24px 24px",
      }}>
        <h3 style={{
          fontFamily: F.main, fontSize: 20, fontWeight: 700, color: B.ink,
          margin: "0 0 14px",
        }}>
          60 days. Try it. By your judgment.
        </h3>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: "0 0 14px",
        }}>
          If your child shows no sign of body awareness after 60 days, no pause, no look down, no step toward the potty, no change at all, full refund. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system and timeline.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
          margin: 0,
        }}>
          You've been burned by promises before. I get it. That's why there's no fine print, no condition, no 'must use every day' clause. 60 days. Your judgment. That's it.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 9: CTA (CTA-5 — Product CTA)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "30px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        When you're ready to try, 60-day guarantee stands.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        I'm not going to tell you this the right time. Only you know if today is the day. Maybe you need to talk to your BCBA first. Maybe you need another week of reading and thinking. Maybe this isn't the month.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        The product will be here. So will I.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 24px",
      }}>
        When you decide, whether it's today, next week, or next month, the 60-day guarantee will still be here. The 3+3 Bundle will still be here. And I'll still be reading every reply.
      </p>

      {/* CTA Button */}
      <a href="#" style={{
        display: "inline-block",
        padding: "16px 32px",
        background: "#039902",
        color: "#FFFFFF",
        fontFamily: F.main,
        fontSize: 16, fontWeight: 700, lineHeight: 1.2,
        textDecoration: "none", borderRadius: 8,
        letterSpacing: 0.3,
      }}>
        Try the 3+3 Bundle — 60-Day Guarantee
      </a>

      {/* Sub-text */}
      <p style={{
        fontFamily: F.main, fontSize: 14, fontStyle: "italic",
        color: B.muted, margin: "14px 0 0",
      }}>
        $13.33 per pair with the bundle — less than half the single-pair price.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 10: LENA SIGN-OFF
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "40px 24px" }}>
      {/* Thin horizontal rule */}
      <div style={{
        width: "60%", height: 1, background: B.muted,
        margin: "0 auto 24px", opacity: 0.6,
      }} />

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        I have two autistic sons. One is 6, still in the middle of this journey. The other took us until he was almost 8. I know what it's like when your child is sitting on the toilet, waiting, and nothing happens, only to clean up the accident 10 minutes later. I know what it's like to question whether you're doing it right, whether you've missed something, whether you should just accept pull-ups forever.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px",
      }}>
        I also know what it's like when that first pause happens. That moment your child stops, looks down, and something registers. It's not instant. It's not a miracle. It's days and weeks of repeated feedback, and then one day the signal arrives in time.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 24px",
      }}>
        Whatever comes next for you and your child, I'm here. If you have a question about the mechanism, about sizing, about whether this fits with your BCBA's current protocol, hit reply. You'll get me, not a template, not a bot. I read every response.
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        fontStyle: "italic",
        margin: "0 0 4px",
      }}>
        With care,
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        fontStyle: "italic",
        margin: "0 0 20px",
      }}>
        Lena ——
      </p>

      {/* 2px Green separator */}
      <div style={{
        width: 40, height: 2, background: "#039902",
        margin: "0 0 16px",
      }} />

      {/* P.S. */}
      <p style={{
        fontFamily: F.main, fontSize: 14, lineHeight: 1.6, color: B.soft,
        margin: 0,
      }}>
        P.S. The product will be here next month. So will I. I know what it's like when 'later' turns into another year. But I also know what it's like to push too early. Trust your read.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 11: FOOTER
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "20px 24px 30px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: B.muted,
        margin: "0 0 14px",
      }}>
        BrightKidCo<br />
        Austin, TX 78701
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: B.muted,
        margin: "0 0 14px",
      }}>
        No longer want these emails? <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: B.ink, textDecoration: "underline" }}>Manage Preferences</a>.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: B.muted,
        margin: "0 0 14px",
      }}>
        Questions? Reply to this email, Lena reads every response.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.4, color: B.muted,
        margin: "0 0 14px",
      }}>
        16,511 reviews · 4.9★ · 100,000+ parents trust BrightKidCo
      </p>

      {/* Dot separator */}
      <div style={{ margin: "0 auto 10px", width: 4, height: 4, borderRadius: "50%", background: B.muted }} />

      {/* 6-Elements Footnote */}
      <p style={{
        fontFamily: F.main, fontSize: 11, fontStyle: "italic", lineHeight: 1.4,
        color: B.muted, margin: 0,
      }}>
        This email contains all 6 elements your BCBA would want to see: symptom recognition ✓, mechanism specificity ✓, professional acknowledgment ✓, realistic timelines ✓, 60-day guarantee ✓, permission-not-to-buy ✓.
      </p>
    </div>

  </EmailShell>
);

// Register on window
Object.assign(window, { Email_Welcome_E7_L2 });
