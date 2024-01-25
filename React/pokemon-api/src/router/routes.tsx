import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home.tsx'
import { ErrorPage } from '../pages/error.tsx'
import { PokeDetails } from '../components/PokeDetails.tsx'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/pokemons'}/>
  },
  {
    path: 'pokemons',
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
