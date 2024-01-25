import { createBrowserRouter } from 'react-router-dom'
import Home from './Home.tsx'
import { PokeDetails } from '../components/PokeDetails.tsx'

export const router = createBrowserRouter([
  {
    path: '/pokemons',
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: ':id',
        element: <PokeDetails />
      }

    ]
  }
])
