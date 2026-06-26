#!/usr/bin/env python3
"""BKC Email Assembler v3 — proper HTML templates per section type, using component picks."""
import json, os, re, sys, random
from pathlib import Path

B = {"teal":"#2BAEB4","tealDeep":"#1E8A8F","green":"#5DD07A","ink":"#1F2D2F","soft":"#4A6568","muted":"#8A9B9D","cream":"#FBF7F1","paper":"#FFFFFF","yellow":"#FFD866","gradient":"linear-gradient(135deg,#2BAEB4 0%,#5DD07A 100%)"}
F = {"main":"'Questrial',system-ui,sans-serif","display":"'Fraunces',Georgia,serif","hand":"'Caveat',cursive"}
LOGO = "images/brightkidco-logo-v2.png"
IMG_BASE = "images/"
W = 600
P = 30  # standard padding

def band(fr, to, h=40):
    return f'<!-- band {fr}->{to} --><tr><td style="padding:0;height:{h}px;background:linear-gradient(180deg,{fr} 0%,{to} 100%);"></td></tr>'

def shell(content, subject="", preview=""):
    return f'''<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{subject}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Caveat:wght@400;500;700&display=swap" rel="stylesheet"><!--[if mso]><style>table{{border-collapse:collapse;}}</style><![endif]--></head><body style="margin:0;padding:0;background:{B["cream"]};font-family:{F["main"]};"><div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">{preview}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:{B["cream"]};"><tr><td align="center" style="padding:20px 0;"><table role="presentation" width="{W}" cellpadding="0" cellspacing="0" style="background:{B["paper"]};overflow:hidden;">{content}</table></td></tr></table></body></html>'''

# ── HEADER ──
def t_header(color):
    return f'<tr><td style="padding:24px 20px 0;text-align:center;background:{color};"><img src="{LOGO}" alt="BrightKidCo" style="height:34px;width:auto;"/></td></tr>'

# ── HERO ──
def t_hero(img, copy, color):
    """Hero section: headline + image + body copy"""
    lines = copy.strip().split('\n')
    headline = lines[0][:120] if lines else ""
    body = ' '.join(lines[1:])[:400] if len(lines) > 1 else ""
    imgh = f'<tr><td style="padding:{P}px {P}px 0;background:{color};"><img src="{IMG_BASE}{img}" alt="" style="width:100%;max-width:{W-40}px;border-radius:16px;display:block;"/></td></tr>' if img else ''
    hdl = f'<tr><td style="padding:{P}px {P}px 8px;background:{color};"><h1 style="font-family:{F["display"]};font-size:30px;font-weight:700;color:{B["ink"]};line-height:1.15;margin:0;">{headline}</h1></td></tr>' if headline else ''
    bdy = f'<tr><td style="padding:8px {P}px {P}px;background:{color};"><p style="font-family:{F["main"]};font-size:16px;line-height:1.65;color:{B["soft"]};margin:0;">{body}</p></td></tr>' if body else ''
    return imgh + hdl + bdy

# ── LETTER/BODY ──
def t_letter(copy, color, img=None):
    """Letter section: warm paragraph text with optional image"""
    text = copy[:600].strip()
    imgh = f'<tr><td style="padding:{P}px {P}px 0;background:{color};text-align:center;"><img src="{IMG_BASE}{img}" alt="" style="width:100%;max-width:{W-40}px;border-radius:16px;display:block;"/></td></tr>' if img else ''
    body = f'<tr><td style="padding:{P}px {P}px;background:{color};"><p style="font-family:{F["main"]};font-size:16px;line-height:1.75;color:{B["soft"]};margin:0;">{text}</p></td></tr>' if text else ''
    return imgh + body

# ── DEFINITION/SCIENCE ──
def t_definition(copy, color, img=None):
    """Definition block: eyebrow + title + body"""
    lines = copy.strip().split('\n')
    title_part = lines[0][:100] if lines else ""
    body_part = ' '.join(lines[1:])[:500] if len(lines) > 1 else ""
    imgh = f'<tr><td style="padding:{P}px {P}px 0;background:{color};"><img src="{IMG_BASE}{img}" alt="" style="width:100%;max-width:{W-40}px;border-radius:16px;display:block;"/></td></tr>' if img else ''
    eyb = f'<tr><td style="padding:{"0" if img else f"{P}px"} {P}px 4px;background:{color};"><div style="font-size:10.5px;letter-spacing:2px;text-transform:uppercase;color:{B["tealDeep"]};font-weight:700;font-family:{F["main"]};">The Science</div></td></tr>'
    ttl = f'<tr><td style="padding:0 {P}px 8px;background:{color};"><h2 style="font-family:{F["display"]};font-size:22px;font-weight:700;color:{B["ink"]};line-height:1.25;margin:0;">{title_part}</h2></td></tr>'
    bdy = f'<tr><td style="padding:0 {P}px {P}px;background:{color};"><p style="font-family:{F["main"]};font-size:15px;line-height:1.65;color:{B["soft"]};margin:0;">{body_part}</p></td></tr>'
    return imgh + eyb + ttl + bdy

# ── TESTIMONIAL/SOCIAL PROOF ──
def t_testimonial(copy, color, img=None):
    """Testimonial card: quote + attribution"""
    text = copy[:400].strip()
    imgh = f'<tr><td style="padding:{P}px {P}px 0;background:{color};"><img src="{IMG_BASE}{img}" alt="" style="width:100%;max-width:{W-40}px;border-radius:16px;display:block;"/></td></tr>' if img else ''
    # styled as a quote card
    card = f'''<tr><td style="padding:{P}px;background:{color};"><div style="background:{B["paper"]};border:2px solid {B["ink"]};border-radius:16px;padding:{P-6}px {P-6}px;box-shadow:3px 3px 0 {B["ink"]};"><p style="font-family:{F["display"]};font-size:16px;font-style:italic;line-height:1.5;color:{B["ink"]};margin:0 0 12px;">"{text}"</p><p style="font-family:{F["main"]};font-size:12px;color:{B["muted"]};margin:0;">— Real BrightKidCo parent</p></div></td></tr>'''
    return imgh + card

# ── PRODUCT SHOWCASE ──
def t_product(img, copy, color):
    """Product showcase: image + name + price + features"""
    text = copy[:300].strip()
    imgh = f'<tr><td style="padding:{P}px {P}px 0;background:{color};text-align:center;"><img src="{IMG_BASE}{img}" alt="" style="width:80%;max-width:300px;border-radius:16px;border:2px solid {B["ink"]};display:inline;"/></td></tr>' if img else ''
    desc = f'<tr><td style="padding:12px {P}px 4px;background:{color};text-align:center;"><h3 style="font-family:{F["display"]};font-size:20px;font-weight:700;color:{B["ink"]};margin:0;">Body-Signal Learning Layer™</h3></td></tr>'
    price = f'<tr><td style="padding:4px {P}px 4px;background:{color};text-align:center;"><div style="font-family:{F["main"]};font-size:26px;font-weight:700;color:{B["teal"]};">€34</div><div style="font-family:{F["main"]};font-size:12px;color:{B["muted"]};">starter pair</div></td></tr>'
    features = f'<tr><td style="padding:8px {P}px {P}px;background:{color};"><p style="font-family:{F["main"]};font-size:14px;line-height:1.6;color:{B["soft"]};margin:0;text-align:center;">{text[:200]}</p></td></tr>'
    return imgh + desc + price + features

# ── GUARANTEE ──
def t_guarantee(img, color):
    """Guarantee badge: 60-day seal"""
    imgh = f'<tr><td style="padding:{P}px {P}px 0;background:{color};text-align:center;"><img src="{IMG_BASE}{img}" alt="" style="width:60%;max-width:200px;border-radius:16px;display:inline;"/></td></tr>' if img else ''
    seal = f'''<tr><td style="padding:{P}px;background:{color};text-align:center;"><div style="display:inline-block;width:140px;height:140px;border-radius:50%;background:{B["paper"]};border:3px solid {B["ink"]};text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto;"><div style="font-size:38px;font-weight:700;color:{B["teal"]};font-family:{F["display"]};line-height:1;">60</div><div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:{B["tealDeep"]};font-weight:700;">days</div><div style="font-size:9px;color:{B["soft"]};margin-top:4px;">Calm Progress Guarantee</div></div><p style="font-family:{F["main"]};font-size:14px;color:{B["soft"]};margin:16px 0 0;">Full refund if it doesn't work for your family. No forms. No questions.</p></td></tr>'''
    return imgh + seal

# ── CTA ──
def t_cta(button_text):
    """Dark CTA section"""
    text = button_text[:40] if len(button_text) > 5 else "Shop the pants"
    return f'''<tr><td style="padding:{P}px {P}px 44px;background:{B["ink"]};text-align:center;"><a href="#" style="display:inline-block;padding:17px 32px;background:#D8F57C;color:{B["ink"]};font-size:15.5px;font-weight:700;text-decoration:none;border-radius:999px;letter-spacing:0.3px;font-family:{F["main"]};">{text} →</a><div style="margin-top:14px;font-size:11.5px;color:{B["muted"]};">No rush. No pressure. 60-day guarantee.</div></td></tr>'''

# ── SIGNOFF ──
def t_signoff():
    return f'''<tr><td style="padding:0 22px 36px;background:{B["ink"]};"><div style="background:#1F2A2C;border:1.5px solid #2F3D40;border-radius:22px;padding:26px 24px 24px;"><div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;"><div style="width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#FFD866 0%,{B["teal"]} 100%);padding:2.5px;"><div style="width:100%;height:100%;border-radius:50%;background:#FFFDF6;border:1.5px solid {B["ink"]};"></div></div><div><div style="font-size:10.5px;letter-spacing:1.6px;text-transform:uppercase;color:#8FAFB2;font-weight:700;">A note from</div><div style="font-size:17px;font-weight:700;color:#FFF;font-family:{F["display"]};">Lena Bauer</div><div style="font-size:12px;color:#8FAFB2;margin-top:2px;font-style:italic;">Founder · BrightKidCo · Mom of two</div></div></div><div style="border-top:1.5px dashed #3A4547;padding-top:16px;"><div style="font-size:13px;color:#B8CACD;font-style:italic;line-height:1.65;"><span style="color:#D8F57C;font-weight:700;font-style:normal;">P.S.</span> If you ever want to reply and tell me about your child — I read every one. Really.</div></div></div></td></tr>'''

# ── FOOTER ──
def t_footer():
    return f'''<tr><td style="padding:30px 24px 30px;background:{B["cream"]};text-align:center;"><div style="font-family:{F["display"]};font-size:20px;font-style:italic;font-weight:500;color:{B["ink"]};margin-bottom:30px;">Calm progress, one day at a time.</div><div style="font-size:14px;color:{B["ink"]};font-weight:500;margin-bottom:14px;font-family:{F["main"]};"><a href="#" style="color:{B["ink"]};text-decoration:none;">Our Method</a></div><div style="font-size:14px;color:{B["ink"]};font-weight:500;margin-bottom:14px;font-family:{F["main"]};"><a href="#" style="color:{B["ink"]};text-decoration:none;">Shop the Pants</a></div><div style="font-size:14px;color:{B["ink"]};font-weight:500;margin-bottom:28px;font-family:{F["main"]};"><a href="#" style="color:{B["ink"]};text-decoration:none;">Parent Stories</a></div><div style="font-size:11.5px;color:{B["muted"]};max-width:340px;margin:0 auto;line-height:1.65;font-family:{F["main"]};">No longer want these emails? <a href="#" style="color:{B["ink"]};text-decoration:underline;">Unsubscribe</a>.<br/>BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com</div><div style="margin:28px auto 0;width:60px;height:3px;background:{B["gradient"]};border-radius:3px;"></div></td></tr>'''

# ── SECTION TYPE → TEMPLATE MAP ──
TEMPLATES = {
    "hero": t_hero,
    "letter": t_letter,
    "definition": t_definition,
    "reframe": t_definition,
    "testimonial": t_testimonial,
    "social_proof": t_testimonial,
    "story": t_testimonial,
    "product": t_product,
    "guarantee": t_guarantee,
    "cta": None,  # handled separately
    "comparison": t_definition,
    "feel": t_letter,
    "objections": t_definition,
    "code": t_letter,
    "stat": t_definition,
    "steps": t_definition,
}

def extract_copy(copy_file):
    """Extract copy paragraphs mapped to section types."""
    if not copy_file or not os.path.exists(copy_file):
        return {"subject":"","preview":"","by_section":{}}
    
    with open(copy_file) as f:
        raw = f.read()
    
    subject = ""
    preview = ""
    sm = re.search(r'\*\*Subject(?: Line)?:\*\*\s*(.+?)(?:\n|$)', raw)
    if sm: subject = sm.group(1).strip()
    pm = re.search(r'\*\*Preheader:\*\*\s*(.+?)(?:\n|$)', raw)
    if pm: preview = pm.group(1).strip()
    
    # Extract body
    body = None
    for pat in [r'## (?:EMAIL BODY|Email Body)\s*\n(?:---\s*\n)?(.*?)(?=\n(?:## (?:Lena|Footer|SOURCE)|\n# PART 2)|\Z)', r'# PART 1.*?\n(?:---\s*\n)?(.*?)(?=\n# PART 2|\Z)']:
        m = re.search(pat, raw, re.DOTALL | re.IGNORECASE)
        if m:
            body = m.group(1).strip()
            break
    
    if not body:
        return {"subject":subject,"preview":preview,"by_section":{}}
    
    # Split into sections by ### or #### headers
    sections = re.split(r'#{3,4}\s+(.+)', body)
    by_section = {}
    
    # Parse sections
    for i in range(1, len(sections), 2):
        if i+1 >= len(sections):
            break
        name = sections[i].strip().lower()
        content = sections[i+1].strip()
        content = re.sub(r'\*\*(.+?)\*\*', r'\1', content)
        content = re.sub(r'\|.*\|', '', content)
        content = re.sub(r'---', '', content)
        content = content.strip()
        
        if 'hook' in name or 'hero' in name:
            by_section['hero'] = content[:500]
        elif name.strip().lower() == 'body':
            by_section['letter'] = content[:600]
        elif 'validation' in name or 'absolution' in name:
            by_section['reframe'] = content[:500]
        elif 'mechanism' in name or 'science' in name or 'definition' in name:
            by_section['definition'] = content[:500]
        elif 'testimonial' in name or 'social proof' in name or 'review' in name:
            by_section['testimonial'] = content[:500]
        elif 'product' in name or 'showcase' in name:
            by_section['product'] = content[:300]
        elif 'guarantee' in name or 'trust' in name:
            by_section['guarantee'] = content[:300]
        elif 'cta' in name:
            by_section['cta'] = content[:100]
        elif 'story' in name:
            by_section['story'] = content[:400]
        elif 'comparison' in name:
            by_section['comparison'] = content[:400]
        elif 'observation' in name or 'symptom' in name or 'greeting' in name or 'wrap' in name:
            by_section['letter'] = content[:600]
        elif 'permission' in name:
            by_section['feel'] = content[:600]
        elif 'objection' in name or 'faq' in name or 'question' in name:
            by_section['objections'] = content[:500]
    
    # If no sections found, split into paragraphs
    if not by_section:
        paragraphs = [p.strip() for p in body.split('\n\n') if len(p.strip()) > 50]
        if paragraphs:
            by_section['hero'] = paragraphs[0][:500]
            if len(paragraphs) > 1: by_section['reframe'] = paragraphs[1][:500]
            if len(paragraphs) > 2: by_section['definition'] = paragraphs[2][:500]
    
    return {"subject": subject, "preview": preview, "by_section": by_section}

def extract_image(pick):
    if not isinstance(pick, dict): return None
    for k in ['image_file','image_files']:
        v = pick.get(k)
        if isinstance(v,str) and v.strip(): 
            # Remove any subdirectory prefix, keep just the filename
            name = v.strip()
            # Remove lifestyle/, flat-lay/, accessories/, resized/, branding/ prefixes
            name = re.sub(r'^(lifestyle|flat-lay|accessories|resized|branding)/', '', name)
            return name
        if isinstance(v,list) and v: 
            name = str(v[0]).strip()
            name = re.sub(r'^(lifestyle|flat-lay|accessories|resized|branding)/', '', name)
            return name
    return None

def assemble_one(layout_file, picks_file, output_file):
    with open(layout_file) as f: layout = json.load(f)
    with open(picks_file) as f: picks = json.load(f)
    
    ls = layout.get("sections", [])
    # Handle three picks formats:
    # 1. {"sections": [...]} — list of section dicts
    # 2. {"selections": {"section_0": {...}, ...}} — dict of section dicts
    # 3. {"section_0": {...}, "section_1": {...}, ...} — flat keys
    ps = picks.get("sections", [])
    if not ps:
        ps = picks.get("selections", [])
    if isinstance(ps, dict):
        # Sort by section_N key order
        sorted_keys = sorted(ps.keys(), key=lambda k: int(k.split('_')[-1]) if k.startswith('section_') and k.split('_')[-1].isdigit() else 999)
        ps = [ps[k] for k in sorted_keys]
    if not ps:
        # Try flat format: pick up top-level section_N keys
        section_keys = sorted([k for k in picks.keys() if k.startswith('section_') and isinstance(picks[k], dict)], 
                              key=lambda k: int(k.split('_')[-1]) if k.split('_')[-1].isdigit() else 999)
        if section_keys:
            ps = [picks[k] for k in section_keys]
    if isinstance(picks, list): ps = picks
    
    email_id = Path(picks_file).stem
    copy_file = None
    for root, dirs, files in os.walk("/root/projects/brightkidco/outputs/copy"):
        # Skip analysis directory — those are meta-analysis, not email copy
        if os.path.basename(root) == "analysis":
            continue
        for fn in files:
            if fn.startswith(email_id) and fn.endswith(".md"):
                copy_file = os.path.join(root, fn); break
        if copy_file:
            break
    
    copy_data = extract_copy(copy_file)
    by_section = copy_data["by_section"]
    subject = copy_data["subject"]
    preview = copy_data["preview"] or "BrightKidCo — a different path to dry days"
    
    html = ""
    prev_color = B["paper"]
    
    # Header
    html += t_header(B["paper"])
    
    for i, lsec in enumerate(ls):
        color = lsec.get("color", B["paper"])
        stype = lsec.get("type", "letter")
        
        pick = ps[i] if i < len(ps) else {}
        if isinstance(pick, str): pick = {}
        img = extract_image(pick)
        copy = by_section.get(stype, "")
        
        if prev_color != color:
            html += band(prev_color, color)
        
        if stype == "cta":
            btn = pick.get("component_name","") if isinstance(pick,dict) else ""
            if not btn or len(btn) < 5:
                btn = "Shop the pants"
            html += t_cta(btn)
        elif stype == "guarantee":
            html += t_guarantee(img, color)
        elif stype == "product":
            html += t_product(img, copy, color)
        elif stype == "hero":
            html += t_hero(img, copy, color)
        elif stype in ("testimonial","social_proof","story"):
            html += t_testimonial(copy, color, img)
        elif stype in ("definition","reframe","comparison","stat","steps","objections"):
            html += t_definition(copy, color, img)
        else:
            html += t_letter(copy, color, img)
        
        prev_color = color
    
    # Signoff + Footer
    html += band(prev_color, B["ink"])
    html += t_cta("Shop the pants")  # Fixed CTA at bottom
    html += t_signoff()
    html += t_footer()
    
    full = shell(html, subject, preview)
    
    if output_file:
        os.makedirs(os.path.dirname(output_file) or ".", exist_ok=True)
        with open(output_file, 'w') as f:
            f.write(full)
    return full

if __name__ == "__main__":
    if len(sys.argv) >= 4:
        assemble_one(sys.argv[1], sys.argv[2], sys.argv[3])
        print(f"Output: {sys.argv[3]}")
    else:
        print("Usage: python3 assemble-email.py <layout.json> <picks.json> <output.html>")
