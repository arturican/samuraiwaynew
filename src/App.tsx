import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import {Roadmap} from "./components/Roadmap/Roadmap";


export const App = () => (
    <div className={s.appWrapper}>
        <Header/>
        <Navigation/>
        <div className={s.appWrapperContent}>
            <Roadmap/>
        </div>
    </div>
);


