// Hi-fi version of Email 1 — Welcome + 10% discount
// BrightKidCo brand colors extracted from logo:
// Teal #14A0B4  →  Green #64C864 (gradient)
// Clean, friendly, parent-focused

const bkColors = {
  teal: '#14A0B4',
  green: '#64C864',
  gradient: 'linear-gradient(90deg, #14A0B4 0%, #64C864 100%)',
  ink: '#1f2d2e',
  inkSoft: '#556366',
  paper: '#ffffff',
  cream: '#fdf9f3',
  creamAccent: '#fff4dc',
  border: '#e8e4dc',
};

const bkFont = {
  // Rounded, friendly, readable — Nunito is close to logo vibe
  display: '"Nunito", system-ui, sans-serif',
  body: '"Nunito", system-ui, sans-serif',
};

const HiFiEmail1 = () => (
  <div style={{
    width: 600,
    fontFamily: bkFont.body,
    background: bkColors.cream,
    color: bkColors.ink,
    borderRadius: 0,
    overflow: 'hidden',
  }}>
    {/* Top gradient bar */}
    <div style={{ height: 6, background: bkColors.gradient }} />

    {/* Header w/ logo */}
    <div style={{ padding: '28px 40px 20px', background: bkColors.paper, textAlign: 'center' }}>
      <img src="assets/brightkidco-logo.png" alt="BrightKidCo" style={{ height: 38, width: 'auto' }} />
    </div>

    {/* Hero */}
    <div style={{
      background: bkColors.paper,
      padding: '20px 40px 40px',
      textAlign: 'center',
    }}>
      {/* Hero image placeholder */}
      <div style={{
        width: '100%',
        aspectRatio: '16/10',
        background: `linear-gradient(135deg, #e6f4f6 0%, #e8f5e0 100%)`,
        borderRadius: 12,
        marginBottom: 28,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(20,160,180,0.04) 0 12px, transparent 12px 24px)'
        }} />
        <div style={{
          fontFamily: 'ui-monospace, Menlo, monospace',
          fontSize: 11,
          color: bkColors.teal,
          background: 'rgba(255,255,255,0.85)',
          padding: '6px 12px',
          borderRadius: 20,
          letterSpacing: 0.5,
        }}>[ hero · happy toddler in training undies ]</div>
      </div>

      <div style={{
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 2,
        color: bkColors.teal,
        textTransform: 'uppercase',
        marginBottom: 10,
      }}>
        Welcome to the family
      </div>

      <h1 style={{
        fontSize: 38,
        lineHeight: 1.1,
        margin: '0 0 16px',
        fontWeight: 800,
        color: bkColors.ink,
        letterSpacing: -0.5,
      }}>
        So glad you're here,<br/>
        <span style={{
          background: bkColors.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>{'{first_name}'} ✨</span>
      </h1>

      <p style={{
        fontSize: 16,
        lineHeight: 1.55,
        color: bkColors.inkSoft,
        margin: '0 auto 28px',
        maxWidth: 440,
      }}>
        Potty training doesn't have to be a battle. We designed our training undies with one goal:
        making this messy milestone a little easier (and a lot less laundry).
      </p>

      {/* Discount block */}
      <div style={{
        background: bkColors.creamAccent,
        border: `2px dashed ${bkColors.teal}`,
        borderRadius: 14,
        padding: '22px 20px',
        marginBottom: 24,
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          color: bkColors.inkSoft,
          textTransform: 'uppercase',
          marginBottom: 6,
        }}>A little welcome gift</div>
        <div style={{
          fontSize: 28,
          fontWeight: 800,
          color: bkColors.ink,
          letterSpacing: 2,
          marginBottom: 4,
        }}>WELCOME10</div>
        <div style={{
          fontSize: 14,
          color: bkColors.inkSoft,
        }}>10% off your first order · expires in 7 days</div>
      </div>

      {/* CTA */}
      <a href="#" style={{
        display: 'inline-block',
        background: bkColors.gradient,
        color: 'white',
        padding: '16px 40px',
        borderRadius: 40,
        textDecoration: 'none',
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: 0.3,
        boxShadow: '0 6px 20px rgba(20,160,180,0.25)',
      }}>
        Shop training undies →
      </a>
    </div>

    {/* Divider */}
    <div style={{ height: 1, background: bkColors.border, margin: '0 40px' }} />

    {/* Free guide upsell */}
    <div style={{
      background: bkColors.paper,
      padding: '32px 40px',
      display: 'flex',
      gap: 20,
      alignItems: 'center',
    }}>
      <div style={{
        width: 96, height: 120,
        background: `linear-gradient(135deg, ${bkColors.teal} 0%, ${bkColors.green} 100%)`,
        borderRadius: 8,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 34,
        fontWeight: 800,
        boxShadow: '0 8px 20px rgba(20,160,180,0.2)',
      }}>📖</div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
          color: bkColors.green, textTransform: 'uppercase', marginBottom: 6,
        }}>Free download</div>
        <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 6, lineHeight: 1.2 }}>
          The BrightKidCo<br/>Potty Training Playbook
        </div>
        <div style={{ fontSize: 14, color: bkColors.inkSoft, marginBottom: 10 }}>
          30 pages of real-parent tips, no fluff.
        </div>
        <a href="#" style={{
          color: bkColors.teal, fontWeight: 700, fontSize: 14, textDecoration: 'none',
          borderBottom: `2px solid ${bkColors.teal}`, paddingBottom: 1,
        }}>
          Get it free →
        </a>
      </div>
    </div>

    {/* Divider */}
    <div style={{ height: 1, background: bkColors.border, margin: '0 40px' }} />

    {/* 3-benefit strip */}
    <div style={{ background: bkColors.paper, padding: '28px 40px 8px' }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 2,
        color: bkColors.inkSoft, textTransform: 'uppercase',
        textAlign: 'center', marginBottom: 20,
      }}>Why parents love us</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          ['💧', 'Absorbent', 'Catches accidents without the diaper feel'],
          ['🌱', 'GOTS cotton', 'Soft on skin, gentle on the planet'],
          ['💚', '10k+ parents', 'A toddler-tested favorite'],
        ].map(([icon, title, desc], i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
            <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{title}</div>
            <div style={{ fontSize: 12, color: bkColors.inkSoft, lineHeight: 1.4 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div style={{
      background: bkColors.cream,
      padding: '32px 40px',
      textAlign: 'center',
      color: bkColors.inkSoft,
      fontSize: 12,
      lineHeight: 1.6,
    }}>
      <div style={{ marginBottom: 14 }}>
        <a href="#" style={{ color: bkColors.teal, margin: '0 8px', textDecoration: 'none' }}>Instagram</a>
        <span style={{ color: bkColors.border }}>·</span>
        <a href="#" style={{ color: bkColors.teal, margin: '0 8px', textDecoration: 'none' }}>TikTok</a>
        <span style={{ color: bkColors.border }}>·</span>
        <a href="#" style={{ color: bkColors.teal, margin: '0 8px', textDecoration: 'none' }}>Support</a>
      </div>
      <div style={{ marginBottom: 6 }}>BrightKidCo® · Made with love for tiny humans</div>
      <div style={{ fontSize: 11, color: bkColors.inkSoft, opacity: 0.7 }}>
        You're getting this because you joined our list. <a href="#" style={{ color: bkColors.inkSoft }}>Unsubscribe</a> · <a href="#" style={{ color: bkColors.inkSoft }}>Preferences</a>
      </div>
    </div>
  </div>
);

window.HiFiEmail1 = HiFiEmail1;
