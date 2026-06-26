#!/usr/bin/env python3
"""
BKC Email Assembler
Takes decision picks + component HTML + brand tokens → Klaviyo-compatible HTML.

Usage: python3 assemble-email.py <decision.json> [--output <output.html>]
"""

import json
import os
import re
import sys
from pathlib import Path

# ============================================================
# BRAND TOKENS
# ============================================================
BRAND = {
    "teal": "#2BAEB4",
    "tealDeep": "#1E8A8F",
    "green": "#5DD07A",
    "greenDeep": "#3BB35E",
    "ink": "#1F2D2F",
    "soft": "#4A6568",
    "muted": "#8A9B9D",
    "cream": "#FBF7F1",
    "paper": "#FFFFFF",
    "yellow": "#FFD866",
    "lilac": "#EEE8F6",
    "mint": "#E8F5EC",
    "lavender": "#F0EDF8",
    "gradient": "linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)",
    "font_main": "'Questrial', system-ui, sans-serif",
    "font_display": "'Fraunces', Georgia, serif",
    "font_hand": "'Caveat', cursive",
    "font_body": "'Inter', system-ui, sans-serif",
    "width": 600,
}

# ============================================================
# IMAGE PATHS
# ============================================================
IMAGE_BASE = "/root/projects/brightkidco/outputs/email-assets/product-photos"
IMAGE_PATHS = {
    "lifestyle": os.path.join(IMAGE_BASE, "lifestyle"),
    "flatlay": os.path.join(IMAGE_BASE, "flatlay"),
    "accessories": os.path.join(IMAGE_BASE, "accessories"),
    "resized": os.path.join(IMAGE_BASE, "resized"),
}

# ============================================================
# COMPONENT HTML EXTRACTOR
# ============================================================
class ComponentExtractor:
    def __init__(self, showcase_file, index_file=None):
        self.showcase_file = showcase_file
        self.index_file = index_file
        self.components = {}
        self.line_map = {}
        self._load_line_map()
        self._extract_all()
    
    def _load_line_map(self):
        """Load component ID to line number mapping from index file."""
        if not self.index_file:
            # Try to find index file
            base = os.path.dirname(self.showcase_file)
            potential = os.path.join(base, "component-index-v2.md")
            if os.path.exists(potential):
                self.index_file = potential
        
        if not self.index_file or not os.path.exists(self.index_file):
            return
        
        with open(self.index_file, 'r') as f:
            for line in f:
                # Match pattern: `COMPONENT_ID` ... *(L####)*
                match = re.search(r'`([^`]+)`\s*\[.*?\]\s*—\s*.+?\s*\*\(L(\d+)\)\*', line)
                if match:
                    comp_id = match.group(1).strip()
                    line_num = int(match.group(2))
                    self.line_map[comp_id] = line_num
    
    def _extract_all(self):
        """Extract components from showcase HTML by card headers."""
        with open(self.showcase_file, 'r') as f:
            content = f.read()
            lines = content.split('\n')
        
        # Find all card headers and their positions
        card_positions = []
        for i, line in enumerate(lines):
            if '<div class="card-header"' in line and '✦' in line:
                # Extract component ID from header
                match = re.search(r'✦\s*([A-Z]+-\d+|[A-Z]+-\d+\.\d+|\d+\.\d+)\s*—', line)
                if match:
                    comp_id = match.group(1).strip()
                    card_positions.append((i, comp_id))
        
        # Extract each card
        for idx, (start, comp_id) in enumerate(card_positions):
            # Find the end of this card (next card or end of file)
            if idx + 1 < len(card_positions):
                end = card_positions[idx + 1][0]
            else:
                end = len(lines)
            
            # Look backward from start to find the card div
            card_start = start
            while card_start > 0:
                if '<div class="card">' in lines[card_start] or '<div class="card ' in lines[card_start]:
                    break
                card_start -= 1
            
            # Extract the card HTML
            card_html = '\n'.join(lines[card_start:end])
            self.components[comp_id] = card_html
    
    def get(self, component_id):
        """Get HTML for a component by ID."""
        return self.components.get(component_id, None)
    
    def list_all(self):
        """List all available component IDs."""
        return list(self.components.keys())

# ============================================================
# CSS INLINER
# ============================================================
class CSSInliner:
    """Inline CSS styles into HTML elements."""
    
    @staticmethod
    def inline(html):
        """Inline all CSS into style attributes."""
        # Find <style> blocks
        style_pattern = r'<style[^>]*>(.*?)</style>'
        styles = re.findall(style_pattern, html, re.DOTALL)
        
        if not styles:
            return html
        
        # Parse CSS rules
        rules = {}
        for style_block in styles:
            # Remove comments
            style_block = re.sub(r'/\*.*?\*/', '', style_block, flags=re.DOTALL)
            # Find rules
            rule_pattern = r'([^{}]+)\{([^}]+)\}'
            for selector, declarations in re.findall(rule_pattern, style_block):
                selector = selector.strip()
                declarations = declarations.strip()
                if selector and declarations:
                    rules[selector] = declarations
        
        # Remove <style> blocks
        html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
        
        # Apply rules to elements
        for selector, declarations in rules.items():
            # Simple class selectors
            class_match = re.match(r'\.(\w+)', selector)
            if class_match:
                class_name = class_match.group(1)
                # Find elements with this class
                pattern = rf'<(\w+)[^>]*class="[^"]*{class_name}[^"]*"'
                for match in re.finditer(pattern, html):
                    tag = match.group(1)
                    full_match = match.group(0)
                    # Add style attribute
                    if 'style=' in full_match:
                        html = html.replace(full_match, full_match.replace('style="', f'style="{declarations} '))
                    else:
                        html = html.replace(full_match, f'{full_match} style="{declarations}"')
        
        return html

# ============================================================
# TABLE CONVERTER
# ============================================================
class TableConverter:
    """Convert flexbox layout to table layout for Outlook compatibility."""
    
    @staticmethod
    def convert(html):
        """Convert flex containers to tables."""
        # Convert display:flex to table layout
        flex_pattern = r'<div[^>]*style="[^"]*display:\s*flex[^"]*"[^>]*>(.*?)</div>'
        
        def replace_flex(match):
            content = match.group(1)
            # Extract flex children
            child_pattern = r'<div[^>]*style="[^"]*flex:\s*\d+[^"]*"[^>]*>(.*?)</div>'
            children = re.findall(child_pattern, content, re.DOTALL)
            
            if not children:
                return match.group(0)
            
            # Build table
            cols = len(children)
            col_width = 100 // cols
            
            table_html = f'<table width="100%" cellpadding="0" cellspacing="0"><tr>'
            for child in children:
                table_html += f'<td width="{col_width}%" style="vertical-align:top;">{child}</td>'
            table_html += '</tr></table>'
            
            return table_html
        
        # This is a simplified version - full implementation would handle nested flex
        return html

# ============================================================
# EMAIL ASSEMBLER
# ============================================================
class EmailAssembler:
    def __init__(self, component_extractor):
        self.extractor = component_extractor
        self.inliner = CSSInliner()
        self.converter = TableConverter()
    
    def assemble(self, decision_file, parsed_file=None):
        """Assemble a single email from decision picks."""
        # Load decision
        with open(decision_file, 'r') as f:
            decision = json.load(f)
        
        # Load parsed email if provided
        parsed = None
        if parsed_file and os.path.exists(parsed_file):
            with open(parsed_file, 'r') as f:
                parsed = json.load(f)
        
        email_id = decision["email_id"]
        picks = decision["picks"]
        
        # Build email sections
        sections_html = []
        
        for section_key, pick in picks.items():
            component_id = pick["component_id"]
            image_file = pick.get("image")
            
            # Get component HTML
            component_html = self.extractor.get(component_id)
            if not component_html:
                # Create a minimal fallback
                component_html = self._create_fallback(section_key, pick)
            
            # Inject image if needed
            if image_file:
                component_html = self._inject_image(component_html, image_file)
            
            # Inject copy if available
            if parsed:
                component_html = self._inject_copy(component_html, section_key, parsed)
            
            # Apply brand tokens
            component_html = self._apply_tokens(component_html)
            
            sections_html.append(component_html)
        
        # Assemble full email
        full_html = self._wrap_in_shell(sections_html, decision, parsed)
        
        # Inline CSS
        full_html = self.inliner.inline(full_html)
        
        # Convert to table layout
        full_html = self.converter.convert(full_html)
        
        return full_html
    
    def _create_fallback(self, section_key, pick):
        """Create minimal fallback HTML for missing components."""
        component_id = pick["component_id"]
        section_type = pick.get("section_type", section_key)
        
        return f'''
        <div style="padding: 20px 40px; background: {BRAND['paper']};">
            <div style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: {BRAND['tealDeep']}; font-weight: 700; margin-bottom: 10px;">
                [{section_type.upper()}]
            </div>
            <div style="font-family: {BRAND['font_display']}; font-size: 24px; font-weight: 700; color: {BRAND['ink']}; line-height: 1.2;">
                {{SECTION_CONTENT}}
            </div>
        </div>
        '''
    
    def _inject_image(self, html, image_file):
        """Inject image into component HTML."""
        # Find image placeholders
        img_patterns = [
            r'<img[^>]*src="[^"]*"[^>]*>',
            r'src="[^"]*"',
            r'background-image:\s*url\([^)]+\)',
        ]
        
        # Determine image path
        image_path = None
        for img_type, base_path in IMAGE_PATHS.items():
            full_path = os.path.join(base_path, image_file)
            if os.path.exists(full_path):
                image_path = full_path
                break
        
        if not image_path:
            # Try resized
            image_path = os.path.join(IMAGE_BASE, "resized", image_file)
        
        # For now, use relative path (Klaviyo will need absolute URLs)
        relative_path = f"images/{image_file}"
        
        # Replace image placeholders
        if '<img' in html:
            html = re.sub(r'<img[^>]*src="[^"]*"', f'<img src="{relative_path}"', html)
        
        return html
    
    def _inject_copy(self, html, section_key, parsed):
        """Inject copy text into component HTML."""
        # Map section keys to copy sections
        section_map = {
            "hook": "hook",
            "validation": "validation",
            "mechanism": "mechanism",
            "social_proof": "social_proof",
            "product": "product",
            "guarantee": "guarantee",
            "offer": "offer",
            "cta": "cta",
            "body": "body",
            "body_1": "body",
            "body_2": "body",
            "body_3": "body",
        }
        
        copy_section = section_map.get(section_key, section_key)
        
        # Find copy content
        copy_content = None
        for section in parsed.get("copy", {}).get("sections", []):
            if section.get("type") == copy_section or copy_section in section.get("name", "").lower():
                copy_content = section.get("content", "")
                break
        
        if not copy_content:
            # Try to get from CTA
            if section_key == "cta":
                copy_content = parsed.get("copy", {}).get("cta", {}).get("button_text", "Shop now")
        
        if copy_content:
            # Replace placeholders in HTML
            html = html.replace("{SECTION_CONTENT}", copy_content[:500])
            html = html.replace("{{HEADLINE}}", copy_content.split('\n')[0][:100])
            html = html.replace("{{BODY}}", copy_content[:500])
            html = html.replace("{{CTA_TEXT}}", copy_content[:50] if section_key == "cta" else "")
            
            # If no placeholders were found, create a styled copy block
            if "{SECTION_CONTENT}" not in html and "{{HEADLINE}}" not in html:
                copy_block = f'''
                <div style="padding: 20px 40px; background: {BRAND['paper']};">
                    <div style="font-family: {BRAND['font_body']}; font-size: 16px; line-height: 1.7; color: {BRAND['soft']};">
                        {copy_content[:500]}
                    </div>
                </div>
                '''
                
                # Insert copy block after the component
                insert_pos = html.find('</div>', html.find('card-body'))
                if insert_pos > 0:
                    insert_pos = html.find('</div>', insert_pos + 6) + 6
                    html = html[:insert_pos] + copy_block + html[insert_pos:]
                else:
                    # Just append at the end
                    html = html + copy_block
        
        return html
    
    def _apply_tokens(self, html):
        """Apply brand tokens to HTML."""
        replacements = {
            "{{TEAL}}": BRAND["teal"],
            "{{TEAL_DEEP}}": BRAND["tealDeep"],
            "{{GREEN}}": BRAND["green"],
            "{{GREEN_DEEP}}": BRAND["greenDeep"],
            "{{INK}}": BRAND["ink"],
            "{{SOFT}}": BRAND["soft"],
            "{{MUTED}}": BRAND["muted"],
            "{{CREAM}}": BRAND["cream"],
            "{{PAPER}}": BRAND["paper"],
            "{{YELLOW}}": BRAND["yellow"],
            "{{LILAC}}": BRAND["lilac"],
            "{{MINT}}": BRAND["mint"],
            "{{LAVENDER}}": BRAND["lavender"],
            "{{GRADIENT}}": BRAND["gradient"],
            "{{FONT_MAIN}}": BRAND["font_main"],
            "{{FONT_DISPLAY}}": BRAND["font_display"],
            "{{FONT_HAND}}": BRAND["font_hand"],
            "{{FONT_BODY}}": BRAND["font_body"],
        }
        
        for token, value in replacements.items():
            html = html.replace(token, value)
        
        return html
    
    def _wrap_in_shell(self, sections_html, decision, parsed):
        """Wrap sections in Klaviyo-compatible email shell."""
        # Get email metadata
        subject = ""
        preview = ""
        from_name = "Lena from BrightKidCo"
        
        if parsed:
            subject = parsed.get("copy", {}).get("subject", "")
            preview = parsed.get("copy", {}).get("preview", "")
            from_name = parsed.get("copy", {}).get("from_name", from_name)
        
        # Build sections string
        sections_str = "\n".join(sections_html)
        
        # Build email HTML
        html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{subject}</title>
    <!--[if mso]>
    <style type="text/css">
        table {{border-collapse: collapse;}}
        .fallback-font {{font-family: Arial, sans-serif;}}
    </style>
    <![endif]-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Caveat:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: {BRAND['cream']}; font-family: {BRAND['font_main']};">
    <!-- Preheader (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
        {preview}
        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
    </div>
    
    <!-- Email wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: {BRAND['cream']};">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <!-- Email container -->
                <table role="presentation" width="{BRAND['width']}" cellpadding="0" cellspacing="0" style="background-color: {BRAND['paper']}; border-radius: 0; overflow: hidden;">
                    
                    <!-- Header with logo -->
                    <tr>
                        <td style="padding: 24px 20px 0; text-align: center; background-color: {BRAND['paper']};">
                            <img src="images/brightkidco-logo-v2.png" alt="BrightKidCo" style="height: 34px; width: auto;" />
                        </td>
                    </tr>
                    
                    <!-- Email sections -->
                    {sections_str}
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: {BRAND['cream']}; padding: 30px 24px; text-align: center;">
                            <div style="font-family: {BRAND['font_display']}; font-size: 20px; font-style: italic; font-weight: 500; color: {BRAND['ink']}; margin-bottom: 30px;">
                                Calm progress, one day at a time.
                            </div>
                            <div style="font-size: 14px; color: {BRAND['ink']}; font-weight: 500; margin-bottom: 14px;">
                                <a href="#" style="color: {BRAND['ink']}; text-decoration: none;">Our Method</a>
                            </div>
                            <div style="font-size: 14px; color: {BRAND['ink']}; font-weight: 500; margin-bottom: 14px;">
                                <a href="#" style="color: {BRAND['ink']}; text-decoration: none;">Shop the Pants</a>
                            </div>
                            <div style="font-size: 14px; color: {BRAND['ink']}; font-weight: 500; margin-bottom: 28px;">
                                <a href="#" style="color: {BRAND['ink']}; text-decoration: none;">Parent Stories</a>
                            </div>
                            <div style="font-size: 11.5px; color: {BRAND['muted']}; max-width: 340px; margin: 0 auto; line-height: 1.65;">
                                No longer want to receive these emails? <a href="#" style="color: {BRAND['ink']}; text-decoration: underline;">Unsubscribe</a>.<br/>
                                BrightKidCo Ltd · Berlin, Germany · hello@brightkidco.com
                            </div>
                            <div style="margin: 28px auto 0; width: 60px; height: 3px; background: {BRAND['gradient']}; border-radius: 3px;"></div>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>'''
        
        return html

# ============================================================
# MAIN
# ============================================================
def main():
    if len(sys.argv) < 2:
        print("Usage: python3 assemble-email.py <decision.json> [--output <output.html>] [--showcase <showcase.html>]")
        sys.exit(1)
    
    decision_file = sys.argv[1]
    output_file = None
    showcase_file = None
    parsed_file = None
    
    # Parse optional arguments
    i = 2
    while i < len(sys.argv):
        if sys.argv[i] == "--output" and i + 1 < len(sys.argv):
            output_file = sys.argv[i + 1]
            i += 2
        elif sys.argv[i] == "--showcase" and i + 1 < len(sys.argv):
            showcase_file = sys.argv[i + 1]
            i += 2
        elif sys.argv[i] == "--parsed" and i + 1 < len(sys.argv):
            parsed_file = sys.argv[i + 1]
            i += 2
        else:
            i += 1
    
    # Default paths
    if not showcase_file:
        showcase_file = os.path.join(os.path.dirname(__file__), "..", "outputs", "email-assets", "showcase-artifacts-final.html")
    
    if not parsed_file:
        # Try to find parsed email
        decision_name = Path(decision_file).stem
        for flow_dir in Path(decision_file).parent.parent.glob("parsed-emails/*"):
            potential = flow_dir / f"{decision_name}.json"
            if potential.exists():
                parsed_file = str(potential)
                break
    
    # Default output
    if not output_file:
        output_file = str(Path(decision_file).parent / "html" / f"{Path(decision_file).stem}.html")
    
    # Extract components
    print(f"Extracting components from {showcase_file}...")
    extractor = ComponentExtractor(showcase_file)
    print(f"Extracted {len(extractor.components)} components")
    
    # Assemble email
    print(f"Assembling {decision_file}...")
    assembler = EmailAssembler(extractor)
    html = assembler.assemble(decision_file, parsed_file)
    
    # Save output
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w') as f:
        f.write(html)
    print(f"Output written to {output_file}")

if __name__ == "__main__":
    main()
