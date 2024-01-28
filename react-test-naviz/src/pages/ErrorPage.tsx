import React, { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = (): ReactElement => {
  const navigate = useNavigate()
  return (
        <div className="text-3xl font-bold text-center text-red-600">
            <p className="mx-2 mt-5">Error 404: Page not found!</p>
            <button
                className="mt-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                onClick={() => {
                  navigate('/pokemons')
                }}>Home
            </button>
        </div>
  )
}

export default ErrorPage
