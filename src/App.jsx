/* eslint-disable no-undef */
import React from "react";
import MainPage from "./Components/MainPage/MainPage";
import ChangePage from "./Components/ChangePage/ChangePage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
    const [newData, setNewData] = useState();
    const [newUserData, setNewUserData] = useState();

    const saveData = (data) => {
        setNewData(data);
        console.log(data);
    };
    const saveUserData = (data) => {
        console.log(data);
        if (data !== undefined) {
            setNewUserData(data);
        }
    };
    useEffect(() => {
        console.log(newData);
        console.log(newUserData);
    }, [newData, newUserData]);

    
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage
                            saveData={saveData}
                            saveUserData={saveUserData}
                        />
                    }
                />
                <Route
                    path="/Change/:productId"
                    element={
                        <ChangePage data={newData} userData={newUserData} />
                    }
                />
            </Routes>
        </div>
    );
}
