// noinspection ES6CheckImport

import React from 'react';
import Index from "./page";
import {Routes, Route} from "react-router-dom";
import Create from "./page/create";
import Game from "./page/game";
import Map from "./page/map";
import Npc from "./page/npc";
import Announcement from "./page/announcement";

const Router = () => {

    return (<Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/game" element={<Game/>}>
            <Route path="map" element={<Map/>}></Route>
            <Route path="npc/:npcName" element={<Npc/>}></Route>
            <Route path="announcement" element={<Announcement/>}></Route>
        </Route>
    </Routes>)
}

export default Router

