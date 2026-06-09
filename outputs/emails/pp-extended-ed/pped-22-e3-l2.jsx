/* PP-Extended Education — E3 (Day 36) | L2 Lisa
   Wireframe: wireframes/pp-extended-ed/pped-22-e3-l2.md
   Strategy: strategy-map.json → flows.pp-extended-ed.emails.e3.l2
   Generated: 2026-06-09
*/

const Email_pp_extended_ed_22_e3_l2 = () => (
  <EmailShell preheader="The difference between 'he goes' and 'he initiates' is a signal his brain hasn't learned to hear yet." bg={B.cream}>

    {/* ══════════════════════════════════════════════════════
       SECTION 1: HEADER — Logo Centered
       ══════════════════════════════════════════════════════ */}
    <Header bg="#FFFFFF" />

    {/* ══════════════════════════════════════════════════════
       SECTION 2: HERO — HERO-19 Timeline Shock
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFBF0", padding: "0 0 24px" }}>
      {/* Hero Image */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <ImgFrame
          height={340}
          radius={0}
          label="HERO IMAGE"
          sublabel="Child in BrightKidCo body-signal training pants (5-7 yr, mixed verbal)"
        />
      </div>

      {/* Headline + Subhead */}
      <div style={{ padding: "24px 32px 0", textAlign: "center" }}>
        <h1 style={{
          fontFamily: F.main, fontSize: 22, fontWeight: 400,
          lineHeight: 1.3, color: B.ink, margin: "0 0 10px",
        }}>
          He goes when you tell him.<br/>But not on his own.
        </h1>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          fontStyle: "italic", lineHeight: 1.4, color: "#4A6568", margin: 0,
        }}>
          Prompt-dependency isn't compliance, it's neurology
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 3: HOOK — Real Symptom Recognition (LETTER-01)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Opening paragraph with teal left border */}
      <div style={{ borderLeft: `3px solid ${B.teal}`, paddingLeft: 16 }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
        }}>
          He goes when you prompt. After five weeks in BrightKidCo underwear, he might even be registering more accidents, pausing, looking down, sometimes making it to the bathroom when you're right there.
        </p>
      </div>

      {/* Bold emphasis line */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 700,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        But he still doesn't come find you.
      </p>

      {/* Validation copy */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        He still waits for your cue. The same scheduled sit, the same verbal reminder, the same timer. You're still the one carrying the mental load of his bathroom schedule. And after 5+ weeks of wearing the Body-Signal Learning Layer, part of you is wondering: when does this become automatic?
      </p>

      {/* Direct transition */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        I want to be direct with you about what's happening, and what needs to happen next.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 4: VALIDATION — Prompt-Dependency Is Not Failure
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 24px" }}>
      {/* Section header */}
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 14px",
      }}>
        The hardest transition in body-signal learning for L2 kids
      </h2>

      {/* BCBA Acknowledgment Card */}
      <div style={{
        background: "#E8F4F8", borderRadius: 8, padding: 16, marginBottom: 14,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.ink, margin: "0 0 10px",
        }}>
          Your BCBA's work on compliance and routines was essential. When you started scheduled sits, you built a foundation. Your child learned that when the timer goes off, or when you say "try to go", they go. That's nothing. That's years of structure that many families never achieve.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          lineHeight: 1.6, color: B.ink, margin: 0,
        }}>
          But here's the piece that no one explained: compliance is not internal awareness.
        </p>
      </div>

      {/* Follow-up copy */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        Your child learned to respond to your cue. They did not learn to respond to their own body's signal. The prompt became the trigger, not the feeling of bladder fullness.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        This is not a failure of your BCBA's protocol. It wasn't designed to build interoception. It was designed to build routine. And it did. But now we need the next layer.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 5: MECHANISM — Why Prompts Overwrite Internal Signals
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Section header */}
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 14px",
      }}>
        When a child always receives an external prompt, the brain learns to prioritize that external cue.
      </h2>

      {/* Body copy */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        The internal signal, bladder fullness, is vague and inconsistent. The brain takes the reliable path.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        Autistic children show significantly diminished body awareness. When you add years of external prompting on top of that, the brain has no reason to tune into the internal signal. The BSL Layer has been creating a gentle sensation when your child wets, giving the brain a reliable external-to-internal bridge. Now comes the harder part: fading the adult prompts so the internal signal has room to emerge.
      </p>

      {/* Neuroscience Card */}
      <div style={{
        background: B.cream, borderRadius: 8, padding: 16,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink,
        }}>
          <p style={{ margin: "0 0 8px" }}>
            <span style={{ fontWeight: 700 }}>External prompt</span> → brain prioritizes external cue
          </p>
          <p style={{ margin: "0 0 8px" }}>
            <span style={{ fontWeight: 700 }}>Internal signal</span> → vague, inconsistent → ignored
          </p>
          <p style={{ margin: 0 }}>
            <span style={{ fontWeight: 700 }}>BSL Layer</span> → creates reliable external-to-internal bridge
          </p>
        </div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 6: PROTOCOL — Prompt Fading (Week-by-Week)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Section header */}
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 14px",
      }}>
        This is not about stopping prompts cold. That would confuse and frustrate both of you. It's a gradual transfer of responsibility from external cue to internal awareness.
      </h2>

      {/* Protocol Card 1: Weeks 5-6 */}
      <div style={{
        background: "#E8F4F8", borderRadius: 8, padding: 16, marginBottom: 12,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          color: B.ink, marginBottom: 8, letterSpacing: 0.3,
        }}>
          Weeks 5-6: Delay, Don't Remove
        </div>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Wait 30-60 seconds before prompting
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Watch for ANY signal: posture shift, hand to waistband, pause in play
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          If you see it: "I noticed you shifted. Does your body feel like something's happening?"
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: 0,
        }}>
          If you don't see it: prompt normally
        </p>
      </div>

      {/* Protocol Card 2: Weeks 6-7 */}
      <div style={{
        background: "#E8F4F8", borderRadius: 8, padding: 16, marginBottom: 12,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          color: B.ink, marginBottom: 8, letterSpacing: 0.3,
        }}>
          Weeks 6-7: Expand the Window
        </div>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Increase delay to 2-3 minutes
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Move slightly farther away when you prompt (from standing next to them to across the room)
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: 0,
        }}>
          Physical distance subtly shifts responsibility toward their body awareness
        </p>
      </div>

      {/* Protocol Card 3: Weeks 7-8 */}
      <div style={{
        background: "#E8F4F8", borderRadius: 8, padding: 16, marginBottom: 12,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          color: B.ink, marginBottom: 8, letterSpacing: 0.3,
        }}>
          Weeks 7-8: Reduce Prompt Frequency
        </div>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Cut one scheduled prompt per day
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Replace with: "How's your body feeling right now?"
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          If they answer with unrelated body sensation (hungry, tired, excited), validate it
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: 0,
        }}>
          ANY body awareness is progress
        </p>
      </div>

      {/* Protocol Card 4: Weeks 8-10 */}
      <div style={{
        background: "#E8F4F8", borderRadius: 8, padding: 16, marginBottom: 14,
      }}>
        <div style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 700,
          color: B.ink, marginBottom: 8, letterSpacing: 0.3,
        }}>
          Weeks 8-10: Observe the Shift
        </div>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Some L2 kids begin showing first independent signals
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Walking toward bathroom unprompted, pausing mid-play with recognition
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: "0 0 6px",
        }}>
          Saying "I think I have to go" (even if sometimes too late)
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 14, lineHeight: 1.5, color: B.ink, margin: 0,
          fontStyle: "italic",
        }}>
          "These are not failures. These are breakthroughs that happen to arrive late."
        </p>
      </div>

      {/* If progress stalls */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        If progress stalls: Stay at the current prompt level for another week. Regression isn't starting over. It's sensory fluctuation. Hold steady.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 7: PRODUCT FRAME — How the Underwear Fits This Phase
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 24px" }}>
      {/* Section header */}
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 14px",
      }}>
        How the underwear fits this phase
      </h2>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        Your child is still wearing the Body-Signal Learning Layer every day. That's good, it's still creating the feedback loop their brain needs.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        At this phase, the underwear does two critical things that prompts alone cannot:
      </p>

      {/* Feature 1 */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        <span style={{ fontWeight: 700 }}>Provides the "missed signal" education.</span> When your child has an accident because the prompt was delayed or absent, the BKC layer creates that 30-60 second gentle sensation. The brain registers: something happened while I wasn't paying attention to my body. That's data the brain uses to tune in next time.
      </p>

      {/* Feature 2 */}
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        <span style={{ fontWeight: 700 }}>Absorbs the consequence without the shame.</span> Because the layer protects clothing and furniture, you can stay calm. No frustration, no "I told you to try." Just: "It's okay. Your body is still learning the signal."
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 8: TIMELINES — Realistic Timelines
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      {/* Section header */}
      <h2 style={{
        fontFamily: F.main, fontSize: 18, fontWeight: 700,
        lineHeight: 1.3, color: B.ink, margin: "0 0 14px",
      }}>
        Realistic Timelines: The Truth About Prompt Fading
      </h2>

      {/* Timeline items */}
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 10px", paddingLeft: 16, textIndent: -16,
      }}>
        <span style={{ fontWeight: 700 }}>4-8 weeks:</span> first unprompted signal (a pause, a look, a step toward the bathroom)
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 10px", paddingLeft: 16, textIndent: -16,
      }}>
        <span style={{ fontWeight: 700 }}>8-12 weeks:</span> partial independence (initiates some of the time, still needs prompts during distraction)
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, lineHeight: 1.6, color: B.ink,
        margin: "0 0 14px", paddingLeft: 16, textIndent: -16,
      }}>
        <span style={{ fontWeight: 700 }}>12-16+ weeks:</span> consistent initiation
      </p>

      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        These are real numbers from families who have been through this. Not marketing. Not optimism. Observation.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        Your child's timeline depends on how deeply the prompt-dependency pattern is wired. A child who has been prompted 6+ times a day for 3 years needs more unwiring than a child who has had 1 year of moderate prompting. Both timelines are normal.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 9: 60-DAY GUARANTEE (TRUST-1)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 24px" }}>
      <div style={{
        border: "2px dashed #2BAEB4", borderRadius: 12, padding: 24,
      }}>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
        }}>
          You've been in this for five weeks. That means you're still inside the 60-day window where you can decide if this approach fits your child.
        </p>
        <p style={{
          fontFamily: F.main, fontSize: 16, fontWeight: 400,
          lineHeight: 1.6, color: B.ink, margin: "0 0 18px",
        }}>
          If by Day 60 your child hasn't shown any emerging awareness, no pauses, no changes in accident frequency, no recognition during wear, email me directly. We'll talk through what you're seeing. And if the approach genuinely isn't working for your child, I'll process your refund personally.
        </p>
        {/* Pull-quote */}
        <p style={{
          fontFamily: F.display, fontSize: 22, fontWeight: 700,
          lineHeight: 1.3, color: B.ink, margin: 0, fontStyle: "italic",
        }}>
          60 days. Your judgment. That's the deal.
        </p>
      </div>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 10: PERMISSION SPACE
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: "#FFFFFF", padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        If reading this feels overwhelming, like one more protocol to manage on top of everything else, I hear you.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        You don't have to implement every week of this schedule. You don't have to be perfect at prompt fading. If all you do this week is wait 30 seconds before your next prompt, that's progress.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        Some L2 families find that reducing prompts naturally creates more accidents in the short term. If that's more than you can handle right now, if you're exhausted, if your child is dysregulated, if you need a break, take it. The underwear doesn't stop working. The body-signal learning continues whether you actively prompt or not.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 14px",
      }}>
        This isn't another thing to add to your list. It's permission to let your child's body start doing some of the work.
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: 0,
      }}>
        When you're ready to try the prompt-fading protocol, it will be here. So will I.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       DIVIDER
       ══════════════════════════════════════════════════════ */}
    <div style={{ height: 1, background: "#E0E8E9" }} />

    {/* ══════════════════════════════════════════════════════
       SECTION 11: LENA SIGN-OFF (MEDIUM variant)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.cream, padding: "24px 24px" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: B.ink, margin: "0 0 6px",
      }}>
        With understanding,
      </p>
      <p style={{
        fontFamily: "'Caveat', cursive", fontSize: 18,
        lineHeight: 1.2, color: B.ink, margin: "0 0 4px",
      }}>
        Lena ——
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.4, color: "#8A9B9D", margin: "0 0 18px",
      }}>
        Customer Support · Mom of two autistic sons
      </p>

      {/* P.S. */}
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.6, color: "#4A6568", margin: "0 0 10px",
      }}>
        <span style={{ fontWeight: 700 }}>P.S.</span> My younger son was deeply prompt-dependent. It took us 5 months from starting body-signal learning to his first unprompted walk to the bathroom. Not because he wasn't trying, because his brain had to unlearn years of waiting for my voice before it could hear his own body's signal. If you're in this phase, you're exactly where you should be.
      </p>

      {/* P.P.S. */}
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.6, color: "#4A6568", margin: 0,
      }}>
        <span style={{ fontWeight: 700 }}>P.P.S.</span> If you've already seen your child pause or look down after an accident, that's the first step. The prompt fading builds on that. You're closer than you think.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 12: CTA SECTION (CTA-6 Social CTA)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "30px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 16, fontWeight: 400,
        lineHeight: 1.6, color: "#FFFFFF", margin: "0 0 24px",
      }}>
        Try the 30-second delay this week
      </p>

      {/* CTA Button */}
      <a href="#" style={{
        display: "inline-block",
        padding: "17px 32px",
        background: "#D8F57C", color: B.ink,
        fontFamily: F.main, fontSize: 14, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.1em",
        textDecoration: "none", borderRadius: 999,
        textAlign: "center",
      }}>
        Try the 30-second delay
      </a>

      {/* Secondary CTA */}
      <p style={{
        fontFamily: F.main, fontSize: 14, fontWeight: 400,
        lineHeight: 1.6, color: "#8A9B9D", margin: "16px 0 0",
      }}>
        Reply and tell me what you're seeing — I read every response.
      </p>
    </div>

    {/* ══════════════════════════════════════════════════════
       SECTION 13: FOOTER (UTIL-04)
       ══════════════════════════════════════════════════════ */}
    <div style={{ background: B.ink, padding: "16px 24px", textAlign: "center" }}>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.3,
        color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.5,
      }}>
        BrightKidCo
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.3,
        color: "#8A9B9D", margin: "0 0 8px", letterSpacing: 0.5,
      }}>
        123 Commerce Blvd, Suite 200
      </p>
      <p style={{
        fontFamily: F.main, fontSize: 11, lineHeight: 1.3,
        color: "#8A9B9D", margin: 0, letterSpacing: 0.5,
      }}>
        No longer want these emails? <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Unsubscribe</a> or <a href="#" style={{ color: "#8A9B9D", textDecoration: "underline" }}>Manage Preferences</a>
      </p>
    </div>

  </EmailShell>
);

// Register on window for rendering
Object.assign(window, { Email_pp_extended_ed_22_e3_l2 });
