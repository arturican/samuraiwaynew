import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {addPost, state, updateNewPostText} from "../../state/state";
import {Dialogs} from "../Dialogs/Dialogs";
import {Error404} from "../Error404/Error404";

export const Roadmap = () => {
    return (
         <Routes>
             <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
             <Route path={'/profile'} element={<Profile post={state.pageProfile.post} addPost={addPost} newPostText={state.pageProfile.newPostText} updateNewPostText={updateNewPostText}/>}/>
             <Route path={'/dialogs'} element={<Dialogs message={state.message}/>}/>
             <Route path={'/*'} element={<Navigate to={'/error404'}/>}/>
             <Route path={'/error404'} element={<Error404/>}/>
         </Routes>

    );
};

