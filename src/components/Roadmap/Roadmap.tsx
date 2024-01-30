import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Profile} from "../Profile/Profile";

import {Dialogs} from "../Dialogs/Dialogs";
import {Error404} from "../Error404/Error404";
import {store} from "../../state/redux-store";

export const Roadmap = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
            <Route path={'/profile'} element={<Profile post={store.getState().pageProfile.post}
                                                       dispatch={store.dispatch.bind(store)}
                                                       newPostText={store.getState().pageProfile.newPostText}
            />}/>
            <Route path={'/dialogs'} element={<Dialogs message={store.getState().pageDialogs.message}
                                                       dispatch={store.dispatch.bind(store)}
                                                       newMessageText={store.getState().pageDialogs.newMessageText}
            />}/>
            <Route path={'/*'} element={<Navigate to={'/error404'}/>}/>
            <Route path={'/error404'} element={<Error404/>}/>
        </Routes>

    );
};

