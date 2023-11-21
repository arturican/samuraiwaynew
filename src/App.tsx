import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation";
import Mypost from "./components/Profile/Mypost";

const App = () => (
    <div className='app-wrapper'>
        <Header />
        <Navigation/>
        <Mypost/>
    </div>
);

export default App;
