/* Welcome GF · 8 Emails · Day 0 → Day 21
   Voice: warm, peer-to-peer, validation-first, symptom-language only
   Signoff: E1 = "BKC team", E2-E8 = "Lena Bauer" (or "Lena,")
   Closing: E1-E2 = "Talk soon", E3-E5 = "With understanding", E6+ = "With care"
*/

window.FLOW_WELCOME_GF = window.FLOW_WELCOME_GF || {};

// ═══════════════════════════════════════════════════════════════
// EMAIL 1 · Day 0, Permission & Reassurance
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e1 = {
  preheader: "Whether they're 3 or 10, verbal or non-verbal, if they don't feel when they need to go, here's why.",
  subject: "Your child might not feel the signal",

  heroBadge: "Part 1 of 8",
  h1a: "If they don't feel",
  h1b: "the signal.",
  subhead: "Why every method you tried assumed something that isn't true for your child's nervous system.",

  hook: [
    "Whether your child is just starting to show signs, or you've been at this for years with every method you can find online, if they don't feel when they need to go, this is why.",
    "You've tried what the books said. What the internet told you. What well-meaning friends suggested: sticker charts, timer sits, the 3-day method, pull-ups that promised an straightforward transition. You tried them all with hope. And none of them worked the way they were supposed to.",
    "That's not because you did something wrong. It's because every one of those methods assumes your child can feel the \"I need to go\" signal.",
  ],

  validation: [
    "If your child's nervous system processes body signals differently, and for many children it does, those methods couldn't work. Not because you weren't consistent enough. Not because your child isn't \"ready.\"",
    "Here's what parents tell us every day:",
    "He doesn't have full bladder awareness yet.",
    "She'll pee herself and just keep playing in the puddle.",
    "Potty training isn't linear.",
    "I feel like a failure because he's still in pull-ups.",
    "You're not a failure. The problem isn't motivation or behavior. It's neurology.",
    "Research shows that many children have what's called an interoception gap, the feeling of a full bladder simply doesn't arrive in time. The signal between body and brain travels on a different frequency (Nicholson et al. 2019).",
  ],

  mechanism: [
    "Research shows that 49% of autistic 4-5 year olds aren't toilet trained yet, a 6-to-1 gap compared to typically developing kids. That's not a parenting gap. It's a measurable neurological difference in how body signals are processed.",
    "The brain-body connection that tells most people \"I need to go\" works differently for your child. But this gap can be addressed. Interoception, the ability to sense internal body states, can be trained with the right approach.",
    "The question isn't \"will my child ever get this?\"",
    "The question is: \"what does my child need for their brain to start receiving the signal?\"",
  ],

  socialProof: [
    { quote: "These past three years have been hell. We tried literally everything. I was ready to give up.", by: "GF parent, early 30s, child 5" },
    { quote: "I absolutely lost it. I yelled at him and smacked his butt. Then I cried for an hour because I felt like a monster. That's when I realized something was wrong with the method, not with him.", by: "GF parent, late 30s, child 4" },
    { quote: "He does great at ABA but won't go near the potty at home. I knew it wasn't defiance, but I couldn't figure out what it was.", by: "GF parent, child 6" },
  ],
  socialProofClosing: "Each of these parents thought they were the only one. Each of them discovered the same thing: their child's body wasn't sending the signal they assumed was there.",

  product: [
    "At BrightKidCo, we designed something different. Not a training method that asks your child to feel something they can't. Not another book or system that assumes the signal is already there.",
    "We designed underwear that creates the signal, a gentle sensation that lasts that gives your child's brain something to connect to.",
    "Our 3-layer Body-Signal Learning System:",
    "Cotton inner layer designed for sensitive skin, soft against nervous systems that process fabric differently.",
    "Smart absorption core, protects surfaces without wicking away the wetness signal that the brain needs to learn.",
    "Gentle outer barrier, leak-resistant without creating the \"too dry\" problem that pull-ups cause.",
    "The science is one-step but powerful: the brain learns through feedback. When the feedback is absent (pull-ups keep your child too dry) or delayed (cotton underwear floods all at once), learning can't happen. Our system creates the right kind of feedback, sustained enough for the brain to register.",
  ],

  guaranteeLabel: "60-DAY GUARANTEE",
  guaranteeAccent: "60-Day.",
  guaranteeSub: "Try it for 60 days. If your child shows any sign of awareness, a pause, a look, a step toward the potty, you'll know the signal is working. If nothing changes, full refund. Your judgment.",
  guaranteePoints: [
    { title: "Your pace", body: "No timers, no pressure, no \"should be trained by now.\"" },
    { title: "Your judgment", body: "If the signal isn't working for your child, you decide. Full refund." },
    { title: "No forms", body: "One email. We refund the same day. No proof of progress required." },
  ],

  ctaText: "See How It Works →",
  ctaHref: "https://www.brightkidco.com/collections/all-products",

  psLine: "If this sounds familiar, keep reading. We'll send you more over the next few days, what the science says, what other parents found, and how you can try the Body-Signal approach.",

  signoffName: "BKC team",
  signoffClosing: "Talk soon",
  signoffMessage: "Thanks for being here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.",

  footerAddress: "BrightKidCo, 123 Commerce Street, Suite 200, Portland, OR 97201",
};

// Shared signoff / footer / out for the whole flow (consumed by Signoff, Footer, OutLine primitives)
window.FLOW_WELCOME_GF_SHARED = {
  signoff: {
    line1: "With you,",
    name: "Lena Bauer",
    ps: "P.S. If you ever want to reply and tell me about your child, I read every one. Really.",
  },
  out: "You can pause this series anytime. Come back when you're ready.",
  footer: {
    tagline: "Calm progress, one day at a time.",
    links: ["Our Method", "Shop the Pants", "Parent Stories"],
    address: "BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com",
  },
};

// Compatibility shim: the shared Signoff primitive reads from window.FLOW1_SHARED
// (it was written for the welcome-flow's flow). For our flow, alias it.
window.FLOW1_SHARED = window.FLOW_WELCOME_GF_SHARED;


// ═══════════════════════════════════════════════════════════════
// EMAIL 2 · Day 1 — Mechanism Reframe (interrupted methods)
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e2 = {
  preheader: "The real reason rewards, timers, and schedules couldn't work, explained in plain language.",
  subject: "Why sticker charts fail some kids",

  heroBadge: "Part 2 of 8",
  h1a: "Why rewards",
  h1b: "couldn't fix this.",

  hook: [
    "Whether your child is 3 or 10, verbal or non-verbal, diagnosed or wondering, if they don't feel when they need to go, every method that assumes they do will fail.",
    "You've tried what the books and the internet told you. Sticker charts. Reward jars. Timer sits. The \"naked weekend.\" Maybe scheduled sits every 30 minutes. And none of it changed the core problem.",
    "That's not because you didn't try hard enough. It's because every one of those methods assumed something that isn't true for your child's nervous system.",
  ],

  letterOpening: [
    "Yesterday we said: you haven't done anything wrong.",
    "Today we want to show you why, with one word most people haven't heard before, and most doctors don't explain in plain language.",
  ],

  mechanism: [
    "Sitting on the potty for 20 minutes and having nothing happen. The reward chart with a full row of stickers, and still no progress. \"He knows he has to go, he just won't.\" I hear versions of this story from parents every single day.",
    "Rewards require awareness. Timers teach a schedule, not a signal. The naked method gives you accidents without a feedback loop the brain can learn from.",
    "Here's why none of those could work: they all assumed your child can feel the \"I need to go\" signal. For many children whose nervous systems process body signals differently, that signal doesn't arrive in time, or at all. You can't reward a signal that isn't reaching the brain yet.",
  ],

  definitionLabel: "The word",
  definitionTitle: "Interoception.",
  definitionBody: [
    "It's the internal sense of what's happening inside your body.",
    "Like knowing you're hungry before you feel hangry. Or that you're thirsty before your mouth goes dry. Or, and this is the one that matters, that your bladder is full, a few seconds before it's too late.",
    "For neurotypical kids, this signal usually comes online somewhere between 18 and 30 months.",
    "For many children whose nervous systems process body signals differently, it develops later, or unevenly, or the signal reaches the brain at the same time the accident is already happening.",
    "That's not a behaviour problem. That's not stubbornness. That's a sensory processing difference.",
  ],

  expertLabel: "From an occupational therapist",
  expertQuote: "Interoceptive awareness is foundational for toileting. Without it, no reward system in the world will help. You have to support the sense itself, not work around it.",
  expertBy: "Paediatric OT, specialising in sensory integration",

  ctaText: "See how body-signal learning works →",
  ctaHref: "https://www.brightkidco.com/collections/all-products",
  ctaFinePrint: "No rush. Read when you're ready.",

  psLine: "Tomorrow's email walks through how each method you've probably tried, and why each one stops short of the thing your child actually needs.",

  signoffName: "Lena Bauer",
  signoffClosing: "Talk soon",
  signoffMessage: "I have two autistic sons. One trained at 6, the other at almost 8. I've been where you are. Take your time.",

  footerAddress: "BrightKidCo GmbH, Berlin, Germany",
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 3 · Day 3, 49% Stat + Mechanism (interoception is the 8th sense)
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e3 = {
  preheader: "The science behind why traditional potty training fails some children, and what actually works.",
  subject: "Almost 1 in 2 kids this age isn't trained",

  heroBadge: "Part 3 of 8",
  h1a: "Three parents.",
  h1b: "Three kids. One thing.",

  hook: [
    "Three parents, three different kids, one common experience:",
    "He talks about the potty. He understands the concept. But when it's time to actually go, nothing.",
    "We've done the OT sensory work, the BCBA protocol, the social stories, the sticker charts. We are stuck.",
    "He's never shown a single sign of feeling wet or dirty. Not once in all these years.",
    "If any of these sound familiar, you're not alone. And you're not failing. You're working with a missing piece most potty training methods don't account for.",
  ],

  stat: {
    number: "49%",
    label: "of autistic 4-5 year olds are not yet toilet trained (Wiggins et al. 2022, CDC-funded study of 743 children).",
    compare: "8% of typically developing kids the same age. That's a 6:1 gap.",
  },

  mechanism: [
    "Every sticker chart and timer sit assumes your child feels the sensation of a full bladder. But research consistently shows many autistic children have a measurable difference in interoception, the eighth sensory system that tells the brain when we're hungry, thirsty, or need the bathroom.",
    "The signal from bladder to brain is delayed or absent. It's not defiance. It's neurology. And here's the part that matters: interoception can be trained. The childhood window is the intervention opportunity.",
  ],

  testimonials: [
    { quote: "He said 'I need to pee' AFTER it's already happened for two years. After two weeks in BrightKidCo underwear, he paused. Then he looked down. Then he walked to the potty. It was small, maybe nothing to someone else. But that never happened before.", by: "Mom of a 5-year-old, Level 2" },
    { quote: "I was skeptical. We'd tried everything. But the 60-day guarantee made me feel safe trying. Week three, she stopped in the middle of playing and touched her underwear. She didn't make it to the bathroom that time. But she FELT it.", by: "Mom of a 4-year-old, Level 1" },
    { quote: "In 9 years, he never once showed awareness of being wet. After a month in these, he looked down. He paused. That was huge for us.", by: "Mom of a 9-year-old, Level 3" },
  ],

  product: [
    "BrightKidCo isn't training underwear in the traditional sense. It's a Body-Signal Learning System built around one principle: the brain needs feedback to learn.",
    "Layer 1: Cotton Inner Layer, creates a gentle, sustained \"uh-oh\" sensation when wet. Not a shock, not an alarm. A 30-60 second window of feedback that gives a nervous system that picks up signals slowly time to register: something happened.",
    "Layer 2: Smart Absorption Core, protects furniture, floors, and clothes without wicking the wetness signal away like a pull-up does. It's the difference between \"too dry to feel\" and \"there's a signal your brain can learn from.\"",
    "Layer 3: Leak-Resistant Outer Barrier, made for real life. Playgrounds. Car seats. Grandma's couch. Because you shouldn't have to choose between body awareness and mess-free days.",
    "This isn't a pull-up replacement. It's a learning tool, designed for the brain that learns differently.",
  ],

  guaranteeLabel: "60-DAY GUARANTEE",
  guaranteeAccent: "60 days.",
  guaranteeSub: "By your judgment. If it doesn't help your child make progress, if you don't see a pause, a look down, a single step toward the bathroom, full refund. No forms. No \"did you try hard enough.\" Your judgment is the only metric that matters.",

  ctaText: "Start with the 3+3 Bundle, €79.99 →",
  ctaHref: "https://www.brightkidco.com/collections/all-products",
  ctaFinePrint: "Or start with 1 pair (€34.99) if you want to try before committing. That's €13.33 per pair with the bundle, less than half the single-pair price.",

  psLine: "Next time: How the Body-Signal Learning Layer works, and why it's different from everything you've tried.",

  signoffName: "Lena Bauer",
  signoffClosing: "With understanding",
  signoffMessage: "I have two autistic sons. One's 6, still working through this. The other took us until he was almost 8. If your kid is anywhere on this curve, whether they talk about it constantly or have never acknowledged being wet, that's normal here. You're not behind. You're not failing. You're exactly where you need to be to find something that actually works differently.",

  footerAddress: "BrightKidCo, 123 Main Street, Suite 100, San Francisco, CA 94102",
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 4 · Day 7, Three-Family Testimonial Proof
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e4 = {
  preheader: "Whether your child is 3 or 10, verbal or non-verbal, diagnosed or still figuring it out, these three families all found the same thing.",
  subject: "Three kids, three stories, one thing in common",

  heroBadge: "Part 4 of 8",
  h1a: "Three kids.",
  h1b: "One thing.",

  hook: [
    "Whether your child is just starting to show signs, or you're years into what feels like every possible method, if they don't feel when they need to go, you've been fighting the wrong battle.",
    "I hear from parents every day who are exhausted, out of ideas, and wondering if this will ever click. Let me introduce you to three families. Three different kids. Three completely different stories. One thing in common.",
  ],

  validation: [
    "If you've ever thought any of these things, you're not alone. You haven't failed. You've been working with advice that wasn't built for your child's nervous system.",
    "I feel like we have tried everything, reward systems, punishments and nothing seems to work.",
    "I feel like a failure because he's still in pull-ups.",
    "Nearly half of autistic 4-5 year olds, 49%, are still not toilet trained (Wiggins et al. 2022, CDC-funded study of 743 children). That's compared to just 8% of typically developing children the same age.",
    "That statistic doesn't mean something is wrong with your child. It means what you're going through is documented, measurable, and far more common than you think.",
  ],

  mechanism: [
    "Here's what all three families have in common: their children weren't getting the body signal.",
    "Interoception, the eighth sensory system, is how your brain knows when you're hungry, thirsty, or need the bathroom. For children with sensory processing differences, this signal is delayed, weakened, or absent. Research confirms this is a real, measurable neurological difference.",
    "The Body-Signal Learning Layer creates that feedback, a gentle sensation that lasts 30-60 seconds after every accident. Enough time for the brain to register: something happened.",
  ],

  testimonials: [
    { family: "Family 1", quote: "My son talks about the potty but won't actually do it. He says 'I need to pee' AFTER it's already happened. We'd been stuck for over a year. After about 3 weeks in these undies, he paused mid-accident. Looked down. Then walked to the potty. That pause, that had never happened before.", by: "Parent of a 4-year-old, mostly verbal, mild sensory differences" },
    { family: "Family 2", quote: "We'd tried everything from the BCBA's protocol to OT sensory work to social stories. Scheduled sits for 2 years, he never went on his own. We didn't expect a product to solve it. But the wetness signal in these undies is different, he can actually feel it. After 6 weeks, he initiated once. Once! After 4 years of nothing.", by: "Parent of a 6-year-old, mixed verbal, moderate support needs" },
    { family: "Family 3", quote: "He's never shown a sign of feeling wet or dry, not once in 9 years. We'd made peace with maybe never. After 8 weeks in the body-signal underwear, he paused. He felt something. That was everything.", by: "Parent of a 9-year-old, non-verbal, high support needs" },
  ],
  testimonialsClosing: "If any of these sound familiar, your child's nervous system isn't broken. It's just not getting the information it needs.",

  product: [
    "The BrightKidCo Body-Signal Learning Layer is a 3-layer system built for sensory-sensitive children:",
    "Layer 1 (Cotton Inner): 100% cotton, the fabric research consistently shows autistic individuals prefer. Creates a gentle, noticeable \"uh-oh\" sensation that lasts 30-60 seconds, sustained enough for a brain that processes signals slowly to register.",
    "Layer 2 (Smart Absorption): Protects furniture and floors without wicking the signal away completely. Unlike pull-ups that keep kids \"too dry to learn,\" this layer gives the brain feedback.",
    "Layer 3 (Outer Barrier): Leak-resistant outer layer so parents can actually leave the house while the body-signal learning happens.",
    "PFAS-free. BPA-free. Designed alongside OT practitioners who understand sensory processing.",
    "For reference: some kids show first signs in 2 weeks. Others need 8 weeks. Both normal. The key is repetition, 30-60 seconds of sensation after every accident, building neural pathways over time.",
  ],

  guaranteeLabel: "60-DAY GUARANTEE",
  guaranteeAccent: "60 days.",
  guaranteeSub: "60 days to try it. By your judgment. If your child shows any sign of awareness, a pause, a look, a step toward the bathroom, you'll know the signal is working. If nothing changes, full refund. No questions. This isn't a promise that every child will train. It's a promise that you get to decide whether it works for your family.",

  ctaText: "Start with the 3+3 Bundle, €79.99 →",
  ctaHref: "https://www.brightkidco.com/collections/all-products",
  ctaFinePrint: "Free shipping. 60-day guarantee. Or start with 1 Pair (€34.99) to try alongside your current routine. That's €13.33 per pair with the bundle.",

  psLine: "Next time: Real stories from parents who've been exactly where you are.",

  signoffName: "Lena Bauer",
  signoffClosing: "With understanding",
  signoffMessage: "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, that's normal here. Reply if anything resonated. I read every one.",

  footerAddress: "BrightKidCo, 123 Main Street, Suite 100, San Francisco, CA 94102",
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 5 · Day 10, Objection Handling (Tried everything / Too old / Hopes up)
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e5 = {
  preheader: "You've tried. It didn't work. That's not failure, that's a signal your methods were aimed at the wrong target.",
  subject: "If this is another letdown, here's the difference",

  heroBadge: "Part 5 of 8",
  h1a: "The method failed you.",
  h1b: "The mechanism won't.",

  hook: [
    "You've tried. Maybe one method. Maybe 40. Sticker charts, timer sits, rewards, naked weekends, the book everyone swears by, the OT's recommendations, the BCBA's protocol. Nothing changed.",
    "You're not alone in that. The most common phrase we hear from parents? \"I've tried everything.\"",
    "And when you've heard that from yourself enough times, a new email promising something different doesn't feel hopeful. It feels like setup for another disappointment.",
  ],

  objections: [
    { header: "\"I've tried everything. Why would this be different?\"", body: "Because every method you tried assumed your child can feel the \"I need to go\" signal. Research shows that for many children whose nervous systems process body signals differently, that signal doesn't arrive in time, or at all (Nicholson et al. 2019)." },
    { header: "\"What if I get my hopes up again?\"", body: "That fear is earned. Every product promises. Every method disappoints. I've been there, both my sons went through this. My older one was almost 8 before he trained. So I don't say this lightly: this isn't about hoping. It's about giving your child's nervous system the information it's been missing." },
    { header: "\"Is my child too old, or too severely affected, for this to work?\"", body: "Whether your child is 3 or 10, verbal or non-verbal, diagnosed or still wondering, if they don't feel when they need to go, the mechanism addresses the gap, not the label." },
  ],

  reframe: [
    "The reason nothing worked isn't that you didn't try hard enough. It's that every method assumed the signal exists.",
    "Pull-ups keep kids completely dry, which means the one feedback the brain needs never arrives. Sticker charts depend on body awareness many children don't yet possess. You weren't fighting the wrong battle, you were fighting the right battle with the wrong tools.",
  ],

  mechanism: [
    "This is where BrightKidCo is different. The body-signal underwear doesn't require your child to feel anything they don't already feel. It creates the sensation.",
    "Three layers, one purpose: Layer 1, soft cotton that creates a gentle \"uh-oh\" sensation when wet. Layer 2, smart absorption that protects without wicking the signal away. Layer 3, leak-resistant outer barrier that contains the mess.",
    "When your child wears them: Child pees. Feels a gentle, sustained \"uh-oh\". Brain registers: something happened. Over time, the brain learns to recognize the signal before the event.",
    "Research shows interoception can be improved with targeted intervention. The Body-Signal Learning Layer creates the conditions for that training to happen naturally.",
    "This isn't about turning every bathroom moment into a learning exercise. It's about creating a consistent 30-60 second feedback window, every single time your child has an accident. The repetition is what teaches the brain. Pull-ups, by contrast, give zero feedback.",
  ],

  socialProof: [
    { quote: "After 3 years of nothing, not even a pause, he looked down at the wet spot. First time. It was two seconds. But it was something.", by: "Real parent review, BKC customer" },
    { quote: "I was skeptical. Another product. Another promise. But after 2 weeks, he walked to the bathroom. Not consistently. But he DID it. That never happened before.", by: "Real parent review, BKC customer" },
  ],
  socialProofStat: "16,511 reviews. 4.9 stars. Not because every child trains overnight, but because for the first time, something is happening. Even if it's small.",

  product: [
    "The 3+3 Bundle gives you 6 pairs of Body-Signal Learning Underwear, enough for a full rotation so your child gets consistent, daily feedback. Cotton inner, smart absorption core, leak-resistant outer. 60-day guarantee. Free shipping.",
    "Or start with 1 pair (€34.99) to see if it works for your child before committing to more. No pressure either way.",
  ],

  guaranteeLabel: "60-DAY GUARANTEE",
  guaranteeAccent: "60 days.",
  guaranteeSub: "You don't have to believe me. 60 days to try. If your child shows no sign of body awareness, no pause, no look, no step toward the bathroom, full refund. No questions. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.",

  ctaText: "Try the 3+3 Bundle, €79.99 →",
  ctaHref: "https://www.brightkidco.com/collections/all-products",
  ctaFinePrint: "Or start with 1 pair (€34.99). Free shipping. 60-day guarantee. That's €13.33 per pair with the bundle.",

  psLine: "Next time: Why pull-ups might be the one thing holding your child back.",

  signoffName: "Lena Bauer",
  signoffClosing: "With understanding",
  signoffMessage: "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. If your kid is anywhere on this curve, that's normal here. If you have a question, hit reply. You'll get me, not a template, not a bot. I read everything.",

  footerAddress: "BrightKidCo, 123 Commerce Street, Suite 200, Nashville, TN 37201",
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 6 · Day 14, Pull-Ups Reframe ("Too dry to learn")
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e6 = {
  preheader: "The moisture-wicking tech parents pay a premium for might be the exact thing preventing progress.",
  subject: "The €50/month product keeping them too dry",

  heroBadge: "Part 6 of 8",
  h1a: "Too dry",
  h1b: "to learn.",

  hook: [
    "Whether your child has been in pull-ups for three months or three years, if they never seem to notice when they're wet, there's a reason for that.",
    "And it's probably not what you think.",
    "Pull-ups are designed to keep kids completely dry. That's literally their job. But here's the catch: that moisture-wicking technology parents pay a premium for, €50 to €100+ every single month, was built for neurotypical kids who can already feel the \"I need to go\" signal. For those kids, staying dry during training is a helpful feature.",
    "For your child? It might be the very thing keeping them stuck.",
  ],

  validation: [
    "The wetness signal is the only feedback your child's brain can use to learn body awareness. Research shows autistic children process internal body signals differently, the \"I need to go\" feeling either arrives too late or doesn't register at all (Nicholson et al., 2019). The CDC-funded SPARK study found that 49% of autistic 4-5 year olds aren't toilet trained yet (Wiggins et al., 2022).",
    "That's not a parenting failure. That's a measurable neurological gap.",
    "Pull-ups remove the one piece of feedback the brain needs. They wick moisture away so effectively that your child stays \"too dry to learn.\" The signal that should teach the body-brain connection never arrives.",
    "She'll pee herself and just keep playing in the puddle. It's like she doesn't care AT ALL.",
    "She does care. Her brain just isn't getting the message.",
  ],

  mechanism: [
    "The body-signal underwear works opposite to pull-ups.",
    "Instead of wicking moisture away, the inner cotton layer creates a gentle, sustained awareness, a soft \"uh-oh\" sensation that lasts 30-60 seconds after every accident. Just noticeable enough that the brain can finally register: Something happened. I felt it.",
    "This is the feedback loop pull-ups were silently blocking.",
    "Layer 1, Inner Cotton: Gentle \"uh-oh\" sensation. Teaches the brain: this is what wet feels like.",
    "Layer 2, Smart Absorption: Absorbs 3x more than regular undies. Protects without blocking awareness.",
    "Layer 3, Protective Barrier: Leak-resistant outer layer. Saves furniture and clothes.",
    "BrightKidCo costs a fraction of what you're spending on disposables every month. And it's doing the opposite of what pull-ups do: it's teaching, not hiding.",
  ],

  testimonials: [
    { quote: "She started doing better once I eased up on the stressing out about her not getting it.", by: "Lynne C., real parent" },
    { quote: "Potty training isn't linear. Some days are great. Others aren't. That's not starting over, that's how learning happens.", by: "From our community" },
  ],

  guaranteeLabel: "60-DAY GUARANTEE",
  guaranteeAccent: "60 days.",
  guaranteeSub: "This is the honest part: every child's nervous system is different. Some kids show first awareness in 2 weeks. For others it takes 8 weeks or more. Both are normal. That's why the 60-Day Guarantee exists. Try the Body-Signal approach for 60 days. If you see any sign of awareness, a pause, a look down, a step toward the potty, you'll know the signal is working. If nothing changes, full refund. Your judgment.",

  ctaText: "Shop the 3+3 Bundle, €79.99, Free Shipping →",
  ctaHref: "https://www.brightkidco.com/collections/all-products",
  ctaFinePrint: "That's €13.33 per pair with the bundle, less than half the single-pair price.",

  psLine: "P.S. The average parent spends €600-1,200/year on pull-ups. One BrightKidCo pair costs less than two weeks of disposables, and it actually teaches body awareness instead of blocking it.",

  signoffName: "Lena Bauer",
  signoffClosing: "With care",
  signoffMessage: "I have two autistic sons. One's 6, still in the middle of it. The other took us until he was almost 8. I know what it's like to look at a pull-up package and wonder if you're making the right call, or to buy something new and feel the same disappointment when nothing changes. I'm not here to sell you hope. I'm here to explain how the signal works, and let you decide if it's right for your child.",

  footerAddress: "BrightKidCo, 1234 Commerce Street, Suite 200, Los Angeles, CA 90017",
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 7 · Day 17, Deep Mechanism + Mini-Win Testimonials
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e7 = {
  preheader: "The 'uh-oh' sensation explained, and why it bridges the gap other methods can't reach.",
  subject: "How the body-signal learning actually works",

  heroBadge: "Part 7 of 8",
  h1a: "Training wheels",
  h1b: "for the body signal.",

  hook: [
    "Whether your child is 3 or 10, verbal or non-verbal, newly diagnosed or you're still figuring it out, if they don't seem to feel when they need to go, you've probably wondered: why?",
    "And more importantly: what actually helps?",
    "You've seen the terms. Interoception, body signals, sensory processing. Maybe you've read about the \"eighth sensory system\" from Kelly Mahler. Maybe a friend mentioned something about wetness-signal learning. Maybe you just heard a mom in a Facebook group say, \"We tried these underwear and something clicked.\"",
    "But let's be honest: all of that can feel like noise when you're on day 973 of washing pee-soaked pants.",
    "So let me explain, simply, directly, no jargon, how body-signal learning actually works. So you can decide if it's real, or if it's just another product with big claims.",
  ],

  validation: [
    "First: you're not wrong about what's happening.",
    "If your child doesn't react to being wet, or reacts too late, that's not stubbornness. It's not defiance. And it's definitely not your parenting.",
    "Research shows that over 90% of autistic children have sensory processing differences (Leekam et al. 2007; Ben-Sasson et al. 2009). One of the most impactful is interoception, the sense that tells your body \"I need to go to the bathroom,\" \"I'm hungry,\" \"I'm thirsty.\"",
    "For many children whose nervous systems process signals differently, that signal either arrives too late or doesn't arrive at all.",
    "One mom put it like this: He'll start to pee and THeeeen run (while peeing).",
    "Another: He's been 'almost trained' for months.",
    "That timing gap, the signal arriving milliseconds after the event, is the real problem. Not motivation. Not understanding. The signal itself.",
  ],

  mechanism: [
    "Here's how body-signal learning underwear actually works, and why it's different from every other method you've tried.",
    "The core insight: Traditional potty training assumes your child can feel the \"I need to go\" signal. But for children with body signal differences, that signal doesn't arrive reliably. Research shows the deficit is in accuracy, not absence. The signal is there, it's just not registering at the right time.",
    "This is why timed methods fail. You can't build awareness with a clock when the brain isn't receiving the data.",
    "The Body-Signal Learning Layer (BSL):",
    "Layer 1, Signal Creation: A gentle, sustained \"uh-oh\" sensation that lasts 30-60 seconds. Unlike pull-ups that wick moisture away instantly, the BSL layer lets the sensation linger, long enough for the brain to register: something happened.",
    "Layer 2, Smart Absorption: Protects furniture and clothing without blocking the learning signal.",
    "Layer 3, Leak-Resistant Barrier: Contains accidents without feeling like a diaper.",
    "Think of it like training wheels for the body signal system. The underwear doesn't teach your child to feel. It gives their brain the information it needs, consistently, until the neural pathways start to form on their own.",
  ],

  testimonials: [
    { quote: "He stayed dry for 2 hours. That never happened before.", by: "L1 parent" },
    { quote: "She told me BEFORE for the first time.", by: "L1 parent" },
    { quote: "He initiated. Once. After 4 years, that was everything.", by: "L2 parent" },
    { quote: "He paused. He looked down. Then he walked to the potty. Small, but that never happened before.", by: "Cross-level testimonial" },
    { quote: "I've made peace with maybe never. But after 8 weeks, he felt something. And that's more than we had in 9 years.", by: "L3 parent" },
  ],
  testimonialsClosing: "Common thread across every one of these stories: The first sign isn't \"fully trained.\" It's a pause. A look. A step toward the bathroom. A moment of awareness where before there was nothing. For some kids, that first sign comes in 2 weeks. For others, it takes 8 weeks or more. Both are normal. The research confirms interoception can be trained (Hample, Mahler & Amspacher 2020), but it happens on your child's timeline, not a calendar.",

  product: [
    "The 3+3 Bundle gives you 6 pairs of body-signal learning underwear, enough for a proper rotation so you're not doing laundry every single day while your child's nervous system learns to recognize the signal.",
    "What you get: 6 pairs (3 cotton inner + 3 smart absorption layers), free shipping (€79.99 total), 60-day risk-free trial, sizes for children ages 3-10+.",
    "Or start with 1 pair (€34.99), try it alongside your current routine. No replacement. Just an addition to see if the \"uh-oh\" sensation makes a difference for your child.",
  ],

  guaranteeLabel: "60-DAY GUARANTEE",
  guaranteeAccent: "60 days.",
  guaranteeSub: "60 days to try it. By your judgment. If your child shows no sign of body awareness, no pause, no look, no step toward the potty, no change in their awareness pattern, full refund. No questions. No returns needed for the first pair. The guarantee isn't a sales tactic. It's the only honest thing to offer when the outcome depends on your child's nervous system.",

  ctaText: "Try the 3+3 Bundle, €79.99 →",
  ctaHref: "https://www.brightkidco.com/collections/all-products",
  ctaFinePrint: "Free shipping. 60-day guarantee. Your judgment. Not ready for 6 pairs? Start with 1 Pair (€34.99). That's €13.33 per pair with the bundle, less than half the single-pair price.",

  psLine: "Next time: One last thought before you decide.",

  signoffName: "Lena Bauer",
  signoffClosing: "With care",
  signoffMessage: "I have two autistic sons. One trained at 6, the other at almost 8. I've been where you are, and I know the difference between \"I'm interested\" and \"I've been burned before.\" If you have a question, about the mechanism, the timing, whether this is right for your child, hit reply. You'll get me, not a bot. Whatever you decide, this email won't be the last you hear from me. The product will be here next month. So will I.",

  footerAddress: "BrightKidCo, 123 Commerce Street, Suite 200, Nashville, TN 37201",
};


// ═══════════════════════════════════════════════════════════════
// EMAIL 8 · Day 21, Soft Close / Final Offer
// ═══════════════════════════════════════════════════════════════
window.FLOW_WELCOME_GF.e8 = {
  preheader: "Whether your child shows no signs at all or just needs a little extra time, we made this easy.",
  subject: "One last thing before you decide",

  heroBadge: "Part 8 of 8",
  h1a: "Whatever you",
  h1b: "decide, that's okay.",

  hook: [
    "You've been reading these emails for three weeks. Maybe you've bookmarked a page. Maybe you've talked to your partner. Maybe you've watched your child and thought, \"I'm still not sure.\"",
    "That's exactly where you're supposed to be.",
  ],

  recap: [
    { label: "Why some children don't feel the signal", body: "It's not training. It's neurology. Research shows many children with sensory differences have diminished body awareness. The \"I need to go\" signal doesn't arrive in time, or at all." },
    { label: "Why pull-ups block the one thing your child needs", body: "They wick away the very sensation that teaches the brain. The body-signal layer needs feedback to learn." },
    { label: "How the Body-Signal Learning Layer works", body: "A gentle sensation that lasts that gives the nervous system 30-60 seconds to register: something happened. That's the window most children never get." },
    { label: "The 60-day guarantee", body: "Try it. By your judgment. If it doesn't work for your child, full refund. No questions. No pressure." },
  ],
  recapClosing: "If any of this sounds familiar, if your child doesn't seem to feel when they need to go, if pull-ups are the only thing that works but you know they're not teaching, if you've tried methods that assume a signal that just isn't there, then you know exactly why this approach is different.",

  migrationLabel: "MORE DETAILED ASSESSMENT",
  migrationText: "If your child sounds like any of these descriptions, click here for a more detailed assessment. This short quiz helps us match your child's specific needs to the right approach, whether they're just starting to show signs or you've been at this for years. It takes two minutes.",
  migrationHref: "https://www.brightkidco.com/pages/level-assessment",

  offer: {
    primary: {
      label: "1 Pair",
      price: "€34.99",
      note: "60-Day Guarantee, No Pressure.",
      cta: "Start With 1 Pair, €34.99 →",
      href: "https://www.brightkidco.com/collections/all-products",
    },
    secondary: {
      label: "3+3 Bundle",
      price: "€79.99",
      note: "Free Shipping.",
      cta: "3+3 Bundle, €79.99 →",
      href: "https://www.brightkidco.com/collections/all-products",
      rationale: "Six pairs means you're never washing mid-week. Three days of wear, three in the laundry. At €79.99 with free shipping, that's €13.33 per pair, and they last through multiple children.",
    },
  },

  signoffName: "Lena Bauer",
  signoffClosing: "With care",
  signoffMessage: "Whatever you choose, thanks for reading this far. If this isn't the day, that's okay. The product will be here next month. So will I. I have two autistic sons. I know what it's like when \"later\" turns into another year. But I also know what it's like to push too early. Trust your read. P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. 60 days, your judgment. No pressure.",

  footerAddress: "BrightKidCo, 123 Commerce Street, Suite 200, Portland, OR 97201",
};
