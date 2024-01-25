import React, {useContext, useState} from "react";
import RouteContext from "../utils/globalStates.ts"

export const Style = () => {

    // Toggle function to switch between light and dark mode
    const {darkMode, setDarkMode} = useContext(RouteContext);
    const containerClass = `container my-5 p-5 border rounded-3 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`;
    return (
        <div className={containerClass}>
            <h2 className="mb-3">Dark mode</h2>
            <p>This is a simple div with a minimalist design using Bootstrap. Toggle the color mode to switch
                themes.</p>
            <button className="btn btn-outline-secondary" onClick={() => setDarkMode(!darkMode)}>Toggle Color Mode</button>
        </div>
    );
};
