import { useContext, type ReactElement } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const Navbar = ({ flag }: { flag: boolean }): ReactElement => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)
  return (
    <div className="d-flex flex-row justify-content-between bg-success align-items-center">
      <h1 className="text-center p-3 text-light">
        Pokemons {flag ? 'Page' : 'Details'}
      </h1>
      <div className='mx-4'>
        <div className="form-check form-switch" onClick={() => { setIsDarkMode(!isDarkMode) }}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div>
      </div>
      {/* <button className='btn btn-secondary' onClick={() => { setIsDarkMode(!isDarkMode) }}>Change</button> */}
    </div>
  )
}

export default Navbar
