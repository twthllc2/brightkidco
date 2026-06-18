#!/usr/bin/env python3
"""
bundle_standalone.py — Inline all external scripts and images from a Local.html
loader into a single self-contained HTML file.

Usage:
    python3 bundle_standalone.py <input.html> <output.html>

What it does:
1. Reads the input Local.html
2. Finds every <script src="..."> tag and inlines the file content
3. Finds every <img src="..."> tag and inlines the image as a data: URI base64
4. Writes the result to the output path
5. Logs the file size and the number of inlined assets

CDN scripts (https://unpkg.com, etc.) are NOT inlined — they stay as
external <script src="https://..."> references in the output, so the
bundled HTML can use cached CDN content.
"""

import sys
import os
import re
import base64
import mimetypes
from pathlib import Path
from urllib.parse import urlparse


def resolve_path(base_dir: Path, src: str) -> Path:
    """Resolve a relative src against the base directory of the HTML file."""
    if src.startswith(("http://", "https://", "data:")):
        return None  # external or already inlined
    # Strip any leading slash (treat as relative to base)
    return (base_dir / src).resolve()


def read_file_safely(path: Path) -> str | None:
    """Read a file as text. Return None if it doesn't exist or can't be read."""
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except (FileNotFoundError, UnicodeDecodeError, PermissionError) as e:
        print(f"  WARN: could not read {path}: {e}")
        return None


def encode_image_as_data_uri(path: Path) -> str | None:
    """Read an image file and return a data: URI string."""
    try:
        with open(path, "rb") as f:
            data = f.read()
    except (FileNotFoundError, PermissionError) as e:
        print(f"  WARN: could not read image {path}: {e}")
        return None

    mime, _ = mimetypes.guess_type(str(path))
    if mime is None:
        # Default to png if we can't guess
        ext = path.suffix.lower().lstrip(".")
        mime = {"png": "image/png", "jpg": "image/jpeg", "jpeg": "image/jpeg",
                "gif": "image/gif", "svg": "image/svg+xml", "webp": "image/webp"}.get(ext, "application/octet-stream")

    b64 = base64.b64encode(data).decode("ascii")
    return f"data:{mime};base64,{b64}"


def bundle(input_path: str, output_path: str) -> dict:
    """Bundle the input HTML into a self-contained output HTML.

    Returns a stats dict with: inlined_scripts, inlined_images, output_size, etc.

    Path rewriting:
    When a script from path X is inlined, any relative path inside that
    script (like '../assets/logo.png') is relative to X. After inlining,
    the script lives in output_path, so relative paths break. We rewrite
    known patterns (../assets/) to point to the original location of the
    source script.
    """
    input_p = Path(input_path).resolve()
    output_p = Path(output_path).resolve()
    base_dir = input_p.parent

    if not input_p.exists():
        raise FileNotFoundError(f"Input HTML not found: {input_p}")

    print(f"Reading:  {input_p}")
    html = input_p.read_text(encoding="utf-8")
    print(f"  size:   {len(html):,} bytes")

    stats = {
        "inlined_scripts": 0,
        "inlined_images": 0,
        "external_scripts": 0,
        "external_images": 0,
        "path_rewrites": 0,
        "failed_assets": [],
    }

    def rewrite_relative_paths(content: str, source_file: Path) -> str:
        """Rewrite ../assets/ paths in the inlined script to be relative to
        the OUTPUT HTML file (since after inlining, the script lives there).

        The original script is at source_file. It uses paths like
        '../assets/foo.png' which were relative to its own dir. After we
        move it to output_p, those paths need to point to where the assets
        actually live.

        We compute: output_p_dir -> source_file_dir = N levels up
        Then: 'assets/foo.png' (from source_file_dir) becomes:
              '..' * N + 'assets/foo.png' (from output_p_dir)
        But we also need to know WHERE the assets folder is. The simplest
        is to preserve the source_file's location by computing a path from
        output_p back to the assets folder.
        """
        nonlocal stats
        # Find the assets dir relative to source_file
        # source_file is like raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx
        # Assets is at raw/BKCO - EMAIL MARKETING/assets/
        # The pattern '../assets/' in source means: go up from source's dir
        # (welcome-flow/) to BKCO - EMAIL MARKETING/, then into assets/
        # So: source.parent / "../assets/" resolves to source.parent.parent / "assets"

        source_dir = source_file.parent
        # The asset location, as a real path on disk
        asset_real = (source_dir / "../assets").resolve()

        # Now compute the relative path from output_p's dir to asset_real
        try:
            assets_rel_to_output = os.path.relpath(asset_real, output_p.parent)
        except ValueError:
            return content  # different drive on Windows, give up

        # Replace '../assets/' with the computed relative path
        new_content, n = re.subn(
            r'\.\./assets/',
            assets_rel_to_output.replace("\\", "/") + "/",
            content
        )
        if n > 0:
            stats["path_rewrites"] += n
        return new_content

    def replace_script_tag(match):
        full_tag = match.group(0)
        attrs = match.group(1)
        src_match = re.search(r'src=["\']([^"\']+)["\']', attrs)
        if not src_match:
            return full_tag
        src = src_match.group(1)
        if src.startswith(("http://", "https://")):
            stats["external_scripts"] += 1
            return full_tag
        local_path = resolve_path(base_dir, src)
        if local_path is None:
            return full_tag
        content = read_file_safely(local_path)
        if content is None:
            stats["failed_assets"].append(str(local_path))
            return full_tag
        type_match = re.search(r'type=["\']([^"\']+)["\']', attrs)
        type_attr = f' type="{type_match.group(1)}"' if type_match else ""

        # Rewrite relative paths in the inlined script
        content = rewrite_relative_paths(content, local_path)

        stats["inlined_scripts"] += 1
        print(f"  script: {src}  →  {local_path.name} ({len(content):,} bytes)")
        return f"<script{type_attr}>\n// === {local_path.name} ===\n{content}\n</script>"

    html = re.sub(r'<script\b([^>]*?)></script>', replace_script_tag, html)

    def replace_img_tag(match):
        full_tag = match.group(0)
        attrs = match.group(1)
        src_match = re.search(r'src=["\']([^"\']+)["\']', attrs)
        if not src_match:
            return full_tag
        src = src_match.group(1)
        if src.startswith(("http://", "https://", "data:")):
            if not src.startswith("data:"):
                stats["external_images"] += 1
            return full_tag
        local_path = resolve_path(base_dir, src)
        if local_path is None:
            return full_tag
        data_uri = encode_image_as_data_uri(local_path)
        if data_uri is None:
            stats["failed_assets"].append(str(local_path))
            return full_tag
        stats["inlined_images"] += 1
        new_attrs = re.sub(r'src=["\'][^"\']+["\']', f'src="{data_uri}"', attrs)
        print(f"  image:  {src}  →  {local_path.name} (inlined, {len(data_uri):,} chars)")
        return f"<img{new_attrs} />"

    html = re.sub(r'<img\b([^>]*?)/?>', replace_img_tag, html)

    output_p.parent.mkdir(parents=True, exist_ok=True)
    output_p.write_text(html, encoding="utf-8")

    stats["output_size"] = len(html)
    stats["output_path"] = str(output_p)

    print(f"\nOutput:  {output_p}")
    print(f"  size:   {len(html):,} bytes ({len(html) / 1024 / 1024:.1f} MB)")
    print(f"  scripts inlined:    {stats['inlined_scripts']}")
    print(f"  external scripts:   {stats['external_scripts']}")
    print(f"  images inlined:     {stats['inlined_images']}")
    print(f"  external images:    {stats['external_images']}")
    print(f"  path rewrites:      {stats['path_rewrites']}")
    if stats["failed_assets"]:
        print(f"  failed assets:      {len(stats['failed_assets'])}")
        for f in stats["failed_assets"]:
            print(f"    - {f}")

    return stats


def main():
    if len(sys.argv) != 3:
        print("Usage: python3 bundle_standalone.py <input.html> <output.html>")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]

    try:
        stats = bundle(input_path, output_path)
        sys.exit(0)
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
