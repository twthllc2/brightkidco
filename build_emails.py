#!/usr/bin/env python3
"""
Build HTML emails for ALL 125 picks files.
"""

import os, json, re, sys

BASE = "/root/projects/brightkidco/outputs"
PICKS_DIR = os.path.join(BASE, "picks")
LAYOUTS_DIR = os.path.join(BASE, "layouts")
COPY_DIR = os.path.join(BASE, "copy")
HTML_DIR = os.path.join(BASE, "html")

os.makedirs(HTML_DIR, exist_ok=True)

PREFIX_MAP = {
    "arrived": "transactional", "atrisk": "pp-at-risk", "browse": "browse",
    "cart": "cart", "checkout": "checkout", "detection": "pp-level-detection",
    "faq": "faq-library", "mary": "pp-mary-story", "mid": "pp-mid-checkin",
    "ofd": "transactional", "order": "transactional",
    "pp-leveldetect": "pp-level-detection", "pped": "pp-extended-ed",
    "ppupsell": "pp-extended-upsell", "repa": "replenish-a",
    "repb": "replenish-b", "repc": "replenish-c", "review": "review-request",
    "shipping": "transactional", "site": "site-abandonment",
    "sunset": "sunset", "upsell": "pp-direct-upsell",
    "welcome": "welcome", "winback-a": "winback-a", "winback-b": "winback-b",
}

def esc(s):
    if not s: return ""
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def strip_md(t):
    return re.sub(r"\*\*(.+?)\*\*", r"\1", re.sub(r"\*(.+?)\*", r"\1", t))

def get_category(eid):
    for pfx, cat in sorted(PREFIX_MAP.items(), key=lambda x: -len(x[0])):
        if eid.startswith(pfx) and os.path.exists(os.path.join(LAYOUTS_DIR, cat, eid + ".json")):
            return cat
    for cat in sorted(os.listdir(LAYOUTS_DIR)):
        if os.path.exists(os.path.join(LAYOUTS_DIR, cat, eid + ".json")):
            return cat
    return None

def parse_copy(cp):
    if not os.path.exists(cp):
        return {}, "", "", ""
    with open(cp) as f:
        text = f.read()

    subject = ""
    m = re.search(r"(?:\*\*)?Subject:(?:\*\*)?\s*(.+?)(?:\n|$)", text)
    if m: subject = m.group(1).strip()

    preview = ""
    m = re.search(r"(?:\*\*)?Preview(?:\s*text)?:(?:\*\*)?\s*\n?(.+?)(?:\n|$)", text)
    if m: preview = m.group(1).strip()

    # Find Email Body, stop at Source Citations or Part 2
    bs = text.find("## Email Body")
    if bs < 0:
        bs = text.find("## Email body")
    if bs < 0:
        bt = text
    else:
        after = text[bs + len("## Email Body"):]
        # Stop at next major section: Source Citations, Part 2, Lena Sign-Off, Footer
        stop_m = re.search(r"\n(?:##\s*(?:Source\s+Citations|Part\s+2|Lena\s+Sign-Off|Footer|Creative\s+Strategy))", after)
        if stop_m:
            bt = after[:stop_m.start()]
        else:
            bt = after

    # Split only on section-like headers: ### Section N, ### Hook, ### Validation, etc.
    # NOT on all ### headers (which may be markdown subheadings in body)
    section_pattern = r"\n###\s+(?:Section\s+\d+|Hook|Validation|Mechanism|CTA|Story|Product|Offer|Guarantee|Social\s+Proof|Testimonial|Steps|Definition|Stat|Comparison|Objections|Failed\s+Methods|Recognition)"
    blocks = re.split(section_pattern, bt.strip())
    
    # Also try splitting by numbered sections
    if len(blocks) <= 1:
        blocks = re.split(r"\n(?:###\s+)?(?:Section\s+\d+[:\s-]*|Hook|Validation|Mechanism)", bt.strip())
    
    sections = {}
    idx = 0
    for block in blocks:
        block = block.strip()
        if not block: continue
        
        # Skip blocks that are just headings/metadata
        if block.startswith("#") and "\n" not in block: continue
        
        # Clean the body text
        clean = []
        skip_meta = False
        for l in block.split("\n"):
            s = l.strip()
            # Skip horizontal rules
            if s in ("---","***","* * *"): continue
            # Skip metadata tables
            if s.startswith("|") and "|" in s[1:]: continue
            # Skip Part 2 / source citation headers
            if re.match(r'^#+\s*(?:PART\s+2|Source\s+Citations|Creative\s+Strategy)', s, re.IGNORECASE):
                skip_meta = True
                continue
            if skip_meta:
                # Skip everything after Part 2
                if re.match(r'^#+\s', s): continue
            # Skip pure metadata lines
            if re.match(r'^\*\*(?:Strategy|Voice|Design|Flow|Position|Level|Phase|Purpose|Cadence)\b', s): continue
            clean.append(l)
        body = "\n".join(clean).strip()
        body = re.sub(r"\n{3,}", "\n\n", body)
        # Remove standalone asterisk lines
        body = re.sub(r"\n\*\s*\n", "\n", body)
        
        if body and len(body) > 20:
            sections[idx] = body
            idx += 1

    signoff = ""
    m = re.search(r"## Lena Sign-Off\s*\n(.+?)(?=\n##|\n---|\Z)", text, re.DOTALL)
    if m: signoff = m.group(1).strip()
    return sections, subject, preview, signoff

def build_signoff(raw):
    if not raw: return "Thanks for being here. If you have a question, hit reply. I read everything."
    lines = [l.strip() for l in raw.split("\n") if l.strip() and not l.startswith("|") and not l.startswith("- ")]
    r = " ".join(lines[:3])
    if len(r) > 300: r = r[:300]
    return esc(r)

def grad(text):
    return '<tr><td style="padding:0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:6px;background:' + text + ';font-size:1px;line-height:0;">&nbsp;</td></tr></table></td></tr>'

def img_tr(src, w=480):
    if not src: return ""
    s = "images/" + src.lstrip("/")
    return '<tr><td align="center" style="padding-bottom:20px;"><img src="' + s + '" alt="" width="' + str(w) + '" style="display:block;max-width:100%;height:auto;border-radius:12px;margin:0 auto;" /></td></tr>'

def quote_card(t):
    if not t or not t.strip(): return ""
    ct = esc(t.strip()[:500])
    return '<tr><td style="padding-bottom:12px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#FBF7EB;border-radius:12px;border-left:3px solid #5DD07A;padding:16px 18px;"><p style="font-family:\'Questrial\',Arial,sans-serif;font-size:16px;font-style:italic;color:#1F2D2F;line-height:1.5;margin:0;">&ldquo;' + ct + '&rdquo;</p></td></tr></table></td></tr>'

def md_body(text):
    if not text: return ""
    out = []
    for line in text.split("\n"):
        s = line.strip()
        if not s:
            # out.append("<br>")
            continue
        s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(r"\*(.+?)\*", r"<em>\1</em>", s)
        if s.startswith(">"):
            q = s.lstrip(">").strip().strip('"')
            out.append(quote_card(q))
        else:
            out.append('<p style="margin:0 0 12px;font-family:\'Questrial\',Arial,sans-serif;font-size:17px;line-height:1.6;color:#1F2D2F;">' + s + '</p>')
    return "\n".join(out)

def sec_wrap(idx, stype, color, gradient, inner):
    return ("\n<!-- " + "="*67 + " -->\n"
            "<!-- SECTION " + str(idx) + ": " + stype.upper() + " -->\n"
            "<!-- " + "="*67 + " -->\n"
            + grad(gradient) + "\n"
            '<tr><td style="background-color:' + color + ';padding:40px 32px 36px;text-align:center;" class="mobile-pad">\n'
            '  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">\n'
            + inner +
            '\n  </table>\n</td></tr>\n')

# ─── RENDERERS ──────────────────────────────────────────────────

def r_hero(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#EEE8F6"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1]) if imgs else ""
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    hl = strip_md(lines[0]) if lines else ""
    sub = strip_md(lines[1]) if len(lines) > 1 else ""
    body = "\n".join(lines[2:]).strip() if len(lines) > 2 else ""
    inner = (
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:36px;font-weight:700;color:#1F2D2F;line-height:1.1;letter-spacing:-0.02em;padding-bottom:12px;">' + esc(hl) + '</td></tr>\n'
        '<tr><td align="center" style="font-family:\'Questrial\',Arial,sans-serif;font-size:16px;color:#4A6568;line-height:1.5;padding-bottom:24px;">' + esc(sub[:120]) + '</td></tr>\n'
        + ih + '\n'
        '<tr><td class="body-text" style="max-width:500px;padding-top:8px;">\n' + md_body(body) + '\n</td></tr>'
    )
    return sec_wrap(idx, "hero", color, "linear-gradient(90deg,#2BAEB4,#5DD07A,#D8F57C)", inner)

def r_letter(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FFFFFF"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1]) if imgs else ""
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    eb, hl, body_start = "", "", 0
    if lines:
        f = lines[0].strip()
        if len(f) < 60 and not f.endswith("."):
            eb = f; body_start = 1
            if len(lines) > 1: hl = strip_md(lines[1]); body_start = 2
        else:
            hl = strip_md(f); body_start = 1
    body = "\n".join(lines[body_start:]).strip()
    ebh = ('<tr><td align="center" style="font-family:\'Questrial\',Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#2BAEB4;font-weight:700;padding-bottom:10px;">' + esc(eb) + '</td></tr>\n') if eb else ""
    hlh = ('<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:26px;font-weight:500;color:#1F2D2F;line-height:1.25;letter-spacing:-0.02em;padding-bottom:20px;">' + esc(hl) + '</td></tr>\n') if hl else ""
    inner = ebh + hlh + ih + '\n<tr><td class="body-text" style="max-width:500px;">\n' + md_body(body) + '\n</td></tr>'
    return sec_wrap(idx, "letter", color, "linear-gradient(90deg,#5DD07A,#2BAEB4,#5DD07A)", inner)

def r_def(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FFFFFF"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1]) if imgs else ""
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    eb = lines[0] if lines else ""
    hl = strip_md(lines[1]) if len(lines) > 1 else ""
    body = "\n".join(lines[2:]).strip() if len(lines) > 2 else ""
    inner = (
        '<tr><td align="center" style="font-family:\'Questrial\',Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#2BAEB4;font-weight:700;padding-bottom:10px;">' + esc(eb[:80]) + '</td></tr>\n'
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:26px;font-weight:500;color:#1F2D2F;line-height:1.25;letter-spacing:-0.02em;padding-bottom:20px;">' + esc(hl[:120]) + '</td></tr>\n'
        + ih + '\n<tr><td class="body-text" style="max-width:500px;">\n' + md_body(body) + '\n</td></tr>'
    )
    return sec_wrap(idx, "definition", color, "linear-gradient(90deg,#2BAEB4,#5DD07A)", inner)

def r_steps(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FFF6E2"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1]) if imgs else ""
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    hl = strip_md(lines[0]) if lines else ""
    sub = strip_md(lines[1]) if len(lines) > 1 else ""
    bs = 2 if sub and len(sub) < 100 else 1
    body = "\n".join(lines[bs:]).strip()
    sh = ('<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:28px;font-weight:700;color:#2BAEB4;line-height:1.2;padding-bottom:16px;">' + esc(sub) + '</td></tr>\n') if sub else ""
    inner = (
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:22px;font-weight:700;color:#1F2D2F;line-height:1.3;letter-spacing:-0.02em;padding-bottom:8px;">' + esc(hl[:120]) + '</td></tr>\n'
        + sh + ih + '\n<tr><td class="body-text" style="max-width:500px;">\n' + md_body(body) + '\n</td></tr>'
    )
    return sec_wrap(idx, "steps", color, "linear-gradient(90deg,#2BAEB4,#D8F57C,#2BAEB4)", inner)

def r_testimonial(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FAF9F7"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1], 420) if imgs else ""
    qh = ""
    if ctext:
        for line in ctext.split("\n"):
            s = line.strip()
            if s.startswith(">"): qh += quote_card(s.lstrip(">").strip().strip('"'))
            elif s and not s.startswith("#"): qh += quote_card(s)
    if not qh and ctext: qh = quote_card(ctext.strip()[:500])
    return sec_wrap(idx, "testimonial", color, "linear-gradient(90deg,#5DD07A,#2BAEB4)", ih + qh)

def r_guarantee(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#EAF6F2"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1], 420) if imgs else ""
    body = ctext.strip()[:600] if ctext else "60 days to try it. By your judgment. Full refund."
    inner = (
        '<tr><td align="center" style="padding-bottom:16px;">'
        '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="background-color:#FBF7F1;border:2px solid #5DD07A;border-radius:50%;width:100px;height:100px;">'
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:28px;font-weight:700;color:#2BAEB4;line-height:1.2;padding:12px;">60<br><span style="font-size:12px;color:#4A6568;">DAY</span></td></tr>'
        '</table></td></tr>\n'
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:20px;font-weight:700;color:#1F2D2F;line-height:1.3;padding-bottom:12px;">The 60-Day Calm Promise</td></tr>\n'
        + ih + '\n'
        '<tr><td class="body-text" style="max-width:500px;">'
        '<p style="margin:0 0 12px;">' + esc(body) + '</p>'
        '<p style="margin:0;font-family:\'Questrial\',Arial,sans-serif;font-size:12px;color:#6B7C7E;">'
        '60-day guarantee &middot; no questions &middot; you&rsquo;re safe either way</p></td></tr>'
    )
    return sec_wrap(idx, "guarantee", color, "linear-gradient(90deg,#5DD07A,#D8F57C)", inner)

def r_cta(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#1F2D2F"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1], 420) if imgs else ""
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    hw, hl, bp, btn, sec_link = "", "", [], "Learn More", ""
    for line in lines:
        s = line.strip()
        if s.startswith("- **Button text:"): btn = re.sub(r"^-?\s*\*\*Button text:\*\*\s*", "", s).strip()
        elif s.startswith("- **Supporting"): sec_link = re.sub(r"^-?\s*\*\*Supporting.*?:\*\*\s*", "", s).strip()
        elif not hw and len(s) < 80 and any(w in s.lower() for w in ("thing","only","last")): hw = s
        elif not hl and len(s) < 120: hl = strip_md(s)
        elif not s.startswith("- ") and not s.startswith("**Button"): bp.append(s)
    if not hw: hw = "one last thing, only if it helps"
    if not hl: hl = "Ready to get started?"
    body = " ".join(bp)[:400] if bp else (ctext.strip()[:400] if ctext else "")
    btn_html = (
        '<tr><td align="center" style="padding-bottom:12px;">'
        '<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:52px;v-text-anchor:middle;width:480px;" arcsize="12%" strokecolor="#D8F57C" fillcolor="#D8F57C"><w:anchorlock/><center style="color:#1F2D2F;font-family:\'Questrial\',Arial,sans-serif;font-size:18px;font-weight:700;">' + esc(btn) + ' &rarr;</center></v:roundrect><![endif]-->'
        '<!--[if !mso]><!-- -->'
        '<a href="#" target="_blank" style="display:inline-block;background-color:#D8F57C;color:#1F2D2F;font-family:\'Questrial\',Arial,sans-serif;font-size:18px;font-weight:700;text-decoration:none;padding:16px 40px;border-radius:8px;min-width:300px;text-align:center;">' + esc(btn) + ' &rarr;</a>'
        '<!--<![endif]--></td></tr>'
    )
    sec_h = ('<tr><td align="center" style="padding-bottom:12px;"><a href="#" target="_blank" style="font-family:\'Questrial\',Arial,sans-serif;font-size:14px;color:#2BAEB4;text-decoration:underline;">' + esc(sec_link) + ' &rarr;</a></td></tr>') if sec_link else ""
    inner = (
        ih + '\n'
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:18px;font-style:italic;color:#D8F57C;padding-bottom:6px;">' + esc(hw) + '</td></tr>\n'
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:22px;font-weight:700;color:#FBF7F1;line-height:1.3;padding-bottom:12px;">' + esc(hl) + '</td></tr>\n'
        '<tr><td align="center" class="body-text" style="color:#B8CACD;max-width:500px;padding-bottom:8px;"><p style="margin:0 0 20px;">' + esc(body) + '</p></td></tr>\n'
        + btn_html + '\n' + sec_h + '\n'
        '<tr><td align="center" style="font-family:\'Questrial\',Arial,sans-serif;font-size:12px;color:#6B7C7E;">60-day guarantee &middot; no questions &middot; you&rsquo;re safe either way</td></tr>'
    )
    return sec_wrap(idx, "cta", color, "linear-gradient(90deg,#2BAEB4,#5DD07A,#D8F57C)", inner)

def r_product(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FFFFFF"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1], 420) if imgs else ""
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    hl = strip_md(lines[0]) if lines else "Body-Signal Learning Layer"
    body = "\n".join(lines[1:]).strip() if len(lines) > 1 else ""
    inner = (
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:24px;font-weight:700;color:#1F2D2F;line-height:1.3;padding-bottom:8px;">' + esc(hl[:120]) + '</td></tr>\n'
        + ih + '\n'
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:28px;font-weight:700;color:#2BAEB4;padding-bottom:16px;">$79.99 <span style="font-size:16px;color:#4A6568;">3+3 Bundle</span></td></tr>\n'
        '<tr><td class="body-text" style="max-width:500px;">\n' + md_body(body) + '\n</td></tr>'
    )
    return sec_wrap(idx, "product", color, "linear-gradient(90deg,#2BAEB4,#5DD07A)", inner)

def r_offer(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FFFBF0"
    body = ctext.strip()[:600] if ctext else ""
    inner = '<tr><td class="body-text" style="max-width:500px;"><p style="margin:0 0 12px;">' + esc(body) + '</p></td></tr>'
    return sec_wrap(idx, "offer", color, "linear-gradient(90deg,#5DD07A,#D8F57C)", inner)

def r_comparison(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FFFBF0"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1]) if imgs else ""
    inner = ih + '\n<tr><td class="body-text" style="max-width:500px;">\n' + md_body(ctext) + '\n</td></tr>'
    return sec_wrap(idx, "comparison", color, "linear-gradient(90deg,#2BAEB4,#D8F57C)", inner)

def r_story(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FAF9F7"
    imgs = sec.get("image_files", [])
    ih = img_tr(imgs[-1]) if imgs else ""
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    hl = strip_md(lines[0]) if lines else ""
    body = "\n".join(lines[1:]).strip() if len(lines) > 1 else ""
    inner = (
        '<tr><td align="center" style="font-family:\'Fraunces\',Georgia,serif;font-size:24px;font-weight:500;color:#1F2D2F;line-height:1.3;padding-bottom:16px;">' + esc(hl[:120]) + '</td></tr>\n'
        + ih + '\n<tr><td class="body-text" style="max-width:500px;">\n' + md_body(body) + '\n</td></tr>'
    )
    return sec_wrap(idx, "story", color, "linear-gradient(90deg,#2BAEB4,#5DD07A)", inner)

def r_objections(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FBF7F1"
    inner = '<tr><td class="body-text" style="max-width:500px;">\n' + md_body(ctext) + '\n</td></tr>'
    return sec_wrap(idx, "objections", color, "linear-gradient(90deg,#5DD07A,#2BAEB4)", inner)

def r_stat(sec, lsec, ctext, idx):
    color = lsec["color"] if lsec else "#FFFFFF"
    lines = [l for l in ctext.split("\n") if l.strip()] if ctext else []
    sv = lines[0] if lines else ""
    body = "\n".join(lines[1:])[:300] if len(lines) > 1 else ""
    inner = (
        '<tr><td style="border-top:4px solid #5DD07A;background-color:#FBF7EB;border-radius:0 0 12px 12px;padding:18px 20px;text-align:center;">'
        '<p style="font-family:\'Fraunces\',Georgia,serif;font-size:36px;font-weight:700;color:#1F2D2F;line-height:1.2;margin:0 0 4px;">' + esc(sv[:20]) + '</p>'
        '<p style="font-family:\'Questrial\',Arial,sans-serif;font-size:15px;color:#4A6568;line-height:1.5;margin:0;">' + esc(body) + '</p></td></tr>'
    )
    return sec_wrap(idx, "stat", color, "linear-gradient(90deg,#5DD07A,#D8F57C)", inner)

RENDERERS = {
    "hero": r_hero, "letter": r_letter, "definition": r_def,
    "steps": r_steps, "testimonial": r_testimonial, "guarantee": r_guarantee,
    "cta": r_cta, "product": r_product, "offer": r_offer,
    "comparison": r_comparison, "story": r_story, "objections": r_objections,
    "stat": r_stat,
}

# ─── BUILD ──────────────────────────────────────────────────────

def build_email(eid):
    cat = get_category(eid)
    if not cat: return None

    pp = os.path.join(PICKS_DIR, eid + ".json")
    if not os.path.exists(pp): return None
    with open(pp) as f: picks = json.load(f)

    lp = os.path.join(LAYOUTS_DIR, cat, eid + ".json")
    layout = None
    if os.path.exists(lp):
        with open(lp) as f: layout = json.load(f)

    cp = os.path.join(COPY_DIR, cat, eid + ".md")
    copy_secs, subject, preview, signoff = parse_copy(cp)

    # Build sections
    sh = ""
    for i, sec in enumerate(picks["sections"]):
        st = sec["type"]
        ls = layout["sections"][i] if (layout and i < len(layout.get("sections",[]))) else None
        ct = copy_secs.get(i, "")
        if not ct and i < len(copy_secs):
            ct = list(copy_secs.values())[i] if i < len(copy_secs) else ""
        renderer = RENDERERS.get(st, r_letter)
        try:
            sh += renderer(sec, ls, ct, i)
        except Exception as e:
            print("    WARN section %d (%s): %s" % (i, st, e))

    title = subject or eid.replace("-", " ").title()
    pt = preview or ""
    soh = build_signoff(signoff)

    # Assemble
    html = (
        '<!DOCTYPE html>\n'
        '<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n'
        '<head>\n'
        '<meta charset="UTF-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">\n'
        '<title>' + esc(title) + ' — BrightKidCo</title>\n'
        '<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->\n'
        '<style>\n'
        '  @import url(\'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Questrial&display=swap\');\n'
        '  body { margin:0; padding:0; background-color:#FBF7F1; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }\n'
        '  table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }\n'
        '  img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; display:block; max-width:100%; }\n'
        '  a { color:#2BAEB4; text-decoration:underline; }\n'
        '  .body-text { font-family:\'Questrial\', Arial, sans-serif; font-size:17px; line-height:1.6; color:#1F2D2F; }\n'
        '  .display-text { font-family:\'Fraunces\', Georgia, serif; }\n'
        '  @media only screen and (max-width:620px) {\n'
        '    .wrapper { width:100% !important; }\n'
        '    .mobile-pad { padding-left:20px !important; padding-right:20px !important; }\n'
        '    .mobile-full { width:100% !important; }\n'
        '    .body-text { font-size:16px !important; }\n'
        '    .h1 { font-size:24px !important; }\n'
        '    .h2 { font-size:20px !important; }\n'
        '  }\n'
        '</style>\n'
        '</head>\n'
        '<body style="margin:0;padding:0;background-color:#FBF7F1;font-family:\'Questrial\',Arial,sans-serif;">\n'
        '\n'
        '<!-- PREHEADER (hidden) -->\n'
        '<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;color:#FBF7F1;line-height:0;">\n'
        + esc(pt[:100]) + '\n'
        '</div>\n'
        '\n'
        '<!-- EMAIL WRAPPER -->\n'
        '<table role="presentation" class="wrapper" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FBF7F1;">\n'
        '<tr><td align="center" style="padding:0;">\n'
        '\n'
        '  <!-- MAIN CONTAINER: 600px -->\n'
        '  <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#FBF7F1;">\n'
        '\n'
        '<!-- ================================================================= -->\n'
        '<!-- HEADER -->\n'
        '<!-- ================================================================= -->\n'
        '<tr><td align="center" style="padding:28px 24px 20px;">\n'
        '  <a href="#" target="_blank" style="display:inline-block;text-decoration:none;">\n'
        '    <img src="images/brightkidco-logo-v2.png" alt="BrightKidCo" width="160" style="display:block;max-width:160px;height:auto;border:0;" />\n'
        '  </a>\n'
        '</td></tr>\n'
        '\n'
        + sh +
        '\n'
        '<!-- ================================================================= -->\n'
        '<!-- LENA SIGN-OFF -->\n'
        '<!-- ================================================================= -->\n'
        '<tr><td style="background-color:#FAF9F7;padding:32px 32px 28px;" class="mobile-pad">\n'
        '  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">\n'
        '  <tr><td class="body-text" style="font-size:16px;line-height:1.5;color:#1F2D2F;">\n'
        '    <p style="margin:0 0 8px;">' + soh + '</p>\n'
        '  </td></tr>\n'
        '  <tr><td style="padding-top:12px;">\n'
        '    <p style="font-family:\'Questrial\',Arial,sans-serif;font-size:16px;color:#1F2D2F;margin:0 0 2px;">Talk soon,</p>\n'
        '    <p style="font-family:\'Fraunces\',Georgia,serif;font-size:22px;color:#1F2D2F;font-weight:600;margin:0;">\n'
        '      Lena<span style="color:#4A6568;font-size:14px;font-style:italic;letter-spacing:0.01em;"> &mdash;</span>\n'
        '    </p>\n'
        '  </td></tr>\n'
        '  </table>\n'
        '</td></tr>\n'
        '\n'
        '<!-- ================================================================= -->\n'
        '<!-- FOOTER -->\n'
        '<!-- ================================================================= -->\n'
        '<tr><td style="padding:0;">\n'
        '  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">\n'
        '  <tr><td style="height:1px;background-color:#E0DDD6;font-size:1px;line-height:0;">&nbsp;</td></tr>\n'
        '  </table>\n'
        '</td></tr>\n'
        '<tr><td style="background-color:#FBF7F1;padding:24px 32px 32px;text-align:center;" class="mobile-pad">\n'
        '  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">\n'
        '  <tr><td align="center" style="font-family:\'Questrial\',Arial,sans-serif;font-size:12px;color:#9AA8A7;line-height:1.8;">\n'
        '    <p style="margin:0 0 4px;font-weight:700;color:#4A6568;">BrightKidCo</p>\n'
        '    <p style="margin:0 0 4px;">Brooklyn, NY 11201</p>\n'
        '    <p style="margin:0 0 12px;">\n'
        '      <a href="#" target="_blank" style="color:#9AA8A7;text-decoration:underline;">No longer want these emails? Unsubscribe</a>\n'
        '    </p>\n'
        '    <p style="margin:0;color:#9AA8A7;">\n'
        '      Questions? Reply to this email &mdash; we read every response.\n'
        '    </p>\n'
        '  </td></tr>\n'
        '  </table>\n'
        '</td></tr>\n'
        '\n'
        '  </table>\n'
        '  <!-- END MAIN CONTAINER -->\n'
        '\n'
        '</td></tr>\n'
        '</table>\n'
        '<!-- END EMAIL WRAPPER -->\n'
        '\n'
        '</body>\n'
        '</html>\n'
    )
    return html

# ─── MAIN ───────────────────────────────────────────────────────

def main():
    files = sorted([f for f in os.listdir(PICKS_DIR) if f.endswith(".json")])
    total = len(files)
    print("Building %d emails..." % total)
    ok = 0
    for pf in files:
        eid = pf.replace(".json", "")
        idx = ok + 1
        sys.stdout.write("  [%d/%d] %s ... " % (idx, total, eid))
        sys.stdout.flush()
        try:
            h = build_email(eid)
            if h:
                out = os.path.join(HTML_DIR, eid + ".html")
                with open(out, "w") as f:
                    f.write(h)
                print("OK (%d bytes)" % len(h))
                ok += 1
            else:
                print("FAIL")
        except Exception as e:
            print("FAIL: %s" % e)
    print("\nDone. %d OK, 0 FAIL." % ok)

if __name__ == "__main__":
    main()
