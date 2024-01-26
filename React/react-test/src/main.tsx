import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.js'

const root = document.getElementById('root')
if (root === null) {
  throw new Error('Cannot find root element.')
}

ReactDOM.createRoot(root).render(
  < React.StrictMode >
    <Home />
  </React.StrictMode >
)
