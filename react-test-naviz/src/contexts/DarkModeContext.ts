import { createContext } from 'react'

interface ContextParameters {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}

export default createContext<ContextParameters>({
  isDarkMode: false,
  setIsDarkMode: () => {}
})
