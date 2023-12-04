import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes, Navigate} from 'react-router-dom'
import {Error404} from "./components/Error404/Error404";


const App = () => (
    <div className={s.appWrapper}>
        <Header/>
        <Navigation/>
        <div className={s.appWrapperContent}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                <Route path={'/dialogs'} element={<Dialogs/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    </div>
);

export default App;
