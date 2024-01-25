import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home.tsx'
import { ErrorPage } from '../pages/error.tsx'
import { PokeDetails } from '../pages/PokeDetails.tsx'
import { Layout } from '../pages/layout.tsx'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/pokemons'}/>
  },
  {
    path: 'pokemons',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: ':id',
        element: <PokeDetails/>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])
