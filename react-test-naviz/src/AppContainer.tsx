import React, { type ReactElement, useState } from 'react'
import DarkModeContext from './contexts/DarkModeContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/Routes'

// import Header from './Header'

function AppContainer (): ReactElement {
  // const user = new User("Aditya", 0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  return (
        <>
            {/* <Header name={'Aditya'} age={20} /> */}
            {/* <Header name={'Naviz'} age={20} /> */}
            <DarkModeContext.Provider
                value={{ isDarkMode, setIsDarkMode }}
            >
                <RouterProvider router={router}/>
            </DarkModeContext.Provider>
        </>
  )
}

export default AppContainer
