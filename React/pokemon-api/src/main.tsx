import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { App } from './App.tsx'

const root = document.getElementById('root')
if (root === null) {
  throw new Error("Can't find root element!")
}
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
