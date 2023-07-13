import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import Profile from "./components/Profile/Profile";

const App = () => (
    <div className='app-wrapper'>
        <Header />
        <Navigation/>
        <Profile/>
    </div>
);

export default App;
