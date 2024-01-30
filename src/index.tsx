import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {store} from "./state/redux-store";
import {App} from "./App";


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

store.subscribe(rerenderEntireTree)
