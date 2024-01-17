import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {state, StateProps, subscribe} from "./state/state";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
export const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
};
rerenderEntireTree()


subscribe(rerenderEntireTree)
