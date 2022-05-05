import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from "./page";
// noinspection ES6CheckImport
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


