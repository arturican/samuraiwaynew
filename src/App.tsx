import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import {Outlet} from 'react-router-dom'



const App = () => (
    <div className={s.appWrapper}>
        <Header/>
        <Navigation/>
        <div className={s.appWrapperContent}>
            <h1>Hello, world!</h1>
            <Outlet/>
        </div>
    </div>
);

export default App;
