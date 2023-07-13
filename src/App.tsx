import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src={'https://www.logodesign.net/images/nature-logo.png'}/>
            </header>
            <nav className='nav'>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
            <div className='content'>
                <img src={'https://avatars.mds.yandex.net/get-pdb/1679978/51ef12d8-f05b-449f-8106-06e6e156e5aa/s1200'}/>
                <div>Main content</div>
                <div>Post</div>
                <div>NewPost</div>
            </div>
        </div>
    );
}

export default App;
