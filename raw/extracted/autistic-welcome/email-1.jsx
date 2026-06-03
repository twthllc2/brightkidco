/* Welcome Flow · Autistic Parent · Email 1
   Goals: You're not failing · Many families need a different path · Sensory-friendly support
   Tone: calm, slow, validating — no urgency, no caps, no shouty CTAs
*/

const Email1 = () => {
  const teal   = "#2BAEB4";
  const green  = "#5DD07A";
  const ink    = "#1F3A3D";
  const soft   = "#4A6568";
  const cream  = "#FBF7F1";
  const paper  = "#FFFFFF";
  const lilac  = "#EEE8F6";
  const mint   = "#E8F5EC";

  return (
    <div style={{
      width: 600,
      margin: "0 auto",
      fontFamily: "'Fraunces', Georgia, serif",
      background: paper,
      color: ink,
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
    }}>
      {/* preheader (visible in inbox preview) */}
      <div style={{
        padding: "12px 32px",
        fontSize: 11,
        color: "#98A6A8",
        fontFamily: "'Inter', system-ui, sans-serif",
        letterSpacing: 0.3,
        textTransform: "uppercase",
        textAlign: "center",
        background: cream,
      }}>
        You are not failing. This is a different path.
      </div>

      {/* header */}
      <div style={{
        padding: "28px 32px 8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: paper,
      }}>
        <img
          src="../assets/brightkidco-logo-new.png"
          /* path is relative to the HTML file in autistic-welcome/ */
          alt="BrightKidCo"
          style={{ height: 34, width: "auto" }}
        />
      </div>

      {/* HERO — soft lilac, quiet, no urgency */}
      <div style={{
        margin: "12px 20px 0",
        borderRadius: 28,
        background: `linear-gradient(180deg, ${lilac} 0%, #F6F1FB 100%)`,
        padding: "48px 36px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* tiny floating shapes – playful but calm */}
        <div style={{
          position: "absolute", top: 24, right: 28, width: 14, height: 14,
          borderRadius: "50%", background: "#D4C4E8",
        }} />
        <div style={{
          position: "absolute", bottom: 30, left: 24, width: 22, height: 22,
          borderRadius: "50%", background: "#C8BBDE", opacity: 0.6,
        }} />
        <div style={{
          position: "absolute", top: 60, left: 40, width: 8, height: 8,
          borderRadius: "50%", background: "#B8A7D4", opacity: 0.5,
        }} />

        <div style={{
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#7A5FA8",
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 600,
          marginBottom: 18,
        }}>
          A letter · 1 of 4
        </div>

        <h1 style={{
          fontSize: 40,
          lineHeight: 1.12,
          fontWeight: 500,
          margin: 0,
          letterSpacing: -0.8,
          color: "#2D2043",
        }}>
          You haven't done<br/>
          anything wrong.
        </h1>

        <p style={{
          marginTop: 22,
          fontSize: 17,
          lineHeight: 1.55,
          color: "#4A3A65",
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
          maxWidth: 460,
        }}>
          We know you've tried. The charts. The timers. The rewards.
          The naked days. The ABA protocols. The waiting.
        </p>
      </div>

      {/* BODY — letter style */}
      <div style={{
        padding: "40px 44px 8px",
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 16,
        lineHeight: 1.7,
        color: soft,
      }}>
        <p style={{ margin: "0 0 18px" }}>
          Hi, and welcome.
        </p>

        <p style={{ margin: "0 0 18px" }}>
          If you're here, you've probably spent months — maybe years —
          feeling like you're doing something wrong.
          Reading Reddit at 2am. Watching other kids move on.
          Taking another break "for your mental health."
        </p>

        <p style={{ margin: "0 0 18px" }}>
          So before we say anything else, we want to say this:
        </p>

        <p style={{
          margin: "0 0 26px",
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 22,
          lineHeight: 1.35,
          color: ink,
          fontWeight: 500,
          fontStyle: "italic",
        }}>
          You are not failing.<br/>
          Your child isn't broken.<br/>
          You just need a different path.
        </p>
      </div>

      {/* INSIGHT BLOCK — the reframe, gently */}
      <div style={{
        margin: "8px 24px 0",
        padding: "32px 32px",
        background: mint,
        borderRadius: 24,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>
        <div style={{
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: teal,
          fontWeight: 700,
          marginBottom: 14,
        }}>
          The part nobody explained
        </div>

        <h2 style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 26,
          lineHeight: 1.25,
          color: ink,
          fontWeight: 500,
          margin: "0 0 16px",
          letterSpacing: -0.4,
        }}>
          It was never about <span style={{ color: teal }}>motivation</span>.
        </h2>

        <p style={{
          fontSize: 15.5,
          lineHeight: 1.7,
          color: soft,
          margin: "0 0 14px",
        }}>
          Most potty training methods assume your child already feels
          the urge — and just needs a reason to act on it.
        </p>

        <p style={{
          fontSize: 15.5,
          lineHeight: 1.7,
          color: soft,
          margin: "0 0 14px",
        }}>
          For many neurodivergent children, that assumption is the whole
          problem. They don't feel it in time.
          Not because they're stubborn. Not because they don't care.
          Their body signal simply arrives late — or not at all.
        </p>

        <p style={{
          fontSize: 15.5,
          lineHeight: 1.7,
          color: soft,
          margin: 0,
          fontWeight: 500,
          color: ink,
        }}>
          Rewards can't create a signal that isn't reaching the brain yet.
          That's why nothing you tried worked.
        </p>
      </div>

      {/* DIFFERENT PATH — 3 gentle steps */}
      <div style={{
        padding: "44px 44px 12px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>
        <div style={{
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#B08B4F",
          fontWeight: 700,
          marginBottom: 12,
        }}>
          A different path
        </div>

        <h2 style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 28,
          lineHeight: 1.2,
          color: ink,
          fontWeight: 500,
          margin: "0 0 28px",
          letterSpacing: -0.4,
        }}>
          Gentle. Sensory-aware.<br/>
          Built around your child.
        </h2>

        {/* three rows */}
        {[
          {
            n: "01",
            title: "We start with the body, not the behaviour.",
            body: "No timers. No rewards charts. No pressure to perform on a schedule. We work with interoception — the signal itself — so your child learns to recognise it at their own pace.",
            tint: "#E8F5EC",
            accent: green,
          },
          {
            n: "02",
            title: "Sensory-friendly by design.",
            body: "Soft, quiet materials. No loud tags, no scratchy seams, no sudden cold wet feeling. The kind of underwear that can actually stay on a sensory-sensitive child all day.",
            tint: "#FDF4E8",
            accent: "#E8A23D",
          },
          {
            n: "03",
            title: "Progress without meltdowns.",
            body: "Small accidents stay contained, so you don't spend the day changing clothes — and your child doesn't spend the day being rushed to the toilet. Calm is part of the method.",
            tint: "#EAF4F5",
            accent: teal,
          },
        ].map((step, i) => (
          <div key={i} style={{
            display: "flex",
            gap: 20,
            marginBottom: 22,
            padding: "22px 22px",
            background: step.tint,
            borderRadius: 20,
            alignItems: "flex-start",
          }}>
            <div style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 32,
              fontWeight: 500,
              color: step.accent,
              minWidth: 44,
              lineHeight: 1,
              marginTop: 2,
            }}>
              {step.n}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: 17,
                fontWeight: 600,
                margin: "0 0 8px",
                color: ink,
                lineHeight: 1.35,
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: soft,
                margin: 0,
              }}>
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote from another parent — social proof without hype */}
      <div style={{
        margin: "20px 44px 0",
        padding: "32px 8px",
        borderTop: "1px solid #EAE4DC",
        borderBottom: "1px solid #EAE4DC",
        textAlign: "center",
        fontFamily: "'Fraunces', Georgia, serif",
      }}>
        <div style={{
          fontSize: 20,
          lineHeight: 1.45,
          color: ink,
          fontStyle: "italic",
          fontWeight: 400,
          maxWidth: 440,
          margin: "0 auto 16px",
        }}>
          "After three years of trying everything, this was the first thing
          that made sense to him — because it made sense to his body."
        </div>
        <div style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13,
          letterSpacing: 0.3,
          color: soft,
        }}>
          — Parent of a 5-year-old · diagnosed ASD
        </div>
      </div>

      {/* SOFT CTA — no urgency, a door not a push */}
      <div style={{
        padding: "44px 44px 8px",
        fontFamily: "'Inter', system-ui, sans-serif",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: soft,
          margin: "0 0 24px",
          maxWidth: 440,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Over the next few days, we'll share how it works — the science,
          the method, and stories from families whose children are a lot
          like yours.
        </p>

        <a href="#" style={{
          display: "inline-block",
          padding: "16px 32px",
          background: `linear-gradient(135deg, ${teal} 0%, ${green} 100%)`,
          color: "#FFFFFF",
          textDecoration: "none",
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: 0.2,
          boxShadow: "0 2px 0 rgba(43,174,180,0.15)",
        }}>
          See how the method works →
        </a>

        <div style={{
          marginTop: 16,
          fontSize: 12.5,
          color: "#98A6A8",
        }}>
          No rush. No pressure. Read it when you have a quiet moment.
        </div>
      </div>

      {/* SIGN-OFF — warm, specific, human */}
      <div style={{
        padding: "44px 44px 24px",
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 15,
        lineHeight: 1.7,
        color: soft,
      }}>
        <p style={{ margin: "0 0 6px" }}>
          With you,
        </p>
        <p style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 22,
          color: ink,
          margin: "0 0 4px",
          fontWeight: 500,
        }}>
          The BrightKidCo team
        </p>
        <p style={{
          margin: 0,
          fontSize: 13,
          color: "#98A6A8",
        }}>
          P.S. If you ever want to reply and tell us about your child —
          we read every message. Really.
        </p>
      </div>

      {/* FOOTER */}
      <div style={{
        padding: "24px 32px 32px",
        background: cream,
        textAlign: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>
        <div style={{
          fontSize: 11,
          color: "#98A6A8",
          letterSpacing: 0.3,
          lineHeight: 1.7,
        }}>
          BrightKidCo · A different path to dry days<br/>
          <a href="#" style={{ color: "#98A6A8", textDecoration: "underline" }}>Unsubscribe</a>
          {" · "}
          <a href="#" style={{ color: "#98A6A8", textDecoration: "underline" }}>Manage preferences</a>
        </div>
      </div>
    </div>
  );
};

window.Email1 = Email1;
