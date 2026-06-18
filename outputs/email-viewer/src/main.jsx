import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import GridView from './routes/GridView.jsx'
import EmailView from './routes/EmailView.jsx'
import CompareView from './routes/CompareView.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './styles.css'

window.addEventListener('error', (e) => {
  console.error('GLOBAL ERROR:', e.error || e.message)
})
window.addEventListener('unhandledrejection', (e) => {
  console.error('UNHANDLED REJECTION:', e.reason)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<GridView />} />
            <Route path="email/:emailId" element={<EmailView />} />
            <Route path="compare" element={<CompareView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
