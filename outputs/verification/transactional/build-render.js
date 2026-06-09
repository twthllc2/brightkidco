const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const primitivesRaw = fs.readFileSync('/root/projects/brightkidco/raw/BKCO - EMAIL MARKETING/welcome-flow/primitives.jsx', 'utf8');
const shippingRaw = fs.readFileSync('/root/projects/brightkidco/outputs/emails/transactional/shipping-06.jsx', 'utf8');

const combinedJsx = `
var BRAND = {
  teal: '#2BAEB4', tealDeep: '#1A8A8F', green: '#5DD07A',
  ink: '#1F2D2F', cream: '#FBF7F1', soft: '#4A6568', muted: '#8A9B9D',
  gradient: 'linear-gradient(90deg, #2BAEB4 0%, #5DD07A 100%)',
  gradientText: { background: 'linear-gradient(135deg, #2BAEB4 0%, #5DD07A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
};
var FONT = { main: "'Questrial', 'Helvetica Neue', sans-serif", display: "'Fraunces', Georgia, serif" };
var FLOW1_SHARED = {
  signoff: { line1: 'Talk soon,', ps: 'Both my sons went through this. I know what it feels like to wait for a package that might change everything. Take your time when it arrives.' },
  out: "You're receiving this because you placed an order. We respect your inbox.",
  footer: { tagline: '"Small signals. Big changes."', links: ['Shop', 'Our Story', 'Support'], address: 'BrightKidCo · Berlin, Germany' }
};
var MW = 420;
var LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='34'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Questrial,sans-serif' font-size='16' font-weight='700' fill='%231F2D2F'%3EBrightKidCo%3C/text%3E%3C/svg%3E";
var B = BRAND;
var F = FONT;

${primitivesRaw.replace(/Object\.assign\(window.*$/ms, '').replace(/const LOGO = .*/m, '').replace(/const MW = .*/m, '').replace(/const B = window\.BRAND;/m, '').replace(/const F = window\.FONT;/m, '')}

${shippingRaw.replace(/window\.EMAILS\[.*$/ms, '')}
`;

const compiled = babel.transformSync(combinedJsx, {
  presets: ['@babel/preset-react'],
  filename: 'combined.jsx',
}).code;

const reactJs = fs.readFileSync('/root/projects/brightkidco/outputs/verification/transactional/node_modules/react/umd/react.production.min.js', 'utf8');
const reactDomJs = fs.readFileSync('/root/projects/brightkidco/outputs/verification/transactional/node_modules/react-dom/umd/react-dom.production.min.js', 'utf8');

const html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<title>shipping-06</title>\n<link href="https://fonts.googleapis.com/css2?family=Questrial&family=Fraunces:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400;700&display=swap" rel="stylesheet" />\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\nbody{background:#E8E4DE;display:flex;justify-content:center;font-family:Questrial,sans-serif}\n#root{width:420px}\n</style>\n<script>\n' + reactJs + '\n<\/script>\n<script>\n' + reactDomJs + '\n<\/script>\n</head>\n<body>\n<div id="root"></div>\n<script>\n' + compiled + '\nvar root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render(React.createElement(Email_transactional_shipping_06));\n<\/script>\n</body>\n</html>';

fs.writeFileSync('/root/projects/brightkidco/outputs/verification/transactional/shipping-06-render.html', html);
console.log('Build complete. HTML size:', html.length);
