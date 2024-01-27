import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import React from 'react'
import { PokeDetails } from '../components/PokeDetails'
import ErrorPage from './ErrorPage'
import HomeLayout from './HomeLayout'

export const router = createBrowserRouter([
  {
    path: 'pokemons',
    element: <HomeLayout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: ':id',
        element: <PokeDetails/>
      },
      {
        path: 'search/:name',
        element: <PokeDetails/>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/pokemons'/>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])
