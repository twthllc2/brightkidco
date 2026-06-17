#!/usr/bin/env python3
"""
BKCO Standalone Bundler v2
Takes a BKCO environment HTML file and produces a self-contained standalone HTML.

Usage:
    python3 bundle_standalone.py <input.html> [output.html]

Key fix from v1: replaces ALL asset paths (including images in script content)
with UUIDs BEFORE encoding, so the bootstrap's UUID->blobURL replacement works.
"""

import sys
import os
import json
import base64
import gzip
import uuid
import re
from pathlib import Path

MIME_MAP = {
    '.js': 'application/javascript',
    '.jsx': 'text/jsx',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.html': 'text/html',
}
TEXT_EXTENSIONS = {'.js', '.jsx', '.css', '.html', '.svg', '.json'}


def get_mime(filepath):
    ext = Path(filepath).suffix.lower()
    return MIME_MAP.get(ext, 'application/octet-stream')


def is_text_asset(filepath):
    return Path(filepath).suffix.lower() in TEXT_EXTENSIONS


def read_existing_standalone_bootstrap():
    standalone_path = Path(__file__).parent.parent / 'raw' / 'Welcome Flows - 10 Emails _standalone_.html'
    if not standalone_path.exists():
        return None
    content = standalone_path.read_text(encoding='utf-8')
    match = re.search(
        r"(document\.addEventListener\('DOMContentLoaded'.*?</script>)",
        content, re.DOTALL
    )
    return match.group(1) if match else None


def find_asset_path(src_path, html_dir):
    if src_path.startswith('http://') or src_path.startswith('https://'):
        return None
    resolved = (html_dir / src_path).resolve()
    if resolved.exists():
        return resolved
    resolved = (html_dir / '..' / src_path).resolve()
    if resolved.exists():
        return resolved
    return None


def build_bundle(html_path):
    html_path = Path(html_path).resolve()
    html_dir = html_path.parent
    html_content = html_path.read_text(encoding='utf-8')

    assets = {}        # uuid -> {content_bytes, mime}
    path_to_uuid = {}  # relative_path -> uuid

    # ── Step 1: Find ALL references ──────────────────────────
    # From HTML
    script_srcs = re.findall(r'<script[^>]*\ssrc=["\']([^"\']+)["\']', html_content, re.IGNORECASE)
    link_hrefs = re.findall(r'<link[^>]*\shref=["\']([^"\']+)["\']', html_content, re.IGNORECASE)
    css_urls = re.findall(r'url\(["\']?([^"\')\s]+)["\']?\)', html_content, re.IGNORECASE)
    img_srcs = re.findall(r'<img[^>]*\ssrc=["\']([^"\']+)["\']', html_content, re.IGNORECASE)

    # Collect all non-CDN, non-data references
    all_refs = set()
    for ref in script_srcs + link_hrefs + img_srcs:
        if not ref.startswith('http') and not ref.startswith('data:'):
            all_refs.add(ref)
    for ref in css_urls:
        if not ref.startswith('http') and not ref.startswith('data:'):
            all_refs.add(ref)

    # ── Step 2: Resolve and read all referenced files ────────
    # Read script content as text (for later path replacement)
    script_texts = {}  # src -> text content
    for src in script_srcs:
        if src.startswith('http'):
            continue
        resolved = find_asset_path(src, html_dir)
        if resolved:
            try:
                script_texts[src] = resolved.read_text(encoding='utf-8')
                all_refs.add(src)
            except:
                pass

    # ── Step 3: Scan script content for MORE references ──────
    # Image paths, other file references inside JSX/JS
    for src, text in script_texts.items():
        # Find image file references
        img_refs = re.findall(r'["\']([^"\']*\.(?:jpg|jpeg|png|gif|svg))["\']', text, re.IGNORECASE)
        for ref in img_refs:
            if not ref.startswith('http') and not ref.startswith('data:'):
                all_refs.add(ref)
        # Find other script references
        js_refs = re.findall(r'["\']([^"\']*\.(?:js|jsx|css))["\']', text, re.IGNORECASE)
        for ref in js_refs:
            if not ref.startswith('http') and not ref.startswith('data:'):
                all_refs.add(ref)

    # ── Step 4: Assign UUIDs to all references ───────────────
    for ref in all_refs:
        if ref in path_to_uuid:
            continue
        resolved = find_asset_path(ref, html_dir)
        if resolved:
            path_to_uuid[ref] = str(uuid.uuid4())

    # ── Step 5: Replace paths in script content with UUIDs ───
    # This MUST happen before encoding
    for src, text in script_texts.items():
        for path, uid in path_to_uuid.items():
            text = text.replace(f'"{path}"', f'"{uid}"')
            text = text.replace(f"'{path}'", f"'{uid}'")
        script_texts[src] = text

    # ── Step 6: Replace paths in HTML template with UUIDs ────
    template = html_content
    for path, uid in path_to_uuid.items():
        template = template.replace(f'"{path}"', f'"{uid}"')
        template = template.replace(f"'{path}'", f"'{uid}'")

    # Strip Google Fonts link tags
    template = re.sub(r'<link[^>]*fonts\.googleapis\.com[^>]*/?\s*>', '', template)
    template = re.sub(r'<link[^>]*fonts\.gstatic\.com[^>]*/?\s*>', '', template)
    # Strip integrity/crossorigin
    template = re.sub(r'\s+integrity="[^"]*"', '', template)
    template = re.sub(r'\s+crossorigin="[^"]*"', '', template)

    # ── Step 7: Encode all assets ────────────────────────────
    for path, uid in path_to_uuid.items():
        resolved = find_asset_path(path, html_dir)
        if not resolved:
            continue
        mime = get_mime(resolved)

        # For scripts that we already read as text (with paths replaced)
        if path in script_texts:
            raw = script_texts[path].encode('utf-8')
            compressed = gzip.compress(raw)
            assets[uid] = {
                'mime': mime,
                'compressed': True,
                'data': base64.b64encode(compressed).decode('ascii'),
            }
            print(f"  Script: {path} -> {uid[:8]}... ({mime})")
        elif is_text_asset(resolved):
            raw = resolved.read_bytes()
            compressed = gzip.compress(raw)
            assets[uid] = {
                'mime': mime,
                'compressed': True,
                'data': base64.b64encode(compressed).decode('ascii'),
            }
            print(f"  Text: {path} -> {uid[:8]}... ({mime})")
        else:
            raw = resolved.read_bytes()
            assets[uid] = {
                'mime': mime,
                'compressed': False,
                'data': base64.b64encode(raw).decode('ascii'),
            }
            print(f"  Binary: {path} -> {uid[:8]}... ({mime})")

    # ── Step 8: Build ext_resources (logo + product photos) ──
    ext_resources = []
    # Photo name mapping for __resources (flat-lay JPGs + lifestyle PNGs)
    photo_names = {
        # Flat-lay JPGs (11)
        'training-pant-fox-red-white.jpg': 'photo-fox-red',
        'training-pant-cloud-raindrop-white.jpg': 'photo-cloud-white',
        'training-pant-penguin-multicolor.jpg': 'photo-penguin',
        'training-pant-bunny-hearts-pink.jpg': 'photo-bunny-pink',
        'training-pant-watermelon-pink.jpg': 'photo-watermelon',
        'training-pant-fox-woodland-white.jpg': 'photo-fox-woodland',
        'swim-diaper-whale-ocean-blue.jpg': 'photo-whale',
        'swim-diaper-giraffe-yellow.jpg': 'photo-giraffe',
        'swim-diaper-unicorn-pink.jpg': 'photo-unicorn',
        'pocket-diaper-moon-cloud-blue.jpg': 'photo-moon-cloud',
        'diaper-woodland-creature-yellow.jpg': 'photo-woodland',
        # Logo
        'brightkidco-logo-v2.png': 'logoV2',
        # Lifestyle PNGs (8 working, 3 excluded per plan)
        'toddler-livingroom-dino-yellow.png': 'photo-toddler-livingroom',
        'toddler-napping-watermelon-pink-shorts.png': 'photo-toddler-napping',
        'toddler-backpack-moon-cloud-blue.png': 'photo-toddler-backpack',
        'toddler-potty-ladder-yellow-woodland.png': 'photo-toddler-potty-woodland',
        'toddler-rearview-cat-mustard.png': 'photo-toddler-rearview',
        'founders-holding-pants-yellow-watermelon.png': 'photo-founders',
        'toddler-playing-train-moon-cloud-blue.png': 'photo-toddler-playing',
        'toddler-potty-ladder-pink-multicolor.png': 'photo-toddler-potty-pink',
        'washing-machine-training-pants.png': 'photo-washing',
    }
    for path, uid in path_to_uuid.items():
        basename = os.path.basename(path)
        if basename in photo_names:
            ext_resources.append({'id': photo_names[basename], 'uuid': uid})

    # ── Step 9: Build output ─────────────────────────────────
    manifest_json = json.dumps(assets, separators=(',', ':'))
    ext_resources_json = json.dumps(ext_resources, separators=(',', ':'))
    template_json = json.dumps(template, ensure_ascii=False)
    # Escape </script> in template JSON
    template_json = template_json.replace('</', r'<\/')

    bootstrap = read_existing_standalone_bootstrap()
    if not bootstrap:
        bootstrap = "// Bootstrap script not found"

    output = f'''<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>BrightKidCo Email Design — Standalone</title>
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    body {{ background: #EEE8DC; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }}
    #__bundler_loading {{ position: fixed; bottom: 20px; right: 20px; font: 13px/1.4 -apple-system, BlinkMacSystemFont, sans-serif; color: #666; background: #fff; padding: 8px 14px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.12); z-index: 10000; }}
  </style>
  <noscript>
    <style>#__bundler_loading {{ display: none; }}</style>
  </noscript>
</head>
<body>
  <div id="__bundler_loading">Unpacking...</div>

  <script>
{bootstrap}
  </script>

  <script type="__bundler/manifest">
{manifest_json}
  </script>

  <script type="__bundler/ext_resources">
{ext_resources_json}
  </script>

  <script type="__bundler/template">
{template_json}
  </script>
</body>
</html>'''

    return output


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 bundle_standalone.py <input.html> [output.html]")
        sys.exit(1)

    input_path = Path(sys.argv[1]).resolve()
    if not input_path.exists():
        print(f"Error: {input_path} does not exist")
        sys.exit(1)

    if len(sys.argv) >= 3:
        output_path = Path(sys.argv[2]).resolve()
    else:
        output_path = input_path.parent / f"{input_path.stem} _standalone_.html"

    print(f"Bundling: {input_path}")
    print(f"Output:   {output_path}")
    print()

    result = build_bundle(input_path)
    output_path.write_text(result, encoding='utf-8')

    size_kb = output_path.stat().st_size / 1024
    print(f"\nDone: {output_path} ({size_kb:.0f} KB)")


if __name__ == '__main__':
    main()
