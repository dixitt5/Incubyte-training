// @flow
import {useContext} from "react";
import RouteContext from "../utils/globalStates.ts"

export const Button = () => {


    const {route, setRoute} = useContext(RouteContext)
    const setButton = () => {
        if(route == "Home") setRoute("About");
        else setRoute("Home")
    }
    return (
        <div>
            <button onClick={() => setButton()}>click me</button>
        </div>
    );
};
