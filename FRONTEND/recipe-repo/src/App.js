import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./shared/Navigation/NavBar";
import Home from "./pages/Home";
import User from "./pages/User";
import Recipe from "./pages/Recipe";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="./" element={<Home />} />
                <Route path="./recipes" element={<Recipe />}/>
                <Route path="./Users" element={<User />}/>
            </Routes>
        </Router>
    );
}

export default App;
