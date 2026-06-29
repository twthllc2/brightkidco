#!/usr/bin/env python3
"""Resize lifestyle images for email inlining - ultra-small for 102KB limit."""
import os
import base64
import io
from PIL import Image

IMG_DIR = "/root/projects/brightkidco/outputs/email-assets/product-photos"
OUT_DIR = "/root/projects/brightkidco/outputs/html/welcome/resized"
os.makedirs(OUT_DIR, exist_ok=True)

IMAGES = {
    "founders-holding-pants-yellow-watermelon.png": "lifestyle/founders-holding-pants-yellow-watermelon.png",
    "toddler-backpack-moon-cloud-blue.png": "lifestyle/toddler-backpack-moon-cloud-blue.png",
    "toddler-playing-train-moon-cloud-blue.png": "lifestyle/toddler-playing-train-moon-cloud-blue.png",
    "toddler-potty-ladder-pink-multicolor.png": "lifestyle/toddler-potty-ladder-pink-multicolor.png",
    "toddler-livingroom-dino-yellow.png": "lifestyle/toddler-livingroom-dino-yellow.png",
    "toddler-napping-watermelon-pink-shorts.png": "lifestyle/toddler-napping-watermelon-pink-shorts.png",
    "toddler-potty-ladder-yellow-woodland.png": "lifestyle/toddler-potty-ladder-yellow-woodland.png",
    "toddlers-backview-disposable-diapers.png": "lifestyle/toddlers-backview-disposable-diapers.png",
    "washing-machine-training-pants.png": "lifestyle/washing-machine-training-pants.png",
    "training-pant-fox-red-white.jpg": "flat-lay/training-pant-fox-red-white.jpg",
    "training-pant-cloud-raindrop-white.jpg": "flat-lay/training-pant-cloud-raindrop-white.jpg",
    "training-pant-bunny-hearts-pink.jpg": "flat-lay/training-pant-bunny-hearts-pink.jpg",
    "training-pant-watermelon-pink.jpg": "flat-lay/training-pant-watermelon-pink.jpg",
}

def resize_and_encode(src_path, max_width=350, quality=45):
    img = Image.open(src_path)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')
    w, h = img.size
    if w > max_width:
        ratio = max_width / w
        new_h = int(h * ratio)
        img = img.resize((max_width, new_h), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, format='JPEG', quality=quality, optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode('ascii')
    return b64, buf.tell()

for name, rel_path in IMAGES.items():
    src = os.path.join(IMG_DIR, rel_path)
    if os.path.exists(src):
        b64, size = resize_and_encode(src)
        b64_path = os.path.join(OUT_DIR, f"{name}.b64")
        with open(b64_path, "w") as f:
            f.write(b64)
        print(f"OK: {name} -> {size} bytes ({size/1024:.1f}KB)")
    else:
        print(f"MISSING: {src}")
