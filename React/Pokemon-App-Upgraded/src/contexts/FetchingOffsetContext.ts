import { createContext } from "react";

interface FetchingOffsetContextProps {
    fetchingOffset: number
    setFetchingOffset: (fetchingOffset: number) => void
}

export default createContext<FetchingOffsetContextProps>({
    fetchingOffset: 0,
    setFetchingOffset: () => {}
})