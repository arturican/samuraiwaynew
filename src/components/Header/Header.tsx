import React from 'react';
import s from  './Header.module.css'
const Header = () => (
    <header className={s.header}>
        <img className={s.logo} src='https://www.logodesign.net/images/nature-logo.png' alt='Logo'/>
        <ul className={s.ul}>
            <li className={s.li}>
                <a href='#'>Главная</a>
            </li>
            <li>
                <a href='#'>О нас</a>
            </li>
            <li>
                <a href='#'>Услуги</a>
            </li>
            <li>
                <a href='#'>Контакты</a>
            </li>
        </ul>
    </header>
);

export default Header;