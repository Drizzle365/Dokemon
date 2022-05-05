import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from "./page";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Index/>
        </BrowserRouter>
    </React.StrictMode>
);


