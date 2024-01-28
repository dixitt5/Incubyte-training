import React, { type ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchPokemon = (): ReactElement => {
  const [searchParameter, setSearchParameter] = useState<string>('')
  const navigate = useNavigate()

  return (
        <div className="w-[75%] md:w-[50%] m-2 mx-auto">
            <div className="flex">
                <div className="relative w-full">

                    <input type="search" id="default-search"
                           className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Enter Pokemon Name or ID..."
                           onChange={(e) => {
                             setSearchParameter(e.target.value.toString())
                           }}
                           required/>
                    <button type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                              if (searchParameter !== '') {
                                navigate(`/pokemons/search/${searchParameter}`)
                              }
                            }}
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default SearchPokemon
