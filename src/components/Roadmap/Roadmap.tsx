import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {store} from "../../state/state";
import {Dialogs} from "../Dialogs/Dialogs";
import {Error404} from "../Error404/Error404";

export const Roadmap = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
            <Route path={'/profile'} element={<Profile post={store.getState().pageProfile.post}
                                                       addPost={store.addPost.bind(store)}
                                                       newPostText={store.getState().pageProfile.newPostText}
                                                       updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
            <Route path={'/dialogs'} element={<Dialogs message={store.getState().message}/>}/>
            <Route path={'/*'} element={<Navigate to={'/error404'}/>}/>
            <Route path={'/error404'} element={<Error404/>}/>
        </Routes>

    );
};

