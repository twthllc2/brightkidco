/* FAQ/Objection Library — E1 | Cross-Level
   Wireframe: wireframes/faq-library/faq-21-e1.md
   Copy: copy/faq-library/faq-21-e1.md
   Flow 21 · FAQ Library · Day 1
   Generated: 2026-06-09
*/

const Email_faq_21_e1 = () => (
  <EmailShell
    preheader="16,511 reviews. 4.9★. 49% of 4-5 year olds aren't trained. Here's what that means."
    bg={B.paper}
  >
    {/* ─── SECTION 2: Header ─── */}
    <Header bg={B.paper} />
    <div style={{ textAlign: 'center', padding: '0 0 12px', background: B.paper }}>
      <span
        style={{
          fontFamily: F.main,
          fontSize: '14px',
          color: B.soft,
          letterSpacing: '0.3px',
        }}
      >
        Lena from BrightKidCo
      </span>
    </div>

    {/* ─── SECTION 3: HERO-11 Question Storm ─── */}
    <div style={{ background: B.paper, padding: '44px 22px 0' }}>
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '10.5px',
          color: B.teal,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textAlign: 'center',
          fontWeight: 700,
          marginBottom: '12px',
        }}
      >
        YOU'VE TRIED EVERYTHING
      </div>

      {/* Headline */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '28px',
          color: B.ink,
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.25,
          marginBottom: '28px',
          maxWidth: '380px',
          margin: '0 auto 28px',
        }}
      >
        Why nothing worked — and what was missing
      </div>

      {/* Puzzle SVG Illustration */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <svg
          width="420"
          height="240"
          viewBox="0 0 420 240"
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
        >
          {/* Cream background */}
          <rect x="0" y="0" width="420" height="240" rx="16" fill={B.cream} />

          {/* Puzzle piece 1 - top left */}
          <g transform="translate(60, 30)">
            <rect x="0" y="0" width="110" height="80" rx="6" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            {/* Tab right */}
            <circle cx="110" cy="40" r="14" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            <rect x="98" y="30" width="14" height="20" fill="#E2DDD4" />
            {/* Tab bottom */}
            <circle cx="55" cy="80" r="14" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            <rect x="45" y="68" width="20" height="14" fill="#E2DDD4" />
            {/* Inner detail */}
            <rect x="16" y="16" width="20" height="20" rx="3" fill={B.teal} opacity="0.3" />
            <rect x="44" y="40" width="14" height="14" rx="3" fill={B.green} opacity="0.25" />
          </g>

          {/* Puzzle piece 2 - top right */}
          <g transform="translate(250, 30)">
            <rect x="0" y="0" width="110" height="80" rx="6" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            {/* Tab left */}
            <circle cx="0" cy="40" r="14" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            <rect x="-2" y="30" width="14" height="20" fill="#E2DDD4" />
            {/* Tab bottom */}
            <circle cx="55" cy="80" r="14" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            <rect x="45" y="68" width="20" height="14" fill="#E2DDD4" />
            {/* Inner detail */}
            <rect x="30" y="16" width="20" height="20" rx="3" fill={B.teal} opacity="0.3" />
            <rect x="60" y="40" width="14" height="14" rx="3" fill={B.green} opacity="0.25" />
          </g>

          {/* Puzzle piece 3 - bottom left */}
          <g transform="translate(60, 140)">
            <rect x="0" y="0" width="110" height="80" rx="6" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            {/* Tab right */}
            <circle cx="110" cy="40" r="14" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            <rect x="98" y="30" width="14" height="20" fill="#E2DDD4" />
            {/* Tab top */}
            <circle cx="55" cy="0" r="14" fill="#E2DDD4" stroke={B.soft} strokeWidth="1.5" />
            <rect x="45" y="-2" width="20" height="14" fill="#E2DDD4" />
            {/* Inner detail */}
            <rect x="20" y="24" width="18" height="18" rx="3" fill={B.teal} opacity="0.3" />
            <rect x="56" y="36" width="12" height="12" rx="3" fill={B.green} opacity="0.25" />
          </g>

          {/* Missing piece slot - center (green gap) */}
          <g transform="translate(250, 140)">
            <rect x="0" y="0" width="110" height="80" rx="6" fill={B.green} opacity="0.25" stroke={B.green} strokeWidth="2" strokeDasharray="6 4" />
            {/* Tab left */}
            <circle cx="0" cy="40" r="14" fill={B.green} opacity="0.25" stroke={B.green} strokeWidth="2" strokeDasharray="6 4" />
            <rect x="-2" y="30" width="14" height="20" fill={B.green} opacity="0.25" />
            {/* Tab top */}
            <circle cx="55" cy="0" r="14" fill={B.green} opacity="0.25" stroke={B.green} strokeWidth="2" strokeDasharray="6 4" />
            <rect x="45" y="-2" width="20" height="14" fill={B.green} opacity="0.25" />
            {/* Question mark */}
            <text
              x="55"
              y="50"
              textAnchor="middle"
              fontFamily={F.main}
              fontSize="32"
              fontWeight="700"
              fill={B.green}
              opacity="0.6"
            >
              ?
            </text>
          </g>

          {/* Scattered small puzzle shapes */}
          <rect x="30" y="110" width="16" height="12" rx="2" fill={B.cream} stroke={B.soft} strokeWidth="1" opacity="0.6" />
          <rect x="380" y="100" width="14" height="10" rx="2" fill={B.cream} stroke={B.soft} strokeWidth="1" opacity="0.5" />
          <rect x="200" y="20" width="10" height="8" rx="1.5" fill={B.cream} stroke={B.soft} strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      {/* Subhead */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '17px',
          color: B.soft,
          textAlign: 'center',
          lineHeight: 1.5,
          maxWidth: '370px',
          margin: '0 auto',
          paddingBottom: '8px',
        }}
      >
        Whether you've tried 2 things or 12, here's the one thing most methods assume exists — that doesn't yet.
      </div>
    </div>

    {/* ─── SECTION 4: DESDEEP-3 Card Cascade Divider ─── */}
    <div style={{ background: B.paper, height: '40px', textAlign: 'center', overflow: 'hidden' }}>
      <svg
        width="420"
        height="40"
        viewBox="0 0 420 40"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', margin: '0 auto' }}
      >
        {/* Scattered small rectangles converging to center */}
        <rect x="80" y="6" width="22" height="16" rx="3" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.7" />
        <rect x="130" y="10" width="18" height="14" rx="3" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.6" />
        <rect x="180" y="12" width="16" height="12" rx="2" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.5" />
        {/* Center green dot */}
        <circle cx="210" cy="20" r="5" fill={B.green} opacity="0.8" />
        {/* Right side pieces */}
        <rect x="224" y="12" width="16" height="12" rx="2" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.5" />
        <rect x="272" y="10" width="18" height="14" rx="3" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.6" />
        <rect x="320" y="6" width="22" height="16" rx="3" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.7" />
      </svg>
    </div>

    {/* ─── SECTION 5: LETTER-03 Letter + Pull-Quote ─── */}
    <div style={{ background: B.paper, padding: '0 22px 44px' }}>
      {/* Paragraph 1 */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '16px',
          color: B.ink,
          lineHeight: 1.7,
          marginBottom: '28px',
        }}
      >
        Whether you've tried 2 things or 12. Whether you're 3 weeks into wondering or 3 years into trying. If your child doesn't feel when they need to go, sits on the toilet and nothing happens, plays in a wet pull-up without noticing, never initiates, or 'almost trained' multiple times, then here's the one thing most methods assume exists. That doesn't yet.
      </div>

      {/* Pull Quote */}
      <div
        style={{
          fontFamily: F.display,
          fontSize: '20px',
          fontStyle: 'italic',
          color: B.ink,
          textAlign: 'center',
          lineHeight: 1.5,
          margin: '0 auto 28px',
          maxWidth: '350px',
          padding: '20px 0',
          borderTop: `1px solid ${B.cream}`,
          borderBottom: `1px solid ${B.cream}`,
        }}
      >
        The piece that's missing isn't another method. It's the signal.
      </div>

      {/* Validation heading */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '16px',
          fontWeight: 700,
          color: B.ink,
          marginBottom: '8px',
        }}
      >
        Here's what every parent who's 'tried everything' has in common:
      </div>

      {/* Validation paragraph */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '16px',
          fontWeight: 700,
          color: B.ink,
          marginBottom: '28px',
        }}
      >
        You didn't fail. You solved the wrong problem.
      </div>

      {/* Methods Block - B.cream bg, 3px B.green left border */}
      <div
        style={{
          background: B.cream,
          borderLeft: `3px solid ${B.green}`,
          padding: '24px 20px',
          borderRadius: '0 10px 10px 0',
          marginBottom: '28px',
        }}
      >
        <div
          style={{
            fontFamily: F.main,
            fontSize: '15px',
            color: B.ink,
            lineHeight: 1.7,
            marginBottom: '16px',
          }}
        >
          Standard potty training methods — Oh Crap, sticker charts, timer sits, social stories, BCBA protocols, ABA schedules — they all depend on one thing your child may not have yet: the ability to feel the 'I need to go' message from their body.
        </div>
        <div
          style={{
            fontFamily: F.main,
            fontSize: '15px',
            color: B.ink,
            lineHeight: 1.7,
            marginBottom: '12px',
          }}
        >
          Research from Nicholson et al. (2019) shows many autistic children have something called diminished body awareness. The brain-body connection for internal signals — bladder fullness, thirst, the need to go — doesn't arrive the way traditional methods assume it does.
        </div>
        <div
          style={{
            fontFamily: F.main,
            fontSize: '13px',
            color: B.muted,
          }}
        >
          Nicholson et al. 2019
        </div>
      </div>

      {/* Recognition Anchors */}
      {[
        'He sits 20 minutes, nothing happens. Then pees 30 seconds after standing up.',
        'She doesn\'t react to wetness at all, keeps playing, doesn\'t flinch.',
        'He says \'I need to go\' after it\'s already happening, or can\'t tell you at all.',
        'She\'s \'almost trained\' for months. Multiple times.',
      ].map((text, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              minWidth: '12px',
              borderRadius: '50%',
              background: B.teal,
              marginTop: '4px',
            }}
          />
          <div
            style={{
              fontFamily: F.main,
              fontSize: '15px',
              color: B.ink,
              lineHeight: 1.6,
            }}
          >
            {text}
          </div>
        </div>
      ))}
    </div>

    {/* ─── SECTION 6: 1px Rule ─── */}
    <div style={{ height: '1px', background: '#E8E2DA', width: '100%' }} />

    {/* ─── SECTION 7: EDU-4 Myth vs Fact ─── */}
    <div style={{ background: B.paper, padding: '44px 22px' }}>
      {/* Stat Callout Box */}
      <div
        style={{
          border: `1px solid rgba(43, 174, 180, 0.3)`,
          borderRadius: '12px',
          padding: '24px',
          background: B.paper,
          marginBottom: '32px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: F.main,
            fontSize: '48px',
            fontWeight: 800,
            color: B.teal,
            lineHeight: 1,
            marginBottom: '8px',
          }}
        >
          49%
        </div>
        <div
          style={{
            fontFamily: F.main,
            fontSize: '15px',
            color: B.ink,
            lineHeight: 1.5,
            marginBottom: '12px',
          }}
        >
          of autistic 4-5 year olds aren't toilet trained yet — a 6-to-1 gap compared to typically developing kids.
        </div>
        <div
          style={{
            fontFamily: F.main,
            fontSize: '12px',
            color: B.muted,
            lineHeight: 1.4,
          }}
        >
          CDC-funded SPARK study of 743 children
          <br />
          Wiggins et al. 2022
        </div>
      </div>

      {/* Myth vs Fact Grid */}
      <div
        style={{
          border: `2px solid ${B.ink}`,
          borderRadius: '12px',
          background: B.cream,
          overflow: 'hidden',
          marginBottom: '32px',
        }}
      >
        {/* Row 1 */}
        <div
          style={{
            display: 'flex',
            borderBottom: `1px solid ${B.ink}`,
          }}
        >
          <div
            style={{
              flex: '0 0 40%',
              fontFamily: F.main,
              fontSize: '14px',
              fontWeight: 700,
              color: B.ink,
              padding: '16px',
              borderRight: `1px solid ${B.ink}`,
              background: B.paper,
            }}
          >
            "You tried everything"
          </div>
          <div
            style={{
              flex: 1,
              fontFamily: F.main,
              fontSize: '14px',
              color: B.ink,
              padding: '16px',
              lineHeight: 1.5,
            }}
          >
            49% of 4-5 year olds aren't trained. This is documented, not personal.
          </div>
        </div>
        {/* Row 2 */}
        <div
          style={{
            display: 'flex',
            borderBottom: `1px solid ${B.ink}`,
          }}
        >
          <div
            style={{
              flex: '0 0 40%',
              fontFamily: F.main,
              fontSize: '14px',
              fontWeight: 700,
              color: B.ink,
              padding: '16px',
              borderRight: `1px solid ${B.ink}`,
              background: B.paper,
            }}
          >
            "It's a parenting problem"
          </div>
          <div
            style={{
              flex: 1,
              fontFamily: F.main,
              fontSize: '14px',
              color: B.ink,
              padding: '16px',
              lineHeight: 1.5,
            }}
          >
            Body signal differences are settled science. 49 studies confirm this.
          </div>
        </div>
        {/* Row 3 */}
        <div style={{ display: 'flex' }}>
          <div
            style={{
              flex: '0 0 40%',
              fontFamily: F.main,
              fontSize: '14px',
              fontWeight: 700,
              color: B.ink,
              padding: '16px',
              borderRight: `1px solid ${B.ink}`,
              background: B.paper,
            }}
          >
            "You need another method"
          </div>
          <div
            style={{
              flex: 1,
              fontFamily: F.main,
              fontSize: '14px',
              color: B.ink,
              padding: '16px',
              lineHeight: 1.5,
            }}
          >
            Every method that assumes a working signal was built on the wrong foundation.
          </div>
        </div>
      </div>

      {/* Pull Quote */}
      <div
        style={{
          fontFamily: F.display,
          fontSize: '18px',
          fontStyle: 'italic',
          color: B.ink,
          textAlign: 'center',
          lineHeight: 1.5,
          marginBottom: '8px',
        }}
      >
        If your child's nervous system processes body signals differently, every method that assumes a working signal was built on the wrong foundation.
      </div>
      <div
        style={{
          fontFamily: F.main,
          fontSize: '12px',
          color: B.muted,
          textAlign: 'center',
        }}
      >
        Barmpagiannis & Baldimtsi 2025
      </div>
    </div>

    {/* ─── SECTION 8: DESDEEP-3 Transition ─── */}
    <div style={{ background: B.paper, height: '32px', textAlign: 'center', overflow: 'hidden' }}>
      <svg
        width="420"
        height="32"
        viewBox="0 0 420 32"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', margin: '0 auto' }}
      >
        <rect x="100" y="8" width="14" height="10" rx="2" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.6" />
        <rect x="160" y="10" width="12" height="8" rx="2" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.5" />
        <circle cx="210" cy="16" r="4" fill={B.green} opacity="0.7" />
        <rect x="248" y="10" width="12" height="8" rx="2" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.5" />
        <rect x="306" y="8" width="14" height="10" rx="2" fill={B.cream} stroke="#E2DDD4" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>

    {/* ─── SECTION 9: Product Showcase (Custom) ─── */}
    <div style={{ background: B.paper, padding: '0 22px 44px' }}>
      <div
        style={{
          background: B.paper,
          border: `2px solid ${B.ink}`,
          borderRadius: '24px',
          boxShadow: `0 6px 0 ${B.ink}`,
          overflow: 'hidden',
        }}
      >
        {/* Hero image area */}
        <div style={{ padding: '20px 20px 0' }}>
          <ImgFrame height={280} label="HERO SHOT" radius="20px">
            <img
              src="../../raw/product-photos/flat-lay/diaper-woodland-creature-yellow.jpg"
              alt="BrightKidCo Body-Signal Diaper - Woodland Creature Yellow"
              style={{
                width: '420px',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block',
              }}
            />
          </ImgFrame>
        </div>

        {/* Content area */}
        <div style={{ padding: '24px 24px 28px' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: F.main,
              fontSize: '10.5px',
              color: B.teal,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '8px',
              fontWeight: 700,
            }}
          >
            THE BODY-SIGNAL APPROACH
          </div>

          {/* Title */}
          <div
            style={{
              fontFamily: F.main,
              fontSize: '22px',
              fontWeight: 700,
              color: B.ink,
              lineHeight: 1.3,
              marginBottom: '16px',
            }}
          >
            What's different about this approach?
          </div>

          {/* Body text */}
          <div
            style={{
              fontFamily: F.main,
              fontSize: '15px',
              color: B.ink,
              lineHeight: 1.7,
              marginBottom: '14px',
            }}
          >
            The Body-Signal Learning Layer doesn't rely on a signal your child hasn't developed yet. It creates one.
          </div>

          {/* Detail */}
          <div
            style={{
              fontFamily: F.main,
              fontSize: '15px',
              color: B.ink,
              lineHeight: 1.7,
              marginBottom: '14px',
            }}
          >
            A gentle sensation that lasts — 30 to 60 seconds of awareness time — that gives the brain the input it's been missing.
          </div>

          {/* Contrast */}
          <div
            style={{
              fontFamily: F.main,
              fontSize: '15px',
              color: B.soft,
              lineHeight: 1.7,
              marginBottom: '20px',
            }}
          >
            Pull-ups and regular underwear both fail here: one wicks everything away, the other overwhelms with a brief intense sensation that passes before the brain can register it.
          </div>

          {/* Feature pills */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '20px',
            }}
          >
            {['◉ Body-Signal Layer™', '✓ 60-day guarantee', '♡ Sensory-friendly'].map(
              (pill, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: F.main,
                    fontSize: '13px',
                    color: B.ink,
                    background: B.cream,
                    border: `1px solid #E2DDD4`,
                    borderRadius: '999px',
                    padding: '6px 14px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {pill}
                </span>
              ),
            )}
          </div>

          {/* CTA Button */}
          <a
            href="#"
            style={{
              display: 'block',
              background: B.teal,
              color: '#D8F57C',
              fontFamily: F.main,
              fontSize: '15px',
              fontWeight: 700,
              textAlign: 'center',
              textDecoration: 'none',
              borderRadius: '999px',
              padding: '16px 24px',
              marginBottom: '14px',
            }}
          >
            See if it fits your child
          </a>

          {/* Tagline */}
          <div
            style={{
              fontFamily: F.display,
              fontSize: '17px',
              fontStyle: 'italic',
              color: B.ink,
              textAlign: 'center',
            }}
          >
            This isn't training. It's signal-building.
          </div>
        </div>
      </div>
    </div>

    {/* ─── SECTION 10: SP-08 Stacked Mini-Reviews ─── */}
    <div style={{ background: B.paper, padding: '0 22px 44px' }}>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Quote 1 - Lena */}
        <div
          style={{
            flex: 1,
            background: B.cream,
            borderRadius: '16px',
            border: `2px solid ${B.ink}`,
            boxShadow: `0 6px 0 ${B.ink}`,
            padding: '20px 16px',
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                minWidth: '12px',
                borderRadius: '50%',
                background: B.teal,
                opacity: 0.5,
                marginTop: '3px',
              }}
            />
            <div
              style={{
                fontFamily: F.main,
                fontSize: '13px',
                color: B.ink,
                lineHeight: 1.5,
                fontStyle: 'italic',
              }}
            >
              My older son was 8 before he trained. Not 3. Not 4. Eight.
            </div>
          </div>
          <div
            style={{
              fontFamily: F.main,
              fontSize: '13px',
              color: B.muted,
              fontStyle: 'italic',
            }}
          >
            — Lena, mom of two autistic sons
          </div>
        </div>

        {/* Quote 2 - Sarah */}
        <div
          style={{
            flex: 1,
            background: B.cream,
            borderRadius: '16px',
            border: `2px solid ${B.ink}`,
            boxShadow: `0 6px 0 ${B.ink}`,
            padding: '20px 16px',
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                minWidth: '12px',
                borderRadius: '50%',
                background: B.teal,
                opacity: 0.5,
                marginTop: '3px',
              }}
            />
            <div
              style={{
                fontFamily: F.main,
                fontSize: '13px',
                color: B.ink,
                lineHeight: 1.5,
                fontStyle: 'italic',
              }}
            >
              I'd tried everything — Oh Crap, sticker charts, a $2,500 private consultant. Nothing. Then in Week 3 of just wearing the underwear, he paused mid-play. Looked down. Walked to the potty. First independent initiation ever.
            </div>
          </div>
          <div
            style={{
              fontFamily: F.main,
              fontSize: '13px',
              color: B.muted,
              fontStyle: 'italic',
            }}
          >
            — Sarah, GF parent, child 5
          </div>
        </div>

        {/* Quote 3 - Lisa */}
        <div
          style={{
            flex: 1,
            background: B.cream,
            borderRadius: '16px',
            border: `2px solid ${B.ink}`,
            boxShadow: `0 6px 0 ${B.ink}`,
            padding: '20px 16px',
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                minWidth: '12px',
                borderRadius: '50%',
                background: B.teal,
                opacity: 0.5,
                marginTop: '3px',
              }}
            />
            <div
              style={{
                fontFamily: F.main,
                fontSize: '13px',
                color: B.ink,
                lineHeight: 1.5,
                fontStyle: 'italic',
              }}
            >
              He sat 20 minutes, nothing. Then peed 30 seconds after standing up. Every single time. The underwear changed that — not by training him, but by teaching his body to feel the signal.
            </div>
          </div>
          <div
            style={{
              fontFamily: F.main,
              fontSize: '13px',
              color: B.muted,
              fontStyle: 'italic',
            }}
          >
            — Lisa, L2 parent, child 6
          </div>
        </div>
      </div>

      {/* Bridge copy */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '15px',
          color: B.ink,
          textAlign: 'center',
          lineHeight: 1.6,
          marginTop: '24px',
          maxWidth: '370px',
          margin: '24px auto 0',
        }}
      >
        Each of these parents thought they'd tried everything. Each discovered the same thing: the signal was never there.
      </div>
    </div>

    {/* ─── SECTION 11: TRUST-5 Promise Badges ─── */}
    <div style={{ background: B.paper, padding: '0 22px 44px' }}>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        {[
          { icon: '✿', text: '60-Day Guarantee' },
          { icon: '💰', text: 'Full Refund · No questions' },
          { icon: '📩', text: 'Reply to Lena · I read everything' },
        ].map((badge, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: B.cream,
              borderRadius: '12px',
              border: `2px solid ${B.green}`,
              padding: '16px 12px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                color: B.teal,
                marginBottom: '8px',
              }}
            >
              {badge.icon}
            </div>
            <div
              style={{
                fontFamily: F.main,
                fontSize: '13px',
                color: B.ink,
                lineHeight: 1.4,
              }}
            >
              {badge.text}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ─── SECTION 12: CTA-11 Permission CTA ─── */}
    <div style={{ background: B.paper, padding: '0 22px 44px' }}>
      {/* Intro */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '17px',
          color: B.ink,
          lineHeight: 1.6,
          marginBottom: '12px',
        }}
      >
        If this makes sense for your child, even a little, the 3+3 Bundle is $79.99 with free shipping and a 60-Day Guarantee.
      </div>

      {/* Body */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '15px',
          color: B.soft,
          lineHeight: 1.6,
          marginBottom: '24px',
        }}
      >
        Try it for 60 days. By your judgment. If it doesn't work, full refund.
      </div>

      {/* CTA Button */}
      <a
        href="#"
        style={{
          display: 'block',
          background: B.teal,
          color: '#D8F57C',
          fontFamily: F.main,
          fontSize: '15px',
          fontWeight: 700,
          textAlign: 'center',
          textDecoration: 'none',
          borderRadius: '999px',
          height: '52px',
          lineHeight: '52px',
          width: '380px',
          maxWidth: '100%',
          margin: '0 auto 16px',
        }}
      >
        See if the body-signal approach fits your child
      </a>

      {/* Price note */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '13px',
          color: B.muted,
          fontStyle: 'italic',
          textAlign: 'center',
          marginBottom: '12px',
          lineHeight: 1.5,
        }}
      >
        That's $13.33 per pair with the bundle — less than half the single-pair price.
      </div>

      {/* Guarantee */}
      <div
        style={{
          fontFamily: F.main,
          fontSize: '13px',
          color: B.muted,
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        60-Day Guarantee: Try the underwear for 60 days. If you don't see the first signals, a pause, a look down, a pull at the pants, return for a full refund. Your call.
      </div>
    </div>

    {/* ─── SECTION 13: 1px Rule ─── */}
    <div style={{ height: '1px', background: '#E8E2DA', width: '100%' }} />

    {/* ─── SECTION 14: Signoff (FAQ Variant - Custom) ─── */}
    <div style={{ background: B.ink, padding: '0 22px 36px' }}>
      <div
        style={{
          background: '#1F2A2C',
          border: '1.5px solid #2F3D40',
          borderRadius: '22px',
          padding: '26px 24px 24px',
        }}
      >
        {/* Top accent gradient bar */}
        <div
          style={{
            height: '4px',
            background: B.gradient,
            borderRadius: '4px 4px 0 0',
            margin: '-26px -24px 20px',
            width: 'calc(100% + 48px)',
          }}
        />

        {/* Avatar */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, #FFD866 0%, ${B.teal} 100%)`,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              color: B.paper,
              fontWeight: 700,
              fontFamily: F.display,
            }}
          >
            L
          </div>
        </div>

        {/* A note from eyebrow */}
        <div
          style={{
            fontFamily: F.main,
            fontSize: '11px',
            color: '#8FAFB2',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            textAlign: 'center',
            marginBottom: '4px',
          }}
        >
          A note from
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: F.main,
            fontSize: '17px',
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '4px',
          }}
        >
          Lena S.
        </div>

        {/* Role */}
        <div
          style={{
            fontFamily: F.main,
            fontSize: '12px',
            color: '#8FAFB2',
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Customer Support · Mom of two autistic sons
        </div>

        {/* Dashed divider */}
        <div
          style={{
            borderTop: '1.5px dashed #3A4547',
            marginBottom: '20px',
          }}
        />

        {/* Personal text */}
        <div
          style={{
            fontFamily: F.main,
            fontSize: '15px',
            color: '#B8CACD',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}
        >
          On the other hand, if today isn't the right day, that's a real answer. The product will be here when you are. So will I. Reply to this email and tell me about your child. I read everything.
        </div>

        {/* With understanding, */}
        <div
          style={{
            fontFamily: F.main,
            fontSize: '12px',
            color: '#B8CACD',
            marginBottom: '4px',
          }}
        >
          With understanding,
        </div>

        {/* Lena signature with flourish */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
          <div
            style={{
              fontFamily: 'Caveat',
              fontSize: '42px',
              color: '#D8F57C',
              lineHeight: 1,
            }}
          >
            Lena
          </div>
          {/* Flourish SVG */}
          <svg
            width="60"
            height="12"
            viewBox="0 0 60 12"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', marginTop: '-4px' }}
          >
            <path
              d="M2 8 Q15 2, 30 6 Q45 10, 58 4"
              fill="none"
              stroke="#D8F57C"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Another dashed divider */}
        <div
          style={{
            borderTop: '1.5px dashed #3A4547',
            marginBottom: '16px',
          }}
        />

        {/* P.S. */}
        <div
          style={{
            fontFamily: F.main,
            fontSize: '13px',
            color: '#8FAFB2',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: '#B8CACD' }}>P.S.</strong> 16,511 parents left a review. 4.9★ average. Not because every child trained, but because parents finally had an answer to 'why nothing worked.' Read a few if you're not sure yet.
        </div>
      </div>
    </div>

    {/* ─── SECTION 15: OutLine + Footer ─── */}
    <OutLine bg={B.paper} />
    <Footer />
  </EmailShell>
);

Object.assign(window, { Email_faq_21_e1 });
