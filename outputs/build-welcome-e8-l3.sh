#!/bin/bash
# Build Welcome E8 L3 email
set -e

DIR="/root/projects/brightkidco/outputs"
B64_DIR="$DIR/email-assets/product-photos/base64"
JSX="$DIR/welcome-01-e8-l3.jsx"
OUT="$DIR/welcome-01-e8-l3.html"

# Read base64 data
CLOUD_B64=$(cat "$B64_DIR/training-pant-cloud-raindrop-white.b64")
FOX_B64=$(cat "$B64_DIR/training-pant-fox-woodland-white.b64")
PENGUIN_B64=$(cat "$B64_DIR/training-pant-penguin-multicolor.b64")

# Create temp JSX with images injected
TMPJSX=$(mktemp /tmp/welcome-e8-l3-XXXXXX.jsx)
sed \
  -e "s|var IMG_CLOUD = \"data:image/jpeg;base64,\";|var IMG_CLOUD = \"data:image/jpeg;base64,${CLOUD_B64}\";|" \
  -e "s|var IMG_FOX = \"data:image/jpeg;base64,\";|var IMG_FOX = \"data:image/jpeg;base64,${FOX_B64}\";|" \
  -e "s|var IMG_PENGUIN = \"data:image/jpeg;base64,\";|var IMG_PENGUIN = \"data:image/jpeg;base64,${PENGUIN_B64}\";|" \
  "$JSX" > "$TMPJSX"

# Build with esbuild
TMPJS=$(mktemp /tmp/welcome-e8-l3-XXXXXX.js)
npx esbuild "$TMPJSX" --format=iife --loader:.jsx=jsx --jsx=transform --outfile="$TMPJS" 2>&1

# Create HTML wrapper
cat > "$OUT" << 'HTMLEOF'
<!DOCTYPE html>
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
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; min-width: 100%; background-color: #FAF7F3; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table { border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0; }
  td { font-family: 'Questrial', system-ui, sans-serif; color: #3D3A37; }
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
<body style="margin:0;padding:0;width:100% !important;height:100% !important;min-width:100%;background-color:#FAF7F3;">

<!--[if (gte mso 9)|(IE)]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FAF7F3;"><tr><td align="center" style="padding:0;">
<table role="presentation" width="420" align="center" style="width:420px;" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:0;">
<![endif]-->

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#FAF7F3;">
  <tr>
    <td align="center" style="padding:0;background-color:#FAF7F3;">
      <div class="bk-email" style="max-width:420px;width:100%;margin:0 auto;background-color:#FAF7F3;font-family:'Questrial',system-ui,sans-serif;color:#3D3A37;">
        <div class="preheader" style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;max-height:0;max-width:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;">This my last email. Whatever you decide, we are still here when you need us.</div>
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
HTMLEOF

# Append the built JS
cat "$TMPJS" >> "$OUT"

# Append mount script and closing tags
cat >> "$OUT" << 'MOUNTEOF'
;
/* Mount the email */
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(WelcomeE8L3));
</script>
</body>
</html>
MOUNTEOF

# Cleanup
rm -f "$TMPJSX" "$TMPJS"

echo "Build complete: $OUT"
echo "Size: $(wc -c < "$OUT") bytes"
