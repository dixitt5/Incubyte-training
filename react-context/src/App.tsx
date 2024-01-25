// @flow
import ReactContext from "./utils/globalStates.ts"
import React, {useContext, useState} from "react";
import {Home} from "./pages/home.tsx";
import {Style} from "./pages/Style.tsx";
import RouteContext from "./utils/globalStates";


export const App = () => {
    const [route, setRoute] = useState<string>("Home")
    const [darkMode, setDarkMode] = useState<boolean>(false);

    let routeComponent;
    if (route === "Home") {
        routeComponent = <Home/>;
    } else {
        routeComponent = <Style/>;
    }
    return (
        <div>
            <ReactContext.Provider value={{route: route, setRoute: setRoute, darkMode: darkMode, setDarkMode : setDarkMode}}>
                {routeComponent}
            </ReactContext.Provider>
        </div>
    );
};
