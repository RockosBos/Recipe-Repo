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
import Contact from "./pages/Contact";
import Recipe from "./pages/Recipe";
import OpenAI from "./pages/OpenAI";


function App() {
    /*const [token, setToken] = useState();

    if(!token) {
      return <Login setToken={setToken} />
    }*/

	const [token, setToken] = useState("");

    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home setToken={setToken} />} />
                <Route path="/recipes" element={<Recipe token={token} />}/>
                <Route path="/contact" element={<Contact />}/>
				<Route path="/openai" element={<OpenAI />}/>
            </Routes>
        </Router>
    );
}

export default App;
