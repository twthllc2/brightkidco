import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { EmailFrame } from '../components/EmailFrame.jsx'

export default function EmailView() {
  const { emailId } = useParams()
  const [blueprint, setBlueprint] = useState(null)
  const [audit, setAudit] = useState(null)

  useEffect(() => {
    setBlueprint(null); setAudit(null)
    fetch(`/blueprints/${emailId}_blueprint.json`)
      .then(r => r.ok ? r.json() : null)
      .then(setBlueprint)
      .catch(() => setBlueprint(null))
    fetch(`/audit_reports/${emailId}_qa_report.json`)
      .then(r => r.ok ? r.json() : null)
      .then(setAudit)
      .catch(() => setAudit(null))
  }, [emailId])

  return (
    <div className="email-view">
      <div className="email-canvas">
        <div>
          <Link to="/" className="back-link">← Back to grid</Link>
          <EmailFrame emailId={emailId} height={1400} scale={1} />
        </div>
      </div>
      <aside className="email-panel">
        <div className="section">
          <h4>Email</h4>
          <div className="kv"><span className="k">ID</span><span className="v">{emailId}</span></div>
          {blueprint && (
            <>
              <div className="kv"><span className="k">Flow</span><span className="v">{blueprint.flow_type}</span></div>
              <div className="kv"><span className="k">Position</span><span className="v">{blueprint.position}</span></div>
              <div className="kv"><span className="k">Level</span><span className="v">{blueprint.level_scope}</span></div>
              <div className="kv"><span className="k">Components</span><span className="v">{blueprint.blueprint?.length}</span></div>
              <div className="kv"><span className="k">Image slots</span><span className="v">{blueprint.total_image_slots_required}</span></div>
            </>
          )}
        </div>

        {blueprint && (
          <div className="section">
            <h4>Blueprint ({blueprint.blueprint?.length})</h4>
            <div className="blueprint-list">
              {blueprint.blueprint?.map(b => (
                <div key={b.position} className={`blueprint-item ${b.contains_image_slot ? 'has-img' : ''}`}>
                  <span className="pos">{b.position}</span>
                  <span className="cid">{b.component_id}</span>
                  <span className="cat">{b.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {audit && (
          <div className="section">
            <h4>QA Audit</h4>
            <div className="kv">
              <span className="k">Status</span>
              <span className="v" style={{
                color: audit.brand_compliance_status === 'APPROVED' ? 'var(--success)' : 'var(--danger)',
                fontWeight: 700
              }}>
                {audit.brand_compliance_status}
              </span>
            </div>
            <div className="kv"><span className="k">Violations</span><span className="v">{audit.violations_detected}</span></div>
            <div className="kv"><span className="k">AST compile</span><span className="v">{audit.ast_compilation_success ? '✓' : '✗'}</span></div>
            <div className="kv"><span className="k">Width</span><span className="v">{audit.audit_metrics?.detected_outer_width_px}px</span></div>
            <div className="kv"><span className="k">Images filled</span><span className="v">{audit.audit_metrics?.image_slots_filled}</span></div>
            {audit.notes?.length > 0 && (
              <div style={{ marginTop: 8, fontSize: 11, color: 'var(--text-muted)' }}>
                {audit.notes.map((n, i) => <div key={i}>• {n}</div>)}
              </div>
            )}
          </div>
        )}
      </aside>
    </div>
  )
}
