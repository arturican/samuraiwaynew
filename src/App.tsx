import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

const App = () => (
    <div className={s.appWrapper}>
        <Header />
        <Navigation/>
        <div className={s.content}>
            <Dialogs/>
        </div>

        {/*<Profile/>*/}
    </div>
);

export default App;
