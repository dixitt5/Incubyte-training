// @flow
import ReactContext from "./utils/globalStates.ts"
import {useState} from "react";
import {Home} from "./pages/home.tsx";
import {Style} from "./pages/Style.tsx";


export const App = () => {
    const [route, setRoute] = useState<string>("Home")
    let routeComponent;
    if(route === "Home") {
        routeComponent = <Home />;
    } else {
        routeComponent = <Style />;
    }
    return (
        <div>
            <ReactContext.Provider value={{ route: route, setRoute: setRoute}}>
                {routeComponent}
            </ReactContext.Provider>
        </div>
    );
};
