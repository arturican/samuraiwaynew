import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import MyPost from "./components/Profile/MyPost";

const App = () => (
    <div className='app-wrapper'>
        <Header />
        <Navigation/>
        <MyPost/>
    </div>
);

export default App;
