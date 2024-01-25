import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import React from 'react'
import { PokeDetails } from '../components/PokeDetails'
import ErrorPage from './ErrorPage'

export const router = createBrowserRouter([
  {
    path: 'pokemons',
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: ':id',
        element: <PokeDetails />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])
