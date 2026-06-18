// EmailFrame.jsx — loads pre-transpiled email JS (output of scripts/pretranspile.mjs)
// and injects into an iframe. No babel in the browser.

import { useState, useEffect } from 'react'

const cache = new Map()
const errors = new Map()

async function fetchJsText(emailId) {
  if (cache.has(emailId)) return cache.get(emailId)
  if (errors.has(emailId)) throw new Error(errors.get(emailId))
  // Pre-transpiled file is at /transpiled/<emailId>.js
  const url = `/transpiled/${emailId}.js`
  const res = await fetch(url)
  if (!res.ok) {
    const e = `HTTP ${res.status} loading ${emailId}`
    errors.set(emailId, e)
    throw new Error(e)
  }
  const text = await res.text()
  cache.set(emailId, text)
  return text
}

function buildIframeHtml(jsCode) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=600" />
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <style>
    body { margin: 0; padding: 0; background: #f0eee9; font-family: -apple-system, system-ui, sans-serif; }
    #root { display: block; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
try {
${jsCode}

const Comp = window.__defaultExport;
if (Comp) {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Comp));
} else {
  document.getElementById('root').innerHTML = '<pre style="padding:20px;color:#c00">No default export.</pre>';
}
} catch(err) {
  document.getElementById('root').innerHTML = '<pre style="padding:20px;color:#c00;font-family:monospace;font-size:11px;white-space:pre-wrap">' + (err.message || err) + '</pre>';
}
  </script>
</body>
</html>`
}

export function EmailFrame({ emailId, height = 800, scale = 1 }) {
  const [html, setHtml] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setHtml(null)
    setError(null)
    fetchJsText(emailId)
      .then(text => { if (!cancelled) setHtml(buildIframeHtml(text)) })
      .catch(e => { if (!cancelled) setError(e.message) })
    return () => { cancelled = true }
  }, [emailId])

  if (error) return <div className="empty">Error: {error}</div>
  if (!html) return <div className="loading">Loading {emailId}...</div>
  return (
    <iframe
      title={emailId}
      srcDoc={html}
      style={{ width: `${600 * scale}px`, height: `${height * scale}px`, border: 'none', display: 'block' }}
    />
  )
}
