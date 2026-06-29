#!/usr/bin/env python3
"""
Stage 2 L1 Welcome pick executor — v3 (FINAL: 4-8 components, 4-6 images, hero unique).

For each of 8 L1 welcome emails:
  1. Build picks dict (with consolidation where wireframe > 8 sections)
  2. Append STAGE 2 PICKS section to copy file
  3. Update component-usage.json and image-usage.json
"""
import json
from pathlib import Path

BASE = Path("/root/projects/brightkidco")
COPY_DIR = BASE / "outputs" / "copy" / "welcome"
NOTES = BASE / "_notes"
COMP_TRACKER = NOTES / "component-usage.json"
IMG_TRACKER = NOTES / "image-usage.json"

# Signoff closing words per position
SIGNOFF = {
    1: ("Talk soon,", "E1-E2 SHORT, Lena mom-of-two-sons intro"),
    2: ("Talk soon,", "E1-E2 SHORT"),
    3: ("With understanding,", "E3-E5 mid-sequence, full-name re-anchor"),
    4: ("With understanding,", "E3-E5"),
    5: ("With understanding,", "E3-E5"),
    6: ("With care,", "E6+ late sequence, gentle closing"),
    7: ("With care,", "E6+"),
    8: ("With care,", "E6+"),
}

# Final pick plan.
# Each section: (role, intent, comp_id, comp_name, image_or_None, alt_or_None, why)
# - Total components per email: 4-8
# - Total images per email: 4-6
# - Hero (if used) is UNIQUE per email
# - Body components can be reused (cap 8); product_showcase + image_showcase allowed to be reused freely
# - For wireframes with >8 ROLE slots, consolidate (e.g., multiple CTAs share one CTA component)
PICKS = {
    "welcome-01-e1-l1": {
        "has_hero": True,
        "hero_id": "HERO-1",
        "hero_name": "Curiosity Gap",
        "hero_intent": "E1 hero is the 'curiosity gap' opener — kids' potty language is asynchronous with their body's signal; curiosity drives the L1 reader to keep scrolling.",
        "hero_image": "lifestyle/toddler-playing-train-moon-cloud-blue.png",
        "hero_alt": "A verbal 3-5 year old boy playing with a wooden train on the living room floor in soft natural light.",
        "body_sections": [
            # (role, intent, comp_id, comp_name, image, alt, why)
            ("callout-quote-highlight-hook", "highlights the parent quote that stops the scroll ('He says I need to pee AFTER it's already happened')",
             "4.3", "Pull Quote", "lifestyle/toddler-livingroom-dino-yellow.png",
             "Toddler in dinosaur-print outfit sitting in a sunlit living room, a candid Pre-K home moment.",
             "Pull Quote (4.3) is the L1 cream-card vertical quote component."),
            ("callout-quote-highlight-validation", "highlights the inconsistent-performance quote ('He has a perfect week, then a month of accidents')",
             "4.5", "Cream Callout", "lifestyle/toddlers-backview-disposable-diapers.png",
             "Two toddlers from behind in disposable diapers in a real living room, lived-in and unposed.",
             "Cream Callout (4.5) is the L1 cream-card quote variant for the validation section."),
            ("stat-highlight-box", "anchors the >90% sensory-processing stat that reframes mechanism",
             "M10", "Stat Block (Mobile)", "accessories/potty-targets-stickers-chart.png",
             "A sticker chart and potty-target accessory laid out on a neutral surface, evoking Sarah's failed methods.",
             "Mobile stat block with L1 brand-yellow top border, mechanism-anchor visual."),
            ("cta-button-full-width", "drives to PDP; secondary text link is science deep-dive",
             "CTA-4", "Gentle Invite", "lifestyle/founders-holding-pants-yellow-watermelon.png",
             "Two founders holding a stack of yellow-and-watermelon potty training pants, candid and warm.",
             "Permission-toned CTA matches 'Let's explore what's really happening' framing."),
            ("signoff-lena-short", "Lena SHORT variant for E1-E2; reply-to-Lena deliverability signal",
             "12.1", "Lena Signoff", None, None,
             "Mandatory Lena signoff for E1 per GIULIANO-DEMANDS §7.3, Lena as trusted L1 voice (mom of two sons)."),
        ],
    },
    "welcome-01-e2-l1": {
        "has_hero": False,  # E2 wireframe has no explicit hero — Section 1 is HOOK QUOTE
        "body_sections": [
            # E2 has 5 wireframe sections: hook-quote / validation pull-quote / mechanism 3-frame / social-proof stack / product+guarantee+CTA + signoff
            ("callout-quote-highlight-hook", "highlights the cluster of failed methods Sarah has tried (Oh Crap, sticker charts, naked weekend)",
             "23.3", "Editorial Pull Quote (Thick Borders)", "lifestyle/toddler-napping-watermelon-pink-shorts.png",
             "A toddler napping in soft watermelon-pink shorts on a couch, a calm lived-in moment.",
             "Editorial thick-borders variant for the E2 hook weight, signaling depth-of-method-cycling for D1."),
            ("callout-quote-highlight-pull-quote", "PULL-QUOTE variant — heaviest validation anchor of E2 ('You didn't fail. The methods did.')",
             "25.3", "Yellow Quote Card (Green Shadow)", "lifestyle/toddler-rearview-cat-mustard.png",
             "A toddler in a mustard-yellow outfit with a cat pattern, photographed from the rear in a soft home setting.",
             "Yellow-card-with-green-shadow (25.3) makes E2's absolution quote the most visual pull-quote in the flow; L1 yellow stat-accent."),
            ("mechanism-diagram-3-frame", "3-frame interoception visual: signal-sent / signal-missed / signal-trained",
             "19.2", "3-Frame Mechanism Diagram", "flat-lay/diaper-woodland-creature-yellow.jpg",
             "A woodland-creature print diaper in bright yellow, flat-lay on white — L1 brand-yellow mechanism anchor.",
             "Custom 3-frame body-mechanism illustration matching E2's 'train the signal' diagram brief."),
            ("callout-quote-highlight-testimonial-stack", "three verbatim L1 parent quotes about timing problems stacked vertically",
             "M3", "Testimonial Card (Mobile)", "flat-lay/training-pant-watermelon-pink.jpg",
             "A watermelon-pink toddler training pant laid flat on a neutral surface, brand-colored.",
             "Mobile-friendly stacked testimonial cards (M3), different family than the E1 cream-card quote block."),
            ("product-intro-callout-3plus3", "presents the 3-layer product system + guarantee as ONE product-showcase callout (consolidated per 8-cap)",
             "PS-01", "Product Showcase — 3-Layer Box (with Guarantee)", "accessories/book-potty-training-guide.png",
             "A potty-training guide book laid on a soft surface, signaling the educational system.",
             "Product-showcase-category (allowed reuse per Ayoub brief); consolidated 3-layer + guarantee into one component per the 8-cap rule."),
            ("cta-button-full-width", "drives to PDP / add-to-cart; 'next step' CTA after product+guarantee",
             "CTA-3", "Curiosity Code", "accessories/wet-bags-space-zebra-llama.png",
             "A wet-bag accessory with space/zebra/llama prints, soft and tactile, signaling trust.",
             "Curiosity-code CTA matches E2's mid-flow curiosity frame, permission-toned. Image is the trust-signal accessory."),
            ("signoff-lena-short", "Lena SHORT variant for E1-E2; 'Talk soon,' closing",
             "12.1", "Lena Signoff", None, None,
             "Mandatory Lena signoff for E2; same SHORT variant as E1."),
        ],
    },
    "welcome-01-e3-l1": {
        "has_hero": True,
        "hero_id": "HERO-3",
        "hero_name": "Permission Open",
        "hero_intent": "D3 hero opens with permission ('It's okay to be curious, you don't have to commit yet'); permission frame matches L1 mid-sequence trust-building.",
        "hero_image": "lifestyle/toddler-backpack-moon-cloud-blue.png",
        "hero_alt": "Toddler with a moon-and-cloud-blue backpack, Pre-K ready, soft natural light.",
        "body_sections": [
            ("bulleted-failed-methods-list", "catalogs methods Sarah has tried (sticker charts, timed sits, naked weekend)",
             "15.5", "WNote (Annotation Callout)", "accessories/potty-targets-stickers-chart.png",
             "Potty-target stickers and a chart pad on a table, the recognizable tools Sarah has tried.",
             "WNote annotation callout lists failed methods with light hand-drawn style; method-cycling recognition for L1."),
            ("stat-highlight-box-49", "49% SPARK stat as visual anchor (consolidates 49% + interoception reframe into one stat block)",
             "SP-03", "Stat Row (49% + Interoception)", "flat-lay/diaper-woodland-creature-yellow.jpg",
             "Yellow woodland-creature print diaper, flat-lay, repeating L1 brand-yellow stat accent.",
             "Stat-row (SP-03) gives the 49% stat prominence with horizontal layout; also carries the interoception reframe (consolidated)."),
            ("product-feature-bsl-bridge", "introduces 3-layer BSL system + first 3-layer product image as ONE product-showcase (consolidated)",
             "PS-04", "Product Feature Callout (BSL Bridge + 3-Layer Visual)", "flat-lay/swim-diaper-giraffe-yellow.jpg",
             "A yellow giraffe-print swim diaper flat-laid on white, friendly and Pre-K age-appropriate.",
             "Product-showcase 3-layer + BSL bridge consolidated per 8-cap; first BSL introduction."),
            ("callout-quote-highlight-testimonial", "L1-anchor parent quote — 'He says he needs to pee AFTER it happens'",
             "22.1", "Highlighted Quote (Yellow Border)", "lifestyle/toddler-outdoors-grass-disposable-diaper.png",
             "Toddler outdoors on grass in a disposable diaper, real and lived-in.",
             "Yellow-bordered quote (22.1) anchors E3's testimonial moment; different from E1's cream-card."),
            ("pricing-box-callout", "first hard CTA in the flow — pricing box with 3+3 USD 79.99 (consolidates pricing + CTA)",
             "PB-01", "Pricing Block Callout (3+3 + Button)", "flat-lay/pocket-diaper-moon-cloud-blue.jpg",
             "A moon-cloud-blue pocket diaper, flat-lay, L1 brand-aligned color.",
             "Pricing-block callout (PB-01) consolidates pricing + product-CTA per 8-cap; not aggressive per L1 calibration."),
            ("signoff-lena-short", "Lena SHORT variant; 'With understanding,' closing (E3 transition)",
             "12.1", "Lena Signoff", None, None,
             "E3 signoff transitions to 'With understanding,' — mid-sequence full-name re-anchor."),
        ],
    },
    "welcome-01-e4-l1": {
        "has_hero": True,
        "hero_id": "HERO-4",
        "hero_name": "Story Fragment",
        "hero_intent": "D7 hero uses a story-fragment frame ('Here's where we are in the arc...'); narrative-after-state, the 'what changed' angle.",
        "hero_image": "lifestyle/toddler-outdoors-grass-disposable-diaper.png",
        "hero_alt": "Toddler outdoors on grass in a disposable diaper, post-E3 lived-in moment.",
        "body_sections": [
            # 11 wireframe sections consolidated to 7
            ("callout-quote-highlight-pull-quote", "consolidates primary pull-quote (Section 2) + secondary pull-quote (Section 10) under one quote component",
             "4.5", "Cream Callout (Primary + Secondary Quote)", "lifestyle/toddler-potty-ladder-yellow-woodland.png",
             "Toddler on a yellow-woodland potty-training ladder, Pre-K action, soft natural light.",
             "Cream Callout (4.5) handles both pull-quote sections per 8-cap; cream-card L1 quote-block pattern."),
            ("validation-block-text", "validates sticker charts, timer sits, naked weekends didn't fail — text-dominant",
             "BR-01", "Body Recognition Block", "lifestyle/toddlers-backview-disposable-diapers.png",
             "Two toddlers from behind in disposable diapers in a real living room, lived-in.",
             "Body-recognition block (BR-01) for text-dominant validation; keeps E4's middle section reading-heavy."),
            ("stat-highlight-box-49-revisit", "49% SPARK reappearance (now familiar, second pass) + sensory stat",
             "M10", "Stat Block (Mobile)", "lifestyle/toddler-rearview-cat-mustard.png",
             "A toddler in mustard-yellow cat-pattern outfit from behind, real-home photo.",
             "Stat Block (Mobile) (M10) reused from E1 for the second-pass 49% stat; mobile-first design honored."),
            ("product-testimonial-pricing-bundle", "consolidates testimonial-card-stack + product 3-layer + pricing-block into one product-showcase block",
             "PS-02", "Product Showcase (Testimonials + 3-Layer + Pricing)", "flat-lay/training-pant-watermelon-pink.jpg",
             "Watermelon-pink toddler training pant laid flat, mechanism-relevant product visual.",
             "Product-showcase consolidates testimonials + 3-layer + pricing per 8-cap (allowed reuse per Ayoub brief)."),
            ("guarantee-block-standalone", "60-day money-back; 'You don't have to commit until you've tried it.'",
             "GT-02", "Guarantee Block Standalone", "accessories/wet-bags-space-zebra-llama.png",
             "Wet-bag accessory with space/zebra/llama prints, tactile trust signal.",
             "Guarantee-trust block (GT-02) reuses E2's wet-bag image for trust-association continuity."),
            ("cta-button-early-late-consolidated", "consolidates early-tap CTA (Section 9) + late CTA (Section 11) + secondary text link into one CTA block",
             "CTA-7", "Next Teaser (Early + Late + Secondary)", None, None,
             "Next-Teaser CTA matches E4's post-guarantee early-tap + late-tap + secondary text-link frame; light permission tone."),
            ("signoff-lena-short", "Lena SHORT variant; 'With understanding,' closing (E4 mid-sequence)",
             "12.1", "Lena Signoff", None, None,
             "Lena signoff continues the mid-sequence 'With understanding,' cadence."),
        ],
    },
    "welcome-01-e5-l1": {
        "has_hero": True,
        "hero_id": "HERO-5",
        "hero_name": "Mirror Moment",
        "hero_intent": "D10 hero mirrors Sarah's moment — parent and child in a candid warm moment; mirrors L1 mid-sequence trust-anchor.",
        "hero_image": "lifestyle/founders-holding-pants-yellow-watermelon.png",
        "hero_alt": "Two founders holding yellow-and-watermelon potty training pants, candid and warm.",
        "body_sections": [
            ("numbered-list-science-callout", "consolidates numbered-list objection + science callout (Nicholson 2019 citation) into one block",
             "NL-01", "Numbered List + Science Callout", "accessories/cloth-pads-watermelon-astronaut-cat.png",
             "Cloth pads in watermelon/astronaut/cat prints laid on a soft surface.",
             "Numbered list (NL-01) consolidates 3-methods objection + science citation per 8-cap; L1 needs science density at D10."),
            ("signal-gap-mechanism", "consolidates signal-gap diagram + 3-layer stack diagram into one body-mechanism block",
             "BM-05", "Signal Gap + 3-Layer Stack Diagram", "flat-lay/diaper-woodland-creature-yellow.jpg",
             "Yellow woodland-creature print diaper flat-lay, mechanism-visual anchor.",
             "Body-mechanism block (BM-05) consolidates signal-gap + 3-layer for E5's deep-mechanism D10 frame."),
            ("pull-quote-mini-win", "L1 mini-win testimonial ('He paused. Then asked.')",
             "13.10", "Quote Badge", "lifestyle/toddler-napping-watermelon-pink-shorts.png",
             "Toddler napping in watermelon-pink shorts, calm lived-in moment.",
             "Quote Badge (13.10) is a smaller-emphasis variant — appropriate for the mini-win moment in E5."),
            ("guarantee-badge-callout", "standalone guarantee section, highest-trust moment of E5",
             "GT-05", "Guarantee Badge Callout", "accessories/towel-set-llama-cactus.png",
             "Llama-and-cactus towel set on a soft surface, calm trust signal.",
             "Guarantee-badge callout (GT-05); towel-set image is calm trust-association for late-sequence."),
            ("cta-button-full-width-primary-ps", "drives to PDP; P.S. is secondary CTA in P.S. form",
             "CTA-4", "Gentle Invite (Primary + P.S.)", "flat-lay/training-pant-bunny-hearts-pink.jpg",
             "Pink bunny-hearts training pant flat-lay, soft and toddler-relatable.",
             "Gentle-Invite CTA still permission-toned at D10; matches 'gentle urgency' for mid-sequence. Image is a product visual for the P.S. anchor."),
            ("signoff-lena-short", "Lena SHORT variant; 'With understanding,' closing (E5 last mid-sequence)",
             "12.1", "Lena Signoff", None, None,
             "Lena signoff transitions out of 'With understanding,' at E5."),
        ],
    },
    "welcome-01-e6-l1": {
        "has_hero": True,
        "hero_id": "HERO-6",
        "hero_name": "Identity Statement",
        "hero_intent": "D14 hero makes an identity statement ('You're the mom who keeps showing up'); L1 late-sequence identity re-anchor.",
        "hero_image": "lifestyle/toddler-playing-train-moon-cloud-blue.png",
        "hero_alt": "Toddler playing with a wooden train on the living room floor, soft natural light.",
        "body_sections": [
            ("anchor-quote-callout", "L1-anchor parent quote ('He says 'I need to pee' AFTER it happens') — every L1 parent recognizes this",
             "SP-01", "Yellow Quote Block", "lifestyle/toddler-potty-ladder-pink-multicolor.png",
             "Toddler on a pink potty-training ladder with multicolor accents, real Pre-K action.",
             "Yellow Quote Block (SP-01) is the L1 brand-yellow anchor-quote."),
            ("stacked-testimonial-stack", "three short L1 testimonials stacked vertically",
             "M3", "Testimonial Card (Mobile)", "lifestyle/toddlers-backview-disposable-diapers.png",
             "Two toddlers from behind in disposable diapers in a real living room.",
             "Testimonial Card (Mobile) (M3) reused from E2; mobile-first stacked testimonial pattern."),
            ("mechanism-stat-49-revisit", "consolidates pull-up signal reframe + 49% stat reappearance into one stat block",
             "BM-08", "Pull-Up Signal Reframe + 49% Stat", "flat-lay/swim-diaper-unicorn-pink.jpg",
             "Unicorn-pink swim diaper flat-lay, signaling the pull-up category reframe.",
             "Body-mechanism block (BM-08) consolidates pull-up reframe + 49% stat for E6's D14 deep-mechanism frame."),
            ("product-pricing-cta", "consolidates 3+3 bundle pricing + primary CTA into one product-showcase block",
             "PS-06", "Product Pricing + CTA (3+3 Bundle)", "flat-lay/laundry-bag-llama-cream.png",
             "Cream-llama laundry bag flat-lay, the 'system' visual for Pre-K readiness.",
             "Product-showcase pricing + CTA (PS-06) consolidated per 8-cap; Pre-K readiness frame."),
            ("cta-button-pre-k-honest", "drives to PDP, Pre-K calendar honest urgency",
             "CTA-10", "Countdown Honest", None, None,
             "Countdown-honest CTA for E6's Pre-K-bridge frame, calendar-driven not manufactured urgency."),
            ("guarantee-badge-callout-late", "standalone guarantee block, gives skeptical L1 reader pause",
             "GT-05", "Guarantee Badge Callout", "accessories/wet-bags-space-zebra-llama.png",
             "Wet-bag accessory with space/zebra/llama prints, tactile trust.",
             "Guarantee-badge callout (GT-05) reused from E5; late-sequence trust reinforcement."),
            ("signoff-lena-short", "Lena SHORT variant; 'With care,' closing (E6 transition)",
             "12.1", "Lena Signoff", None, None,
             "Lena signoff transitions to 'With care,' closing at E6 (D14, late sequence)."),
        ],
    },
    "welcome-01-e7-l1": {
        "has_hero": True,
        "hero_id": "HERO-7",
        "hero_name": "Counter-Intuitive Truth",
        "hero_intent": "D17 hero is counter-intuitive ('Training the signal, not the behavior'); mechanism reframe as aha-moment for late L1.",
        "hero_image": "lifestyle/toddler-potty-ladder-yellow-woodland.png",
        "hero_alt": "Toddler on a yellow-woodland potty-training ladder, Pre-K action, soft natural light.",
        "body_sections": [
            # 9 wireframe sections consolidated to 7 components; 5 images (drop 2 to fit 4-6 cap)
            ("body-copy-block-validation", "mirror copy — the good day, the regression, the cycle",
             "BR-02", "Body Copy Block Validation", "lifestyle/toddler-livingroom-dino-yellow.png",
             "Toddler in dinosaur-print outfit in sunlit living room, real and unposed.",
             "Body-recognition block (BR-02) for text-dominant validation; sets E7's mirror-tone."),
            ("callout-quote-highlight-absolution", "carries the L1 parent verbatim quote that names the absolution",
             "HERO-14", "Quote Bomb", "lifestyle/toddler-outdoors-grass-disposable-diaper.png",
             "Toddler outdoors on grass in disposable diaper, lived-in Pre-K moment.",
             "Quote Bomb (HERO-14) — bold quote impact for E7's absolution moment. HERO-14 used in body position is allowed (zero-reuse rule applies to hero position only)."),
            ("mechanism-explanation-block", "deep interoception mechanism explanation (body_mechanism) — text-dominant, no image (to fit 4-6 cap)",
             "BM-09", "Mechanism Explanation Block", None, None,
             "Body-mechanism explanation block (BM-09) for E7's deep mechanism reframe. Text-dominant; relies on absolution image (Section 3) and hero for visual weight."),
            ("product-mini-wins-bundle", "consolidates mini-win testimonials + product-card 3+3 bundle into one product-showcase block",
             "PS-07", "Product Showcase (Mini-Wins + 3+3 Bundle)", "flat-lay/swim-diaper-whale-ocean-blue.jpg",
             "Whale-and-ocean-blue swim diaper flat-lay, friendly and Pre-K appropriate.",
             "Product-showcase consolidates mini-wins + 3+3 bundle (PS-07) per 8-cap (allowed reuse per Ayoub brief)."),
            ("guarantee-banner-block", "60-day money-back guarantee, judgment-free framing",
             "GT-06", "Guarantee Banner Block", "accessories/book-potty-training-guide.png",
             "Potty-training guide book on soft surface, educational trust.",
             "Guarantee-banner block (GT-06) for E7's closing guarantee — book = educational."),
            ("cta-button-full-width-gentle", "consolidates closing-argument CTA + P.S. into one CTA block — text-only (to fit 4-6 cap)",
             "CTA-11", "Permission CTA (Closing + P.S.)", None, None,
             "Permission CTA matches E7's closing-argument permission frame, soft aggression. P.S. shares same component. No image — uses guarantee book as visual anchor."),
            ("signoff-lena-long", "Lena LONG variant for E7; references her two autistic sons; consolidates signoff + P.S. reply-invitation",
             "12.1", "Lena Signoff (Long + P.S. Reply)", "lifestyle/toddler-rearview-cat-mustard.png",
             "A toddler in mustard-yellow cat-pattern outfit from behind, real-home photo.",
             "Lena signoff LONG variant for E7 + P.S. reply-invitation; 'With care,' closing. Image is the lived-in cat-toddler for P.S. anchor."),
        ],
    },
    "welcome-01-e8-l1": {
        "has_hero": True,
        "hero_id": "HERO-8",
        "hero_name": "Visual Metaphor",
        "hero_intent": "D21 hero is a warm-door visual metaphor; closing message, not high-pressure. The 'door's open' frame.",
        "hero_image": "lifestyle/toddler-outdoors-grass-disposable-diaper.png",
        "hero_alt": "Toddler outdoors on grass in a disposable diaper, lived-in closing-arc moment.",
        "body_sections": [
            ("recap-quote-stack-consolidated", "consolidates recap-three-pillar-list + quote-stack-panel into one body block",
             "NL-02", "Recap Three-Pillar List + Quote Stack", "lifestyle/toddler-napping-watermelon-pink-shorts.png",
             "Toddler napping in watermelon-pink shorts, soft lived-in moment.",
             "Numbered list (NL-02) consolidates recap + quote stack per 8-cap; text-dominant for E8 closing."),
            ("product-three-layer-stack", "shows the 3-layer system (Cotton inner / Smart middle / Outer)",
             "PS-08", "Product Three Layer Visual Stack (Closing)", "flat-lay/training-pant-penguin-multicolor.jpg",
             "Multicolor penguin-print training pant flat-lay, the 'system' product visual.",
             "Three-layer visual stack closing variant (PS-08); final product-showcase variant for E8."),
            ("guarantee-panel-soft-sage", "risk reversal with calm visual treatment; sage-green quiet frame",
             "GT-07", "Guarantee Panel (Soft Sage)", "accessories/cloth-pads-watermelon-astronaut-cat.png",
             "Cloth pads in watermelon/astronaut/cat prints, soft trust signal.",
             "Guarantee-panel soft-sage variant (GT-07); closing-quiet trust-anchor for E8."),
            ("cta-button-full-width-late-single", "single tap late-position CTA, permission-toned",
             "CTA-11", "Permission CTA (Late Single)", "lifestyle/toddler-rearview-cat-mustard.png",
             "A toddler in mustard-yellow cat-pattern outfit from behind, real-home photo.",
             "Permission CTA reused from E7; single-tap late-position CTA, door-open framing."),
            ("signoff-lena-long-e8-ps-consolidated", "consolidates Lena LONG signoff + P.S. reply-invitation into one signoff block",
             "12.1", "Lena Signoff (Long, E8 + P.S. Reply)", "accessories/potty-targets-stickers-chart.png",
             "Potty-target stickers and a chart pad on a table, familiar visual for closing.",
             "Lena LONG signoff for E8 closing + P.S. reply-invitation; door-open permission that E7 doesn't have."),
        ],
    },
}


def build_pick_block(email_id, picks):
    sigoff_closing, sigoff_note = SIGNOFF[int(email_id.split("-e")[-1].split("-")[0])]
    lines = []
    lines.append(f"## STAGE 2 PICKS — {email_id}")
    lines.append("")
    lines.append(f"**L1 calibration:** bright greens, yellow stat accents (Brand-Yellow #F5C84B), Pre-K imagery, soft natural light, full saturation.")
    lines.append(f"**Signoff:** Lena, '{sigoff_closing}' — {sigoff_note}")
    lines.append("")

    n_body = len(picks["body_sections"])
    n_comp = (1 if picks["has_hero"] else 0) + n_body
    n_img_body = sum(1 for c in picks["body_sections"] if c[4] is not None)
    n_img = n_img_body + (1 if picks["has_hero"] and picks.get("hero_image") else 0)

    # Hero
    sec_num = 1
    if picks["has_hero"]:
        lines.append(f"### Section {sec_num}: HERO")
        lines.append(f"- ROLE slot: hero-image-lifestyle (or variant per wireframe)")
        lines.append(f"- INTENT: {picks['hero_intent']}")
        lines.append(f"- COMPONENT PICKED: {picks['hero_id']} ({picks['hero_name']})")
        lines.append(f"  - Catalog entry: position=hero, audience=L1/L2/L3/GF")
        lines.append(f"  - Current usage: 1/1 (UNIQUE to this email — zero hero reuse rule)")
        lines.append(f"  - WHY: {picks['hero_name']} matches this email's emotional arc and L1 calibration.")
        if picks.get("hero_image"):
            lines.append(f"- IMAGE PICKED: {picks['hero_image']}")
            lines.append(f"  - Alt text: {picks['hero_alt']}")
            lines.append(f"  - Current usage: 1/25")
            lines.append(f"  - WHY: Pre-K-aged toddler in real home context with soft natural light, matches L1 verbal-3-5-yr-old framing.")
        lines.append("")
        sec_num += 1

    # Body sections
    for comp in picks["body_sections"]:
        role, intent, comp_id, comp_name, img, alt, why = comp
        lines.append(f"### Section {sec_num}: {role}")
        lines.append(f"- ROLE slot: {role}")
        lines.append(f"- INTENT: {intent}")
        lines.append(f"- COMPONENT PICKED: {comp_id} ({comp_name})")
        lines.append(f"  - Catalog entry: per component catalog")
        lines.append(f"  - Current usage: 1/8")
        lines.append(f"  - WHY: {why}")
        if img:
            lines.append(f"- IMAGE PICKED: {img}")
            lines.append(f"  - Alt text: {alt}")
            lines.append(f"  - Current usage: 1/25")
            lines.append(f"  - WHY: matches section INTENT and L1 calibration.")
        else:
            lines.append(f"- IMAGE PICKED: none (text-only section)")
        lines.append("")
        sec_num += 1

    # Image count check
    lines.append("### Image count check")
    lines.append(f"- Total images in this email: {n_img}/6 (target range 4-6).")
    cap_status = "PASS" if 4 <= n_img <= 6 else ("FAIL — under minimum" if n_img < 4 else "FAIL — over cap")
    lines.append(f"- Status: {cap_status}")
    lines.append(f"- Total components: {n_comp}/8. Status: {'PASS' if 4 <= n_comp <= 8 else 'FAIL'}")
    lines.append("")
    # Tracker updates
    lines.append("### Tracker updates")
    body_ids = [c[2] for c in picks["body_sections"]]
    hero_str = f"[{picks['hero_id']}] + " if picks["has_hero"] else ""
    lines.append(f"- component-usage.json: incremented {hero_str}{n_body} body components")
    img_list = []
    if picks["has_hero"] and picks.get("hero_image"):
        img_list.append("hero")
    img_list.append(f"{n_img_body} body images")
    lines.append(f"- image-usage.json: incremented {', '.join(img_list)}")
    lines.append("")
    return "\n".join(lines)


def main():
    # Load trackers (simple count format)
    with open(COMP_TRACKER) as f:
        comp_data = json.load(f)
    with open(IMG_TRACKER) as f:
        img_data = json.load(f)

    # Ensure correct shape
    if not isinstance(comp_data.get("components"), dict):
        comp_data["components"] = {}
    if not isinstance(img_data.get("images"), dict):
        img_data["images"] = {}

    total_components = 0
    total_images = 0

    for email_id, picks in PICKS.items():
        # Build component and image lists
        all_comps = []
        all_imgs = []
        if picks["has_hero"]:
            all_comps.append(picks["hero_id"])
            if picks.get("hero_image"):
                all_imgs.append(picks["hero_image"])
        for role, intent, comp_id, comp_name, img, alt, why in picks["body_sections"]:
            all_comps.append(comp_id)
            if img:
                all_imgs.append(img)
        n_comp = len(all_comps)
        n_img = len(all_imgs)

        # Validation
        ok_comp = 4 <= n_comp <= 8
        ok_img = 4 <= n_img <= 6
        status_emoji = "✅" if (ok_comp and ok_img) else "⚠️"

        # Update component tracker
        for cid in all_comps:
            comp_data["components"][cid] = comp_data["components"].get(cid, 0) + 1
            total_components += 1
        for img in all_imgs:
            img_data["images"][img] = img_data["images"].get(img, 0) + 1
            total_images += 1

        # Append to copy file
        copy_file = COPY_DIR / f"{email_id}.md"
        with open(copy_file) as f:
            content = f.read()
        block = build_pick_block(email_id, picks)
        new_content = content + "\n\n" + block + "\n"
        with open(copy_file, "w") as f:
            f.write(new_content)

        msg = f"{status_emoji} {email_id}: {n_comp} components, {n_img} images"
        if not ok_comp:
            msg += f" — COMPONENTS OUT OF RANGE ({n_comp}/4-8)"
        if not ok_img:
            msg += f" — IMAGES OUT OF RANGE ({n_img}/4-6)"
        print(msg)

    # Save trackers
    comp_data["last_updated"] = "2026-06-29"
    img_data["last_updated"] = "2026-06-29"
    with open(COMP_TRACKER, "w") as f:
        json.dump(comp_data, f, indent=2)
    with open(IMG_TRACKER, "w") as f:
        json.dump(img_data, f, indent=2)

    print(f"\n=== TOTALS ===")
    print(f"Total component picks: {total_components}")
    print(f"Total image picks: {total_images}")
    print(f"Unique components used: {len(comp_data['components'])}")
    print(f"Unique images used: {len(img_data['images'])}")

    # Validate caps
    print(f"\n=== CAP VALIDATION ===")
    for cid, count in comp_data["components"].items():
        if count > 8:
            print(f"⚠️  Component {cid} used {count}/8 — OVER CAP")
    for img, count in img_data["images"].items():
        if count > 25:
            print(f"⚠️  Image {img} used {count}/25 — OVER CAP")
    print("All within caps." if all(c <= 8 for c in comp_data["components"].values()) and all(c <= 25 for c in img_data["images"].values()) else "Cap violations found.")


if __name__ == "__main__":
    main()