import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from "./routes/router";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
export const rerenderEntireTree = () => {
    root.render(<RouterProvider router={router} />);
};

rerenderEntireTree()
