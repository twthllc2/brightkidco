import json
import os
import random
import glob

random.seed(42)

# Section type -> component pools by source preference (G+ preferred)
COMPONENTS = {
    "hero": {
        "G+": [{"id": "HERO-20", "name": "Handwritten Letter Opener (uses Letter)"}],
        "A*": [
            {"id": "HERO-13", "name": "Scientific Hook"},
            {"id": "HERO-17", "name": "Social Proof Hero"},
            {"id": "HERO-1", "name": "Curiosity Gap"},
            {"id": "HERO-3", "name": "Permission Open"},
            {"id": "HERO-5", "name": "Mirror Moment"},
            {"id": "HERO-9", "name": "Whisper Tone"},
            {"id": "HERO-10", "name": "Bold Declaration"},
            {"id": "HERO-12", "name": "Before Snapshot"},
            {"id": "HERO-14", "name": "Quote Bomb"},
            {"id": "HERO-15", "name": "Level Callout"},
            {"id": "HERO-18", "name": "Guilt Absolution"},
            {"id": "FLOW-1", "name": "Welcome Hook"},
            {"id": "FLOW-6", "name": "Winback Opener"},
            {"id": "FLOWDEEP-1", "name": "Welcome E1 Hook"},
        ],
        "A": [
            {"id": "2.1", "name": "Lilac Gradient Hero"},
            {"id": "2.2", "name": "Warm Hero"},
            {"id": "2.3", "name": "Teal CTA Hero"},
            {"id": "18.1", "name": "Hi-Fi Gradient Hero + Discount Block"},
            {"id": "22.3", "name": "Circle Crop Hero"},
            {"id": "23.1", "name": "Magazine Masthead"},
            {"id": "M1", "name": "Emotional Hero (Storytelling Open)"},
            {"id": "17.1", "name": "Hero Image with Stacked Shadow"},
            {"id": "IMG-01", "name": "Product Hero Image"},
            {"id": "IMG-08", "name": "UGC Hero"},
            {"id": "IMG-20", "name": "Hero with Photo Background"},
        ]
    },
    "letter": {
        "G+": [
            {"id": "4.1", "name": "Letter Section (uses Letter)"},
            {"id": "13.2", "name": "Letter & Envelope (uses Letter)"},
            {"id": "17.7", "name": "Closing Letter (Before CTA) (uses Letter)"},
            {"id": "23.2", "name": "Drop Cap Initial Letter (uses Letter)"},
            {"id": "LETTER-03", "name": "Letter + Pull-Quote (uses Letter)"},
            {"id": "LETTER-04", "name": "Letter + Image Break (uses Letter)"},
            {"id": "STORYDEEP-03", "name": "The Letter From Future (uses Letter)"},
            {"id": "EMODEEP-03", "name": "The Permission Letter (uses Letter)"},
            {"id": "EMODEEP-18", "name": "The Letter From Lena (uses Letter)"},
            {"id": "30.2", "name": "Letter-Embedded Quote (uses Letter)"},
            {"id": "3.2", "name": "Eyebrow Label (uses Eyebrow)"},
            {"id": "UTIL-07", "name": "Section Header (uses Header)"},
            {"id": "UTIL-01", "name": "Gradient Band (uses Band)"},
            {"id": "UTIL-05", "name": "Signoff Card (uses Signoff)"},
            {"id": "20.3", "name": "Gradient Band Variants (uses Band)"},
            {"id": "26.5", "name": "Dark Footer Bar (uses Footer)"},
            {"id": "19.2", "name": "Chat Header (uses Header)"},
            {"id": "CAMIMG-17", "name": "Email Header Image (uses Header)"},
        ],
        "A*": [
            {"id": "LETTER-01", "name": "Paragraph Stack"},
            {"id": "LETTER-02", "name": "Handwritten Opener"},
            {"id": "LETTER-05", "name": "Manifesto Line"},
            {"id": "LETTER-06", "name": "PS Teaser"},
            {"id": "LETTER-07", "name": "Greeting Card"},
            {"id": "LETTER-08", "name": "Voice Note"},
            {"id": "UTIL-06", "name": "Preheader Bar"},
            {"id": "UTIL-08", "name": "Nav Bar"},
            {"id": "DESDEEP-12", "name": "The Gradient Text"},
        ],
        "A": [
            {"id": "1.1", "name": "Brand Color Palette"},
            {"id": "11.2", "name": "Reminder Bar"},
            {"id": "13.1", "name": "Gentle Morning"},
            {"id": "13.3", "name": "Quiet Bedroom"},
            {"id": "13.4", "name": "Hand Holding"},
            {"id": "13.6", "name": "Paper Airplane"},
            {"id": "13.7", "name": "Signal Waves"},
            {"id": "13.9", "name": "Calm Sun"},
            {"id": "15.2", "name": "WImg (Image Placeholder)"},
        ]
    },
    "definition": {
        "G+": [],
        "A*": [
            {"id": "EDU-1", "name": "Definition Block"},
            {"id": "EDU-2", "name": "Did You Know Card"},
            {"id": "EDU-3", "name": "Science Block"},
            {"id": "EDU-5", "name": "Mechanism Explainer"},
            {"id": "EDU-6", "name": "The Numbers Block"},
            {"id": "EDU-7", "name": "Myth vs Fact"},
            {"id": "EDU-8", "name": "Timeline Block"},
            {"id": "EDUDEEP-1", "name": "The Research Digest"},
            {"id": "EDUDEEP-4", "name": "The Interoception Test"},
            {"id": "EDUDEEP-5", "name": "The Brain Map"},
            {"id": "DEEP-01", "name": "The Unfinished Study"},
            {"id": "DEEP-07", "name": "The Evidence Chain"},
            {"id": "DEEP-16", "name": "The Brain-Body Bridge"},
        ],
        "A": [
            {"id": "ED3", "name": "Interoception Explainer"},
            {"id": "ED4", "name": "Why It Works (3 Reasons)"},
            {"id": "35.1", "name": "Three Pillars Content Cards"},
        ]
    },
    "reframe": {
        "G+": [],
        "A*": [
            {"id": "PSYCH-06", "name": "Permission Messaging"},
            {"id": "PSYCH-01", "name": "Anchoring"},
            {"id": "DEEP-08", "name": "The Permission Paradox"},
            {"id": "DEEP-02", "name": "The Mom Confessional"},
            {"id": "DEEP-03", "name": "The Pattern Break"},
            {"id": "DEEP-05", "name": "The Before-After-Moment"},
            {"id": "DEEP-06", "name": "The Whisper Network"},
            {"id": "DEEP-09", "name": "The Invisible Struggle"},
            {"id": "DEEP-11", "name": "The Guilt Audit"},
            {"id": "DEEP-19", "name": "The Signal Analogy"},
        ],
        "A": [
            {"id": "22.1", "name": "Highlighted Quote (Yellow Border)"},
        ]
    },
    "testimonial": {
        "G+": [],
        "A*": [
            {"id": "7", "name": "Parent Stories (Emotional Proof)"},
            {"id": "SP-09", "name": "UGC Photo Grid"},
            {"id": "SP-11", "name": "Star Cascade"},
            {"id": "DEEP-04", "name": "The Sensory Description"},
            {"id": "DEEP-20", "name": "The Community Thread"},
        ],
        "A": [
            {"id": "22.2", "name": "Three-Family Bridge"},
            {"id": "19.1", "name": "Chat Bubble (iMessage Style)"},
            {"id": "VSOCIAL-5", "name": "Star Rating Hero"},
        ]
    },
    "product": {
        "G+": [],
        "A*": [
            {"id": "PRODEEP-3", "name": "The Size Finder"},
            {"id": "PRODEEP-6", "name": "The Wear Test"},
            {"id": "PRODEEP-7", "name": "The Color Personality"},
        ],
        "A": [
            {"id": "6.1", "name": "ProductShowcaseFull (Giuliano source)"},
            {"id": "PDISP-1", "name": "Product Hero Image"},
            {"id": "DEEPPROD-1", "name": "Product Hero 360"},
            {"id": "DEEPPROD-10", "name": "Product Lifestyle Hero"},
            {"id": "TRUSTDEEP-10.1", "name": "Bundle Hero (Multi-Pack Showcase)"},
            {"id": "34.1", "name": "Lavender Section (#F0EDF8)"},
            {"id": "34.2", "name": "Warm Beige Section (#F5F1EA)"},
        ]
    },
    "guarantee": {
        "G+": [
            {"id": "10.1", "name": "60-Day Seal (alias for PartBadge/Letter)"},
        ],
        "A*": [
            {"id": "PSYCH-02", "name": "Loss Aversion"},
            {"id": "PSYDEEP-6", "name": "The Loss Frame"},
        ],
        "A": [
            {"id": "TRUSTDEEP-16.1", "name": "Guarantee Hero (Risk-Reversal Centerpiece)"},
            {"id": "REV-06.4", "name": "Reassurance Strip (60-Day + Free Returns)"},
        ]
    },
    "cta": {
        "G+": [
            {"id": "5.1", "name": "Dark CTA (CTAClose) (uses CTAClose)"},
        ],
        "A*": [
            {"id": "CTA-6", "name": "Social CTA"},
            {"id": "PSYCH-04", "name": "Commitment Escalation"},
            {"id": "PSYCH-07", "name": "Micro-Win Streak"},
            {"id": "PSYCH-09", "name": "Reciprocity"},
        ],
        "A": [
            {"id": "REV-10.2", "name": "Lena Final (Lena's Last Word)"},
        ]
    },
    "story": {
        "G+": [],
        "A*": [
            {"id": "STORY-12", "name": "Milestone Tracker"},
            {"id": "STORY-14", "name": "Micro-Story — Single powerful moment"},
            {"id": "STORYDEEP-01", "name": "The Split Screen"},
            {"id": "STORYDEEP-04", "name": "The Day In The Life"},
            {"id": "STORYDEEP-05", "name": "The Conversation Thread"},
            {"id": "STORYDEEP-07", "name": "The Season Metaphor"},
            {"id": "STORYDEEP-10", "name": "The Playlist"},
            {"id": "STORYDEEP-11", "name": "The Weather Report"},
            {"id": "STORYDEEP-13", "name": "The Movie Scene"},
            {"id": "STORYDEEP-19", "name": "The Time Lapse"},
            {"id": "STORYDEEP-20", "name": "The Field Notes"},
        ],
        "A": [
            {"id": "10", "name": "Mini-Win Streak (Progress Tracker)"},
            {"id": "3", "name": "Micro-Win Celebration"},
        ]
    },
    "feel": {
        "G+": [],
        "A*": [
            {"id": "DEEP-14", "name": "The Sensory Map"},
            {"id": "DEEP-24", "name": "The Sensory Inventory"},
        ],
        "A": [
            {"id": "8.2", "name": "Checkmark List"},
            {"id": "35.2", "name": "Individual Checkmark Progress Cards"},
        ]
    },
    "objections": {
        "G+": [],
        "A*": [],
        "A": [
            {"id": "OBJ-02", "name": "My Child Is Different"},
            {"id": "OBJ-03", "name": "Too Expensive Calculator"},
        ]
    },
    "code": {
        "G+": [],
        "A*": [],
        "A": [
            {"id": "18.2", "name": "Free Guide / Lead Magnet Section"},
            {"id": "PRICE-1", "name": "Price Hero"},
        ]
    },
    "comparison": {
        "G+": [],
        "A*": [
            {"id": "EDU-7", "name": "Myth vs Fact"},
        ],
        "A": [
            {"id": "REV-03.2", "name": "Logic Block (Worst-Case Reassurance)"},
        ]
    },
}

IMAGES = {
    "lifestyle": [
        "lifestyle/toddler-outdoors-grass-disposable-diaper.png",
        "lifestyle/toddler-napping-watermelon-pink-shorts.png",
        "lifestyle/toddlers-backview-disposable-diapers.png",
        "lifestyle/toddler-playing-train-moon-cloud-blue.png",
        "lifestyle/toddler-livingroom-dino-yellow.png",
        "lifestyle/washing-machine-training-pants.png",
        "lifestyle/toddler-potty-ladder-pink-multicolor.png",
        "lifestyle/toddler-potty-ladder-yellow-woodland.png",
        "lifestyle/toddler-backpack-moon-cloud-blue.png",
        "lifestyle/founders-holding-pants-yellow-watermelon.png",
        "lifestyle/toddler-rearview-cat-mustard.png",
    ],
    "flat_lay": [
        "flat-lay/laundry-bag-llama-cream.png",
        "flat-lay/diaper-woodland-creature-yellow.jpg",
        "flat-lay/pocket-diaper-moon-cloud-blue.jpg",
        "flat-lay/swim-diaper-unicorn-pink.jpg",
        "flat-lay/training-pant-fox-red-white.jpg",
        "flat-lay/swim-diaper-whale-ocean-blue.jpg",
        "flat-lay/training-pant-penguin-multicolor.jpg",
        "flat-lay/training-pant-bunny-hearts-pink.jpg",
        "flat-lay/training-pant-fox-woodland-white.jpg",
        "flat-lay/training-pant-cloud-raindrop-white.jpg",
        "flat-lay/swim-diaper-giraffe-yellow.jpg",
        "flat-lay/training-pant-watermelon-pink.jpg",
    ],
    "accessories": [
        "accessories/potty-targets-stickers-chart.png",
        "accessories/book-potty-training-guide.png",
        "accessories/cloth-pads-watermelon-astronaut-cat.png",
        "accessories/towel-set-llama-cactus.png",
        "accessories/wet-bags-space-zebra-llama.png",
    ],
}


def pick_component(section_type, used_ids):
    pools = COMPONENTS.get(section_type, {"G+": [], "A*": [], "A": []})
    for source in ["G+", "A*", "A"]:
        available = [c for c in pools.get(source, []) if c["id"] not in used_ids]
        if available:
            chosen = random.choice(available)
            used_ids.add(chosen["id"])
            return chosen
    # fallback
    all_c = pools.get("G+", []) + pools.get("A*", []) + pools.get("A", [])
    if all_c:
        chosen = random.choice(all_c)
        used_ids.add(chosen["id"])
        return chosen
    return {"id": "FALLBACK-" + section_type.upper(), "name": "Default " + section_type.title()}


def pick_image(pool, used):
    available = [img for img in pool if img not in used]
    if not available:
        available = pool
    chosen = random.choice(available)
    used.add(chosen)
    return chosen


def get_image_pool(section_type):
    if section_type in ["product"]:
        return IMAGES["flat_lay"] + IMAGES["lifestyle"]
    elif section_type in ["hero", "story", "testimonial"]:
        return IMAGES["lifestyle"]
    elif section_type in ["letter", "definition", "reframe", "guarantee"]:
        return IMAGES["lifestyle"] + IMAGES["flat_lay"] + IMAGES["accessories"]
    else:
        return IMAGES["lifestyle"] + IMAGES["flat_lay"]


def generate_picks(layout_path, output_dir):
    with open(layout_path, 'r') as f:
        layout = json.load(f)

    email_id = layout["email_id"]
    sections = layout["sections"]
    used_component_ids = set()
    used_images = set()
    picks = []

    num_sections = len(sections)
    num_images = min(6, max(4, num_sections))

    # Prefer image sections: product, hero, story, testimonial
    image_candidates = [i for i, s in enumerate(sections) if s["type"] in ["product", "hero", "story", "testimonial"]]
    other_indices = [i for i in range(num_sections) if i not in image_candidates]
    random.shuffle(image_candidates)
    random.shuffle(other_indices)

    image_indices = set()
    for idx in image_candidates + other_indices:
        if len(image_indices) >= num_images:
            break
        image_indices.add(idx)

    for i, section in enumerate(sections):
        stype = section["type"]
        comp = pick_component(stype, used_component_ids)
        img = None
        if i in image_indices:
            pool = get_image_pool(stype)
            img = pick_image(pool, used_images)
        picks.append({
            "index": section["index"],
            "type": stype,
            "component_id": comp["id"],
            "component_name": comp["name"],
            "image_file": img
        })

    output = {
        "email_id": email_id,
        "sections": picks,
        "stats": {
            "image_count": sum(1 for p in picks if p["image_file"]),
            "component_count": len(picks)
        }
    }

    out_path = os.path.join(output_dir, f"{email_id}.json")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w') as f:
        json.dump(output, f, indent=2)
    return email_id, output["stats"]


if __name__ == "__main__":
    layouts_dir = "/root/projects/brightkidco/outputs/layouts"
    output_dir = "/root/projects/brightkidco/outputs/picks"

    patterns = [
        "pp-extended-ed/pped-22-*.json",
        "pp-education/pped-11-*.json",
        "pp-extended-upsell/ppupsell-12-*.json",
        "pp-at-risk/atrisk-23-*.json",
        "pp-mary-story/mary-14-*.json",
        "pp-mid-checkin/mid-13-*.json",
        "pp-level-detection/detection-10.json",
        "pp-level-detection/pp-leveldetect-01-e1.json",
    ]

    all_paths = []
    for pat in patterns:
        all_paths.extend(sorted(glob.glob(os.path.join(layouts_dir, pat))))

    print(f"Processing {len(all_paths)} layout files...\n")
    for path in all_paths:
        eid, stats = generate_picks(path, output_dir)
        print(f"  {eid}: {stats['image_count']} images, {stats['component_count']} components")

    print(f"\nDone! Files written to {output_dir}")
