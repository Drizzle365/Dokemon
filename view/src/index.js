import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// noinspection ES6CheckImport
import {BrowserRouter} from "react-router-dom";
import Router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </React.StrictMode>
);


