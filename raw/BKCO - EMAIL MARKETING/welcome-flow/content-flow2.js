/* Flow 2 · Discount Welcome Flow
   4 emails · Code delivery → Mechanism → Story → Guarantee closer
   Audience: signed up via discount popup · code BRIGHT10 valid 7 days
*/

window.FLOW2 = {
  sender: {
    name: "Lena",
    role: "Founder, BrightKidCo",
    greeting: "Lena here",
  },

  /* ══════════════════════════════════════
     EMAIL 1 · Code Delivery · Immediate
     ══════════════════════════════════════ */
  e1: {
    preheader: "Your 10% code is here — no rush, valid for 7 days.",
    subjects: [
      "Your code is here: BRIGHT10",
      "As promised — BRIGHT10 inside",
      "Your 10% code (and a small note)",
    ],

    heroBadge: "Welcome · 01 of 04",
    h1a: "Your code,",
    h1b: "as promised.",

    greeting: "Lena here 👋",
    letterOpening: [
      "You signed up. Here's your 10%.",
      "No countdown. No pressure. Use it when it feels right — the code's good for 7 days.",
    ],

    code: "BRIGHT10",
    codeLabel: "Your welcome code",
    codeNote: "Valid for 7 days · 10% off your first order",

    // Short differentiation paragraph
    differentiationLabel: "Quick note",
    differentiationBody: "BrightKidCo isn't another pull-up with a prettier print. It's training underwear built around how sensory-sensitive children actually learn — not absorb. That's what the next few emails are about.",

    trustpilotRating: "4.9",
    trustpilotLabel: "Trustpilot · 2,400+ reviews",

    whatsNext: {
      label: "What comes next",
      items: [
        { when: "In 36 hours", what: "Why this is structurally different from anything you've tried." },
        { when: "In 4 days", what: "A parent-to-parent story — might feel familiar." },
        { when: "In a week", what: "The 60-day promise, the real reason to start." },
      ],
      footer: "No rush on the code. It'll still be here.",
    },

    ctaIntro: "When you're ready, your code's already loaded.",
    ctaButton: "Shop with BRIGHT10",
    ctaSecondary: "See how it works",
    ctaFinePrint: "7 days · No questions · 60-day guarantee",
  },

  /* ══════════════════════════════════════
     EMAIL 2 · Mechanism · +36 hours
     ══════════════════════════════════════ */
  e2: {
    preheader: "Interoception — the signal most methods miss. Plain words, no jargon.",
    subjects: [
      "Before you use your code — one thing",
      "The part most potty training advice skips",
      "Why rewards couldn't fix what you're seeing",
    ],

    heroBadge: "Welcome · 02 of 04",
    h1a: "Before you use",
    h1b: "BRIGHT10.",

    letterOpening: [
      "Hi again — Lena.",
      "I want to tell you what we wish every parent knew before potty training.",
      "If none of this lands, ignore it and use the code. But for a lot of parents we've worked with, this is the part that finally made things click.",
    ],

    mechanismLabel: "The mechanism",
    mechanismTitle: "Interoception.",
    mechanismDef: "Interoception (in-tair-o-sep-shun): the internal sense that tells your body when it needs to pee. It's a skill — and for sensory-sensitive kids, it develops later, and louder.",
    mechanismBody: [
      "Pull-ups are designed to absorb. That's their job. But absorbing means the signal is muted — your child feels nothing, so they learn nothing.",
      "Regular underwear gives signal, but no containment. That's chaos for a child who already finds transitions hard.",
      "The missing piece isn't motivation. It's a tool that keeps the signal intact and gives everyone room to learn.",
    ],

    comparison: [
      { label: "Pull-ups", bad: "Block the signal.", color: "red" },
      { label: "Regular underwear", bad: "Signal + chaos.", color: "amber" },
      { label: "Body-Signal Layer™", good: "Feedback + containment.", color: "green" },
    ],

    otQuote: {
      body: "The children I see making the fastest progress are the ones whose parents stopped treating potty training as a motivation problem and started treating it as a body-awareness one.",
      by: "Dr. Amara Osei · Pediatric OT, London",
    },

    codeReminderLabel: "Your code is still here",
    codeReminderBody: "BRIGHT10 · 5 days left",

    ctaIntro: "No pressure. The mechanism first, the product whenever you're ready.",
    ctaButton: "See the pants",
    ctaSecondary: "Read the full method",
    ctaFinePrint: "Code auto-applied at checkout · 5 days left",
  },

  /* ══════════════════════════════════════
     EMAIL 3 · Parent Story · +3 days
     ══════════════════════════════════════ */
  e3: {
    preheader: "Tried timers, rewards, OT referrals. What finally changed for her 5-year-old.",
    subjects: [
      "One story, from one parent",
      "After three years of trying everything",
      "A mother whose situation might feel familiar",
    ],

    heroBadge: "Welcome · 03 of 04",
    h1a: "One story.",
    h1b: "One parent.",
    subhead: "This might feel familiar.",

    intro: [
      "I want to tell you about Sarah.",
      "Her son Marcus is five. Autistic. Sensory-sensitive. They'd been potty training on and off for three years when she found us — and she almost didn't write to us, because by then she'd given up hope on products.",
    ],

    chapters: [
      {
        when: "Year 1",
        title: "The timer phase",
        body: "Sarah set a timer every 90 minutes. Marcus sat. Nothing happened. When accidents came, they came at 93 minutes, or 45. The timer wasn't teaching his body anything — it was teaching her anxiety.",
      },
      {
        when: "Year 2",
        title: "The reward chart",
        body: "Stickers. Trains. An iPad. For a week it worked, sort of. Then Marcus figured out the pattern and started asking for rewards without the toilet. Sarah felt like she'd taught him to transact, not to listen to his body.",
      },
      {
        when: "Year 3 · the low point",
        title: "\"He'll never get this\"",
        body: "An OT referral. A six-month waitlist. A birthday party where Marcus asked his grandmother to change his pull-up. Sarah cried in her car and googled \"when do autistic children potty train\" at 11 p.m.",
      },
      {
        when: "What changed",
        title: "Body-Signal Layer™",
        body: "She found BrightKidCo through another parent. She told me later she bought one pair expecting nothing. Day 3, Marcus said \"wet\" — unprompted. Day 11, he told her before. Day 26, he was dry most days. She cried again, different reason.",
      },
    ],

    pullQuote: {
      body: "I'd spent three years trying to motivate him. He didn't need motivation. He needed to feel his own body.",
      by: "Sarah M. · Marcus's mom",
    },

    promiseBadges: [
      { icon: "★", label: "Trustpilot 4.9" },
      { icon: "✿", label: "60-day guarantee" },
      { icon: "◉", label: "Parent-to-parent real" },
    ],

    codeReminderLabel: "Your code is still waiting",
    codeReminderBody: "BRIGHT10 · 2 days left",

    ctaIntro: "If Sarah's story sounds familiar, the pants she used are waiting.",
    ctaButton: "Start with what worked for Sarah",
    ctaSecondary: "Not ready yet — that's okay",
    ctaFinePrint: "Code auto-applied · 2 days left · 60-day calm-progress guarantee",
  },

  /* ══════════════════════════════════════
     EMAIL 4 · Guarantee Closer · +2 days
     ══════════════════════════════════════ */
  e4: {
    preheader: "No questions, no fine print. What's covered when you're afraid of being disappointed again.",
    subjects: [
      "Protected for 60 days — even if your code expires today",
      "Your code expires tomorrow — here's what matters more",
      "When you're ready — the 60-day promise is the real reason",
    ],

    heroBadge: "Welcome · 04 of 04",
    h1a: "Protected,",
    h1b: "even if you wait.",

    letterOpening: [
      "Your code expires tomorrow.",
      "I want to tell you why that matters less than you might think.",
      "Because the real reason to try BrightKidCo isn't the 10% — it's the 60 days.",
    ],

    guaranteeTitle: "The 60-Day",
    guaranteeAccent: "Calm-Progress Guarantee™",
    guaranteeSub: "Sixty days to see if this works for your child. If it doesn't — no questions, no fine print, no \"did you follow the protocol?\" emails. Send them back. We refund.",

    covered: {
      yes: [
        "If your child isn't ready yet",
        "If the pants don't fit your routine",
        "If progress is happening, but slow, and you're unsure",
        "If you just changed your mind",
      ],
      no: [
        "Hidden restocking fees",
        "\"Final sale\" exceptions",
        "Asking you to prove you tried hard enough",
      ],
    },

    counterTestimonial: {
      label: "A return story",
      body: "\"Honestly — the pants didn't work for my son. He wasn't ready yet; that was on timing, not the product. I returned them after 8 weeks. The refund was in my account in three days, no questions. I'll try again next year.\"",
      by: "Priya K. · returned at week 8",
      framing: "We share returns like this because the guarantee isn't marketing. It's the point.",
    },

    codeReminderLabel: "Your code expires tomorrow",
    codeReminderBody: "BRIGHT10 · Last day",
    codeReassure: "But the guarantee applies no matter when you buy. Even without the code.",

    ctaIntro: "Whenever you're ready. Protected, either way.",
    ctaButton: "Start protected",
    ctaSecondary: "Remind me later",
    ctaFinePrint: "60-day calm-progress guarantee · No questions · Real returns",
  },
};
