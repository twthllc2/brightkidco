// Low-fi wireframes for BrightKidCo welcome flow
// Hand-drawn feel: monospace + caveat fonts, dashed boxes, sketchy shapes

const wfColors = {
  ink: '#2a2a2a',
  muted: '#8a8a8a',
  paper: '#fafaf7',
  line: '#2a2a2a',
  accent: '#c4a95a', // muted gold highlight
  teal: '#14A0B4',
};

const wfFont = {
  hand: '"Caveat", "Patrick Hand", cursive',
  mono: '"JetBrains Mono", "Courier New", monospace',
  sans: '"Inter", system-ui, sans-serif',
};

// --- Wireframe primitives ---

const WBox = ({ children, style = {}, dashed = true, w = '100%', h, label }) => (
  <div style={{
    border: dashed ? `1.5px dashed ${wfColors.line}` : `1.5px solid ${wfColors.line}`,
    borderRadius: 4,
    padding: 10,
    width: w,
    height: h,
    position: 'relative',
    background: '#fff',
    boxSizing: 'border-box',
    ...style,
  }}>
    {label && (
      <div style={{
        position: 'absolute', top: -9, left: 10, background: wfColors.paper,
        padding: '0 6px', fontSize: 10, fontFamily: wfFont.mono, color: wfColors.muted,
        letterSpacing: 0.5, textTransform: 'uppercase'
      }}>{label}</div>
    )}
    {children}
  </div>
);

const WLine = ({ w = '100%', thick = false, style = {} }) => (
  <div style={{
    width: w, height: thick ? 3 : 1, background: wfColors.line,
    borderRadius: 1, ...style
  }} />
);

const WImg = ({ h = 120, label = 'image', style = {} }) => (
  <div style={{
    height: h,
    background: `repeating-linear-gradient(45deg, #eee 0 6px, #fff 6px 12px)`,
    border: `1.5px solid ${wfColors.line}`,
    borderRadius: 4,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: wfFont.mono, fontSize: 10, color: wfColors.muted,
    position: 'relative', ...style
  }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute',
        backgroundImage: 'linear-gradient(to top right, transparent calc(50% - 0.5px), #2a2a2a 50%, transparent calc(50% + 0.5px)), linear-gradient(to top left, transparent calc(50% - 0.5px), #2a2a2a 50%, transparent calc(50% + 0.5px))',
        opacity: 0.2
      }} />
      <span style={{ background: '#fff', padding: '2px 6px', position: 'relative', border: `1px solid ${wfColors.line}`, borderRadius: 2 }}>[ {label} ]</span>
    </div>
  </div>
);

const WBtn = ({ children, primary = false, w }) => (
  <div style={{
    display: 'inline-block',
    padding: '10px 18px',
    border: `2px solid ${wfColors.line}`,
    borderRadius: 3,
    background: primary ? wfColors.line : '#fff',
    color: primary ? '#fff' : wfColors.line,
    fontFamily: wfFont.hand,
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
    width: w,
    boxSizing: 'border-box',
  }}>{children}</div>
);

const WText = ({ lines = 2, w = '100%' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: w }}>
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} style={{
        height: 6, background: wfColors.muted, opacity: 0.35, borderRadius: 2,
        width: i === lines - 1 ? `${60 + Math.random() * 20}%` : '100%'
      }} />
    ))}
  </div>
);

const WHand = ({ children, size = 22, color = wfColors.line, style = {} }) => (
  <div style={{ fontFamily: wfFont.hand, fontSize: size, color, lineHeight: 1.15, ...style }}>
    {children}
  </div>
);

const WMono = ({ children, size = 11, color = wfColors.muted, style = {} }) => (
  <div style={{ fontFamily: wfFont.mono, fontSize: size, color, letterSpacing: 0.3, ...style }}>
    {children}
  </div>
);

// Annotation callout
const WNote = ({ children, style = {} }) => (
  <div style={{
    fontFamily: wfFont.hand,
    fontSize: 14,
    color: wfColors.accent,
    padding: '4px 8px',
    background: '#fff8e0',
    border: `1px dashed ${wfColors.accent}`,
    borderRadius: 3,
    display: 'inline-block',
    ...style,
  }}>✱ {children}</div>
);

// --- Email shell (mobile email preview, 380px wide) ---

const EmailShell = ({ children, subject, from = 'BrightKidCo', preview }) => (
  <div style={{
    width: 380,
    background: wfColors.paper,
    fontFamily: wfFont.sans,
    border: `1.5px solid ${wfColors.line}`,
    borderRadius: 6,
    overflow: 'hidden',
  }}>
    {/* inbox header */}
    <div style={{ padding: '10px 14px', borderBottom: `1px dashed ${wfColors.line}`, background: '#fff' }}>
      <WMono size={10}>FROM</WMono>
      <div style={{ fontFamily: wfFont.hand, fontSize: 18, fontWeight: 600 }}>{from}</div>
      <div style={{ height: 6 }} />
      <WMono size={10}>SUBJECT</WMono>
      <div style={{ fontFamily: wfFont.hand, fontSize: 17, lineHeight: 1.2 }}>{subject}</div>
      {preview && (
        <>
          <div style={{ height: 6 }} />
          <WMono size={10}>PREVIEW</WMono>
          <div style={{ fontFamily: wfFont.mono, fontSize: 10, color: wfColors.muted, lineHeight: 1.4 }}>{preview}</div>
        </>
      )}
    </div>
    {/* email body */}
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {children}
    </div>
  </div>
);

// ───────────────────────────────────────────
// EMAIL 1 — Welcome + Discount
// ───────────────────────────────────────────

const Email1_VariantA = () => (
  <EmailShell
    subject="Welcome! Here's 10% off →"
    preview="Your code inside. Plus a free potty training guide..."
  >
    {/* Logo */}
    <div style={{ textAlign: 'center', padding: '8px 0' }}>
      <WHand size={20}>[ BrightKidCo logo ]</WHand>
    </div>
    <WLine />

    {/* Hero */}
    <WImg h={160} label="hero: kid smiling, undies" />

    <WHand size={28} style={{ textAlign: 'center', lineHeight: 1.1 }}>
      Welcome to the<br/>family!
    </WHand>

    <WText lines={3} />

    {/* Discount block */}
    <WBox dashed={true} style={{ textAlign: 'center', padding: 16, background: '#fffbe6' }}>
      <WMono size={10}>YOUR CODE</WMono>
      <WHand size={26} style={{ letterSpacing: 2 }}>WELCOME10</WHand>
      <WMono size={10}>10% off — expires in 7 days</WMono>
    </WBox>

    <div style={{ textAlign: 'center' }}>
      <WBtn primary w="100%">Shop potty training →</WBtn>
    </div>

    {/* Secondary: Free guide */}
    <WLine />
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <WImg h={60} label="guide" style={{ width: 70, flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <WHand size={15}>Free: Potty training in 3 days guide</WHand>
        <WText lines={1} />
      </div>
    </div>

    {/* Footer */}
    <WLine />
    <WMono size={9} style={{ textAlign: 'center' }}>unsubscribe · preferences · address</WMono>
  </EmailShell>
);

const Email1_VariantB = () => (
  <EmailShell
    subject="Hey {first_name}, welcome to BrightKidCo 👋"
    preview="A quick hello, and a gift to say thanks..."
  >
    {/* Minimal, text-first */}
    <div>
      <WMono size={10}>BRIGHTKIDCO</WMono>
      <div style={{ height: 12 }} />
      <WHand size={24} style={{ lineHeight: 1.15 }}>
        Hey {'{first_name}'},<br/>
        really glad you're here.
      </WHand>
    </div>

    <WText lines={4} />

    {/* Inline code — no big box */}
    <div style={{
      borderTop: `1.5px dashed ${wfColors.line}`,
      borderBottom: `1.5px dashed ${wfColors.line}`,
      padding: '12px 0',
      textAlign: 'center'
    }}>
      <WMono size={10}>10% off with</WMono>
      <WHand size={22}>→ WELCOME10 ←</WHand>
    </div>

    <WText lines={3} />

    <WBtn primary w="100%">Start shopping</WBtn>

    {/* Founder signature feel */}
    <div style={{ marginTop: 10 }}>
      <WHand size={18} style={{ color: wfColors.muted }}>— Mel,<br/>Founder</WHand>
    </div>

    <WLine />
    <WMono size={9} style={{ textAlign: 'center' }}>unsubscribe · preferences</WMono>
  </EmailShell>
);

const Email1_VariantC = () => (
  <EmailShell
    subject="10% off + a little secret about potty training"
    preview="Most parents get this one thing wrong..."
  >
    {/* Story-driven hook */}
    <div style={{ textAlign: 'center' }}>
      <WHand size={22}>[ BrightKidCo logo ]</WHand>
    </div>

    <WBox style={{ background: '#f0f8f7', borderColor: wfColors.teal, textAlign: 'center' }}>
      <WHand size={20} style={{ color: wfColors.teal }}>
        "We tried everything."
      </WHand>
      <WMono size={10} style={{ marginTop: 6 }}>— every parent, ever</WMono>
    </WBox>

    <WHand size={22} style={{ lineHeight: 1.2 }}>
      Here's what we learned from 10,000+ toddlers...
    </WHand>

    <WText lines={4} />

    {/* 3-tip list */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[1,2,3].map(i => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            border: `1.5px solid ${wfColors.line}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: wfFont.hand, fontSize: 15, flexShrink: 0
          }}>{i}</div>
          <WText lines={2} w="calc(100% - 34px)" />
        </div>
      ))}
    </div>

    <WLine />

    <div style={{ textAlign: 'center' }}>
      <WMono size={10}>P.S. here's 10% off</WMono>
      <WHand size={20}>WELCOME10</WHand>
      <div style={{ height: 8 }} />
      <WBtn primary w="100%">See our undies</WBtn>
    </div>
  </EmailShell>
);

// ───────────────────────────────────────────
// EMAIL 2 — Problem/empathy
// ───────────────────────────────────────────

const Email2_VariantA = () => (
  <EmailShell
    subject="Potty training is hard. Here's why."
    preview="3 myths we wish someone had told us..."
  >
    <div style={{ textAlign: 'center' }}>
      <WHand size={18}>[ logo ]</WHand>
    </div>

    <WHand size={26} style={{ lineHeight: 1.15 }}>
      Potty training is<br/>
      <span style={{ textDecoration: 'line-through', color: wfColors.muted }}>supposed to be easy.</span><br/>
      actually really hard.
    </WHand>

    <WText lines={3} />

    {/* Myth vs truth cards */}
    {['Myth #1', 'Myth #2', 'Myth #3'].map((m, i) => (
      <WBox key={i} style={{ padding: 12 }}>
        <WMono size={10} color={wfColors.muted}>{m.toUpperCase()}</WMono>
        <WHand size={16}>"They should be done in 3 days"</WHand>
        <div style={{ height: 6 }} />
        <WText lines={2} />
      </WBox>
    ))}

    <WBox style={{ background: '#f0f8f7', borderColor: wfColors.teal }}>
      <WHand size={18} style={{ color: wfColors.teal }}>Our approach:</WHand>
      <WText lines={3} />
    </WBox>

    <WBtn primary w="100%">Try our training undies →</WBtn>
  </EmailShell>
);

const Email2_VariantB = () => (
  <EmailShell
    subject="The messy truth about potty training (from a mom of 3)"
    preview="No shame, no judgement. Just what works..."
  >
    <WImg h={140} label="founder + kids candid" />

    <WHand size={22} style={{ lineHeight: 1.2 }}>
      I failed at potty training 3 times before it clicked.
    </WHand>

    <WText lines={5} />

    {/* Pull quote */}
    <div style={{
      borderLeft: `3px solid ${wfColors.teal}`,
      paddingLeft: 12,
      fontFamily: wfFont.hand,
      fontSize: 18,
      color: wfColors.line,
      fontStyle: 'italic',
    }}>
      "I wish I'd known it wasn't about the kid — it was about the tool."
    </div>

    <WText lines={4} />

    <WHand size={16}>That's why we made these:</WHand>
    <WImg h={120} label="product shot" />

    <WBtn primary w="100%">Shop training undies</WBtn>

    <WHand size={15} style={{ color: wfColors.muted }}>— Mel</WHand>
  </EmailShell>
);

const Email2_VariantC = () => (
  <EmailShell
    subject="Quick Q: where are you in potty training?"
    preview="Tap one and we'll send exactly what you need"
  >
    <div style={{ textAlign: 'center' }}>
      <WHand size={18}>[ logo ]</WHand>
    </div>

    <WHand size={24} style={{ textAlign: 'center', lineHeight: 1.2 }}>
      Where are you<br/>in the journey?
    </WHand>

    <WText lines={2} />

    {/* 4 tappable stages */}
    {[
      ['🤔', 'Just thinking about it'],
      ['🚀', 'Starting this week'],
      ['😅', 'Mid-training & struggling'],
      ['✨', 'Almost there!'],
    ].map(([e, t], i) => (
      <WBox key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, cursor: 'pointer' }}>
        <div style={{ fontSize: 24 }}>{e}</div>
        <WHand size={17} style={{ flex: 1 }}>{t}</WHand>
        <div style={{ fontFamily: wfFont.hand, fontSize: 20 }}>→</div>
      </WBox>
    ))}

    <WMono size={10} style={{ textAlign: 'center' }}>We'll tailor what we send you based on your tap.</WMono>
  </EmailShell>
);

// ───────────────────────────────────────────
// EMAIL 3 — Social proof + last call
// ───────────────────────────────────────────

const Email3_VariantA = () => (
  <EmailShell
    subject="⏰ Your 10% off expires tomorrow"
    preview="Plus 2,847 parents can't be wrong..."
  >
    <div style={{ textAlign: 'center' }}>
      <WHand size={18}>[ logo ]</WHand>
    </div>

    {/* Urgency banner */}
    <WBox style={{ background: '#fff0ec', borderColor: '#c44', textAlign: 'center', padding: 12 }}>
      <WHand size={18} style={{ color: '#c44' }}>⏰ Expires in 24h</WHand>
      <WMono size={10}>code: WELCOME10</WMono>
    </WBox>

    <WHand size={24} style={{ lineHeight: 1.15 }}>
      Don't just take our word for it.
    </WHand>

    {/* Review cards */}
    {[1,2,3].map(i => (
      <WBox key={i} style={{ padding: 12 }}>
        <WHand size={16} style={{ color: wfColors.accent }}>★★★★★</WHand>
        <WText lines={2} />
        <WMono size={10} style={{ marginTop: 6 }}>— Sarah M., verified buyer</WMono>
      </WBox>
    ))}

    {/* Stats bar */}
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0',
      borderTop: `1.5px dashed ${wfColors.line}`, borderBottom: `1.5px dashed ${wfColors.line}` }}>
      {[['2,847', 'happy parents'], ['4.9★', 'avg rating'], ['98%', 'would recommend']].map(([n, l], i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <WHand size={20}>{n}</WHand>
          <WMono size={9}>{l}</WMono>
        </div>
      ))}
    </div>

    <WBtn primary w="100%">Use code before it expires</WBtn>
  </EmailShell>
);

const Email3_VariantB = () => (
  <EmailShell
    subject="What other parents are saying..."
    preview="Real stories, real results (+ your code inside)"
  >
    <div style={{ textAlign: 'center' }}>
      <WHand size={18}>[ logo ]</WHand>
    </div>

    {/* UGC grid */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {[1,2,3,4].map(i => <WImg key={i} h={110} label={`UGC #${i}`} />)}
    </div>

    <WHand size={22} style={{ lineHeight: 1.2 }}>
      Tagged us on instagram — here's what they said:
    </WHand>

    {/* Tweet/post style */}
    {[1,2].map(i => (
      <WBox key={i} style={{ padding: 12, background: '#fafafa' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: wfColors.muted }} />
          <WMono size={10}>@mom_of_twins</WMono>
        </div>
        <div style={{ height: 6 }} />
        <WText lines={3} />
      </WBox>
    ))}

    {/* Soft CTA with code reminder */}
    <WLine />
    <div style={{ textAlign: 'center' }}>
      <WMono size={10}>still have your code?</WMono>
      <WHand size={20}>WELCOME10 · 10% off</WHand>
    </div>
    <WBtn primary w="100%">Shop now →</WBtn>
  </EmailShell>
);

const Email3_VariantC = () => (
  <EmailShell
    subject="Last chance — we made you a bundle"
    preview="Everything you need to start, with 10% off..."
  >
    <div style={{ textAlign: 'center' }}>
      <WHand size={18}>[ logo ]</WHand>
    </div>

    <WHand size={24} style={{ lineHeight: 1.15 }}>
      We packed it all<br/>into one bundle.
    </WHand>

    <WImg h={180} label="bundle: 3 undies + guide + stickers" />

    {/* Itemized list */}
    <WBox style={{ padding: 12 }}>
      {['3× Training undies', 'Potty training guide (PDF)', 'Reward stickers', 'Free shipping'].map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0',
          borderBottom: i < 3 ? `1px dashed ${wfColors.muted}` : 'none' }}>
          <div style={{ width: 16, height: 16, border: `1.5px solid ${wfColors.line}`,
            borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <WHand size={14}>✓</WHand>
          </div>
          <WHand size={15} style={{ flex: 1 }}>{item}</WHand>
        </div>
      ))}
    </WBox>

    {/* Price comparison */}
    <div style={{ textAlign: 'center' }}>
      <WMono size={12} style={{ textDecoration: 'line-through' }}>$68</WMono>
      <WHand size={32} style={{ color: wfColors.teal }}>$49</WHand>
      <WMono size={10}>with WELCOME10</WMono>
    </div>

    <WBtn primary w="100%">Grab the bundle →</WBtn>
    <WMono size={10} style={{ textAlign: 'center' }}>expires tonight at midnight</WMono>
  </EmailShell>
);

window.Email1_VariantA = Email1_VariantA;
window.Email1_VariantB = Email1_VariantB;
window.Email1_VariantC = Email1_VariantC;
window.Email2_VariantA = Email2_VariantA;
window.Email2_VariantB = Email2_VariantB;
window.Email2_VariantC = Email2_VariantC;
window.Email3_VariantA = Email3_VariantA;
window.Email3_VariantB = Email3_VariantB;
window.Email3_VariantC = Email3_VariantC;
