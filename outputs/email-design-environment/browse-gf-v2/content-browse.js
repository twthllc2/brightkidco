/* Browse Abandonment · GF Cross-Level · Content
   Following wireframe specs from browse-04 copies
   Data shapes match Giuliano primitives: TitleBlock, Letter, CTAClose, Signoff
*/

window.BROWSE = {

  // ═══════════════════════════ E1 — THE SIGNAL (30min) ═══════════════════════════
  e1: {
    preheader: "Whether you've been at this for weeks or years, if your child doesn't feel when they need to go, here's why nothing's worked.",
    subject: "The signal your child can't feel",
    heroBadge: "✦ Browse · 01 of 03",

    // TitleBlock: split headline with gradient accent on part2
    h1a: "The signal",
    h1b: "your child can't feel.",

    // Section 1: inclusive bridge (wireframe: bold serif, 18-20px, the words ARE the visual)
    bridgeLine: "Whether your child is 3 or 10, talks about the potty but won't use it, or has never shown a single sign of feeling wet — if the \"I need to go\" signal doesn't arrive when it should, every method that depends on it was built on the wrong foundation.",

    // Section 1b: 6 recognition anchors (wireframe: stacked vertical, emerald signal-dot bullets)
    anchorEyebrow: "You might see some of these in your house:",
    anchors: [
      "He sits on the toilet for 20 minutes. Nothing happens. You put the pull-up back on and he pees 30 seconds later.",
      "She plays while peeing without noticing. No pause, no reaction, no awareness.",
      "He has never reacted to being wet. Not once. Not in years.",
      "She has been \"almost trained\" multiple times, a week of success, then total regression.",
      "He won't initiate. Ever. Not a single time.",
      "The bathroom itself feels like a battleground, the sounds, the lights, the pressure.",
    ],
    bridgeClosing: "If even one of those sounds like your morning, keep reading.",

    // Section 2: validation (wireframe: text-only, paragraph stack, no box, no border)
    validationEyebrow: "The methods you've tried",
    validationParas: [
      "Sticker charts, social stories, timer sits, scheduled prompts, the BCBA protocol, every book that promises \"your child will train 3 days\" — they all have one thing in common. They assume your child can feel the internal signal that says \"I need to go.\"",
      "For many kids whose nervous systems process signals differently, that signal arrives too late. Or doesn't arrive at all.",
    ],
    validationReframe: "This isn't stubbornness. This isn't defiance. This isn't something you failed to teach.",
    validationKicker: "That's not a parenting gap. That's a signal-timing gap.",

    // Section 3: mechanism (wireframe: 2px emerald left border, citation parenthetical)
    mechanismEyebrow: "It's called interoception.",
    mechanismBody: "The body's ability to sense internal states like hunger, thirst, or a full bladder. Research shows this works differently in children whose nervous systems process signals differently (Barmpagiannis & Baldimtsi 2025, 49-study review). The signal from bladder to brain doesn't travel the way standard methods assume.",

    // Section 4: three-family testimonials (wireframe: cream cards, vertical stack, gold quote marks, no avatars)
    testimonialHeadline: "Three families. Three different kids. One common missing piece.",
    testimonials: [
      {
        name: "Sarah", child: "mom of a verbal 4-year-old",
        quote: "He knew what to do. He just wouldn't do it. We spent months thinking it was behavioral. Turned out, his body was sending the signal, but it was getting there after he'd already gone. The underwear gave his brain the extra seconds it needed."
      },
      {
        name: "Lisa", child: "mom of a 6-year-old with sensory differences",
        quote: "We'd tried every protocol the BCBA gave us. Scheduled sits, reward charts, social narratives, nothing transferred. The missing piece wasn't motivation. It was that his brain wasn't registering the body signal in time."
      },
      {
        name: "Maria", child: "mom of an 8-year-old with high support needs",
        quote: "He never showed a sign. Ever. I'd stopped looking. Then after a few weeks in the body-signal underwear, he paused mid-play. Looked down. For the first time in 8 years, he felt something. He's not trained, but he's feeling. That's more than we'd had before."
      }
    ],
    testimonialsClosing: "The common thread across all three: before the underwear, the signal wasn't getting through. The learning couldn't start because the information couldn't arrive.",

    // Section 5: permission + soft CTA (wireframe: text link, NO filled button)
    ctaPermission: "If any of this sounds like your child, the next step isn't buying anything. The next step is understanding why the signal isn't arriving, and what \"signal arrival\" actually looks like for a nervous system that processes differently.",
    ctaText: "Keep reading →",
    ctaFine: "Next time: Real stories from parents who found the missing piece.",

    // ProductShowcaseSoft (Giuliano pattern: always before CTA)
    productEyebrow: "Built around the signal gap",
    productLine: "BrightKidCo Body-Signal Learning Layer™ — designed to keep the feedback loop intact.",
  },

  // ═══════════════════════════ E2 — THREE PARENTS (24h) ═══════════════════════════
  e2: {
    preheader: "Three parents. Three different kids. One thing they all share.",
    subject: "What 16,511 reviews have in common",
    heroBadge: "✦ Browse · 02 of 03",

    h1a: "Three parents.",
    h1b: "Three different kids.",
    subhead: "One thing they all share.",

    // Section 1: opener + 5 recognition anchors
    opener: "Whether your child is 3 or 10, verbal or not, diagnosed or still figuring it out — if they don't feel when they need to go, these stories will sound familiar.",
    anchors: [
      "He sits on the toilet for 20 minutes. Nothing happens. Then he pees 30 seconds after standing up.",
      "She plays in a wet pull-up without noticing. Doesn't flinch. Doesn't pause.",
      "He \"almost trained\" more than once. You can't figure out what's different this time.",
      "She knows what to do, she'll tell you she needs to go, but it's already happening by the time she says it.",
      "You've stopped counting the attempts. Years of pull-ups, and nothing shifted.",
    ],
    anchorBridge: "If any of those sound like your morning, keep reading.",

    // Section 2-4: three full testimonials (wireframe: banner-style, colored header, 90px sidecar image)
    testimonialLabel: "Three parents. Three different kids. One common thread.",
    testimonials: [
      {
        title: "\"Almost trained\" but not quite",
        name: "Sarah", child: "mom of a 3-year-old",
        quote: "My son is 3. Verbal. He can tell me 'I need to pee', after he's already done it. We tried Oh Crap. Sticker charts. Timer sits. Nothing worked. He'd sit for 20 minutes, get up, and pee on the floor 30 seconds later. I was ready to give up.\n\nAfter a few weeks in BrightKidCo underwear, he paused. Mid-pee, he stopped. Looked down. Then walked to the bathroom. That pause never happened before. It's not perfect, but it's real."
      },
      {
        title: "Sensory, BCBA, still stuck",
        name: "Lisa", child: "mom of a 5-year-old",
        quote: "We've been in ABA for 2 years. BCBA protocol. Timed sits every 45 minutes. He'd go when prompted, but never on his own. The moment we stopped the schedule, the accidents came back.\n\nKelly Mahler talks about interoception as the 'eighth sensory system'. For my son, that system wasn't sending the signal. The underwear gave his brain the feedback it was missing. After a few weeks, he paused before an accident. First time in 4 years."
      },
      {
        title: "Years of nothing, then something",
        name: "Maria", child: "mom of a 9-year-old",
        quote: "My son is 9. He can't tell me in words. In 9 years, he's never shown any awareness of being wet. I made peace with pull-ups forever. It's just where we were.\n\nAfter a couple of months in Body-Signal underwear, he paused. He looked down at the wet spot. Then he walked toward the bathroom. Not trained. But feeling something for the first time. Maureen Bennie's son was 9.5 when he trained. Late is not never."
      }
    ],

    // Section 5: mechanism reveal (wireframe: yellow sticker quote block)
    mechanismLabel: "The common thread across every one of these stories",
    mechanismTitle: "every child was missing the body signal.",
    mechanismBody: "Interoception is the body's ability to sense internal signals, hunger, thirst, bladder fullness. Research shows this works differently in many kids whose nervous systems process signals differently (Barmpagiannis & Baldimtsi 2025, 49-study review).\n\nBody-Signal Learning Layer underwear creates a gentle, sustained \"uh-oh\" sensation, 30 to 60 seconds of feedback that gives the brain time to register: something happened.\n\nSome kids show first signs in 2 weeks. Others need 8 weeks. Both are normal.",

    // Section 6: CTA + permission
    ctaIntro: "Your child, your timeline, your judgment. 60-day guarantee. Full refund if it doesn't fit your child. No pressure either way.",
    ctaText: "See how it works for kids like yours",
    ctaFine: "60-day guarantee · Your judgment · No pressure",

    // Section 7: migration anchors (wireframe: stacked text links →)
    migrationLabel: "If you're wondering whether your child's situation is specific enough:",
    migrationLinks: [
      "→ If your child is \"almost trained\" but it never sticks, Sarah's story might sound familiar.",
      "→ If bathroom smells, sounds, or textures feel like the problem, here's what Lisa learned.",
      "→ If your child is older and has never shown a sign, Maria's experience will tell you what to expect.",
    ],
    migrationFallback: "Not sure where your child fits? That's okay. The general framework works for all kids whose nervous systems process signals differently.",

    // ProductShowcaseSoft
    productEyebrow: "The common thread across every story",
    productLine: "Body-Signal Learning Layer™ — the piece every parent above was missing.",
  },

  // ═══════════════════════════ E3 — 60 DAYS (72h) ═══════════════════════════
  e3: {
    preheader: "60 days to try it. Your judgment. If it doesn't work, full refund.",
    subject: "This might not be right for your child, and that's okay",
    heroBadge: "✦ Browse · 03 of 03",

    h1a: "60 days.",
    h1b: "Your judgment.",
    subhead: "If it doesn't work, full refund. No questions.",

    // Section 1: hook + permission opener
    opener: "Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or you're still figuring it out — if they don't feel when they need to go, you've been working with one hand tied behind your back.\n\nYou came and looked at our underwear a few days ago, and I want to respect whatever you're sitting with right now. Maybe you're still deciding. Maybe you've been burned by enough \"solutions\" that you've learned not to get your hopes up. Either way, that's reasonable.",

    // Section 2: 5 recognition anchors
    anchorEyebrow: "You've probably experienced some version of this:",
    anchors: [
      "He sits on the toilet for 20 minutes, nothing happens, and then pees 30 seconds after you put the pull-up back on.",
      "She plays in a wet diaper like she doesn't even notice. No pause. No reaction. No signal.",
      "He knows the routine but won't initiate on his own, ever.",
      "She's been \"almost trained\" three times now, but it never sticks.",
      "You've been at this for years and can't remember the last time anything changed.",
    ],
    anchorBridge: "If even one of these sounds familiar, keep reading. Not because I'm going to pitch you. Because I want you to know what's going on, so you can decide if it fits your child or not.",

    // Section 3: mechanism + Mahler citation (wireframe: 2px emerald left border)
    mechanismEyebrow: "Here's what we know now that we didn't know five years ago:",
    mechanismBody: "Many kids whose bodies process signals differently can't feel the \"I need to go\" message in time. It's called interoception, the sense that tells your body when you're hungry, thirsty, or need the bathroom (Nicholson et al. 2019; Barmpagiannis & Baldimtsi 2025, 49-study review).\n\nKelly Mahler, the leading researcher in this space, calls interoception the \"eighth sensory system.\" If that signal doesn't arrive, no method that depends on it — sticker charts, timed sits, social stories, Oh Crap — can work for that child. Not because you didn't try hard enough. Because the method was asking for a signal the nervous system couldn't deliver.\n\nThe Body-Signal Learning Layer doesn't train your child. It doesn't prompt, bribe, or time them. It creates a gentle, sustained \"uh-oh\" sensation, 30 to 60 seconds of feedback, that gives the brain the information it's been missing. Some kids start to register that sensation within two weeks. Some take eight weeks. Both are normal.",

    // Section 4: mini-win quotes (wireframe: 3 quotes, gold marks, vertical stack)
    miniWinsEyebrow: "The parents who've tried it describe success in small, real moments:",
    miniWins: [
      { quote: "He looked down at the wet spot for the first time in his life. That never happened before.", by: "Sarah, mom of a 4-year-old" },
      { quote: "She paused mid-play. Looked down at her pants. Then she walked to the bathroom. It was after the fact, but she PAUSED. That was week 4.", by: "Lisa, mom of a 6-year-old" },
      { quote: "He's not trained. But he's tolerating the underwear for the first time. And last week, he pulled at his pants when he was wet. That's more awareness than we've seen in 7 years.", by: "Maria, mom of a 9-year-old" },
    ],
    miniWinsClosing: "Three different kids, three different starting points, three different timelines. The common thread: the body-signal layer started giving the brain information it had been missing.",

    // Section 5: product intro (wireframe: three-layer system textual)
    productEyebrow: "The underwear itself is a three-layer system:",
    productLayers: [
      "Cotton inner layer — creates the signal. Preserves the wet sensation for 30-60 seconds.",
      "Smart absorption layer — protects without wicking the sensation away.",
      "Leak-resistant outer barrier — contains the liquid, no mess.",
    ],
    productWearGuidance: "Wear for one to two hours at a time, no prompting, no pressure. Let the sensation do the teaching.",
    productBundles: "3+3 Bundle: 6 pairs, $79.99, free shipping. Or start with 1 Pair at $34.99.",

    // Section 6: guarantee badge (wireframe: mint bg #DBFFCD, bold 36px "60 days", italic sub-line)
    guaranteeLabel: "Our promise",
    guaranteeHeadline: "60 days.",
    guaranteeSubline: "Your judgment.",
    guaranteeBody: "If your child shows no sign of body awareness — no pause, no look, no change at all — full refund. Not because I expect you to ask for one. Because you should never feel stuck with something that didn't work for your kid.",
    guaranteePoints: [
      { title: "60 full days", body: "Your timeline. Nervous systems don't work on a 30-day calendar." },
      { title: "Your judgment", body: "You decide if it's working. Not us. Not a checklist." },
      { title: "Full refund", body: "No questions. No forms. No proving your child made progress." },
    ],

    // Section 7: CTA (wireframe: filled emerald rectangle, NO arrow, centered, doorplate)
    ctaLabel: "$13.33 per pair with the bundle — less than half the single-pair price.",
    ctaButton: "See how the body-signal layer works",
    ctaFine: "Join 16,511 parents who've tried it · 4.9★ rating",
  },
};

// FLOW1_SHARED — Signoff, OutLine, Footer primitives read from here
window.FLOW1_SHARED = {
  signoff: {
    line1: "With understanding,",
    ps: "P.S. I have two autistic sons. One was 6, the other almost 8 before we figured this out. I know how hard it is to hope again after so many letdowns. 60 days to try it. By your judgment.",
  },
  out: "You can pause this series anytime. Come back when you're ready.",
  footer: {
    tagline: "Calm progress, one day at a time.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com",
  },
};
