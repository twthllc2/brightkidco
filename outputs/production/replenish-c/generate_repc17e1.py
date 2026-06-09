#!/usr/bin/env python3
"""Generate repc-17-e1.html production XHTML from JSX source."""

import os

def gen_tally_svg():
    """Generate the 150-tally-mark SVG."""
    lines = []
    for gi in range(30):
        for ti in range(5):
            x = gi * 12.5 + ti * 2.2
            is_group_five = (gi + 1) % 5 == 0
            opacity = 0.7 if is_group_five else 0.4
            if ti < 4:
                lines.append(f'<line x1="{x:.1f}" y1="2" x2="{x:.1f}" y2="14" stroke="#C4956A" stroke-width="1.2" opacity="{opacity}" />')
            else:
                lines.append(f'<line x1="{x - 5:.1f}" y1="2" x2="{x + 4:.1f}" y2="14" stroke="#C4956A" stroke-width="1.2" opacity="{opacity}" />')
    return '\n'.join(lines)

def gen_timeline_svg():
    """Generate the timeline SVG."""
    return '''<line x1="20" y1="40" x2="320" y2="40" stroke="#B8A99A" stroke-width="2" stroke-dasharray="4 3" />
<circle cx="20" cy="40" r="5" fill="#B8A99A" opacity="0.6" />
<text x="20" y="62" text-anchor="middle" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-size="10" fill="#6B655E">Day 1</text>
<circle cx="76" cy="40" r="6" fill="#B8A99A" opacity="0.7" />
<text x="76" y="62" text-anchor="middle" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-size="10" fill="#6B655E">30</text>
<circle cx="132" cy="40" r="7.5" fill="#B8A99A" opacity="0.8" />
<text x="132" y="62" text-anchor="middle" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-size="10" fill="#6B655E">60</text>
<circle cx="188" cy="40" r="9" fill="#8BA89C" opacity="0.8" />
<text x="188" y="62" text-anchor="middle" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-size="10" fill="#6B655E">90</text>
<circle cx="244" cy="40" r="10.5" fill="#8BA89C" opacity="0.9" />
<text x="244" y="62" text-anchor="middle" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-size="10" fill="#6B655E">120</text>
<circle cx="320" cy="40" r="12" fill="#C4956A" />
<circle cx="320" cy="40" r="16" fill="none" stroke="#C4956A" stroke-width="1" opacity="0.4" />
<circle cx="320" cy="40" r="20" fill="none" stroke="#C4956A" stroke-width="0.5" opacity="0.2" />
<text x="320" y="62" text-anchor="middle" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-size="10" font-weight="700" fill="#C4956A">150</text>'''

def gen_flourish_svg():
    """Generate the signature flourish SVG."""
    return '''<path d="M2,20 C8,10 16,28 24,18 C30,10 38,26 48,14 L52,10" stroke="#C4956A" stroke-width="1.5" fill="none" stroke-linecap="round" />
<path d="M48,12 L52,10 L50,14" stroke="#C4956A" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />'''

def gen_avatar_svg():
    """Generate Lena avatar SVG."""
    return '''<svg width="58" height="58" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
<rect width="58" height="58" fill="#F5E8D0" />
<circle cx="29" cy="22" r="10" fill="#D4A574" />
<path d="M10,58 C10,42 18,34 29,34 C40,34 48,42 48,58 Z" fill="#C98C6B" />
<text x="29" y="55" text-anchor="middle" font-size="6" fill="#1F2D2F" font-weight="700" letter-spacing="0.5" opacity="0.4">PHOTO</text>
</svg>'''

def gen_imgframe_svg():
    """Generate the image icon SVG for ImgFrame."""
    return '''<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display:block; margin:0 auto 10px; opacity:0.5;">
<rect x="3" y="6" width="26" height="20" rx="3" stroke="#2BAEB4" stroke-width="1.8" fill="none" />
<circle cx="11" cy="13" r="2.5" fill="#2BAEB4" opacity="0.5" />
<path d="M5,23 L12,16 L18,21 L22,18 L27,23" stroke="#2BAEB4" stroke-width="1.8" fill="none" stroke-linejoin="round" />
</svg>'''

def gen_corner_svgs():
    """Generate the 4 corner marker SVGs for ImgFrame."""
    return '''<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" style="position:absolute; top:10px; left:10px;"><path d="M1,6 L1,1 L6,1" stroke="#2BAEB4" stroke-width="2" fill="none" stroke-linecap="round" /></svg>
<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" style="position:absolute; top:10px; right:10px;"><path d="M8,1 L13,1 L13,6" stroke="#2BAEB4" stroke-width="2" fill="none" stroke-linecap="round" /></svg>
<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" style="position:absolute; bottom:10px; left:10px;"><path d="M1,8 L1,13 L6,13" stroke="#2BAEB4" stroke-width="2" fill="none" stroke-linecap="round" /></svg>
<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" style="position:absolute; bottom:10px; right:10px;"><path d="M8,13 L13,13 L13,8" stroke="#2BAEB4" stroke-width="2" fill="none" stroke-linecap="round" /></svg>'''

def build_html():
    tally_svg = gen_tally_svg()
    timeline_svg = gen_timeline_svg()
    flourish_svg = gen_flourish_svg()
    avatar_svg = gen_avatar_svg()
    imgframe_svg = gen_imgframe_svg()
    corner_svgs = gen_corner_svgs()
    
    html = f'''<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Your 5+5 has been working hard for 150 days — BrightKidCo</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    body, table, td, a {{ -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }}
    table, td {{ mso-table-lspace: 0pt; mso-table-rspace: 0pt; }}
    img {{ -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }}
    body {{ margin: 0; padding: 0; width: 100% !important; height: 100% !important; }}
    a[x-apple-data-detectors] {{ color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }}
    @media (prefers-color-scheme: dark) {{
      .dark-bg {{ background-color: #1a1a1a !important; }}
      .dark-text {{ color: #e0e0e0 !important; }}
      .dark-border {{ border-color: #333 !important; }}
    }}
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: 'Questrial', Arial, sans-serif;">

<!-- Preheader -->
<div style="display:none; max-height:0; overflow:hidden; mso-hide:all;">
  Your 5+5 has been working hard for 150 days. Here&#x2019;s what to ask yourself, and when to refresh the rotation.&amp;zwnj;&amp;nbsp;&amp;zwnj;&amp;nbsp;&amp;zwnj;&amp;nbsp;&amp;zwnj;&amp;nbsp;&amp;zwnj;&amp;nbsp;&amp;zwnj;&amp;nbsp;&amp;zwnj;&amp;nbsp;&amp;zwnj;&amp;nbsp;
</div>

<!-- Main Wrapper -->
<table role="presentation" width="420" align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:420px; margin:0 auto; background-color: #FAF7F2;">
<tr><td>

<!-- SECTION 1: HEADER — Brand Logo -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 24px 20px; text-align: center; position: relative; overflow: hidden;">

  <!-- Tally-mark texture — 150 marks in groups of 5 -->
  <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); opacity: 0.25;">
  <svg width="380" height="18" viewBox="0 0 380 18" xmlns="http://www.w3.org/2000/svg" style="display: block;">
{tally_svg}
  </svg>
  </div>

  <!-- Logo -->
  <img src="brightkidco-logo-v2.png" alt="BrightKidCo" style="height: 34px; position: relative; display: block; margin: 0 auto;" />

</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 2: HERO — Timeline SVG + Milestone Quote -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 0 32px 24px; text-align: center;">

  <!-- Washi-tape accent -->
  <div style="width: 140px; height: 8px; background: linear-gradient(90deg, #E5DDD3 0%, #D4C9BC 50%, #E5DDD3 100%); border-radius: 2px; margin: 0 auto 20px; opacity: 0.7; font-size: 0; line-height: 0;">&#160;</div>

  <!-- Timeline SVG — 150-Day Line with milestone dots -->
  <svg width="340" height="90" viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto 20px;">
{timeline_svg}
  </svg>

  <!-- Hero illustration placeholder — worn vs fresh pair -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius: 16px; overflow: hidden; margin-bottom: 24px;">
  <tr><td style="position: relative; width: 100%; height: 200px; background-color: #FFFFFF; border: 2px dashed #2BAEB4; border-radius: 16px; text-align: center; vertical-align: middle; padding: 18px 22px;">
{corner_svgs}
{imgframe_svg}
    <div style="font-family: 'Questrial', Arial, sans-serif; font-size: 12.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #2BAEB4; margin-bottom: 6px;">HERO ILLUSTRATION</div>
    <div style="font-family: 'Questrial', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #4A6568; max-width: 300px;">worn-vs-fresh-pair.png &#8212; side-by-side worn (left) vs fresh (right), soft watercolor style</div>
  </td></tr>
  </table>

  <!-- Milestone Quote -->
  <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: 400; font-style: italic; line-height: 1.4; color: #2D2B28; margin: 0;">
    150 days of showing up.<br />That&#x2019;s real commitment.
  </p>

</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 3: OPENER — Universal Recognition -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 32px 32px 24px;">
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #2D2B28; margin: 0 0 16px;">
    Whether you&#x2019;ve seen your child pause, look down, and walk to the bathroom, or you&#x2019;re still waiting for that first signal, if the 5+5 bundle has been part of your routine for the last 5 months, this worth a read.
  </p>
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #2D2B28; margin: 0;">
    Your 5+5 has been through a lot. Daily wear. Machine washes. Body heat. That gentle &#8220;uh-oh&#8221; sensation your child&#x2019;s nervous system has been learning from has been working, every single day.
  </p>
</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 4: RECOGNITION ANCHORS — 5 anchors with em-dash markers -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 32px 32px 24px;">
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #2D2B28; margin: 0 0 20px;">
    At 5 months in, you&#x2019;ve probably seen one of these:
  </p>

  <!-- Anchor 1 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        Your child pauses mid-play and looks down. That pause didn&#x2019;t happen before.
      </p>
    </td>
  </tr>
  </table>

  <!-- Anchor 2 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        They pull at their pants or show you with a gesture when they notice.
      </p>
    </td>
  </tr>
  </table>

  <!-- Anchor 3 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        They&#x2019;ve walked toward the bathroom, even if the timing isn&#x2019;t perfect yet.
      </p>
    </td>
  </tr>
  </table>

  <!-- Anchor 4 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        They tolerate sitting on the toilet without a meltdown.
      </p>
    </td>
  </tr>
  </table>

  <!-- Anchor 5 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        You&#x2019;re still waiting, and that&#x2019;s a real outcome too.
      </p>
    </td>
  </tr>
  </table>

  <!-- R5 callout — timeline flexibility -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F6F2EA; border-radius: 8px;">
  <tr><td style="padding: 14px 16px; border-left: 3px solid #C4956A;">
    <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 1.55; color: #6B655E; margin: 0; font-style: italic;">
      <strong style="color: #C4956A; font-weight: 600; font-style: normal;">R5 applied:</strong> Every timeline is different. Some kids show awareness in 2&#8211;4 weeks. For others, the first signal takes 8&#8211;12 weeks. At 150 days, you have real data, and that&#x2019;s valuable regardless of where you are on that curve.
    </p>
  </td></tr>
  </table>

</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 5: WHAT CHANGES AT 5 MONTHS — Mechanism -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 32px 32px 24px;">
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 1.6; color: #2D2B28; margin: 0 0 16px;">
    Here&#x2019;s something most parents don&#x2019;t think about until it matters: the Body-Signal Learning Layer isn&#x2019;t magic, it&#x2019;s physics + neurology working together. The cotton inner layer creates the signal. The smart absorption layer protects without blocking it. The outer barrier keeps it leak-resistant.
  </p>

  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #2D2B28; margin: 0 0 16px;">
    After 5 months of consistent wear, 150+ washes: the fabric relaxes. The elastic loses tension. The signal-creation layer isn&#x2019;t as crisp as it was on Day 1.
  </p>

  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #2D2B28; margin: 0;">
    That doesn&#x2019;t mean it stopped working. It means the learning layer your child&#x2019;s nervous system has been building a relationship with, it&#x2019;s earned a refresh.
  </p>

</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 6: PRODUCT &amp; OFFER — No Urgency -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 32px 32px 24px;">
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 1.6; color: #2D2B28; margin: 0 0 16px;">
    A fresh 5+5 bundle means:
  </p>

  <!-- Benefit 1 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        Crisp elastic for a clean fit
      </p>
    </td>
  </tr>
  </table>

  <!-- Benefit 2 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        Full-strength Body-Signal Learning Layer response
      </p>
    </td>
  </tr>
  </table>

  <!-- Benefit 3 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        New designs, same signal
      </p>
    </td>
  </tr>
  </table>

  <!-- Benefit 4 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
  <tr>
    <td style="width: 16px; vertical-align: top; padding-right: 10px;">
      <span style="font-family: Georgia, serif; font-size: 16px; color: #C4956A;">&#8212;</span>
    </td>
    <td>
      <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #2D2B28; margin: 0;">
        Enough rotation to keep laundry manageable (10 pairs minimum for consistent learning)
      </p>
    </td>
  </tr>
  </table>

  <!-- Gift angle -->
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #6B655E; margin: 0; font-style: italic;">
    Or, if your child has graduated sizes or your journey has changed, a smaller pack might be what works now. Or a gift for another family navigating the same path. Whatever fits where you are.
  </p>

</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 7: THREE-FAMILY TESTIMONIAL -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 32px 32px 24px;">

  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 1.6; color: #2D2B28; margin: 0 0 20px;">
    Three different families. Three different kids. One common thread, the 150-day mark.
  </p>

  <!-- Card 1 — L1 (Sarah-type): green-tinted -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #E8DED2; border-radius: 12px; margin-bottom: 16px;">
  <tr><td style="padding: 20px;">
    <div style="font-family: Georgia, serif; font-size: 36px; line-height: 1; color: #C4956A; margin-bottom: 8px; font-weight: 700;">&#8220;</div>
    <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-weight: 400; font-style: italic; line-height: 1.5; color: #2D2B28; margin: 0 0 12px;">
      He told me when he had to go for the first time last week. It took 4 months, but he said &#8216;potty.&#8217; I cried. I reordered that same day.
    </p>
    <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 13px; font-weight: 700; font-style: italic; line-height: 1.4; color: #6B655E; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
      BrightKidCo parent review
    </p>
  </td></tr>
  </table>

  <!-- Card 2 — L2 (Lisa-type): amber-tinted -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #DCE4D8; border-radius: 12px; margin-bottom: 16px;">
  <tr><td style="padding: 20px;">
    <div style="font-family: Georgia, serif; font-size: 36px; line-height: 1; color: #8BA89C; margin-bottom: 8px; font-weight: 700;">&#8220;</div>
    <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-weight: 400; font-style: italic; line-height: 1.5; color: #2D2B28; margin: 0 0 12px;">
      We tried the BCBA protocols for 2 years. Nothing clicked until we added the Body-Signal layers. She started pausing at Week 6. By Month 5, she was initiating twice a week. Those aren&#x2019;t big numbers to most people, they&#x2019;re huge for us.
    </p>
    <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 13px; font-weight: 700; font-style: italic; line-height: 1.4; color: #6B655E; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
      BrightKidCo parent
    </p>
  </td></tr>
  </table>

  <!-- Card 3 — L3 (Maria-type): muted -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #E2DCE4; border-radius: 12px; margin-bottom: 20px;">
  <tr><td style="padding: 20px;">
    <div style="font-family: Georgia, serif; font-size: 36px; line-height: 1; color: #B8A99A; margin-bottom: 8px; font-weight: 700;">&#8220;</div>
    <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-weight: 400; font-style: italic; line-height: 1.5; color: #2D2B28; margin: 0 0 12px;">
      He&#x2019;s not trained. But at 5 months, he felt something for the first time and looked down. That had literally never happened in 9 years. 150 days in, and the signal is getting through.
    </p>
    <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 13px; font-weight: 700; font-style: italic; line-height: 1.4; color: #6B655E; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">
      BrightKidCo parent
    </p>
  </td></tr>
  </table>

</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 8: CTA — Permission CTA -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 30px 32px; text-align: center;">

  <!-- Primary CTA button — amber with MSO VML fallback -->
  <!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="https://www.brightkidco.com/collections/all-products" style="height:48px;v-text-anchor:middle;width:280px;" arcsize="17%" strokecolor="#C4956A" fillcolor="#C4956A">
    <w:anchorlock/>
    <center style="color:#ffffff;font-family:'Questrial',Arial,sans-serif;font-size:15px;font-weight:600;letter-spacing:0.3px;">See the refreshed 5+5 &#8594;</center>
  </v:roundrect>
  <![endif]-->
  <!--[if !mso]><!-->
  <a href="https://www.brightkidco.com/collections/all-products" style="display: inline-block; padding: 0 32px; background-color: #C4956A; color: #FFFFFF; font-family: 'Questrial', Arial, sans-serif; font-size: 15px; font-weight: 600; letter-spacing: 0.3px; text-decoration: none; border-radius: 8px; height: 48px; line-height: 48px; text-align: center;">See the refreshed 5+5 &#8594;</a>
  <!--<![endif]-->

  <!-- Secondary CTA — text link -->
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 14px; font-weight: 400; margin: 0 0 16px;">
    <a href="https://www.brightkidco.com/collections/all-products" style="color: #C4956A; text-decoration: underline;">Explore single pairs &amp; accessories &#8594;</a>
  </p>

  <!-- Permission framing -->
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: #6B655E; font-style: italic; margin: 0;">
    If the 5+5 still fits your routine, a fresh set keeps the signal strong. If you&#x2019;re not sure what you need, reply to this email and I&#x2019;ll help you figure it out. No pressure either way.
  </p>

</td></tr>
</table>

<!-- Thin divider -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- SECTION 9: LENA SIGN-OFF — SHORT variant -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #1F2D2F;">
<tr><td style="padding: 44px 22px 36px;">

<!-- Signoff card -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #1F2A2C; border: 1.5px solid #2F3D40; border-radius: 22px; overflow: hidden;">
<tr><td style="padding: 26px 24px 24px;">

<!-- Subtle top gradient accent bar -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="height: 4px; background: linear-gradient(90deg, #C4956A 0%, #8BA89C 100%); opacity: 0.9; font-size: 0; line-height: 0;">&#160;</td></tr>
</table>

<!-- Top row: avatar + name/role -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<!-- Avatar -->
<td style="width: 58px; vertical-align: middle; padding-right: 14px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr><td style="width: 58px; height: 58px; border-radius: 50%; background: linear-gradient(135deg, #FFD866 0%, #C4956A 100%); padding: 2.5px;">
<table role="presentation" width="100%" height="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius: 50%; background-color: #FFFDF6; border: 1.5px solid #1F2D2F; overflow: hidden;">
<tr><td style="text-align: center; vertical-align: middle;">
{avatar_svg}
</td></tr>
</table>
</td></tr>
</table>
</td>

<!-- Name/role -->
<td style="vertical-align: middle;">
<div style="font-size: 10.5px; letter-spacing: 1.6px; text-transform: uppercase; color: #8FAFB2; font-weight: 700; margin-bottom: 2px; font-family: 'Questrial', Arial, sans-serif;">A note from</div>
<div style="font-size: 17px; font-weight: 700; color: #FFFFFF; line-height: 1.2; font-family: 'Questrial', Arial, sans-serif;">Lena Bauer</div>
<div style="font-size: 12px; color: #8FAFB2; margin-top: 2px; font-style: italic; font-family: 'Questrial', Arial, sans-serif;">Customer Support &#183; Mom of two autistic sons</div>
</td>
</tr>
</table>

<!-- Handwritten signature block -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 1.5px dashed #3A4547; border-bottom: 1.5px dashed #3A4547; margin-top: 16px; margin-bottom: 16px;">
<tr><td style="padding: 16px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="vertical-align: middle;">
  <div style="font-size: 12.5px; color: #B8CACD; margin-bottom: 2px; font-family: 'Questrial', Arial, sans-serif;">Talk soon,</div>
  <div style="font-family: 'Caveat', cursive; font-size: 42px; line-height: 0.95; font-weight: 500; color: #C4956A; letter-spacing: -0.5px; margin-top: 2px;">Lena</div>
</td>
<!-- Flourish SVG -->
<td style="width: 54px; vertical-align: middle; padding-left: 14px;">
<svg width="54" height="40" viewBox="0 0 54 40" xmlns="http://www.w3.org/2000/svg" style="display: block; opacity: 0.55;">
{flourish_svg}
</svg>
</td>
</tr>
</table>
</td></tr>
</table>

<!-- P.S. — personal milestone -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding-bottom: 10px;">
<div style="font-size: 13px; line-height: 1.65; color: #B8CACD; font-style: italic; font-family: 'Questrial', Arial, sans-serif;">
<span style="color: #C4956A; font-weight: 700; font-style: normal; margin-right: 4px;">P.S.</span>
My older son was 8 before his body signals started connecting. 150 days is a milestone, wherever you are in the journey, that&#x2019;s real time invested. If you&#x2019;re thinking about reordering, the 60-day guarantee applies to every purchase.
</div>
</td></tr>
</table>

</td></tr>
</table>

</td></tr>
</table>

<!-- SECTION 10: FOOTER — CAN-SPAM Compliant -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF7F2;">
<tr><td style="padding: 24px 32px 16px; text-align: center;">

  <!-- Thin divider above footer -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
  <tr><td style="height: 1px; background-color: #E5DDD3; font-size: 0; line-height: 0;">&#160;</td></tr>
  </table>

  <!-- Brand name -->
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; color: #2D2B28; margin: 0 0 4px;">
    BrightKidCo
  </p>

  <!-- Tagline -->
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 11px; line-height: 1.4; color: #8A9B9D; font-style: italic; margin: 0 0 12px;">
    Built for the brain that learns differently.
  </p>

  <!-- Links -->
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 11px; line-height: 1.4; color: #8A9B9D; margin: 0 0 8px;">
    <a href="#" style="color: #C4956A; text-decoration: underline;">Unsubscribe</a>
    &#160;|&#160;
    <a href="#" style="color: #C4956A; text-decoration: underline;">Manage Preferences</a>
    &#160;|&#160;
    <a href="#" style="color: #C4956A; text-decoration: underline;">Our Story</a>
  </p>

  <!-- 60-Day Guarantee -->
  <p style="font-family: 'Questrial', Arial, sans-serif; font-size: 11px; line-height: 1.4; color: #8A9B9D; margin: 0;">
    60-Day Money-Back Guarantee on every order. If it doesn&#x2019;t work for your child, full refund. No forms. No questions.
  </p>

</td></tr>
</table>

</td></tr>
</table>

</body>
</html>'''
    return html

if __name__ == '__main__':
    html = build_html()
    outpath = '/root/projects/brightkidco/outputs/production/replenish-c/repc-17-e1.html'
    os.makedirs(os.path.dirname(outpath), exist_ok=True)
    with open(outpath, 'w', encoding='utf-8') as f:
        f.write(html)
    
    # Check file size
    size = os.path.getsize(outpath)
    print(f'Written: {outpath}')
    print(f'Size: {size:,} bytes ({size/1024:.1f} KB)')
    if size > 102 * 1024:
        print('WARNING: File exceeds 102KB limit!')
    else:
        print('OK: File is under 102KB limit.')
