/* SVG Illustration Library for BrightKidCo emails
   All illustrations work as:
   - HERO scenes (full-width, 400x240 ratio)
   - SECTION images (any size, aspect-preserving)

   Style: friendly, rounded, kid-brand, using brand teal + green + warm accents.
   These are character-strong illustrations — NOT "placeholder look".
   Each is a React component that accepts {width, height, bg}.
*/

// =============================================================
// HERO 1 · "Gentle Morning" — parent + child silhouettes, sunrise
// =============================================================
const Illu_GentleMorning = ({ bg = "#FFE8D6" }) => (
  <svg viewBox="0 0 400 240" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="240" fill={bg} />
    {/* sun */}
    <circle cx="320" cy="80" r="46" fill="#FFD866" />
    <circle cx="320" cy="80" r="46" fill="url(#sunGlow)" opacity="0.3" />
    <defs>
      <radialGradient id="sunGlow">
        <stop offset="0%" stopColor="#FFF4C4" />
        <stop offset="100%" stopColor="#FFD866" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#2BAEB4" />
        <stop offset="100%" stopColor="#5DD07A" />
      </linearGradient>
    </defs>
    {/* soft hills */}
    <path d="M0,200 Q80,170 160,190 T400,180 L400,240 L0,240 Z" fill="#5DD07A" opacity="0.25" />
    <path d="M0,220 Q100,200 200,215 T400,210 L400,240 L0,240 Z" fill="#2BAEB4" opacity="0.2" />
    {/* parent */}
    <g transform="translate(140,100)">
      <circle cx="20" cy="20" r="18" fill="#3D2E1E" />
      <path d="M 2,42 Q 20,38 38,42 L 42,120 L -2,120 Z" fill="url(#grad1)" />
    </g>
    {/* child */}
    <g transform="translate(190,140)">
      <circle cx="14" cy="14" r="12" fill="#6B4A2E" />
      <path d="M 2,28 Q 14,26 26,28 L 30,80 L -2,80 Z" fill="#FFD866" />
    </g>
    {/* hands touching */}
    <circle cx="180" cy="200" r="4" fill="#FFE0C4" />
    {/* stars/sparkles */}
    <g fill="#FFD866">
      <circle cx="60" cy="50" r="3" />
      <circle cx="90" cy="90" r="2" />
      <circle cx="40" cy="130" r="2.5" />
      <circle cx="350" cy="150" r="2" />
    </g>
  </svg>
);

// =============================================================
// HERO 2 · "Letter & Envelope" — opened letter, sunny
// =============================================================
const Illu_Letter = ({ bg = "#E8F5EC" }) => (
  <svg viewBox="0 0 400 240" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="240" fill={bg} />
    {/* confetti dots */}
    <g>
      <circle cx="40" cy="40" r="3" fill="#2BAEB4" />
      <circle cx="350" cy="50" r="4" fill="#FFD866" />
      <circle cx="80" cy="180" r="3" fill="#5DD07A" />
      <circle cx="330" cy="190" r="3" fill="#FFB5A0" />
      <rect x="60" y="80" width="6" height="6" fill="#C8B5E8" transform="rotate(30 63 83)" />
      <rect x="340" y="130" width="6" height="6" fill="#5DD07A" transform="rotate(-20 343 133)" />
    </g>
    {/* envelope back */}
    <rect x="80" y="70" width="240" height="140" rx="8" fill="#FFFFFF" stroke="#1F2D2F" strokeWidth="2" />
    {/* letter */}
    <rect x="100" y="55" width="200" height="140" rx="6" fill="#FFFBF2" stroke="#1F2D2F" strokeWidth="2" transform="rotate(-3 200 125)" />
    <g transform="rotate(-3 200 125)">
      <line x1="120" y1="85" x2="280" y2="85" stroke="#D4C4A0" strokeWidth="1.5" />
      <line x1="120" y1="100" x2="260" y2="100" stroke="#D4C4A0" strokeWidth="1.5" />
      <line x1="120" y1="115" x2="270" y2="115" stroke="#D4C4A0" strokeWidth="1.5" />
      <line x1="120" y1="130" x2="240" y2="130" stroke="#D4C4A0" strokeWidth="1.5" />
      {/* sealed heart */}
      <circle cx="260" cy="165" r="14" fill="#2BAEB4" />
      <path d="M253,163 c0,-4 8,-4 7,2 c0,-6 8,-6 7,-2 c0,4 -7,9 -7,9 c0,0 -7,-5 -7,-9 z" fill="#FFFFFF" />
    </g>
    {/* envelope flap */}
    <path d="M80,70 L200,140 L320,70 Z" fill="#E8F5EC" stroke="#1F2D2F" strokeWidth="2" />
  </svg>
);

// =============================================================
// HERO 3 · "Quiet Bedroom" — soft room, teddy, pants on floor
// =============================================================
const Illu_QuietRoom = ({ bg = "#EEE8F6" }) => (
  <svg viewBox="0 0 400 240" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="240" fill={bg} />
    {/* window */}
    <rect x="140" y="30" width="120" height="80" rx="60" fill="#FFF8E4" stroke="#1F2D2F" strokeWidth="2" />
    <line x1="200" y1="30" x2="200" y2="110" stroke="#1F2D2F" strokeWidth="2" />
    <line x1="140" y1="70" x2="260" y2="70" stroke="#1F2D2F" strokeWidth="2" />
    {/* floor line */}
    <line x1="0" y1="180" x2="400" y2="180" stroke="#1F2D2F" strokeWidth="1.5" opacity="0.3" />
    {/* teddy */}
    <g transform="translate(80,140)">
      <circle cx="0" cy="20" r="6" fill="#B8825E" />
      <circle cx="32" cy="20" r="6" fill="#B8825E" />
      <rect x="2" y="25" width="28" height="26" rx="10" fill="#B8825E" />
      <circle cx="16" cy="22" r="8" fill="#D4A482" />
      <circle cx="13" cy="20" r="1.5" fill="#1F2D2F" />
      <circle cx="19" cy="20" r="1.5" fill="#1F2D2F" />
      <ellipse cx="16" cy="25" rx="1.5" ry="1" fill="#1F2D2F" />
    </g>
    {/* folded pants */}
    <g transform="translate(260,160)">
      <path d="M0,0 L60,0 L58,28 L2,28 Z" fill="#2BAEB4" stroke="#1F2D2F" strokeWidth="1.5" />
      <path d="M24,4 L36,4 L34,24 L26,24 Z" fill="#1A8A90" />
    </g>
    {/* little plant */}
    <g transform="translate(330,130)">
      <rect x="0" y="28" width="22" height="20" rx="3" fill="#FFD866" stroke="#1F2D2F" strokeWidth="1.5" />
      <path d="M11,28 Q5,10 11,0 Q17,10 11,28" fill="#5DD07A" />
    </g>
    {/* moon/star */}
    <circle cx="60" cy="60" r="4" fill="#FFD866" />
    <circle cx="360" cy="90" r="3" fill="#FFFFFF" />
  </svg>
);

// =============================================================
// HERO 4 · "Hand Holding" — close crop of adult hand + child hand
// =============================================================
const Illu_Hands = ({ bg = "#FFF2D8" }) => (
  <svg viewBox="0 0 400 240" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="240" fill={bg} />
    {/* big curvy shapes - abstract warmth */}
    <path d="M0,0 Q 200,60 400,0 L400,120 Q 200,80 0,120 Z" fill="#FFE0A8" opacity="0.6" />
    {/* adult hand */}
    <g transform="translate(120,80)">
      <path d="M0,60 Q-10,30 10,20 Q10,0 30,0 Q40,-5 50,5 Q70,-5 75,10 Q95,0 100,20 Q120,15 115,40 Q120,80 80,100 L20,100 Z" fill="#F5C49A" stroke="#1F2D2F" strokeWidth="2" />
    </g>
    {/* child hand - smaller, on top */}
    <g transform="translate(180,140)">
      <path d="M0,40 Q-5,20 10,15 Q10,0 20,2 Q30,-3 35,5 Q48,-2 52,10 Q65,5 62,25 Q68,50 40,60 L15,60 Z" fill="#FFD6B0" stroke="#1F2D2F" strokeWidth="2" />
    </g>
    {/* tiny sparkle */}
    <g fill="#2BAEB4">
      <circle cx="320" cy="70" r="4" />
      <circle cx="70" cy="180" r="3" />
    </g>
  </svg>
);

// =============================================================
// HERO 5 · "Underwear Product" — pants on hanger/flat-lay
// =============================================================
const Illu_ProductPants = ({ bg = "#E8F0FC" }) => (
  <svg viewBox="0 0 400 240" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="240" fill={bg} />
    {/* cloud backdrop */}
    <ellipse cx="200" cy="130" rx="180" ry="80" fill="#FFFFFF" opacity="0.6" />
    {/* three pairs in a row */}
    {[0, 1, 2].map(i => {
      const colors = ["#2BAEB4", "#FFD866", "#5DD07A"];
      const x = 80 + i * 90;
      return (
        <g key={i} transform={`translate(${x},90)`}>
          {/* pant shape */}
          <path d="M0,0 Q0,-10 10,-10 L50,-10 Q60,-10 60,0 L56,50 Q54,58 48,58 L35,58 Q30,48 30,40 Q30,48 25,58 L12,58 Q6,58 4,50 Z" fill={colors[i]} stroke="#1F2D2F" strokeWidth="2" />
          {/* waistband */}
          <rect x="0" y="-10" width="60" height="10" rx="2" fill="#1F2D2F" opacity="0.25" />
          {/* small logo dot */}
          <circle cx="30" cy="15" r="3" fill="#FFFFFF" opacity="0.8" />
        </g>
      );
    })}
    {/* ground line */}
    <line x1="40" y1="180" x2="360" y2="180" stroke="#1F2D2F" strokeWidth="1" opacity="0.2" />
    {/* confetti */}
    <circle cx="50" cy="50" r="3" fill="#FFD866" />
    <circle cx="350" cy="60" r="3" fill="#2BAEB4" />
    <circle cx="360" cy="200" r="3" fill="#FFB5A0" />
  </svg>
);

// =============================================================
// HERO 6 · "Paper Airplane" — a gentle note journey
// =============================================================
const Illu_Airplane = ({ bg = "#D4F0E4" }) => (
  <svg viewBox="0 0 400 240" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="240" fill={bg} />
    {/* dashed path */}
    <path d="M 30,200 Q 100,80 200,140 T 380,50" stroke="#2BAEB4" strokeWidth="2" fill="none" strokeDasharray="4,6" />
    {/* airplane */}
    <g transform="translate(350,50) rotate(-15)">
      <path d="M0,0 L50,15 L30,20 L50,35 L0,25 L20,15 Z" fill="#FFFFFF" stroke="#1F2D2F" strokeWidth="2" />
      <line x1="20" y1="15" x2="30" y2="20" stroke="#1F2D2F" strokeWidth="2" />
    </g>
    {/* clouds */}
    <g fill="#FFFFFF" opacity="0.9">
      <ellipse cx="80" cy="60" rx="30" ry="12" />
      <ellipse cx="250" cy="80" rx="26" ry="10" />
      <ellipse cx="320" cy="180" rx="32" ry="12" />
    </g>
    {/* hearts trail */}
    <g fill="#FFB5A0">
      <circle cx="120" cy="150" r="3" />
      <circle cx="180" cy="130" r="3.5" />
      <circle cx="260" cy="110" r="3" />
    </g>
  </svg>
);

// =============================================================
// SECTION · "Signal" — icon showing body-signal concept
// =============================================================
const Illu_Signal = ({ bg = "#E8F5EC" }) => (
  <svg viewBox="0 0 400 180" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid meet">
    <rect width="400" height="180" fill={bg} />
    {/* figure */}
    <g transform="translate(180,50)">
      <circle cx="20" cy="20" r="16" fill="#6B4A2E" />
      <path d="M 4,40 Q 20,36 36,40 L 40,90 L 0,90 Z" fill="#2BAEB4" />
      {/* signal waves from belly */}
      <g fill="none" stroke="#5DD07A" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
        <path d="M -30,65 Q -35,60 -30,55" />
        <path d="M -40,65 Q -50,60 -40,50" opacity="0.6" />
        <path d="M -50,65 Q -65,60 -50,45" opacity="0.4" />
      </g>
      <g fill="none" stroke="#5DD07A" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
        <path d="M 70,65 Q 75,60 70,55" />
        <path d="M 80,65 Q 90,60 80,50" opacity="0.6" />
        <path d="M 90,65 Q 105,60 90,45" opacity="0.4" />
      </g>
      {/* brain/signal dot */}
      <circle cx="20" cy="60" r="5" fill="#FFD866" />
    </g>
  </svg>
);

// =============================================================
// SECTION · "Sensory" — tag, fabric feel
// =============================================================
const Illu_Sensory = ({ bg = "#FFF2D8" }) => (
  <svg viewBox="0 0 400 180" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid meet">
    <rect width="400" height="180" fill={bg} />
    {/* soft fabric wave */}
    <path d="M 40,100 Q 100,60 200,100 T 360,100 L 360,160 Q 260,140 200,160 Q 140,140 40,160 Z" fill="#FFD866" stroke="#1F2D2F" strokeWidth="2" />
    {/* stitching dashes */}
    <path d="M 40,100 Q 100,60 200,100 T 360,100" stroke="#1F2D2F" strokeWidth="1.5" strokeDasharray="3,4" fill="none" opacity="0.5" />
    {/* cut-out tag with X through it */}
    <g transform="translate(280,30)">
      <path d="M0,0 L40,0 L50,15 L40,30 L0,30 Z" fill="#FFFFFF" stroke="#1F2D2F" strokeWidth="2" />
      <circle cx="8" cy="15" r="2.5" fill="none" stroke="#1F2D2F" strokeWidth="1.5" />
      <line x1="-6" y1="40" x2="56" y2="-10" stroke="#E86464" strokeWidth="3" strokeLinecap="round" />
    </g>
    {/* heart */}
    <g transform="translate(80,50)">
      <path d="M15,20 C10,15 0,12 0,5 C0,0 5,-3 10,0 C12,-1 15,-1 15,2 C15,-1 18,-1 20,0 C25,-3 30,0 30,5 C30,12 20,15 15,20 Z" fill="#FFB5A0" stroke="#1F2D2F" strokeWidth="1.5" />
    </g>
  </svg>
);

// =============================================================
// SECTION · "Calm Sun" — small accent image
// =============================================================
const Illu_CalmSun = ({ bg = "#FFFFFF" }) => (
  <svg viewBox="0 0 400 140" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid meet">
    <rect width="400" height="140" fill={bg} />
    {/* horizon */}
    <circle cx="200" cy="140" r="60" fill="#FFD866" />
    <circle cx="200" cy="140" r="80" fill="#FFD866" opacity="0.3" />
    <circle cx="200" cy="140" r="100" fill="#FFD866" opacity="0.15" />
    {/* sun rays */}
    <g stroke="#1F2D2F" strokeWidth="1.5" strokeLinecap="round" fill="none">
      <line x1="200" y1="30" x2="200" y2="50" />
      <line x1="130" y1="70" x2="145" y2="80" />
      <line x1="270" y1="70" x2="255" y2="80" />
      <line x1="90" y1="110" x2="110" y2="115" />
      <line x1="310" y1="110" x2="290" y2="115" />
    </g>
    {/* face */}
    <circle cx="184" cy="130" r="2" fill="#1F2D2F" />
    <circle cx="216" cy="130" r="2" fill="#1F2D2F" />
    <path d="M 190,138 Q 200,144 210,138" stroke="#1F2D2F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

// =============================================================
// SECTION · "Quote Badge" — round stamp style
// =============================================================
const Illu_QuoteBadge = ({ bg = "#F5F1EA" }) => (
  <svg viewBox="0 0 400 160" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid meet">
    <rect width="400" height="160" fill={bg} />
    <g transform="translate(200,80)">
      <circle r="52" fill="#FFD866" stroke="#1F2D2F" strokeWidth="2" />
      <path d="M -20,-10 Q -20,-20 -10,-20 L -4,-20 Q 0,-20 0,-16 Q 0,-8 -8,-4 L -10,-4 L -8,2 L -18,2 L -22,-4 Q -20,-8 -20,-10 Z" fill="#1F2D2F" />
      <path d="M 8,-10 Q 8,-20 18,-20 L 24,-20 Q 28,-20 28,-16 Q 28,-8 20,-4 L 18,-4 L 20,2 L 10,2 L 6,-4 Q 8,-8 8,-10 Z" fill="#1F2D2F" />
      <path d="M -30,14 Q 0,28 30,14" stroke="#1F2D2F" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

window.Illus = {
  GentleMorning: Illu_GentleMorning,
  Letter: Illu_Letter,
  QuietRoom: Illu_QuietRoom,
  Hands: Illu_Hands,
  ProductPants: Illu_ProductPants,
  Airplane: Illu_Airplane,
  Signal: Illu_Signal,
  Sensory: Illu_Sensory,
  CalmSun: Illu_CalmSun,
  QuoteBadge: Illu_QuoteBadge,
};
