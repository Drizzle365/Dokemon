// noinspection ES6CheckImport

import React from 'react';
import Index from "./page";
import {Routes, Route} from "react-router-dom";
import Create from "./page/create";
import Game from "./page/game";
import Map from "./page/map";
import Npc from "./page/npc";

const Router = () => {

    return (<Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/game" element={<Game/>}>
            <Route path="map" element={<Map/>}></Route>
            <Route path="npc" element={<Npc/>}></Route>
        </Route>
    </Routes>)
}

export default Router

