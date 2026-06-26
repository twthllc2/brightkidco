#!/usr/bin/env python3
"""BKC Email Assembler — builds Klaviyo HTML from layout + picks + copy using actual design patterns."""
import json, os, re, sys
from pathlib import Path

# Brand tokens from actual JSX source
B = {"teal":"#2BAEB4","tealDeep":"#1E8A8F","green":"#5DD07A","greenDeep":"#3BB35E","ink":"#1F2D2F","soft":"#4A6568","muted":"#8A9B9D","cream":"#FBF7F1","paper":"#FFFFFF","yellow":"#FFD866","lilac":"#EEE8F6","mint":"#E8F5EC","lavender":"#F0EDF8","gradient":"linear-gradient(135deg,#2BAEB4 0%,#5DD07A 100%)"}

F = {"main":"'Questrial',system-ui,sans-serif","display":"'Fraunces',Georgia,serif","hand":"'Caveat',cursive","body":"'Inter',system-ui,sans-serif"}

LOGO = "brightkidco-logo-v2.png"
WIDTH = 600

def band(from_color, to_color, height=40):
    """Gradient band transition between sections."""
    return f'<tr><td style="height:{height}px;background:linear-gradient(180deg,{from_color} 0%,{to_color} 100%);"></td></tr>'

def header(color):
    """Email header with logo."""
    return f'<tr><td style="padding:24px 20px 0;text-align:center;background:{color};"><img src="{LOGO}" alt="BrightKidCo" style="height:34px;width:auto;"/></td></tr>'

def title_badge(text, color):
    """Badge/title block."""
    return f'''<tr><td style="padding:34px 22px 12px;text-align:center;background:{color};">
      <div style="display:inline-block;background:{B['yellow']};padding:7px 14px;border-radius:999px;font-size:10.5px;letter-spacing:1.5px;text-transform:uppercase;color:{B['ink']};font-weight:700;border:2px solid {B['ink']};transform:rotate(-1.5deg);font-family:{F['main']};">{text}</div>
    </td></tr>'''

def section_block(color, content, image=None):
    """A content section with background color."""
    img_html = ""
    if image:
        img_html = f'<div style="margin:0 14px 16px;"><img src="{image}" alt="" style="width:100%;max-width:{WIDTH-28}px;border-radius:20px;border:2px solid {B["ink"]};box-shadow:4px 4px 0 {B["ink"]};"/></div>'
    
    return f'''<tr><td style="padding:24px 22px 24px;background:{color};">
      {img_html}
      <div style="font-family:{F['main']};font-size:15px;line-height:1.7;color:{B['soft']};max-width:540px;margin:0 auto;">
        {content}
      </div>
    </td></tr>'''

def cta_section(button_text):
    """Dark CTA section."""
    return f'''<tr><td style="padding:20px 22px 44px;background:{B['ink']};text-align:center;">
      <a href="#" style="display:inline-block;padding:17px 32px;background:#D8F57C;color:{B['ink']};font-size:15.5px;font-weight:700;text-decoration:none;border-radius:999px;letter-spacing:0.3px;font-family:{F['main']};">{button_text} →</a>
    </td></tr>'''

def signoff():
    """Lena Bauer signoff."""
    return f'''<tr><td style="padding:0 22px 36px;background:{B['ink']};">
      <div style="background:#1F2A2C;border:1.5px solid #2F3D40;border-radius:22px;padding:26px 24px 24px;overflow:hidden;">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <div style="width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#FFD866 0%,{B['teal']} 100%);padding:2.5px;">
            <div style="width:100%;height:100%;border-radius:50%;background:#FFFDF6;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1.5px solid {B['ink']};">
              <svg width="58" height="58" viewBox="0 0 58 58"><circle cx="29" cy="22" r="10" fill="#D4A574"/><path d="M10,58C10,42 18,34 29,34C40,34 48,42 48,58Z" fill="#C98C6B"/></svg>
            </div>
          </div>
          <div style="flex:1;">
            <div style="font-size:10.5px;letter-spacing:1.6px;text-transform:uppercase;color:#8FAFB2;font-weight:700;font-family:{F['main']};">A note from</div>
            <div style="font-size:17px;font-weight:700;color:#FFFFFF;font-family:{F['display']};">Lena Bauer</div>
            <div style="font-size:12px;color:#8FAFB2;margin-top:2px;font-style:italic;">Founder · BrightKidCo · Mom of two</div>
          </div>
        </div>
        <div style="border-top:1.5px dashed #3A4547;padding-top:16px;">
          <div style="font-size:13px;color:#B8CACD;font-style:italic;line-height:1.65;">
            <span style="color:#D8F57C;font-weight:700;font-style:normal;">P.S.</span> If you ever want to reply and tell me about your child — I read every one. Really.
          </div>
        </div>
      </div>
    </td></tr>'''

def footer():
    """Email footer."""
    return f'''<tr><td style="padding:30px 24px 30px;background:{B['cream']};text-align:center;">
      <div style="font-family:{F['display']};font-size:20px;font-style:italic;font-weight:500;color:{B['ink']};margin-bottom:30px;letter-spacing:-0.2px;">Calm progress, one day at a time.</div>
      <div style="font-size:14px;color:{B['ink']};font-weight:500;margin-bottom:14px;font-family:{F['main']};"><a href="#" style="color:{B['ink']};text-decoration:none;">Our Method</a></div>
      <div style="font-size:14px;color:{B['ink']};font-weight:500;margin-bottom:14px;font-family:{F['main']};"><a href="#" style="color:{B['ink']};text-decoration:none;">Shop the Pants</a></div>
      <div style="font-size:14px;color:{B['ink']};font-weight:500;margin-bottom:28px;font-family:{F['main']};"><a href="#" style="color:{B['ink']};text-decoration:none;">Parent Stories</a></div>
      <div style="font-size:11.5px;color:{B['muted']};max-width:340px;margin:0 auto;line-height:1.65;font-family:{F['main']};">No longer want these emails? <a href="#" style="color:{B['ink']};text-decoration:underline;">Unsubscribe</a>.<br/>BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com</div>
      <div style="margin:28px auto 0;width:60px;height:3px;background:{B['gradient']};border-radius:3px;"></div>
    </td></tr>'''

def assemble_email(email_id, layout, picks, copy_data):
    """Assemble a single email from layout + picks + copy."""
    subject = copy_data.get("subject", "")
    preview = copy_data.get("preview", "BrightKidCo — a different path to dry days")
    
    # Get sections from layout
    layout_sections = layout.get("sections", [])
    picks_data = picks
    
    # Build section HTML
    sections_html = []
    prev_color = B["paper"]
    
    for i, lsec in enumerate(layout_sections):
        color = lsec.get("color", B["paper"])
        section_type = lsec.get("type", "")
        section_name = lsec.get("name", "")
        
        # Get picks for this section
        section_pick = ""
        for ps in picks_data:
            if ps.get("type") == section_type or ps.get("section_type") == section_type:
                section_pick = ps
                break
        
        component_name = section_pick.get("component_name", section_name) if isinstance(section_pick, dict) else section_name
        image = ""
        if isinstance(section_pick, dict):
            img = section_pick.get("image_file", "")
            if isinstance(img, str) and img:
                image = img
            elif isinstance(img, list) and img:
                image = img[0]
            elif isinstance(section_pick.get("image_files"), list):
                imgs = section_pick.get("image_files", [])
                if imgs:
                    image = imgs[0]
        
        # Get copy content for this section
        copy_text = ""
        for cs in copy_data.get("sections", []):
            if cs.get("type") == section_type:
                copy_text = cs.get("content", "")
                break
        
        if not copy_text:
            copy_text = section_name
        
        # Add band from previous color
        if prev_color != color:
            sections_html.append(band(prev_color, color))
        
        # Add section content
        if section_type == "cta":
            sections_html.append(cta_section("Shop the pants" if not copy_text else copy_text[:50]))
        elif section_type == "hero":
            sections_html.append(title_badge("✿ Welcome", color))
            sections_html.append(section_block(color, copy_text[:500], image))
        else:
            badge = component_name[:50] if component_name else section_name
            sections_html.append(section_block(color, copy_text[:500], image))
        
        prev_color = color
    
    # Build full email
    html = f'''<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{subject}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Caveat:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<!--[if mso]><style>table{{border-collapse:collapse;}}</style><![endif]-->
</head><body style="margin:0;padding:0;background:{B['cream']};font-family:{F['main']};">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">{preview}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:{B['cream']};"><tr><td align="center" style="padding:20px 0;">
<table role="presentation" width="{WIDTH}" cellpadding="0" cellspacing="0" style="background:{B['paper']};overflow:hidden;">
{header(B["paper"])}
{"".join(sections_html)}
{signoff()}
{footer()}
</table></td></tr></table></body></html>'''
    
    return html

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 assemble-email.py <layout.json> <picks.json> [--copy <copy.md>] [--output <output.html>]")
        sys.exit(1)
    
    layout_file = sys.argv[1]
    picks_file = sys.argv[2]
    copy_file = None
    output_file = None
    
    i = 3
    while i < len(sys.argv):
        if sys.argv[i] == "--copy" and i+1 < len(sys.argv):
            copy_file = sys.argv[i+1]; i += 2
        elif sys.argv[i] == "--output" and i+1 < len(sys.argv):
            output_file = sys.argv[i+1]; i += 2
        else: i += 1
    
    with open(layout_file) as f: layout = json.load(f)
    with open(picks_file) as f: picks = json.load(f)
    
    picks_sections = picks if isinstance(picks, list) else picks.get("sections", [])
    if not isinstance(picks_sections, list):
        picks_sections = list(picks_sections.values()) if isinstance(picks_sections, dict) else []
    
    copy_data = {"subject":"","preview":"","sections":[]}
    
    # Try to find copy file
    if not copy_file:
        email_id = Path(picks_file).stem
        for root, dirs, files in os.walk("/root/projects/brightkidco/outputs/copy"):
            for f in files:
                if f.startswith(email_id) and f.endswith(".md"):
                    copy_file = os.path.join(root, f)
                    break
    
    if copy_file and os.path.exists(copy_file):
        with open(copy_file) as f:
            content = f.read()
        # Extract subject
        sm = re.search(r'\*\*Subject:\*\*\s*(.+?)(?:\n|$)', content)
        if sm: copy_data["subject"] = sm.group(1).strip()
        # Extract preview
        pm = re.search(r'\*\*Preheader:\*\*\s*(.+?)(?:\n|$)', content)
        if pm: copy_data["preview"] = pm.group(1).strip()
    
    html = assemble_email(Path(picks_file).stem, layout, picks_sections, copy_data)
    
    if output_file:
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        with open(output_file, 'w') as f:
            f.write(html)
        print(f"Output: {output_file}")
    else:
        print(html[:500])

if __name__ == "__main__":
    main()
