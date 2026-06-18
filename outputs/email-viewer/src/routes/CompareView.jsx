import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useManifest, getEmailList } from '../lib/manifest.js'
import { EmailFrame } from '../components/EmailFrame.jsx'

export default function CompareView() {
  const { manifest } = useManifest()
  const [params, setParams] = useSearchParams()
  const allEmails = useMemo(() => getEmailList(manifest), [manifest])
  const selectedIds = (params.get('ids') || '').split(',').filter(Boolean)
  const [picks, setPicks] = useState(selectedIds.length ? selectedIds : [])

  const togglePick = (id) => {
    let next
    if (picks.includes(id)) next = picks.filter(p => p !== id)
    else if (picks.length < 4) next = [...picks, id]
    else next = [...picks.slice(1), id] // rotate out oldest
    setPicks(next)
    setParams(next.length ? { ids: next.join(',') } : {})
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <h3>Compare emails</h3>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>
          Click 2-4 emails to compare side-by-side. ({picks.length}/4)
        </div>
        {picks.length > 0 && (
          <button onClick={() => { setPicks([]); setParams({}) }} style={{ width: '100%', marginBottom: 12 }}>
            Clear
          </button>
        )}
        <input
          type="search"
          placeholder="Search..."
          onChange={e => {
            const q = e.target.value.toLowerCase()
            document.querySelectorAll('.pick-item').forEach(el => {
              el.style.display = (el.dataset.search || '').includes(q) ? 'flex' : 'none'
            })
          }}
          style={{ marginBottom: 8 }}
        />
        <div style={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto' }}>
          {allEmails.map(e => {
            const selected = picks.includes(e.emailId)
            return (
              <div
                key={e.emailId}
                className="pick-item"
                data-search={`${e.emailId} ${e.flow}`.toLowerCase()}
                onClick={() => togglePick(e.emailId)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '5px 8px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 12,
                  background: selected ? 'var(--accent)' : 'transparent',
                  color: selected ? 'white' : 'var(--text)',
                }}
              >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.emailId}</span>
                {selected && <span>✓</span>}
              </div>
            )
          })}
        </div>
      </aside>
      <div className="main" style={{ padding: 0 }}>
        {picks.length < 2 ? (
          <div className="empty" style={{ paddingTop: 80 }}>
            <h3>Select 2-4 emails to compare</h3>
            <p style={{ marginTop: 8 }}>Pick emails from the sidebar to render them side-by-side.</p>
          </div>
        ) : (
          <div
            className="compare-grid"
            style={{ gridTemplateColumns: `repeat(${picks.length}, 1fr)` }}
          >
            {picks.map(id => (
              <div key={id} className="compare-cell">
                <div className="header">
                  <span>{id}</span>
                  <Link to={`/email/${id}`}>open →</Link>
                </div>
                <EmailFrame emailId={id} height={2000} scale={1} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
