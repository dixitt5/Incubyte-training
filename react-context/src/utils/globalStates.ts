import {createContext} from "react";

interface RouteContextProps {
    route: string,
    setRoute: (route: string) => void
}

export default createContext<RouteContextProps>({
    route: '',
    setRoute: () => {}
})
