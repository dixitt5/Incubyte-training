import { type ReactElement } from 'react'
import DarkModeToggle from './DarkModeToggle'

const Navbar = ({ flag }: { flag: boolean }): ReactElement => {
  return (
    <div className="flex flex-row justify-between font-semibold bg-green-400 text-white p-4 items-center">
      <h1 className="text-4xl">Pokemons {flag ? 'Page' : 'Details'}</h1>
      <DarkModeToggle/>
      {/* <button className='btn btn-secondary' onClick={() => { setIsDarkMode(!isDarkMode) }}>Change</button> */}
    </div>
  )
}

export default Navbar
