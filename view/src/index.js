import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from "./page";
// noinspection ES6CheckImport
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Jump from "./jump";
import Create from "./page/create";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/jump" element={<Jump/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
    </BrowserRouter>
</React.StrictMode>);


