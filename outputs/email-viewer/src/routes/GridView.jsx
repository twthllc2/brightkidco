import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useManifest, getEmailList, getFlows } from '../lib/manifest.js'
import { EmailFrame } from '../components/EmailFrame.jsx'

export default function GridView() {
  const { manifest, error } = useManifest()
  const [activeFlows, setActiveFlows] = useState(null)
  const [search, setSearch] = useState('')

  const allEmails = useMemo(() => getEmailList(manifest), [manifest])
  const flows = useMemo(() => getFlows(manifest), [manifest])

  const filtered = useMemo(() => {
    let list = allEmails
    if (activeFlows) {
      const set = new Set(activeFlows)
      list = list.filter(e => set.has(e.flowKey))
    }
    if (search) {
      const q = search.toLowerCase()
      list = list.filter(e =>
        e.emailId.toLowerCase().includes(q) ||
        e.flow.toLowerCase().includes(q)
      )
    }
    return list
  }, [allEmails, activeFlows, search])

  if (error) return <div className="empty">Failed to load manifest: {error.message}</div>
  if (!manifest) return <div className="loading">Loading manifest...</div>

  const toggleFlow = (key) => {
    const current = activeFlows || flows.map(f => f.key)
    const set = new Set(current)
    if (set.has(key)) set.delete(key)
    else set.add(key)
    setActiveFlows(set.size === flows.length ? null : Array.from(set))
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <input
          type="search"
          placeholder="Search emails..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <h3>Flows</h3>
        <div className="flow-toggle">
          <button onClick={() => setActiveFlows(null)}>All</button>
          <button onClick={() => setActiveFlows(flows.map(f => f.key))}>None</button>
        </div>
        <div className="flow-list">
          {flows.map(f => {
            const active = !activeFlows || activeFlows.includes(f.key)
            return (
              <div
                key={f.key}
                className={`flow-item ${active ? 'active' : ''}`}
                onClick={() => toggleFlow(f.key)}
              >
                <span>{f.name}</span>
                <span className="count">{f.count}</span>
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: 16, fontSize: 11, color: 'var(--text-muted)' }}>
          {filtered.length} of {allEmails.length} emails shown
        </div>
      </aside>
      <div className="main">
        {filtered.length === 0 ? (
          <div className="empty">No emails match the filter.</div>
        ) : (
          <div className="grid">
            {filtered.map(e => (
              <Link key={e.emailId} to={`/email/${e.emailId}`} className="grid-item">
                <div className="preview">
                  <EmailFrame emailId={e.emailId} height={1200} scale={0.5} />
                </div>
                <div className="meta">
                  <div className="id">{e.emailId}</div>
                  <div className="flow">{e.flow}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
