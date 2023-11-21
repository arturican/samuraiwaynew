import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import {MyPost} from "./components/Profile/MyPost";

const App = () => (
    <div className={s.appWrapper}>
        <Header />
        <Navigation/>
        <MyPost/>
    </div>
);

export default App;
