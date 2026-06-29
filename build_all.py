#!/usr/bin/env python3
"""
BKC Email Builder - Master Build v7
Best of v2 + v5: flexible subject/preheader extraction, conservative body handling.
"""
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, '/root/projects/brightkidco')
import build_emails as be

EMAIL_SPECS = [
    ('cart', 'cart-02-e1.md', 'cart-02-e1'),
    ('cart', 'cart-02-e2.md', 'cart-02-e2'),
    ('cart', 'cart-02-e3.md', 'cart-02-e3'),
    ('checkout', 'checkout-03-e1.md', 'checkout-03-e1'),
    ('checkout', 'checkout-03-e2.md', 'checkout-03-e2'),
    ('browse', 'browse-04-e1.md', 'browse-04-e1'),
    ('browse', 'browse-04-e2.md', 'browse-04-e2'),
    ('browse', 'browse-04-e3.md', 'browse-04-e3'),
    ('pp-mary-story', 'mary-14-e1.md', 'mary-14-e1'),
    ('pp-level-detection', 'detection-10.md', 'detection-10'),
    ('pp-level-detection', 'pp-leveldetect-01-e1.md', 'pp-leveldetect-01-e1'),
    ('site-abandonment', 'site-20-e1.md', 'site-20-e1'),
    ('review-request', 'review-18-e1.md', 'review-18-e1'),
    ('review-request', 'review-18-e2.md', 'review-18-e2'),
    ('pp-direct-upsell', 'upsell-09-e1.md', 'upsell-09-e1'),
    ('pp-direct-upsell', 'upsell-09-e2.md', 'upsell-09-e2'),
    ('pp-extended-upsell', 'ppupsell-12-e1.md', 'ppupsell-12-e1'),
    ('pp-extended-upsell', 'ppupsell-12-e2.md', 'ppupsell-12-e2'),
    ('pp-extended-upsell', 'ppupsell-12-e3.md', 'ppupsell-12-e3'),
    ('pp-mid-checkin', 'mid-13-d30.md', 'mid-13-d30'),
    ('pp-mid-checkin', 'mid-13-d45.md', 'mid-13-d45'),
    ('pp-mid-checkin', 'mid-13-d60.md', 'mid-13-d60'),
    ('pp-at-risk', 'atrisk-23-e1.md', 'atrisk-23-e1'),
    ('pp-at-risk', 'atrisk-23-e2.md', 'atrisk-23-e2'),
    ('pp-at-risk', 'atrisk-23-e3.md', 'atrisk-23-e3'),
    ('pp-at-risk', 'atrisk-23-e4.md', 'atrisk-23-e4'),
    ('pp-education', 'pped-11-d0.md', 'pped-11-d0'),
    ('pp-education', 'pped-11-d7.md', 'pped-11-d7'),
    ('pp-education', 'pped-11-d14.md', 'pped-11-d14'),
    ('pp-education', 'pped-11-d21.md', 'pped-11-d21'),
    ('replenish-a', 'repa-15-e1.md', 'repa-15-e1'),
    ('replenish-a', 'repa-15-e2.md', 'repa-15-e2'),
    ('replenish-a', 'repa-15-e3.md', 'repa-15-e3'),
    ('replenish-b', 'repb-16-e1.md', 'repb-16-e1'),
    ('replenish-b', 'repb-16-e2.md', 'repb-16-e2'),
    ('replenish-c', 'repc-17-e1.md', 'repc-17-e1'),
    ('replenish-c', 'repc-17-e2.md', 'repc-17-e2'),
    ('transactional', 'order-05-e1.md', 'order-05-e1'),
    ('transactional', 'shipping-06.md', 'shipping-06'),
    ('transactional', 'ofd-07-e1.md', 'ofd-07-e1'),
    ('transactional', 'arrived-08.md', 'arrived-08'),
    ('faq-library', 'faq-21-e1.md', 'faq-21-e1'),
    ('faq-library', 'faq-21-e2.md', 'faq-21-e2'),
    ('faq-library', 'faq-21-e3.md', 'faq-21-e3'),
    ('faq-library', 'faq-21-e4.md', 'faq-21-e4'),
    ('faq-library', 'faq-21-e5.md', 'faq-21-e5'),
    ('faq-library', 'faq-21-e6.md', 'faq-21-e6'),
    ('sunset', 'sunset-25-e1.md', 'sunset-25-e1'),
    ('sunset', 'sunset-25-e2.md', 'sunset-25-e2'),
]

LEVEL_EMAILS = [
    ('pp-extended-ed', 'pped-22-e1-{l}.md', 'pped-22-e1-{l}'),
    ('pp-extended-ed', 'pped-22-e2-{l}.md', 'pped-22-e2-{l}'),
    ('pp-extended-ed', 'pped-22-e3-{l}.md', 'pped-22-e3-{l}'),
    ('pp-extended-ed', 'pped-22-e4-{l}.md', 'pped-22-e4-{l}'),
    ('pp-extended-ed', 'pped-22-e5-{l}.md', 'pped-22-e5-{l}'),
    ('winback-a', 'winback-a-19-e1-{l}.md', 'winback-a-19-e1-{l}'),
    ('winback-a', 'winback-a-19-e2-{l}.md', 'winback-a-19-e2-{l}'),
    ('winback-a', 'winback-a-19-e3-{l}.md', 'winback-a-19-e3-{l}'),
    ('winback-b', 'winback-b-24-e1-{l}.md', 'winback-b-24-e1-{l}'),
    ('winback-b', 'winback-b-24-e2-{l}.md', 'winback-b-24-e2-{l}'),
    ('winback-b', 'winback-b-24-e3-{l}.md', 'winback-b-24-e3-{l}'),
]
LEVELS = ['gf', 'l1', 'l2', 'l3']


def read_copy(flow, filename):
    path = Path(f'/root/projects/brightkidco/outputs/copy/{flow}/{filename}')
    if not path.exists():
        return None
    return path.read_text(encoding='utf-8')


def clean_text(text):
    if not text:
        return ''
    text = re.sub(r'\[(?:[^\]]*Logo|BKC|Trust Badge|link|cta|button|Physical Address|Unsubscribe Link)[^\]]*\]', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\{[^}]+\}', '', text)
    text = re.sub(r'^\s*\d+\.\s*[✓✗×]\s*(?:L[123]|Sub-Group|Subgroup|All Levels|all levels|GF|LF)[^\n]*\n?', '', text, flags=re.MULTILINE | re.IGNORECASE)
    text = re.sub(r'^\s*\*\s*[Cc]haracter count[^\n]*\n?', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*\*\s*[Tt]ype:[^\n]*\n?', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*\*\s*[Ee]ffect:[^\n]*\n?', '', text, flags=re.MULTILINE)
    text = re.sub(r'\*\*[A-Z][^*]{0,40}Audit[^*]*\*\*:?[^\n]*\n?', '', text)
    text = re.sub(r'\*\*[A-Z][^*]{0,40}Verification[^*]*\*\*:?[^\n]*\n?', '', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def extract_first_match(text, patterns, lowercase_filter=True):
    """Try multiple patterns; return first good match."""
    for pat in patterns:
        m = re.search(pat, text, re.IGNORECASE | re.DOTALL)
        if m:
            val = m.group(1).strip()
            val = val.strip('"').strip("'").strip('*').strip().rstrip(',').rstrip('.').strip()
            if val and 3 < len(val) < 250:
                if lowercase_filter:
                    low = val.lower()
                    if 'count' in low or 'characters' in low or 'type:' in low or 'alternative' in low or 'verification' in low or 'audit' in low:
                        continue
                return val
    return ''


def parse_copy_v7(text):
    if not text:
        return None

    info = {
        'subject': '',
        'preheader': '',
        'headline': '',
        'body_paragraphs': [],
        'cta_text': '',
        'cta_link': 'https://brightkidco.com',
        'ps': '',
    }

    # SUBJECT - extensive pattern list
    # All patterns allow optional "(Primary)" / "(Alternative)" etc. after the heading
    info['subject'] = extract_first_match(text, [
        # "## Subject Line: \"text\""
        r'##\s+Subject\s*Line[:\s]+["\u201c]([^"\u201d\n]+?)["\u201d]',
        # "## Title: \"text\""
        r'##\s+Title[:\s]+["\u201c]([^"\u201d\n]+?)["\u201d]',
        # "## \"text\"" H2 with quote
        r'^##\s+["\u201c]([^"\u201d\n]+?)["\u201d]\s*$',
        # "## Subject Line\n> **text**" with blockquote
        r'##\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+>\s*\*+\s*([^*\n]+?)\s*\*+',
        # "## Subject Line\n**text**\n"
        r'##\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+\*+\s*([^*\n]+?)\s*\*+',
        # "## Subject Line\n> text"
        r'##\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+>\s\*?\*?([^*\n]+?)\*?\*?\s*(?:\(|\n|$)',
        # "## Subject Line\ntext"
        r'##\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+["\']?([^*\n]+?)["\']?\s*(?:\(|\n|$)',
        # "### Subject Line" variants
        r'###\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+>\s*\*+\s*([^*\n]+?)\s*\*+',
        r'###\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+\*+\s*([^*\n]+?)\s*\*+',
        r'###\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+>\s\*?\*?([^*\n]+?)\*?\*?\s*(?:\(|\n|$)',
        r'###\s+Subject(?:\s+Line)?(?:\s*\([^\)]*\))?\s*\n+["\']?([^*\n]+?)["\']?\s*(?:\(|\n|$)',
        # **Subject:** or **Subject Line:**
        r'\*\*Subject(?:\s+Line)?:\*\*\s*\*?\*?"?([^*\n"]+?)"?\*?\*?\s*(?:\(|\n|$)',
        # **Subject Line** | text (table)
        r'\|\s*\*\*Subject(?:\s+Line)?\*\*\s*\|\s*([^\n|]+?)\s*\|',
        # # Title: "subject"
        r'^#\s+[^\n]*?["\u201c]([^"\u201d\n]+?)["\u201d]',
    ])

    # PREHEADER
    info['preheader'] = extract_first_match(text, [
        r'##\s+Preheader[:\s]+["\u201c]?([^\n"\u201d]+?)["\u201d]?\s*(?:\n|$)',
        r'##\s+Preview(?:\s+Text)?(?:\s*\([^\)]*\))?\s*\n+>\s*\*?\*?([^*\n]+?)\*?\*?\s*(?:\(|\n|$)',
        r'##\s+Preview(?:\s+Text)?(?:\s*\([^\)]*\))?\s*\n+\*+\s*([^*\n]+?)\s*\*+',
        r'##\s+Preview(?:\s+Text)?(?:\s*\([^\)]*\))?\s*\n+["\']?([^*\n]+?)["\']?\s*(?:\(|\n|$)',
        r'###\s+Preview(?:\s+Text)?(?:\s*\([^\)]*\))?\s*\n+>\s*\*?\*?([^*\n]+?)\*?\*?\s*(?:\(|\n|$)',
        r'###\s+Preview(?:\s+Text)?(?:\s*\([^\)]*\))?\s*\n+\*+\s*([^*\n]+?)\s*\*+',
        r'###\s+Preview(?:\s+Text)?(?:\s*\([^\)]*\))?\s*\n+["\']?([^*\n]+?)["\']?\s*(?:\(|\n|$)',
        r'\*\*Preview(?:\s+Text)?:\*\*\s*\*?\*?"?([^*\n"]+?)"?\*?\*?\s*(?:\(|\n|$)',
        r'\*\*Preheader:\*\*\s*\*?\*?"?([^*\n"]+?)"?\*?\*?',
        r'\|\s*\*\*Preview(?:\s+Text)?\*\*\s*\|\s*([^\n|]+?)\s*\|',
    ])

    # HEADLINE
    m = re.search(r'\*\*Headline:\*\*\s*\*?\*?"?([^*\n"]+?)"?\*?\*?', text)
    if m:
        info['headline'] = m.group(1).strip()

    # CTA
    cta_patterns = [
        r'\*\*Button text:\*\*\s*\*?\*?"?([^*\n"]+?)"?\*?\*?',
        r'\*\*CTA:\*\*\s*\n+\s*\*?\*?"?([^*\n"]+?)"?\*?\*?',
        r'###\s+CTA\s*\n+\s*\*?\*?"?([^*\n"]+?)"?\*?\*?',
    ]
    for pat in cta_patterns:
        m = re.search(pat, text)
        if m:
            cta = m.group(1).strip().strip('"').strip("'").strip('*').strip()
            if cta and len(cta) < 100:
                info['cta_text'] = cta
                break

    # BODY
    body_match = re.search(r'##\s+(?:Email\s+Body|HALF\s+\d+.*?)\s*\n(.*?)(?=\n##\s+(?:Lena|Footer|Source|Creative|HALF\s+2|PART\s+2))', text, re.DOTALL)
    if not body_match:
        body_match = re.search(r'###\s+(?:BODY|Email\s+Body)\s*\n(.*?)(?=\n##\s+(?:Lena|Footer|Source|Creative)|\n---|\Z)', text, re.DOTALL)
    if not body_match:
        body_match = re.search(r'\*\*Body:\*\*\s*\n(.*?)(?=\n##\s+(?:Lena|Footer|Source)|\Z)', text, re.DOTALL)

    if body_match:
        body_text = body_match.group(1)
    else:
        body_text = text

    body_text = clean_text(body_text)

    # Split by #### or ### subsections
    parts = re.split(r'\n#{2,4}\s+([^\n]+)\n', body_text)

    if len(parts) >= 3:
        info['body_paragraphs'] = []
        preamble = clean_text(parts[0])
        if preamble and len(preamble) > 30:
            info['body_paragraphs'].append({'title': '', 'body': preamble})
        for i in range(1, len(parts), 2):
            if i + 1 < len(parts):
                title = parts[i].strip()
                body = parts[i+1].strip()
                if body and len(body) > 10:
                    info['body_paragraphs'].append({'title': title, 'body': body})
    else:
        info['body_paragraphs'].append({'title': '', 'body': body_text})

    # P.S.
    ps_patterns = [
        r'P\.S\.\s*\.?\s*([^\n]+(?:\n(?!---|Talk soon|Lena|Sincerely|##\s)[^\n]+)*)',
        r'\*\*P\.S\.[^\n]*\*\*:?\s*([^\n]+)',
    ]
    for pat in ps_patterns:
        m = re.search(pat, text)
        if m:
            ps = m.group(1).strip().rstrip('.,')
            if ps and len(ps) < 500:
                info['ps'] = ps
                break

    if not info['subject']:
        return None
    return info


# =============================================================
# FALLBACK: try to find ANY subject-like line in the file
# =============================================================

def extract_subject_fallback(text, filename):
    """Last resort: look for any reasonable subject line."""
    # 1. Try H2 with quoted subject (e.g., ## "subject line")
    m = re.search(r'^##\s+["\u201c]([^"\u201d\n]+?)["\u201d]\s*$', text, re.MULTILINE)
    if m:
        title = m.group(1).strip()
        if title and 3 < len(title) < 200:
            return title

    # 2. Try H2 title that looks like a subject (short, not a section header like "Subject Line" or "Body")
    for hm in re.finditer(r'^##\s+([^\n]+)', text, re.MULTILINE):
        title = hm.group(1).strip().strip('"').strip("'").strip()
        low = title.lower()
        # Skip section headers (use word boundary match)
        # Only match if the entire word is the skip term
        skip_patterns = [
            r'^subject line', r'^subject\b', r'^preview', r'\bpreview text', r'^body\b', r'^email body',
            r'^email copy', r'^email\b', r'^sender', r'^metadata', r'^overview', r'^creative', r'^sign-?off', r'^footer',
            r'^lena\b', r'^part \d', r'^half \d', r'^flow\b', r'^position',
            r'^cta\b', r'^call to action', r'^big idea', r'^layout', r'^contraption',
            r'^typography', r'^furniture', r'^mobile', r'^recognition anchor',
            r'^verification', r'^source citation', r'^reference', r'^hook',
            r'^validation', r'^mechanism', r'^product', r'^guarantee',
            r'^testimonial', r'^calibration', r'^strategy', r'^image',
            r'^color', r'^pattern', r'^option', r'^hook', r'^opener',
            r'^opener', r'^recognition anchor', r'^reframe', r'^next time',
            r'^button text', r'^supporting', r'^placement', r'^design',
            r'^tone', r'^voice', r'^cadence', r'^trigger', r'^exit',
            r'^format', r'^goal', r'^purpose', r'^audience', r'^rationale',
            r'^example', r'^copy', r'^version', r'^note', r'^instruction',
            r'^next', r'^use case', r'^use this', r'^do not', r'^don\'t',
            r'^important', r'^warning', r'^disclaimer', r'^legal',
            r'^contact', r'^about', r'^help', r'^faq', r'^question',
            r'^answer', r'^reply', r'^click', r'^link', r'^button',
            r'^best', r'^sincerely', r'^regards', r'^thank', r'^welcome',
            r'^hello', r'^hey', r'^hi', r'^tip', r'^note', r'^hint',
            r'^conclusion', r'^summary', r'^background', r'^context',
            r'^timeline', r'^schedule', r'^sequence', r'^order',
            r'^recipe', r'^ingredient', r'^step \d', r'^how to',
            r'^emotional arc', r'^arc\b', r'^application', r'^compliance',
            r'^map\b', r'^audit', r'^pattern', r'^library', r'^matrix',
            r'^rules', r'^rule \d', r'^r\d', r'^l\d', r'^level',
            r'^forbidden', r'^checklist', r'^guide', r'^sourcing',
            r'^references', r'^cross-level', r'^three-family',
            r'^whether', r'^or\b', r'^if\b', r'^when\b', r'^inclusion',
            r'^integrated', r'^integrate', r'^inclusivity', r'^inclusive',
            r'^mapping', r'^symbolic', r'^discount', r'^offer',
            r'^return', r'^reorder', r'^restock', r'^replenish',
            r'^winback', r'^sunset', r'^mary', r'^detection', r'^pped',
            r'^ppsupp', r'^lifecycle', r'^milestone', r'^check-in', r'^checkin',
            r'^lvl', r'^l[123]\b', r'^gf\b', r'^asset type',
            r'^offer', r'^cta block', r'^block\b', r'^rendering', r'^notes',
            r'^metrics', r'^wireframe', r'^specification', r'^spec',
            r'^structure', r'^architecture', r'^reference', r'^links',
        ]
        if any(re.search(p, low) for p in skip_patterns):
            continue
        if title and 3 < len(title) < 200 and not low.startswith('section ') and 'subject' not in low and 'preheader' not in low and 'preheaders' not in low:
            return title

    # 3. Try H1 title (most authoritative)
    m = re.search(r'^#\s+([^\n]+)', text, re.MULTILINE)
    if m:
        title = m.group(1).strip()
        # Try various splits to get a good subject-like string
        candidates = [
            title.split(' — ')[-1],  # After em dash
            title.split(' - ')[-1],  # After regular dash
            title.split(':')[-1],     # After colon
            title,
        ]
        for cand in candidates:
            cand = cand.strip().strip('"').strip("'").strip()
            if cand and 3 < len(cand) < 200 and 'flow' not in cand.lower()[:10] and 'email' not in cand.lower()[:10] and 'winback' not in cand.lower()[:10] and 'pped' not in cand.lower()[:10]:
                return cand
        # Fallback to original
        title = title.split('—')[0].split(' - ')[0].strip().strip('"').strip("'").strip()
        if title and 3 < len(title) < 200:
            return title

    # 4. Look for any line that looks like a subject
    candidates = []
    for line in text.split('\n')[:300]:
        line = line.strip()
        if not line or line.startswith('#') or line.startswith('|') or line.startswith('>'):
            continue
        line = re.sub(r'^\*\*Subject(?:\s+Line)?(?:\s+\([^\)]*\))?:\*\*\s*', '', line, flags=re.IGNORECASE)
        line = line.strip().strip('"').strip("'").strip('*').strip().rstrip(',').rstrip('.').strip()
        low = line.lower()
        if 5 < len(line) < 200 and 'count' not in low and 'character' not in low and 'type:' not in low and 'preview' not in low and not low.startswith('flow:') and not low.startswith('email:') and not low.startswith('level:') and not low.startswith('title:') and not low.startswith('timing:') and not low.startswith('position:'):
            candidates.append(line)

    if candidates:
        return candidates[0]

    # 5. Use filename
    if filename:
        name = filename.replace('.md', '').replace('-', ' ').title()
        return name

    return 'A message from BrightKidCo'


# =============================================================
# HTML BUILDING
# =============================================================

def md_to_html_inline(text):
    if not text:
        return ''
    text = text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong style="color:#1A1A1A; font-weight:700;">\1</strong>', text)
    text = re.sub(r'(?<!\*)\*([^*\n]+)\*(?!\*)', r'<em>\1</em>', text)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" style="color:#039902; text-decoration:underline;">\1</a>', text)
    text = text.replace('---', '')
    text = re.sub(r'\*\*\*+', '', text)
    return text.strip()


def extract_quotes(body):
    quotes = []
    for m in re.finditer(r'^>\s*"?([^"\n]+?)"?\s*[,.]?\s*([^\n]*)', body, re.MULTILINE):
        q = m.group(1).strip()
        a = m.group(2).strip().lstrip('-').lstrip('—').strip()
        if q and 20 < len(q) < 500 and not q.startswith('!'):
            quotes.append((q, a))
    return quotes


def build_email(flow, copy_name, output_name):
    text = read_copy(flow, copy_name)
    if not text:
        return None

    info = parse_copy_v7(text)
    if not info:
        # Try fallback subject extraction so we still build the email
        info = {
            'subject': extract_subject_fallback(text, copy_name),
            'preheader': '',
            'headline': '',
            'body_paragraphs': [],
            'cta_text': '',
            'cta_link': 'https://brightkidco.com',
            'ps': '',
        }
        # Build body from full text
        info['body_paragraphs'].append({'title': '', 'body': clean_text(text)})
        if not info['subject']:
            return None

    sections = []
    img_idx = 0

    if info.get('headline'):
        sections.append(be.section_wrapper(be.c_headline(info['headline'], size=26)))

    for sec in info['body_paragraphs']:
        title = sec['title']
        body = sec['body']
        if not body:
            continue
        if 'RECOGNITION ANCHORS AUDIT' in body.upper()[:200]:
            continue

        btitle = title.lower()
        is_cta = 'cta' in btitle or 'call to action' in btitle or 'next step' in btitle
        is_guarantee = 'guarantee' in btitle
        is_quote = 'testimonial' in btitle or 'social proof' in btitle
        is_mechanism = 'mechanism' in btitle or 'science' in btitle
        is_hook = 'hook' in btitle or 'opener' in btitle

        body = re.sub(r'\[(?:BKC Logo|Trust Badge|Product Image|logo|Link|link|button|CTA)\]', '', body, flags=re.IGNORECASE)
        body = body.strip()

        if is_cta:
            cta_text = info.get('cta_text') or 'Continue'
            cta_link = info.get('cta_link', 'https://brightkidco.com')
            if title and 'cta' not in title.lower() and 'next step' not in title.lower():
                sections.append(be.section_wrapper(be.c_headline(title, size=22)))
            sections.append(be.section_wrapper(be.c_button(cta_text, href=cta_link)))
            continue

        if is_guarantee:
            clean = md_to_html_inline(body)
            sections.append(be.section_wrapper(be.c_guarantee(clean)))
            continue

        quotes = extract_quotes(body)
        body_no_quotes = re.sub(r'^>.*$', '', body, flags=re.MULTILINE).strip()

        if quotes and len(quotes) >= 2:
            if title:
                sections.append(be.section_wrapper(be.c_headline(title, size=22)))
            inner = ""
            for q, a in quotes[:3]:
                inner += be.c_quote(md_to_html_inline(q), md_to_html_inline(a))
            sections.append(be.section_wrapper(inner))
            if body_no_quotes and len(body_no_quotes) > 30:
                sections.append(be.section_wrapper(be.c_paragraph(md_to_html_inline(body_no_quotes))))
            continue

        inner = ""
        if title and not is_hook and len(title) < 80 and not btitle.startswith('section') and not btitle.startswith('subsection'):
            inner += be.c_headline(title, size=24)
        paras = [p.strip() for p in body.split('\n\n') if p.strip()]
        for p in paras:
            if p.startswith('>'):
                continue
            if all(line.strip().startswith('- ') for line in p.split('\n') if line.strip()):
                items = [line.strip()[2:] for line in p.split('\n') if line.strip().startswith('- ')]
                inner += be.c_checklist([md_to_html_inline(it) for it in items])
            else:
                if re.match(r'^[•·\-]?\s*>\d+%', p):
                    parts = p.split('.', 1)
                    if len(parts) == 2:
                        inner += be.c_stat_block(parts[0].lstrip('>•·- ').strip(), parts[1].strip())
                        continue
                inner += be.c_paragraph(md_to_html_inline(p))
        if inner:
            sections.append(be.section_wrapper(inner))

    ps_text = info['ps'] or "Thanks for being here. If you have a question, hit reply. You'll get me — not a template, not a bot. I read everything."

    html = be.assemble_email(info['subject'], info['preheader'], sections, ps_text=ps_text)
    be.write_email(flow, output_name, html)
    return len(html)


if __name__ == '__main__':
    total = 0
    success = 0
    skipped = []
    for flow, copy_name, output_name in EMAIL_SPECS:
        n = build_email(flow, copy_name, output_name)
        if n:
            total += n
            success += 1
        else:
            skipped.append(f'{flow}/{copy_name}')

    for flow, copy_tpl, output_tpl in LEVEL_EMAILS:
        for lvl in LEVELS:
            copy_name = copy_tpl.format(l=lvl)
            output_name = output_tpl.format(l=lvl)
            n = build_email(flow, copy_name, output_name)
            if n:
                total += n
                success += 1
            else:
                skipped.append(f'{flow}/{copy_name}')

    print(f'=== SUMMARY ===')
    print(f'Built: {success} emails, {total} total chars')
    if skipped:
        print(f'Skipped ({len(skipped)}):')
        for s in skipped:
            print(f'  - {s}')
