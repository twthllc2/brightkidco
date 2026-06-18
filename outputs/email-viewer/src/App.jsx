import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <div className="topbar">
        <Link to="/" className="brand">BKC <span>Email Viewer</span></Link>
        <Link to="/compare" style={{ fontSize: 12, color: 'var(--text-muted)' }}>Compare</Link>
        <div className="spacer" />
        <div className="meta">125 emails · 19 flows</div>
      </div>
      <Outlet />
    </div>
  )
}
