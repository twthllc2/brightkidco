#!/usr/bin/env python3
"""
BKC Email HTML Builder
Builds HTML for the remaining 93 BKC emails across multiple flows.
Uses locked header/footer and System B colors.
"""

import os
import re
import json
from pathlib import Path

# =============================================================
# CONSTANTS
# =============================================================
ROOT = Path("/root/projects/brightkidco")
COPY_DIR = ROOT / "outputs" / "copy"
WIREFRAMES_DIR = ROOT / "outputs" / "wireframes"
HTML_DIR = ROOT / "outputs" / "html"
HEADER_PATH = ROOT / "outputs" / "email-design-environment" / "_extracted" / "header.html"
FOOTER_PATH = ROOT / "outputs" / "email-design-environment" / "_extracted" / "footer.html"

# System B colors (NO teal #2BAEB4)
BRAND_GREEN = "#039902"
INK = "#1F2D2F"
INK_BORDER = "#2F3D40"
OFFWHITE = "#FAF9F7"
PAPER = "#FBF7EB"  # cream
YELLOW = "#F5C84B"
LIME = "#D8F57C"
TEXT = "#1A1A1A"
TEXT_MUTED = "#4A4A4A"
MUTED = "#8A9B9D"
SHADOW = "0 2px 8px rgba(26,26,26,0.06)"

# Image rotation pool (cap 25x across the build)
IMAGE_POOL = [
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-livingroom-dino-yellow.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-potty-ladder-pink-multicolor.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-potty-ladder-yellow-woodland.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-playing-train-moon-cloud-blue.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-napping-watermelon-pink-shorts.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-backpack-moon-cloud-blue.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-rearview-cat-mustard.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddler-outdoors-grass-disposable-diaper.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/toddlers-backview-disposable-diapers.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/washing-machine-training-pants.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/lifestyle/founders-holding-pants-yellow-watermelon.png",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/training-pant-fox-red-white.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/training-pant-fox-woodland-white.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/training-pant-penguin-multicolor.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/training-pant-watermelon-pink.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/training-pant-bunny-hearts-pink.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/training-pant-cloud-raindrop-white.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/diaper-woodland-creature-yellow.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/pocket-diaper-moon-cloud-blue.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/swim-diaper-giraffe-yellow.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/swim-diaper-unicorn-pink.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/swim-diaper-whale-ocean-blue.jpg",
    "/root/projects/brightkidco/outputs/email-assets/product-photos/flat-lay/laundry-bag-llama-cream.png",
]

# Component counter (cap 8x per component variant)
COMPONENT_USAGE = {}
IMAGE_USAGE = {}

# =============================================================
# LOCKED HEADER
# =============================================================
HEADER_BLOCK = '''<!-- BrightKidCo Logo Header -->
<div style="background:#FFFFFF; padding:24px 20px 0; text-align:center;">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABOIAAAEVCAYAAABNKUpAAAAAAXNSR0IArs4c6QAAAThlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAABpAAAAcgE7AAIAAAANAAAA3IdpAAQAAAABAAAA6gAAAAAAAABgAAAAAQAAAGAAAAABQ2FudmEgZG9jPURBSENubFE5SDBVIHVzZXI9VUFFZkJPdnd0V1UgYnJhbmQ9QkFFZkJNU3FISXMgdGVtcGxhdGU9UHVycGxlIEZ1biBLaWRzIFNlc3Npb24gSW5zdGFncmFtIFBvc3QAAE1pY2hhZWwgTW9sbAAAAAaQAAAHAAAABDAyMTCRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAABOKgAwAEAAAAAQAAARUAAAAAS0f+OAAAAAlwSFlzAAAOxAAADsQBlSsOGwAACPNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVibC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6QXR0cmliPSJodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvIj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjU2MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkV4aWZWZXJzaW9uPjAyMTA8L2V4aWY6RXhpZlZlcnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTYwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Rmxhc2hQaXhWZXJzaW9uPjAxMDA8L2V4aWY6Rmxhc2hQaXhWZXJzaW9uPgogICAgICAgICA8ZXhpZjpDb21wb25lbnRzQ29uZmlndXJhdGlvbj4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGk+MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4zPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+MDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvZXhpZjpDb21wb25lbnRzQ29uZmlndXJhdGlvbj4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NaW5rYSBNb2RlIC0gMTwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpBbHQ+CiAgICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5NaWNoYWVsIE1vbGw8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L2RjOmNyZWF0b3I+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjk2PC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj45NjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSBkb2M9REFIQ25sUTlIMFUgdXNlcj1VQUVmQk92d3RXVSBicmFuZD1CQUVmQk1TcUhJcyB0ZW1wbGF0ZT1QdXJwbGUgRnVuIEtpZHMgU2Vzc2lvbiBJbnN0YWdyYW0gUG9zdDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8QXR0cmliOkFkcz4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGk+cmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjYtMDQtMjI8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkV4dElkPmE5YTIwMjg0LWE0ZmMtNGYxNy1iZjQ5LTFiODYxYWVjZjcxOTwvQXR0cmliOkV4dElkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkRhdGE+eyJkb2..."
       alt="BrightKidCo"
       style="height:34px; display:inline-block; border:0; outline:none; text-decoration:none;" />
</div>'''

# =============================================================
# LOCKED LENA SIGN-OFF (required in every email)
# =============================================================
LENA_SIGNOFF = '''<!-- Lena Signoff (personal close) - on Off-White #FAF9F7 -->
<div style="background:#FAF9F7; padding:0 22px 36px;">
  <div style="position:relative; background:#1F2A2C; border:1.5px solid #2F3D40; border-radius:22px; padding:26px 24px 24px; overflow:hidden; font-family:'Questrial', system-ui, sans-serif;">

    <!-- subtle top gradient accent (Brand-Green) -->
    <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(135deg, #039902 0%, #5DD07A 100%); opacity:0.9;"></div>

    <!-- Top row: avatar + name/role -->
    <div style="display:flex; align-items:center; gap:14px; margin-bottom:18px;">

      <!-- Avatar with warm ring (yellow -> green gradient) -->
      <div style="width:58px; height:58px; flex-shrink:0; border-radius:50%; background:linear-gradient(135deg, #F5C84B 0%, #039902 100%); padding:2.5px; box-sizing:border-box;">
        <div style="width:100%; height:100%; border-radius:50%; background:#FFFDF6; display:flex; align-items:center; justify-content:center; overflow:hidden; border:1.5px solid #1F2D2F; box-sizing:border-box;">
          <svg width="58" height="58" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
            <rect width="58" height="58" fill="#F5E8D0"/>
            <circle cx="29" cy="22" r="10" fill="#D4A574"/>
            <path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B"/>
            <text x="29" y="55" text-anchor="middle" font-size="6" fill="#1F2D2F" font-weight="700" letter-spacing="0.5" opacity="0.4">PHOTO</text>
          </svg>
        </div>
      </div>

      <!-- Name + role block -->
      <div style="flex:1; min-width:0;">
        <div style="font-size:10.5px; letter-spacing:1.6px; text-transform:uppercase; color:#8FAFB2; font-weight:700; margin-bottom:2px;">
          A note from
        </div>
        <div style="font-size:17px; font-weight:700; color:#FFFFFF; line-height:1.2;">
          Lena Bauer
        </div>
        <div style="font-size:12px; color:#8FAFB2; margin-top:2px; font-style:italic;">
          Founder &middot; BrightKidCo &middot; Mom of two
        </div>
      </div>
    </div>

    <!-- Handwritten "Lena" signature -->
    <div style="display:flex; align-items:center; gap:14px; padding-top:16px; padding-bottom:16px; border-top:1.5px dashed #3A4547; border-bottom:1.5px dashed #3A4547; margin-bottom:16px;">
      <div style="flex:1;">
        <div style="font-size:12.5px; color:#B8CACD; margin-bottom:2px;">
          Talk soon,
        </div>
        <div style="font-family:'Caveat', cursive; font-size:42px; line-height:0.95; font-weight:500; color:#D8F57C; letter-spacing:-0.5px; margin-top:2px;">
          Lena
        </div>
      </div>

      <svg width="54" height="40" viewBox="0 0 54 40" style="flex-shrink:0; opacity:0.55;" xmlns="http://www.w3.org/2000/svg">
        <path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#D8F57C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M48,12 L52,10 L50,14" stroke="#D8F57C" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- P.S. (SHORT variant) -->
    <div style="font-size:13px; line-height:1.65; color:#B8CACD; font-style:italic;">
      <span style="color:#D8F57C; font-weight:700; font-style:normal; margin-right:4px;">P.S.</span>
      __PS_TEXT__
    </div>
  </div>
</div>'''

# =============================================================
# LOCKED FOOTER (legal/social/unsubscribe)
# =============================================================
FOOTER_BLOCK = '''<!-- Soft "Out" line -->
<div style="background:#FAF9F7; padding:18px 24px 0; text-align:center; font-size:12.5px; color:#8A9B9D; font-style:italic; font-family:'Questrial', system-ui, sans-serif;">
  You can pause this series anytime. Come back when you're ready.
</div>

<!-- BREZ-inspired legal/social/unsubscribe Footer -->
<div style="background:#FFFFFF; padding:30px 24px 30px; text-align:center; font-family:'Questrial', system-ui, sans-serif; color:#1F2D2F;">

  <div style="font-family:'Fraunces', Georgia, serif; font-size:20px; font-style:italic; font-weight:500; color:#1F2D2F; margin-bottom:30px; letter-spacing:-0.2px;">
    Calm progress, one day at a time.
  </div>

  <div style="font-size:14px; color:#1F2D2F; font-weight:500; margin-bottom:14px;">
    <a href="#" style="color:#1F2D2F; text-decoration:none;">Our Method</a>
  </div>
  <div style="font-size:14px; color:#1F2D2F; font-weight:500; margin-bottom:14px;">
    <a href="#" style="color:#1F2D2F; text-decoration:none;">Shop the Pants</a>
  </div>
  <div style="font-size:14px; color:#1F2D2F; font-weight:500; margin-bottom:14px;">
    <a href="#" style="color:#1F2D2F; text-decoration:none;">Parent Stories</a>
  </div>

  <!-- Social icons row (Instagram + TikTok - NO Facebook per demands §16.4) -->
  <div style="display:flex; justify-content:center; gap:22px; margin:14px 0 28px;">
    <a href="#" style="display:inline-block; line-height:0;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" stroke-width="1.8" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="#1F2D2F" stroke="none" />
      </svg>
    </a>
    <a href="#" style="display:inline-block; line-height:0;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F2D2F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" />
      </svg>
    </a>
  </div>

  <div style="font-size:11.5px; color:#8A9B9D; line-height:1.65; margin:0 auto; max-width:340px; font-family:'Questrial', system-ui, sans-serif;">
    No longer want to receive these emails?
    <a href="{{ unsubscribe_url }}" style="color:#1F2D2F; text-decoration:underline;">Unsubscribe</a>.<br/>
    <span style="font-size:11px;">BrightKidCo Ltd &middot; Brooklyn, NY 11201 &middot; hello@brightkidco.com</span>
  </div>

  <!-- Bottom gradient accent bar (Brand-Green) -->
  <div style="margin:28px auto 0; width:60px; height:3px; background:#039902; border-radius:3px;"></div>

</div>'''


# =============================================================
# SECTION COMPONENTS (reusable HTML building blocks)
# =============================================================

def section_wrapper(inner, pad_top=8, pad_bot=24, bg=OFFWHITE):
    """Wrap content in the standard 600px email table."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:{bg}; mso-table-lspace:0pt; mso-table-rspace:0pt;">
<tr><td align="center" style="padding:{pad_top}px 24px {pad_bot}px 24px;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
<tr><td style="padding:0; margin:0;">
{inner}
</td></tr>
</table>
</td></tr>
</table>'''


def c_headline(text, size=28, color=TEXT):
    """Section headline."""
    return f'<h1 style="margin:0px 0 18px 0; padding:0; font-family:\'Questrial\', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; font-size:{size}px; line-height:1.25; color:{color}; font-weight:400; letter-spacing:-0.02em; text-align:left;">{text}</h1>'


def c_subheadline(text, size=17, color=TEXT):
    """Sub-headline."""
    return f'<p style="margin:0 0 18px 0; padding:0; font-family:\'Questrial\', system-ui, sans-serif; font-size:{size}px; line-height:1.5; color:{color}; text-align:left; font-weight:400;">{text}</p>'


def c_paragraph(text, size=17, color=TEXT, last=False):
    """Body paragraph."""
    mb = "0" if last else "0 0 18px 0"
    return f'<p style="margin:{mb}; padding:0; font-family:\'Questrial\', system-ui, sans-serif; font-size:{size}px; line-height:1.6; color:{color}; text-align:left;">{text}</p>'


def c_quote(quote, attribution):
    """Testimonial callout box."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0;"><tr><td><div style="background:#FBF7EB; border-radius:12px; padding:18px 18px 18px 20px; border-left:3px solid #DBFFCD; box-shadow:{SHADOW}; font-family:'Questrial', system-ui, sans-serif;"><div style="font-size:17px; line-height:1.55; color:#1A1A1A; font-style:italic; font-weight:400;">&ldquo;{quote}&rdquo;</div><div style="font-size:12.5px; color:#4A4A4A; margin-top:10px; font-style:normal;">&mdash; {attribution}</div></div></td></tr></table>'''


def c_stat_block(big, small, cite=""):
    """Mint/cream stat block with accent bar."""
    cite_html = f'<div style="font-size:12px; color:#9AA8A7; margin-top:10px; font-style:italic;">{cite}</div>' if cite else ""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0; border-radius:12px; overflow:hidden; box-shadow:{SHADOW};">
<tr><td style="background:{BRAND_GREEN}; height:4px; font-size:0; line-height:0;">&nbsp;</td></tr>
<tr><td style="background:#FBF7EB; padding:22px 22px;">
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:28px; line-height:1.25; color:#1A1A1A; font-weight:700; margin:0 0 10px 0;">{big}</div>
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:16px; line-height:1.55; color:#4A4A4A; margin:0;">{small}</div>
{cite_html}
</td></tr>
</table>'''


def c_divider(width_pct=60, opacity=0.3):
    """Visual divider line."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td align="center" style="padding:0;"><div style="width:{width_pct}%; height:2px; background:rgba(3,153,2,{opacity}); line-height:2px; font-size:0;">&nbsp;</div></td></tr></table>'''


def c_image(path, alt, width=552):
    """Image section."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:{OFFWHITE}; mso-table-lspace:0pt; mso-table-rspace:0pt;">
<tr><td align="center" style="padding:0 24px 0 24px;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
<tr><td style="padding:0; margin:0;">
<img src="{path}" alt="{alt}" width="{width}" style="display:block; width:100%; max-width:{width}px; height:auto; border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic;" />
</td></tr>
</table>
</td></tr>
</table>'''


def c_button(text, href="#", color=BRAND_GREEN, font_color="#FFFFFF", size=18):
    """CTA button."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:8px 0 12px 0;">
<tr><td align="center" style="padding:0;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width:100%;">
<tr><td align="center" bgcolor="{color}" style="background:{color}; border-radius:8px; padding:0;">
<a href="{href}" target="_blank" style="display:block; width:100%; min-height:52px; line-height:1.2; padding:16px 24px; font-family:'Questrial', system-ui, sans-serif; font-size:{size}px; font-weight:700; color:{font_color}; text-align:center; text-decoration:none; border-radius:8px; box-sizing:border-box;">{text}</a>
</td></tr>
</table>
</td></tr>
</table>'''


def c_sublink(text, href="#"):
    """Sub-link below CTA."""
    return f'<div style="text-align:center; margin:0 0 12px 0;"><a href="{href}" style="font-family:\'Questrial\', system-ui, sans-serif; font-size:15px; color:{BRAND_GREEN}; text-decoration:underline; font-weight:400;">{text}</a></div>'


def c_guarantee(text="60 days to try it. By your judgment. If it doesn\'t work for your child, full refund."):
    """Guarantee block with mint border."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0; border-radius:12px; overflow:hidden; box-shadow:{SHADOW};">
<tr><td style="background:#DBFFCD; padding:18px 22px; border-left:3px solid {BRAND_GREEN};">
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:16px; line-height:1.55; color:#1A1A1A; font-weight:400;">{text}</div>
</td></tr>
</table>'''


def c_photo_essay(items):
    """Photo-essay section: list of {path, caption}."""
    rows = ""
    for it in items:
        rows += f'''<tr><td style="padding:0 0 18px 0;">
<img src="{it['path']}" alt="{it.get('alt','')}" width="552" style="display:block; width:100%; max-width:552px; height:auto; border:0; border-radius:8px;" />
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:14px; color:#4A4A4A; margin-top:8px; font-style:italic;">{it.get('caption','')}</div>
</td></tr>'''
    return f'<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">{rows}</table>'


def c_checklist(items):
    """Checklist with green dots."""
    rows = ""
    for it in items:
        rows += f'''<tr><td style="padding:0 0 12px 0;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr>
<td valign="top" width="24" style="padding:2px 0 0 0;">
<div style="width:8px; height:8px; border-radius:50%; background:{BRAND_GREEN}; margin-top:8px;"></div>
</td>
<td valign="top" style="padding:0; font-family:'Questrial', system-ui, sans-serif; font-size:16px; line-height:1.55; color:#1A1A1A;">{it}</td>
</tr></table>
</td></tr>'''
    return f'<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">{rows}</table>'


def c_pullquote(quote, cite=""):
    """Big pull-quote (serif italic)."""
    cite_html = f'<div style="font-size:13px; color:#4A4A4A; margin-top:14px; font-family:\'Questrial\', system-ui, sans-serif; font-style:normal;">&mdash; {cite}</div>' if cite else ""
    return f'''<div style="margin:8px 0 24px 0; padding:8px 0 8px 0; border-left:3px solid {BRAND_GREEN}; padding-left:18px;">
<div style="font-family:'Fraunces', Georgia, serif; font-size:22px; line-height:1.4; color:#1A1A1A; font-style:italic; font-weight:500;">&ldquo;{quote}&rdquo;</div>
{cite_html}
</div>'''


def c_origin_story(intro, body):
    """Origin-story / founder story block."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0; background:#FBF7EB; border-radius:12px; padding:22px 22px; box-shadow:{SHADOW};"><tr><td>
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:18px; line-height:1.55; color:#1A1A1A; font-weight:700; margin:0 0 10px 0;">{intro}</div>
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:16px; line-height:1.6; color:#1A1A1A;">{body}</div>
</td></tr></table>'''


def c_dialogue(messages):
    """Text-message conversation."""
    rows = ""
    for m in messages:
        who = m.get("who", "them")
        align = "left" if who == "them" else "right"
        bg = "#FFFFFF" if who == "them" else "#E8F5E1"
        bdr = "#E0D8C4" if who == "them" else "#DBFFCD"
        rows += f'''<tr><td align="{align}" style="padding:0 0 8px 0;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="80%" style="max-width:80%; background:{bg}; border:1px solid {bdr}; border-radius:14px; padding:10px 14px;">
<tr><td style="font-family:'Questrial', system-ui, sans-serif; font-size:15px; line-height:1.5; color:#1A1A1A;">{m['text']}</td></tr>
</table>
</td></tr>'''
    return f'<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0;">{rows}</table>'


def c_milestone(items):
    """Milestone tracker (numbered list)."""
    rows = ""
    for i, it in enumerate(items, 1):
        rows += f'''<tr>
<td valign="top" width="40" style="padding:0 12px 0 0;">
<div style="width:28px; height:28px; border-radius:50%; background:{BRAND_GREEN}; color:#FFFFFF; font-family:'Questrial', system-ui, sans-serif; font-size:14px; font-weight:700; line-height:28px; text-align:center;">{i}</div>
</td>
<td valign="top" style="padding:0; font-family:'Questrial', system-ui, sans-serif; font-size:16px; line-height:1.55; color:#1A1A1A;">{it}</td>
</tr>'''
    return f'<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0;">{rows}</table>'


def c_split_compare(before, after, label_before="What you've tried", label_after="What we do"):
    """Side-by-side comparison."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0;">
<tr>
<td valign="top" width="48%" style="padding:0 8px 0 0;">
<div style="background:#FBF7EB; border-radius:12px; padding:18px; box-shadow:{SHADOW};">
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:11px; letter-spacing:1.2px; text-transform:uppercase; color:#4A4A4A; font-weight:700; margin:0 0 10px 0;">{label_before}</div>
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:15px; line-height:1.55; color:#1A1A1A;">{before}</div>
</div>
</td>
<td valign="top" width="48%" style="padding:0 0 0 8px;">
<div style="background:#E8F5E1; border-radius:12px; padding:18px; box-shadow:{SHADOW};">
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:11px; letter-spacing:1.2px; text-transform:uppercase; color:#039902; font-weight:700; margin:0 0 10px 0;">{label_after}</div>
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:15px; line-height:1.55; color:#1A1A1A;">{after}</div>
</div>
</td>
</tr>
</table>'''


def c_reframe_mint(quote, body):
    """Mint block (reframe)."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 24px 0; background:#DBFFCD; border-radius:12px; padding:22px; box-shadow:{SHADOW};"><tr><td>
<div style="font-family:'Fraunces', Georgia, serif; font-size:20px; line-height:1.4; color:#1A1A1A; font-style:italic; font-weight:600; margin:0 0 10px 0;">&ldquo;{quote}&rdquo;</div>
<div style="font-family:'Questrial', system-ui, sans-serif; font-size:16px; line-height:1.6; color:#1A1A1A;">{body}</div>
</td></tr></table>'''


def c_kid_card(title, body, color="#FBF7EB", border="#DBFFCD"):
    """Cream card with side border."""
    return f'''<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 18px 0;"><tr><td><div style="background:{color}; border-radius:12px; padding:18px 18px 18px 20px; border-left:3px solid {border}; box-shadow:{SHADOW}; font-family:'Questrial', system-ui, sans-serif;"><div style="font-size:15px; line-height:1.5; color:#1A1A1A; font-weight:700; margin:0 0 6px 0;">{title}</div><div style="font-size:14.5px; line-height:1.55; color:#1A1A1A;">{body}</div></div></td></tr></table>'''


# =============================================================
# ASSEMBLY
# =============================================================

def assemble_email(subject, preheader, sections, ps_text="Thanks for being here. If you have a question, hit reply. You'll get me — not a template, not a bot. I read everything."):
    """Assemble final email HTML: header + sections + sign-off + footer."""
    # Sections list contains pre-built section tables or text blocks
    body = "\n".join(sections)

    signoff = LENA_SIGNOFF.replace("__PS_TEXT__", ps_text)

    return f'''<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<meta name="color-scheme" content="light only" />
<meta name="supported-color-schemes" content="light only" />
<title>{subject}</title>
</head>
<body style="margin:0; padding:0; background:#FAF9F7; -webkit-text-size-adjust:100%;">
<!-- Preheader (hidden) -->
<div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#FAF9F7; opacity:0;">
{preheader}
</div>
<!-- Email wrapper table -->
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#FAF9F7; mso-table-lspace:0pt; mso-table-rspace:0pt;">
<tr><td align="center" style="padding:0; margin:0;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="width:100%; max-width:600px; background:#FAF9F7; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#1F2D2F;">
<tr><td>
{HEADER_BLOCK}
{body}
{signoff}
{FOOTER_BLOCK}
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>
'''


def pick_image(used, idx=0):
    """Pick an image, rotating through the pool, with usage cap 25x."""
    global IMAGE_USAGE
    img = IMAGE_POOL[idx % len(IMAGE_POOL)]
    IMAGE_USAGE[img] = IMAGE_USAGE.get(img, 0) + 1
    if IMAGE_USAGE[img] > 25:
        # rotate to next
        for i, p in enumerate(IMAGE_POOL):
            if IMAGE_USAGE.get(p, 0) < 25:
                IMAGE_USAGE[p] = IMAGE_USAGE.get(p, 0) + 1
                return p
    return img


# =============================================================
# WRITE FILE HELPER
# =============================================================

def write_email(flow, name, html):
    """Save email HTML to /root/projects/brightkidco/outputs/html/{flow}/{name}.html"""
    outdir = HTML_DIR / flow
    outdir.mkdir(parents=True, exist_ok=True)
    outpath = outdir / f"{name}.html"
    outpath.write_text(html, encoding="utf-8")
    return outpath


if __name__ == "__main__":
    print("BKC Email Builder library loaded.")
