import { useState } from "react"

const Pagination = () => {
    const [pages, setPages] = useState<number[]>([1, 2, 3])

    const incrementPage = (currentPages: number[]) => {
        currentPages.push(currentPages.length + (currentPages.shift() ?? 1))
        setPages(currentPages)
        console.log(pages);
        
    }
    const decrementPage = (currentPages: number[]) => {
        if (currentPages[0] > 0) {
            currentPages.unshift(-(currentPages.length - (currentPages.pop() ?? 0)))
            setPages(currentPages)
        }
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="list-none mb-6 flex">
                <li>
                    <a onClick={() => decrementPage(pages)} className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                        Previous
                    </a>
                </li>
                <li>
                    <button type="button" className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                        {pages[0]}
                    </button>
                </li>
                <li aria-current="page">
                    <a className="relative block rounded bg-white px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300">
                        {pages[1]}
                        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                            (current)
                        </span>
                    </a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                        {pages[2]}
                    </a>
                </li>
                <li>
                    <input type="button" value={"Next"} onClick={() => incrementPage(pages)} className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" />
                    {/* Next
                    </input> */}
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
