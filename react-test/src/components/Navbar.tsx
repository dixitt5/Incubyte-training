import { type ReactElement } from 'react'
import DarkModeToggle from './DarkModeToggle'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ flag }: { flag: boolean }): ReactElement => {
  const navigate = useNavigate()
  const handleNavigation = (): void => {
    try {
      navigate('/pokemons')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="flex flex-row justify-between font-semibold dark:bg-green-800 dark:text-white bg-blue-400 text-black p-4 items-center">
      <h1 onClick={handleNavigation} className="text-4xl cursor-pointer">Pokemons {flag ? 'Page' : 'Details'}</h1>
      <DarkModeToggle/>
      {/* <button className='btn btn-secondary' onClick={() => { setIsDarkMode(!isDarkMode) }}>Change</button> */}
    </div>
  )
}

export default Navbar
