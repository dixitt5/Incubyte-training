import {useState} from "react";

export const Style = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // Toggle function to switch between light and dark mode
    const toggleColorMode = () => {
        setDarkMode(!darkMode);
    };
    const containerClass = `container my-5 p-5 border rounded-3 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`;
    return (
        <div className={containerClass}>
            <h2 className="mb-3">Minimalist Design</h2>
            <p>This is a simple div with a minimalist design using Bootstrap. Toggle the color mode to switch
                themes.</p>
            <button className="btn btn-outline-secondary" onClick={toggleColorMode}>Toggle Color Mode</button>
        </div>
    );
};
