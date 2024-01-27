import { type ReactElement } from 'react'
import DarkModeToggle from './DarkModeToggle'

const Navbar = ({ flag }: { flag: boolean }): ReactElement => {
  return (
    <div className="flex flex-row justify-between font-semibold dark:bg-green-800 dark:text-white bg-blue-400 text-black p-4 items-center">
      <h1 className="text-4xl">Pokemons {flag ? 'Page' : 'Details'}</h1>
      <DarkModeToggle/>
      {/* <button className='btn btn-secondary' onClick={() => { setIsDarkMode(!isDarkMode) }}>Change</button> */}
    </div>
  )
}

export default Navbar
