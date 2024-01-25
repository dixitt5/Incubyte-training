import { type ReactElement, useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext.ts'

export const Layout = (): ReactElement => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)
  useEffect(() => {
    document.body.className = (isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark')
  }, [isDarkTheme])
  return (
      <>
          <nav
              className="navbar navbar-light"
              style={{ backgroundColor: isDarkTheme ? '#414141' : '#ccccff', color: isDarkTheme ? 'white' : 'black' }}
          >
              <span
                  className="display-6 mb-0 h1 mx-2"
              >Pokemons</span>
              <div className="form-check form-switch mx-4">
                  <input onClick={() => { setIsDarkTheme(!isDarkTheme) } } className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isDarkTheme}/>
                  <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                  >Dark Mode</label>
              </div>
          </nav>
          <Outlet/>
      </>
  )
}
