
import * as React from "react";
import * as ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Hello, JSX</h1>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);


