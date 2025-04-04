import React from "react";
import ReactDOM from "react-dom/client";
import BoundingBox from "../src"; // Import your library component

const App = () => {
    return (
        <div>
            <h1>React Library Playground</h1>
            <BoundingBox src="x" />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
