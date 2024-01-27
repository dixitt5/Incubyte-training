import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/Routes'
import AppContainer from './AppContainer'

const root = document.getElementById('root')

if (root == null) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <AppContainer />
  </React.StrictMode>
)
