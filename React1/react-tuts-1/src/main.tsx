import React from 'react'
import ReactDOM from 'react-dom/client'
import CustomRouter from './pages/CustomRouter.tsx'

const root = document.getElementById('root')
if (root === null) {
  throw new Error('Root element not found')
}
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CustomRouter />
  </React.StrictMode>
)
