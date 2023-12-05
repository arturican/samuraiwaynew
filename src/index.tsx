import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router";

ReactDOM.render(
    <RouterProvider router={router}/>, document.getElementById('root')
);