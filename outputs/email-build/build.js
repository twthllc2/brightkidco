#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE = '/root/projects/brightkidco/outputs';
const JSX_SRC = path.join(BASE, 'email-build/welcome-01-e8-l1.jsx');
const JSX_BUNDLED = path.join(BASE, 'email-build/welcome-01-e8-l1.bundled.js');
const HTML_OUT = path.join(BASE, 'welcome-01-e8-l1.html');

// Read base64 image files
const b64Dir = path.join(BASE, 'email-assets/product-photos/base64');
const images = {
  IMGCLOUD: fs.readFileSync(path.join(b64Dir, 'training-pant-cloud-raindrop-white.b64'), 'utf8').trim(),
  IMGFOX: fs.readFileSync(path.join(b64Dir, 'training-pant-fox-woodland-white.b64'), 'utf8').trim(),
  IMGPENGUIN: fs.readFileSync(path.join(b64Dir, 'training-pant-penguin-multicolor.b64'), 'utf8').trim(),
};

// Bundle with esbuild
execSync(`npx esbuild "${JSX_SRC}" --format=iife --loader:.jsx=jsx --jsx=transform --outfile="${JSX_BUNDLED}" --bundle`, { stdio: 'inherit' });

// Read bundled JS
let js = fs.readFileSync(JSX_BUNDLED, 'utf8');

// Replace image placeholders with actual data URIs
for (const [key, val] of Object.entries(images)) {
  js = js.replace(new RegExp(`"data:image/jpeg;base64,${key}"`, 'g'), `"data:image/jpeg;base64,${val}"`);
}

// Verify images were injected
const imgCount = (js.match(/data:image\/jpeg;base64,[A-Za-z0-9+/]/g) || []).length;
console.log(`Images injected: ${imgCount}`);

// Build HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>BrightKidCo</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Questrial&display=swap" rel="stylesheet">
<style>
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; min-width: 100%; background-color: #FDFCF8; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }
  td { font-family: 'Georgia', 'Times New Roman', serif; color: #3A3530; }
  img { display: block; border: 0; outline: none; line-height: 0; max-width: 100%; height: auto; }
  a img { border: 0; outline: none; }
  .preheader { display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; max-height: 0; max-width: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; }
  @media screen and (max-width: 420px) {
    .bk-email { width: 100% !important; max-width: 100% !important; }
    .bk-section { padding-left: 18px !important; padding-right: 18px !important; }
    .bk-cta-btn { display: block !important; width: 100% !important; text-align: center !important; }
  }
  @media screen and (min-width: 601px) {
    .bk-email { width: 420px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;width:100% !important;height:100% !important;min-width:100%;background-color:#FDFCF8;">

<!--[if (gte mso 9)|(IE)]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FDFCF8;"><tr><td align="center" style="padding:0;">
<table role="presentation" width="420" align="center" style="width:420px;" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;">
<![endif]-->

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FDFCF8;">
  <tr>
    <td align="center" style="padding:0;background-color:#FDFCF8;">
      <div class="bk-email" style="max-width:420px;width:100%;margin:0 auto;background-color:#FDFCF8;font-family:'Georgia','Times New Roman',serif;color:#3A3530;">
        <div class="preheader" style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;max-height:0;max-width:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;">September is coming. Here's what you need to know.</div>
        <div id="root"></div>
      </div>
    </td>
  </tr>
</table>

<!--[if (gte mso 9)|(IE)]>
</td></tr></table>
</td></tr></table>
<![endif]-->

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script>
${js}
</script>
<script>
/* Mount the email */
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(WelcomeE8L1));
</script>
</body>
</html>`;

fs.writeFileSync(HTML_OUT, html, 'utf8');
console.log(`Output: ${HTML_OUT}`);
console.log(`Size: ${(fs.statSync(HTML_OUT).size / 1024).toFixed(1)} KB`);
