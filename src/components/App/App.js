import "./App.css";
import React from "react";
import Agents from "../Agents/Agents";
import Chart from "../Chart/Chart";
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Agents/>}/>
                <Route path='diagram' element={<Chart/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
