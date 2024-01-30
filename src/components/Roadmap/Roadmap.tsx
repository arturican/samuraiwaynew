import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Error404} from "../Error404/Error404";
import {store} from "../../state/redux-store";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {ProfileContainer} from "../Profile/ProfileContainer";


export const Roadmap = () => {
    console.log(store)
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
            <Route path={'/profile'} element={<ProfileContainer/>}/>
            <Route path={'/dialogs'} element={<DialogsContainer/>}/>
            <Route path={'/*'} element={<Navigate to={'/error404'}/>}/>
            <Route path={'/error404'} element={<Error404/>}/>
        </Routes>

    );
};

