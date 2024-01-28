import React, { type ReactElement, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/Routes'

// import DarkModeContext from './contexts/DarkModeContext'

function AppContainer (): ReactElement {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])
  return (
        <div className="h-full dark:bg-gray-900">
            <RouterProvider router={router}/>
        </div>
  )
}

export default AppContainer
