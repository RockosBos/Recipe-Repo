import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./shared/Navigation/NavBar";
import Home from "./pages/Home";
import User from "./pages/User";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";


function App() {
    const [token, setToken] = useState();

    if(!token) {
      return <Login setToken={setToken} />
    }

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipe />}/>
                <Route path="/Users" element={<User />}/>
				<Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
    );
}

export default App;
