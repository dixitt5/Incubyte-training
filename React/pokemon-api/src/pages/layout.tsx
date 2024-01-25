import { type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = (): ReactElement => {
  return (
        <>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Pokemons</span>
            </nav>
            <Outlet/>
        </>
  )
}
