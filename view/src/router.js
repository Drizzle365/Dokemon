import React from 'react';
import Index from "./page";
// noinspection ES6CheckImport
import {Routes, Route, useNavigate} from "react-router-dom";
import Create from "./page/create";
import Game from "./page/game";

const Router = () => {
    const navigate = useNavigate()
    return (
        <Routes>
            <Route path="/" element={<Index navigate={navigate}/>}/>
            <Route path="/create" element={<Create navigate={navigate}/>}/>
            <Route path="/game" element={<Game navigate={navigate}/>}/>
        </Routes>
    )
}

export default Router

