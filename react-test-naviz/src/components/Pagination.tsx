import { type ReactElement } from 'react'

interface IPaginationProps {
  itemsPerPage: number
  currentPage: number
  setCurrentPage: (currentPage: number | ((currentPage: number) => number)) => void
  totalItems: number
}

const Pagination = (props: IPaginationProps): ReactElement => {
  const {
    itemsPerPage,
    currentPage,
    setCurrentPage,
    totalItems
  } = props
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const items: ReactElement[] = []
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  for (let i = currentPage - 2; i <= (currentPage + 2); i++) {
    if (i >= 1 && i <= totalPages) {
      items.push(
                <li key={i}>
                    <button onClick={() => {
                      setCurrentPage(i)
                    }}
                            className={'flex items-center justify-center px-2 h-7 sm:px-3 sm:h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-green-500 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' + (currentPage === i ? ' bg-green-500 text-white dark:bg-gray-800' : '')}> {i}
                    </button>
                </li>
      )
    }
  }

  function handlePrevious (): void {
    if (isFirstPage) {
      setCurrentPage(1)
    } else {
      setCurrentPage((currentPage: number) => currentPage - 1)
    }
  }

  function handleNext (): void {
    if (isLastPage) {
      setCurrentPage(totalPages)
    } else {
      setCurrentPage((currentPage: number) => currentPage + 1)
    }
  }

  return (
        <div className="m-3 text-center">
            <ul className="inline-flex -space-x-px text-xs sm:text-sm">
                <li>
                    <button onClick={handlePrevious}
                            disabled={isFirstPage}
                            className="flex items-center justify-center px-2 h-7 sm:px-3 sm:h-8 ms-0  leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                    </button>
                </li>
                {items}
                <li>
                    <button onClick={handleNext}
                            disabled={isLastPage}
                            className="flex items-center justify-center px-2 h-7 sm:px-3 sm:h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </button>
                </li>
            </ul>
        </div>
  )
}

export default Pagination
