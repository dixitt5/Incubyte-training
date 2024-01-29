import { type ReactElement } from 'react'

const Search = (): ReactElement => {
  return (
    <div>
    <div className="flex flex-col items-center text-light h-[100%] dark:bg-gray-700 bg-white justify-center">
      <h1 className='mt-6 text-4xl font-bold'>Pokemon Search</h1>
      <div className="flex flex-col w-[35%] sm:flex-col sm:justify-center sm:items-center md:flex-col md:justify-end lg:flex-row lg:justify-end lg:items-center lg:gap-4 xl:flex-row xl:justify-around justify-around rounded-xl p-5 mx-2 my-6 shadow-xl bg-white dark:bg-gray-300 text-black">
        <div className='border border-black flex flex-row gap-3'>
        <input type='text px-4'/>
        <button>Search</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Search
