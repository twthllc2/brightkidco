// Loads the manifest of 125 emails and groups them by flow.
// In dev: fetched from /flow_batch_manifest.json (Vite serves parent dirs via fs.allow)
// In production: imported at build time.

import { useEffect, useState } from 'react'

let cachedManifest = null

export async function loadManifest() {
  if (cachedManifest) return cachedManifest
  // Vite serves files from project root via fs.allow; fetch the JSON
  const res = await fetch('/flow_batch_manifest.json')
  if (!res.ok) throw new Error(`Manifest fetch failed: ${res.status}`)
  const m = await res.json()
  cachedManifest = m
  return m
}

export function useManifest() {
  const [manifest, setManifest] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    loadManifest().then(setManifest).catch(setError)
  }, [])
  return { manifest, error }
}

// Flatten manifest into [{ emailId, flow, flowKey, file }] for grid rendering
export function getEmailList(manifest) {
  if (!manifest) return []
  const list = []
  for (const [flowKey, files] of Object.entries(manifest.batches)) {
    if (flowKey === 'unmatched') continue
    for (const f of files) {
      // extract email_id from path: outputs/copy/<flow_dir>/<email_id>.md
      const filename = f.split('/').pop().replace('.md', '')
      // skip the analysis/ duplicates — keep the canonical flow dir entry
      const id = filename.replace(/^analysis-/, '')
      const flowDir = f.split('/')[2] || flowKey
      const flow = flowDir
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
      list.push({ emailId: id, flow, flowKey, file: f, flowDir })
    }
  }
  // Dedup (manifest has analysis/ + canonical duplicates)
  const seen = new Set()
  return list.filter(e => {
    if (seen.has(e.emailId)) return false
    seen.add(e.emailId)
    return true
  })
}

export function getFlows(manifest) {
  if (!manifest) return []
  const flows = {}
  for (const e of getEmailList(manifest)) {
    if (!flows[e.flowKey]) flows[e.flowKey] = { name: e.flow, count: 0 }
    flows[e.flowKey].count++
  }
  return Object.entries(flows)
    .map(([key, v]) => ({ key, ...v }))
    .sort((a, b) => b.count - a.count)
}
