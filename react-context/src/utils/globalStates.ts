import {createContext} from "react";

interface RouteContextProps {
    route: string,
    setRoute: (route: string) => void
    setDarkMode:(isDarkMode: boolean) => void,
    darkMode: boolean
}

export default createContext<RouteContextProps>({
    route: '',
    darkMode: false,
    setRoute: () => {},
    setDarkMode: () => {
    },
})

