#!/usr/bin/env python3
"""Build a static HTML version of winback-b-24-e3-l3 and render screenshots."""
import os

OUT_DIR = "/root/projects/brightkidco/outputs/verification/winback-b"
HTML_PATH = os.path.join(OUT_DIR, "winback-b-24-e3-l3-static.html")

html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=420">
<title>winback-b-24-e3-l3</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{background:#f0f0f0}
#root{width:420px;margin:0 auto;font-family:'Questrial',Arial,sans-serif}
a{color:#4A6568;text-decoration:underline}
</style>
</head>
<body>
<div id="root">
<!-- PREHEADER -->
<div style="padding:6px 20px;font-size:11px;color:#8A9B9D;background:#F6F2EA;text-align:center;font-style:italic">
Preheader: This my last email unless you tell me otherwise. The door stays open either way. Whenever you're ready, if ever.
</div>

<!-- MINIMAL HEADER -->
<div style="background:#FFFFFF;padding:16px 24px;border-bottom:1px solid #DBFFCD">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;color:#1F2D2F;text-transform:uppercase">
BrightKidCo
</div>
</div>

<!-- 48px SPACING -->
<div style="height:48px;background:#FBF7F1"></div>

<!-- SECTION 1: RECOGNITION HOOK -->
<div style="background:#FFFFFF;padding:24px;font-family:'Questrial',Arial,sans-serif;font-size:17px;line-height:1.6;color:#1F2D2F">
<p style="margin:0 0 16px">You've been at this longer than most of us can imagine.</p>
<p style="margin:0 0 16px">I don't know exactly where you are with potty training, whether you've stepped back completely, whether you still think about it sometimes, or whether you've made a kind of peace with where things are. I do know that you signed up for these emails, and that means at some point, you were looking for something different.</p>
<p style="margin:0 0 16px">Maybe that was months ago. Maybe you've moved on. Maybe you're in the space that so many L3 parents describe: <em>"I don't 'hope' anymore. I just keep him clean and safe."</em></p>
<p style="margin:0 0 16px">That's not giving up. That's protecting what matters. And I want you to hear that, from one parent to another, whatever you've chosen, you've done right by your child.</p>
<p style="margin:0">I've said this in every email in this series, and I mean it every time: whether you buy anything or not, whether you try again or not, whether you're still reading closely or just skimming before unsubscribing, you've been doing the hardest work a parent can do. And you've kept going, in whatever way that looks like for your family.</p>
</div>

<!-- 48px SPACING -->
<div style="height:48px;background:#FBF7F1"></div>

<!-- SECTION 2: VERBATIM TRIAD -->
<div style="padding:0 24px">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:17px;line-height:1.6;color:#1F2D2F;margin-bottom:20px">
<p style="margin:0">I've heard versions of this from parents who've been in your shoes. Parents who've tried everything, and I mean <em>everything</em>, not as a phrase but as a lived reality:</p>
</div>
<div style="background:#DBFFCD;border-radius:12px;padding:24px">
<!-- GROUP 1 -->
<div style="margin-bottom:20px">
<div style="margin-bottom:16px">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:16px;font-style:italic;color:#4A6568;line-height:1.5">"We did 40 hours of ABA a week for 2 years. He's still in pull-ups."</div>
<div style="font-family:'Questrial',Arial,sans-serif;font-size:13px;font-style:italic;color:#8A9B9D;margin-top:6px">— L3 parent, after years of intensive therapy</div>
</div>
<div style="margin-bottom:16px">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:16px;font-style:italic;color:#4A6568;line-height:1.5">"We even did a residential program for 3 weeks. Back in pull-ups within a month."</div>
<div style="font-family:'Questrial',Arial,sans-serif;font-size:13px;font-style:italic;color:#8A9B9D;margin-top:6px">— L3 parent, last-resort attempt</div>
</div>
<div style="margin-bottom:0">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:16px;font-style:italic;color:#4A6568;line-height:1.5">"I spent $2500 on a private potty consultant. Same result."</div>
<div style="font-family:'Questrial',Arial,sans-serif;font-size:13px;font-style:italic;color:#8A9B9D;margin-top:6px">— L3 parent, method cycling exhaustion</div>
</div>
</div>
<!-- SEPARATOR -->
<div style="height:1px;background:#DBFFCD;margin-bottom:20px"></div>
<!-- GROUP 2 -->
<div>
<div style="margin-bottom:16px">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:16px;font-style:italic;color:#4A6568;line-height:1.5">"We stopped active training 2 years ago to focus on dignity."</div>
<div style="font-family:'Questrial',Arial,sans-serif;font-size:13px;font-style:italic;color:#8A9B9D;margin-top:6px">— L3 parent, dignity-first parent</div>
</div>
<div style="margin-bottom:16px">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:16px;font-style:italic;color:#4A6568;line-height:1.5">"He'll get there when he gets there. Or he won't. Either way, he's my son."</div>
<div style="font-family:'Questrial',Arial,sans-serif;font-size:13px;font-style:italic;color:#8A9B9D;margin-top:6px">— L3 parent, resigned acceptance</div>
</div>
<div style="margin-bottom:0">
<div style="font-family:'Questrial',Arial,sans-serif;font-size:16px;font-style:italic;color:#4A6568;line-height:1.5">"Maybe one day. Maybe never. We're at peace either way."</div>
<div style="font-family:'Questrial',Arial,sans-serif;font-size:13px;font-style:italic;color:#8A9B9D;margin-top:6px">— L3 parent, quiet resolution</div>
</div>
</div>
</div>
<!-- CONNECTING TEXT -->
<div style="font-family:'Questrial',Arial,sans-serif;font-size:17px;line-height:1.6;color:#1F2D2F;margin-top:20px">
<p style="margin:0 0 16px">I know this because my older son was 8 before we figured out body-signal learning. One of the parents I hear from most, Maureen Bennie, her son was 9.5 when he finally trained. Another family in our community: 8 years. Late is not never.</p>
<p style="margin:0 0 16px">I'm not saying your child will train by a certain age. I'm not making promises about outcomes, and I never will. What I am saying is that the nervous system continues to develop. The body-signal pathway doesn't close at 7 or 8 or 10. It's always there, waiting for the right input.</p>
<p style="margin:0 0 16px">Research shows that body signal differences in autism are real, measurable, and persistent, but the capacity for the brain to learn to register body signals exists well beyond early childhood. Nicholson et al. (2019) demonstrated that diminished body awareness doesn't mean the pathway is absent, it means the signal needs reinforcement.</p>
<p style="margin:0">The Body-Signal Learning Layer is designed for exactly this: sustained, gentle feedback that gives a deeply nervous system that picks up signals slowly something it can finally register.</p>
</div>
</div>

<!-- 48px SPACING -->
<div style="height:48px;background:#FBF7F1"></div>

<!-- SECTION 3: GENTLE RE-INVITATION -->
<div style="padding:0 24px">
<div style="background:#FBF7EB;border-radius:12px;padding:32px;font-family:'Questrial',Arial,sans-serif;font-size:17px;line-height:1.6;color:#1F2D2F">
<p style="margin:0 0 16px">This my last email unless you tell me to keep going.</p>
<p style="margin:0 0 16px">So here's what I want to leave with you. One mechanism. One offer. No timeline attached to either.</p>
<p style="margin:0 0 16px">The mechanism: The Body-Signal Learning Layer creates a gentle, sustained "uh-oh" sensation, 30 to 60 seconds of feedback that gives a brain that's been missing the signal time to register: <em>something happened.</em> Pull-ups wick that sensation away completely. Regular underwear provides a quick, diffuse signal that a slow to pick up signals brain may not catch. The 3-layer Body-Signal system is built specifically for this: cotton inner layer (gentle, sustained signal), smart absorption (protects without blocking the feedback loop), and a leak-resistant outer barrier.</p>
<p style="margin:0 0 16px">It's not a cure. It's not a magic fix. It's not going to change who your child is, because there's nothing to change. His autism is part of him. What the Body-Signal Layer does is give his brain <em>information</em>, the kind of information a nervous system that's been operating without a key signal can finally use.</p>
<p style="margin:0 0 16px">The offer: We offer a single pair for $34.99, deliberately small, deliberately low-commitment. You can add it alongside whatever you're currently using. Nothing replaces your routine. Nothing asks you to stop using pull-ups or specialty diapers. Just an addition. A quiet experiment with no strings attached.</p>
<p style="margin:0 0 16px">60 days to try it. Your timeline. Your judgment.</p>
<p style="margin:0 0 16px">If nothing changes, no pause, no look, no awareness shift, no tolerated-wearing moment, full refund. No questions asked. No pressure to explain why. The guarantee is the only honest response to the parent who's been burned before.</p>
<p style="margin:0">I'm not asking you to hope. I'm asking you to consider a mechanism you may not have encountered before. And to know that the door is open whenever, and if ever, you decide to walk through it.</p>
</div>
</div>

<!-- 48px SPACING -->
<div style="height:48px;background:#FBF7F1"></div>

<!-- CTA TEXT LINK -->
<div style="padding:0 24px;min-height:48px">
<a href="#" style="font-family:'Questrial',Arial,sans-serif;font-size:17px;color:#4A6568;text-decoration:underline;display:inline-block;min-height:48px;line-height:48px">When you decide, it's here.</a>
</div>

<!-- 48px SPACING -->
<div style="height:48px;background:#FBF7F1"></div>

<!-- LENA SIGN-OFF -->
<div style="background:#FFFFFF;padding:32px 24px;font-family:'Questrial',Arial,sans-serif">
<div style="font-size:17px;color:#1F2D2F;margin-bottom:12px">With care,</div>
<div style="font-size:17px;color:#1F2D2F;margin-bottom:4px">Lena ——</div>
<div style="font-size:14px;font-style:italic;color:#4A6568">Customer Support · Mom of two autistic sons</div>
<div style="height:1px;background:#8A9B9D;opacity:0.4;margin:20px 0"></div>
<div style="font-size:14px;font-style:italic;color:#4A6568;line-height:1.6">
P.S. My older son was 8 before we figured this out. If you've stepped back from trying, I get it. When you're ready, the science will still be here. 60 days, your judgment. <a href="#" style="color:#039902;text-decoration:underline">Explore Body-Signal Underwear</a>
</div>
</div>

<!-- 1px RULE -->
<div style="height:1px;background:rgba(219,255,205,0.5)"></div>

<!-- FOOTER -->
<div style="background:#FFFFFF;padding:16px 24px;font-family:'Questrial',Arial,sans-serif;font-size:10px;color:#8A9B9D">
<div style="margin-bottom:8px">You're receiving this because you signed up for email updates from BrightKidCo. If you'd prefer not to hear from us, you can unsubscribe at any time.</div>
<div style="margin-bottom:4px">BrightKidCo</div>
<div><a href="#" style="color:#8A9B9D;text-decoration:underline">Unsubscribe</a></div>
</div>

</div>
</body>
</html>"""

with open(HTML_PATH, "w") as f:
    f.write(html)
print(f"Wrote: {HTML_PATH}")
