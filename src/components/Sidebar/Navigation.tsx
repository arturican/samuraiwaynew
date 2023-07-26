import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => (
    <nav className={s.nav}>
        <ul>
            <li>
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
    </nav>
);

export default Navigation;