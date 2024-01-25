import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './pages/Container'
import { requestInterceptor } from './interceptors/requestInterceptor'
import { responseInterceptor } from './interceptors/responseInterceptor'

requestInterceptor()
responseInterceptor()

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode >
        <Container/>
    </React.StrictMode>
)
