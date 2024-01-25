import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { addResponseInterceptors } from './interceptors/addResponseInterceptors.ts'
import './Home.css';

const root = document.getElementById('root')
if (root === null) {
  throw new Error("Can't find root element!")
}

// middlewares
addResponseInterceptors()

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
