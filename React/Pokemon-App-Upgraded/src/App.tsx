import { useState, type ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/Routes'
import FetchingOffsetContext from './contexts/FetchingOffsetContext'
import Pagination from './components/Pagination'

const App = (): ReactElement => {
  const [fetchingOffset, setFetchingOffset] = useState<number>(0)
  return (
    <>
      <FetchingOffsetContext.Provider value={{ fetchingOffset, setFetchingOffset }} >
        <RouterProvider router={routes} />
        <Pagination />
      </FetchingOffsetContext.Provider>
    </>
  )
}

export default App
