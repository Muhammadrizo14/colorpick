import React, {useState, useEffect} from 'react';
import './App.css';
import Col from "./Components/Col";
import { Routes, Route } from "react-router-dom";
import Colors from "./Components/Colors";
import Color from "./Components/Color.jsx";


function App() {

    return (
        <div>
            <Routes>
                {/*  Home page  */}
                <Route path={"/"} element={<Colors />} />

                {/* Profle page */}
                <Route path={"/color/:color"} element={<Color />} />

            </Routes>

        </div>
    );
}

export default App;
