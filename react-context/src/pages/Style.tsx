
export const Style = () => {
    return (
        <div>
            <div className="container my-5 p-5 border rounded-3 bg-light text-dark" id="minimalistDiv" data-bs-theme="light">
                <h2 className="mb-3">Dark Mode</h2>
                <p>This is a simple div with a minimalist design using Bootstrap. Toggle the color mode to switch
                    themes.</p>
                <button className="btn btn-outline-secondary" onClick="toggleColorMode()">Toggle Color Mode</button>
            </div>

        </div>
    );
};
