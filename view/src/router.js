import React from 'react';
import Index from "./page";
// noinspection ES6CheckImport
import {Routes, Route, useNavigate} from "react-router-dom";
import Create from "./page/create";
import Game from "./page/game";
import Map from "./page/map";
import Npc from "./page/npc";

const Router = () => {
    const navigate = useNavigate()
    return (
        <Routes>
            <Route path="/" element={<Index navigate={navigate}/>}/>
            <Route path="/create" element={<Create navigate={navigate}/>}/>
            <Route path="/game" element={<Game navigate={navigate}/>}>
                <Route path="map" element={<Map/>}></Route>
                <Route path="npc" element={<Npc/>}></Route>
            </Route>
        </Routes>
    )
}

export default Router

