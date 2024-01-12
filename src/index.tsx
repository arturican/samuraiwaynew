import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from "./routes/router";
import {state, StateProps, subscriber} from "./state/state";

export const rerenderEntireTree = (state: StateProps) => {
    const rootElement = document.getElementById('root');

    const root = createRoot(rootElement!);

    root.render(<RouterProvider router={router} />);
};

rerenderEntireTree(state)
subscriber(rerenderEntireTree)