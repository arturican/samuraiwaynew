import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <div className={s.appWrapper}>
            <Header/>
            <Navigation/>
            <div className={s.content}>
                <Routes>
                    <Route path={'/'} element={<Profile />} />
                    <Route path={'/dialogs'} element={<Dialogs />}/>
                    <Route path={'/profile'} element={<Profile />}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>


);

export default App;
