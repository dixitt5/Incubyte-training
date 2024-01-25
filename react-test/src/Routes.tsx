import { createBrowserRouter } from 'react-router-dom'
import App from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Details from './components/Details'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/:id',
    element: <Details/>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])

export default router
