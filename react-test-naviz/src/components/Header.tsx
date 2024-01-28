import React, { useEffect, useState } from 'react'
import { type ReactElement } from 'react'

export function Header ({ flag }: { flag: boolean }): ReactElement {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    setIsDarkMode(() => localStorage.getItem('theme') === 'dark')
  }, [])

  function handleDarkMode (): void {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    setIsDarkMode(() => localStorage.getItem('theme') === 'dark')
  }

  return (
        <>
            <header className="bg-green-600 text-white py-4 pr-2 flex items-center justify-between dark:bg-gray-700">
                <div className="text-center mx-auto">
                    <h1 className="text-2xl font-bold">Pokemon {flag ? 'Home' : 'Details'}</h1>
                </div>
                <div className="text-right pt-1">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"
                               checked={isDarkMode} onChange={handleDarkMode}/>
                        <div
                            className="w-9 h-5 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-white-800 rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:after:bg-gray-800 dark:border-gray-600 peer-checked:bg-gray-200"></div>
                    </label>
                </div>
            </header>
        </>
  )
}
