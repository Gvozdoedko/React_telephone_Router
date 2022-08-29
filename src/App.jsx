/* eslint-disable no-undef */
import React from "react";
import MainPage from "./Components/MainPage/MainPage";
import ChangePage from './Components/ChangePage/ChangePage'
import "./App.scss";
import { Routes, Route} from 'react-router-dom';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Change/:productId" element={<ChangePage />} />
            </Routes>
            
        </div>
    );
}
