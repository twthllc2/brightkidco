#!/usr/bin/env python3
"""Convert Replenish A/B JSX emails to production XHTML."""
import re, os

BRAND = {
    "teal": "#2BAEB4", "green": "#5DD07A", "ink": "#1F2D2F",
    "soft": "#4A6568", "cream": "#FBF7F1", "paper": "#FFFFFF",
    "muted": "#8A9B9D", "tealDeep": "#2BAEB4",
    "gradient": "linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)",
}
FONT_MAIN = "Questrial, Arial, sans-serif"
FONT_DISPLAY = "Georgia, serif"
LOGO = "/root/projects/brightkidco/raw/product-photos/branding/black-placeholder.png"
PRODUCT_BASE = "/root/projects/brightkidco/raw/product-photos"

XHTML_HEAD = '''<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="x-apple-disable-message-reformatting" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>{title}</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<style type="text/css">
  body, table, td, a {{ -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }}
  table, td {{ mso-table-lspace: 0pt; mso-table-rspace: 0pt; }}
  img {{ -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }}
  body {{ margin: 0 !important; padding: 0 !important; width: 100% !important; }}
  a[x-apple-data-detectors] {{ color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }}
  @media only screen and (max-width: 620px) {{
    .email-container {{ width: 100% !important; max-width: 100% !important; }}
    .fluid {{ max-width: 100% !important; height: auto !important; }}
    .stack-column {{ display: block !important; width: 100% !important; max-width: 100% !important; }}
    .center-on-narrow {{ text-align: center !important; display: block !important; margin-left: auto !important; margin-right: auto !important; float: none !important; }}
    .hero-headline {{ font-size: 26px !important; }}
  }}
  @media (prefers-color-scheme: dark) {{
    body, .email-bg {{ background-color: #1a1a1a !important; }}
    .dark-bg {{ background-color: #2a2a2a !important; }}
    .dark-card-bg {{ background-color: #333333 !important; }}
    .dark-text {{ color: #e0e0e0 !important; }}
    .dark-text-muted {{ color: #999999 !important; }}
    .dark-border {{ border-color: #555555 !important; }}
    .dark-border-left {{ border-left-color: #5DD07A !important; }}
    .dark-teal {{ color: #2BAEB4 !important; }}
    .dark-cream-bg {{ background-color: #2a2a2a !important; }}
  }}
</style>
</head>
<body style="margin: 0; padding: 0; background-color: {bg}; font-family: {font}; -webkit-font-smoothing: antialiased;">
'''

XHTML_FOOTER = '''
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>'''

def resolve_jsx_strings(s):
    """Replace JSX template literals and JS expressions with plain strings."""
    # {LOGO} -> path
    s = s.replace('{LOGO}', LOGO)
    # F.main references
    s = re.sub(r'\{F\.main\}', FONT_MAIN, s)
    s = re.sub(r'\{F\.display\}', FONT_DISPLAY, s)
    # B.xxx references in template literals
    for k, v in BRAND.items():
        s = re.sub(r'\{B\.' + k + r'\}', v, s)
    # ${B.xxx} template literals
    for k, v in BRAND.items():
        s = s.replace('${B.' + k + '}', v)
    # String literals like `"linear-gradient(180deg, ${B.teal} 0%, ${B.cream} 100%)"`
    for k, v in BRAND.items():
        s = s.replace('${B.' + k + '}', v)
    return s

def jsx_to_html_attr(style_str):
    """Convert JSX camelCase style properties to CSS kebab-case."""
    # Remove { and } wrapping
    s = style_str.strip()
    if s.startswith('{') and s.endswith('}'):
        s = s[1:-1]
    
    # Already a string literal in JSX: style={{...}} -> style="..."
    # Convert camelCase to kebab-case
    def camel_to_kebab(m):
        return '-' + m.group(0).lower()
    
    # Handle the common JSX style patterns
    s = re.sub(r'([a-z])([A-Z])', camel_to_kebab, s)
    
    # Fix specific known patterns
    replacements = {
        'text-align': 'text-align',
        'font-size': 'font-size',
        'line-height': 'line-height',
        'font-weight': 'font-weight',
        'letter-spacing': 'letter-spacing',
        'text-transform': 'text-transform',
        'text-decoration': 'text-decoration',
        'border-radius': 'border-radius',
        'border-left': 'border-left',
        'border-top': 'border-top',
        'border-bottom': 'border-bottom',
        'border-right': 'border-right',
        'box-shadow': 'box-shadow',
        'max-width': 'max-width',
        'min-width': 'min-width',
        'max-height': 'max-height',
        'margin-top': 'margin-top',
        'margin-bottom': 'margin-bottom',
        'margin-left': 'margin-left',
        'margin-right': 'margin-right',
        'padding-top': 'padding-top',
        'padding-bottom': 'padding-bottom',
        'padding-left': 'padding-left',
        'padding-right': 'padding-right',
        'background-color': 'background-color',
        'background-image': 'background-image',
        'background-size': 'background-size',
        'flex-direction': 'flex-direction',
        'flex-shrink': 'flex-shrink',
        'align-items': 'align-items',
        'align-self': 'align-self',
        'justify-content': 'justify-content',
        'stroke-width': 'stroke-width',
        'stroke-linecap': 'stroke-linecap',
        'stroke-linejoin': 'stroke-linejoin',
        'stroke-dasharray': 'stroke-dasharray',
        'fill-opacity': 'fill-opacity',
        'font-style': 'font-style',
        'white-space': 'white-space',
        'overflow': 'overflow',
        'vertical-align': 'vertical-align',
        'aspect-ratio': 'aspect-ratio',
    }
    
    # Return as-is for the styles we've already handled
    return s

def fix_svg_attrs(html):
    """Convert JSX SVG attributes to HTML SVG attributes."""
    # strokeWidth -> stroke-width
    html = re.sub(r'strokeWidth=', 'stroke-width=', html)
    # strokeLinecap -> stroke-linecap
    html = re.sub(r'strokeLinecap=', 'stroke-linecap=', html)
    # strokeLinejoin -> stroke-linejoin
    html = re.sub(r'strokeLinejoin=', 'stroke-linejoin=', html)
    # strokeDasharray -> stroke-dasharray
    html = re.sub(r'strokeDasharray=', 'stroke-dasharray=', html)
    # fillRule -> fill-rule
    html = re.sub(r'fillRule=', 'fill-rule=', html)
    return html

def wrap_mso_cta(button_text, href, bg_color, text_color, font_family, font_size, font_weight, height, border_radius):
    """Wrap a CTA button in MSO-compatible VML block."""
    # Remove the arrow from button text for display
    display_text = button_text.strip()
    
    return f'''<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{href}" style="height:{height}px;v-text-anchor:middle;width:320px;" arcsize="50%" strokecolor="{bg_color}" fillcolor="{bg_color}">
<w:anchorlock/>
<center style="color:{text_color};font-family:{font_family};font-size:{font_size}px;font-weight:{font_weight};">{display_text}</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<a href="{href}" style="display:inline-block;padding:0 32px;background-color:{bg_color};color:{text_color};font-family:{font_family};font-size:{font_size}px;font-weight:{font_weight};letter-spacing:0.5px;text-decoration:none;border-radius:999px;height:{height}px;line-height:{height}px;text-align:center;">{display_text}</a>
<!--<![endif]-->'''

def wrap_mso_outline_cta(button_text, href, border_color, text_color, font_family, font_size, font_weight, height):
    """Wrap an outline CTA button in MSO-compatible format."""
    display_text = button_text.strip()
    
    return f'''<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{href}" style="height:{height}px;v-text-anchor:middle;width:320px;" arcsize="50%" strokecolor="{border_color}" fillcolor="transparent">
<w:anchorlock/>
<center style="color:{text_color};font-family:{font_family};font-size:{font_size}px;font-weight:{font_weight};">{display_text}</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<a href="{href}" style="display:inline-block;padding:0 32px;background-color:transparent;color:{text_color};font-family:{font_family};font-size:{font_size}px;font-weight:{font_weight};letter-spacing:0.5px;text-decoration:none;border-radius:999px;height:{height}px;line-height:{height}px;text-align:center;border:2px solid {border_color};">{display_text}</a>
<!--<![endif]-->'''

# Map image references from JSX to actual paths
IMAGE_MAP = {
    "toddler-playing-train-moon-cloud-blue.png": f"{PRODUCT_BASE}/lifestyle/toddler-playing-train-moon-cloud-blue.png",
    "potty-ladder-yellow-woodland.png": f"{PRODUCT_BASE}/lifestyle/toddler-potty-ladder-yellow-woodland.png",
    "potty-ladder-yellow-woodland": f"{PRODUCT_BASE}/lifestyle/toddler-potty-ladder-yellow-woodland.png",
    "toddler-napping-watermelon-pink-shorts.png": f"{PRODUCT_BASE}/lifestyle/toddler-napping-watermelon-pink-shorts.png",
    "toddler-napping-watermelon-pink-shorts": f"{PRODUCT_BASE}/lifestyle/toddler-napping-watermelon-pink-shorts.png",
    "training-pant-cloud-raindrop-white.jpg": f"{PRODUCT_BASE}/flat-lay/training-pant-cloud-raindrop-white.jpg",
    "training-pant-cloud-raindrop-white": f"{PRODUCT_BASE}/flat-lay/training-pant-cloud-raindrop-white.jpg",
    "fox-red-white.jpg": f"{PRODUCT_BASE}/flat-lay/training-pant-fox-red-white.jpg",
    "fox-red-white": f"{PRODUCT_BASE}/flat-lay/training-pant-fox-red-white.jpg",
    "penguin-multicolor": f"{PRODUCT_BASE}/flat-lay/training-pant-penguin-multicolor.jpg",
    "penguin-multicolor.jpg": f"{PRODUCT_BASE}/flat-lay/training-pant-penguin-multicolor.jpg",
    "garden-path-winding.png": f"{PRODUCT_BASE}/branding/black-placeholder.png",
}

def resolve_image(sublabel, label=""):
    """Resolve a JSX image sublabel to an absolute path."""
    if not sublabel:
        return LOGO
    # Try exact match first
    sublabel_clean = sublabel.strip()
    if sublabel_clean in IMAGE_MAP:
        return IMAGE_MAP[sublabel_clean]
    # Try without extension
    for ext in ['.png', '.jpg', '.jpeg']:
        key = sublabel_clean.replace(ext, '')
        if key in IMAGE_MAP:
            return IMAGE_MAP[key]
    # Fallback: try to find in product-photos
    return LOGO

print("Script loaded. Run individual conversion functions.")
