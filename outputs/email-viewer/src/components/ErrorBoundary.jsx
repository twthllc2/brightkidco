import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error('Viewer error:', error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: 40,
          color: '#c00',
          fontFamily: 'ui-monospace, monospace',
          fontSize: 12,
          whiteSpace: 'pre-wrap',
        }}>
          <h2 style={{ marginBottom: 16 }}>Viewer Crashed</h2>
          <pre>{this.state.error.message + '\n\n' + (this.state.error.stack || '').split('\n').slice(0, 20).join('\n')}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
