import React from "react";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer.page";
import Home from "./pages/Home.page";

function App() {
    return (
        <div className="App">
            <Home />
            <Customizer />
            <Canvas />
        </div>
    );
}

export default App;
